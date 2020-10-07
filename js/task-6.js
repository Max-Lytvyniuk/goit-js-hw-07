const inputRef = document.querySelector("#validation-input");
console.log(inputRef);
const dataRef = document.querySelector("#validation-input").dataset.length;

function onInputChange(event) {
  if (Number(event.currentTarget.value.length) === Number(dataRef)) {
    console.log("yes");

    inputRef.classList.add("valid");
  } else {
    console.log("no");

    inputRef.classList.add("invalid");
  }
}

inputRef.addEventListener("blur", onInputChange);
