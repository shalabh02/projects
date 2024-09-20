var arrowsContainer = document.getElementById("arrows");
var arrows;
var iamarrow = "<b>↑</b>";


function enableArrows(){
    arrowsContainer.style.display = "flex";
}


function createArrows(){
    arrowsContainer.innerHTML = "";
    for(let i = 0; i<size; i++){
        let div = document.createElement("div");
        div.innerHTML = ``;
        div.className = "arrow";
        div.style = "width:"+width+"%; height:100%; font-size:25px;";
        arrowsContainer.appendChild(div);
    }
    arrows = document.querySelectorAll(".arrow")
} 


function arrowDisplay(i, on){
    if(on==1)
    arrows[i].innerHTML = iamarrow;
    else
    arrows[i].innerHTML = "";
}

function visArrow(i, on, d){
    setTimeout(() => {
        arrowDisplay(i, on);
    }, currentDelay);
    if(d==1)
        currentDelay += delay;
}
