const blogHint = document.querySelector(".blog-hint");

if (blogHint) {
    window.setTimeout(() => blogHint.classList.add("is-ready"), 3000);

    // Tapping also reveals the clue on touch screens.
    blogHint.querySelector("button").addEventListener("click", () => {
        blogHint.classList.toggle("is-open");
    });
}
