const userInput = document.querySelector('#validation-input');
const dataLenght = Number(userInput.dataset.length);

userInput.addEventListener('blur', event => {
    if (userInput.value.length === dataLenght) {
        userInput.classList.remove('invalid');
        userInput.classList.toggle('valid');
    }
    else {
        userInput.classList.remove('valid');
        userInput.classList.toggle('invalid');
    }
});
