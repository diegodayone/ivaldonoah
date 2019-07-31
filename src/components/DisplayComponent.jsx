import React from "react";

class DisplayComponent extends React.Component {
  state = {};
  render() {
    return <div>{this.props.display}</div>;
  }
}

export default DisplayComponent;
