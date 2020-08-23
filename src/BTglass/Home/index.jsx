import React, { Component } from "react";
import ItemProduct from "../ItemProduct";
import "./style.css";
let arrProduct = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 4,
    price: 30,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 5,
    price: 30,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 6,
    price: 30,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 7,
    price: 30,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 8,
    price: 30,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 9,
    price: 30,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

class Home extends Component {
  state = {
    img: "",
    name: null,
    content: null,
  };

  getitem = (item) => {
    this.setState({
      img: item.url,
      name: item.name,
      content: item.desc,
    });
  };
  renderItem = () =>
    arrProduct.map((item, index) => (
      <div className="col">
        <ItemProduct item={item} key={index} getitem={this.getitem} />
      </div>
    ));

  render() {
    return (
      <div
        style={{ backgroundImage: "url(./glassesImage/background.jpg)" }}
        className="Home"
      >
        <div className="model container">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="./glassesImage/model.jpg"
              alt="Card image cap"
            />
            <div className="content">
              <div className="glass">
                <img src={this.state.img} alt="" className="w-50" />
              </div>
            </div>
            <div className="detail w-100">
              <h5 className="text-success">{this.state.name}</h5>
              <p>{this.state.content}</p>
            </div>
          </div>
        </div>
        <div className="container m-5 bg-light">
          <div className="row">{this.renderItem()}</div>
        </div>
      </div>
    );
  }
}

export default Home;
