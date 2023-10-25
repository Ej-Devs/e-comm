

const loginForm = document.querySelector('#login-form');
const signupForm = document.querySelector('#signup-form');


loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  
  const username = loginForm.querySelector('input[name="username"]').value;
  const password = loginForm.querySelector('input[name="password"]').value;


  if (!username || !password) {
    alert('Please fill in both fields.');
  } else {
   
    console.log('Login data submitted:', { username, password });
  }
});

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  
  const fullname = signupForm.querySelector('input[name="fullname"]').value;
  const email = signupForm.querySelector('input[name="email"]').value;
  const signupPassword = signupForm.querySelector('input[name="password"]').value;

    if (!fullname || !email || !signupPassword) {
    alert('Please fill in all fields.');
  } else {
   
    console.log('Signup data submitted:', { fullname, email, password: signupPassword });
  }
});