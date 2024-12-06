let parentDiv = document.getElementById("parent");
let cardsInfos = [
    {imgUrl:"cat1.jpeg"},
    {imgUrl:"cat2.jpeg"},
    {imgUrl:"cat3.jpeg"},
    {imgUrl:"cat4.jpeg"},
    {imgUrl:"cat5.jpeg"},
    {imgUrl:"cat6.jpeg"},
    {imgUrl:"cat7.jpeg"},
    {imgUrl:"cat8.jpeg"}
];
let cards = "";
for (let i = 0; i < cardsInfos.length; i++) {
    let card = `<div class="card-img">
                <img src="${cardsInfos[i].imgUrl}" alt="" />
                </div>
                <div class="card-footer"></div>`;
    cards += card;
}
parentDiv.innerHTML = cards;