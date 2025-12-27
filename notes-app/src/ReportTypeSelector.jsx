function ReportTypeSelector({ reportType, setReportType }) {
  return (
    <div>
      <h2>Support Notes Generator</h2>
      <p><strong>Report Type:</strong></p>

      <div>
        <label>
          <input
            type="radio"
            name="reportType"
            value="tech"
            checked={reportType === "tech"}
            onChange={() => setReportType("tech")}
          />
          TECH
        </label>
        <label>
          <input
            type="radio"
            name="reportType"
            value="nontech"
            checked={reportType === "nontech"}
            onChange={() => setReportType("nontech")}
          />
          NON-TECH
        </label>
      </div>
    </div>
  );
}

export default ReportTypeSelector;