// Function for verifying that data posted or not
function verify() {
  fetch("index.php")
    .then((res) => res.text())
    .then((data) => {
      alert("Submitted!!");
    });
}

// Code for sidebar for responsiveness
function handleClick() {
  let navbar = document.querySelector(".items");
  navbar.classList.toggle("modified");
}

// Validation of the form
function validateForm() {
  let x = document.forms["contactForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  let y = document.forms["contactForm"]["email"].value;
  if (y == "") {
    alert("Email must be filled out");
    return false;
  }

  let z = document.forms["contactForm"]["phone"].value;
  if (z == "") {
    alert("Phone must be filled out");
    return false;
  }
}
