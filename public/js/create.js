const createAccFormHandler = async (event) => {

    event.preventDefault();
  
    const email = document.querySelector('#email-create').value.trim();
    const password = document.querySelector('#password-create').value.trim();
  
    if (email && password) {

      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create account');
      }
    }
  };
  
  document
    .querySelector('.create-form')
    .addEventListener('submit', createAccFormHandler);