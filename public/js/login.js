//JS to handle the user login
const handleLogin = async (event) => {
    event.preventDefault();
  
    // get the values from the inputs
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(`${response.statusText}: Invalid username or password`);
      }
    }
  };
  

  //Query selectors for the submit button, & calling the function
  document
    .querySelector('.login-form')
    .addEventListener('submit', handleLogin);
  
