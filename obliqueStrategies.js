const cardText =document.getElementById("cardText");
const cards = new Map();
cards.set(1, "HOLA");
cards.set(2, "CHAU");

function showRandomCard(cards){
    
    const keys = Array.from(cards.keys()); 
    const randomKey = keys[Math.floor(Math.random() * keys.length)]; 
    cardText.innerHTML = cards.get(randomKey);  

}

showRandomCard(cards);
