// Script para gerenciar o tema escuro e claro com switch deslizante

// Função para atualizar a imagem do perfil "adicionar"
function updateAddProfileImage(isLightMode) {
    const addProfileImg = document.querySelector('.add-profile img');
    if (addProfileImg) {
        if (isLightMode) {
            addProfileImg.src = './assets/perfil-adicionar_branco.png';
        } else {
            addProfileImg.src = './assets/perfil-adicionar.png';
        }
    }
}

// Inicializa o tema ao carregar a página
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Determina qual tema usar
    let shouldBeLightMode = false;
    
    if (savedTheme) {
        shouldBeLightMode = savedTheme === 'light';
    } else {
        shouldBeLightMode = !prefersDark; // Se preferir light, usa light
    }
    
    // Aplica o tema
    if (shouldBeLightMode) {
        document.body.classList.add('light-mode');
        themeToggle.checked = true;
        updateAddProfileImage(true);
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.checked = false;
        updateAddProfileImage(false);
    }
}

// Manipula a mudança de tema ao clicar no switch
function handleThemeToggle(event) {
    const isLightMode = event.target.checked;
    
    if (isLightMode) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        updateAddProfileImage(true);
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        updateAddProfileImage(false);
    }
}

// Aguarda o carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Inicializa o tema
    initializeTheme();
    
    // Adiciona listener para mudanças
    if (themeToggle) {
        themeToggle.addEventListener('change', handleThemeToggle);
    }
});
