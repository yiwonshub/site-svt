document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.contraception-card');

    // Animation au survol pour les appareils tactiles
    cards.forEach(card => {
        card.addEventListener('touchstart', () => {
            card.classList.add('active');
        });

        card.addEventListener('touchend', () => {
            card.classList.remove('active');
        });
    });

    // Ajout d'un effet de parallaxe subtil sur les images
    cards.forEach(card => {
        const img = card.querySelector('img');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / 20;
            const moveY = (y - centerY) / 20;
            
            img.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        card.addEventListener('mouseleave', () => {
            img.style.transform = 'translate(0, 0)';
        });
    });

    // Ajout d'un système de filtrage (pour une future fonctionnalité)
    const filterButtons = document.createElement('div');
    filterButtons.className = 'filter-buttons';
    filterButtons.innerHTML = `
        <button data-filter="all">Tous</button>
        <button data-filter="hormonal">Hormonaux</button>
        <button data-filter="barriere">Barrière</button>
    `;

    document.querySelector('header').appendChild(filterButtons);

    // Gestion des filtres
    filterButtons.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const filter = e.target.dataset.filter;
            
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.method === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    });
}); 