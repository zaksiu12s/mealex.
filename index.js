//TIMER
let seconds = 0;
let minutes = 0;
let hours = 0;
const timeH1 = document.querySelector("#seconds");
const timeP = document.querySelector("#time");

setInterval(() => {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }

  hours != 0
    ? (timeH1.innerHTML = hours)
    : minutes != 0
    ? (timeH1.innerHTML = minutes)
    : (timeH1.innerHTML = seconds);
}, 1000);

function turnMenuOn() {
  const right = document.querySelector(".right");
  const menu = document.querySelector(".menu");
  if ((right.classList[1] === "active")) {
    menu.classList.remove("background");
    right.classList.remove("active");
  } else {
    menu.classList.add("background");
    right.classList.add("active");
  }
}

//MY SKILLS
const inViewport = (element, elements) => {
  let viewPortElement = document.querySelector(element);
  let allElements = document.querySelectorAll(elements);
  let windowHeight = window.innerHeight;
  const elems = () => {
    //console.log(viewPortElement);
    let viewportOffset = viewPortElement.getBoundingClientRect();
    let top = viewportOffset.top;
    for (i = 0; i < allElements.length; i++) {
      if (top < windowHeight && top > 0 - viewPortElement.offsetHeight) {
        allElements[i].classList.add("active");
      } else {
        allElements[i].classList.remove("active");
      }
    }
  };
  window.addEventListener("scroll", elems);
};

inViewport(".mySkills", ".skill");
inViewport("#hero", "#toHero");
inViewport("#about", "#toAbout");
inViewport("#service", "#toService");
inViewport("#portfolio", "#toPortfolio");
inViewport("#contact", "#toContact");

const menuView = () => {
  const menu = document.querySelector(".menu");
  let windowHeight = window.innerHeight;
  const elemix = () => {
    let viewportOffset = menu.getBoundingClientRect();
    let top = viewportOffset.top;
    if (top === 0) {
      menu.classList.add("active");
    } else {
      menu.classList.remove("active");
    }
  };
  window.addEventListener("scroll", elemix);
};

menuView();

const images = document.querySelectorAll("div.active");
function toggleImages() {
  const toggleImagesBtn = document.querySelector("#toggleImages");
  if (toggleImagesBtn.innerHTML === "LOAD MORE") {
    for (i = 0; i < images.length; i++) {
      images[i].classList.remove("active");
      images[i].classList.remove("tako");
    }
  } else {
    for (i = 0; i < images.length; i++) {
      images[i].classList.add("tako");
      setTimeout(() => {
        for (i = 0; i < images.length; i++) {
          images[i].classList.add("active");
        }
      }, 400);
    }
  }
  if (toggleImagesBtn.innerHTML === "LOAD MORE") {
    toggleImagesBtn.innerHTML = "LOAD LESS";
  } else toggleImagesBtn.innerHTML = "LOAD MORE";
}
