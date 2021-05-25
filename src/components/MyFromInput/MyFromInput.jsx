import "./MyFromInput.scss";

function FormInput({ change, label, ...otherprops }) {
  return (
    <div className="FormInput">
      <input
        className="MyInput"
        onChange={(e) => change(e.target.value)}
        {...otherprops}
        autoComplete="off"
      />
      <label className={`MyLabel ${otherprops.value.length ? "shrink" : ""}`}>
        {label}
      </label>
    </div>
  );
}

export default FormInput;
