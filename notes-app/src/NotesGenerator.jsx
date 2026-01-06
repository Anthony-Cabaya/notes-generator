import { useState, useRef } from "react";
import ReportTypeSelector from "./ReportTypeSelector";
import TechReportForm from "./TechReportForm";
import NonTechReportForm from "./NonTechReportForm";
import Button from "./Button";
import GeneratedNotes from "./GeneratedNotes";
import { formatDateTime } from "./formatDateTime";

function NotesGenerator() {
  const [reportType, setReportType] = useState("");
  const [formData, setFormData] = useState({});
  const [generatedNotes, setGeneratedNotes] = useState("");
  const [showNotes, setShowNotes] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const formContainerRef = useRef(null);

  const handleClearAll = () => {
    setFormData({});
    setGeneratedNotes("");
    setShowNotes(false);

    if (formContainerRef.current) {
      formContainerRef.current.scrollTop = 0;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatValue = (val) => (val && val.trim() !== "" ? val : "N/A");
  const toSentenceCase = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const formatNotes = (data, type) => {
    if (type === "tech") {
      return `Report Type: ${toSentenceCase(type)}
Details Of Concern: ${formatValue(data.detailsOfConcern)}
Name Of Caller: ${formatValue(data.nameOfCaller)}
Name Of SOR: ${formatValue(data.nameOfSOR)}
Calling Number: ${formatValue(data.callingNumber)}
Concerned Number: ${formatValue(data.concernedNumber)}
Action Done: ${formatValue(data.actionDone)}
Wocas: ${formatValue(data.wocas)}
CA: ${formatValue(data.ca)}
Date And Time Of Experience: ${formatDateTime(data.dateTime)}
Problem Location: ${formatValue(data.problemLocation)}
Technology / Signal Bars: ${formatValue(data.technology)}
Account Status: ${formatValue(data.accountStatus)}
Sufficient Allocation: ${formatValue(data.sufficientAllocation)}
Existing Case: ${formatValue(data.existingCase)}
Part Of Downtime: ${formatValue(data.partOfDowntime)}
For Escalation: ${formatValue(data.forEscalation)}`;
    } else if (type === "nontech") {
      return `Report Type: ${toSentenceCase(type)}
Details Of Concern: ${formatValue(data.detailsOfConcern)}
Concerned MIN: ${formatValue(data.concernedMIN)}
ANI: ${formatValue(data.ani)}
SOR: ${formatValue(data.sor)}
Caller Name: ${formatValue(data.callerName)}
Action Done: ${formatValue(data.actionDone)}
Wocas: ${formatValue(data.wocas)}`;
    }
  }

  const handleGenerate = () => {
    try {
      const notes = formatNotes(formData, reportType);
      setGeneratedNotes(notes);
      setShowNotes(true);

      localStorageService.saveNotes({
        reportType,
        formData,
        generatedNotes: notes,
      });

      console.log('Notes saved offline successfully!');
    } catch (error) {
      console.error('Failed to save notes:', error);
    }
  };

  const handleCopyNotes = () => {
    navigator.clipboard.writeText(generatedNotes);
    setCopyMessage("Notes copied to clipboard!");
    setTimeout(() => setCopyMessage(""), 2000);
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
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {reportType === "nontech" && (
          <NonTechReportForm
            formData={formData}
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
            copyMessage={copyMessage}
          />
        )}
      </div>
    </div>
  );
}

export default NotesGenerator;