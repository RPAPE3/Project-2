const createBizFormHandler = async (event) => {
    event.preventDefault();

    const shopName = document.querySelector('#shopName-create').value.trim();
    const address = document.querySelector('#address-create').value.trim();
    const city = document.querySelector('#city-create').value.trim();
    const state = document.querySelector('#state-create').value.trim();
    const zip = document.querySelector('#zip-create').value.trim();
    const comment = document.querySelector('#comment-create').value.trim();

    if (shopName && address && city && state && zip && comment) {

        const response = await fetch('/api/shops', {
            method: 'POST',
            body: JSON.stringify({ shopName, address, city, state, zip, comment}),
            headers: { 'Content-type': 'application/json'},
    });
    
        if(response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to add shop');
        }
    }
};

document
.querySelector('.createBiz-form')
.addEventListener('submit', createBizFormHandler);
