import Button from "./Button";

function GeneratedNotes({ notes, onCopy }) {
  return (
    <div className="generated-notes">
      <h3>Generated Notes</h3>
      <div className="notes-output">
        <pre>{notes}</pre>
      </div>
      <Button onClick={onCopy} variant="secondary" fullWidth>
        Copy Notes
      </Button>
    </div>
  );
}

export default GeneratedNotes;