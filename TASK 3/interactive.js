// Form validation
const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name === '' || email === '') {
    alert('Please fill in all fields');
  } else {
    // Submit the form
  }
});

// Interactive Menu
const menu = document.getElementById('myMenu');
const menuItems = menu.querySelectorAll('li');

menu.addEventListener('mouseover', (e) => {
  const target = e.target;
  if (target.tagName === 'LI') {
    target.classList.add('active');
  }
});

menu.addEventListener('mouseout', (e) => {
  const target = e.target;
  if (target.tagName === 'LI') {
    target.classList.remove('active');
  }
});

// Dynamic Content Update
const content = document.getElementById('myContent');

// Update the content based on user interaction or other events
content.innerHTML = 'New content';

// Example of event handling
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  alert('Button clicked!');
});