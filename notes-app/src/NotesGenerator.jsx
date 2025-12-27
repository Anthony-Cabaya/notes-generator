import { useState } from "react";
import ReportTypeSelector from "./ReportTypeSelector";
import TechReportForm from "./TechReportForm";
import NonTechReportForm from "./NonTechReportForm";
import Button from "./Button";
import GeneratedNotes from "./GeneratedNotes";

function NotesGenerator() {
  const [reportType, setReportType] = useState("");
  const [formData, setFormData] = useState({});
  const [generatedNotes, setGeneratedNotes] = useState("");
  const [showNotes, setShowNotes] = useState(false);

  const handleClearAll = () => {
    setFormData({});
    setGeneratedNotes("");
    setShowNotes(false);
  };

  const handleGenerate = () => {
    const notes = formatNotes(formData, reportType);
    setGeneratedNotes(notes);
    setShowNotes(true);
  }

  const handleCopyNotes = () => {
    navigator.clipboard.writeText(generatedNotes);
    alert("Notes copied to clipboard");
  }

  const formatNotes = (data, type) => {
    return `Report Type: ${type}\n...`;
  }

  return (
    <div className="container">
      <ReportTypeSelector
        reportType={reportType}
        setReportType={setReportType}
      />

      <div className="form-container">
        {reportType === "tech" && (
          <TechReportForm
            formData={reportType}
            setFormData={setFormData}
          />
        )}
        {reportType === "nontech" && (
          <NonTechReportForm
            formData={reportType}
            setFormData={setFormData}
          />
        )}

        {reportType && (
          <div className="button-group">
            <Button
              onClick={handleClearAll}
              variant="secondary">
              Clear All Fields
            </Button>
            <Button
              onClick={handleGenerate}
              variant="primary">
              Generate Notes
            </Button>
          </div>
        )}

        {showNotes && (
          <GeneratedNotes
            notes={generatedNotes}
            onCopy={handleCopyNotes}
          />
        )}
      </div>
    </div>
  );
}

export default NotesGenerator;