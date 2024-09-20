let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".btn");



let turnO = true;

const winpattern = [


    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click", ()=> {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO= false;


        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const checkwinner = ()=>{
    for(pattern of winpattern){
        console.log(pattern);
    }
}