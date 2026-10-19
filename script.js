const timer = document.getElementById('timer');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');


let seconds = 0;
let minutes = 0;
let horas = 0;
let intervalo = null;

function formatarTempo(h, m, s) {
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function iniciarCronometro() {
    if (intervalo) return; // Evita múltiplos intervalos
    intervalo = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            horas++;
        }
        timer.textContent = formatarTempo(horas, minutes, seconds);
    }, 1000);
}

function pausarCronometro() {
    clearInterval(intervalo);
    intervalo = null;
}

function zerarCronometro() {
    clearInterval(intervalo);
    intervalo = null;
    seconds = 0;
    minutes = 0;
    horas = 0;
    timer.textContent = "00:00:00";
}


start.addEventListener('click', iniciarCronometro);
pause.addEventListener('click', pausarCronometro);
reset.addEventListener('click', zerarCronometro);