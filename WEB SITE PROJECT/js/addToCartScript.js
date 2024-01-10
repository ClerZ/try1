// Your JavaScript code

const itemDetails = {
  //New Flavours
  'Avocado': {
    '16 oz': { price: 100, image: '../images/newflavors/Avocado.png' },
    '22 oz': { price: 120, image: '../images/newflavors/Avocado.png' }
  },

  'Honey Dew': {
    '16 oz': { price: 100, image: '../images/newflavors/Honeydew.png' },
    '22 oz': { price: 120, image: '../images/newflavors/Honeydew.png' }
  },

  'Espresso': {
    '16 oz': { price: 99, image: '../images/newflavors/Espresso.png' },
    '22 oz': { price: 120, image: '../images/newflavors/Espresso.png' }
  },

  'Caramel Machito': {
    '16 oz': { price: 99, image: '../images/newflavors/Caramel-Machiato.png' },
    '22 oz': { price: 120, image: '../images/newflavors/Caramel-Machiato.png' }
  },

  'Black Jungle': {
    '16 oz': { price: 100, image: '../images/newflavors/Black-Jungle.png' },
    '22 oz': { price: 120, image: '../images/newflavors/Black-Jungle.png' }
  },

  'Nuttella Cream': {
    '16 oz': { price: 100, image: '../images/newflavors/Nutella-Cream.png' },
    '22 oz': { price: 120, image: '../images/newflavors/Nutella-Cream.png' }
  },

  'Cashew White': {
    '16 oz': { price: 99, image: '../images/newflavors/Cashew-White.png' },
    '22 oz': { price: 120, image: '../images/newflavors/Cashew-White.png' }
  },

  'Coffee Cake': {
    '16 oz': { price: 99, image: '../images/newflavors/Coffee-Cake.png' },
    '22 oz': { price: 120, image: '../images/newflavors/Coffee-Cake.png' }
  },

  'Meiji Apollo': {
    '16 oz': { price: 99, image: '../images/newflavors/Meiji-Apollo.png' },
    '22 oz': { price: 120, image: '../images/newflavors/Meiji-Apollo.png' }
  },



    //Frappe Series
    'Mango Graham': {
      '16 oz': { price: 99, image: '../images/frappe/3.jpg' },
      '22 oz': { price: 120, image: '../images/frappe/3.jpg' }
    },
  
    'Strawberry': {
      '16 oz': { price: 99, image: '../images/frappe/6.jpg' },
      '22 oz': { price: 120, image: '../images/frappe/6.jpg' }
    },
  
    'Ube Quezo': {
      '16 oz': { price: 99, image: '../images/frappe/8.jpg' },
      '22 oz': { price: 120, image: '../images/frappe/8.jpg' }
    },
  
    'Coffee Jelly': {
      '16 oz': { price: 99, image: '../images/frappe/1.jpg' },
      '22 oz': { price: 120, image: '../images/frappe/1.jpg' }
    },
  
    'Salted Caramel': {
      '16 oz': { price: 99, image: '../images/frappe/7.jpg' },
      '22 oz': { price: 120, image: '../images/frappe/7.jpg' }
    },
  
    'Ferrero Almond': {
      '16 oz': { price: 99, image: '../images/frappe/4.jpg' },
      '22 oz': { price: 120, image: '../images/frappe/4.jpg' }
    },
  
    'Blueberry': {
      '16 oz': { price: 99, image: '../images/frappe/2.jpg' },
      '22 oz': { price: 120, image: '../images/frappe/2.jpg' }
    },
  
    'Oreo Flurry': {
      '16 oz': { price: 99, image: '../images/frappe/5.jpg' },
      '22 oz': { price: 120, image: '../images/frappe/5.jpg' }
    },

  //Lemonade Series
   'Lemon Yakult Cucumber': {
    '16 oz': { price: 59, image: '../images/lemonade/Lemon-yakult-cucumber.png' },
    '22 oz': { price: 69, image: '../images/lemonade/Lemon-yakult-cucumber.png' }
  },

  'Lemon Yakult': {
    '16 oz': { price: 65, image: '../images/lemonade/Lemon-yakult.png' },
    '22 oz': { price: 75, image: '../images/lemonade/Lemon-yakult.png' }
  },

  'Lemon Cucumber': {
    '16 oz': { price: 55, image: '../images/lemonade/Lemon-cucumber.png' },
    '22 oz': { price: 65, image: '../images/lemonade/Lemon-cucumber.png' }
  },

  //Oero Series
  'Oreo Cheesecake': {
    '16 oz': { price: 100, image: '../images/oreo/oreo-CheeseCake.jpg' },
    '22 oz': { price: 139, image: '../images/oreo/oreo-CheeseCake.jpg' }
  },

  'Oreo MilkCake': {
    '16 oz': { price: 100, image: '../images/oreoOreo-MilkCake.jpg' },
    '22 oz': { price: 139, image: '../images/oreo/Oreo-MilkCake.jpg' }
  },

  'Oreo Cookie Crumble': {
    '16 oz': { price: 100, image: '../images/oreo/Oreo-Cookie-Crumble.jpg' },
    '22 oz': { price: 139, image: '../images/oreo/Oreo-Cookie-Crumble.jpg' }
  },  

  'Oreo Strawberry': {
    '16 oz': { price: 100, image: '../images/oreo/Oreo-Strawberry.jpg' },
    '22 oz': { price: 139, image: '../images/oreo/Oreo-Strawberry.jpg' }
  },  

  //Creamcheese Series
  'Cheese Cake': {
    '16 oz': { price: 105, image: '../images/creamcheese/Cheesecake-Creamcheese.png' },
    '22 oz': { price: 115, image: '../images/creamcheese/Cheesecake-Creamcheese.png' }
  },

  'Matcha': {
    '16 oz': { price: 109, image: '../images/creamcheese/Matcha-Creamcheese.png' },
    '22 oz': { price: 119, image: '../images/creamcheese/Matcha-Creamcheese.png' }
  },

  'Cheesy Mango': {
    '16 oz': { price: 105, image: '../images/creamcheese/Cheesy-Mango-Creamcheese.png' },
    '22 oz': { price: 115, image: '../images/creamcheese/Cheesy-Mango-Creamcheese.png' }
  },

  'Caramel': {
    '16 oz': { price: 105, image: '../images/creamcheese/Salted-Caramel-Creamcheese.png' },
    '22 oz': { price: 115, image: '../images/creamcheese/Salted-Caramel-Creamcheese.png' }
  },

  'Ube Taro': {
    '16 oz': { price: 105, image: '../images/creamcheese/Ube-Taro-Creamcheese.png' },
    '22 oz': { price: 115, image: '../images/creamcheese/Ube-Taro-Creamcheese.png' }
  },

  'Berry': {
    '16 oz': { price: 109, image: '../images/creamcheese/Strawberry-Creamcheese.png' },
    '22 oz': { price: 119, image: '../images/creamcheese/Strawberry-Creamcheese.png' }
  },

  'Chucky': {
    '16 oz': { price: 109, image: '../images/creamcheese/Chucky-Creamcheese.png' },
    '22 oz': { price: 119, image: '../images/creamcheese/Chucky-Creamcheese.png' }
  },

  'Red Velvet': {
    '16 oz': { price: 109, image: '../images/creamcheese/Red-Velvet-Creamcheese.png' },
    '22 oz': { price: 119, image: '../images/creamcheese/Red-Velvet-Creamcheese.png' }
  },

  'Melona': {
    '16 oz': { price: 105, image: '../images/creamcheese/Melona-Creamcheese.png' },
    '22 oz': { price: 115, image: '../images/creamcheese/Melona-Creamcheese.png' }
  },

  'Hershey Cremecheese': {
    '16 oz': { price: 109, image: '../images/creamcheese/Hersheys-Chocolate-Creamcheese.png' },
    '22 oz': { price: 119, image: '../images/creamcheese/Hersheys-Chocolate-Creamcheese.png' }
  },   

  'Dark-Chocolate': {
    '16 oz': { price: 109, image: '../images/creamcheese/Dark-Chocolate-Creamcheese.png' },
    '22 oz': { price: 119, image: '../images/creamcheese/Dark-Chocolate-Creamcheese.png' }
  },

  'Chocolate': {
    '16 oz': { price: 109, image: '../images/creamcheese/Chocolate-Creamcheese.png' },
    '22 oz': { price: 119, image: '../images/creamcheese/Chocolate-Creamcheese.png' }
  },  

  //CLASSIC MILKTEA
  'Wintermellon': {
    '16 oz': { price: 85, image: '../images/classics/wintermelon.png' },
    '22 oz': { price: 95, image: '../images/classics/wintermelon.png' }
  },

  'Okinawa': {
    '16 oz': { price: 85, image: '../images/classics/okinawa.png' },
    '22 oz': { price: 95, image: '../images/classics/okinawa.png' }
  },

  'Cheesecake': {
    '16 oz': { price: 85, image: '../images/classics/cheesecake.png' },
    '22 oz': { price: 95, image: '../images/classics/cheesecake.png' }
  },

  'Cookies n Cream': {
    '16 oz': { price: 79, image: '../images/classics/cookiesNcream.png' },
    '22 oz': { price: 89, image: '../images/classics/cookiesNcream.png' }
  },

  'Hokkaido': {
    '16 oz': { price: 85, image: '../images/classics/hokkaido.png' },
    '22 oz': { price: 95, image: '../images/classics/hokkaido.png' }
  },

  'Vanilla': {
    '16 oz': { price: 79, image: '../images/classics/vanilla.png' },
    '22 oz': { price: 99, image: '../images/classics/vanilla.png' }
  },

  'Caramel Salted': {
    '16 oz': { price: 79, image: '../images/classics/saltedCaramel.png' },
    '22 oz': { price: 89, image: '../images/classics/saltedCaramel.png' }
  },

  'Thai': {
    '16 oz': { price: 79, image: '../images/classics/thai.png' },
    '22 oz': { price: 89, image: '../images/classics/thai.png' }
  },

  'White Rabbit': {
    '16 oz': { price: 79, image: '../images/classics/whiteRabbit.png' },
    '22 oz': { price: 89, image: '../images/classics/whiteRabbit.png' }
  },

  'Oreo Cremecheese': {
    '16 oz': { price: 79, image: '../images/classics/whiteRabbit.png' },
    '22 oz': { price: 89, image: '../images/classics/whiteRabbit.png' }
  },

  //Chocolate Miktea

  'Choco': {
    '16 oz': { price: 85, image: '../images/chocolate/chocolate.png' },
    '22 oz': { price: 95, image: '../images/chocolate/chocolate.png' }
  },

  'Dark Choco': {
    '16 oz': { price: 85, image: '../images/chocolate/Dark-Chocolate.png' },
    '22 oz': { price: 95, image: '../images/chocolate/Dark-Chocolate.png' }
  },

  'Hersheys': {
    '16 oz': { price: 85, image: '../images/chocolate/Hershey-Chocolate.png' },
    '22 oz': { price: 95, image: '../images/chocolate/Hershey-Chocolate.png' }
  },  
  

  
  
};

