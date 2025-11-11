document.addEventListener("DOMContentLoaded", () => {

    const minutesDisplay = document.getElementById("pomodoro-minutes");
    const secondsDisplay = document.getElementById("pomodoro-seconds");
    const statusDisplay = document.getElementById("pomodoro-status");

    // Configurações do Pomodoro
    const workTime = 25 * 60;      // 25 minutos de trabalho
    const shortBreak = 5 * 60;     // 5 minutos de pausa curta
    const longBreak = 15 * 60;     // 15 minutos de pausa longa

    let timeLeft = workTime;
    let timer = null;
    let isRunning = false;
    let isWork = true;
    let cycles = 0; // conta quantas sessões de trabalho foram feitas

    // Atualiza o visor de tempo
    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        minutesDisplay.textContent = String(minutes).padStart(2, "0");
        secondsDisplay.textContent = String(seconds).padStart(2, "0");
    }

    // Inicia o timer
    function startPomodoro() {
        if (isRunning) return; // evita iniciar várias vezes
        isRunning = true;

        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;

                if (isWork) {
                    cycles++;
                    if (cycles % 4 === 0) {
                        // pausa longa
                        timeLeft = longBreak;
                        statusDisplay.textContent = "Pausa longa ";
                    } else {
                        // pausa curta
                        timeLeft = shortBreak;
                        statusDisplay.textContent = "Pausa curta ";
                    }
                    isWork = false;
                } else {
                    // volta ao trabalho
                    timeLeft = workTime;
                    statusDisplay.textContent = "Trabalhando ";
                    isWork = true;
                }

                updateDisplay();
                startPomodoro(); // inicia o próximo ciclo automaticamente
            }
        }, 1000);
    }

    // Pausa
    function pausePomodoro() {
        clearInterval(timer);
        isRunning = false;
    }

    // Reset
    function resetPomodoro() {
        clearInterval(timer);
        isRunning = false;
        isWork = true;
        cycles = 0;
        timeLeft = workTime;
        statusDisplay.textContent = "Trabalhando 💻";
        updateDisplay();
    }

    // Eventos dos botões
    document.getElementById("start-Pomodoro").addEventListener("click", startPomodoro);
    document.getElementById("pause-Pomodoro").addEventListener("click", pausePomodoro);
    document.getElementById("reset-Pomodoro").addEventListener("click", resetPomodoro);

    // Inicializa o display
    updateDisplay();
});