import { useEffect, useState } from 'react';

function formatErrors(yupErrorsInner = []) {
  yupErrorsInner.reduce((errorObjectAcc, currentError) => {
    const fieldName = currentError.path;
    const errorMessage = currentError.message;

    return {
      ...errorObjectAcc,
      [fieldName]: errorMessage,
    };
  }, {});
}

export function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [touched, setTouchedFields] = useState({});

  async function validateValues(currentValues) {
    try {
      await validateSchema(currentValues);
      setErrors({});
      setIsFormDisabled(false);
    } catch (err) {
      const formatedErrors = formatErrors(err.inner);
      setErrors(formatedErrors);
      setIsFormDisabled(true);
    }
  }

  useEffect(() => {
    validateValues(values);

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
    setIsFormDisabled,
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
