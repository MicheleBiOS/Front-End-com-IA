import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    console.log('Dados recuperados do localStorage:', nomePerfil, imagemPerfil);

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) {
            kidsLink.textContent = nomePerfil;
            console.log('Nome do perfil atualizado:', nomePerfil);
        }
        if (profileIcon) {
            // Converte o caminho relativo para estar correto a partir do catalogo.html
            // ./assets/... precisa virar ../../assets/... (porque estamos em assets/netflix-plataform-main/catalogo/)
            const imagePath = imagemPerfil.replace('./', '../../');
            profileIcon.src = imagePath;
            console.log('Imagem do perfil atualizada:', imagePath);
        }
    } else {
        console.log('Nenhum perfil encontrado no localStorage');
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
