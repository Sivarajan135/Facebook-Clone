var settingsMenu = document.querySelector(".settings-menu");
var darkbtn = document.getElementById("dark-btn");

function clicking()
{
    settingsMenu.classList.toggle("settings-menu-height");
}

darkbtn.onclick = function()
{
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}