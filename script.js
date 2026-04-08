// NAVIGASI
function showSection(id){
    document.querySelectorAll(".section").forEach(sec=>{
        sec.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

// 💡 SECRET (PRESS L)
document.addEventListener("keydown",(e)=>{
    if(e.key.toLowerCase()==="l"){
        document.getElementById("secret").style.display="flex";
    }
});
function closeSecret(){
    document.getElementById("secret").style.display="none";
}

// 🎮 GAME 1 (FIND HEART)
let g1 = document.getElementById("game1");
let index = Math.floor(Math.random()*6);
for(let i=0;i<6;i++){
    let b=document.createElement("button");
    b.innerHTML="?";
    b.onclick=()=>{
        b.innerHTML = (i===index)?"❤️":"💔";
    };
    g1.appendChild(b);
}

// 🎮 GAME 2 (QUIZ)
document.getElementById("quiz").innerHTML = `
<p>Siapa yang paling kamu sayang?</p>
<button onclick="alert('Salah 😝')">Aku</button>
<button onclick="alert('Benar 💖')">Kamu</button>
`;

// 🎮 GAME 3 (CLICK LOVE)
let count=0;
let clickDiv=document.getElementById("clickGame");
let btn=document.createElement("button");
btn.innerHTML="Klik aku ❤️";
btn.onclick=()=>{
    count++;
    btn.innerHTML="Love: "+count;
};
clickDiv.appendChild(btn);
