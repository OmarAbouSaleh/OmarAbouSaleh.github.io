// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
console.log('Script loaded');
let Message =  "Thank you for your message";
let ContactPage = document.querySelector(".contact");

document.addEventListener("DOMContentLoaded", function() {
    let SubmitButton = document.getElementById("submit-button");
    SubmitButton.addEventListener('click', function(event) {
        ContactPage.innerHTML = "<p style='font-size: 24px; text-align: center;'>Thank you for your message</p>";
    });
});
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

