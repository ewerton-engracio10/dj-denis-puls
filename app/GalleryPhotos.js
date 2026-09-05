import galleryPart01 from "./gallery-data/part01";
import galleryPart02 from "./gallery-data/part02";
import galleryPart03 from "./gallery-data/part03";
import galleryPart04 from "./gallery-data/part04";
import galleryPart05 from "./gallery-data/part05";
import galleryPart06 from "./gallery-data/part06";
import galleryPart07 from "./gallery-data/part07";
import galleryPart08 from "./gallery-data/part08";
import galleryPart09 from "./gallery-data/part09";

/* Mantido porque page.js ainda usa gallerySprite na seção Atuação. */
export const gallerySprite = `data:image/webp;base64,${galleryPart01}${galleryPart02}${galleryPart03}${galleryPart04}${galleryPart05}${galleryPart06}${galleryPart07}${galleryPart08}${galleryPart09}`;

const galleryPhotos = [
  { src: "/gallery/gallery-01.jpg", position: "center top", label: "DJ Denis Puls em apresentação" },
  { src: "/gallery/gallery-02.jpg", position: "center 56%", size: "95% auto", label: "DJ Denis Puls em evento" },
  { src: "/gallery/gallery-03.jpg", position: "center top", label: "DJ Denis Puls ao pôr do sol" },
  { src: "/gallery/gallery-04.jpg", position: "center 56%", size: "96% auto", label: "DJ Denis Puls no palco" },
  { src: "/gallery/gallery-05.jpg", position: "center top", label: "DJ Denis Puls em apresentação" },
  { src: "/gallery/gallery-06.jpg", position: "center top", label: "Retrato do DJ Denis Puls" },
  { src: "https://images.unsplash.com/photo-1774927062109-ec5dc79c7aa8?auto=format&fit=crop&w=1200&h=900&q=86", position: "center", label: "Celebração de casamento" },
  { src: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=1200&h=900&q=86", position: "center", label: "Celebração de formatura" },
  { src: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&h=900&q=86", position: "center", label: "Evento corporativo" },
  { src: "https://images.unsplash.com/photo-1769798643237-8642a3fbe5bc?auto=format&fit=crop&w=1200&h=900&q=86", position: "center", label: "Público em evento" },
];

export default function GalleryPhotos() {
  return (
    <div className="photoGrid">
      {galleryPhotos.map((photo, index) => (
        <div
          className="photoSlot photoFilled"
          key={`${photo.src}-${index}`}
          role="img"
          aria-label={photo.label}
          style={{
            backgroundImage: `url("${photo.src}")`,
            backgroundSize: photo.size || "cover",
            backgroundPosition: photo.position,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#050505",
            aspectRatio: "4 / 3",
            overflow: "hidden",
          }}
        />
      ))}
    </div>
  );
}
