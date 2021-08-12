import React from 'react';
import Counter from '../Counter';
import './style.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div class="container">
        <div ref="test" />
        <h1>Class Component Section </h1>
        <Button color="primary" onClick={this.increment}>
          Increment From App
        </Button>
        <br /> <br />
        <Button color="secondary" onClick={this.decrement}>
          Decrement From App
        </Button>
        <br /> <br />
        <Button color="danger" onClick={this.reset}>
          Reset From App
        </Button>
        <br /> <br />
        <Button color="success" onClick={this.printRef}>
          Print
        </Button>
        <br /> <br />
        <label>
          <strong>Default Value : </strong>
        </label>{' '}
        &nbsp;
        <input ref={this.inputRef} /> &nbsp;
        <Button color="dark" onClick={this.setDefaultValue}>
          Set Default{' '}
        </Button>
        <Counter ref={this.countRef} getCount={this.getCount} />
        <hr />
      </div>
    );
  }
}
//Reference : without sending props
