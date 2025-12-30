export function useFormField(formData, setFormData) {
  return (field) => ({
    value: formData[field] || "",
    onChange: (value) => setFormData(prev => ({ ...prev, [field]: value }))
  });
}