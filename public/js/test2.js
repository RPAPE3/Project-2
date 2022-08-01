const shop = document.querySelector('#shop-name').textContent;

const addComment = () => {

    document.location.assign(`/api/comments/createComment?shop_name=${shop}`);

  }
  
  document
  .querySelector('#add-comment')
  .addEventListener('click', addComment);

