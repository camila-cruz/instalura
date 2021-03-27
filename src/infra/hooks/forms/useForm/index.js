import { useState } from 'react';

export function useForm({ initialValues, onSubmit }) {
  const [values, setValues] = useState(initialValues);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const { value } = event.target;
      const fieldName = event.target.getAttribute('name');

      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
  };
}
