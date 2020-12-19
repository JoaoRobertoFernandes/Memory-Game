const cards = document.querySelectorAll(".card");

/*--------Flip---------*/
function flipCard(){this.classList.add("flip");}
cards.forEach((card) => {card.addEventListener("click", flipCard)})
/*--------Flip---------*/

