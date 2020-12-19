/*---------Variables----------*/
const cards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
/*---------Variables----------*/

/*--------Flip---------*/
function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add("flip");
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    check();
}

cards.forEach((card) => {card.addEventListener("click", flipCard)});
/*--------Flip---------*/

/*--------Check cards---------*/
function check() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disable();
        return;
    }
    unFlip();
}
/*--------Check cards---------*/

/*--------Disable cards---------*/
function disable(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    reset();
}
/*--------Disable cards---------*/

/*--------UnFlip cards---------*/
function unFlip(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        reset();
    }, 1500);
}
/*--------UnFlip cards---------*/

/*--------Board Reset---------*/
function reset(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
/*--------Board Reset---------*/

/*--------Shuffle cards---------*/
(function shuffle() {
    cards.forEach((card) => {
        let rand = Math.floor(Math.random() * 12);
        card.style.order = rand;
    })
})();
/*--------Shuffle cards---------*/




