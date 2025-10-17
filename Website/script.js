
const arrowScrollTop = document.getElementById("arrowScrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    arrowScrollTop.style.display = "block";
  } else {
    arrowScrollTop.style.display = "none";
  }
});


arrowScrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
