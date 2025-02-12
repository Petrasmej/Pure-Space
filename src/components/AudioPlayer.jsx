import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    if (audioRef.current) {
      // Pokud není zvuk načtený, čekáme, až bude připravený
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error('Přehrávání zablokováno:', error);
        });
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="audio-container">
      <button className="button" onClick={isPlaying ? pauseAudio : playAudio}>
        {isPlaying ? '⏸ Zastavit' : '▶ Přehrát'}
      </button>
      <audio ref={audioRef} preload="auto">
        <source src="/JogaNidra.mp3" type="audio/mpeg" />
        <source src="/joga-nidra.m4a" type="audio/mp4" />
        Váš prohlížeč nepodporuje tento formát.
      </audio>
    </div>
  );
};

AudioPlayer.propTypes = {
  title: PropTypes.string,
};

export default AudioPlayer;
