import React, { Component } from "react";
import "../css/modal.css";
import "../css/procura.css";
import axios from "axios";

//Classe Principal
export default class NavBar extends Component {
  //Construtor do React
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.query = "1";
  }
  //Fim do construtor

  //Faz acesso a API
  getItems() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.query}/comments`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
        console.log(res);
      });
  } //Fim do acesso a API

  setQuery(e) {
    this.query = e.target.value;
  }

  verifyHandler() {
    if (localStorage.getItem("auth-token") === null) {
      alert("Voce precisa estar logado!");
    }
  }
  componentDidMount() {
    const requestInfo = {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`
      })
    };

    fetch("https://jsonplaceholder.typicode.com/posts/45")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          alert("nao deu!");
        }
      })
      .catch(error => {
        this.setState({ msg: error.message });
      });
  }

  render() {
    let menuItems;
    if (localStorage.getItem("auth-token") === undefined) {
      menuItems = [<MenuItens items={this.state.items} />];
    } else {
      menuItems = [
        <div>
          <li className="nav-item active" style={{ "margin-left": "90px" }}>
            <button
              className="btn btn-outline-success"
              href="#"
              data-toggle="modal"
              data-target="#login-modal"
            >
              Login <span className="sr-only">(current)</span>
            </button>

            <button
              class="btn btn-outline-primary"
              href="#"
              role="button"
              style={{ "margin-left": "10px" }}
              handleSubmit={this.verifyHandler}
            >
              +CRIAR EVENTO
            </button>
          </li>
        </div>
      ];
    }

    return (
      <ul>
        <li>
          <div
            className="menu"
            style={{
              position: "fixed",
              "z-index": "9998",
              width: "100%",
              "margin-top": "-1.5em"
            }}
          >
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-md-center">
              <img
                src="https://www.askideas.com/media/14/Lets-PartyLogo.png"
                id="img_logo"
              />
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

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <Search
                  onKeyUp={e => {
                    this.handleKeyUp(e);
                  }}
                  onClick={() => {
                    this.getItems();
                  }}
                  data={this.query}
                  query={this.setQuery.bind(this)}
                />
                <ul className="navbar-nav mr-auto">{menuItems}</ul>
              </div>
            </nav>
          </div>
          <div className="products-wrapper" />
        </li>
      </ul>
    );
  }
} //Fim da classe

const ListaEvento = props => {
  return (
    <div className="product-list">
      {props.items.map(user => {
        return (
          <Evento
            id={user.id}
            name={user.name}
            permalink={user.body}
            price={user.email}
          />
        );
      })}
    </div>
  );
};

const Evento = props => {
  return (
    <div className="swiper-slide featured-event-box" style={{ margin: "20px" }}>
      <a
        href="https://www.sympla.com.br/farmer-friends-tour---4-edicao__310823"
        target="_blank"
      >
        <div
          className="event-image-box"
          style={{
            "background-image":
              "url('//d1gkntzr8mxq7s.cloudfront.net/5b2ba28bb8cf0-xs.jpg')"
          }}
        />
        <div className="event-name">
          <p>{props.name}</p>
        </div>
        <div className="calendar-box">
          <div className="calendar-month">Jun </div>
          <div className="calendar-day">28 </div>
        </div>
        <div className="event-local-box">
          <div className="uppercase line">
            <p>Urban Farmcy</p>
          </div>
          <div className="line">
            <i
              className="fa fa-clock-o color-grey"
              style={{ paddingRight: "2px" }}
            />
            13h{" "}
            <i
              className="fa fa-map-marker color-grey"
              style={{ padding: "0 2px 0 4px" }}
            />
            Porto Alegre, RS{" "}
          </div>
        </div>
      </a>
    </div>
  );
};

const Search = props => {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        style={{ "min-width": "700px" }}
        placeholder="Digite o nome do evento ou da cidade"
        onChange={props.query}
      />
      <button
        className="btn btn-outline-danger"
        data-query={props.data}
        onClick={e => {
          props.onClick();
        }}
      >
        Pesquisar
      </button>
    </form>
  );
};

const MenuItens = props => {
  return (
    <div className="product-list">
      {props.items.map(user => {
        return <Menu name={user.name} />;
      })}
    </div>
  );
};

const Menu = props => {
  return (
    <div class="btn-group" style={{ "margin-left": "200px" }}>
      <button
        type="button"
        class="btn btn-outline-primary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      />
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">
          Painel Controle
        </a>
        <a class="dropdown-item" href="#">
          Minha Conta
        </a>
        <a class="dropdown-item" href="\logout">
          Sair
        </a>
      </div>
    </div>
  );
};
