 // Menu items organised by cuisine
 const menuItems = {
    italian: [
        { name: "Pizza", price: 10.99, image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg" },
        { name: "Spaghetti Carbonara", price: 7.99, image: "https://images.pexels.com/photos/6223191/pexels-photo-6223191.jpeg" },
      { name: "Truffle risotto", price: 11.99, image: "https://images.pexels.com/photos/6406460/pexels-photo-6406460.jpeg" }
    ],
    indian: [
        { name: "Chikken Tikka Masala", price: 8.99, image: "https://images.pexels.com/photos/12737914/pexels-photo-12737914.jpeg" },
        { name: "Saag Aloo", price: 7.99, image: "https://images.pexels.com/photos/15014917/pexels-photo-15014917/free-photo-of-aloo-dum.jpeg" },
    ],
    chinese: [
        { name: "Egg fried rice", price: 4.99, image: "https://www.seriouseats.com/thmb/BJjCEDw9OZe95hpZxmNcD3rJnHo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230529-SEA-EggFriedRice-AmandaSuarez-hero-c8d95fbf69314b318bc279159f582882.jpg" },
        { name: "Chow mein", price: 6.99, image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chow-mein-c48a006.jpg" },
    ],
    mexican: [
        { name: "Burrito", price: 3.99, image: "https://cdn.britannica.com/13/234013-050-73781543/rice-and-chorizo-burrito.jpg" },
        { name: "Tacos", price: 4.99, image: "https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2021-09/carne-asada-tacos-recipe%C2%A9iStock.jpg" },
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