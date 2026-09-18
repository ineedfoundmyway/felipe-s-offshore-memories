import { useEffect, useRef, useState } from "react";
import { Heart, Pause, Play, Anchor } from "lucide-react";
import sevenYears from "@/assets/7years.mp3.asset.json";
import loucos from "@/assets/loucos.mp3.asset.json";

type TrackId = "love" | "inspiration";

const tracks: Record<TrackId, { url: string; label: string; song: string }> = {
  love: { url: sevenYears.url, label: "Eu te amo", song: "7 Years — Lukas Graham" },
  inspiration: {
    url: loucos.url,
    label: "Você é minha inspiração",
    song: "Só os Loucos Sabem — Charlie Brown Jr.",
  },
};

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [current, setCurrent] = useState<TrackId | null>(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !current) return;
    el.src = tracks[current].url;
    void el.play().catch(() => setCurrent(null));
  }, [current]);

  const toggle = (id: TrackId) => {
    const el = audioRef.current;
    if (current === id && el) {
      if (el.paused) void el.play();
      else el.pause();
      setCurrent(id);
      return;
    }
    setCurrent(id);
  };

  const isPlaying = (id: TrackId) =>
    current === id && !!audioRef.current && !audioRef.current.paused;

  return (
    <div className="mx-auto w-full max-w-xl rounded-xl border border-border bg-card/70 p-5 backdrop-blur">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Trilha sonora do orgulho
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {(Object.keys(tracks) as TrackId[]).map((id) => (
          <button
            key={id}
            onClick={() => toggle(id)}
            className={`flex items-center justify-center gap-2 rounded-lg px-4 py-4 text-sm font-semibold uppercase tracking-wide transition-colors ${
              current === id
                ? "bg-primary text-primary-foreground"
                : "border border-primary/50 text-primary hover:bg-primary/10"
            }`}
          >
            {current === id ? <Pause className="size-4" /> : <Play className="size-4" />}
            {id === "love" ? <Heart className="size-4" /> : <Anchor className="size-4" />}
            {tracks[id].label}
          </button>
        ))}
      </div>
      <p className="mt-4 min-h-5 text-center text-sm text-muted-foreground">
        {current ? tracks[current].song : "Escolha uma música e dá o play"}
      </p>
      <audio
        ref={audioRef}
        controls
        className="mt-3 w-full"
        onEnded={() => setCurrent(null)}
        onPlay={() => setCurrent((c) => c)}
      />
      <span className="sr-only">{isPlaying("love") ? "tocando" : ""}</span>
    </div>
  );
}
