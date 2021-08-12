import React from 'react';
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
        <h1>Counter Application</h1>
        <p> counter={this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>

        {/* parent Caomponent pass to child component through props */}
        {/* <button onClick={() => this.props.getCount(this.state.count)}>
          Send Count
        </button> */}
        {/* Parent Component send data through callback function */}
      </div>
    );
  }
}
