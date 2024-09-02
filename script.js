const buttonChangeTheme = document.getElementById("buttonChangeTheme");
const body = document.querySelector("body");
const buttonImageChangeTheme = document.querySelector(".button-image");

buttonChangeTheme.addEventListener("click", () => {
  const darkModeIsEnabled = body.classList.contains("dark-mode");

  body.classList.toggle("dark-mode");

  if (darkModeIsEnabled) {
    buttonImageChangeTheme.setAttribute("src", "./SRC/imagens/sun.png");
  } else {
    buttonImageChangeTheme.setAttribute("src", "./SRC/imagens/moon.png");
  }
});
