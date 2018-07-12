import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Router, Route, browserHistory } from "react-router";
import Modal from "./js/Modal";
import NavBar from "./js/NavBar";
import { matchPattern } from "react-router/lib/PatternUtils";
import Logout from "./js/Logout";

function verificaAutenticacao(nextState, replace) {
  const resultado = matchPattern(
    "/navbar(/:login)",
    nextState.location.pathname
  );
  const enderecoPrivadoTimeline = resultado.paramValues[0] === undefined;

  if (enderecoPrivadoTimeline && localStorage.getItem("auth-token") === null) {
    replace("/?msg=você precisa estar logado para acessar o endereço");
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/navbar(/:modal)" component={Modal} />
      <Route path="/navbar" component={NavBar} />
      <Route path="/logout" component={Logout} />
    </Route>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
