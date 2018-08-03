import React, { Component } from "react";
import "../css/uploadImage.css";
import $ from "jquery";

export default class CriarEvento extends Component {
  render() {
    return (
      <div>
        <h4>Selecione o arquivo de seu computador</h4>
        <form
          action=""
          method="post"
          enctype="multipart/form-data"
          id="js-upload-form"
        >
          <div className="form-inline">
            <span className="btn btn-success fileinput-button">
              <i className="glyphicon glyphicon-plus" />
              <span>Adicionar Imagens</span>
              <input type="file" name="files[]" multiple />
            </span>
            <button
              type="button"
              className="btn btn-primary start"
              data-ng-click="submit()"
            >
              <i className="glyphicon glyphicon-upload" />
              <span>Enviar</span>
            </button>
            <button type="reset" className="btn btn-warning cancel">
              <i className="glyphicon glyphicon-ban-circle" />
              <span>Cancelar</span>
            </button>
            <button type="button" className="btn btn-danger delete">
              <i className="glyphicon glyphicon-trash" />
              <span>Deletar</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
