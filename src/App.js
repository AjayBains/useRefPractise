import { useState, useRef } from "react";
function App() {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const renders = useRef(0);
  const inputRef = useRef();
  const timerID = useRef();

  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  };

  // const focusOnInput = () => {
  //   inputRef.current.focus();
  // };

  const startTimer = () => {
    timerID.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
      renders.current++;
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerID.current);
    timerID.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
  };
  return (
    <main className="app">
      <input
        ref={inputRef}
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={handleChange}
      />
      <p>Renders :{renders.current}</p>
      <br />
      <br />
      <section>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </section>
      <br />
      <br />
      <p>{seconds}</p>
      <br />
      <br />
      <p>{randomInput}</p>
    </main>
  );
}

export default App;
