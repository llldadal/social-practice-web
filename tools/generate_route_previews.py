"""Generate responsive WebP previews for every non-empty route image in detail.js."""

import re
from pathlib import Path

from PIL import Image, ImageOps


PROJECT_ROOT = Path(__file__).resolve().parents[1]
DETAIL_SCRIPT = PROJECT_ROOT / "detail.js"
TARGET_WIDTHS = (480, 960, 1600)
IMAGE_SOURCE_PATTERN = re.compile(r'<img\s+[^>]*src="([^"]+)"')

# The project contains trusted local photographs above Pillow's generic limit.
Image.MAX_IMAGE_PIXELS = None


def resize_to_width(image: Image.Image, target_width: int) -> Image.Image:
    if image.width <= target_width:
        return image.copy()

    target_height = max(1, round(image.height * target_width / image.width))
    return image.resize((target_width, target_height), Image.Resampling.LANCZOS)


def preview_path(source: Path, width: int) -> Path:
    return source.parent / "响应式预览" / f"{source.stem}-{width}.webp"


def generate_previews(source: Path) -> int:
    output_dir = source.parent / "响应式预览"
    output_dir.mkdir(parents=True, exist_ok=True)

    with Image.open(source) as opened:
        opened.draft("RGB", (max(TARGET_WIDTHS), max(TARGET_WIDTHS)))
        normalized = ImageOps.exif_transpose(opened)
        if normalized.mode != "RGB":
            normalized = normalized.convert("RGB")

        largest = resize_to_width(normalized, max(TARGET_WIDTHS))
        for width in sorted(TARGET_WIDTHS, reverse=True):
            preview = largest if width == largest.width else resize_to_width(largest, width)
            preview.save(preview_path(source, width), "WEBP", quality=81, method=4)
            if preview is not largest:
                preview.close()
        largest.close()

    return len(TARGET_WIDTHS)


def main() -> None:
    script = DETAIL_SCRIPT.read_text(encoding="utf-8")
    relative_sources = sorted(set(IMAGE_SOURCE_PATTERN.findall(script)))
    generated = 0

    for relative_source in relative_sources:
        source = PROJECT_ROOT / Path(relative_source)
        if not source.is_file():
            raise FileNotFoundError(f"Missing route image: {source}")
        generated += generate_previews(source)

    print(f"Generated {generated} route previews for {len(relative_sources)} source images")


if __name__ == "__main__":
    main()
