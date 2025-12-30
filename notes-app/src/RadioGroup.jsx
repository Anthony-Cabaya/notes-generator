function RadioGroup({ label, name, options, value, onChange }) {
  return (
    <div className="radio-group">
      <p>{label}:</p>
      {options.map(option => (
        <label key={option}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default RadioGroup;