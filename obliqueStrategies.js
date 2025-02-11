const cardText =document.getElementById("cardText");
const cards = ["HOLA", "CHAU"];

function showRandomCard(cards){
    index= Math.floor(Math.random() * cards.length);
    cardText.innerHTML=cards[index];

}

showRandomCard(cards);
