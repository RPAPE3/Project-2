const createBizFormHandler = async (event) => {
    event.preventDefault();

    const shop_name = document.querySelector('#shopName-create').value.trim();
    const address = document.querySelector('#address-create').value.trim();
    const city = document.querySelector('#city-create').value.trim();
    const shop_state = document.querySelector('#state-create').value.trim();
    const zip = document.querySelector('#zip-create').value.trim();
    const phone = document.querySelector('#phone-create').value.trim();
<<<<<<< HEAD
    const comment = document.querySelector('#comment-create').value.trim();

    if (shopName && address && city && zip && phone && comment) {

        const response = await fetch('/api/shops', {
            method: 'POST',
            body: JSON.stringify({ shopName, address, city, zip, phone, state, comment }),
=======

    console.log(shop_name, address, city, shop_state, zip, phone);

    if (shop_name && address && city && shop_state && zip && phone) {

        const response = await fetch('/api/shops', {
            method: 'POST',
            body: JSON.stringify({ shop_name, address, city, shop_state, zip, phone }),
>>>>>>> 1c32d32e03ccdbee15aa3296ae341f14804e6716
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
