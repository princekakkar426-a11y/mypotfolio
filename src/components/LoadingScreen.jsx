import { useEffect, useState } from 'react';
import './LoadingScreen.css';

/**
 * Full-screen preloader with an animated progress count and
 * the initials logo. Fades out once progress hits 100%.
 */
export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 18;
        if (next >= 100) {
          clearInterval(interval);
          setHiding(true);
          setTimeout(onDone, 650);
          return 100;
        }
        return next;
      });
    }, 140);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className={`loading-screen ${hiding ? 'is-hiding' : ''}`}>
      <div className="loading-mark">
        <span>SK</span>
        <div className="loading-ring" />
      </div>
      <div className="loading-bar-track">
        <div className="loading-bar-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
      </div>
      <p className="loading-count">{Math.floor(Math.min(progress, 100))}%</p>
    </div>
  );
}
