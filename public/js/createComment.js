const createCommentFormHandler = async (event) => {
    event.preventDefault();

    const shopName = document.querySelector('#shopName-create').value.trim();
    const comment = document.querySelector('#shopComment-create').value.trim();

    if (shopName && comment) {

        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ shopName, comment}),
            headers: { 'Content-type': 'application/json'},
    });
    
        if(response.ok) {
            document.location.replace('../');
        } else {
            alert('Failed to add comment');
        }
    }
};

document
.querySelector('.createComment-form')
.addEventListener('submit', createCommentFormHandler);
