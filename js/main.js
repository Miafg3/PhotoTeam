const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        // cambiar imagen principal
        mainImage.src = thumb.src;

        // quitar active a todas
        thumbnails.forEach((item) => {
        item.classList.remove("active");
        });

        // agregar active a la actual
        thumb.classList.add("active");
    });
});