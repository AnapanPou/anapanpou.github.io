/* ==========================================
   MOTOR DE ESTRELLAS
   ========================================== */
const starField = document.getElementById('starField');

function createStars() {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 150; i++) {
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

/* ==========================================
   MOTOR PARALLAX (Movimiento Suave)
   ========================================== */
function handleParallax(e) {
    const systems = document.querySelectorAll('.planet-sys');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    systems.forEach(sys => {
        const depth = parseFloat(sys.getAttribute('data-depth'));
        const x = (centerX - e.clientX) * depth;
        const y = (centerY - e.clientY) * depth;
        sys.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Inicialización
createStars();
document.addEventListener('mousemove', handleParallax);