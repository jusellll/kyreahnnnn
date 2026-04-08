// START
function start(){
    document.getElementById("intro").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("music").play();

    setTimeout(()=>{
        document.getElementById("voice").play();
    },3000);
}

// PARALLAX
document.addEventListener("scroll", ()=>{
    document.querySelectorAll(".layer").forEach(layer=>{
        let speed = layer.getAttribute("data-speed");
        layer.style.transform = `translateY(${window.scrollY * speed/10}px)`;
    });

    document.querySelector(".poetry").classList.add("show");
});

// 🎮 MEMORY GAME
const emojis = ["❤️","🌙","✨","💌","❤️","🌙","✨","💌"];
let shuffled = emojis.sort(()=>0.5-Math.random());

let first, second;
const board = document.getElementById("memoryGame");

shuffled.forEach((emoji)=>{
    let card = document.createElement("div");
    card.classList.add("card");

    card.onclick = ()=>{
        card.innerHTML = emoji;

        if(!first){
            first = {card, emoji};
        } else {
            second = {card, emoji};

            if(first.emoji === second.emoji){
                document.getElementById("gameText").innerHTML =
                "Just like us… somehow, we always match.";
            } else {
                setTimeout(()=>{
                    first.card.innerHTML="";
                    second.card.innerHTML="";
                },500);
            }

            first = null;
            second = null;
        }
    };

    board.appendChild(card);
});

// 💖 ENDING
function ending(){
    document.getElementById("finalText").innerHTML =
    "Kalau ini akhir cerita kita... aku harap ini akan menjadi halaman favorit dari kisah kita yang indah.";
}

// 💡 HIDDEN SURPRISE (PRESS "L")
document.addEventListener("keydown", (e)=>{
    if(e.key.toLowerCase() === "l"){
        document.getElementById("secret").style.display = "flex";
    }
});

// CLOSE SECRET
function closeSecret(){
    document.getElementById("secret").style.display = "none";
}
