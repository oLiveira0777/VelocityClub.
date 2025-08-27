document.addEventListener('DOMContentLoaded', function() {
    // Menu navigation active state
    const menuItems = document.querySelectorAll('.nav-menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Botão de login
    const loginBtn = document.querySelector('.user-profile');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }

    // Formulário de registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const name = document.getElementById('name').value;
            
            // Validação de senha (mínimo 6 caracteres)
            if (password.length < 6) {
                alert('A senha deve ter pelo menos 6 caracteres!');
                return;
            }

            const welcomeMessage = `🚀 Bem-vindo à ${name}! 🔥\n\nAqui, a velocidade é nossa aliada, a adrenalina nos move e cada desafio é uma nova reta para acelerar! 🏎️💨`;
            
            // Simulação de registro bem-sucedido
            alert(welcomeMessage);

            // Limpa o formulário após o registro
            registerForm.reset();
        });
    }
});