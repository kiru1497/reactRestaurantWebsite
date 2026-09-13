import "./Input.css";

function Input(props) {
  return (
    <div className="input-container">
      <label htmlFor={props.id}>{props.label}</label>

      <input
        id={props.id}
        type={props.type || "text"}
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
