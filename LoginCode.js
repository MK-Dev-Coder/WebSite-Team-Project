function validatePassword(password) {
    const uppercasePattern = /[A-Z]/;
    const symbolPattern = /[!@#$%^&*(),.?":{}|<>]/;
    const minLength = 8;

    if (!uppercasePattern.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }

    if (!symbolPattern.test(password)) {
        return "Password must contain at least one symbol.";
    }

    if (password.length < minLength) {
        return `Password must be at least ${minLength} characters long.`;
    }

    return "";
}

document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');

    signUpForm.addEventListener('submit', (event) => {
        const passwordInput = signUpForm.querySelector('input[type="password"]');
        const errorMessage = validatePassword(passwordInput.value);

        if (errorMessage) {
            event.preventDefault(); // Prevent form submission
            alert(errorMessage); // Display error message
        } else {
            alert("Sign Up form submitted successfully!");
        }
    });

    signInForm.addEventListener('submit', (event) => {
        alert("Sign In form submitted successfully!");
    });

    // Animation for the form
    const signUpButton = document.getElementById('switchToSignUp');
    const signInButton = document.getElementById('switchToSignIn');
    const container = document.querySelector('.container');

    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });
});
