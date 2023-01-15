function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "darkmode";
    content.innerText = "Dark Mode is ON";
}
function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}