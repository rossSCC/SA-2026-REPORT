// Smooth Scroll
let lenis;

// Check Lenis library loaded
if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
} else {
    console.warn("Lenis library not loaded. Running in offline mode without smooth scrolling.");
}


// Modal Functions
function openModal() {
    // Only do if lenis wasactually created
    if (lenis) {
        lenis.stop();
    }
    document.body.style.overflow = "hidden";

    const modal = document.getElementById("projectModal");
    modal.style.display = "flex";
}

function closeModal() {
    if (lenis) {
        lenis.start();
    }
    document.getElementById("projectModal").style.display = "none";
    document.body.style.overflow = ""; // restore scroll
}

//when clicking outside modal
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        closeModal();
    }
}

//ESC key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
