// Interactive button on Home page
const heroBtn = document.getElementById("heroBtn");
if(heroBtn) {
    heroBtn.addEventListener("click", () => {
        alert("You clicked the hero button!");
    });
}

// Form Validation on Contact page
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if(contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name === "" || email === "" || message === "") {
            formFeedback.textContent = "Please fill out all fields!";
            formFeedback.style.color = "red";
        } else {
            formFeedback.textContent = "Form submitted successfully!";
            formFeedback.style.color = "green";
            contactForm.reset();
        }
    });
}
