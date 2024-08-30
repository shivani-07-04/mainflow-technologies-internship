
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add to cart logic goes here
        console.log('Added to cart!');
    });
});