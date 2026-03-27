import { createCard } from './Card.js';

export function createCarousel(category) {
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Header for Title and Indicators
    const header = document.createElement('div');
    header.className = 'slider-header';

    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    header.appendChild(title);
    header.appendChild(indicators);
    section.appendChild(header);

    const rowWrapper = document.createElement('div');
    rowWrapper.className = 'movie-row-wrapper';

    const row = document.createElement('div');
    row.className = 'movie-row';

    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    const leftArrow = document.createElement('button');
    leftArrow.className = 'slider-arrow slider-arrow-left';
    leftArrow.type = 'button';
    leftArrow.setAttribute('aria-label', `Ver mais ${category.title} para a esquerda`);
    leftArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';

    const rightArrow = document.createElement('button');
    rightArrow.className = 'slider-arrow slider-arrow-right';
    rightArrow.type = 'button';
    rightArrow.setAttribute('aria-label', `Ver mais ${category.title} para a direita`);
    rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';

    const getScrollStep = () => Math.max(row.clientWidth * 0.85, 220);

    const updateArrowsVisibility = () => {
        const maxScrollLeft = row.scrollWidth - row.clientWidth;
        leftArrow.disabled = row.scrollLeft <= 2;
        rightArrow.disabled = row.scrollLeft >= maxScrollLeft - 2;
    };

    leftArrow.addEventListener('click', () => {
        row.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        row.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    });

    row.addEventListener('scroll', updateArrowsVisibility);
    window.addEventListener('resize', updateArrowsVisibility);

    rowWrapper.appendChild(leftArrow);
    rowWrapper.appendChild(row);
    rowWrapper.appendChild(rightArrow);
    section.appendChild(rowWrapper);

    requestAnimationFrame(updateArrowsVisibility);

    return section;
}


