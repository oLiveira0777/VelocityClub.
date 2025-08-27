// JavaScript para interatividade
        document.addEventListener('DOMContentLoaded', function() {
            // Adiciona evento de clique aos posts
            const posts = document.querySelectorAll('.post');
            posts.forEach(post => {
                post.addEventListener('click', function() {
                    console.log('Post clicado:', this.querySelector('h3').textContent);
                });
            });

            // Simula funcionalidade de upvote
            const upvoteButtons = document.querySelectorAll('.post-footer span:nth-child(3)');
            upvoteButtons.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const upvoteText = this.textContent.trim();
                    const count = parseInt(upvoteText.match(/\d+/)[0]);
                    
                    if (upvoteText.includes('⬆️')) {
                        this.textContent = `⬆️ ${count + 1} upvotes`;
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

            // Botão de login
            const loginBtn = document.querySelector('.user-profile');
            loginBtn.addEventListener('click', function() {
                window.location.href = 'login.html';
            });
            // Botão de postagem
            const postBtn = document.querySelector('.post-btn');
            postBtn.addEventListener('click', function() {
                const titleInput = document.querySelector('.form-input');
                const contentTextarea = document.querySelector('.form-textarea');
                const title = titleInput.value;
                const content = contentTextarea.value;
                
                if(title.trim() === '') {
                    alert('Por favor, insira um título para o post');
                    return;
                }
                
                alert('Post criado com sucesso!');
                // Aqui iria a lógica para enviar o post para o servidor

                // Limpa os campos após criar o post
                titleInput.value = '';
                contentTextarea.value = '';
            });
            // Função para o clique na imagem de clipes
            const clipIcon = document.querySelector('.clip-icon');
            if (clipIcon) {
                clipIcon.addEventListener('click', function() {
                    // Cria um input de arquivo dinamicamente
                    const fileInput = document.createElement('input');
                    fileInput.type = 'file';
                    fileInput.style.display = 'none';
                    
                    // Adiciona o input ao corpo do documento
                    document.body.appendChild(fileInput);
                    
                    // Dispara o clique no input de arquivo
                    fileInput.click();
                    
                    // Limpa o input após a seleção (opcional)
                    fileInput.addEventListener('change', function() {
                        if (this.files && this.files[0]) {
                            console.log('Arquivo selecionado:', this.files[0].name);
                            // Aqui você pode adicionar a lógica para upload do arquivo
                        }
                        document.body.removeChild(fileInput);
                    });
                });
            }
        });