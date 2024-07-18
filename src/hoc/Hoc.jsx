import React, { Component } from "react";

const Hoc = (MainComponent) => {
  class HocClass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        like: 20,
      };
    }

    //increment handle
    handleIncrement = () => {
      this.setState((prevState) => ({
        ...prevState,
        like: prevState.like + 1,
      }));
    };

    //deccrement handle
    handleDecrement = () => {
      this.setState((prevState) => ({
        ...prevState,
        like: prevState.like - 1,
      }));
    };

    //reset
    handleReset = () => {
      this.setState((prevState) => ({
        ...prevState,
        like: 0,
      }));
    };

    render() {
      return (
        <MainComponent
          like={this.state.like}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleReset={this.handleReset}
        />
      );
    }
  }

  return HocClass;
};

export default Hoc;
