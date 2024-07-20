const clickeredButton = document.querySelector("#clickered");

const labeledButton = document.querySelector("#labeled");

clickered.addEventListener("click", () => {
  alert("Clickered button clicked");
});

labeled.addEventListener("click", () => {
  alert("Labeled button clicked");
});
