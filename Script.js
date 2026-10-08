// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });

});


// =========================
// CONTACT FORM
// =========================

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    alert(
        "Thank you, " + name +
        "! Your message has been received by Sunrise Cafe."
    );

    form.reset();

});


// =========================
// CURRENT YEAR IN FOOTER
// =========================

const footerText = document.querySelector("footer p:last-child");

if (footerText) {
    footerText.textContent =
        "© " + new Date().getFullYear() +
        " Sunrise Cafe. All Rights Reserved.";
}