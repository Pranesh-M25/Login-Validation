const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const cpassword = document.querySelector("#cpassword")
let success = true

form.addEventListener('submit', e => {
  e.preventDefault()
  validateInputs();
})

function validateInputs(){
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  

  if(usernameVal === ''){
    success = false
    setError(username,"This field cannot be empty!")
  } else{
    setSuccess(username)
  }

  if(emailVal === ''){
    success = false
    setError(email,"This field cannot be empty!")
  } else if (!validateEmail(emailVal)){
    success = false
    setError(email,'Invalid format!')
  } else {
    setSuccess(email)
  }

  if(passwordVal === ''){
    success = false
    setError(password,"This field cannot be empty")
  } else if (passwordVal.length < 8){
    success = false
    setError(password,"Your password is too short, minimum 8 characters required!")
  } else {
    setSuccess(password)
  }

  if(cpasswordVal == ''){
    success = false
    setError(cpassword,"This field cannot be empty")
  } else if (cpasswordVal !== passwordVal){
    success = false
    setError(cpassword,"Passwords doesn't match!")
  } else {
    setSuccess(cpassword)
  }
}

function setError(element,message){
  const inputGrp = element.parentElement;
  const errorElement = inputGrp.querySelector(".errorMsg");

  errorElement.innerText = message;
  inputGrp.classList.add('error');
  inputGrp.classList.remove('success');
}

function setSuccess(element){
  const inputGrp = element.parentElement;
  const errorElement = inputGrp.querySelector(".errorMsg");

  errorElement.innerText = '';
  inputGrp.classList.add('success');
  inputGrp.classList.remove('error');
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
};