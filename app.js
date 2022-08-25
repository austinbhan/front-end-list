// import functions and grab DOM elements
import { signUpUser, redirectIfLoggedIn } from './fetch-utils.js';

// let state
const signUpForm = document.getElementById('sign-up');

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    await signUpUser({
        email: formData.get('email'),
        password: formData.get('password'),
    });
    redirectIfLoggedIn();
});

