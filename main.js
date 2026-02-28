// Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    touchMultiplier: 2,
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


// Modal Functions
function openModal() {
    lenis.stop();
    document.body.style.overflow = "hidden"; // 🔒 lock background

    // 1. Define the modal variable first
    const modal = document.getElementById("projectModal");
    modal.style.display = "flex";
}

function closeModal() {
    lenis.start();
    document.getElementById("projectModal").style.display = "none";
    document.body.style.overflow = ""; // restore scroll
}

// Close when clicking outside modal
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        closeModal();
    }
}

// Close on ESC key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

