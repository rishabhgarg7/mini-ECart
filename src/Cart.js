import React, { Component } from "react";
import "./Cart.css";
import Item from "./Item";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = { isReset: false, nitems:0 };

    this.handleReset = this.handleReset.bind(this);
    this.addAnItem = this.addAnItem.bind(this)
  }

  handleReset() {
    this.setState({ isReset: true });
  }

  addAnItem(){
    this.setState({nitems:this.state.nitems+1})
  }
  render() {
    return (
      <div className="Cart">
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.addAnItem}>Add an item</button>
        <br />

      {(Array.from({length:this.state.nitems})).map(n=><Item reset={this.state.isReset}/>)}

      </div>
    );
  }
}
export default Cart;
