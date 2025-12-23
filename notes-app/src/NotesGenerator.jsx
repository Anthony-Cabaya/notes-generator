import { useState } from "react";
import ReportTypeSelector from "./ReportTypeSelector";
import TechReportForm from "./TechReportForm";
import NonTechReportForm from "./NonTechReportForm";

function NotesGenerator() {
  const [reportType, setReportType] = useState("");

  return (
    <div className="container">
      <ReportTypeSelector
        reportType={reportType}
        setReportType={setReportType}
      />

      <div className="form-container">
        {reportType === "tech" && <TechReportForm />}
        {reportType === "nontech" && <NonTechReportForm />}
      </div>
    </div>
  );
}

export default NotesGenerator;