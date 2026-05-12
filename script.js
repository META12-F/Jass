// Elementos del DOM
const loader = document.getElementById('loader');
const tnc = document.getElementById('tnc');
const game = document.getElementById('game');
const drinks = document.getElementById('drinks');
const final = document.getElementById('final');

const agreeCheck = document.getElementById('agree-check');
const btnContinue = document.getElementById('btn-continue');

const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');

const btnDavidPays = document.getElementById('btn-david-pays');
const btnJassPays = document.getElementById('btn-jass-pays');

// 1. Transición de la terminal a Términos y Condiciones
setTimeout(() => {
    loader.classList.add('hidden');
    tnc.classList.remove('hidden');
}, 6500);

// 2. Lógica del Checkbox
agreeCheck.addEventListener('change', (e) => {
    btnContinue.disabled = !e.target.checked;
});

// 3. Pasar al Reto 1
btnContinue.addEventListener('click', () => {
    tnc.classList.add('hidden');
    game.classList.remove('hidden');
});

// Función para hacer que los botones huyan
const makeButtonRun = (button) => {
    button.addEventListener('mouseover', () => {
        const container = button.parentElement;
        const containerRect = container.getBoundingClientRect();
        const btnRect = button.getBoundingClientRect();
        
        const maxX = containerRect.width - btnRect.width;
        const maxY = containerRect.height - btnRect.height;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
        button.style.transform = 'none'; 
    });
};

// 4. Aplicar trampa a los botones correspondientes
makeButtonRun(btnYes); // "Totalmente" huye
makeButtonRun(btnDavidPays); // "Tú invitas (David)" huye

// 5. Pasar a la fase de Apuesta si atrapa el botón 1 o se rinde
const goToDrinks = () => {
    game.classList.add('hidden');
    drinks.classList.remove('hidden');
};
btnYes.addEventListener('click', goToDrinks);
btnNo.addEventListener('click', goToDrinks);

// 6. Finalizar cuando acepta pagar la cuenta
const showFinal = () => {
    drinks.classList.add('hidden');
    final.classList.remove('hidden');
};
btnJassPays.addEventListener('click', showFinal);
btnDavidPays.addEventListener('click', showFinal); // Por si acaso logra atraparlo
