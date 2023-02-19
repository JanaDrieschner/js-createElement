console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newMessage = document.createElement("li");
  newMessage.textContent = "Another one";
  newMessage.classList.add("toast-container__message");

  toastContainer.append(newMessage);

  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = `<li class="toast-container__message">I'm a toast message.</li>
  `;
  // Exercise: Clear the stack of toast messages
});
