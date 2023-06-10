// Get container elements
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const successMessage = document.getElementById("message");
const resetBtn = document.getElementById("resetBTN");
const dragItems = document.querySelectorAll(".item");
const ul = document.createElement("ul");

for (item of dragItems) {
  item.addEventListener("dragstart", handleDragStart);
  item.addEventListener("dragend", handleDragEnd);
}

container2.addEventListener("dragover", handleDragOver);
container2.addEventListener("drop", handleDrop);
resetBtn.addEventListener("click", handleReset);

function handleDragStart(event) {
  event.target.className += " dragged";
  event.dataTransfer.setData("text/plain", event.target.id);
}
function handleDragEnd(event) {
  event.target.className = "item";
}

// Function to handle drag over event
function handleDragOver(event) {
  event.preventDefault();
}

// Function to handle drop event
function handleDrop(event) {
  event.preventDefault();
  const itemId = event.dataTransfer.getData("text/plain");
  console.log("Enetering to drag drop");
  const item = document.getElementById(itemId);
  ul.append(item);
  console.log(ul);
  container2.append(ul);
  showSuccessMessage(item.innerText);
}

// Function to handle reset button click
function handleReset() {
  location.reload();
}

// Function to show success message
function showSuccessMessage(item) {
  successMessage.innerHTML = `Item ${item} dropped successfully!`;
}
