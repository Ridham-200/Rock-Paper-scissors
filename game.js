let uscore=0;
let cscore=0;
const choices=document.querySelectorAll(".choice");
const m=document.querySelector("#msg");
const user=document.querySelector("#user");
const comp=document.querySelector("#comp");
const generate=()=>{
    const options=["rock","paper","scissor"];
    const index=Math.floor(Math.random()*3);
    return options[index];
};
const draw=()=>{
    console.log("game was draw");
    m.innerText="draw";
};
const showwinner=(userwin)=>{
if(userwin)
{console.log("you won");
m.innerText="you won";
uscore++;
user.innerText=uscore;
}
else
{
    console.log("you lost");
m.innerText="you lost try again";
cscore++;
comp.innerText=cscore;
}

};
const playgame=(uchoice)=>{
    console.log("usr choice",uchoice);
    const compchoice=generate();
    console.log("computer choice",compchoice);
    if(compchoice===uchoice) {draw();}
    else{
        let userwin=true;
        if(uchoice==="rock")
        {
        userwin=compchoice==="paper"?false:true;
        }
        else if(uchoice==="paper")
        {
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin);
    }

}
choices.forEach((v)=>{
v.addEventListener("click",()=>{
    const uchoice=v.getAttribute("id");
    
    playgame(uchoice);
});
});