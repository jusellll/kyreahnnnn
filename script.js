// NAV
function showSection(id){
    document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// SECRET
document.addEventListener("keydown",(e)=>{
    if(e.key==="l"){
        document.getElementById("secret").style.display="flex";
    }
});
function closeSecret(){
    document.getElementById("secret").style.display="none";
}

// 🎮 MEMORY GAME (HALUS & RAPI)
const emojis=["💙","✨","🌙","💌","💙","✨","🌙","💌"];
let shuffled=emojis.sort(()=>0.5-Math.random());

let first=null;
const board=document.getElementById("memoryGame");

shuffled.forEach((emoji)=>{
    let card=document.createElement("div");
    card.classList.add("card-game");

    card.onclick=()=>{
        if(card.innerHTML!=="") return;

        card.innerHTML=emoji;

        if(!first){
            first={card,emoji};
        } else {
            if(first.emoji===emoji){
                document.getElementById("gameText").innerHTML="Just like us… we match.";
            } else {
                setTimeout(()=>{
                    first.card.innerHTML="";
                    card.innerHTML="";
                },600);
            }
            first=null;
        }
    };

    board.appendChild(card);
});
