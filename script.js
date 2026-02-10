document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');

            const username = usernameInput.value;
            const password = passwordInput.value;

            // --- SECURITY WARNING ---
            // In a real application, you would NEVER log sensitive information like passwords
            // to the console or send them unencrypted. This is for demonstration ONLY.
            // A secure login involves sending credentials to a backend server over HTTPS,
            // where they are hashed and compared against stored hashed passwords.
            console.log('--- Login Attempt ---');
            console.log('Username/Email:', username);
            console.log('Password:', password);
            console.log('---------------------');
            console.warn('WARNING: In a real application, logging passwords like this is a major security risk!');

            alert('Login attempt processed! Check the browser console for the entered credentials (for demonstration purposes only).');

            // You might clear the form or redirect here in a real app
            // loginForm.reset();
        });
    }
});