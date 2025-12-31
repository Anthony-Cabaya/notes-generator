import Button from "./Button";

function GeneratedNotes({ notes, onCopy, copyMessage }) {
  return (
    <div className="generated-notes">
      <h3>Generated Notes</h3>
      <div className="notes-output">
        <pre>{notes}</pre>
      </div>
      <Button onClick={onCopy} variant="secondary" fullWidth>
        Copy Notes
      </Button>
      {copyMessage && (
        <div className="copy-message">
          {copyMessage}
        </div>
      )}
    </div>
  );
}

export default GeneratedNotes;