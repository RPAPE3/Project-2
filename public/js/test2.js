const addComment = () => {

    document.location.replace('/api/comments/createComment');
  
  }
  
  document
  .querySelector('#add-comment')
  .addEventListener('click', addComment);