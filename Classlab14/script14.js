// SECTION 14.1: Selecting elements and changing content/styles

const mainTitle = document.querySelector("#mainTitle");
const mouseMessage = document.querySelector("#mouseMessage");
const demoText = document.getElementById("demoText");

mainTitle.addEventListener("mouseout", function () {
  mouseMessage.textContent = "Mouseout event detected!";
  console.log("The mouse moved away from the heading.");
});

document.querySelector("#changeTextButton").addEventListener("click", function () {
  demoText.textContent = "The textContent property changed this paragraph.";
});

document.querySelector("#styleButton").addEventListener("click", function () {
  demoText.classList.toggle("changed-style");
});

document.querySelector("#classButton").addEventListener("click", function () {
  demoText.classList.toggle("highlight");
});

// querySelectorAll returns a collection of matching elements.
const shapeButtons = document.querySelectorAll("[data-shape]");
const shape = document.querySelector("#shape");
const shapeLabel = document.querySelector("#shapeLabel");

for (const button of shapeButtons) {
  button.addEventListener("click", function (event) {
    const selectedShape = event.currentTarget.dataset.shape;

    shape.className = selectedShape;
    shapeLabel.textContent = selectedShape.toUpperCase();
  });
}


// SECTION 14.2: Form submission, creation/removal, delegation, and event object

const practiceList = document.querySelector("#practiceList");
const itemForm = document.querySelector("#itemForm");
const itemInput = document.querySelector("#itemInput");
const listMessage = document.querySelector("#listMessage");

// Event delegation: one listener on the parent handles clicks on its <li> children.
practiceList.addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() === "li") {
    const removedText = event.target.textContent;
    event.target.remove();
    listMessage.textContent = `Removed: ${removedText}`;
  }
});

itemForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newItemText = itemInput.value.trim();

  if (newItemText === "") {
    listMessage.textContent = "Type something before adding an item.";
    return;
  }

  // Create an element, give it text, then append it to the list.
  const newItem = document.createElement("li");
  newItem.textContent = newItemText;
  practiceList.appendChild(newItem);

  listMessage.textContent = `Added: ${newItemText}`;
  itemInput.value = "";
  itemInput.focus();
});

// Event object: e.target identifies the button that was clicked.
const pressButton = document.querySelector("#pressButton");

pressButton.addEventListener("click", function (event) {
  const clickedButton = event.target;
  const isPressed = clickedButton.classList.toggle("active");

  clickedButton.textContent = isPressed ? "Key was pressed!" : "PRESS ME";
});

const keyboardInput = document.querySelector("#keyboardInput");
const keyMessage = document.querySelector("#keyMessage");

keyboardInput.addEventListener("keydown", function (event) {
  keyMessage.textContent = `You pressed "${event.key}". Event type: ${event.type}.`;
  console.log(`Key pressed: ${event.key}; code: ${event.code}`);
});

// Create and remove notes using createElement(), append(), and remove().
const notesContainer = document.querySelector("#notesContainer");
let noteNumber = 0;

document.querySelector("#addNoteButton").addEventListener("click", function () {
  noteNumber += 1;

  const note = document.createElement("p");
  note.classList.add("note");
  note.textContent = `Practice note ${noteNumber}: this element was created with JavaScript.`;
  notesContainer.append(note);
});

document.querySelector("#removeNoteButton").addEventListener("click", function () {
  const lastNote = notesContainer.lastElementChild;

  if (lastNote) {
    lastNote.remove();
  }
});


// SECTION 14.3: Form events and window events

const greetingForm = document.querySelector("#greetingForm");
const nameInput = document.querySelector("#nameInput");
const greetingMessage = document.querySelector("#greetingMessage");

nameInput.addEventListener("input", function () {
  greetingMessage.textContent = nameInput.value
    ? `Hello, ${nameInput.value}! Submit the form to show your greeting.`
    : "";
});

greetingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();

  if (name === "") {
    greetingMessage.textContent = "Please enter your name first.";
    nameInput.focus();
    return;
  }

  greetingMessage.textContent = `Welcome to Class Lab 14, ${name}!`;
  nameInput.value = "";
});

const windowInfo = document.querySelector("#windowInfo");
const scrollInfo = document.querySelector("#scrollInfo");

function showWindowSize() {
  windowInfo.textContent =
    `Window size: ${window.innerWidth}px wide × ${window.innerHeight}px high.`;
}

showWindowSize();
window.addEventListener("resize", showWindowSize);

window.addEventListener("scroll", function () {
  scrollInfo.textContent = `You have scrolled ${Math.round(window.scrollY)}px from the top.`;
});

document.querySelector("#topButton").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
