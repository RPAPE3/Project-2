// const addShop = () => {

//     document.location.replace('api/shops/createBiz');
  
//   }
  
//   document
//   .querySelector('#add-shop')
//   .addEventListener('click', addShop);


const createBizFormHandler = async (event) => {
    event.preventDefault();

    const shop_name = document.querySelector('#shopName-create').value.trim();
    const address = document.querySelector('#address-create').value.trim();
    const city = document.querySelector('#city-create').value.trim();
    const shop_state = document.querySelector('#state-create').value.trim();
    const zip = document.querySelector('#zip-create').value.trim();
    const phone = document.querySelector('#phone-create').value.trim();
    // const comment = document.querySelector('#comment-create').value.trim();

    console.log(shop_name, address, city, shop_state, zip, phone);

    if (shop_name && address && city && shop_state && zip && phone) {

        const response = await fetch('/api/shops', {
            method: 'POST',
            body: JSON.stringify({ shop_name, address, city, shop_state, zip, phone }),
            headers: { 'Content-type': 'application/json'},
    });
    
        if(response.ok) {
            document.location.replace('../../');
        } else {
            alert('Failed to add shop');
        }
    }
};

document
.querySelector('.createBiz-form')
.addEventListener('submit', createBizFormHandler);
