const form = document.getElementById("form");
const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (name === "") {
        message.textContent = "Please enter your name.";
    } else {
        const formattedName =
            name.charAt(0).toUpperCase() + name.slice(1);

        message.textContent =
            "Hello " + formattedName + "! Welcome to my Project 4 page.";
    }
});