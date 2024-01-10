document.addEventListener('DOMContentLoaded', function () {
  // Add smooth scrolling to links with the "scroll-link" class
  var scrollLinks = document.querySelectorAll('.scroll-link');
  
  scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    });
  });
});

function performSearch() {
  var searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

  // Check if the search term is not empty
  if (searchTerm !== '') {
    var flavorContainers = document.querySelectorAll('.txtformat');

    // Remove existing highlights
    var elements = document.querySelectorAll('.highlight');
    elements.forEach(function (element) {
      element.classList.remove('highlight');
    });

    flavorContainers.forEach(function (container) {
      var flavorText = container.textContent.toLowerCase();

      if (flavorText.includes(searchTerm)) {
        container.classList.add('highlight');

        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
}

function toggleCart() {
  console.log("working");

  // First cart container
  const cartContainer = document.querySelector('.cart-container');
  const cartContainerStyle = window.getComputedStyle(cartContainer);
  const isOpen = cartContainerStyle.getPropertyValue('right') === '0px' || cartContainerStyle.getPropertyValue('right') === '';

  // Second cart container
  const cartContainer2 = document.querySelector('.cart-container2');
  const cartContainerStyle2 = window.getComputedStyle(cartContainer2); // Fix: Change cartContainerStyle to cartContainerStyle2
  const isOpen2 = cartContainerStyle2.getPropertyValue('right') === '0px' || cartContainerStyle2.getPropertyValue('right') === ''; // Fix: Change cartContainerStyle to cartContainerStyle2

  if (isOpen || isOpen2) {
    cartContainer.style.right = '-400px';
    cartContainer2.style.right = '-400px';
  } else {
    cartContainer.style.right = '0px';
  }
}




function toggleCart2() {
  console.log("working");
  const cartContainer = document.querySelector('.cart-container2');
  const cartContainerStyle = window.getComputedStyle(cartContainer);
  const isOpen = cartContainerStyle.getPropertyValue('right') === '0px' || cartContainerStyle.getPropertyValue('right') === '';

  if (isOpen) {
    cartContainer.style.right = '-400px';
  } else {
    cartContainer.style.right = '0px';
  }
}
