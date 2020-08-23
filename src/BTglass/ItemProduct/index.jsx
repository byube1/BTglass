import React, { Component } from "react";

class ItemProduct extends Component {
   

  render() {
      const {url,id} = this.props.item;
    return (
      <div className="choose-glass" id={id} onClick={()=>this.props.getitem(this.props.item)}>
        <img src={url} alt="" className="w-100" />
      </div>
    );
  }
}

export default ItemProduct;
