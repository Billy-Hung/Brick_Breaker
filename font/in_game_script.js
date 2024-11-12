//In Game Buttons
const pauseBtn = document.getElementById("BtnPause");
const resumeBtn = document.getElementById("BtnResume");
const pauseMenu = document.getElementById("PauseGame");
const againBtn = document.getElementById("BtnAgain");
const menuBtn = document.getElementById("BtnMenu");

document.addEventListener("DOMContentLoaded", () => {
    if (pauseMenu) {
        pauseMenu.style.display = "none";
    }
});

pauseBtn.onclick = function(){
    pauseMenu.style.display = "flex";
}

//Tam Bo :33
resumeBtn.onclick = function(){
    pauseMenu.style.display = "none";
}

againBtn.onclick = function(){
    pauseMenu.style.display = "none";
}

menuBtn.onclick = function(){
    window.location.href = "index.html";
}