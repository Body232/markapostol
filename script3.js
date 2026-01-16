document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("visitor-name").value.trim();
  const email = document.getElementById("visitor-email").value.trim();
  const message = document.getElementById("visitor-message").value.trim();
  const feedback = document.getElementById("form-feedback");

  if (!name || !email || !message) {
    feedback.textContent = "Please fill out all fields before submitting.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = `Thank you ${name}! Your message has been received.`;
  feedback.style.color = "green";

  this.reset();
});


document.getElementById("year").textContent = new Date().getFullYear();