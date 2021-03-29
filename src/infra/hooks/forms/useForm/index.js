import { useEffect, useState } from 'react';

export function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [touched, setTouchedFields] = useState({});

  useEffect(() => {
    validateSchema(values)
      .then(() => {
        setIsFormDisabled(false);
        setErrors({});
      })
      .catch((err) => {
        const formatedErrors = err.inner.reduce((errorObjectAcc, currentError) => {
          const fieldName = currentError.path;
          const errorMessage = currentError.message;

          return {
            ...errorObjectAcc,
            [fieldName]: errorMessage,
          };
        }, {});
        setErrors(formatedErrors);
        setIsFormDisabled(true);
      });

    if (values.usuario.length > 0) {
      setIsFormDisabled(false);
    } else {
      setIsFormDisabled(true);
    }
  }, [values]);

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
    // Validação de erros
    isFormDisabled,
    errors,
    touched,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');

      setTouchedFields({
        ...touched,
        [fieldName]: true,
      });
    },
  };
}
