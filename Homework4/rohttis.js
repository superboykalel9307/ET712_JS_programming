/*
AI helped me understand how to validate the form and make the gallery
navigation loop using JavaScript.
*/

// Form validation
const form = document.getElementById("userForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const successMessage = document.getElementById("successMessage");

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (password.length < 5) {
    passwordError.textContent = "Password must be at least 5 characters.";
    isValid = false;
  } else if (!/[$#%]/.test(password)) {
    passwordError.textContent = "Password must include #, $ or %.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Success! Your form has been submitted.";
    form.reset();
  }
});

// Gallery navigation
const track = document.getElementById("galleryTrack");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let currentPage = 0;
const totalPages = 2;

function updateGallery() {
  track.style.transform = `translateX(-${currentPage * 50}%)`;
}

rightBtn.addEventListener("click", function () {
  currentPage = (currentPage + 1) % totalPages;
  updateGallery();
});

leftBtn.addEventListener("click", function () {
  currentPage = (currentPage - 1 + totalPages) % totalPages;
  updateGallery();
});
