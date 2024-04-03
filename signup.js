function validateAndSubmit() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

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

    if (confirmPassword.trim() === '') {
        document.getElementById('confirmPassword').classList.add('is-invalid');
        return false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPassword').classList.add('is-invalid');
        return false;
    } else {
        document.getElementById('confirmPassword').classList.remove('is-invalid');
    }

    // Save the user data (you can implement this part as per your requirements)
    let userData = JSON.parse(localStorage.getItem('userData')) || [];
    userData.push({ username, password });
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('Saved user data:', userData);



    // Redirect to the login page
    window.location.href = 'Login.html';
    return false;
}