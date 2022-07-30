const addShop = () => {

    document.location.replace('api/shops/createBiz');
  
  }
  
  document
  .querySelector('#add-shop')
  .addEventListener('click', addShop);