import "./style.css";

const Alert = ({ alert, setAlert }) => {
  return (
    <div className="alert">
      <span>{alert.msg}</span>
      <button onClick={() => setAlert({ isOpen: false, msg: "" })} id="close">
        x
      </button>
    </div>
  );
};

export default Alert;
