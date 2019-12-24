import React, { Component } from "react";
import "./Cart.css";
import Item from "./Item";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = { isReset: false, items: [] };

    this.handleReset = this.handleReset.bind(this);
    this.addAnItem = this.addAnItem.bind(this);
  }

  handleReset() {
    this.setState({ isReset: true });
  }

  addAnItem() {
    // this.setState({nitems:this.state.nitems+1})
    // const newItem = <Item reset={this.state.isReset} />
    // let newState = {isReset:this.state.isReset,items: [...this.state.items, ...[newItem]])}
    const newItem = <Item reset={this.state.isReset} />;
    let newItems = [...this.state.items, ...[newItem]];
    this.setState({ items: newItems });
  }
  render() {
    return (
      <div className="Cart">
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.addAnItem}>Add an item</button>
        <br />

        {this.state.items}
      </div>
    );
  }
}
export default Cart;
