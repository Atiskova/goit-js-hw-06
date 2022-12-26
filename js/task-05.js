const userNameInputEl = document.querySelector("#name-input");
const userNameOutputEl = document.querySelector("#name-output");

userNameInputEl.addEventListener("blur", (event) => {
  console.log("Blur Event");
});

userNameInputEl.addEventListener("input", (event) => {
  console.log("Input Event");

  if (userNameInputEl.value === "") {
    userNameOutputEl.textContent = "Anonymous";

    return;
  }

  userNameOutputEl.textContent = userNameInputEl.value;
});
