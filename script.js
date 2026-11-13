
// ===== WELCOME MESSAGE =====

console.log("Welcome to Vishnu Vardhan's Portfolio!");


// ===== CURRENT YEAR IN FOOTER =====

const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Vishnu Vardhan. All Rights Reserved.`;
}


// ===== SMOOTH NAVIGATION =====

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Navigating to: " + link.textContent);

    });

});


// ===== CONTACT BUTTON MESSAGE =====

const contactButton = document.querySelector(".btn");

if (contactButton) {

    contactButton.addEventListener("click", function() {

        console.log("Thanks for visiting my portfolio!");

    });

}

// Welcome message
console.log("Welcome to Vishnu Vardhan's Portfolio!");
// Profile image error handling
const profileImage = document.querySelector('.profile-photo');

if (profileImage) {

    profileImage.addEventListener('error', () => {
        console.log("Please check images/profile.jpg");
    });

}

