// Componente de mídia
import { useMemo, useState } from "react";
import { driveToDirectMp4 } from "../utils/drive";

type Source = {
  id: string;
  src: string; // pode ser mp4 ou link do Drive
  sourceType: "mp4" | "gdrive";
  poster?: string; // URL da capa (opcional, recomendado)
};

export default function Media({
  s,
  setVideoRef,
  setIsVideoPlaying,
}: {
  s: Source;
  setVideoRef: (id: string) => (el: HTMLVideoElement | null) => void;
  setIsVideoPlaying: (v: boolean) => void;
}) {
  const [ratio, setRatio] = useState<"landscape" | "portrait" | "square">(
    "landscape",
  );

  const src = useMemo(() => {
    return s.sourceType === "gdrive" ? driveToDirectMp4(s.src) : s.src;
  }, [s.sourceType, s.src]);

  const aspectClass =
    ratio === "portrait"
      ? "aspect-[9/16]"
      : ratio === "square"
        ? "aspect-square"
        : "aspect-video";

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden rounded-xl bg-black`}
    >
      <video
        className="h-full w-full object-contain md:object-cover"
        src={src}
        controls
        preload="metadata"
        playsInline
        poster={s.poster} // defina uma imagem bonita aqui
        ref={setVideoRef(s.id)}
        onPlay={() => setIsVideoPlaying(true)}
        onPause={() => setIsVideoPlaying(false)}
        onEnded={() => setIsVideoPlaying(false)}
        onLoadedMetadata={(e) => {
          const v = e.currentTarget;
          const r = v.videoWidth / v.videoHeight;
          setRatio(r > 1.2 ? "landscape" : r < 0.9 ? "portrait" : "square");
        }}
      />
    </div>
  );
}
