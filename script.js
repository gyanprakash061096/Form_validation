const names = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validemail = false;
let validphone = false;
let validname = false;

names.addEventListener("blur", () => {
  console.log("blurred");
  let regex = /([0-9a-zA-Z]){4,10}/;
  let str = names.value;
  if (regex.test(str)) {
    names.classList.remove("is-invalid");
    validname = true;
  } else {
    names.classList.add("is-invalid");
    validname = false;
  }
});
email.addEventListener("blur", () => {
  console.log("blurred");
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  if (regex.test(str)) {
    email.classList.remove("is-invalid");
    validemail = true;
    console.log("blurred");
  } else {
    email.classList.add("is-invalid");
    validemail = false;
  }
});

phone.addEventListener("blur", () => {
  console.log("blurred");
  let regex = /^([0-9]){10}$/;
  let str = phone.value;
  if (regex.test(str)) {
    phone.classList.remove("is-invalid");
    validphone = true;
  } else {
    phone.classList.add("is-invalid");
    validphone = false;
  }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (validemail && validname && validphone) {
    console.log("correct form");
  } else {
    console.log("Invalid form");
  }
  let success = document.getElementById("success");
  success.classList.add("show");
});
