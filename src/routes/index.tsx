import { createFileRoute } from "@tanstack/react-router";
import { PolaroidGrid } from "@/components/PolaroidGrid";
import { MusicPlayer } from "@/components/MusicPlayer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Felipe Couto — Promoção a Sênior | Parabéns, Pai" },
      {
        name: "description",
        content:
          "Homenagem do filho Brunno ao pai Felipe Couto pela promoção a Sênior: fotos polaroid, trilha sonora e muito orgulho.",
      },
      { property: "og:title", content: "Felipe Couto — Promoção a Sênior" },
      {
        property: "og:description",
        content: "Uma homenagem offshore do Brunno ao pai Felipe Couto pela conquista de Sênior.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen px-4 pb-20 pt-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="deck-line h-1.5 w-full rounded-full" />

        <header className="pt-10 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent sm:text-sm">
            Offshore • Promoção 2026
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Felipe Couto
            <span className="mt-2 block text-sun">Agora Sênior</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Conquista de quem embarcou, suou, estudou e nunca soltou a mão de ninguém no caminho.
            Parabéns, pai.
          </p>
        </header>

        <section className="mt-12">
          <MusicPlayer />
        </section>

        <section className="mt-16">
          <h2 className="text-center text-2xl font-bold uppercase tracking-wide sm:text-3xl">
            Momentos que contam essa história
          </h2>
          <div className="mt-10">
            <PolaroidGrid />
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl rounded-2xl border border-border bg-card/70 p-6 backdrop-blur sm:p-10">
          <h2 className="text-xl font-bold uppercase tracking-wide text-primary sm:text-2xl">
            Do seu filho, Brunno
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-card-foreground sm:text-lg">
            <p>
              Pai, essa promoção a Sênior não caiu do céu. Ela veio de cada embarque, cada
              plantão longe de casa, cada vez que você escolheu fazer certo mesmo quando era mais
              difícil.
            </p>
            <p>
              Eu te tenho como exemplo em tudo. Você é um cara foda, dos que inspiram só de estar
              por perto. É em você que eu me espelho e é igual a você que eu quero ser, todos os
              dias.
            </p>
            <p className="font-[family-name:var(--font-hand)] text-3xl text-primary">
              Te amo. Você é minha inspiração.
            </p>
          </div>
        </section>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          Feito com orgulho pelo Brunno • Parabéns, Felipe Couto
        </footer>
      </div>
    </main>
  );
}
