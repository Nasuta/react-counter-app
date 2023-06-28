import { useState } from "react";
import "./Counter.css";
import Display from "./components/Display";
import ButtonsPanel from "./components/ButtonsPanel";
import Clock from "./components/Clock";

const Counter = (props) => {
  //     const counter = Math.floor (Math.random () * 10)

  const [counter, setCounter] = useState(props.counterInitValue);
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [showClock, setShowClock] = useState(true)
  
  const increaseCount = () => {
    setCount(count + step);
  };

  // const updateCounter = () => {
  //     setCounter((prevCounter) => {
  //           return prevCounter + 1;
  //     });
  // }

  const updateCounter = (action) => {
    if (action === "add") {
      setCounter(counter + 1);
    } else if (action === "reset") {
      setCounter(props.counterInitValue);
    } else {
      setCounter(0);
    }
  };
  const updateStep = (event) => {
    const newStep = parseInt(event.target.value);
    if (newStep > 0) {
      setStep(newStep);
    } else {
      setStep(1);
    }
  };
  
  
  return (
    <div className="counter">
      <Display counter={counter} />
      {/* <p>Counter {counter}</p>
        <div className="buttonPanel">
            <button onClick= {updateCounter}>Add</button>
        </div>  */}
      <ButtonsPanel updateCounter={updateCounter} />
      <div>
        <label>
          Step*
          <input type="number" value={step} onChange={updateStep} min={1} />
        </label>
      </div>
      {showClock ? (
        <Clock setShowClock={setShowClock} />
      ) : (
        <p className="clock" onClick={() => setShowClock(true)}>
          Press here to see the clock
        </p>
      )}
    </div>
    
  );
};

export default Counter;



//  useEffect(() => {
//   console.log("useEffect is working");
// }, []);