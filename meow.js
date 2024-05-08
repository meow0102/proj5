const textElem = document.querySelector(".box");
textElem.addEventListener("mouseover", function () {
  textElem.classList.add("error");
});
textElem.addEventListener("mouseout", function () {
  textElem.classList.remove("error");
});
