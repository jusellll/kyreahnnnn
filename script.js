// 🎬 ENTER
function enterSite(){
    document.getElementById("intro").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("music").play();
}

// ⏳ COUNTDOWN
const startDate = new Date("2025-09-09");

setInterval(()=>{
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff/(1000*60*60*24));
    document.getElementById("time").innerHTML = days + " days together";
},1000);

// 💌 TYPEWRITER
const text = "Aku nggak butuh dunia yang sempurna... aku cuma butuh kamu di dalamnya.";
let i=0;

function typing(){
    if(i<text.length){
        document.getElementById("typing").innerHTML += text[i];
        i++;
        setTimeout(typing,40);
    }
}
typing();

// 🎮 GAME
const game = document.getElementById("game");
const result = document.getElementById("result");
let heartIndex = Math.floor(Math.random()*12);

for(let i=0;i<12;i++){
    let card = document.createElement("div");
    card.classList.add("card");

    card.onclick = ()=>{
        if(i===heartIndex){
            card.innerHTML="❤️";
            result.innerHTML="You found my heart 🥺";
        } else {
            card.innerHTML="💔";
        }
    };

    game.appendChild(card);
}

// 💖 FINAL
function finalMessage(){
    document.getElementById("ending").innerHTML =
    "Kalau waktu bisa diulang... aku tetap akan memilih kamu ❤️";
}