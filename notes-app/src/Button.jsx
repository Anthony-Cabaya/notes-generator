function Button({ children, onClick, variant = "primary", fullWidth = false }) {
  return (
    <button
      onClick={onClick}
      className={`button ${variant} ${fullWidth ? 'full-width' : ''}`}
    >
      {children}
    </button>
  );
}

export default Button;