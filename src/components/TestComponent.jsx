import React from "react";

class TestComponent extends React.Component {
  state = {};
  render() {
    this.props.passMe5("whatever");

    return <input type="text" onChange={input => this.props.handleSearchChange(input.currentTarget.value)} />;
  }
}

export default TestComponent;
