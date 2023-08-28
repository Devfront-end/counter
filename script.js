
// Get references to the counter element and buttons
const counterElement = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

// Initial counter value
let counterValue = 0;

// Function to update the counter element's text
function updateCounter() {
  counterElement.textContent = counterValue;
}

// Function to handle increment button click
incrementBtn.addEventListener("click", () => {
  counterValue++;
  updateCounter();

  // Check if counterValue is 10
  if (counterValue === 10) {
    alert("Counter reached 10!");
  }
});

// Function to handle decrement button click
decrementBtn.addEventListener("click", () => {
  counterValue--;
  updateCounter();
});

// Initialize the counter display
updateCounter();


  
