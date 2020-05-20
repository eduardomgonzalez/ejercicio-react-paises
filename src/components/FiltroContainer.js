import React from "react";
import Filtro from "./Filtro.js";
import "./styles/FiltroContainer.css";
/* import FiltroPais from "./FiltroPais.js"; */

class FiltroContainer extends React.Component {
  render() {
    const { listaPaises, onChange, onClick } = this.props;

    return (
      <section className="filtros">
        <button className="btn btn-success" onClick={onClick}>
          Mostrar todos
        </button>
        {/* <Filtro
          listaPaises={listaPaises}
          categoria={"alpha3Code"}
          onChange={onChange}
        /> */}
        <Filtro
          listaPaises={listaPaises}
          categoria={"region"}
          onChange={onChange}
        />
        <Filtro
          listaPaises={listaPaises}
          categoria={"subregion"}
          onChange={onChange}
        />
      </section>
    );
  }
}

export default FiltroContainer;
