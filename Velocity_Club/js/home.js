// JavaScript simples para interatividade
        document.addEventListener('DOMContentLoaded', function() {
            // Adiciona evento de clique aos posts
            const posts = document.querySelectorAll('.post');
            posts.forEach(post => {
                post.addEventListener('click', function() {
                    // Em um app real, isso navegaria para o detalhe do post
                    console.log('Post clicado:', this.querySelector('h3').textContent);
                });
            });
            // Simula funcionalidade de upvote/downvote
            // Seleciona todos os ícones de upvote
            const upvoteIcons = document.querySelectorAll('#upvote-icon');
            upvoteIcons.forEach(function(upvoteIcon) {
                upvoteIcon.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const upvoteSpan = this.parentElement;
                    const upvoteText = upvoteSpan.textContent.replace(/[^\d]/g, '');
                    let count = parseInt(upvoteText, 10);
                    if (!isNaN(count)) {
                        count += 1;
                        let displayCount = count > 999 ? (count / 1000).toFixed(1).replace('.0', '') + 'k' : count;
                        upvoteSpan.innerHTML = `<img id="upvote-icon" width="30" height="30" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-up-arrow-wayfinding-flaticons-flat-flat-icons.png" alt="circled-chevron-up"/> ${displayCount} upvotes`;
                        const newIcon = upvoteSpan.querySelector('#upvote-icon');
                        if (newIcon) {
                            newIcon.addEventListener('click', arguments.callee);
                        }
                    }
                });
            });

            // Menu navigation active state
            const menuItems = document.querySelectorAll('.nav-menu li');
            menuItems.forEach(item => {
                item.addEventListener('click', function() {
                    menuItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        });
        // Função para voltar ao topo ao clicar em qualquer .kultura-item
        const kulturaItems = document.querySelectorAll('.kultura-item');
        kulturaItems.forEach(item => {
            item.addEventListener('click', function(e) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
        // Botão de login
            const loginBtn = document.querySelector('.user-profile');
            loginBtn.addEventListener('click', function() {
                window.location.href = 'login.html';
        });