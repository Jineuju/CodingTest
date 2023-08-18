let leftBox = document.querySelector("#left");
let rightBox = document.querySelector("#right");
let lists = document.querySelectorAll(".list");

let selected = null;
let selected2 = null;
// 비워놔야 드래그를 하고 놓을 수 있으니 null로 비워놓았습니다.

for (let el of lists) {
  el.addEventListener("dragstart", function (e) {
    selected = e.target;
    selected2 = e.target.id;
    // id의 값(list$)의 $값을 바꿔줘야하니 .id를 붙였습니다.
  });

  rightBox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  rightBox.addEventListener("drop", function () {
    rightBox.append(selected);
    startEffect(selected2);
  });

  leftBox.addEventListener("dragover", function (e) {
    e.preventDefault();
    // rightBox의 dragover와 이유는 같습니다
  });
  leftBox.addEventListener("drop", function () {
    leftBox.append(selected);
    finishEffect(selected2);
  });
}

let str;
function startEffect(id) {
  str = id.substr(4, 1);
  // page뒤에 있는 숫자를 바꾸기 위해 str을 쪼개어 설정
  let pages = document.querySelector(".page" + str);
  // console.log(pages);
  pages.style.transform = "scale(1)";

  let wrapDiv = document.querySelectorAll(".wrap div");
  for (let i = 0; i < wrapDiv.length; i++) {
    if (wrapDiv[i].classList.contains("page" + str)) {
      wrapDiv[i].classList.add("on");
    } else {
      wrapDiv[i].classList.remove("on");
    }
  }
}

function finishEffect(id) {
  str = id.substr(4, 1);
  // page뒤에 있는 숫자를 바꾸기 위해 str을 쪼개어 설정
  let pages = document.querySelector(".page" + str);
  pages.style.transform = "scale(0)";
}
