import '../styles/Boton.css'

function Boton(props) {

    const isOp = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return(
        <div
            className={`btn-contenedor ${isOp(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );

}

export default Boton;