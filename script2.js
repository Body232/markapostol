document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll('.progress');
    
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0'; 
        
       
        setTimeout(() => {
            bar.style.transition = "width 1.5s ease-in-out";
            bar.style.width = width;
        }, 300);
    });
});

document.addEventListener("DOMContentLoaded"), () => {
   
    const bars = document.querySelectorAll('.progress');}
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.transition = "width 1.5s ease-in-out";
            bar.style.width = width;
        }, 300);
    });

   
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});


const funFacts = document.querySelectorAll(".fun-facts li");

funFacts.forEach(fact => {
    fact.addEventListener("click", () => {
        alert(fact.textContent);
    });
});