function calculateTotalPrice(flavor, size, quantity) {
  return itemDetails[flavor][size].price * quantity;
}

function addToCart(flavor, size) {
  const cartItemsContainer = document.getElementById('cartItems');
  const existingCartItem = findCartItem(flavor, size);

  if (existingCartItem) {
    updateQuantity(existingCartItem, 1);
    console.log("After updateQuantity:", existingCartItem.quantity);
} else {
    const cartItem = createCartItem(flavor, size, 1);
    cartItemsContainer.appendChild(cartItem);
}

  saveCartToLocalStorage();
  updateTotalAmount();
}

function findCartItem(flavor, size) {
  const cartItems = document.querySelectorAll('.cart-item');
  for (const cartItem of cartItems) {
    const itemFlavor = cartItem.dataset.flavor;
    const itemSize = cartItem.dataset.size;

    if (itemFlavor === flavor && itemSize === size) {
      return cartItem;
    }
  }
  return null;
}

function createCartItem(flavor, size, quantity) {
  const cartItemContainer = document.createElement('div');
  cartItemContainer.className = 'cart-item-container';

  const cartItem = document.createElement('div');
  cartItem.className = 'cart-item';
  cartItem.dataset.itemId = generateItemId();
  cartItem.dataset.flavor = flavor;
  cartItem.dataset.size = size; // Save the size property
  cartItem.quantity = quantity;

  const totalPrice = calculateTotalPrice(flavor, size, quantity);

  const flavorImage = document.createElement('img');
  flavorImage.src = itemDetails[flavor][size].image;
  flavorImage.alt = flavor;
  flavorImage.className = 'cart-item-image';

  const cartItemText = document.createElement('div');
  cartItemText.className = 'cart-item-text';
  cartItemText.innerHTML = `<br>${flavor}<br> ${size}`;

  const priceText = document.createElement('p');
  priceText.className = 'cart-item-price';
  priceText.textContent = `₱${totalPrice.toFixed(2)}`;

  const quantityContainer = document.createElement('div');
  quantityContainer.className = 'quantity-container';
  quantityContainer.style.position = 'relative';

  const minusButton = document.createElement('span');
  minusButton.className = 'quantity-button1';
  minusButton.textContent = '-';
  minusButton.style.fontSize = "1vw";
  minusButton.style.border = '.15vw solid #15154E';
  minusButton.style.width = '.8vw'; 
  minusButton.style.height = '.8vw'; 
  minusButton.style.display = 'flex'; 
  minusButton.style.position = "absolute";
  minusButton.style.justifyContent = 'center'; 
  minusButton.style.alignItems = 'center'; 
  minusButton.style.marginLeft = '0vw';
  minusButton.style.marginTop = '.1.8vw';  
  minusButton.style.paddingTop = '.35vw';
  minusButton.style.paddingBottom = '.38vw';
  minusButton.style.cursor = 'pointer'; // Add this line
  minusButton.addEventListener('click', function () {
    updateQuantity(cartItem, -1);
  });
  
  const plusButton = document.createElement('span');
  plusButton.className = 'quantity-button2';
  plusButton.textContent = '+';
  plusButton.style.fontSize = "1vw";
  plusButton.style.border = '.15vw solid #15154E';
  plusButton.style.width = '.8vw'; 
  plusButton.style.height = '.8vw'; 
  plusButton.style.display = 'flex'; 
  plusButton.style.position = "absolute";
  plusButton.style.justifyContent = 'center';
  plusButton.style.alignItems = 'center'; 
  plusButton.style.marginLeft = '3vw';
  plusButton.style.marginTop = '.1.8vw';  
  plusButton.style.paddingTop = '.35vw';
  plusButton.style.paddingBottom = '.38vw';
  plusButton.style.cursor = 'pointer'; // Add this line
  plusButton.addEventListener('click', function () {
    updateQuantity(cartItem, 1);
  });
  

  const quantityText = document.createTextNode(`${quantity}`);

  const quantityTextbox = document.createElement('input');
  quantityTextbox.type = 'text';
  quantityTextbox.className = 'quantity-textbox';
  quantityTextbox.value = quantity;

  quantityContainer.appendChild(minusButton);
  quantityContainer.appendChild(quantityTextbox);  // Add the quantity textbox
  quantityContainer.appendChild(plusButton);
  

  const deleteButton = document.createElement('span');
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    deleteCartItem(cartItem);
  });

  cartItem.appendChild(flavorImage);
  cartItem.appendChild(cartItemText);
  cartItem.appendChild(priceText); // Add the price to cartItem
  cartItem.appendChild(quantityContainer);
  cartItem.appendChild(deleteButton);

  cartItemContainer.appendChild(cartItem);

  return cartItemContainer;
}


