import '../styles/BtnClear.css'

const BtnClear = (props) => (
    <div className="btn-clear" onClick={props.manejarClear}>
        Clear
    </div>
);

export default BtnClear;