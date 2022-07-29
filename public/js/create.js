const createUserFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-create').value.trim();
    const email = document.querySelector('#email-create').value.trim();
    const password = document.querySelector('#password-create').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create an account.');
      }
    }
  };

  document
  .querySelector('.create-form')
  .addEventListener('submit', createUserFormHandler);
