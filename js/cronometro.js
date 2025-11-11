document.addEventListener("DOMContentLoaded", () => {
  const hoursCronometro = document.getElementById('cronometro-hours');
const minutesCronometro = document.getElementById('cronometro-minutes');
const secondsCronometro = document.getElementById('cronometro-seconds');

let hours = 0;
let minutes = 0;
let seconds = 0;
let interval; 

console.log("deu crt")

function startTimer() {
    if (interval) return; // evita múltiplos intervals

    interval = setInterval(() => {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        hoursCronometro.textContent = fixTime(hours);
        minutesCronometro.textContent = fixTime(minutes);
        secondsCronometro.textContent = fixTime(seconds);
    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    hours = 0;
    minutes = 0;
    seconds = 0;

    hoursCronometro.textContent = "00";
    minutesCronometro.textContent = "00";
    secondsCronometro.textContent = "00";
}

function fixTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Botões
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

});
