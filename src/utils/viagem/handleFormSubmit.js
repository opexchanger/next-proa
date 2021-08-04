export default function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  for (let data of formData) {
    console.log(data);
  }
}