const lengthSlider =
    document.getElementById("length-slider");

const lengthValue =
    document.getElementById("length-value");
    lengthSlider.addEventListener("input", () => {

    lengthValue.textContent =
        lengthSlider.value;

});
const filterButton =
    document.getElementById("filter-btn");

const filterMenu =
    document.getElementById("filter-menu");

const copyMessage =
    document.getElementById("copy-message");
const strengthText = document.getElementById("strength-text");

const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const bar4 = document.getElementById("bar4");

const passwordField = document.getElementById("password");
const generateButton = document.getElementById("generate-btn");

const copyButton = document.querySelector(".copy-btn");
const showButton = document.querySelector(".show-btn");
const uppercaseCheckbox =
    document.getElementById("uppercase");

const lowercaseCheckbox =
    document.getElementById("lowercase");

const numbersCheckbox =
    document.getElementById("numbers");

const specialCheckbox =
    document.getElementById("special");
function resetBars() {

    bar1.style.background = "#2A2A2A";
    bar2.style.background = "#2A2A2A";
    bar3.style.background = "#2A2A2A";
    bar4.style.background = "#2A2A2A";

}

function checkStrength(password) {

    let hasUpper = /[A-Z]/.test(password);
    let hasLower = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[!@#$%^&*()_+\-=\[\]{}]/.test(password);

    let score = 0;

    if (hasUpper) score++;
    if (hasLower) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    resetBars();

    if (password.length < 8 || score <= 2) {

        strengthText.textContent = "Weak Password";
        strengthText.style.color = "#FF4D4D";

        bar1.style.background = "#FF4D4D";

    }

    else if (password.length < 12 || score === 3) {

        strengthText.textContent = "Medium Password";
        strengthText.style.color = "#FFA500";

        bar1.style.background = "#FFA500";
        bar2.style.background = "#FFA500";
        bar3.style.background = "#FFA500";

    }

    else {

        strengthText.textContent = "Strong Password";
        strengthText.style.color = "#00E676";

        bar1.style.background = "#00E676";
        bar2.style.background = "#00E676";
        bar3.style.background = "#00E676";
        bar4.style.background = "#00E676";

    }

}

function generatePassword() {

    generateButton.classList.add("generate-click");
    
    let characters = "";

if (uppercaseCheckbox.checked) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if (lowercaseCheckbox.checked) {
    characters += "abcdefghijklmnopqrstuvwxyz";
}

if (numbersCheckbox.checked) {
    characters += "0123456789";
}

if (specialCheckbox.checked) {
    characters += "!@#$%^&*()_+-=[]{}";
}
if (characters === "") {

    alert("Select at least one filter");

    return;

}

    let password = "";

    if (uppercaseCheckbox.checked) {
    password += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[
        Math.floor(Math.random() * 26)
    ];
}

if (lowercaseCheckbox.checked) {
    password += "abcdefghijklmnopqrstuvwxyz"[
        Math.floor(Math.random() * 26)
    ];
}

if (numbersCheckbox.checked) {
    password += "0123456789"[
        Math.floor(Math.random() * 10)
    ];
}

if (specialCheckbox.checked) {
    const specials = "!@#$%^&*()_+-=[]{}";

    password += specials[
        Math.floor(Math.random() * specials.length)
    ];
}

    for (
    let i = password.length;
    i < Number(lengthSlider.value);
    i++
) {

        const randomIndex =
            Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];

    }

    passwordField.value = password;

    checkStrength(password);

    setTimeout(() => {

    generateButton.classList.remove("generate-click");

}, 150);

}

generateButton.addEventListener(
    "click",
    generatePassword
);

copyButton.addEventListener("click", () => {

    navigator.clipboard.writeText(
        passwordField.value
    );

copyMessage.textContent =
    "✓ Password copied";

copyMessage.style.opacity = "1";

setTimeout(() => {

    copyMessage.style.opacity = "0";

}, 1500);
});
showButton.addEventListener("click", () => {

    if (passwordField.type === "password") {

        passwordField.type = "text";

        showButton.textContent = "🙈";

    }

    else {

        passwordField.type = "password";

        showButton.textContent = "👁";

    }

});
filterButton.addEventListener("click", () => {

    if (filterMenu.style.display === "block") {

        filterMenu.style.display = "none";

    }

    else {

        filterMenu.style.display = "block";

    }

});