//Menu Items Organized by Cuisine

const menuItems = {
    pizza: [
        { name: "Mighty Meaty",
          price: 10.99,
          image: "IMAGES/spag.jpg"},

        { name: "Cheese and Tomato",
          price: 7.99,
          image: "IMAGES/cheese-and-tomato-pizza.jpeg"},

        { name: "Pepperoni Passion",
          price: 8.00,
          image: "IMAGES/pepperoni-pizza.jpg"},



        
    ],
};












//Initialise Cart and Total
const cart = [];
let total = 0;
let selectedCuisine = "";

//Function to Display Menu
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

// Function to Change the Displayed Cuisine
function changeCuisine() {
    selectedCuisine = document.getElementById("cuisine-select").value;
    displayMenu();
    updateCart();
}

// Function to Add Items to the Cart
function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateCart();

}









// Function to Update the Cart Display
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


//function to Remove Items from the Cart 
function removeFromCart() {
const menu = document.getElementById("menu");
    menu.innerHTML = "";
    menuItems[selectedCuisine].forEach(item => {
        const menuItem = document.createElement("remove");
        menuItem.classList.remove("menu-item");

        const itemImage = document.removeChild("img");
        itemImage.src = item.image;
        menuItem.removeChild(itemImage);

        const itemName = document.removeChild("span");
        itemName.textContent = `${item.name} - £${item.price.toFixed(2)}`;
        menuItem.removeChild(itemName);

        const addRemoveButton = document.createElement("remove");
        addRemoveButton.textContent = "Remove";
        addRemoveButton.onclick = () => removeFromCart(item.name, item.price, item.image);
        menuItem.removeChild(addItemButton);

        menu.removeChild(menuItem);
    });

        

}




// Function to Simulate Checkout
function checkout() {
    alert("Thank You for Your Order! Total: £${total.toFixed(2)}");
    cart.length = 0; //Clear the Cart
    total = 0; //Rest the Total
    updateCart(); //Update the Cart Display
}

// Initialise the Menu and Cart When the Page Loads
window.onload = () => {
    displayMenu();
    updateCart();
}
















    
    