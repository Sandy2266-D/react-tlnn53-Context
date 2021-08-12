import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: 0 });

  render() {
    return (
      <div>
        <hr />
        <h1>Counter Application</h1>
        <h4>Diplay Counter Value={this.state.count}</h4>
        <Button color="primary" onClick={this.increment}>
          Increment
        </Button>
        <br />
        <br />
        <Button color="secondary" onClick={this.decrement}>
          Decrement
        </Button>
        <br />
        <br />
        <Button color="danger" onClick={this.reset}>
          Reset
        </Button>
        {/* parent Caomponent pass to child component through props */}
        {/* <button onClick={() => this.props.getCount(this.state.count)}>
          Send Count
        </button> */}
        {/* Parent Component send data through callback function */}
      </div>
    );
  }
}
