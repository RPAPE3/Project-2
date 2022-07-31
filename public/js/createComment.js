

const createCommentFormHandler = async (event) => {
    event.preventDefault();

    const shop_name = document.querySelector('#shopName-create').value.trim();
    const comment = document.querySelector('#shopComment-create').value.trim();

    if (shop_name && comment) {

        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ shop_name, comment}),
            headers: { 'Content-type': 'application/json'},
    });
    
        if(response.ok) {
            alert(`Added comment for ${shop_name}. Bringing you back to home page.`);
            document.location.replace('../../');
        } else {
            alert('Failed to add comment');
        }
    }
};

document
.querySelector('.createComment-form')
.addEventListener('submit', createCommentFormHandler);
