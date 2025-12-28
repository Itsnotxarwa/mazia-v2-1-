import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import Audio from "../assets/audio.mp3";

export default function AudioVisualizer() {
    const pattern = [80, 40, 100, 130, 140, 180, 130, 140, 90, 80 ,180,190,170,120,80];
    const bars = Array.from({ length: 62 }, (_, i) => pattern[i % pattern.length]);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };
   useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      const percent = audio.currentTime / audio.duration;
      setProgress(percent || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const activeBars = Math.floor(progress * bars.length);
      

  return (
    <div className="flex items-center justify-center gap-4 p-4 rounded-lg w-full">
      
      {/* Play / Pause Button */}
      <button
        onClick={togglePlay}
        className={`transition-colors duration-200
          ${ isPlaying ? "text-[#4eec]" : "text-[#032ca6] hover:text-[#4eec]"}`}
      >
        {isPlaying ? <Pause size={58} /> : <Play size={58} />}
      </button>

      {/* Audio Bars */}
      <div className="flex items-center gap-3 w-full transition-colors duration-300">
        {bars.map((bar,i) => (
            <div 
            key={i}
            className="w-1 h-6 rounded-full bg-[#032ca6]"
            style={{ 
                height: `${bar}px`,
                backgroundColor: i <= activeBars ? "#4eec" : "#032ca6",
             }}></div>
        ))}
      </div>

      {/* Hidden audio */}
      <audio
        ref={audioRef}
        src={Audio}
      />
    </div>
  );
}
