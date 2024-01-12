import '../styles/Contador.css'

function contador({numClics}){
    return(
        <div className="contador">
            {numClics}
        </div>
    );
}

export default contador;