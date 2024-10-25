const containerPanel = document.querySelector(".all");
const input = document.querySelector("input");
const subBtn = document.querySelector("button");
const label = document.querySelector(".invalid");
const Dismiss = document.querySelector(".btn2");
const email = document.querySelector(".inputV");
const Success = document.querySelector(".successMessage");

subBtn.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue.includes("@gmail.com") || inputValue.includes("@email.com")) {
    containerPanel.style.display = "none";

    Success.style.display = "block";

    email.innerHTML = `${inputValue}`;
  } else {
    label.innerHTML = `Valid email required`;
    input.classList.add("input_invalid");
  }
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const inputValue = input.value;
    if (
      inputValue.includes("@gmail.com") ||
      inputValue.includes("@email.com")
    ) {
      containerPanel.style.display = "none";

      Success.style.display = "block";

      email.innerHTML = `${inputValue}`;
    } else {
      label.innerHTML = `Valid email required`;
      input.classList.add("input_invalid");
    }
  }
});

Dismiss.addEventListener("click", () => {
  containerPanel.style.display = "block";
  Success.style.display = "none";
  input.value = "";
});
