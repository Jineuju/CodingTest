// test1
let ul = document.querySelector("ul");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let lis = ul.querySelectorAll("li");

ul.style.marginLeft = "-100%";

next.addEventListener("click", (e) => {
  e.preventDefault();

  // 다음 사진으로 이동하는 코드 작성
  ul.style.marginLeft = "-200%";
  ul.append(ul.firstElementChild);
});

prev.addEventListener("click", (e) => {
  e.preventDefault();

  ul.style.marginLeft = "0%";
  ul.prepend(ul.lastElementChild);
});
