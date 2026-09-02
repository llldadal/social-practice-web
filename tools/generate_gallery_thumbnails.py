"""Generate lightweight responsive previews for gallery.html.

The originals remain untouched and continue to be linked from the gallery cards.
Run from any directory with: python tools/generate_gallery_thumbnails.py
"""

from pathlib import Path

from PIL import Image, ImageOps


PROJECT_ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = PROJECT_ROOT / "资源文件" / "市区 遵义会议会址"
OUTPUT_DIR = SOURCE_DIR / "缩略图"
SKIPPED_NUMBERS = {14, 22, 29, 41}
TARGET_WIDTHS = (480, 960)

# These are trusted local project assets. Some originals intentionally exceed
# Pillow's generic decompression-bomb threshold (the largest is about 200 MP).
Image.MAX_IMAGE_PIXELS = None


def source_path(image_number: int) -> Path:
    suffix = " 参会人员浮雕" if image_number == 43 else ""
    return SOURCE_DIR / f"市区 遵义会议会址{image_number}{suffix}.jpg"


def resize_to_width(image: Image.Image, target_width: int) -> Image.Image:
    if image.width <= target_width:
        return image.copy()

    target_height = max(1, round(image.height * target_width / image.width))
    return image.resize((target_width, target_height), Image.Resampling.LANCZOS)


def generate_previews(image_number: int) -> None:
    source = source_path(image_number)
    if not source.exists():
        raise FileNotFoundError(f"Missing gallery source: {source}")

    with Image.open(source) as opened:
        # JPEG draft decoding avoids allocating a full-resolution RGB buffer for
        # the very large phone photos before they are reduced to preview size.
        opened.draft("RGB", (max(TARGET_WIDTHS), max(TARGET_WIDTHS)))
        normalized = ImageOps.exif_transpose(opened)
        if normalized.mode != "RGB":
            normalized = normalized.convert("RGB")

        largest = resize_to_width(normalized, max(TARGET_WIDTHS))
        for width in sorted(TARGET_WIDTHS, reverse=True):
            preview = largest if width == largest.width else resize_to_width(largest, width)
            output = OUTPUT_DIR / f"gallery-{image_number}-{width}.webp"
            preview.save(output, "WEBP", quality=80, method=4)
            if preview is not largest:
                preview.close()

        largest.close()


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    generated = 0

    for image_number in range(1, 53):
        if image_number in SKIPPED_NUMBERS:
            continue
        generate_previews(image_number)
        generated += len(TARGET_WIDTHS)

    print(f"Generated {generated} responsive previews in {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
