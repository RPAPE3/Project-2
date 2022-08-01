const addShop = () => {

    document.location.assign('/api/shops/createBiz');
  
  }
  
  document
  .querySelector('#add-shop')
  .addEventListener('click', addShop);

