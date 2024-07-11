let boxes=document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnx=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetgame = () => {
    turnx = true;
    enableboxes();
    msgContainer.classList.add("hide");
  };

const showwinner=(winner)=>{
    msg.innerText=`Congratulations, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes(); 
};

const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};




boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        /* console.log("box was clicked"); */
        if (turnx){
            box.innerText="X";
            turnx=false;
        }else{
            box.innerText="O";
            turnx=true;
        }
        box.disabled="true";

        checkwinner();
    });
});


const checkwinner=()=>{
    for (let pattern of winPatterns){
        /* console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText); 
        how is the value being stored for each array item of winpatterns?*/

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val==pos2val && pos2val==pos3val){
                /* console.log("winner", pos1val); */
                showwinner(pos1val);
            }
        }
    }
};


newGameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
