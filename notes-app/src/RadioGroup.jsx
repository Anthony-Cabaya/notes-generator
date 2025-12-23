function RadioGroup({ label, name, options }) {
  return (
    <div className="radio-group">
      <p>{label}:</p>
      {options.map(option => (
        <label key={option}>
          <input
            type="radio"
            name={name}
            value={option}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default RadioGroup;