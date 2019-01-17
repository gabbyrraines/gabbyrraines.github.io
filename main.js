const body = document.querySelector("body");

const handleKeyDown = (e) => {
  if (e.keyCode === 27 && body.classList.contains("modal-active")) {
    body.classList.remove("modal-active")
  }
}

const handleModalBtnClick = () => {
  if (body.classList.contains("modal-active")) {
    window.removeEventListener("keydown", handleKeyDown)
    body.classList.remove("modal-active")
  } else {
    window.addEventListener("keydown", handleKeyDown)
    body.classList.add("modal-active")
  }
}

const handleModalCloseClick = () => {
  body.classList.remove("modal-active")
}

const modalOpenBtn = document.querySelector("#menu-button");
modalOpenBtn.addEventListener("click", handleModalBtnClick);
const modalCloseBtn = document.querySelector("#close-button");
modalCloseBtn.addEventListener("click", handleModalCloseClick);
