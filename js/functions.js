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



/* 
To create a card slider that can automatically slide and also use controls for manual navigation, you can use HTML, CSS, and JavaScript. Here’s a complete example:

HTML:
html
Copiar código
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Slider</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="slider-container">
        <div class="slider">
            <div class="slide-item">Card 1</div>
            <div class="slide-item">Card 2</div>
            <div class="slide-item">Card 3</div>
        </div>
        <button class="prev" onclick="plusSlide(-1)">&#10094;</button>
        <button class="next" onclick="plusSlide(1)">&#10095;</button>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
CSS (styles.css):
css
Copiar código
body {
    font-family: Arial, sans-serif;
}

.slider-container {
    position: relative;
    max-width: 600px;
    margin: auto;
    overflow: hidden;
}

.slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide-item {
    min-width: 100%;
    box-sizing: border-box;
    padding: 40px;
    background: #f1f1f1;
    text-align: center;
    border: 1px solid #ddd;
}

button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 10;
}

button.prev {
    left: 10px;
}

button.next {
    right: 10px;
}

button:hover {
    background-color: rgba(0, 0, 0, 0.8);
}
JavaScript (scripts.js):
javascript
Copiar código
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
    const slides = document.getElementsByClassName("slide-item");
    const totalSlides = slides.length;

    if (n > totalSlides) { slideIndex = 1 }
    if (n < 1) { slideIndex = totalSlides }

    for (i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}*/