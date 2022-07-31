"use strict";
let cards = [
  "https://www.improvemagic.com/wp-content/uploads/2020/11/ka.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/k2.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/k3.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/k4.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/k5.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/k6.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/k7.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/k8.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/k9.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/k10.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/kj.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/kq.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/kk.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/sa.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/s2.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/s3.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/s4.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/s5.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/s6.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/s7.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/s8.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/s9.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/s10.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/sj.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/sq.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/sk.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/pa.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/p2.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/p3.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/p4.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/p5.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/p6.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/p7.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/p8.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/p9.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/p10.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/pj.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/pq.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/pk.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/la.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/l2.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/l3.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/l4.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/l5.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/l6.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/l7.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/l8.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/l9.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/l10.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/lj.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/lq.png",
  "https://www.improvemagic.com/wp-content/uploads/2020/11/lk.png",
  "Images/BackSideofcard.jpg",
];
let cardnames = [
  "Ace Of Clubs",
  "Two Of Clubs",
  "Three Of Clubs",
  "Four Of Clubs",
  "Five Of Clubs",
  "Six Of Clubs",
  "Seven Of Clubs",
  "Eight Of Clubs",
  "Nine Of Clubs",
  "Ten Of Clubs",
  "Jack Of Clubs",
  "Queen Of Clubs",
  "King Of Clubs",
  "Ace Of Hearts",
  "Two Of Hearts",
  "Three Of Hearts",
  "Four Of Hearts",
  "Five Of Hearts",
  "Six Of Hearts",
  "Seven Of Hearts",
  "Eight Of Hearts",
  "Nine Of Hearts",
  "Ten Of Hearts",
  "Jack Of Hearts",
  "Queen Of Hearts",
  "King Of Hearts",
  "Ace Of Spades",
  "Two Of Spades",
  "Three Of Spades",
  "Four Of Spades",
  "Five Of Spades",
  "Six Of Spades",
  "Seven Of Spades",
  "Eight Of Spades",
  "Nine Of Spades",
  "Ten Of Spades",
  "Jack Of Spades",
  "Queen Of Spades",
  "King Of Spades",
  "Ace Of Diamonds",
  "Two Of Diamonds",
  "Three Of Diamonds",
  "Four Of Diamonds",
  "Five Of Diamonds",
  "Six Of Diamonds",
  "Seven Of Diamonds",
  "Eight Of Diamonds",
  "Nine Of Diamonds",
  "Ten Of Diamonds",
  "Jack Of Diamonds",
  "Queen Of Diamonds",
  "King Of Diamonds",
];
const body = document.body;
const fullDesignView = document.querySelector(".fullDesignView");
const letsPlayBtn = document.querySelector(".inbuttons");

// Starting the game
function showCardsTable() {
  fullDesignView.classList.remove("hideView");
}
letsPlayBtn.addEventListener("click", function () {
  body.classList.remove("hideBackground");
  setInterval(showCardsTable, 1000);
  letsPlayBtn.classList.add("hideBtn");
});

//card Shuffling
const distributedCards = [];
const shuffledCards = [];
const playerCards = [];
const ComputerCards = [];
function shuffling() {
  const randomNumber = Math.floor(Math.random() * (51 - 0 + 1) + 0);
  if (distributedCards.includes(randomNumber)) {
    return shuffling();
  } else {
    return randomNumber;
  }
}

for (let i = 0; i <= 51; i++) {
  shuffledCards[i] = shuffling();
  distributedCards[i] = shuffledCards[i];
}
// console.log(shuffledCards);
////////////////////////////////////////////////////////////////////////////////////////////////////////
//Determinig The score
let playerScore = 0;
let computerScore = 0;
let computerHiddenCardScore = 0;
const playerScoreDisplay = document.querySelectorAll(".scoreVal")[1];
const computerScoreDisplay = document.querySelector(".scoreVal");
const modalWindow = document.querySelector(".mod");
const overlay = document.querySelector(".overlay");
// const oneBtn = document.querySelectorAll(".one");
// const elevenBtn = document.querySelectorAll(".eleven");
const modalBtns = document.querySelector(".modBtnHead");

const cardToNumbers = new Map();
cardToNumbers.set("Two", 2);
cardToNumbers.set("Three", 3);
cardToNumbers.set("Four", 4);
cardToNumbers.set("Five", 5);
cardToNumbers.set("Six", 6);
cardToNumbers.set("Seven", 7);
cardToNumbers.set("Eight", 8);
cardToNumbers.set("Nine", 9);
cardToNumbers.set("Ten", 10);
cardToNumbers.set("Jack", 10);
cardToNumbers.set("Queen", 10);
cardToNumbers.set("King", 10);

