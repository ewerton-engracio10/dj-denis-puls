import galleryPart01 from "./gallery-data/part01";
import galleryPart02 from "./gallery-data/part02";
import galleryPart03 from "./gallery-data/part03";
import galleryPart04 from "./gallery-data/part04";
import galleryPart05 from "./gallery-data/part05";
import galleryPart06 from "./gallery-data/part06";
import galleryPart07 from "./gallery-data/part07";
import galleryPart08 from "./gallery-data/part08";
import galleryPart09 from "./gallery-data/part09";

/* Mantido para reaproveitar registros reais do Denis sem usar imagens de outros DJs. */
export const gallerySprite = `data:image/webp;base64,${galleryPart01}${galleryPart02}${galleryPart03}${galleryPart04}${galleryPart05}${galleryPart06}${galleryPart07}${galleryPart08}${galleryPart09}`;

const realDenisCrop = (index) => ({
  kind: "denis",
  x: `${(index % 5) * 25}%`,
  y: `${Math.floor(index / 5) * 100}%`,
});

/*
 * Fotos temporárias de contexto permanecem enquanto o material final não chega.
 * As três imagens que mostram DJ usam exclusivamente registros reais do Denis.
 */
const galleryPhotos = [
  { kind: "stock", src: "https://images.unsplash.com/photo-1774927062109-ec5dc79c7aa8?auto=format&fit=crop&w=1200&q=82" },
  realDenisCrop(1),
  { kind: "stock", src: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=1200&q=82" },
  { kind: "stock", src: "https://images.unsplash.com/photo-1775623914519-71b3143f86a1?auto=format&fit=crop&w=1200&q=82" },
  { kind: "stock", src: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=82" },
  { kind: "stock", src: "https://images.unsplash.com/photo-1769798643237-8642a3fbe5bc?auto=format&fit=crop&w=1200&q=82" },
  realDenisCrop(3),
  { kind: "stock", src: "https://images.unsplash.com/photo-1506485777791-e120681573dd?auto=format&fit=crop&w=1200&q=82" },
  realDenisCrop(5),
  { kind: "stock", src: "https://images.unsplash.com/photo-1692592549974-5085710ef620?auto=format&fit=crop&w=1200&q=82" },
];

export default function GalleryPhotos() {
  return (
    <div className="photoGrid">
      {galleryPhotos.map((photo, index) => {
        const isDenis = photo.kind === "denis";
        return (
          <div
            className={`photoSlot photoFilled${isDenis ? " photoRealDenis" : ""}`}
            key={`${photo.kind}-${index}`}
            role="img"
            aria-label={isDenis ? `Registro real ${index + 1} do DJ Denis Puls` : `Registro temporário ${index + 1} de evento`}
            style={isDenis ? {
              backgroundImage: `url("${gallerySprite}")`,
              backgroundSize: "500% 200%",
              backgroundPosition: `${photo.x} ${photo.y}`,
              backgroundRepeat: "no-repeat",
            } : {
              backgroundImage: `url("${photo.src}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        );
      })}
    </div>
  );
}
