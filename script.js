function toggleJourney() {
    const section = document.getElementById("journey");

    if (section.style.display === "block") {
        section.style.display = "none";
    } else {
        section.style.display = "block";
        section.scrollIntoView({ behavior: "smooth" });
    }
}
function openForm(){
document.getElementById("popupForm").style.display="flex";
}

function closeForm(){
document.getElementById("popupForm").style.display="none";
}

function submitForm(){
alert("Thank you! We will contact you soon.");
closeForm();
}
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
