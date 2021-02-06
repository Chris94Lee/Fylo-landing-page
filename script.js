

const firstField = document.getElementById("fieldOneEmail");
const fieldOneError = document.getElementById("fieldOneError");
const submit = document.getElementById("submit");

function logSubmit() {
  const emailInput = firstField.value;

  var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (emailInput === "") {
    fieldOneError.innerHTML = "Email cannot be left empty"
    event.preventDefault();
  } else if(pattern.test(emailInput) == false){
    fieldOneError.innerHTML = "Invalid email address"
    event.preventDefault();
  } else{
    
  }

}




form.addEventListener('submit', logSubmit);