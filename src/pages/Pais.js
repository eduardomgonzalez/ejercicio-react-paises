import React, { Component } from "react";
import "./styles/Pais.css";
import { Link } from "react-router-dom";

class Pais extends Component {
  state = {
    pais: {},
  };

  componentDidMount() {
    this.apiPaises();
  }

  apiPaises = async () => {
    try {
      const datos = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${this.props.match.params.alphaCode}`,
        {
          method: "GET",
        }
      );

      const pais = await datos.json();
      this.setState({ pais: pais });
    } catch (err) {
      alert("Se produjo error: " + err);
    }
  };

  render() {
    let { pais } = this.state;
    // Obtengo la moneda
    let curr = pais.currencies;
    let moneda;
    for (let prop in curr) {
      moneda = curr[prop].name;
    }

    let valores = (
      <tr key={pais.alpha3Code}>
        <td>{pais.alpha3Code}</td>
        <td>{pais.name}</td>
        <td>{pais.capital}</td>
        <td>{pais.population}</td>
        <td>{pais.numericCode}</td>
        <td>{pais.area}</td>
        <td>{pais.topLevelDomain}</td>
        <td>{pais.callingCodes}</td>
        <td>{JSON.stringify(pais.borders)}</td>
        <td>{moneda}</td>
      </tr>
    );

    return (
      <div className="tableContainer">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Pais</th>
              <th>Capital</th>
              <th>Población</th>
              <th>Codigo Numerico</th>
              <th>area</th>
              <th>Dominio de primer Nivel</th>
              <th>Codigo de llamadas</th>
              <th>Bordes</th>
              <th>Moneda</th>
            </tr>
          </thead>
          <tbody>{valores}</tbody>
        </table>

        <div className="btn-back">
          <Link to="/paises" className="btn btn-primary">
            Regresar
          </Link>
        </div>
      </div>
    );
  }
}

export default Pais;