//radomly Generates Value between 1 and 11 and returns
function setAceValue() {
  const randVal = Math.round(Math.random());
  if (randVal === 1) {
    return 11;
  } else {
    return 1;
  }
}
// console.log();
function updateScore(toWhom, cardname, status = "display") {
  const cardKey = cardname.split(" ")[0];
  // const cardKey = "Ace";

  if (toWhom === "c") {
    if (status === "hidden") {
      if (cardKey === "Ace") {
        computerHiddenCardScore = setAceValue();
      } else {
        computerHiddenCardScore = cardToNumbers.get(cardKey);
      }
    } else {
      if (cardKey === "Ace") {
        computerScore = setAceValue();
      } else {
        computerScore += cardToNumbers.get(cardKey);
      }
    }
  } else {
    if (cardKey === "Ace") {
      if (playerScore + 11 <= 21) {
        playerScore += 11;
      } else {
        playerScore += 1;
      }
    } else {
      playerScore += cardToNumbers.get(cardKey);
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Inital Stage Adding the 2 card to each
const imageholder = document.querySelector(".image_div"); //image holder for computer
const playerImageholder = document.querySelector(".user_image_div"); //image holder for player
const imageComponent = document.querySelector(".imageSet"); // images of Computer card
const playerImageComponent = document.querySelectorAll(".imageSet")[1]; // images of Players card

//Fixes the position depends on number of card
function positionFixer(toWhom) {
  if (toWhom === "c") {
    imageholder.style.marginLeft =
      Number.parseInt(getComputedStyle(imageholder).marginLeft) - 100 + "px";
  } else {
    playerImageholder.style.marginLeft =
      Number.parseInt(getComputedStyle(playerImageholder).marginLeft) -
      100 +
      "px";
  }
}

// showing the added card as User end
function displayAddedCard(toWhom, cardNo, status = "display") {
  // console.log(toWhom);
  let html;
  if (toWhom === "c") {
    if (status === "hidden") {
      html = `<img src="${cards[52]}" class="cardImages computer_hidden_card" alt="${cardnames[cardNo]}" id="${cardNo}"></img>`;
    } else {
      html = `<img src="${cards[cardNo]}" class="cardImages" alt="${cardnames[cardNo]}" id="card${cardNo}"></img>`;
    }
    imageComponent.insertAdjacentHTML("beforeend", html);
  } else {
    playerImageComponent.insertAdjacentHTML(
      "beforeend",
      `<img
    src="${cards[cardNo]}"
    class="cardImages"
    alt="${cardnames[cardNo]}"
    id="card${cardNo}"
  ></img>`
    );
  }

  if (playerCards.length > 1 && toWhom === "p" && playerCards.length < 5)
    positionFixer(toWhom);
  else if (
    ComputerCards.length > 1 &&
    toWhom === "c" &&
    ComputerCards.length < 5
  )
    positionFixer(toWhom);
}

//calls other function and determines where to add card
function addCard(toWhom, cardNo, status = "display") {
  if (toWhom === "p") {
    playerCards.push(cardNo);
    displayAddedCard(toWhom, cardNo);
    updateScore("p", cardnames[cardNo]);
  } else {
    ComputerCards.push(cardNo);
    if (status === "hidden") {
      displayAddedCard(toWhom, cardNo, status);
      updateScore("c", cardnames[cardNo], "hidden");
    } else {
      displayAddedCard(toWhom, cardNo);
      updateScore("c", cardnames[cardNo]);
    }
  }
}

//Adding two cards to Computer (1 hidden)
function addCardToComputer(status = "display") {
  addCard("c", shuffledCards[shuffledCards.length - 1], status);

  shuffledCards.pop();
}
function addCardToPlayer() {
  addCard("p", shuffledCards[shuffledCards.length - 1]);
  shuffledCards.pop();
}

addCardToComputer("hidden");

addCardToComputer();

addCardToPlayer();

addCardToPlayer();
updateAndDisplayScore();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//display Player Score
function updateAndDisplayScore() {
  playerScoreDisplay.innerHTML = `<p>${playerScore}</p>`;
  computerScoreDisplay.innerHTML = `<p>${computerScore}</p>`;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hit Button
function updateNamesPosition(toWhom) {
  if (toWhom === "p") {
    if (playerCards.length >= 5) return;
    const namePlayer = document.querySelector(".player_names");
    namePlayer.style.marginLeft =
      Number.parseInt(getComputedStyle(namePlayer).marginLeft) + 100 + "px";
  } else {
    if (ComputerCards.length >= 5) return;
    const namePlayer = document.querySelector(".computer_names");
    namePlayer.style.marginLeft =
      Number.parseInt(getComputedStyle(namePlayer).marginLeft) + 100 + "px";
  }
}
const hitBtn = document.querySelector(".greenBtn");
const standBtn = document.querySelector(".yellowBtn");
const buttonSet = document.querySelector(".buttonList");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// one Wining and Losing Condition of Player
let messageVal = "";
function FinalMessage() {
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector(".modal_message").innerHTML = `<p> ${messageVal}`;
  modalBtns.addEventListener("click", () => location.reload());
}
buttonSet.addEventListener("click", function (e) {
  if (e.target != hitBtn && e.target != standBtn) return;
  if (e.target === hitBtn) {
    addCardToPlayer();
    updateAndDisplayScore();
    updateNamesPosition("p");
    // console.log(computerHiddenCardScore, computerScore, playerScore);
    if (playerScore === 21) {
      messageVal = "You Won The Game 😍";
      setTimeout(FinalMessage, 1000);
    } else if (playerScore > 21) {
      messageVal = "You Lost The Game 😮";
      setTimeout(FinalMessage, 1000);
    }
  } else if (e.target === standBtn) {
    //display Computer Hidden Card
    const computerHiddenCard = document.querySelector(".computer_hidden_card");
    const cardNo = computerHiddenCard.id;

    setTimeout(() => (computerHiddenCard.src = cards[cardNo]), 1000);
    computerScore += computerHiddenCardScore;
    updateAndDisplayScore();

    while (computerScore <= 16) {
      addCardToComputer();
      updateAndDisplayScore();
    }
    if (computerScore === 21) {
      messageVal = "You Lost The Game 😮";
    } else if (computerScore > 21) {
      messageVal = "You Won The Game 😍";
    } else if (21 - computerScore > 21 - playerScore) {
      messageVal = "You Won The Game 😍";
    } else if (21 - computerScore < 21 - playerScore) {
      messageVal = "You Lost The Game 😮";
    } else {
      messageVal = "Game is Draw 😄";
    }
    setTimeout(FinalMessage, 3000);
  }
});
// hitBtn.addEventListener;
