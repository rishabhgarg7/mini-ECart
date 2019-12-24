import React, { Component } from "react";
import "./Cart.css";
import Item from "./Item";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = { isReset: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isReset: true });
  }

  render() {
    return (
      <div className="Cart">
        <button onClick={this.handleClick}>Reset</button>
        <br />

        <Item reset={this.state.isReset} />
        <br />
        <Item reset={this.state.isReset} />
        <br />
        <Item reset={this.state.isReset} />
      </div>
    );
  }
}
export default Cart;
