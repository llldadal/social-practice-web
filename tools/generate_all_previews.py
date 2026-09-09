"""Generate responsive WebP previews while keeping every original untouched."""

from pathlib import Path

from PIL import Image, ImageOps


PROJECT_ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = PROJECT_ROOT / "资源文件"
TARGET_WIDTHS = (480, 960, 1600)
SOURCE_SUFFIXES = {".jpg", ".jpeg", ".png"}
PREVIEW_DIRECTORY = "响应式预览"

# The repository contains trusted local photographs above Pillow's generic limit.
Image.MAX_IMAGE_PIXELS = None


def resize_to_width(image: Image.Image, target_width: int) -> Image.Image:
    if image.width <= target_width:
        return image.copy()

    target_height = max(1, round(image.height * target_width / image.width))
    return image.resize((target_width, target_height), Image.Resampling.LANCZOS)


def preview_path(source: Path, width: int) -> Path:
    return source.parent / PREVIEW_DIRECTORY / f"{source.stem}-{width}.webp"


def previews_are_current(source: Path) -> bool:
    source_timestamp = source.stat().st_mtime_ns
    return all(
        (output := preview_path(source, width)).is_file()
        and output.stat().st_mtime_ns >= source_timestamp
        for width in TARGET_WIDTHS
    )


def generate_previews(source: Path) -> int:
    if previews_are_current(source):
        return 0

    output_directory = source.parent / PREVIEW_DIRECTORY
    output_directory.mkdir(parents=True, exist_ok=True)

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


def source_images() -> list[Path]:
    return sorted(
        path
        for path in SOURCE_ROOT.rglob("*")
        if path.is_file()
        and path.suffix.lower() in SOURCE_SUFFIXES
        and PREVIEW_DIRECTORY not in path.parts
        and "缩略图" not in path.parts
    )


def main() -> None:
    sources = source_images()
    generated = sum(generate_previews(source) for source in sources)
    print(f"Generated {generated} WebP previews for {len(sources)} original images")


if __name__ == "__main__":
    main()
