const form = document.getElementById("form");

const nameInput =
    document.getElementById("nameInput");

const emailInput =
    document.getElementById("emailInput");

const message =
    document.getElementById("message");






/* CONTACT EMAiL */

if (form) {

    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                nameInput.value.trim();

            const email =
                emailInput.value.trim();

            if (name === "" || email === "")  {

                message.textContent =
                    "Please complete all fields.";

                return;
            }

            if (!email.includes("@") || !email.includes(".")) {

                message.textContent =
                    "Please enter a valid email.";

                return;
            }

            const formattedName =
                name.charAt(0).toUpperCase() +
                name.slice(1);

            message.textContent =
                "Thank you " +
                formattedName +
                "! Your information has been submitted.";

        }
    );

}







/* PRODUCT SEARCH FILTER */

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener(
        "keyup",
        function() {

            const filter =
                searchInput.value.toLowerCase();

            const cards =
                document.querySelectorAll(".card");

            cards.forEach(function(card) {

                const text =
                    card.textContent.toLowerCase();

                if (text.includes(filter)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        }
    );

}







/* NEWSLETTER FORM */

const newsletterForm =
    document.getElementById("newsletterForm");

const newsletterEmail =
    document.getElementById("newsletterEmail");

const newsletterMessage =
    document.getElementById("newsletterMessage");

if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const email =
                newsletterEmail.value.trim();

            if (
                email === "" ||
                !email.includes("@") ||
                !email.includes(".")
            ) {

                newsletterMessage.textContent =
                    "Please enter a valid email.";

                return;
            }

            newsletterMessage.textContent =
                "Thank you for subscribing to GreenTech updates!";

        }
    );

}