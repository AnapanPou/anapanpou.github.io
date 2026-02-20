const starField = document.getElementById('starField');

// CREAR ESTRELLAS
function createStars() {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 120; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        fragment.appendChild(star);
    }
    starField.appendChild(fragment);
}

// PARALLAX
document.addEventListener('mousemove', (e) => {
    const systems = document.querySelectorAll('.planet-sys');
    const x = (window.innerWidth / 2 - e.clientX) * 0.05;
    const y = (window.innerHeight / 2 - e.clientY) * 0.05;
    systems.forEach(sys => {
        sys.style.transform = `translate(${x}px, ${y}px)`;
    });
});

createStars();