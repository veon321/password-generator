const passwordOptions = [
  { name: "contain lowercase", charSet: "abcdefghijklmnopqrstuvwxyz" },
  { name: "contain uppercase", charSet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  { name: "contain number", charSet: "0123456789" },
  { name: "contain symbols", charSet: "!@#$%^&*()_+-=[]{}|;:,.<>?" },
];

const button = document.getElementById("generate-password");
const output = document.getElementById("generated-password");
const lengthInput = document.getElementById("password-length");

function generatePassword() {
  let availableChars = "";
  const length = parseInt(lengthInput.value) || 12;

  passwordOptions.forEach((option) => {
    const checkbox = document.querySelector(`input[name="${option.name}"]`);
    if (checkbox && checkbox.checked) {
      availableChars += option.charSet;
    }
  });

  if (availableChars === "") {
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  output.value = password;
}
button.addEventListener("click", generatePassword);
