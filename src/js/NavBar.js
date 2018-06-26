import React, { Component } from "react";
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';
import '../css/modal.css'
import Logout from './Logout';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { usuario: [] }
  }



  componentDidMount() {
    const requestInfo = {
      method: 'GET',
      headers: new Headers({
        'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
      })
    };

    fetch('http://localhost:8080/usuario/currentUser', requestInfo)
      .then(response => {
        if (response.ok) {
          alert('certo!');
          return response.json()
        } else {
          alert('nao deu!');
        }
      })
      .catch (error => {
          this.setState({ msg: error.message });
        });
  }

  render() {

    let menuItems;
    if (localStorage.getItem("auth-token")) {
      menuItems = [
        <div class="btn-group" style={{ "margin-left": "200px" }} >
          <button type="button" class="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {}
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Painel Controle</a>
            <a class="dropdown-item" href="#">Minha Conta</a>
            <a class="dropdown-item" href="\logout">Sair
            </a>
          </div>
        </div>
      ]
    } else {
      menuItems = [
        <div>
          <li className="nav-item active" style={{ "margin-left": "90px" }}>
            <button className="btn btn-outline-success" href="#" data-toggle="modal" data-target="#login-modal">
              Login <span className="sr-only">(current)</span>
            </button>

            <a class="btn btn-outline-primary" href="#" role="button" style={{ "margin-left": "10px" }}>
              +CRIAR EVENTO
            </a>
          </li>
        </div>
      ]
    }
    return (
      <ul>
        <li>
          <div className="menu" style={{ "position": "fixed", "z-index": "9998", "width": "100%", "margin-top": "-1.5em" }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-md-center">
              <img src="https://www.askideas.com/media/14/Lets-PartyLogo.png" id="img_logo" />
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    style={{ "min-width": "700px" }}
                    placeholder="Digite o nome do evento ou da cidade"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-danger"
                    type="submit"
                  >
                    Pesquisar
            </button>
                </form>
                <ul className="navbar-nav mr-auto">
                  {menuItems}

                </ul>
              </div>
            </nav>
          </div>
        </li>
      </ul>
    );
  }
};






