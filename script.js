document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        img.addEventListener("error", function () {
            img.src = "images/placeholder.png";  // Agar image nahi mile toh yeh fallback image show karega
            img.alt = "Image Not Found";
        });
    });
});
