import '../styles/Boton.css'

function boton({texto, isBtnClic, manejarClic}){
    return(
        <button
            className={isBtnClic ? "btn-clic" : "btn-restart"}
            onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default boton;