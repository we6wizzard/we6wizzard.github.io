
 // Menu items organised by cuisine
 const menuItems = {
    italian: [
        { name: "Lasagne", 
        price: 10.99, 
        image: "IMAGES/lasagne.webp"},
        
        
        { name: "Spaghetti Bolognaise", 
        price: 7.99, 
        image: "IMAGES/spaghetti-bolognese.jpeg" },
      
        { name: "Pasta", 
        price: 11.99, 
        image: "IMAGES/pizza.jpg" },
    ],
 };
    
    
    
    

// Initialise cart and total
const cart = [];
let total = 0;
let selectedCuisine = "";

//Function to display menu
function displayMenu() {
    const menu = document.getElementById("menu");
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

    const addRemoveButton = document.createElement("button");
    addRemoveButton.textContent = "Remove";
    addRemoveButton.onclick = () => addToCart(item.name, item.price, item.image);
    menuItem.removeChild(addRemoveButton);

    menu.removeChild(menuItem);
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
}
