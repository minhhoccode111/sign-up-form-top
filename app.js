console.log("Hello, World!");
("use strict");
const password = document.getElementById("user-password");
const passwordConfirm = document.getElementById("user-password-confirm");
const warningText = document.querySelector(".warning-text");

password.oninput = (e) => {
  console.log(e.target.value);
  if (e.target.value !== passwordConfirm.value) {
    if (passwordConfirm.value !== "") {
      warningText.classList.add("show");
      console.log("add");
    }
  } else {
    if (password.value !== "") {
      warningText.classList.remove("show");
      console.log("remove");
    }
  }
};
passwordConfirm.oninput = (e) => {
  console.log(e.target.value);
  if (e.target.value !== password.value) {
    warningText.classList.add("show");
    console.log("add");
  } else {
    warningText.classList.remove("show");
    console.log("remove");
  }
};
