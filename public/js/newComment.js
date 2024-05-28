const submitButton = document.querySelector('#submit-comment')
const blogId = Number(submitButton.value);


const handleNewComment = async (e) => {

    const comment = document.querySelector('#comment').value;
    if (comment) {
        // Send a POST request to the API endpoint
        const response =  await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ comment, blogId }),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)

        if (response.ok) {
          // If successful, redirect the browser to the profile page
          // document.location.replace('/');
          console.log("ok")
        } else {
          alert(`${response.statusText}: Invalid comment`);
        }
      }
}



submitButton.addEventListener('click', handleNewComment);

