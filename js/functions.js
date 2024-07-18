let slideIndex = 1;
let autoSlideInterval;

document.addEventListener('DOMContentLoaded', (event) => {
    showSlide(slideIndex);
    startAutoSlide();
});

// Start the auto-slide
function startAutoSlide() {
    stopAutoSlide(); // Clear any existing intervals to prevent multiple intervals
    autoSlideInterval = setInterval(() => {
        plusSlide(1);
    }, 3000); // Change the interval time as needed (3000 ms = 3 seconds)
}

// Stop the auto-slide
function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
}

// Next/previous controls
function plusSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
    console.log("Slide changed");
    stopAutoSlide();
    // Restart auto-slide after a delay (e.g., 3 seconds)
    setTimeout(startAutoSlide, 3000);
}

function showSlide(n) {
    let i;
    let x = document.getElementsByClassName("slide-item");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}