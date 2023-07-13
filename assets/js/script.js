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

document
  .getElementById("change-theme-menubar")
  .addEventListener("click", (e) => {
    if (document.body.classList.contains("light-theme")) {
      document.body.classList.replace("light-theme", "dark-theme");
      document.getElementById("moon").style = "z-index: -1;";
    } else {
      document.body.classList.replace("dark-theme", "light-theme");
      document.getElementById("moon").style = "z-index: 2;";
    }
  });



  
function openNav() {
  document.getElementById("menubar-menu-group").style = " display:block;";
}

function closeNav() {
  document.getElementById("menubar-menu-group").style = " display:none;";
}
