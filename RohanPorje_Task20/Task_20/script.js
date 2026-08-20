
const EMAILJS_PUBLIC_KEY = "dVYAtVneVtplo-e6e";
const EMAILJS_SERVICE_ID = "service_xr32gyr";
const EMAILJS_TEMPLATE_ID = "template_dmsmj9k";

if (typeof emailjs !== "undefined") {
  emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY
  });
}


const services = [
  {
    id: 1,
    name: "Wash & Fold",
    price: 150
  },
  {
    id: 2,
    name: "Dry Cleaning",
    price: 250
  },
  {
    id: 3,
    name: "Ironing",
    price: 100
  },
  {
    id: 4,
    name: "Premium Wash",
    price: 300
  },
  {
    id: 5,
    name: "Shoe Cleaning",
    price: 200
  }
];

let cart = [];


const serviceContainer = document.getElementById("serviceContainer");

function displayServices() {
  serviceContainer.innerHTML = "";

  services.forEach(function(service) {
    const serviceCard = document.createElement("div");
    serviceCard.className = "service-card";

    serviceCard.innerHTML = `
      <div>
        <h3>${service.name}</h3>
        <p>Professional care for your clothes and belongings.</p>
        <div class="service-price">₹${service.price}</div>
      </div>

      <div class="service-buttons">
        <button onclick="removeItem(${service.id})">Remove Now</button>
        <button class="add-btn" onclick="addItem(${service.id})">Add Items</button>
      </div>
    `;

    serviceContainer.appendChild(serviceCard);
  });
}


function addItem(id) {
  const selectedService = services.find(function(service) {
    return service.id === id;
  });

  if (selectedService) {
    cart.push(selectedService);
    updateCart();
  }
}


function removeItem(id) {
  const itemIndex = cart.findIndex(function(item) {
    return item.id === id;
  });

  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
    updateCart();
  }
}


function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const totalAmount = document.getElementById("totalAmount");

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">No items added yet.</p>';
    totalAmount.textContent = "0";
    return;
  }

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(function(item) {
    total += item.price;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <span>${item.name}</span>
      <span>₹${item.price}</span>
    `;

    cartItems.appendChild(cartItem);
  });

  totalAmount.textContent = total;
}


document.getElementById("heroBookBtn").addEventListener("click", function() {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth"
  });
});


document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("bookingMessage");

  if (cart.length === 0) {
    message.style.color = "#d92d20";
    message.textContent = "Please add at least one service to your cart.";
    return;
  }

  let total = 0;
  let orderItems = "";

  cart.forEach(function(item) {
    total += item.price;
    orderItems += item.name + " - ₹" + item.price + "\n";
  });

  const templateParams = {
    customer_name: fullName,
    customer_email: email,
    customer_phone: phone,
    order_items: orderItems,
    total_amount: "₹" + total
  };


  if (
    EMAILJS_PUBLIC_KEY === "dVYAtVneVtplo-e6e" ||
    EMAILJS_SERVICE_ID === "service_xr32gyr" ||
    EMAILJS_TEMPLATE_ID === "template_dmsmj9k"
  ) {
    message.style.color = "#d92d20";
    message.textContent = "Booking works, but EmailJS is not configured yet. Add your EmailJS keys in script.js.";
    return;
  }

  message.style.color = "#667085";
  message.textContent = "Sending your booking...";

  emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams
  )
  .then(function() {
    message.style.color = "#18864b";
    message.textContent =
      "Thank you For Booking the Service We will get back to you soon!";

    document.getElementById("bookingForm").reset();

    cart = [];
    updateCart();
  })
  .catch(function(error) {
    console.error("EmailJS error:", error);

    message.style.color = "#d92d20";
    message.textContent =
      "Something went wrong while sending your booking. Please try again.";
  });
});

document.getElementById("newsletterForm").addEventListener("submit", function(event) {
  event.preventDefault();

  alert("Thank you for subscribing to our newsletter!");
  this.reset();
});


document.getElementById("menuBtn").addEventListener("click", function() {
  document.querySelector(".nav-links").classList.toggle("show");
});


displayServices();
updateCart();
