const ref = document.querySelector(".last");
console.log(ref);
function teacher(num1, num2) {
  return alert(num1 + num2);
}

if (ref) {
  ref.addEventListener("click", () => teacher(12, 88));
}
