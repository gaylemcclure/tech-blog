//Function to create a new blog post
const handleNewPost = async (e) => {

  //Get the values from the inputs
    const title = document.querySelector('#post-title').value;
    const content = document.querySelector("#post-content").value;


    if (title && content) {
        // Send a POST request to the API endpoint
        const response =  await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          // If successful, redirect the browser to the dashboard page
          document.location.replace('/dashboard');
        } else {
          alert(`${response.statusText}: Invalid post`);
        }
      }
}

//Submit button event listeners
const submitButton = document.querySelector('#create-post');
submitButton.addEventListener('click', handleNewPost);

