import FormField from "./FormField";
import RadioGroup from "./RadioGroup";

function TechReportForm() {
  return (
    <div>
      <h3>Tech Report</h3>

      <FormField label="Details of Concern:" isTextarea />
      <FormField label="Name of Caller:" />
      <FormField label="Name of SOR" />
      <FormField label="Calling Number:" />
      <FormField label="Concerned Number:" />
      <FormField label="Action Done:" isTextarea />
      <FormField label="Wocas:" />

      <RadioGroup
        label="CA"
        name="ca"
        options={["Passed", "Failed"]}
      />

      <FormField label="Date and Time of Experience:" type="datetime-local" />
      <FormField label="Problem Location:" isTextarea />
      <FormField label="Technology / Signal Bars:" />
      <FormField label="Account Status:" />

      <RadioGroup
        label="Sufficient Allocation:"
        name="allocation"
        options={["Yes", "No"]}
      />

      <FormField label="Existing Case:" isTextarea />
      <FormField label="Part of Downtime:" />

      <RadioGroup
        label="For Escalation:"
        name="escalation"
        options={["Yes", "No"]}
      />
    </div>
  );
}

export default TechReportForm;