function generateItemId() {
  return `cart-item-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function updateQuantity(cartItem, change) {
  const newQuantity = cartItem.quantity + change;

  if (newQuantity <= 0 || isNaN(newQuantity)) {
    deleteCartItem(cartItem);
  } else {
    cartItem.quantity = newQuantity;
    updateCartItem(cartItem);
    updateTotalAmount();
    saveCartToLocalStorage();
  }

  const flavor = cartItem.dataset.flavor;
  const size = cartItem.dataset.size;
  const quantity = cartItem.quantity;

  // Select the quantity container, cart item text, and price text
  const quantityContainer = cartItem.querySelector('.quantity-container');
  const cartItemText = cartItem.querySelector('.cart-item-text');
  const priceText = cartItem.querySelector('.cart-item-price');

  // Update the quantity and price in the cart item text
  cartItemText.innerHTML = `<br>${flavor}<br>${size}<br>`;
  priceText.textContent = `₱${calculateTotalPrice(flavor, size, quantity).toFixed(2)}`;

  // Update the value of the quantity input
  const quantityTextbox = quantityContainer.querySelector('.quantity-textbox');
  console.log(quantityTextbox); // Add this line
  quantityTextbox.value = quantity;
}

function deleteCartItem(cartItem) {
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.removeChild(cartItem.parentNode);
  updateTotalAmount();
  saveCartToLocalStorage();
}

//CLERWIN
// Update the saveCartToLocalStorage function to include the total amount
function saveCartToLocalStorage() {
  const cartItems = document.querySelectorAll('.cart-item');
  const cartData = [];
  let totalAmount = 0;

  cartItems.forEach(cartItem => {
    const itemId = cartItem.dataset.itemId;
    const flavor = cartItem.dataset.flavor;
    const size = cartItem.dataset.size;
    const quantity = cartItem.quantity;

    totalAmount += calculateTotalPrice(flavor, size, quantity);

    cartData.push({ itemId, flavor, size, quantity });
  });

  const cartAndTotal = { cartData, totalAmount };
  localStorage.setItem('cart', JSON.stringify(cartAndTotal));
}

function loadCartFromLocalStorage() {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartDataJSON = localStorage.getItem('cart');
  const cartAndTotal = JSON.parse(cartDataJSON) || { cartData: [], totalAmount: 0 };

  cartItemsContainer.innerHTML = '';

  // Create a function to handle item loading and return a Promise
  function loadItem(item) {
    return new Promise(resolve => {
      const { itemId, flavor, size, quantity } = item;
      const cartItem = createCartItem(flavor, size, quantity);

      const img = cartItem.querySelector('.cart-item-image');

      // Use the onload event to resolve the Promise
      img.onload = () => resolve();

      // Trigger the onload event in case the image is already cached
      if (img.complete) {
        img.onload();
      }

      cartItem.dataset.itemId = itemId;
      cartItemsContainer.appendChild(cartItem);
      updateCartItem(cartItem);
    });
  }

  // Create an array of Promises for each item
  const itemPromises = cartAndTotal.cartData.map(loadItem);

  // Wait for all Promises to resolve before updating total amount and saving to local storage
  Promise.all(itemPromises).then(() => {
    updateTotalAmount(cartAndTotal.totalAmount);
    saveCartToLocalStorage();
  });
}


function updateCartItem(cartItem) {
  const flavor = cartItem.dataset.flavor;
  const size = cartItem.dataset.size;
  const quantity = cartItem.quantity;
  const totalPrice = calculateTotalPrice(flavor, size, quantity);

  const cartItemText = cartItem.querySelector('.cart-item-text');
  cartItemText.innerHTML = `<br>${flavor}<br>${size}<br>`;
}

function updateTotalAmount() {
  const cartItems = document.querySelectorAll('.cart-item');
  let totalAmount = 0;
  let totalItems = 0;

  cartItems.forEach(cartItem => {
    const flavor = cartItem.dataset.flavor;
    const size = cartItem.dataset.size;
    const quantity = cartItem.quantity;

    totalAmount += calculateTotalPrice(flavor, size, quantity);
    totalItems += quantity;
  });

  console.log("Total amount calculated:", totalAmount);
  document.getElementById('yourTotalAmountElement').textContent = ` ₱ ${totalAmount.toFixed(2)}`;
  document.getElementById('yourTotalAmountElement2').textContent = ` ₱ ${totalAmount.toFixed(2)}`;
  document.getElementById('totalItemsElement').textContent = `${totalItems}`;
}

document.addEventListener('DOMContentLoaded', function () {
  loadCartFromLocalStorage();
  updateTotalAmount();
});


for (let i = 1; i <= 47; i++) {
  const flavorContainer = document.querySelector(`.new-flavor-container${i}`);
  flavorContainer.addEventListener('click', function (event) {
    console.log('Container clicked:', i);
    if (event.target.tagName === 'BUTTON') {
      console.log('Button clicked:', event.target.textContent);
      const flavor = flavorContainer.querySelector('.txtformat').textContent;
      const size = event.target.dataset.size;
      addToCart(flavor, size);
      updateTotalAmount();
    }
  });
}



