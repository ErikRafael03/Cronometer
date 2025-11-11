// TELA PRINCIPAL
function mostrarOpcoes() {
      const opcoes = document.getElementById('opcoes');
      opcoes.style.display = opcoes.style.display === 'flex' ? 'none' : 'flex';
}

let telas = document.querySelectorAll('.sub-content');

function showScreen(telaId){
      telas.forEach(tela => tela.classList.remove("active"));
      document.getElementById(telaId).classList.add("active");
}

let btnVoltar = document.getElementsByClassName('btn-voltar').onclick = () => showScreen("home");
let btnRelogio = document.getElementById('btn-relogio').onclick = () => showScreen("relogio");
let btnCronometro = document.getElementById('btn-cronometro').onclick = () => showScreen("cronometro");
let btnTimer = document.getElementById('btn-timer').onclick = () => showScreen("timer");
let btnPomodoro = document.getElementById('btn-pomodoro').onclick = () => showScreen("pomodoro");
// TELA PRINCIPAL

