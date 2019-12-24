import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nquantity: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState({ nquantity: this.state.nquantity + 1 });
  }

  handleDecrement() {
    this.setState({ nquantity: this.state.nquantity - 1 });
  }

  render() {
    return (
      <div className="Item">
        <p className="Item-nquantity">
          {this.state.nquantity === 0 ? "Zero" : this.state.nquantity}
        </p>
        <button onClick={this.handleIncrement} className="Item-button">
          +
        </button>
        <button
          onClick={this.handleDecrement}
          className="Item-button"
          disabled={this.state.nquantity === 0 ? true : false}
        >
          -
        </button>
        <button>Delete</button>
      </div>
    );
  }
}

export default Item;
