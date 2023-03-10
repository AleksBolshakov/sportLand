import {card} from "./card.js";
export const stepTemplate = (data) => {
    const cards = data.cards
    return `
        <div class="playtable__emoji playtable__column cnt">
            
            ${cards.map(item =>  card(item))}
        </div>
    `
}