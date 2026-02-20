const starField = document.getElementById('starField');

// Estrellas
if (starField) {
    for (let i = 0; i < 120; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        starField.appendChild(star);
    }
}

// Parallax
document.addEventListener('mousemove', (e) => {
    const systems = document.querySelectorAll('.planet-sys');
    systems.forEach(sys => {
        const depth = sys.getAttribute('data-depth');
        const x = (window.innerWidth / 2 - e.clientX) * depth;
        const y = (window.innerHeight / 2 - e.clientY) * depth;
        sys.style.transform = `translate(${x}px, ${y}px)`;
    });
});