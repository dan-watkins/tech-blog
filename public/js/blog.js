const newFormHandler = async (event) => {
    event.preventDefault();
  
    const description = document.getElementById("comment-post").value.trim();
  
    if (description) {
      const response = await fetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify({ description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed to add comment!");
      }
    }
  };

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newFormHandler);