import { useRef } from 'react';

const AudioPlayer = ({ src, title }) => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="audio-container">
      <button className="button" onClick={playAudio}>
        ▶ Přehrát Joga Nidra
      </button>
      <audio ref={audioRef} src={src} preload="auto" />
    </div>
  );
};

export default AudioPlayer;
