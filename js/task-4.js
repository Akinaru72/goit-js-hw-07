const formEl = document.querySelector(".login-form");

console.dir(formEl);

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  console.dir(event);
  const formData = {
    [formEl.elements.email.name]: formEl.elements.email.value.trim(),
    [formEl.elements.password.name]: formEl.elements.password.value.trim(),
  };
  if (!formEl.elements.email.value || !formEl.elements.password.value) {
    return alert("All form fields must be filled in");
  }
  console.log(formData);
  formEl.reset();
});
