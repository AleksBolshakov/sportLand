import {data} from "./data.js";
import {stepTemplate} from "./stepTemplate.js";
import dragula from  'dragula'
import {timer} from "./timer.js";

const Cards = () => {


    const cardsContainer = document.querySelectorAll('.playtable__emoji')
    const dropzoneContainer = document.getElementById('dropzone')
    const dropZoneCards = document.querySelector('.playtable__cards-wrapper')
    const description = document.querySelector('.playtable__cards-description')
    const questionTitle = document.querySelector('.playtable__question-title')
    const counterSelector = document.querySelector('.playtable__question-counter')
    const progress = document.querySelector('.playtable__loader')
    const end = document.querySelector('.playtable__end')
    let count = 1


    counterSelector.innerHTML = `${count} / ${cardsContainer.length}`

    cardsContainer.forEach(container =>{
        const drake = dragula([container, dropzoneContainer], {
            accepts: function (el, target, source, sibling) {
                if(el.dataset.valid === 'false') {
                    dropZoneCards.classList.add('error')
                    return false
                }
                return true;
            },
        });

        drake.on('drag', (el)=>{
            description.innerHTML = el.dataset.title
            if(el.dataset.valid === 'false') {
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
        })

        drake.on('drop', function(el, target, source, sibling) {

            description.innerHTML = el.dataset.title
            dropZoneCards.classList.remove('error')

            setTimeout(()=>{
                description.innerHTML = ''
                dropZoneCards.classList.remove('error')
                dropZoneCards.classList.remove('error')
            }, 3000)
            if( el.dataset.valid === 'false' ) {
                description.classList.add('error')
                el.remove()
            }
            if( el.dataset.valid === 'true' && target.matches('#dropzone') && target.children.length > 1 ) {
                count++
                counterSelector.innerHTML = `${count} / ${cardsContainer.length}`

                if(count > cardsContainer.length) {
                    source.classList.add('hidden')
                    description.innerHTML = ''
                    end.style.display = 'block'
                    counterSelector.style.display = 'none'
                    questionTitle.style.display = 'none'
                    dropZoneCards.style.display = 'none'
                } else {
                    questionTitle.innerHTML = document.querySelector('.playtable__emoji-'+count).dataset.title
                    description.innerHTML = ''
                    source.classList.add('hidden')
                    progress.classList.add('init')
                    setTimeout(()=>{
                        document.querySelector('.playtable__emoji-'+count).classList.remove('hidden')
                        progress.classList.remove('init')
                    }, 3000)
                    target.innerHTML = ''
                }

            }

        });
    })

}
export default Cards;