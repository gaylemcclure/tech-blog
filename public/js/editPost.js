const updateButton = document.querySelector('#edit-post');
const deleteButton = document.querySelector('#delete-post');


const handleEditPost = async () => {
    const title = document.querySelector('#post-title').value;
    const content = document.querySelector("#post-content").value;
    const blogId = Number(updateButton.value);


    if (title && content) {
        // Send a POST request to the API endpoint
        const response =  await fetch(`/api/dashboard/${blogId}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content, blogId }),
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
    const blogId = Number(deleteButton.value);
    
        const response = await fetch(`/api/dashboard/${blogId}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to delete post');
        }
}

//Update button
updateButton.addEventListener('click', handleEditPost);

//Delete button
deleteButton.addEventListener('click', handleDeletePost);
