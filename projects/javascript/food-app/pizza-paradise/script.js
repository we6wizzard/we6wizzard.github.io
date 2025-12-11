<<<<<<< HEAD
// Menu items organised by categories
const menuItems = {
    sides: [
        {name: "Strippers and Fries Combo", 
        price: 10.99, 
        image: "../javascript/images/chicken-and-fries-combo.jpg" },
        
        
        {name: "Loaded Fries", 
        price: 7.99, 
        image: "../javascript/images/loaded-fries.jpg" },
      
      
        {name: "Garlic Bread", 
        price: 11.99, 
        image: "../javascript/images/garlic-bread.jpg" },


        {name: "Cheesy Garlic Bread",
        price: 11.99,
        image: "../javascript/images/cheesy-garlic-bread.webp"},

        {name: "Chicken Goujouns",
         price: 9.99,
         image: "../javascript/images/chicken-goujouns.jpg"},

         {name: "Fries",
         price: 9.99,
         image: "../javascript/images/fries.jpg"},

         {name: "Chicken Wings",
         price: 9.99,
         image: "../javascript/images/chicken-wings.jpg"}
    ],



    pizzas: [

        {name: "Pepperoni Passion",
        price: 11.99,
        image: "Images(Pizza Paradise + CFG Hunger Hub Project)/pepperoni_pizza.jpg"},

        {name: "Cheese and Tomato",
        price: 8.90,
        image: "Images(Pizza Paradise + CFG Hunger Hub Project)/ "},

        {name: "Texas BBQ",
        price: 7.00,
        image: "../javascript/images/texas-bbq.jpg"},

        {name: "Plant-Based Vegi Supreme",
        price: 6.00,
        image: "../javascript/images/vegi-supreme.jpg"},

        {name: "Hawaiian Pizza",
         price: 8.90,
         image: "../javascript/images/hawaiian-pizza.jpg"},

         {name: "Garlic Bread Pizza",
          price: 7.75,
          image: "../javascript/images/garlic-bread-pizza.jpg"}
    ],

    drinks: [
         
        {name: "Coke",
         price: 3.99,
         image: "../javascript/images/coke.webp"},

        {name: "Fanta",
        price: 2.50,
        image: "../javascript/images/fanta.jpg"},
    ]
}; 

//initialise cart and total
const cart= [];
let total = 0;
let selectedCuisine = "";

//function to display menu

function displayMenu () {
    const menu = document.getElementById("menu");  //
    menu.innerHTML = "";
    menuItems[selectedCuisine].forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        menuItem.appendChild(itemImage);

        const itemName = document.createElement("span");
        itemName.textContent = `${item.name} - £${item.price.toFixed(2)}`;
        menuItem.appendChild(itemName);

        const addItemButton = document.createElement("button");
        addItemButton.textContent = "Add to Cart";
        addItemButton.onclick = () => addToCart(item.name, item.price);
        menuItem.appendChild(addItemButton);

        menu.appendChild(menuItem);
    });
}

// Function to change the displayed cuisine
function changeCuisine() {
    selectedCuisine = document.getElementById("cuisine-select").value;
    displayMenu();
    updateCart();
}



// Function to add items to the cart
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${item.name} - £${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
    });
    const cartTotal = document.getElementById("cart-total");
    cartTotal.textContent = total.toFixed(2);
}

// Function to simulate checkout
function checkout() {
    alert(`Thank you for your order! Total: £${total.toFixed(2)}`);
    cart.length = 0; // Clear the cart
    total = 0; // Reset the total
    updateCart(); // Update the cart display
}

// Initialise the menu and cart when the page loads
window.onload = () => {
    displayMenu();
    updateCart();
};

// Menu items organised by categories
