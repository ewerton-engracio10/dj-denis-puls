import galleryPart01 from "./gallery-data/part01";
import galleryPart02 from "./gallery-data/part02";
import galleryPart03 from "./gallery-data/part03";
import galleryPart04 from "./gallery-data/part04";
import galleryPart05 from "./gallery-data/part05";
import galleryPart06 from "./gallery-data/part06";
import galleryPart07 from "./gallery-data/part07";
import galleryPart08 from "./gallery-data/part08";
import galleryPart09 from "./gallery-data/part09";

/* Mantido temporariamente apenas para a seção Atuação do desktop. */
export const gallerySprite = `data:image/webp;base64,${galleryPart01}${galleryPart02}${galleryPart03}${galleryPart04}${galleryPart05}${galleryPart06}${galleryPart07}${galleryPart08}${galleryPart09}`;

/*
 * Fotos temporárias em alta resolução para apresentação.
 * Depois serão substituídas, uma a uma, pelas fotos oficiais do Denis.
 */
const galleryPhotos = [
  "https://images.unsplash.com/photo-1774927062109-ec5dc79c7aa8?auto=format&fit=crop&w=1200&q=82",
  "https://images.unsplash.com/photo-1648154164366-d067faecdc51?auto=format&fit=crop&w=1200&q=82",
  "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=1200&q=82",
  "https://images.unsplash.com/photo-1775623914519-71b3143f86a1?auto=format&fit=crop&w=1200&q=82",
  "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=82",
  "https://images.unsplash.com/photo-1769798643237-8642a3fbe5bc?auto=format&fit=crop&w=1200&q=82",
  "https://images.unsplash.com/photo-1506485854521-3e13d857db0b?auto=format&fit=crop&w=1200&q=82",
  "https://images.unsplash.com/photo-1506485777791-e120681573dd?auto=format&fit=crop&w=1200&q=82",
  "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?auto=format&fit=crop&w=1200&q=82",
  "https://images.unsplash.com/photo-1692592549974-5085710ef620?auto=format&fit=crop&w=1200&q=82",
];

export default function GalleryPhotos() {
  return (
    <div className="photoGrid">
      {galleryPhotos.map((photo, index) => (
        <div
          className="photoSlot photoFilled"
          key={photo}
          role="img"
          aria-label={`Registro temporário ${index + 1} para a galeria do DJ Denis Puls`}
          style={{
            backgroundImage: `url("${photo}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}
    </div>
  );
}
