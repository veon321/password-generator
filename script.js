const button = document.getElementById("generate-password");
const contain = document.querySelectorAll(".contain");

function check() {
  contain.forEach((checkbox) => {
    const checked = [];
    if (checkbox.checked) {
      checked.push(checkbox.name);
    }
    console.log(checked);
  });
}
button.addEventListener("click", check);
