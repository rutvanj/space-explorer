const planetInfo = {
Mercury: "Mercury is the closest planet to the Sun and has extreme temperature changes.",
Venus: "Venus is the hottest planet due to its thick atmosphere.",
Earth: "Earth is the only planet known to support life.",
Mars: "Mars is called the Red Planet because of its iron oxide surface.",
Jupiter: "Jupiter is the largest planet in our solar system.",
Saturn: "Saturn is famous for its beautiful ring system."
};

function showInfo(planet){
const box = document.getElementById("infoBox");
const text = document.getElementById("planetInfo");

text.innerText = planetInfo[planet];
box.style.display = "block";

setTimeout(()=>{
box.style.transform="translate(-50%, -30%) scale(1)";
},10);
}

function closeInfo(){
const box = document.getElementById("infoBox");

box.style.transform="translate(-50%, -30%) scale(0.8)";

setTimeout(()=>{
box.style.display="none";
},200);
}

function searchPlanet(){
let input = document.getElementById("search").value.toLowerCase();
let cards = document.querySelectorAll(".planet-card");

cards.forEach(card=>{
let name = card.getAttribute("data-name").toLowerCase();

if(name.includes(input)){
card.style.display="block";
}else{
card.style.display="none";
}
});
}
