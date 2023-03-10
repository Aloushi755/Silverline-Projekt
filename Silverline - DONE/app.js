// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Create a timeline with a default duration of 5 seconds and ease of power2.out
var tl = gsap.timeline({
  defaults: {duration: 5, ease: "power2.out"},
  
  // Add ScrollTrigger options to the timeline
  scrollTrigger: {
    trigger: ".animate-on-scroll", // The element that triggers the animation
    start: "top 80%", // The point at which the animation starts
  }
});

// Add a tween animation to the timeline that sets the opacity of ".animate-on-scroll" to 1
tl.to(".animate-on-scroll", {opacity: 1});




// Get the form element using querySelector
const form = document.querySelector('form');

// Get the name input field using querySelector and the input's ID
const nameInput = document.querySelector('#name');

// Get the email input field using querySelector and the input's ID
const emailInput = document.querySelector('#email');

// Add an event listener to the form element that listens for the 'submit' event
form.addEventListener('submit', (event) => {

  // Check if either the name or email input fields are empty
  if (!nameInput.value || !emailInput.value) {

    // If either field is empty, prevent the default form submission behavior
    event.preventDefault();

    // Display an alert message prompting the user to fill in both fields
    alert('Please fill in both input fields.');
  }
});

//Følgende kode skriver tak for dit køber, når CTA knappen "Køb nu" bliver trykket på
document.getElementById("buy-now").addEventListener("click", function() {
  alert("Tak for dit køb!");
});






