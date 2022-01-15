export default async function handleNewsletterSignIn(values, groupId, formikBag) {
  const { setStatus, setSubmitting } = formikBag;

  return new Promise((res, rej) => {
    fetch('/api/newsletter', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...values, groupId })
    })
      .then((result) => {
        setSubmitting(false)
        if (result.status === 200) {
          setStatus('success');
        } else {
          setStatus('fail');
        }
      })
      .catch((error) => {
        console.log(error);

        setSubmitting(false)
        setStatus('fail');
      })
  })
}