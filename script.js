console.log(" Welcome EveryOne! ");

let turn = "X"
const changeTurn = ()=>{
    return turn === "X"?"O":"X";
}
let GameOver = false;
const cheakWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if ( (boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "") ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " : Has Won The Match"
            GameOver = true;
        }
    })
}

const boxes = document.getElementsByClassName('box')

Array.from(boxes).forEach((ele)=>{
    const boxtext = ele.querySelector('.boxtext')
    ele.addEventListener('click' , ()=>{
        if (boxtext.innerText === '') {
            boxtext.innerText = turn
            turn = changeTurn()
            cheakWin()
            if (!GameOver) {
                document.getElementsByClassName('info')[0].innerText ="Turn For" + " "+ turn
            }
        }
    })
})

reset.addEventListener('click' , ()=>{
    let boxtext = document.querySelectorAll('.boxtext')
    Array.from(boxtext).forEach((ele)=>{
        ele.innerText=""
    })
   turn = "X";
   GameOver=false;
   document.getElementsByClassName('info')[0].innerText = "Turn For" +" " + turn

})