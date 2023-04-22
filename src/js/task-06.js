const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  const input = event.target;
  const inputLength = Number(input.getAttribute("data-length"));

  if (input.value.length === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
