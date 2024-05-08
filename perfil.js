document.addEventListener("DOMContentLoaded", function() {
    const updateProfileBtn = document.getElementById('update-profile-btn');

    updateProfileBtn.addEventListener('click', function() {
        // Mostrar indicador de carga
        updateProfileBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Actualizando...';
        updateProfileBtn.disabled = true;

        // Simular una solicitud de actualización de perfil (aquí iría tu lógica de actualización de datos)
        setTimeout(function() {
            // Ocultar indicador de carga
            updateProfileBtn.innerHTML = 'Actualizar Perfil';
            updateProfileBtn.disabled = false;

            // Mostrar mensaje de alerta con efecto
            const alertMessage = document.createElement('div');
            alertMessage.classList.add('alert-message');
            alertMessage.textContent = 'Los datos fueron actualizados';
            document.body.appendChild(alertMessage);
            setTimeout(function() {
                alertMessage.classList.add('show'); // Agregar clase para mostrar el mensaje con efecto
            }, 100);

            // Redirigir a la página de inicio después de 3 segundos
            setTimeout(function() {
                window.location.href = 'index.html'; // Cambia 'index.html' por la URL de tu página de inicio
            }, 3000);
        }, 2000); // Simula un tiempo de espera de 2 segundos antes de mostrar el mensaje de alerta
    });
});
