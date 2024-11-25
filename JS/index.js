var image = document.querySelector("img");

document.addEventListener("mousemove", function (e) {
  image.style.top = e.clientY + "px";
  image.style.left = e.clientX + "px";
});
