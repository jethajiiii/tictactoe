console.log("Welcome to my Tic Tac Toe")

let music = new Audio('music.mp3')
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio('gameover.mp3')

let turn = "X"
let isGameOver = false

// FUNCTON TO CHANGE THE TURN 
const changeTurn = ()=>{
    return turn === "X" ? "0" : "X"
    // return kro X ko agar 0 h pehele se varna X hi rehene do
}

// FUNCTION TO CHECK A WIN 
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 7.5, 7.5, 0],
        [3, 4, 5, 7.5, 17.5, 0],
        [6, 7, 8, 7.5, 27.5, 0],
        [0, 3, 6, -2.5, 17.5, 90],
        [1, 4, 7, 7.5, 17.5, 90],
        [2, 5, 8, 17.5, 17.5, 90],
        [0, 4, 8, 7.5, 17, 45],
        [2, 4, 6, 7.5, 17.5, 135],
    ]
    wins.forEach( e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)  &&  (boxtext[e[2]].innerText === boxtext[e[1]].innerText)  &&  (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' - Won'
            gameover.play()
            isGameOver = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "350px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// GAME LOGIC

let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn
            turn = changeTurn()
            audioTurn.play()
            checkWin()
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
            }
        }
    })
})

// ADD ONCLICK LISTNER TO RESET
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ''
    })
    turn = 'X'
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector(".line").style.width = "0vw";

})