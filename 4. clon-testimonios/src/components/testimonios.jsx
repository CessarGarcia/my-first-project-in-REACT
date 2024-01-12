import React from "react";
import '../stylesheets/testimonios.css'

class Testimonios extends React.Component {
   render() {
      return (
         <div className="contenedor-testimonio">
            <img
               className="img-testimonio"
               src={require(`../image/testimonio-${this.props.imagen}.jpg`)}
               alt={`Foto de ${this.props.nombre}`}
            />
            <div className="contenedor-texto-testimonio">
               <p className="nombre-testimonio"><b>{this.props.nombre}</b> en {this.props.pais}</p>
               <p className="cargo-testimonio">{this.props.cargo} en <b>{this.props.empresa}</b></p>
               <p className="texto-testimonio">"{this.props.testimonio}"</p>
            </div>
         </div>
      );
   }
}

export default Testimonios;