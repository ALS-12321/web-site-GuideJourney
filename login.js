document.addEventListener("DOMContentLoaded", function() {
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');

    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginContainer.style.opacity = '0';
        loginContainer.style.transform = 'translate(-50%, -150%)'; /* Desaparece hacia arriba */
        setTimeout(function() {
            loginContainer.style.pointerEvents = 'none';
            registerContainer.style.opacity = '1';
            registerContainer.style.pointerEvents = 'auto';
            registerContainer.style.transform = 'translate(-50%, -50%)'; /* Aparece desde abajo */
        }, 300); // Ajusta la duración de la transición
    });

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerContainer.style.opacity = '0';
        registerContainer.style.transform = 'translate(-50%, 150%)'; /* Desaparece hacia abajo */
        setTimeout(function() {
            registerContainer.style.pointerEvents = 'none';
            loginContainer.style.opacity = '1';
            loginContainer.style.pointerEvents = 'auto';
            loginContainer.style.transform = 'translate(-50%, -50%)'; /* Aparece desde arriba */
        }, 300); // Ajusta la duración de la transición
    });

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        // Aquí puedes agregar la lógica para iniciar sesión
        console.log("Iniciar sesión con:", username, password);
    });

    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('register-password').value;
        // Aquí puedes agregar la lógica para registrar
        console.log("Registrarse con:", fullName, email, phone, password);
    });
});
