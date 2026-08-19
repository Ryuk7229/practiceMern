// Services

var services = [
    {
        name: "Dry Cleaning",
        description: "Professional dry cleaning for clothes that need special care.",
        price: 200,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"
    },

    {
        name: "Ironing",
        description: "Get your clothes neatly pressed and ready to wear.",
        price: 100,
        image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=500"
    },

    {
        name: "Wedding Dress Cleaning",
        description: "Special cleaning service to carefully clean and protect wedding dresses.",
        price: 1000,
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500"
    },

    {
        name: "Wash and Fold",
        description: "Your clothes are washed, dried and neatly folded.",
        price: 300,
        image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500"
    },

    {
        name: "Stain Removal",
        description: "Remove tough stains and bring your clothes back to life.",
        price: 250,
        image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=500"
    }
];


// Current service number

var currentService = 0;


// Total price

var totalAmount = 0;


// Get elements

var serviceName = document.getElementById("service-name");
var serviceDescription = document.getElementById("service-description");
var servicePrice = document.getElementById("service-price");
var serviceImage = document.getElementById("service-image");

var cartItems = document.getElementById("cart-items");
var emptyMessage = document.getElementById("empty-message");

var total = document.getElementById("total");

var skipButton = document.getElementById("skip-button");
var addButton = document.getElementById("add-button");


// Show service

function showService() {

    var service = services[currentService];

    serviceName.innerText = service.name;

    serviceDescription.innerText = service.description;

    servicePrice.innerText = service.price;

    serviceImage.src = service.image;

}


// Show first service when page loads

showService();


// Skip button

skipButton.addEventListener("click", function () {

    currentService = currentService + 1;

    if (currentService >= services.length) {
        currentService = 0;
    }

    showService();

});


// Add button

addButton.addEventListener("click", function () {

    var service = services[currentService];


    // Remove empty message

    if (emptyMessage) {
        emptyMessage.style.display = "none";
    }


    // Create cart item

    var item = document.createElement("div");

    item.className = "cart-item";

    item.innerHTML =
        "<span>" + service.name + "</span>" +
        "<span>₹" + service.price + "</span>";


    // Add item to cart

    cartItems.appendChild(item);


    // Update total

    totalAmount = totalAmount + service.price;

    total.innerText = totalAmount;


    // Move to next service

    currentService = currentService + 1;

    if (currentService >= services.length) {
        currentService = 0;
    }

    showService();

});


// Add to Cart button

var addCartButton = document.getElementById("add-cart");

addCartButton.addEventListener("click", function () {

    if (totalAmount == 0) {

        alert("Please add a service first.");

    } else {

        alert("Services are added to your cart.");

    }

});


// Book Now button at bottom

var bookNowButton = document.getElementById("book-now");

bookNowButton.addEventListener("click", function () {

    if (totalAmount == 0) {

        alert("Please add a service first.");

    } else {

        alert("Please fill the booking form.");

    }

});


// Booking form

var bookButton = document.getElementById("book-button");

bookButton.addEventListener("click", function () {

    var name = document.getElementById("name").value;

    var email = document.getElementById("email").value;

    var password = document.getElementById("password").value;


    if (name == "" || email == "" || password == "") {

        alert("Please fill all the fields.");

        return;
    }


    if (totalAmount == 0) {

        alert("Please add a service first.");

        return;
    }


    // Booking successful

    alert(
        "Booking successful!\n" +
        "Name: " + name + "\n" +
        "Total: ₹" + totalAmount
    );


    // Reset everything

    totalAmount = 0;

    total.innerText = 0;


    cartItems.innerHTML =
        '<p id="empty-message">No items have been added yet.</p>';


    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("password").value = "";


    // Go back to first service

    currentService = 0;

    showService();

});


// Logout

var logoutButton = document.querySelector(".logout");

logoutButton.addEventListener("click", function () {

    alert("You have been logged out.");

});