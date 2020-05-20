import React, { Component } from "react";
import "./styles/Filtro.css";

class Filtro extends Component {
  render() {
    const { listaPaises, categoria, onChange } = this.props;

    /* Primero MAPEO la lista de paises y obtengo un array con todas las categorias a filtrar. 
    Luego FILTRO para no repetir ninguna.
    Por ultimo MAPEO nuevamente para rendeirzar cada elemento en un OPTION*/
    const valores = listaPaises
      .map((elemento) => {
        return elemento[categoria]; // [asia, america, asia, europa, oceania, america, asia,...etc x 250];
      })
      .filter((categoria, indiceActual, array) => {
        // Sin repetidos
        return array.indexOf(categoria) === indiceActual; // [asia, america, europa, oceania, agrica, ""] Sin repetidos
      })
      .map((elemento, index) => {
        return (
          <option key={index} value={elemento}>
            {" "}
            {/* paso en value el nombre del elemento para luego despues obtenerlo */}
            {elemento}
          </option>
        );
        // RENDERIZO LOS OPTION: Ejemplo: <option key={0} value={elemento}> asia <option>
      });

    return (
      <div className="filtro">
        <label htmlFor="categoria"> {categoria}: </label>
        <select id="categoria" onChange={onChange} data={categoria}>
          <option value="seleccion">Seleccione un valor</option>
          {/* <option defaultValue>Seleccione una opcion...</option> */}
          {valores}
        </select>
      </div>
    );
  }
}

export default Filtro;
