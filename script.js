// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Booking form handling (dummy)
document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("bookingMsg").textContent =
        "Thank you! Your booking request is submitted. We'll contact you soon.";
});
