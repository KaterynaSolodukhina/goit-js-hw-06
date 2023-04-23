const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

input.addEventListener("input", (event) => {
  console.log(input.value);
  span.style.fontSize = `${input.value}px`;
});
