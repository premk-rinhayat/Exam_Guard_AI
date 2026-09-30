let time = 30 * 60;

const timer = setInterval(() => {

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    document.getElementById("timer").textContent =
        `${minutes}:${seconds.toString().padStart(2, "0")}`;

    time--;

    if (time < 0) {
        clearInterval(timer);
        alert("Time Over");
    }

}, 1000);

// Autosave + Network failure simulation
// Autosave simulation
setInterval(() => {

    document.getElementById("saveStatus").textContent = "Saving...";

    setTimeout(() => {
        document.getElementById("saveStatus").textContent = "Saved";
    }, 500);

}, 5000);

const networkButton = document.getElementById("simulateNetworkFailure");

networkButton.addEventListener("click", () => {

    document.getElementById("networkStatus").textContent = "CONNECTION LOST";

    document.getElementById("saveStatus").textContent =
        "Local Save - Waiting for connection";
});

const restoreButton = document.getElementById("restoreNetwork");

restoreButton.addEventListener("click", () => {

    document.getElementById("networkStatus").textContent =
        "CONNECTION RESTORED";

    document.getElementById("saveStatus").textContent =
        "Syncing...";

    setTimeout(() => {
        document.getElementById("saveStatus").textContent =
            "Saved";
    }, 1000);
});