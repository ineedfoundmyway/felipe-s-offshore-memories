import { useRef, useState } from "react";
import { Heart, Pause, Play, Anchor } from "lucide-react";

type TrackId = "love" | "inspiration";

const tracks: Record<TrackId, { url: string; label: string; song: string; icon: typeof Heart }> = {
  love: {
    url: "/musicas/7-years.mp3",
    label: "Eu te amo",
    song: "7 Years — Lukas Graham",
    icon: Heart,
  },
  inspiration: {
    url: "/musicas/so-os-loucos-sabem.mp3",
    label: "Você é minha inspiração",
    song: "Só os Loucos Sabem — Charlie Brown Jr.",
    icon: Anchor,
  },
};

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [current, setCurrent] = useState<TrackId | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async (id: TrackId) => {
    const el = audioRef.current;
    if (!el) return;

    if (current === id) {
      if (el.paused) await el.play().catch(() => setPlaying(false));
      else el.pause();
      return;
    }

    setCurrent(id);
    el.src = tracks[id].url;
    el.currentTime = 0;
    try {
      await el.play();
    } catch {
      setPlaying(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-xl rounded-xl border border-border bg-card/70 p-4 backdrop-blur sm:p-6">
      <p className="text-center text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
        Trilha sonora do orgulho
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {(Object.keys(tracks) as TrackId[]).map((id) => {
          const Icon = tracks[id].icon;
          const active = current === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => void toggle(id)}
              aria-pressed={active && playing}
              className={`flex min-h-14 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary/50 text-primary hover:bg-primary/10"
              }`}
            >
              {active && playing ? <Pause className="size-4 shrink-0" /> : <Play className="size-4 shrink-0" />}
              <Icon className="size-4 shrink-0" />
              <span className="text-center leading-tight">{tracks[id].label}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-4 min-h-5 text-center text-sm text-muted-foreground">
        {current ? tracks[current].song : "Escolha uma música e dá o play"}
      </p>
      <audio
        ref={audioRef}
        controls
        preload="none"
        playsInline
        className="mt-3 w-full"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
    </div>
  );
}
