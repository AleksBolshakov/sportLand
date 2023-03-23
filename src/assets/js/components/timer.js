const min = document.getElementById('min')
const sec = document.getElementById('sec')
const circle = document.querySelector( '.circle_animation' ).style;
const resultTimerMin = document.querySelector('.result__time-min')
const resultTimerSec = document.querySelector('.result__time-sec')
const resultSeconds = document.getElementById('resultSeconds')
const cardsContainer = document.querySelectorAll('.playtable__emoji')
const resultSection = document.querySelector('.playtable__last')
const counterSelector = document.querySelector('.playtable__question-counter')
const questionTitle = document.querySelector('.playtable__question-title')
const dropZoneCards = document.querySelector('.playtable__cards-wrapper')
const timer = document.querySelector('.playtable__timer')
let seconds = 220

let step = 1
let i = 0

circle.strokeDashoffset = 0;

let finalOffset = 440;
let circleStep = finalOffset/seconds;


min.innerText = Math.floor(seconds / 60).toString().padStart(2, '0')
sec.innerText = (seconds % 60).toString().padStart(2, '0')

function initTimer(step = 1) {
    let decrementBy = step
    let intervalId = null;
    let totalTime ;
    let timerEnd = false

    function startTimer() {
        if (!intervalId) {
            intervalId = setInterval(() => {
                i++
                seconds -= step
                circle.strokeDashoffset = circleStep * i;
                min.innerText = Math.floor(seconds / 60).toString().padStart(2, '0')
                sec.innerText = (seconds % 60).toString().padStart(2, '0')
                resultTimerMin.innerHTML = Math.floor(seconds / 60).toString().padStart(2, '0')
                resultTimerSec.innerHTML = (seconds % 60).toString().padStart(2, '0')
                resultSeconds.innerHTML = 220 - seconds
                if (seconds === 0) stopTimer()
            }, 1000)
        }
    }

    function pauseTimer() {
        if (!intervalId) startTimer()
        else {
            clearInterval(intervalId)
            intervalId = null
        }
    }

    function stopTimer() {
        clearInterval(intervalId)
        intervalId = null

        cardsContainer.forEach(item => item.classList.add('hidden'))
        resultSection.style.display = 'block'
        counterSelector.style.display = 'none'
        questionTitle.style.display = 'none'
        dropZoneCards.style.display = 'none'
        timer.style.display = 'none'
        resultTimerMin.innerHTML = 3
        resultTimerSec.innerHTML = 40
        resultSeconds.innerHTML = 220 - seconds
    }

    return {startTimer, pauseTimer, stopTimer, timerEnd, totalTime}
}

export const timerObj = initTimer(step);
