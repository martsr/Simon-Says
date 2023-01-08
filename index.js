
const startBtn = document.querySelector(".empezar");

const round = document.querySelector('strong');

const btns = document.querySelectorAll('.item');

const state = document.querySelector('.comienzo');

let pcOrder = [];

let userOrder = [];

let turns = 0;

startBtn.onclick = () => {
    resetGame();
    play();
}

function play() {


    blockUserInput();
    state.innerHTML = 'Turno PC'
    getPCSelection();

    const DELAY_PLAYER_TURN = (pcOrder.length + 1) * 1000;



    setTimeout(function () {
        state.innerHTML = 'Te Toca! Apreta la secuencia correcta'
        userSelection();
    }, DELAY_PLAYER_TURN);

    userOrder = [];
    turns++;

    round.innerText = turns;


}


function getRandomInt() {
    const max = 4;
    return Math.floor((Math.random() * max));
}

function getPCSelection() {
    pcOrder.push(btns[getRandomInt()]);
    pcOrder.forEach(function (value, index) {
        const RETRASO_MS = (index + 1) * 1000;
        setTimeout(() => changeColor(value), RETRASO_MS)
    });
}


function changeColor(square) {
    square.style.opacity = 1;
    setTimeout(() => {
        square.style.opacity = 0.6;
    }, 500);

}

function resetGame() {
    document.querySelector('.top').classList.replace('alert-danger', 'alert-primary');
    startBtn.classList.replace('btn-outline-danger','btn-outline-primary');
    pcOrder = [];
    turns = 0;
    startBtn.innerHTML="START";
}
function blockUserInput() {
    document.querySelectorAll('.item').forEach(function ($cuadro) {
        $cuadro.onclick;
    });

}
function userSelection() {
    let long = 0;
    while (long < pcOrder.length) {
        document.querySelectorAll('.item').forEach(function ($square) {
            $square.onclick = getUserSelection;
        });
        long++;
    }
}

function getUserSelection(e) {
    const $utarget = e.target;
    userOrder.push($utarget);
    const $pcChoice = pcOrder[userOrder.length - 1];
    if ($utarget.className !== $pcChoice.className) {
        lost();
        return;
    }

    if (userOrder.length === pcOrder.length) {
        blockUserInput();
        setTimeout(play, 1000);
    }
}

function lost() {
    document.querySelector('.top').classList.replace('alert-primary', 'alert-danger');
    state.innerHTML = "Perdiste, toca REINICIAR para volver a jugar.";
    startBtn.innerHTML="REINICIAR";
    state.style.color = 'red';
    startBtn.classList.replace('btn-outline-primary','btn-outline-danger');
    if(startBtn.clicked == true){
        setTimeout(()=>resetGame(),3000);
    }
    
}
function checkSelection() {
    console.log(pcOrder.length);
    console.log(userOrder.length);
} 