//seleciona o elmento do botão Ligar/Desligar
const toggleButton = document.getElementById('toggleButton');
//seleciona o elemento da lâmpada
const lamp = document.getElementById('lamp');

//variável para rastrear o estado da lamparada, ligada/desligada
let isLampOn = false;

//função para ligar/desligar a lâmpada
function toggleLamp() {
    isLampOn = !isLampOn;
    if (isLampOn) {
        lamp.src = './img/ligada.jpg';
    } else {
        lamp.src = './img/desligada.jpg';
    }
}

toggleButton.addEventListener('click', toggleLamp);