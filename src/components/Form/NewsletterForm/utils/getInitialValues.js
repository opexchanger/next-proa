// o sanity nao ta aceitando valor padrão pro email, então ele não ta vindo junto no fields (pq é readOnly, fica nulo)

export default function getInitialValues(fields) {
  const initialValues = { ...fields, email: '' };

  for (var key in initialValues) {
    if (initialValues[key] === false) {
      delete initialValues[key];
    } else {
      initialValues[key] = ''
    }
  }

  return initialValues;
}