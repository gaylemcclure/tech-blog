//Button selector, and blog id
const submitButton = document.querySelector('#submit-comment')
const blogId = Number(submitButton.value);

//Function to create a new comment
const handleNewComment = async (e) => {

    const comment = document.querySelector('#comment').value;
    if (comment) {
        // Send a POST request to the API endpoint
        const response =  await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ comment, blogId }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          // If successful, refresh the page
          window.location.reload();
        } else {
          alert(`${response.statusText}: Invalid comment`);
        }
      }
}


//Submit button event listener
submitButton.addEventListener('click', handleNewComment);

