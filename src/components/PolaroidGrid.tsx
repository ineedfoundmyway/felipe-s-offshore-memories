const photos = [
  { src: "/fotos/pai5.jpg", caption: "Papai Fel na obra", tilt: "-3deg", pos: "50% 30%" },
  { src: "/fotos/pai1.jpg", caption: "Embarque, colete e sorriso", tilt: "2.5deg", pos: "60% 55%" },
  { src: "/fotos/pai6.jpg", caption: "Better Together", tilt: "-1.5deg", pos: "50% 40%" },
  { src: "/fotos/pai4.jpg", caption: "Eu e meu exemplo", tilt: "3deg", pos: "50% 55%" },
  { src: "/fotos/pai2.jpg", caption: "Mãos que cuidam", tilt: "-2.5deg", pos: "50% 40%" },
  { src: "/fotos/pai3.jpg", caption: "Sempre em movimento", tilt: "1.5deg", pos: "40% 45%" },
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
            decoding="async"
            width={640}
            height={640}
            className="aspect-square w-full object-cover"
            style={{ objectPosition: p.pos }}
          />
          <figcaption className="pt-4 text-center font-[family-name:var(--font-hand)] text-2xl leading-none">
            {p.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
