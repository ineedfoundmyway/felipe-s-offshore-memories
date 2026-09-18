import pai1 from "@/assets/pai1.jpg.asset.json";
import pai2 from "@/assets/pai2.jpg.asset.json";
import pai3 from "@/assets/pai3.jpg.asset.json";
import pai4 from "@/assets/pai4.jpg.asset.json";
import pai5 from "@/assets/pai5.jpg.asset.json";
import pai6 from "@/assets/pai6.jpg.asset.json";

const photos = [
  { src: pai5.url, caption: "Papai Fel na obra", tilt: "-3deg" },
  { src: pai1.url, caption: "Embarque, colete e sorriso", tilt: "2.5deg" },
  { src: pai6.url, caption: "Better Together", tilt: "-1.5deg" },
  { src: pai4.url, caption: "Eu e meu exemplo", tilt: "3deg" },
  { src: pai2.url, caption: "Mãos que cuidam", tilt: "-2.5deg" },
  { src: pai3.url, caption: "Sempre em movimento", tilt: "1.5deg" },
];

export function PolaroidGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((p) => (
        <figure
          key={p.src}
          className="polaroid-card mx-auto w-full max-w-[19rem] rounded-[2px]"
          style={{ transform: `rotate(${p.tilt})` }}
        >
          <img
            src={p.src}
            alt={p.caption}
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
          <figcaption className="pt-4 text-center font-[family-name:var(--font-hand)] text-2xl leading-none">
            {p.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
