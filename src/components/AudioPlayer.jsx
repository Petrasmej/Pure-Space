import { useRef } from 'react';
import PropTypes from 'prop-types'; // Import prop-types

const AudioPlayer = ({ src, title }) => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((error) => console.error('Chyba v přehrávání:', error));
    }
  };

  return (
    <div className="audio-container">
      <h3>{title}</h3>
      <button className="button" onClick={playAudio}>
        ▶ Přehrát Joga Nidra
      </button>
      <audio ref={audioRef} src={src} preload="auto" controls />
    </div>
  );
};

// Přidání propTypes validace
AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default AudioPlayer;
