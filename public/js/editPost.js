const handleEditPost = async () => {
    const title = document.querySelector('#post-title').value;
    const content = document.querySelector("#post-content").value;


    if (title && content) {
        // Send a POST request to the API endpoint
        const response =  await fetch('/api/:id/update', {
          method: 'PATCH',
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
};

const handleDeletePost = async () => {

}

//Update button
const updateButton = document.querySelector('#edit-post');
updateButton.addEventListener('click', handleEditPost);

//Delete button
const deleteButton = document.querySelector('#delete-post');
deleteButton.addEventListener('click', handleDeletePost);
