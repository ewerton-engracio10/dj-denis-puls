import galleryPart01 from "./gallery-data/part01";
import galleryPart02 from "./gallery-data/part02";
import galleryPart03 from "./gallery-data/part03";
import galleryPart04 from "./gallery-data/part04";
import galleryPart05 from "./gallery-data/part05";
import galleryPart06 from "./gallery-data/part06";
import galleryPart07 from "./gallery-data/part07";
import galleryPart08 from "./gallery-data/part08";
import galleryPart09 from "./gallery-data/part09";

/*
 * Mantido porque page.js ainda usa gallerySprite na seção Atuação.
 * Não alterar isso agora para não interferir nos cards já aprovados.
 */
export const gallerySprite = `data:image/webp;base64,${galleryPart01}${galleryPart02}${galleryPart03}${galleryPart04}${galleryPart05}${galleryPart06}${galleryPart07}${galleryPart08}${galleryPart09}`;

/*
 * GALERIA FINAL DE APRESENTAÇÃO
 * 10 arquivos locais, todos diferentes e todos com o Denis quando há DJ.
 * Sem imagens externas, sem outro DJ, sem texto estrangeiro e sem placeholders.
 */
const galleryPhotos = Array.from(
  { length: 10 },
  (_, index) => `/gallery/gallery-${String(index + 1).padStart(2, "0")}.jpg`
);

export default function GalleryPhotos() {
  return (
    <div className="photoGrid">
      {galleryPhotos.map((photo, index) => (
        <div
          className="photoSlot photoFilled"
          key={photo}
          role="img"
          aria-label={`Registro ${index + 1} do DJ Denis Puls`}
          style={{
            backgroundImage: `url("${photo}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            aspectRatio: "4 / 3",
            overflow: "hidden",
          }}
        />
      ))}
    </div>
  );
}
