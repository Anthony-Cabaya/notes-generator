import { useState } from "react";

function NotesForm() {
    const [reportType, setReportType] = useState("");

    return (
        <div>
            <h2>Support Notes Generator</h2>
            <p><strong>Report Type:</strong></p>
            <label>
                <input
                    type="radio"
                    name="reportType"
                    value="tech"
                    onClick={() => setReportType("tech")}
                />
                TECH
            </label>
            <label>
                <input
                    type="radio"
                    name="reportType"
                    value="nontech"
                    onClick={() => setReportType("nontech")}
                />
                NON-TECH
            </label>
        <div>
        );
    }

export default NotesForm;