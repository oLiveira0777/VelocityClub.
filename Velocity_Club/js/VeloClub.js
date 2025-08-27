document.addEventListener('DOMContentLoaded', function() {
    // Menu navigation active state
    const menuItems = document.querySelectorAll('.nav-menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Função para voltar ao topo
    const kulturaItems = document.querySelectorAll('.kultura-item');
    kulturaItems.forEach(item => {
        item.addEventListener('click', function() {
            if (this.textContent.includes('topo')) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // Botão de login
    const loginBtn = document.querySelector('.user-profile');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }
});
const postImages = document.querySelectorAll('.post img, .content-item img');
postImages.forEach(img => {
    img.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Conteúdo disponível apenas para membros assinantes do VeloClub+');
    });
});