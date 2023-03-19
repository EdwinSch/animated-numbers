/* ---- TARGETS && INITIALIZERS ---- */
let getNumbers = Array.from(document.querySelectorAll(".number"));

/* ---- SCRIPT ---- */

// Update counter function
const updateCount = (element) => {
  const value = parseInt(element.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;
    // break out of counter if number is reached
    if (initialValue > value) {
      element.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    // display count
    element.textContent = `${initialValue}+`;
  }, 1);
};

// Invoke update counter on each number element
getNumbers.forEach((number) => {
  updateCount(number);
});
