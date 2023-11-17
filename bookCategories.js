//books
const genreBook = [
  {
    id: 18,
    dataName: "history",
    image: "BookImages/Meditations.png",
    title: "Meditations",
    price: 560.0,
  },
  {
    id: 19,
    dataName: "selfhelp",
    image: "BookImages/12-Rules-for-Life.png",
    title: "12 Rules for Life",
    price: 960.0,
  },
  {
    id: 20,
    dataName: "fantasy",
    image: "BookGenre/Fantasy/Fire-and-blood.jpg",
    title: "Fire and Blood",
    price: 1440.0,
  },
  {
    id: 21,
    dataName: "romance",
    image: "BookImages/It-Ends-With-Us.png",
    title: "It Ends With Us",
    price: 800.0,
  },
  {
    id: 22,
    dataName: "finance",
    image: "BookImages/The-Psychology-of-Money.png",
    title: "The Psychology of Money",
    price: 480.0,
  },
  {
    id: 23,
    dataName: "selfhelp",
    image: "BookImages/Ikigai.png",
    title: "Ikigai",
    price: 880.0,
  },
  {
    id: 24,
    dataName: "selfhelp",
    image: "BookImages/Atomic-Habits.png",
    title: "Atomic Habits",
    price: 1280.0,
  },
  {
    id: 25,
    dataName: "selfhelp",
    image: "BookImages/The-Daily-Stoic.png",
    title: "The Daily Stoic",
    price: 960.0,
  },
  {
    id: 26,
    dataName: "romance",
    image: "BookImages/Cleopatra-and-Frankenstein.png",
    title: "Cleopatra and Frankenstein",
    price: 800.0,
  },
  {
    id: 27,
    dataName: "historyfi",
    image: "BookImages/Crime-and-Punishment.png",
    title: "Crime and Punishment",
    price: 480.0,
  },
  {
    id: 28,
    dataName: "selfhelp",
    image: "BookImages/48-Laws-of-Power.png",
    title: "48 Laws of Power",
    price: 1280.0,
  },
  {
    id: 29,
    dataName: "selfhelp",
    image: "BookImages/Hooked.png",
    title: "Hooked",
    price: 460.0,
  },
  {
    id: 30,
    dataName: "romance",
    image: "BookImages/Tomorrow-and-Tomorrow.png",
    title: "Tomorrow and Tomorrow",
    price: 640.0,
  },
  {
    id: 31,
    dataName: "romance",
    image: "BookImages/Heaven.png",
    title: "Heaven",
    price: 880.0,
  },
  {
    id: 32,
    dataName: "romance",
    image: "BookImages/Everything-I-Know-About-Love.png",
    title: "Everything I Know of Love",
    price: 400.0,
  },
  {
    id: 33,
    dataName: "biography",
    image: "BookImages/Elon-musk.png",
    title: "Elon Musk",
    price: 2300.0,
  },
  {
    id: 34,
    dataName: "finance",
    image: "BookGenre/Finance/Think-and-grow-rich.jpg",
    title: "Think and Grow Rich",
    price: 800.0,
  },
  {
    id: 35,
    dataName: "scifi",
    image: "BookGenre/SciFi/Dune.jpg",
    title: "Dune",
    price: 1440.0,
  },
  {
    id: 36,
    dataName: "selfhelp",
    image: "BookGenre/Self Help/The-laws-of-human-nature.jpg",
    title: "The Laws of Human Nature",
    price: 800.0,
  },
  {
    id: 37,
    dataName: "romance",
    image: "BookGenre/HistoryFi/Little-woman.jpg",
    title: "Little Woman",
    price: 560.0,
  },
  {
    id: 38,
    dataName: "selfhelp",
    image: "BookGenre/Self Help/Thinking-fast-and-slow.jpg",
    title: "Thinking fast and slow",
    price: 400.0,
  },
  {
    id: 39,
    dataName: "scifi",
    image: "BookGenre/SciFi/Jurassic-park.jpg",
    title: "Everything I Know About Lo",
    price: 990.0,
  },
  {
    id: 40,
    dataName: "selfhelp",
    image: "BookGenre/Self Help/Power-vs-force.jpg",
    title: "Power vs. Force",
    price: 720.0,
  },
  {
    id: 41,
    dataName: "selfhelp",
    image: "BookGenre/Self Help/Outliers.jpg",
    title: "Outliers",
    price: 600.0,
  },
  {
    id: 42,
    dataName: "selfhelp",
    image: "BookGenre/Self Help/The-courage-to-be-disliked.jpg",
    title: "The Courage To Be Disliked",
    price: 460.0,
  },
  {
    id: 43,
    dataName: "selfhelp",
    image: "BookGenre/Self Help/The-organized-mind.jpg",
    title: "The Organized Mind",
    price: 800.0,
  },
  {
    id: 44,
    dataName: "romance",
    image: "BookGenre/Romance/Twisted-love.jpg",
    title: "Twisted Love",
    price: 640.0,
  },
  {
    id: 45,
    dataName: "historyfi",
    image: "BookGenre/HistoryFi/The-great-gatsby.jpg",
    title: "The Great Gatsby",
    price: 240.0,
  },
  {
    id: 46,
    dataName: "finance",
    image: "BookGenre/Finance/The-intelligent-investor.jpg",
    title: "The Intelligent Investor",
    price: 640.0,
  },
  {
    id: 47,
    dataName: "fantasy",
    image: "BookGenre/Fantasy/Imagine-me.jpg",
    title: "Imagine Me",
    price: 820.0,
  },
  {
    id: 48,
    dataName: "fantasy",
    image: "BookGenre/Fantasy/Midnight-sun.jpg",
    title: "Midnignt Sun",
    price: 480.0,
  },
  {
    id: 49,
    dataName: "biography",
    image: "BookGenre/Biography/Acros-many-mountains.jpg",
    title: "Across Many Mountains",
    price: 960.0,
  },
  {
    id: 50,
    dataName: "finance",
    image: "BookGenre/Finance/How-to-become-rich.jpg",
    title: "How To Become Rich",
    price: 500.0,
  },
  {
    id: 51,
    dataName: "finance",
    image: "BookGenre/Finance/One-up-on-wall-street.jpg",
    title: "One Up on Wall Street",
    price: 690.0,
  },
  {
    id: 52,
    dataName: "finance",
    image: "BookGenre/Finance/Reimagining-capitalish.jpg",
    title: "Reimagining Capitalish",
    price: 800.0,
  },
  {
    id: 53,
    dataName: "finance",
    image: "BookGenre/Finance/Side-hustle.jpg",
    title: "Side Hustle",
    price: 420.0,
  },
  {
    id: 54,
    dataName: "fantasy",
    image: "BookGenre/Fantasy/Ready-player-two.jpg",
    title: "Ready Player Two",
    price: 1140.0,
  },
  {
    id: 55,
    dataName: "fantasy",
    image: "BookGenre/Fantasy/Shiva-to-shankara.jpg",
    title: "Shiva to Shankara",
    price: 440.0,
  },
  {
    id: 56,
    dataName: "fantasy",
    image: "BookGenre/Fantasy/We-hunt-the-flame.jpg",
    title: "We Hunt The Flame",
    price: 840.0,
  },
  {
    id: 57,
    dataName: "fantasy",
    image: "BookGenre/Fantasy/You've-reached-sam.jpg",
    title: "You Have Reached Sam",
    price: 720.0,
  },
  {
    id: 58,
    dataName: "fantasy",
    image: "BookGenre/Fantasy/Unite-me.jpg",
    title: "Unite Me",
    price: 320.0,
  },
  {
    id: 59,
    dataName: "fantasy",
    image: "BookGenre/Fantasy/The-queen-of-nothing.jpg",
    title: "The Queen of Nothing",
    price: 680.0,
  },
  {
    id: 60,
    dataName: "fantasy",
    image: "BookGenre/Fantasy/The-100.jpg",
    title: "The 100",
    price: 400.0,
  },
  {
    id: 61,
    dataName: "fantasy",
    image: "BookGenre/Fantasy/The-poppy-war.jpg",
    title: "The Poppy War",
    price: 870.0,
  },
  {
    id: 62,
    dataName: "fantasy",
    image: "BookGenre/HistoryFi/War-of-lanka.jpg",
    title: "War of Lanka",
    price: 720.0,
  },
  {
    id: 63,
    dataName: "romance",
    image: "BookGenre/Romance/Girl-in-pieces.jpg",
    title: "Girl in Pieces",
    price: 630.0,
  },
  {
    id: 64,
    dataName: "romance",
    image: "BookGenre/Romance/Greek-lessons.jpg",
    title: "Greek Lessons",
    price: 420.0,
  },
  {
    id: 65,
    dataName: "romance",
    image: "BookGenre/Romance/Jane-eyre.jpg",
    title: "Jane Eyre",
    price: 320.0,
  },
  {
    id: 66,
    dataName: "scifi",
    image: "BookGenre/SciFi/The-war-of-the-world.jpg",
    title: "The War of the World",
    price: 860.0,
  },
  {
    id: 67,
    dataName: "romance",
    image: "BookGenre/Romance/Verity.jpg",
    title: "Verity",
    price: 890.0,
  },
  {
    id: 68,
    dataName: "finance",
    image: "BookGenre/Finance/Way-of-the-trader.jpg",
    title: "Way of the Trader",
    price: 680.0,
  },
  {
    id: 69,
    dataName: "finance",
    image: "BookGenre/Finance/The-laws-of-wealth.jpg",
    title: "The Laws of Wealth",
    price: 700.0,
  },
  {
    id: 70,
    dataName: "biography",
    image: "BookGenre/Biography/Tom-felton.jpg",
    title: "Tom Felton",
    price: 1620.0,
  },
  {
    id: 71,
    dataName: "biography",
    image: "BookGenre/Biography/The-confessions.jpg",
    title: "The Confessions",
    price: 1200.0,
  },
  {
    id: 72,
    dataName: "biography",
    image: "BookGenre/Biography/Serving-the-servant.jpg",
    title: "Serving the Servant",
    price: 960.0,
  },
  {
    id: 73,
    dataName: "biography",
    image: "BookGenre/Biography/I-remain-in-darkness.jpg",
    title: "I Remain in Darkness",
    price: 840.0,
  },
  {
    id: 74,
    dataName: "finance",
    image: "BookGenre/Finance/The-billionaire's-apprentice.jpg",
    title: "The Billionaire's Apprentice",
    price: 720.0,
  },
  {
    id: 75,
    dataName: "finance",
    image: "BookGenre/Finance/The-polycycle-investor.jpg",
    title: "The Polycycle Investor",
    price: 620.0,
  },
  {
    id: 76,
    dataName: "biography",
    image: "BookGenre/Biography/Never-give-up.jpg",
    title: "Never Give Up",
    price: 1840.0,
  },
  {
    id: 77,
    dataName: "biography",
    image: "BookGenre/Biography/Andy-warhol.jpg",
    title: "Andy Warhol",
    price: 1240.0,
  },
  {
    id: 78,
    dataName: "biography",
    image: "BookGenre/Biography/Augustus.jpg",
    title: "Augustus",
    price: 640.0,
  },
  {
    id: 79,
    dataName: "biography",
    image: "BookGenre/Biography/Exteriors.jpg",
    title: "Exteriors",
    price: 520.0,
  },
  {
    id: 80,
    dataName: "biography",
    image: "BookGenre/Biography/Happening.jpg",
    title: "Happening",
    price: 820.0,
  },
  {
    id: 81,
    dataName: "history",
    image: "BookGenre/History/Visit-nepal.jpg",
    title: "Visit Nepal",
    price: 1500.0,
  },
  {
    id: 82,
    dataName: "biography",
    image: "BookGenre/Biography/Henry-and-june.jpg",
    title: "Henry and June",
    price: 1020.0,
  },
  {
    id: 83,
    dataName: "finance",
    image: "BookGenre/Finance/The-sceptical-investor.jpg",
    title: "The Sceptical Investor",
    price: 820.0,
  },
  {
    id: 84,
    dataName: "mystery",
    image: "BookGenre/Mystery/For-you-and-only-you.jpg",
    title: "For You and Only You",
    price: 640.0,
  },
  {
    id: 85,
    dataName: "mystery",
    image: "BookGenre/Mystery/23rd-midnight.jpg",
    title: "23rd Midnight",
    price: 800.0,
  },
  {
    id: 86,
    dataName: "mystery",
    image: "BookGenre/Mystery/Private-beijing.jpg",
    title: "Private Beijing",
    price: 960.0,
  },
  {
    id: 87,
    dataName: "historyfi",
    image: "BookGenre/HistoryFi/The-idiot.jpg",
    title: "The Idiot",
    price: 420.0,
  },
  {
    id: 88,
    dataName: "historyfi",
    image: "BookGenre/HistoryFi/Small-things-like-these.jpg",
    title: "Small Things Like These",
    price: 640.0,
  },
  {
    id: 89,
    dataName: "historyfi",
    image: "BookGenre/HistoryFi/The-immortals-of-meluha.jpg",
    title: "The Immortals of Meluha",
    price: 800.0,
  },
  {
    id: 90,
    dataName: "romance",
    image: "BookGenre/HistoryFi/The-great-gatsby.jpg",
    title: "The Great Gatsby",
    price: 240.0,
  },
  {
    id: 91,
    dataName: "mystery",
    image: "BookGenre/Mystery/Waking-lions.jpg",
    title: "Waking Lions",
    price: 960.0,
  },
  {
    id: 92,
    dataName: "mystery",
    image: "BookGenre/Mystery/Too-late.jpg",
    title: "Too Late",
    price: 520.0,
  },
  {
    id: 93,
    dataName: "mystery",
    image: "BookGenre/Mystery/The-woman-who-lied.jpg",
    title: "The Woman who Lied",
    price: 700.0,
  },
  {
    id: 94,
    dataName: "history",
    image: "BookGenre/History/Unruly.jpg",
    title: "Unruly",
    price: 1200.0,
  },
  {
    id: 95,
    dataName: "history",
    image: "BookGenre/History/The-sleepwalkers.jpg",
    title: "The Sleepwalkers",
    price: 1920.0,
  },
  {
    id: 96,
    dataName: "scifi",
    image: "BookGenre/SciFi/Artemis.jpg",
    title: "Artemis",
    price: 1160.0,
  },
  {
    id: 97,
    dataName: "scifi",
    image: "BookGenre/SciFi/Circle-of-death.jpg",
    title: "Circle of Death",
    price: 840.0,
  },
  {
    id: 98,
    dataName: "scifi",
    image: "BookGenre/SciFi/Diamond-age.jpg",
    title: "Diamond Age",
    price: 800.0,
  },
  {
    id: 99,
    dataName: "scifi",
    image: "BookGenre/SciFi/Dr-Jekyll-and-Mr-Hyde.jpg",
    title: "Dr Jekyll and Mr Hyde",
    price: 800.0,
  },
  {
    id: 100,
    dataName: "scifi",
    image: "BookGenre/SciFi/The-supernova-era.jpg",
    title: "The Supernova Era",
    price: 1300.0,
  },
  {
    id: 101,
    dataName: "truecrime",
    image: "BookGenre/True Crime/The-sun-does-shine.jpg",
    title: "The Sun Does Shine",
    price: 720.0,
  },
  {
    id: 102,
    dataName: "truecrime",
    image: "BookGenre/True Crime/Black-coffee.jpg",
    title: "Black Coffee",
    price: 960.0,
  },
  {
    id: 103,
    dataName: "truecrime",
    image: "BookGenre/True Crime/In-the-shadow-of-death.jpg",
    title: "In the Shadow of Death",
    price: 670.0,
  },
  {
    id: 104,
    dataName: "truecrime",
    image: "BookGenre/True Crime/Killing-the-mob.jpg",
    title: "Killing the Mob",
    price: 420.0,
  },
  {
    id: 105,
    dataName: "scifi",
    image: "BookGenre/SciFi/The-stories-of-ray-bradbury.jpg",
    title: "The Stories of Ray Bradbury",
    price: 1480.0,
  },
  {
    id: 106,
    dataName: "scifi",
    image: "BookGenre/SciFi/The-fragile-threads-of-power.jpg",
    title: "Fragile Threads of Power",
    price: 1110.0,
  },
  {
    id: 107,
    dataName: "mystery",
    image: "BookGenre/Mystery/Prom-mom.jpg",
    title: "Prom Mom",
    price: 500.0,
  },
  {
    id: 108,
    dataName: "mystery",
    image: "BookGenre/Mystery/The-dogs-of-riga.jpg",
    title: "The Dogs of Riga",
    price: 620.0,
  },
  {
    id: 109,
    dataName: "mystery",
    image: "BookGenre/Mystery/The-shards.jpg",
    title: "The Shards",
    price: 720.0,
  },
  {
    id: 110,
    dataName: "scifi",
    image: "BookGenre/SciFi/In-ascension.jpg",
    title: "In Ascension",
    price: 420.0,
  },
  {
    id: 111,
    dataName: "scifi",
    image: "BookGenre/SciFi/Sea-of-tranquility.jpg",
    title: "Sea of Tranquility",
    price: 680.0,
  },
  {
    id: 112,
    dataName: "historyfi",
    image: "BookGenre/HistoryFi/War-of-lanka.jpg",
    title: "War of Lanka",
    price: 720.0,
  },
  {
    id: 113,
    dataName: "historyfi",
    image: "BookGenre/HistoryFi/The-picture-of-dorian-gray.jpg",
    title: "The Picture of Dorian Gray",
    price: 800.0,
  },
  {
    id: 114,
    dataName: "historyfi",
    image: "BookGenre/HistoryFi/The-master-and-margarita.jpg",
    title: "The Master and Margarita",
    price: 680.0,
  },
  {
    id: 115,
    dataName: "historyfi",
    image: "BookGenre/HistoryFi/Little-woman.jpg",
    title: "Little Woman",
    price: 960.0,
  },
  {
    id: 116,
    dataName: "history",
    image: "BookGenre/History/Energy-and-civilization.jpg",
    title: "Energy and Civilization",
    price: 2640.0,
  },
  {
    id: 117,
    dataName: "history",
    image: "BookGenre/History/Femina.jpg",
    title: "Femina",
    price: 1260.0,
  },
  {
    id: 118,
    dataName: "history",
    image: "BookGenre/History/New-maps-of-hell.jpg",
    title: "New Maps of Hell",
    price: 960.0,
  },
  {
    id: 119,
    dataName: "history",
    image: "BookGenre/History/Smoke-and-ashes.jpg",
    title: "Smoke and Ases",
    price: 960.0,
  },
  {
    id: 120,
    dataName: "history",
    image: "BookGenre/History/Sparks.jpg",
    title: "Sparks",
    price: 720.0,
  },
  {
    id: 121,
    dataName: "historyfi",
    image: "BookGenre/HistoryFi/Don-quixote.jpg",
    title: "Don Quixote",
    price: 1120.0,
  },
  {
    id: 122,
    dataName: "mystery",
    image: "BookGenre/Mystery/The-sanatorium.jpg",
    title: "The Sanatorium",
    price: 1720.0,
  },
  {
    id: 123,
    dataName: "mystery",
    image: "BookGenre/Mystery/The-dumb-house.jpg",
    title: "The Dumb House",
    price: 880.0,
  },
  {
    id: 124,
    dataName: "history",
    image: "BookGenre/History/The-secret-history-of-the-mongols.jpg",
    title: "Secret History of Mongols",
    price: 800.0,
  },
  {
    id: 125,
    dataName: "mystery",
    image: "BookGenre/Mystery/The-perfect-murder.jpg",
    title: "The Perfect Murder",
    price: 880.0,
  },
  {
    id: 126,
    dataName: "history",
    image: "BookGenre/History/The-first-world-war.jpg",
    title: "The First World War",
    price: 800.0,
  },
  {
    id: 127,
    dataName: "history",
    image: "BookGenre/History/The-second-world-war.jpg",
    title: "The Second World War",
    price: 800.0,
  },
  {
    id: 128,
    dataName: "truecrime",
    image: "BookGenre/True Crime/Under-the-banner-of-heaven.jpg",
    title: "Under the Banner of Heaven",
    price: 840.0,
  },
  {
    id: 129,
    dataName: "truecrime",
    image: "BookGenre/True Crime/Turn-a-blind-eye.jpg",
    title: "Turn a Blind Eye",
    price: 1260.0,
  },
  {
    id: 130,
    dataName: "truecrime",
    image: "BookGenre/True Crime/The-twist-of-knife.jpg",
    title: "The Twist of Knife",
    price: 1300.0,
  },
  {
    id: 131,
    dataName: "historyfi",
    image: "BookGenre/HistoryFi/Hamnet.jpg",
    title: "Hamnet",
    price: 800.0,
  },
  {
    id: 132,
    dataName: "truecrime",
    image: "BookGenre/True Crime/Lost-in-the-valley-of-death.jpg",
    title: "Lost in the Valley of Death",
    price: 640.0,
  },
  {
    id: 133,
    dataName: "truecrime",
    image: "BookGenre/True Crime/R.A.W-hitman.jpg",
    title: "R.A.W-hitman",
    price: 760.0,
  },
  {
    id: 134,
    dataName: "truecrime",
    image: "BookGenre/True Crime/Relentless-pursuit.jpg",
    title: "Relentless Pursuit",
    price: 420.0,
  },
  {
    id: 135,
    dataName: "historyfi",
    image: "BookGenre/HistoryFi/Lessons-in-chemistry.jpg",
    title: "Lessons in Chemistry",
    price: 880.0,
  },
  {
    id: 136,
    dataName: "truecrime",
    image: "BookGenre/True Crime/The-missing-crypto-queen.jpg",
    title: "The Missing Crypto Queen",
    price: 1280.0,
  },
  {
    id: 137,
    dataName: "truecrime",
    image: "BookGenre/True Crime/Killers-of-the-flower-moon.jpg",
    title: "Killers of the Flower Moon",
    price: 1440.0,
  },
];
//javascript to show stored books of genreBook cart
const genre = [
  ...new Set(
    genreBook.map((item) => {
      return item;
    })
  ),
];
let id = 18; //because id of first book is 18

