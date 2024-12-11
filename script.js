let counter = 0;

function increment() {
  counter++;
  updateCounter();
}

function decrement() {
  if (counter > 0) counter--;
  updateCounter();
}

function reset() {
  counter = 0;
  updateCounter();
}

function updateCounter() {
  document.getElementById("result").innerText = counter;
}
