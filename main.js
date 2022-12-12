function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.querySelectorAll(".mySlides");
  if (x.length > 0) {
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  }
}


let addProduct = document.querySelector(".addProduct")
// let buttonBuy = document.querySelector(".buttonBuy")


let y = 1
function myFunction() {
  addProduct.textContent = y++
};
