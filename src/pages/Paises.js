import React, { Component } from "react";
import "./styles/Paises.css";
import TablaPaises from "../components/TablaPaises";
import FiltroContainer from "../components/FiltroContainer";

class Paises extends Component {
  state = {
    paises: [],
    valorFiltrado: "",
    categoria: "",
  };

  handleChange = (e) => {
    const categoria = e.target.getAttribute("data");

    this.setState({
      valorFiltrado: e.target.value,
      categoria: categoria,
    });
  };

  handleClick = (e) => {
    this.setState({ categoria: "" });
  };

  componentDidMount() {
    this.apiPaises();
  }

  apiPaises = async () => {
    try {
      const datos = await fetch("https://restcountries.eu/rest/v2/all", {
        method: "GET",
      });

      const paises = await datos.json();
      this.setState({ paises: paises });
    } catch (err) {
      alert("Se produjo error: " + err);
    }
  };

  render() {
    //Recupero el estado
    const { paises, valorFiltrado, categoria } = this.state;

    return (
      <section className="paises">
        <div className="">
          <FiltroContainer
            listaPaises={paises}
            onChange={this.handleChange}
            onClick={this.handleClick}
          />
        </div>

        <section className="paises__table">
          <TablaPaises
            listaPaises={paises}
            valor={valorFiltrado}
            categoria={categoria}
            onClick={this.handleClickPaises}
          />
        </section>
      </section>
    );
  }
}

export default Paises;
