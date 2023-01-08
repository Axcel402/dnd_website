const form = document.getElementById('comment-form');
const comments = document.getElementById('comments');

form.addEventListener('submit', event => {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the comment text from the form
  const commentText = document.getElementById('comment-text').value;

  // Insert the comment into the comments section
  comments.insertAdjacentHTML('beforeend', `<p>${commentText}</p>`);

  // Clear the form
  form.reset();
});
