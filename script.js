console.log("Tic Tac Toe Fun Game")
let music = new Audio("")
let tune = new Audio("")
let gameover = new Audio("")
let turn = "X"
let isgameover = false
let colorx = "red"
let colory = "white"

const changeTurn=()=>{
    return turn ==="X"?"O": "X"
}
const changeColorx=()=>{
    return colorx ==="red"?"white": "red"
}
const changeColory =()=>{
    return colory ==="white"?"red": "white"
}

const checkwin =()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2,5,5,0],
        [3,4,5,5,10,15],
        [6,7,8,5,15,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.infowin').innerText = boxtext[e[0]].innerText +" Won "
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width="20vw"
            document.querySelector(".container").style.background="grey"
            

        }

    })
}

// logic for game
music.play()
let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element =>{
        let boxtext = element.querySelector('.boxtext');
        element.addEventListener('click',()=>{
            if(boxtext.innerText === ''){
                if(isgameover===true){
                    boxtext.innerText = "";
                }else{
                boxtext.innerText = turn;
                turn = changeTurn();
                colorx = changeColorx();
                colory = changeColory();
                tune.play();
                checkwin();
                if(!isgameover){
                   // document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                   document.querySelector(".infox").style.background=colorx
                   document.querySelector(".infoy").style.background=colory

                    

                }
            }
               

            }
        })
    })

    reset.addEventListener('click', ()=>{
        let boxtexts = document.querySelectorAll('.boxtext');
        Array.from(boxtexts).forEach(element =>{
            element.innerText = ""
        });
        turn = "X"
        colorx="red"
        colory="white"
        isgameover = false
            document.getElementsByClassName("infowin")[0].innerText = "";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
            document.querySelector(".line").style.width="0"
            document.querySelector(".container").style.background="white"
            document.querySelector(".infox").style.background=colorx
            document.querySelector(".infoy").style.background=colory
        
    })
    let date = new Date;
    let mon= date.getMonth()
    let month =['jan','feb','mar']
    const i = mon - 8;
    console.log(month[i]);







