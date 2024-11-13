let userSeq = [];
let gameSeq = [];

let started = false;
let level = 0;
let high = 0;
let btns = ["blue", "red", "green", "purple"];

let h3 = document.querySelector("h3");
let p = document.querySelector("p");

document.addEventListener("keypress", function (event) {
    if (started == false) {
        started = true;
        setTimeout(levelUp,2000);
        // levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200)
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randColor = Math.floor(Math.random() * 4);
    let randIdx = btns[randColor];
    let btn = document.querySelector(`.${randIdx}`);

    gameSeq.push(randIdx);
    console.log(gameSeq);
    btnFlash(btn);
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}

function highest(){    
    if(level >= high){
        high = level;
        p.innerHTML = `<b>Highest score: ${high}</b>`;
    }
    else{
        p.innerHTML = `<b>Highest score: ${high}</b>`;
    }
}
  
function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h3.innerHTML = `Game over. Your score was <u>${level}</u><br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        highest();
        reset();
    }
}

function btnPress() {
    let clk = this;
    btnFlash(clk);

    userColor = clk.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let userclick = document.querySelectorAll(".btn");
for (click of userclick) {
    click.addEventListener("click", btnPress);
}