// Assuming you have a container element with the class "filter-book-container" in your HTML
const genreBookContainer = document.querySelector(".filter-book-container");

// Function to create the HTML for a book card
function createBookCard(item) {
  const { id, dataName, image, title, price } = item;
  return `
    <div class="filter-book-card" data-name="${dataName}">
      <div class="book-img">
        <img src="${image}" alt="${title}">
      </div>
      <h4>${title}</h4>
      <p>Rs. ${price}</p>
      <button class="cart-btn" onclick="addGenreToCartById(${id})">Add to cart</button>
    </div>`;
}

// Loop through the genreBook array and append HTML to the container
genreBook.forEach((item) => {
  genreBookContainer.innerHTML += createBookCard(item);
});

const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(
  ".filter-book-container .filter-book-card"
);

//define the filterCArds function
const filterCards = (e) => {
  document.querySelector(".active-now").classList.remove("active-now");
  e.target.classList.add("active-now");

  //Iterate over each filterable card
  filterableCards.forEach((card) => {
    //adding hide class to hide the .filter-book-card instantly
    card.classList.add("hide");
    //Check if the .filter-book-card matches the selected button or "all books" is selected
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "allbooks"
    ) {
      card.classList.remove("hide");
    }
  });
};

//Add click event listener to everyy filter button
filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);
// //javascript to make Load More button functionable
// let loadMoreBtn = document.querySelector(".load-more-btn");
// let currentItem = 12;

// loadMoreBtn.onclick = () => {
//   let bookCardBox = [
//     ...document.querySelectorAll(
//       ".genre-container .filter-book-container .filter-book-card"
//     ),
//   ];
//   for (
//     var i = currentItem;
//     i < currentItem + 8 && i < bookCardBox.length;
//     i++
//   ) {
//     bookCardBox[i].style.display = "inline-block";
//   }
//   currentItem += 8;

//   console.log("currentItem:", currentItem);
//   console.log("bookCardBox.length:", bookCardBox.length);

//   //to make load more button not visible
//   if (currentItem >= bookCardBox.length || bookCardBox.length <= 12) {
//     loadMoreBtn.style.display = "none";
//   }
// };
