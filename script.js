// Highlight active navigation link
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// Simple welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Mark Vincent O. Apostol Portfolio!");
});
const funFacts = document.querySelectorAll(".fun-facts li");

funFacts.forEach(fact => {
    fact.addEventListener("click", () => {
        alert(fact.textContent);
    });
});


funFacts.forEach(fact => {
    fact.addEventListener("click", () => {
        alert(fact.textContent);
    });
});