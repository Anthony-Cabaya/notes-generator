function FormField({ label, type = "text", isTextarea = false, value, onChange }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      {isTextarea ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </div>
  );
}

export default FormField;