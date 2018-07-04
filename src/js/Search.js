import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }
  render() {
    return (
      <div style={{ "margin-top": "70px" }}>
        <form className="form-inline my-2 my-lg-0 container">
          <input
            className="form-control mr-sm-2"
            type="search"
            style={{ "min-width": "380px" }}
            placeholder="Pesquisar eventos"
            aria-label="Search"
          />
          <input
            className="form-control mr-sm-2"
            type="search"
            style={{ "min-width": "380px" }}
            placeholder="Pesquisar por cidade"
            aria-label="Search"
          />
          <div className="btn-group">
            <select
              class="custom-select"
              id="inputGroupSelect01"
              style={{ "min-width": "40px" }}
            >
              <option>Todas as datas</option>
              <option>Hoje</option>
              <option>Amanha</option>
              <option>Esta semana</option>
              <option>Este fim de semana</option>
              <option>Proxima semana</option>
              <option>Este mes</option>
            </select>
          </div>
          <button type="button" class="btn btn-danger">
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}
