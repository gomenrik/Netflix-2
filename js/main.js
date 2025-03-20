// Show Loading
function toggleLoading() {
    let loader = document.querySelector(".loader");
    loader.style.display = loader.style.display == "none" ? "block" : "none";
}

// Page Scroll
window.addEventListener("scroll", function () {
    const navbar = this.document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
