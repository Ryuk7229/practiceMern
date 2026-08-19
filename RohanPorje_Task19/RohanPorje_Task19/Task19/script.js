// list of services (dummy data with placeholder images)
const services = [
  { name: "Dry Cleaning", price: 200, image: "Images/Dry Cleaning.png" },
  { name: "Leather & Suede Cleaning", price: 999, image: "Images/Leather.png" },
  { name: "Ironing", price: 30, image: "Images/Ironing.png" },
  { name: "Wedding Dress Cleaning", price: 2400, image: "Images/Wedding.png" },
  { name: "Wash and Fold", price: 140, image: "Images/wash.png" },
  { name: "Stain Removal", price: 500, image: "Images/Stain.png" },
];


let currentIndex = 0;


let cartItems = [];


let total = 0;


const serviceImage = document.getElementById("serviceImage");
const serviceName = document.getElementById("serviceName");
const servicePrice = document.getElementById("servicePrice");
const skipBtn = document.getElementById("skipBtn");
const addBtn = document.getElementById("addBtn");

const cartTableBody = document.getElementById("cartTableBody");
const emptyState = document.getElementById("emptyState");
const totalAmount = document.getElementById("totalAmount");

const bookingForm = document.getElementById("bookingForm");
const bookNowBtn = document.getElementById("bookNowBtn");
const logoutBtn = document.getElementById("logoutBtn");
const thankYouMsg = document.getElementById("thankYouMsg");

// function to show whichever service is at currentIndex
function showCurrentService() {
  // if we ran out of services, just show the first one again
  if (currentIndex >= services.length) {
    currentIndex = 0;
  }

  const service = services[currentIndex];

  serviceImage.src = service.image;
  serviceName.innerHTML = service.name;
  servicePrice.innerHTML = "&#8377;" + service.price.toFixed(2);
}

// function to update the cart table and total
function updateCart() {
  if (cartItems.length === 0) {
    emptyState.style.display = "block";
    cartTableBody.innerHTML = "";
  } else {
    emptyState.style.display = "none";
    cartTableBody.innerHTML = "";

    for (let i = 0; i < cartItems.length; i++) {
      const row = document.createElement("tr");
      row.innerHTML =
        "<td>" + (i + 1) + "</td>" +
        "<td>" + cartItems[i].name + "</td>" +
        "<td>&#8377;" + cartItems[i].price.toFixed(2) + "</td>";
      cartTableBody.appendChild(row);
    }
  }

  totalAmount.innerHTML = total.toFixed(2);

  // enable the Book now button only if there is something in the cart
  if (cartItems.length === 0) {
    bookNowBtn.disabled = true;
  } else {
    bookNowBtn.disabled = false;
  }
}

// when skip button is clicked, just move to next service
skipBtn.addEventListener("click", function () {
  currentIndex = currentIndex + 1;
  showCurrentService();
});

// when add button is clicked, add current service to cart and move to next
addBtn.addEventListener("click", function () {
  const service = services[currentIndex];

  cartItems.push(service);
  total = total + service.price;
  updateCart();

  currentIndex = currentIndex + 1;
  showCurrentService();
});

// when the booking form is submitted
bookingForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from refreshing

  // show the thank you message below the button
  thankYouMsg.style.display = "block";

  // reset everything back to start
  cartItems = [];
  total = 0;
  currentIndex = 0;
  updateCart();
  showCurrentService();
  bookingForm.reset();

  // hide the message again after a few seconds
  setTimeout(function () {
    thankYouMsg.style.display = "none";
  }, 4000);
});

// logout button just shows an alert for now
logoutBtn.addEventListener("click", function () {
  alert("You have been logged out.");
});

// run these when the page first loads
showCurrentService();
updateCart();