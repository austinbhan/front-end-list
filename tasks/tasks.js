// import functions and grab DOM elements
import { checkUser, logoutUser } from '../fetch-utils.js';

// let state
checkUser();

const logout = document.getElementById('logout-button');

logout.addEventListener('click', async () => {
    await logoutUser();
});

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
