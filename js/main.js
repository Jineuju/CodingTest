// gnb
const gnb_lis = document.querySelectorAll("#gnb>li");

gnb_lis.forEach((el) => {
  el.addEventListener("mouseenter", (e) => {
    const sub = e.currentTarget.querySelector(".sub");
    let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
    sub.style.height = "0";
    if (isBlock == "none") {
      sub.style.display = "block";
      let subHeight = sub.scrollHeight;
      sub.style.height = subHeight + "px";
    }
  });
});

gnb_lis.forEach((el) => {
  el.addEventListener("mouseleave", (e) => {
    const sub = e.currentTarget.querySelector(".sub");
    let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
    sub.style.height = "0";
    if (isBlock == "block") {
      sub.style.height = "0";
      sub.addEventListener("transitionend", function end() {
        sub.removeEventListener("transitionend", end);
        sub.style.display = "none";
      });
    }
  });
});

// 햄버거, 모바일버튼
// 햄버거 버튼을 동작시키기 위한 변수입니다
let btnCall = document.querySelector(".btnCall");
// 모바일 메뉴를 동작시키기 위한 변수입니다
let menuMo = document.querySelector(".menuMo");

btnCall.onclick = function (e) {
  e.preventDefault();
  btnCall.classList.toggle("on");
  menuMo.classList.toggle("on");
};
