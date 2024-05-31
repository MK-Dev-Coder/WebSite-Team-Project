
    var showPasswordButton = document.getElementById('show-password');
    var passwordInput = document.getElementById('password');

    showPasswordButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission

        if (passwordInput.type === 'password') {
            // If the password is currently hidden, show it and change the icon
            passwordInput.type = 'text';
            showPasswordButton.src = 'https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/password-512.png';
        } else {
            // If the password is currently shown, hide it and change the icon
            passwordInput.type = 'password';
            showPasswordButton.src = 'https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/password-512.png';
        }
    });




 var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var errorMessageDiv = document.getElementById('error-message');

usernameInput.addEventListener('input', function() {
    // Check if the username is less than 3 characters
    if (usernameInput.value.length < 3) {
        errorMessageDiv.textContent = 'Username must be at least 3 characters';
    } else {
        errorMessageDiv.textContent = '';
    }
});

passwordInput.addEventListener('input', function() {
    // Check if the password contains a capital letter
    if (!/[A-Z]/.test(passwordInput.value)) {
        errorMessageDiv.textContent = 'Password must contain at least one capital letter';
    } else {
        errorMessageDiv.textContent = '';
    }
});