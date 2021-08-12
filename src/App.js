import React from 'react';
import Counter from '../Counter';
import './style.css';

export default class App extends React.Component {
  // getCount = count => {
  //   console.log(count);
  // };

  countRef = React.createRef();
  inputRef = React.createRef();
  increment = () => this.countRef.current.increment();
  decrement = () => this.countRef.current.decrement();
  reset = () => this.countRef.current.reset();
  printRef = () => {
    console.log(this.countRef);
  };
  setDefaultValue = () => {
    this.inputRef.current.value = 'Hi';
  };
  render() {
    return (
      <div>
        <div ref="test" />
        <button onClick={this.increment}>Increment From App</button>
        <button onClick={this.decrement}>Decrement From App</button>
        <button onClick={this.reset}>Reset From App</button>
        <button onClick={this.printRef}>Print</button>
        <br /> <br />
        <input ref={this.inputRef} />
        <button onClick={this.setDefaultValue}>Set Default </button>
        <Counter ref={this.countRef} name="guvi" getCount={this.getCount} />
      </div>
    );
  }
}
//Reference : without sending props
