import React from 'react';

function Timer() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCount(currentCount=>currentCount+1 );
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
   
  }, []);

  return (
    <div className="timer">
      <h1>Seconds since load:</h1>
      <p>{count}</p>
    </div>
  );
}

export default Timer;