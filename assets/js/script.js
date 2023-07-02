document.body.classList.add("light.theme");

document.getElementById("change-theme").addEventListener("click", (e) => {
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.replace("light-theme", "dark-theme");
    document.getElementById("ellipse").style.cssText =
      "transform: translate(21px);";
  } else {
    document.body.classList.replace("dark-theme", "light-theme");
    document.getElementById("ellipse").style.cssText =
      "transform: translate(0px);";
  }
});
