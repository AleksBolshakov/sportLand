import dragula from 'dragula'
import {timerObj} from "./timer.js";

const Cards = () => {


    const cardsContainer = document.querySelectorAll('.playtable__emoji')
    const dropzoneContainer = document.getElementById('dropzone')
    const dropZoneCards = document.querySelector('.playtable__cards-wrapper')

    const description = document.querySelector('.playtable__cards-description')
    const questionTitle = document.querySelector('.playtable__question-title')
    const counterSelector = document.querySelector('.playtable__question-counter')
    const progress = document.querySelector('.playtable__loader')
    const end = document.querySelector('.playtable__end')
    const btnContinue = document.querySelectorAll('.btn__continue')
    const resultSection = document.querySelector('.playtable__last')
    const resultTotalText = document.getElementById('resultTotalText')


    let count = 1
    let start = false
    let currentCards = document.querySelector('.playtable__emoji')
    let timeoutSection = null

    counterSelector.innerHTML = `${count} / ${cardsContainer.length}`

    cardsContainer.forEach(container => {
        const answers = container.dataset.answers

        const drake = dragula([container, dropzoneContainer], {
            accepts: function (el, target, source, sibling) {
                if (el.dataset.valid === 'false') {
                    dropZoneCards.classList.add('error')
                    return false
                }
                return true;
            },
        });


        drake.on('drag', (el) => {
            description.innerHTML = el.dataset.title
            if (el.dataset.valid === 'false') {
                dropZoneCards.classList.remove('success')
                description.classList.remove('success')
                description.classList.add('error')
                return false
            } else {
                dropZoneCards.classList.remove('error')
                dropZoneCards.classList.add('success')
                description.classList.add('success')
                description.classList.remove('error')
            }

            if(!start) {
                timerObj.startTimer()
                start = true
            }

        })

        drake.on('drop', function (el, target, source) {

            description.innerHTML = el.dataset.title
            dropZoneCards.classList.remove('error')

            setTimeout(() => {
                description.innerHTML = ''
                dropZoneCards.classList.remove('error')
            }, 3000)
            if (el.dataset.valid === 'false') {
                description.classList.add('error')
                el.remove()
            }

            if (el.dataset.valid === 'true' && target.matches('#dropzone') && target.children.length > (answers - 1)) {
                count++
                timerObj.pauseTimer()

                if (count > cardsContainer.length) {
                    source.classList.add('hidden')
                    description.innerHTML = ''
                    resultSection.style.display = 'block'
                    counterSelector.style.display = 'none'
                    questionTitle.style.display = 'none'
                    dropZoneCards.style.display = 'none'
                    //resultTotalText.innerHTML = `10 ${num_word(10, ['ассоциация', 'ассоциаций', 'ассоциаций'])}`;
                    timerObj.stopTimer()

                } else if (count === 3) {
                    target.innerHTML = ''
                    source.classList.add('hidden')
                    description.innerHTML = ''
                    end.style.display = 'block'
                    counterSelector.style.display = 'none'
                    questionTitle.style.display = 'none'
                    dropZoneCards.style.display = 'none'
                } else {
                    source.classList.add('hidden')
                    progress.classList.add('init')
                    timeoutSection = setTimeout(() => {
                        counterSelector.innerHTML = `${count} / ${cardsContainer.length}`
                        questionTitle.innerHTML = document.querySelector('.playtable__emoji-' + count).dataset.title
                        document.querySelector('.playtable__emoji-' + count).classList.remove('hidden')
                        progress.classList.remove('init')
                        timerObj.startTimer()
                    }, 3000)
                    target.innerHTML = ''
                }

            }

        })

    })

    btnContinue.forEach(btn => {
        btn.addEventListener('click', () => {
            timerObj.startTimer()
            clearTimeout(timeoutSection)
            timeoutSection = null
            end.style.display = 'none'
            counterSelector.style.display = 'block'
            questionTitle.style.display = 'block'
            dropZoneCards.style.display = 'flex'
            currentCards.classList.add('hidden')
            counterSelector.innerHTML = `${count} / ${cardsContainer.length}`
            questionTitle.innerHTML = document.querySelector('.playtable__emoji-' + count).dataset.title
            document.querySelector('.playtable__emoji-' + count).classList.remove('hidden')
            progress.classList.remove('init')
        })
    })
    function num_word(value, words){
        value = Math.abs(value) % 100;
        var num = value % 10;
        if(value > 10 && value < 20) return words[2];
        if(num > 1 && num < 5) return words[1];
        if(num == 1) return words[0];
        return words[2];
    }

}
export default Cards;