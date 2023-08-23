let buttons=Array.from(document.querySelectorAll(".button"))
let show=document.querySelector(".page2")
let restart=document.querySelector(".reset")
let newgame=document.querySelector("#play")
let rzlt=document.querySelector("#result")
count=0;
xturn=true;
buttons.forEach((element)=>{
        element.addEventListener("click", (e)=>{
            if(e.target.innerText===''){
                if (xturn){
                    xturn=false;
                    element.innerText='X';
                }
                else{
                    xturn=true;
                    element.innerText="O"
                }
                count+=1
                console.log(count)
        draw();
        winCheck();
        }
        })
    })
const disablebuttons=()=>{
    buttons.forEach((element)=>(element.disabled=true));
    show.classList.remove("hide");
}
const draw=()=>{
    if(!winCheck()){
        if(count===9){
           disablebuttons()
           rzlt.innerHTML="\uD83D\uDE42<br>IT IS A DRAW!"
        }
    }
}
let winCondition=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const winCheck=()=>{
    for(let i=0;i<winCondition.length; i++){
        const [box1,box2,box3]=winCondition[i]
        if(buttons[box1].innerText!==''&& buttons[box1].innerText===buttons[box2].innerText && buttons[box2].innerText===buttons[box3].innerText){
            disablebuttons();
            if(buttons[box1].innerText==="X" && buttons[box2].innerText==="X" && buttons[box3].innerText==="X"){
                rzlt.innerHTML="\uD83C\uDF89<br>X WON!"
            }
            else{
                rzlt.innerHTML="\uD83C\uDF89<br>O WON!"
            }
        }
    }
}

const enablebuttons=()=>{
    buttons.forEach((element)=>{
        element.disabled=false;
        element.innerText='';
    })
    show.classList.add("hide");
}
newgame.addEventListener("click",()=>{
    count=0
    enablebuttons()
})
restart.addEventListener("click",()=>{
    count=0
    enablebuttons()
})
