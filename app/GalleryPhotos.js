import galleryPart01 from "./gallery-data/part01";
import galleryPart02 from "./gallery-data/part02";
import galleryPart03 from "./gallery-data/part03";
import galleryPart04 from "./gallery-data/part04";
import galleryPart05 from "./gallery-data/part05";
import galleryPart06 from "./gallery-data/part06";
import galleryPart07 from "./gallery-data/part07";
import galleryPart08 from "./gallery-data/part08";
import galleryPart09 from "./gallery-data/part09";
import RealDenisPhoto from "./RealDenisPhotos";

/* Mantido apenas porque a seção Atuação ainda reutiliza este material. */
export const gallerySprite = `data:image/webp;base64,${galleryPart01}${galleryPart02}${galleryPart03}${galleryPart04}${galleryPart05}${galleryPart06}${galleryPart07}${galleryPart08}${galleryPart09}`;

/*
 * Galeria temporária para apresentação:
 * - fotos de contexto podem ser stock;
 * - sempre que aparece um DJ, é obrigatoriamente o Denis;
 * - as três fotos do Denis são arquivos individuais e diferentes, nunca recortes do sprite.
 */
const galleryPhotos = [
  { kind: "stock", src: "https://images.unsplash.com/photo-1774927062109-ec5dc79c7aa8?auto=format&fit=crop&w=1200&q=82" },
  { kind: "denis", realIndex: 0 },
  { kind: "stock", src: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=1200&q=82" },
  { kind: "stock", src: "https://images.unsplash.com/photo-1775623914519-71b3143f86a1?auto=format&fit=crop&w=1200&q=82" },
  { kind: "stock", src: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=82" },
  { kind: "stock", src: "https://images.unsplash.com/photo-1769798643237-8642a3fbe5bc?auto=format&fit=crop&w=1200&q=82" },
  { kind: "denis", realIndex: 1 },
  { kind: "stock", src: "https://images.unsplash.com/photo-1506485777791-e120681573dd?auto=format&fit=crop&w=1200&q=82" },
  { kind: "denis", realIndex: 2 },
  { kind: "stock", src: "https://images.unsplash.com/photo-1692592549974-5085710ef620?auto=format&fit=crop&w=1200&q=82" },
];

export default function GalleryPhotos() {
  return (
    <div className="photoGrid">
      {galleryPhotos.map((photo, index) => {
        if (photo.kind === "denis") {
          return (
            <RealDenisPhoto
              key={`denis-${photo.realIndex}`}
              index={photo.realIndex}
              ariaLabel={`Foto real ${photo.realIndex + 1} do DJ Denis Puls`}
            />
          );
        }

        return (
          <div
            className="photoSlot photoFilled"
            key={`stock-${index}`}
            role="img"
            aria-label={`Registro temporário ${index + 1} de evento`}
            style={{
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
