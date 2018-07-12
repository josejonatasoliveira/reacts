import React, { Component } from "react";
import $ from "jquery";
import { browserHistory } from "react-router";
import "../css/modal.css";
import "../css/style.css";
import axios from "axios";
import InputMask from "react-input-mask";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: this.props.msg };
    this.setState = { isLoad: false };
  }

  envia(event) {
    event.preventDefault();

    const requestInfo = {
      method: "POST",
      body: JSON.stringify({
        email: this.login.value,
        password: this.senha.value
      }),
      headers: new Headers({
        "Content-type": "application/json"
      })
    };

    fetch("https://reqres.in/api/login", requestInfo)
      .then(response => {
        if (response.ok) {
          return response.text;
        } else {
          console.log("Error");
        }
      })
      .then(token => {
        localStorage.setItem("auth-token", token);
        browserHistory.push("/");
      })
      .catch(error => {
        console.log(error.text);
      });
  }

  //Funcao para cadastro de usuarios
  signup(event) {
    const requestInfo = {
      method: "POST",
      body: JSON.stringify({
        nome: this.nome.value,
        sobrenome: this.sobrenome.value,
        email: this.email.value,
        enabled: 1,
        lastPasswordResetDate: "2018-06-21",
        senha: this.senha.value
      }),
      headers: new Headers({
        "Content-type": "application/json"
      })
    };

    fetch("http://localhost:8080/usuario/signup/", requestInfo).then(
      response => {
        if (response.ok) {
          console.log(response);
          return response.text;
        } else {
          alert("Erro ao salvar");
        }
      }
    );
  } //Fim da funcao de cadastro de usuarios

  render() {
    return (
      <div
        className="modal fade"
        id="login-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
        style={{ display: "none", "z-index": "9999" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" align="center">
              <img
                className="img-circle"
                id="img_logo"
                src="https://www.askideas.com/media/14/Lets-PartyLogo.png"
              />
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span
                  className="glyphicon glyphicon-remove"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div id="div-forms">
              <form
                id="login-form"
                style={{ display: "none" }}
                onSubmit={this.envia.bind(this)}
              >
                <div className="modal-body">
                  <div id="div-login-msg">
                    <div
                      id="icon-login-msg"
                      className="glyphicon glyphicon-chevron-right"
                    />
                    <span id="text-login-msg">Entre com seu nome e senha.</span>
                  </div>
                  <p>
                    <a
                      class="btn btn-primary social-login-btn social-facebook"
                      href="/auth/facebook"
                    >
                      <i class="fa fa-facebook" />
                    </a>
                    <a
                      class="btn btn-primary social-login-btn social-twitter"
                      href="/auth/twitter"
                    >
                      <i class="fa fa-twitter" />
                    </a>
                  </p>
                  <p>
                    <a
                      class="btn btn-primary social-login-btn social-linkedin"
                      href="/auth/linkedin"
                    >
                      <i class="fa fa-linkedin" />
                    </a>
                    <a
                      class="btn btn-primary social-login-btn social-google"
                      href="/auth/google"
                    >
                      <i class="fa fa-google-plus" />
                    </a>
                  </p>
                  OU
                  <input
                    id="login_username"
                    className="form-control"
                    type="text"
                    placeholder="Entre com seu e-mail ou nome"
                    ref={input => (this.login = input)}
                    required
                  />
                  <input
                    id="login_password"
                    className="form-control"
                    type="password"
                    placeholder="Digite sua senha"
                    ref={input => (this.senha = input)}
                    required
                  />
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> Lembrar senha
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Login
                    </button>
                  </div>
                  <div>
                    <button
                      id="login_lost_btn"
                      type="button"
                      className="btn btn-link"
                    >
                      Esqueceu a senha?
                    </button>
                    <button
                      id="login_register_btn"
                      type="button"
                      className="btn btn-link"
                    >
                      Registrar
                    </button>
                  </div>
                </div>
              </form>

              <form id="lost-form" style={{ display: "none" }}>
                <div className="modal-body">
                  <div id="div-lost-msg">
                    <div
                      id="icon-lost-msg"
                      className="glyphicon glyphicon-chevron-right"
                    />
                    <span id="text-lost-msg">Digite seu e-mail.</span>
                  </div>
                  <input
                    id="lost_email"
                    className="form-control"
                    type="text"
                    placeholder="E-mail"
                    required
                  />
                </div>
                <div className="modal-footer">
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Enviar
                    </button>
                  </div>
                  <div>
                    <button
                      id="lost_login_btn"
                      type="button"
                      className="btn btn-link"
                    >
                      Logar
                    </button>
                    <button
                      id="lost_register_btn"
                      type="button"
                      className="btn btn-link"
                    >
                      Registrar
                    </button>
                  </div>
                </div>
              </form>

              <form id="register-form" onSubmit={this.signup.bind(this)}>
                <div className="modal-body">
                  <div id="div-register-msg">
                    <div
                      id="icon-register-msg"
                      className="glyphicon glyphicon-chevron-right"
                    />
                    <span id="text-register-msg">Registrar uma conta</span>
                  </div>
                  <p>
                    <a
                      class="btn btn-primary social-login-btn social-facebook"
                      href="/auth/facebook"
                    >
                      <i class="fa fa-facebook" />
                    </a>
                    <a
                      class="btn btn-primary social-login-btn social-twitter"
                      href="/auth/twitter"
                    >
                      <i class="fa fa-twitter" />
                    </a>
                  </p>
                  <p>
                    <a
                      class="btn btn-primary social-login-btn social-linkedin"
                      href="/auth/linkedin"
                    >
                      <i class="fa fa-linkedin" />
                    </a>
                    <a
                      class="btn btn-primary social-login-btn social-google"
                      href="/auth/google"
                    >
                      <i class="fa fa-google-plus" />
                    </a>
                  </p>
                  OU
                  <input
                    id="register_name"
                    className="form-control"
                    type="text"
                    placeholder="Nome"
                    ref={input => (this.nome = input)}
                    required
                  />
                  <input
                    id="register_username"
                    className="form-control"
                    type="text"
                    placeholder="Sobrenome"
                    ref={input => (this.sobrenome = input)}
                    required
                  />
                  <input
                    id="register_email"
                    className="form-control"
                    type="text"
                    placeholder="E-mail"
                    ref={input => (this.email = input)}
                    required
                  />
                  <input
                    id="register_password"
                    className="form-control"
                    type="password"
                    placeholder="Senha"
                    ref={input => (this.senha = input)}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Registrar
                    </button>
                  </div>
                  <div>
                    <button
                      id="register_login_btn"
                      type="button"
                      className="btn btn-link"
                    >
                      Logar
                    </button>
                    <button
                      id="register_lost_btn"
                      type="button"
                      className="btn btn-link"
                    >
                      Esqueceu a senha?
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

$(function() {
  var $formLogin = $("#login-form");
  var $formLost = $("#lost-form");
  var $formRegister = $("#register-form");
  var $divForms = $("#div-forms");
  var $modalAnimateTime = 300;
  var $msgAnimateTime = 150;
  var $msgShowTime = 2000;

  $("form").submit(function() {
    switch (this.id) {
      case "login-form":
        var $lg_username = $("#login_username").val();
        var $lg_password = $("#login_password").val();
        if (this.response) {
          msgChange(
            $("#div-login-msg"),
            $("#icon-login-msg"),
            $("#text-login-msg"),
            "success",
            "glyphicon-ok",
            "Login ok"
          );
        } else {
          msgChange(
            $("#div-login-msg"),
            $("#icon-login-msg"),
            $("#text-login-msg"),
            "error",
            "glyphicon-remove",
            "Login error"
          );
        }
        return false;
        break;
      case "lost-form":
        var $ls_email = $("#lost_email").val();
        if ($ls_email == "ERROR") {
          msgChange(
            $("#div-lost-msg"),
            $("#icon-lost-msg"),
            $("#text-lost-msg"),
            "error",
            "glyphicon-remove",
            "Send error"
          );
        } else {
          msgChange(
            $("#div-lost-msg"),
            $("#icon-lost-msg"),
            $("#text-lost-msg"),
            "success",
            "glyphicon-ok",
            "Send OK"
          );
        }
        return false;
        break;
      case "register-form":
        var $rg_name = $("register_name").val();
        var $rg_username = $("#register_username").val();
        var $rg_cpf = $("register_email").val();
        var $rg_email = $("#register_email").val();
        var $rg_password = $("#register_password").val();
        if ($rg_username == "ERROR") {
          msgChange(
            $("#div-register-msg"),
            $("#icon-register-msg"),
            $("#text-register-msg"),
            "error",
            "glyphicon-remove",
            "Register error"
          );
        } else {
          msgChange(
            $("#div-register-msg"),
            $("#icon-register-msg"),
            $("#text-register-msg"),
            "success",
            "glyphicon-ok",
            "Register OK"
          );
        }
        return false;
        break;
      default:
        return false;
    }
    return false;
  });

  $("#login_register_btn").click(function() {
    modalAnimate($formLogin, $formRegister);
  });
  $("#register_login_btn").click(function() {
    modalAnimate($formRegister, $formLogin);
  });
  $("#login_lost_btn").click(function() {
    modalAnimate($formLogin, $formLost);
  });
  $("#lost_login_btn").click(function() {
    modalAnimate($formLost, $formLogin);
  });
  $("#lost_register_btn").click(function() {
    modalAnimate($formLost, $formRegister);
  });
  $("#register_lost_btn").click(function() {
    modalAnimate($formRegister, $formLost);
  });

  function modalAnimate($oldForm, $newForm) {
    var $oldH = $oldForm.height();
    var $newH = $newForm.height();
    $divForms.css("height", $oldH);
    $oldForm.fadeToggle($modalAnimateTime, function() {
      $divForms.animate({ height: $newH }, $modalAnimateTime, function() {
        $newForm.fadeToggle($modalAnimateTime);
      });
    });
  }

  function msgFade($msgId, $msgText) {
    $msgId.fadeOut($msgAnimateTime, function() {
      $(this)
        .text($msgText)
        .fadeIn($msgAnimateTime);
    });
  }

  function msgChange(
    $divTag,
    $iconTag,
    $textTag,
    $divClass,
    $iconClass,
    $msgText
  ) {
    var $msgOld = $divTag.text();
    msgFade($textTag, $msgText);
    $divTag.addClass($divClass);
    $iconTag.removeClass("glyphicon-chevron-right");
    $iconTag.addClass($iconClass + " " + $divClass);
    setTimeout(function() {
      msgFade($textTag, $msgOld);
      $divTag.removeClass($divClass);
      $iconTag.addClass("glyphicon-chevron-right");
      $iconTag.removeClass($iconClass + " " + $divClass);
    }, $msgShowTime);
  }
});
