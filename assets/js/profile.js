// Script para gerenciar a seleção de perfil

document.addEventListener('DOMContentLoaded', () => {
    const profiles = document.querySelectorAll('.profile a');

    profiles.forEach(profile => {
        profile.addEventListener('click', (e) => {
            e.preventDefault(); // Impede a navegação imediata
            const img = profile.querySelector('img');
            const p = profile.querySelector('p');

            if (img && p) {
                // Salva o nome do perfil
                localStorage.setItem('perfilAtivoNome', p.textContent);
                // Salva a imagem do perfil (mantém o caminho relativo original)
                localStorage.setItem('perfilAtivoImagem', img.src);
                
                console.log('Perfil salvo:', p.textContent, img.src);
            }
            
            // Navega após definir o localStorage com pequeno delay
            setTimeout(() => {
                window.location.href = profile.href;
            }, 100);
        });
    });
});