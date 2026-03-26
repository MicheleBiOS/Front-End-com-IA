// Script para gerenciar o tema escuro e claro

// Verifica o tema salvo no localStorage ou usa o preferência do sistema
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Se há tema salvo, usa; senão, usa a preferência do sistema
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (!prefersDark) {
        applyTheme('light');
    }
}

// Aplica o tema ao documento
function applyTheme(theme) {
    const body = document.body;
    
    if (theme === 'light') {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
}

// Simula e alterna entre os temas
function toggleTheme() {
    const body = document.body;
    
    if (body.classList.contains('light-mode')) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
}

// Evento de clique no botão de alternância
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    
    // Inicializa o tema ao carregar a página
    initializeTheme();
    
    // Adiciona evento de clique
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
});
