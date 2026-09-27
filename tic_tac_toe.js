let boxes=[...document.querySelectorAll('.box')];
let resetBtn=document.querySelector('#reset');
let turn0=true;
let newGameBtn=document.querySelector('#new-btn');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener('click',function(){
        if(turn0){
            box.innerText="0"
            box.style.color="green"
            turn0=false;
            box.disabled=true;
            checkWinner();
        }
        else{
            box.innerText="X";
            box.style.color="black";
            turn0=true;
            box.disabled=true;
            checkWinner();
        }
    });
});
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner=(winner)=>{
    msg.innerText=`congratulation winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
};

const checkWinner=()=>{
    let hasWin=false;
    for(let pattern of winpatterns){
        let pos1Value=boxes[pattern[0]].innerText;
        let pos2Value=boxes[pattern[1]].innerText;
        let pos3Value=boxes[pattern[2]].innerText;
    
    if(pos1Value!=="" && pos2Value!=="" && pos3Value!=="" && pos1Value===pos2Value && pos2Value===pos3Value){
        showWinner(pos1Value);
        hasWin=true;
        return;
    }
}
if(!hasWin){
    const allBoxes=[...boxes].every((box)=>box.innerText!=="");
    if(allBoxes){
        msgContainer.classList.remove('hide');
        msg.innerText="Match drawn"
    }
}
};

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add('hide');
};

newGameBtn.addEventListener('click',resetGame)
resetBtn.addEventListener('click',resetGame);