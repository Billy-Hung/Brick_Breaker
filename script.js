const pauseBtn = document.getElementById("BtnPause");
const resumeBtn = document.getElementById("BtnResume");
const pauseMenu = document.getElementById("PauseGame");

pauseBtn.addEventListener("click", () => {
    pauseMenu.style.display = "flex"; // Show the pop-up menu
});

resumeBtn.addEventListener("click", () => {
    pauseMenu.style.display = "none"; // Hide the pop-up menu
});