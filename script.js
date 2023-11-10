let toTop = document.getElementById("goToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    toTop.style.display = "grid";
  } else {
    toTop.style.display = "none";
  }
}
//Goes to top of the page when button is clicked
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// books that are shown in top picks
const book = [
  {
    id: 0,
    image: "BookImages/Meditations.png",
    title: "Meditations",
    price: 560.0,
  },
  {
    id: 1,
    image: "BookImages/Atomic-Habits.png",
    title: "Atomic Habits",
    price: 1280.0,
  },
  {
    id: 2,
    image: "BookImages/48-Laws-of-Power.png",
    title: "48 Laws of Power",
    price: 1280.0,
  },
  {
    id: 3,
    image: "BookImages/The-Psychology-of-Money.png",
    title: "The Psychology of Money",
    price: 480.0,
  },
  {
    id: 4,
    image: "BookImages/Cleopatra-and-Frankenstein.png",
    title: "Cleopatra and Frankenstein",
    price: 800.0,
  },
  {
    id: 5,
    image: "BookImages/12-Rules-for-Life.png",
    title: "12 Rules for Life",
    price: 960.0,
  },
  {
    id: 6,
    image: "BookImages/Elon-Musk.png",
    title: "Elon Musk",
    price: 2400.0,
  },
  {
    id: 7,
    image: "BookImages/Ikigai.png",
    title: "Ikigai",
    price: 880.0,
  },
  {
    id: 8,
    image: "BookImages/Crime-and-Punishment.png",
    title: "Crime and Punishment",
    price: 480.0,
  },
  {
    id: 9,
    image: "BookImages/Tomorrow-and-Tomorrow.png",
    title: "Tomorrow, and Tomorrow",
    price: 880.0,
  },
  {
    id: 10,
    image: "BookImages/Heaven.png",
    title: "Heaven",
    price: 880.0,
  },
  {
    id: 11,
    image: "BookImages/Metamorphosis.png",
    title: "Metamorphosis",
    price: 203.0,
  },
  {
    id: 12,
    image: "BookImages/The-Daily-Stoic.png",
    title: "The Daily Stoic",
    price: 960.0,
  },
  {
    id: 13,
    image: "BookImages/A-Little-Life.png",
    title: "A Little Life",
    price: 1120.0,
  },
  {
    id: 12,
    image: "BookImages/The-Stranger.png",
    title: "The Stranger",
    price: 800.0,
  },
];

//javascript to show the stored books in top picks
const categories = [
  ...new Set(
    book.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.querySelector(".book-container").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class="sub-container">
                  <div class="book-image">
                      <img src="${image}" alt="${title}">
                  </div>
                  <h2>${title}</h2>
                  <div class="book-price">Rs. ${price}</div>
                  <div class="cart">
                      ` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `
                  </div>
              </div>`
    );
  })
  .join("");

//javascript for making add to cart functional
var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

// Add an item to the cart and update localStorage
function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();

  // Store the updated cart in localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Remove an item from the cart and update localStorage
function delElement(a) {
  cart.splice(a, 1);
  displaycart();

  // Update the cart in localStorage after removing an item
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Display cart items and calculate the total
function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length === 0) {
    document.querySelector(".cart-product-list").innerHTML = `
      <div class="emptyCart" style="color:#2f2f2f; font-size: 30px;">
        Oops! Your cart is empty!
      </div>`;
    document.querySelector(".totalPrice").innerHTML = "Rs. 0.00";
  } else {
    document.querySelector(".cart-product-list").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.querySelector(".totalPrice").innerHTML =
          "Rs. " + total.toFixed(2); // Use toFixed to format the total
        return `
          <div class="cart-product-detail">
            <div class="cartBookImage">
              <img src="${image}" alt="${title}">
            </div>
            <div class="book-detail productitem">
              <div class="cartBookName">
                ${title}
              </div>
              <div class="cartBookPrice">
                <p>Rs. ${price.toFixed(2)}</p>
              </div>
            </div>
            <div class="remove-from-cart">
              <i class="fa-solid fa-trash" onclick="delElement(${j++})"></i>
            </div>
          </div>`;
      })
      .join("");
  }
}

// Initialize the cart array from localStorage when the page loads
const storedCart = localStorage.getItem("cart");
cart = storedCart ? JSON.parse(storedCart) : [];
displaycart();

// animation to show cart div when clicked on cart option in navbar
document.getElementById("showCart").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  var cartDiv = document.querySelector(".addToCart");
  var blackDiv = document.getElementById("blackScreen");
  cartDiv.style.right = "0"; // Slide in from the right
  blackDiv.style.display = "block";

  document.querySelector(".closeCart").addEventListener("click", function () {
    cartDiv.style.right = "-200%"; // Slide out to the right
    blackDiv.style.display = "none";
  });
});

// slider javascript starts
let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .listItem");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 7000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
window.onresize = function (event) {
  reloadSlider();
};
//slider javascript ends
