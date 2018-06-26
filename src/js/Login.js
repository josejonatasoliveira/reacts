import React, { Component } from 'react';
import {browserHistory} from 'react-router';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: this.props.msg };
  }

  envia(event) {
    event.preventDefault();

    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({ username: this.login.value, password: this.senha.value }),
      headers: new Headers({
        'Content-type': 'application/json'
      })
    };

    fetch('http://localhost:8080/auth', requestInfo)
      .then(response => {
        if (response.ok) {
          
          return response.text();
        } else {
          throw new Error('não foi possível fazer o login');
        }
      })
      .then(token => {
        alert('certo')
        localStorage.setItem('auth-token', token);
        browserHistory.push('/NavBar');
      })
      .catch(error => {
        this.setState({ msg: error.message });
      });
  }


  render(){
    return(
      <form onSubmit={this.envia.bind(this)}>
        <div className="form-group container " style={{ "width": "400px" }}>
          <label >E-mail</label>
          <input
            type="username"
            className="form-control container"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Digite seu e-mail ou username"
            style={{ "width": "400px" }}
            ref={(input) => this.login = input}
          />
          <span>{this.state.msg}</span>
          <small id="emailHelp" className="form-text text-muted">
            Well never share your email with anyone else.
              </small>
        </div>
        <div className="form-group container" style={{ "width": "400px" }}>
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Digite sua senha"
            style={{ "width": "400px" }}
            ref={(input) => this.senha = input}
          />
        </div>
        <div className="form-group form-check container" style={{ "width": "340px" }}>
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label container" for="exampleCheck1">
            Lembrar senha
              </label>
        </div>
        <div className="container" style={{ "width": "400px" }}>
          <button type="submit" className="btn btn-primary container" >
            Entrar
          </button>
        </div>
    </form>
    );
  }
};

