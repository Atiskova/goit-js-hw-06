const contactFormEl = document.querySelector('.login-form');

contactFormEl.addEventListener('submit', event => {
    event.preventDefault();
    
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert `Всі поля повинні бути заповнені`
    }

    console.log({ email: email.value, Password: password.value });
  
    contactFormEl.reset();
  
  });
