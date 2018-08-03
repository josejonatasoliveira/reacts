import React, { Component } from "react";
import "./App.css";
import NavBar from "./js/NavBar";
import Search from "./js/Search";
import CriarEvento from "./js/CriarEvento";
import Carousel from "./js/Carousel";
import Modal from "./js/Modal";
import Eventos from "./js/Eventos";
import "./css/style.css";
import Particles from "react-particles-js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Search />
        <Carousel />
        <Modal />
        <CriarEvento />
        <Eventos />

        <div id="main">{this.props.children}</div>
      </div>
    );
  }
}

export default App;
