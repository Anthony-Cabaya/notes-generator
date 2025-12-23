import FormField from "./FormField";

function NonTechReportForm() {
  return (
    <div>
      <h3>Non-Tech Report</h3>

      <FormField label="Details of Concern:" isTextarea />
      <FormField label="Concerned MIN:" />
      <FormField label="ANI:" />
      <FormField label="SOR:" />
      <FormField label="Caller Name:" />
      <FormField label="Action Done:" isTextarea />
      <FormField label="Wocas:" />
    </div>
  );
}

export default NonTechReportForm;