"""Render the Rayzk Discord sharing banner with the real Inter typeface.

Run with Python and Pillow. The font is downloaded from Google Fonts' Inter
distribution, pinned by SHA-256, and used only while generating the PNG.
"""

from __future__ import annotations

import hashlib
import math
import tempfile
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "social" / "discord-preview.png"
FONT_URL = (
    "https://raw.githubusercontent.com/google/fonts/main/ofl/inter/"
    "Inter%5Bopsz%2Cwght%5D.ttf"
)
FONT_SHA256 = "29160a80ff49ddcab2c97711247e08b1fab27a484a329ce8b813d820dc559031"
FONT_PATH = Path(tempfile.gettempdir()) / "rayzk-inter-variable.ttf"

WIDTH, HEIGHT, SCALE = 1600, 900, 2
INK = (10, 10, 10)
PAPER = (250, 250, 250)
FOREST = (15, 61, 46)
EMERALD = (52, 211, 153)


def get_font_path() -> Path:
    if not FONT_PATH.exists() or hashlib.sha256(FONT_PATH.read_bytes()).hexdigest() != FONT_SHA256:
        data = urllib.request.urlopen(FONT_URL, timeout=30).read()
        if hashlib.sha256(data).hexdigest() != FONT_SHA256:
            raise ValueError("The downloaded Inter font does not match the pinned version")
        FONT_PATH.write_bytes(data)
    return FONT_PATH


def font(size: int, weight: int) -> ImageFont.FreeTypeFont:
    result = ImageFont.truetype(str(get_font_path()), size * SCALE)
    result.set_variation_by_axes([32, weight])
    return result


def geometry(draw: ImageDraw.ImageDraw) -> None:
    """A few translucent wireframe cubes, subordinate to the wordmark."""

    def cube(cx: int, cy: int, radius: int, alpha: int) -> None:
        top = (cx, cy - radius)
        left = (cx - radius, cy - radius // 2)
        center = (cx, cy)
        right = (cx + radius, cy - radius // 2)
        lower_left = (cx - radius, cy + radius // 2)
        bottom = (cx, cy + radius)
        lower_right = (cx + radius, cy + radius // 2)
        coords = lambda points: [(x * SCALE, y * SCALE) for x, y in points]
        line = (104, 172, 138, alpha)
        fill = (42, 118, 84, max(4, alpha // 6))
        draw.polygon(coords([top, left, center, right]), fill=fill)
        draw.polygon(coords([left, lower_left, bottom, center]), fill=fill)
        draw.line(coords([top, left, lower_left, bottom, lower_right, right, top]), fill=line, width=2 * SCALE, joint="curve")
        draw.line(coords([left, center, right]), fill=line, width=2 * SCALE, joint="curve")
        draw.line(coords([center, bottom]), fill=line, width=2 * SCALE)

    cube(1170, 414, 174, 49)
    cube(1392, 545, 116, 40)
    cube(1072, 640, 69, 28)


def main() -> None:
    small = Image.new("RGB", (WIDTH // 4, HEIGHT // 4))
    px = small.load()
    for y in range(small.height):
        for x in range(small.width):
            dx = (x * 4 - 1260) / 670
            dy = (y * 4 - 490) / 610
            glow = math.exp(-2.3 * (dx * dx + dy * dy))
            px[x, y] = (
                int(INK[0] + 5 * glow),
                int(INK[1] + 20 * glow),
                int(INK[2] + 13 * glow),
            )

    canvas = small.resize((WIDTH * SCALE, HEIGHT * SCALE), Image.Resampling.BICUBIC).convert("RGBA")
    design = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(design)
    geometry(draw)

    # A fine edge and one restrained rule keep the large dark field structured.
    draw.line([(130 * SCALE, 128 * SCALE), (1470 * SCALE, 128 * SCALE)], fill=(250, 250, 250, 22), width=SCALE)
    draw.line([(132 * SCALE, 681 * SCALE), (662 * SCALE, 681 * SCALE)], fill=(250, 250, 250, 48), width=SCALE)
    draw.rounded_rectangle(
        (132 * SCALE, 199 * SCALE, 143 * SCALE, 210 * SCALE),
        radius=2 * SCALE,
        fill=EMERALD + (255,),
    )

    secondary = font(30, 600)
    draw.text(
        (165 * SCALE, 188 * SCALE),
        "CONFIGURATEUR MINECRAFT · FREELANCE",
        font=secondary,
        fill=(177, 191, 184, 255),
        anchor="lt",
        stroke_width=0,
    )

    wordmark = font(214, 800)
    label = "Rayzk"
    x, baseline = 118 * SCALE, 451 * SCALE
    draw.text((x, baseline), label, font=wordmark, fill=PAPER + (255,), anchor="ls")
    label_width = draw.textlength(label, font=wordmark)
    draw.text((round(x + label_width - 5 * SCALE), baseline), ".", font=wordmark, fill=EMERALD + (255,), anchor="ls")

    signature = font(35, 500)
    draw.text((130 * SCALE, 709 * SCALE), "Depuis 2022", font=signature, fill=(185, 201, 191, 255), anchor="lt")

    canvas = Image.alpha_composite(canvas, design).convert("RGB")
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    canvas.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS).save(OUTPUT, format="PNG", optimize=True)
    print(OUTPUT)


if __name__ == "__main__":
    main()
