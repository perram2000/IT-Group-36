// Fetch the user data from the local storage (or your server)
// Fetch the user data from the local storage (or your server)
let userData = JSON.parse(localStorage.getItem('userData')) || [];
console.log('Loaded user data:', userData);

function validateAndLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate the inputs
    if (username.trim() === '') {
        document.getElementById('username').classList.add('is-invalid');
        return false;
    } else {
        document.getElementById('username').classList.remove('is-invalid');
    }

    if (password.trim() === '') {
        document.getElementById('password').classList.add('is-invalid');
        return false;
    } else {
        document.getElementById('password').classList.remove('is-invalid');
    }

    // Check if the user's credentials are valid
    const validUser = userData.find(user => user.username === username && user.password === password);
    if (validUser) {
        console.log('Redirecting to index.html...');
        history.pushState({}, 'Index', 'index.html');
        window.location.href = 'index.html';
        return true;
    } else {
        alert('Invalid username or password.');
        return false;
    }
}