import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialTimeInSeconds?: number;
  className?: string;
}

const CountdownTimer = ({ initialTimeInSeconds = 3600, className = '' }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span>⏳</span>
      <span>{formatTime(timeLeft)}</span>
      <span>Limited Time Access</span>
    </div>
  );
};

export default CountdownTimer;