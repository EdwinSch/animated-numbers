/* ---- TARGETS && INITIALIZERS ---- */
let getNumbers = Array.from(document.querySelectorAll(".number"));

/* ---- SCRIPT ---- */

// Update counter function
const updateCount = (element) => {
  const value = parseInt(element.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;
};

getNumbers.forEach((number) => {
  updateCount(number);
});
