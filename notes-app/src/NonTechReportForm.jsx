import FormField from "./FormField";
import { useFormField } from "./useFormField";

function NonTechReportForm({ formData, setFormData }) {
  const field = useFormField(formData, setFormData);

  return (
    <div>
      <h3>Non-Tech Report</h3>

      <FormField label="Details of Concern:" isTextarea {...field("detailsOfConcern")} />
      <FormField label="Concerned MIN:" {...field("concernedMIN")} />
      <FormField label="ANI:" {...field("ani")} />
      <FormField label="SOR:" {...field("sor")} />
      <FormField label="Caller Name:" {...field("callerName")} />
      <FormField label="Action Done:" isTextarea {...field("actionDone")} />
      <FormField label="Wocas:" {...field("wocas")} />
    </div>
  );
}

export default NonTechReportForm;