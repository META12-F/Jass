const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
const final = document.getElementById('final');

// Transición de la terminal al juego (espera a que terminen los textos)
setTimeout(() => {
    loader.classList.add('hidden');
    game.classList.remove('hidden');
}, 6500);

// La trampa: el botón afirmativo huye del cursor
btnYes.addEventListener('mouseover', () => {
    const container = document.querySelector('.btn-container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = btnYes.getBoundingClientRect();
    
    // Calcula límites para que no se salga del contenedor
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    btnYes.style.left = randomX + 'px';
    btnYes.style.top = randomY + 'px';
    btnYes.style.transform = 'none'; // Quita el centrado inicial
});

// Función para mostrar el final
const showFinal = () => {
    game.classList.add('hidden');
    final.classList.remove('hidden');
};

// Si le atina por suerte al que huye, o si se rinde y le da al otro botón
btnYes.addEventListener('click', showFinal);
btnNo.addEventListener('click', showFinal);