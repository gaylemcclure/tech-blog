//JS to handle the user signup
const handleSignup = async (event) => {
    event.preventDefault();
  
    //Get the values from the inputs - trim whitespace
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

//Query selectors for the submit button, & calling the function
  document
  .querySelector('.signup-form')
  .addEventListener('submit', handleSignup);
