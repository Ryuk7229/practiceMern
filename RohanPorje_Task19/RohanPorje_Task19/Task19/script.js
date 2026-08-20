

var serviceNames = [
    "Dry Cleaning",
    "Ironing",
    "Wedding Dress Cleaning",
    "Wash and Fold",
    "Stain Removal",
    "Leather & Suede Cleaning"
];



var servicePrices = [
    200,
    100,
    1000,
    300,
    250,
    700
];




var serviceImages = [
    "Images/Dry Cleaning.png",
    "Images/Ironing.png",
    "Images/Wedding.png",
    "Images/wash.png",
    "Images/Stain.png",
    "Images/Leather.png"
];




var currentService = 0;

var totalAmount = 0;




var serviceImage = document.getElementById("serviceImage");

var serviceName = document.getElementById("serviceName");

var servicePrice = document.getElementById("servicePrice");

var cart = document.getElementById("cart");

var total = document.getElementById("total");

var empty = document.getElementById("empty");




function showService() {

    serviceName.innerText = serviceNames[currentService];



    servicePrice.innerText =
        servicePrices[currentService];

    serviceImage.src =
        serviceImages[currentService];
}




showService();




function nextService() {

    currentService = currentService + 1;

    if (currentService >= serviceNames.length) {
        currentService = 0;
    }

    showService();
}



var skipButton = document.getElementById("skipButton");

skipButton.addEventListener("click", function () {

    nextService();

});




var addButton = document.getElementById("addButton");

addButton.addEventListener("click", function () {


    empty.style.display = "none";



    var newItem = document.createElement("div");

    newItem.className = "cartItem";



    var nameText = document.createElement("span");

    nameText.innerText =
        serviceNames[currentService];



    var priceText = document.createElement("span");

    priceText.innerText =
        "₹" + servicePrices[currentService];




    var removeButton = document.createElement("button");

    removeButton.innerText = "Remove";

    removeButton.className = "removeButton";



    newItem.appendChild(nameText);

    newItem.appendChild(priceText);

    newItem.appendChild(removeButton);


 

    cart.appendChild(newItem);



    totalAmount =
        totalAmount + servicePrices[currentService];

    total.innerText = totalAmount;



    removeButton.addEventListener("click", function () {

        newItem.remove();

        totalAmount =
            totalAmount - servicePrices[currentService];

        total.innerText = totalAmount;


        if (cart.querySelector(".cartItem") == null) {
            empty.style.display = "block";
        }

    });

    nextService();

});






var bookingButton =
    document.getElementById("bookingButton");

bookingButton.addEventListener("click", function () {

    var name =
        document.getElementById("name").value;

    var email =
        document.getElementById("email").value;

    var password =
        document.getElementById("password").value;




    if (name == "") {

        alert("Please enter your name.");

        return;
    }

    if (email == "") {

        alert("Please enter your email.");

        return;
    }

    if (password == "") {

        alert("Please enter your password.");

        return;
    }

    if (totalAmount == 0) {

        alert("Please add a service.");

        return;
    }




    alert(
        "Booking successful!\n" +
        "Thank You for contacting, we will get back to you soon."
    );




    totalAmount = 0;

    total.innerText = 0;



    cart.innerHTML =
        '<p id="empty">No items have been added yet.</p>';

    empty =
        document.getElementById("empty");



    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("password").value = "";



    currentService = 0;

    showService();

});



var logout =
    document.getElementById("logout");

logout.addEventListener("click", function () {

    alert("You have been logged out.");

});