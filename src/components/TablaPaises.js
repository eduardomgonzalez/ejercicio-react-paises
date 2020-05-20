import React, { Component } from "react";
import "./styles/TablaPaises.css";
import { Link } from "react-router-dom";

class TablaPaises extends Component {
  render() {
    const { listaPaises, valor, categoria } = this.props;

    let datosPaises;

    /* si categoria es distinto de vacio que me filtre por el valor de categoria */
    if (categoria !== "") {
      datosPaises = listaPaises
        .filter((pais) => {
          return pais[categoria] === valor;
        })
        .map((pais) => {
          return (
            <tr key={pais.alpha3Code} className="table-tr">
              <td>
                <Link
                  to={`/paises/${pais.alpha3Code}`}
                  className="alphaCode-active"
                >
                  {pais.alpha3Code}
                </Link>
              </td>
              <td>
                <Link
                  to={`/paises/${pais.alpha3Code}`}
                  className="alphaCode-active"
                >
                  {pais.name}
                </Link>
              </td>
              <td>{pais.capital}</td>
              <td>{pais.region}</td>
              <td>{pais.subregion}</td>
              <td>
                <img src={pais.flag} alt="" height="35px" />
              </td>
            </tr>
          );
        });
      /* si es vacio me va a filtrar toda la lista completa */
    } else {
      datosPaises = listaPaises.map((pais) => {
        return (
          <tr key={pais.alpha3Code} className="table-tr">
            <td>
              <Link
                to={`/paises/${pais.alpha3Code}`}
                className="alphaCode-active"
              >
                {pais.alpha3Code}
              </Link>
            </td>
            <td>
              <Link
                to={`/paises/${pais.alpha3Code}`}
                className="alphaCode-active"
              >
                {pais.name}
              </Link>
            </td>
            <td>{pais.capital}</td>
            <td>{pais.region}</td>
            <td>{pais.subregion}</td>
            <td>
              <img src={pais.flag} alt="" height="35px" />
            </td>
          </tr>
        );
      });
    }

    return (
      <div className="tableContainer">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Pais</th>
              <th>Capital</th>
              <th>Region</th>
              <th>Sub Region</th>
              <th>Bandera</th>
            </tr>
          </thead>
          <tbody>{datosPaises}</tbody>
        </table>
      </div>
    );
  }
}

export default TablaPaises;
