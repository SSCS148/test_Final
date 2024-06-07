document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('http://localhost:5002/api/user/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, password })
                });

                const messageDiv = document.getElementById('message');
                const data = await response.json();
                if (response.ok) {
                    messageDiv.textContent = data.message;
                    messageDiv.style.color = 'green';
                    window.location.href = 'main.html';
                } else {
                    messageDiv.textContent = data.error;
                    messageDiv.style.color = 'red';
                }
            } catch (error) {
                console.error('Error:', error);
                const messageDiv = document.getElementById('message');
                messageDiv.textContent = 'An error occurred: ' + error.message;
                messageDiv.style.color = 'red';
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            try {
                const response = await fetch('http://localhost:5002/api/user/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Success:', data);
                // Handle success (e.g., redirect to main.html)
            } catch (error) {
                console.error('Error:', error);
                document.getElementById('message').textContent = 'An error occurred while logging in: ' + error.message;
                document.getElementById('message').style.color = 'red';
            }
        });
    }

    const togglePasswordButton = document.getElementById('togglePassword');
    if (togglePasswordButton) {
        togglePasswordButton.addEventListener('click', () => {
            const passwordField = document.getElementById('password');
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                togglePasswordButton.textContent = 'Hide';
            } else {
                passwordField.type = 'password';
                togglePasswordButton.textContent = 'Show';
            }
        });
    }

    const toggleLoginPasswordButton = document.getElementById('toggleLoginPassword');
    if (toggleLoginPasswordButton) {
        toggleLoginPasswordButton.addEventListener('click', () => {
            const passwordField = document.getElementById('loginPassword');
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                toggleLoginPasswordButton.textContent = 'Hide';
            } else {
                passwordField.type = 'password';
                toggleLoginPasswordButton.textContent = 'Show';
            }
        });
    }
});