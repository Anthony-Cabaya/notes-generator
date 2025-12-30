import FormField from "./FormField";
import RadioGroup from "./RadioGroup";
import { useFormField } from "./useFormField";

function TechReportForm({ formData, setFormData }) {
  const field = useFormField(formData, setFormData);

  return (
    <div>
      <h3>Tech Report</h3>

      <FormField label="Details of Concern:" isTextarea {...field("detailsOfConcern")} />
      <FormField label="Name of Caller:" {...field("nameOfCaller")} />
      <FormField label="Name of SOR:" {...field("nameOfSOR")} />
      <FormField label="Calling Number:" {...field("callingNumber")} />
      <FormField label="Concerned Number:" {...field("concernedNumber")} />
      <FormField label="Action Done:" isTextarea {...field("actionDone")} />
      <FormField label="Wocas:" {...field("wocas")} />

      <RadioGroup
        label="CA"
        name="ca"
        options={["Passed", "Failed"]}
        {...field("ca")}
      />

      <FormField
      label="Date and Time of Experience:"
      type="datetime-local"
      {...field("dateTime")} />
      <FormField label="Problem Location:" isTextarea {...field("problemLocation")} />
      <FormField label="Technology / Signal Bars:" {...field("technology")} />
      <FormField label="Account Status:" {...field("accountStatus")} />

      <RadioGroup
        label="Sufficient Allocation"
        name="allocation"
        options={["Yes", "No"]}
        {...field("sufficientAllocation")}
      />

      <FormField label="Existing Case:" isTextarea {...field("existingCase")} />
      <FormField label="Part of Downtime:" {...field("partOfDowntime")} />

      <RadioGroup
        label="For Escalation"
        name="escalation"
        options={["Yes", "No"]}
        {...field("forEscalation")}
      />
    </div>
  );
}

export default TechReportForm;