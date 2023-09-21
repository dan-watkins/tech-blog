const newFormHandler = async (event) => {
  event.preventDefault();

  const description = document.getElementById("comment-post").value.trim();
  const blog_id = document.getElementById("submitButton").dataset.id;

  if (blog_id && description) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ description, blog_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace(`/blog/${blog_id}`);
    } else {
      alert("Failed to add comment!");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newFormHandler);
