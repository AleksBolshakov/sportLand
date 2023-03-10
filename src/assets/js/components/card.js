export const card = (data) => {
    const cardItem = `<div class="item" data-valid="${data.answer}" tabindex="0">
            <div class="playtable__emoji-item draggable">
                <div class="playtable__emoji-side playtable__emoji-front">
                    <div class="playtable__emoji-img">
                        <picture>
                            <source srcset="img/cards/${data.img}.webp" type="image/webp">
                            <img src="img/cards/${data.img}.png" alt="">
                        </picture>
                    </div>
                </div>
                <div class="playtable__emoji-side playtable__emoji-back"></div>
            </div>
        </div>`
    return cardItem
}