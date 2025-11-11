document.addEventListener("DOMContentLoaded", () => {
    const hourstimer = document.getElementById('timer-hours');
    const minutestimer = document.getElementById('timer-minutes');
    const secondstimer = document.getElementById('timer-seconds');

    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let interval;

    function updateDisplay() {
        hourstimer.textContent = fixTime(hours);
        minutestimer.textContent = fixTime(minutes);
        secondstimer.textContent = fixTime(seconds);
    }

    function fixTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function startTimer() {
        if (interval) return;

        interval = setInterval(() => {
            if (hours === 0 && minutes === 0 && seconds === 0) {
                clearInterval(interval);
                interval = null;
                alert("⏰ Tempo esgotado!");
                return;
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else {
                    minutes--;
                    seconds = 59;
                }
            } else {
                seconds--;
            }

            updateDisplay();
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
        updateDisplay();
    }

    function setTimer() {
        const inputHours = parseInt(document.getElementById('input-hours').value) || 0;
        const inputMinutes = parseInt(document.getElementById('input-minutes').value) || 0;
        const inputSeconds = parseInt(document.getElementById('input-seconds').value) || 0;

        if (inputHours === 0 && inputMinutes === 0 && inputSeconds === 0) {
            alert("Digite um tempo válido!");
            return;
        }

        hours = inputHours;
        minutes = inputMinutes;
        seconds = inputSeconds;
        updateDisplay();
    }

    document.getElementById("start-Timer").addEventListener("click", startTimer);
    document.getElementById("pause-Timer").addEventListener("click", pauseTimer);
    document.getElementById("reset-Timer").addEventListener("click", resetTimer);
    document.getElementById("set-Timer").addEventListener("click", setTimer);

    // Mostra o tempo inicial (00:00:00)
    updateDisplay();

});