// =======================
// 🧭 NAVIGASI + ANIMASI PINDAH
// =======================
function showSection(id){
    document.querySelectorAll(".section").forEach(sec=>{
        sec.classList.remove("active");
    });

    const target = document.getElementById(id);
    target.classList.add("active");

    // reset animasi biar muncul lagi
    target.classList.remove("show");
    setTimeout(()=>{
        target.classList.add("show");
    },50);
}

// =======================
// 💡 SECRET (TEKAN "L")
// =======================
document.addEventListener("keydown",(e)=>{
    if(e.key.toLowerCase()==="l"){
        const secret = document.getElementById("secret");
        if(secret) secret.style.display="flex";
    }
});

function closeSecret(){
    const secret = document.getElementById("secret");
    if(secret) secret.style.display="none";
}

// =======================
// 🎬 SCROLL ANIMATION
// =======================
const faders = document.querySelectorAll('.fade-up');

const appearOnScroll = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{
    threshold: 0.2
});

faders.forEach(el=>{
    appearOnScroll.observe(el);
});

// =======================
// 🎮 MEMORY GAME (HALUS)
// =======================
const emojis = ["💙","✨","🌙","💌","💙","✨","🌙","💌"];
let shuffled = [...emojis].sort(()=>0.5 - Math.random());

let first = null;
let lock = false;

const board = document.getElementById("memoryGame");

if(board){
    shuffled.forEach((emoji)=>{
        let card = document.createElement("div");
        card.classList.add("card-game");

        card.onclick = ()=>{
            if(lock || card.innerHTML !== "") return;

            card.innerHTML = emoji;

            if(!first){
                first = {card, emoji};
            } else {
                if(first.emoji === emoji){
                    document.getElementById("gameText").innerHTML =
                    "Just like us… we always find our way back.";
                } else {
                    lock = true;
                    setTimeout(()=>{
                        first.card.innerHTML = "";
                        card.innerHTML = "";
                        lock = false;
                    },600);
                }
                first = null;
            }
        };

        board.appendChild(card);
    });
}
