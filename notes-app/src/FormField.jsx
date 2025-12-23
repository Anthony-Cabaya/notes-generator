function FormField({ label, type = "text", isTextarea = false }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      {isTextarea ? <textarea /> : <input type={type} />}
    </div>
  );
}

export default FormField;