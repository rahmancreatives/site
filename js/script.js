// Slideshow functionality (only if slides exist)
const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function nextSlide() {
    if (slides.length === 0) return;
    current = (current + 1) % slides.length;
    showSlide(current);
}

function prevSlide() {
    if (slides.length === 0) return;
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}

// Auto-advance slides if any exist
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// Typewriter effect (only if element exists)
const typewriterElement = document.getElementById("typewriter");
if (typewriterElement) {
    const words = [
        "Professional Video Editing",
        "Cinematic Motion Graphics",
        "Modern Web Development"
    ];
    let i = 0, j = 0, isDeleting = false;

    function type() {
        const currentWord = words[i];
        if (isDeleting) {
            j--;
        } else {
            j++;
        }
        typewriterElement.innerHTML = currentWord.substring(0, j);

        if (!isDeleting && j === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
        }

        if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }

        setTimeout(type, isDeleting ? 60 : 120);
    }

    type();
}