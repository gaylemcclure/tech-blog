const handleNewPost = async (e) => {

    const title = document.querySelector('#post-title').value;
    const content = document.querySelector("#post-content").value;

    console.log(title)
    console.log(content)

    if (title && content) {
        // Send a POST request to the API endpoint
        const response =  await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          // If successful, redirect the browser to the profile page
          document.location.replace('/dashboard');
        } else {
          alert(`${response.statusText}: Invalid post`);
        }
      }
}


const submitButton = document.querySelector('#create-post');
submitButton.addEventListener('click', handleNewPost);

