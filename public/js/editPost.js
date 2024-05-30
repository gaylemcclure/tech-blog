//Update and delete buttons
const updateButton = document.querySelector("#edit-post");
const deleteButton = document.querySelector("#delete-post");

//Function to send edit request on individial post
const handleEditPost = async () => {
  //Get the values from the inputs
  const title = document.querySelector("#post-title").value;
  const content = document.querySelector("#post-content").value;
  //Get the post id
  const blogId = Number(updateButton.value);

  if (title && content) {
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/dashboard/${blogId}`, {
      method: "PUT",
      body: JSON.stringify({ title, content, blogId }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace("/dashboard");
    } else {
      alert(`${response.statusText}: Invalid post`);
    }
  }
};

//Function to delete an individual post
const handleDeletePost = async () => {
  const blogId = Number(deleteButton.value);

  const response = await fetch(`/api/dashboard/${blogId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete post");
  }
};

//Update button event listener
updateButton.addEventListener("click", handleEditPost);

//Delete button event listener
deleteButton.addEventListener("click", handleDeletePost);
