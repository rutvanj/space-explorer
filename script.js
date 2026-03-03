function showInfo(planet) {
    const info = {
        Mercury: "Mercury is the closest planet to the Sun.",
        Mars: "Mars is known as the Red Planet.",
        Jupiter: "Jupiter is the largest planet in our solar system.",
        Saturn: "Saturn is famous for its beautiful rings."
    };

    const box = document.getElementById("infoBox");
    document.getElementById("planetInfo").innerText = info[planet];
    box.style.display = "block";

    setTimeout(() => {
        box.style.transform = "translate(-50%, -30%) scale(1)";
    }, 10);
}

function closeInfo() {
    const box = document.getElementById("infoBox");
    box.style.transform = "translate(-50%, -30%) scale(0.8)";

    setTimeout(() => {
        box.style.display = "none";
    }, 200);
}