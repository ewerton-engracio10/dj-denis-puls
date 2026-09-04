import galleryPart01 from "./gallery-data/part01";
import galleryPart02 from "./gallery-data/part02";
import galleryPart03 from "./gallery-data/part03";
import galleryPart04 from "./gallery-data/part04";
import galleryPart05 from "./gallery-data/part05";
import galleryPart06 from "./gallery-data/part06";
import galleryPart07 from "./gallery-data/part07";
import galleryPart08 from "./gallery-data/part08";
import galleryPart09 from "./gallery-data/part09";

export const gallerySprite = `data:image/webp;base64,${galleryPart01}${galleryPart02}${galleryPart03}${galleryPart04}${galleryPart05}${galleryPart06}${galleryPart07}${galleryPart08}${galleryPart09}`;

const galleryPhotos = Array.from({ length: 10 }, (_, index) => ({
  x: `${(index % 5) * 25}%`,
  y: `${Math.floor(index / 5) * 100}%`,
}));

export default function GalleryPhotos() {
  return (
    <div className="photoGrid">
      {galleryPhotos.map(({ x, y }, index) => (
        <div
          className="photoSlot photoFilled"
          key={index}
          role="img"
          aria-label={`Registro ${index + 1} do DJ Denis Puls`}
          style={{
            backgroundImage: `url("${gallerySprite}")`,
            backgroundSize: "500% 200%",
            backgroundPosition: `${x} ${y}`,
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}
    </div>
  );
}
