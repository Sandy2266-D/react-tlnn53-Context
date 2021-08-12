import React from 'react';
import Counter from './Counter';
import { Button } from 'reactstrap';
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
      <h1>Functional Component </h1>
      <Button color="primary" onClick={() => countRef.current.increment()}>
        Increment From App
      </Button>
      <br /> <br />
      <Button color="secondary" onClick={decrement}>
        Decrement From App
      </Button>
      <br /> <br />
      <Button color="danger" onClick={reset}>
        Reset From App
      </Button>
      <br /> <br />
      <Button color="success" onClick={printRef}>
        Print
      </Button>
      <br /> <br />
      <label>
        <strong>Default Value : </strong>
      </label>{' '}
      &nbsp;
      <input ref={inputRef} /> &nbsp;
      <Button color="dark" onClick={setDefaultValue}>
        Set Default{' '}
      </Button>
      <Counter ref={countRef} />
      <hr />
    </div>
  );
}

//Reference : without sending props
