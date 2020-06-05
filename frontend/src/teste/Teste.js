import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/js/materialize";
import "./style.css";

import axios from "axios";

export class Teste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matricula: "",
      curso: "",
      dia_ausente: "",
      observacoes: "",
      file: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let Change = {};
    Change[event.target.name] = event.target.value;
    this.setState(Change);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    const file = document.getElementById("#file");
    formData.append("matricula", this.state.matricula);
    formData.append("curso", this.state.curso);
    formData.append("dia_ausente", this.state.dia_ausente);
    formData.append("observacoes", this.state.observacoes);
    formData.append("file", file.files[0]);

    axios
      .post("http://localhost:3001/create", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
      .then(function (response) {
        alert("Requerimento encaminhado com sucesso!");
      })
      .catch(function (error) {
        alert(error, "Falha no envio do requerimento, tente novamente!");
      });
  }
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems);
      var elems = document.querySelectorAll(".datepicker");
      var instances = M.Datepicker.init(elems);
    });
  }
  render() {
    const dateFormat = "1976-04-19T12:59-0500";
    return (
      <div>
        <nav class="light-green darken-4" role="navigation">
          <div class="nav-wrapper container">
            <a id="logo-container" href=" " class="brand-logo">
              IFPE
            </a>

            <a href="aa.html" data-target="nav-mobile" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>

            <ul class="right hide-on-med-and-down">
              <li>
                <a href="https://portal.ifpe.edu.br/campus/jaboatao">
                  Site Oficial
                </a>
              </li>
              <li>
                <a href="aa.html">Ajuda</a>
              </li>
            </ul>

            <ul id="nav-mobile" class="sidenav">
              <li>
                <a href="https://portal.ifpe.edu.br/campus/jaboatao">
                  Site Oficial
                </a>
              </li>
              <li>
                <a href="aa.html">Ajuda</a>
              </li>
            </ul>
          </div>
        </nav>
        <br></br>
        <form
          action="/create"
          enctype="multipart/form-data"
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <div className="container row">
            <div className="input-field col s12 m6">
              <select
                name="curso"
                value={this.state.curso}
                onChange={this.handleChange}
              >
                <option value="" disabled selected>
                  Selecione o seu curso
                </option>
                <option type="text" value="Informática">
                  {" "}
                  Informatica para internet
                </option>
                <option type="text" value="Qualidade">
                  {" "}
                  Qualidade
                </option>
                <option type="text" value="ADS">
                  Analise e desenvolvimento de sistemas
                </option>
              </select>
              <label>Escolha seu Curso</label>
            </div>
            <div className="input-field col s12 m6">
              <input
                id="input_text"
                maxlength="13"
                name="matricula"
                type="text"
                value={this.state.matricula}
                onChange={this.handleChange}
              />
              <label htmlFor="input_text">Insira sua matricula:</label>
            </div>

            <div className="input-field col s12 m6">
              <select>
                <option value="" disabled selected>
                  Selecione o tipo de Requerimento
                </option>
                <option value="SegundaChamada"> Segunda chamada</option>
              </select>
            </div>
            <div className="input-field col s12 m6">
              <label htmlFor="datepicker">Data do dia perdido:</label>
              <input
                name="dia_ausente"
                type="date"
                date={dateFormat}
                value={this.state.dia_ausente}
                onChange={this.handleChange}
              />
            </div>
            <div className="textarea col s12 m6">
              <textarea
                rows="1000"
                cols="1000"
                placeholder="Observações:"
                name="observacoes"
                type="text"
                value={this.state.observacoes}
                onChange={this.handleChange}
              />
            </div>
            <div className="textarea col s12 m6">
              <div class="file-field input-field">
                <div class="btn green lighten-2 ">
                  <span>File</span>
                  <input
                    id="#file"
                    type="file"
                    name="file"
                    value={this.state.file}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="file-path-wrapper">
                  <input
                    className="file-path validate"
                    type="text"
                    placeholder="Anexe seus arquivos aqui"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="input-field col s12 m6 l3 center">
            <button
              type="submit"
              value="Enviar"
              href="a"
              className="btn waves-effect green lighten-2 col s12"
            >
              Enviar Requerimento
            </button>
          </div>
        </form>
        <footer className="page-footer  grey darken">
          <div className="container">
            <div className="row">
              <div className="col s12 l6">
                <h5> Mais informações:</h5>
              </div>
              <div className="col s12 l4 offset-12">
                <h5>Redes Sociais</h5>
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/ifpejaboatao/"
                      class="black-text"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ifpejaboatao/"
                      class="black-text"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://br.linkedin.com/school/ifpe-jaboatao/"
                      class="black-text"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyrwright grey darken-3">
            <div className="container center-align">
              &copy; Todos os direitos reservados-2020 PIBEX
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Teste;
