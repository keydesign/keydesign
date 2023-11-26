function lazy_load() {
    // Select all images with the class 'lazy-load'
    const lazyImages = document.querySelectorAll('.lazy-load');

    lazyImages.forEach(img => {
        // Add a small delay (e.g., 50ms) to give the full size image a chance to load
        setTimeout(() => {
            // Check if the image has not been loaded yet
            if (!img.complete) {
                // Store the original source of each image
                const originalSrc = img.src;

                // Modify the source temporarily
                img.src = originalSrc.replace(/\.(?=[^.]*$)/, '_lr.');

                // Apply a blur effect to the low-resolution image
                img.style.filter = 'blur(5px)'; // You can adjust the blur radius as needed

                // Add an event listener to detect when the temporary image has loaded
                img.addEventListener('load', () => {
                    // Remove the blur effect
                    img.style.filter = 'none';

                    // Replace the source of the image back to the original source
                    img.src = originalSrc;
                });
            }
        }, 100);
    });
}

document.addEventListener('DOMContentLoaded', lazy_load());