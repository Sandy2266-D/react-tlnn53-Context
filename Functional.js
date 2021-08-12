import React from 'react';
import Counter from './Counter';
export default function Functional() {
  // getCount = count => {
  //   console.log(count);
  // };
  const countRef = React.useRef();
  const inputRef = React.useRef();

  const decrement = () => countRef.current.decrement();
  const reset = () => countRef.current.reset();
  const printRef = () => {
    console.log(countRef);
  };
  const setDefaultValue = () => {
    inputRef.current.value = 'Hi';
  };
  return (
    <div>
      <button onClick={() => countRef.current.increment()}>
        Increment From App
      </button>
      <button onClick={decrement}>Decrement From App</button>
      <button onClick={reset}>Reset From App</button>
      <button onClick={printRef}>Print</button>
      <br /> <br />
      <input ref={inputRef} />
      <button onClick={setDefaultValue}>Set Default </button>
      <Counter ref={countRef} />
    </div>
  );
}

//Reference : without sending props
