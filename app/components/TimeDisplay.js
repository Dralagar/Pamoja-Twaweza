import { useEffect, useState } from 'react';

function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    setCurrentTime(Date.now());
  }, []);

  return (
    <div>
      {currentTime ? `Current time: ${currentTime}` : 'Loading...'}
    </div>
  );
}

export default TimeDisplay;
