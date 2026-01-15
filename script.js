let boxes = document.querySelectorAll(".box");
let turnO=true;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let count =0;
let count2=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        check();
        if(count===9 && count2===0)
        reset();
})
})

const check=()=>{
    count=count+1;
    for(let pattern of win)
    {
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
            
        if(p1!=""&&p2!=""&&p3!="")
        {
            if(p1===p2 && p2===p3)
            {
             result(p1);
            }
       }
    }    
}

const result=(p1)=>{
    count2=count2+1;
    const Name=document.querySelector("#res");
    Name.innerText="Game Over!\n"+ p1 +" Won!!";
    Name.style.fontSize="3rem";
    Name.style.Padding="2rem";
    end();
}
const end=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
    reset();
    console.log(count);
    console.log(count2);
}

const reset=()=>{
    let el=document.createElement("button");
    let div=document.querySelector(".result");
    div.after(el);
    el.innerText="Reset";
    el.setAttribute("class","resBtn");
    el.style.fontSize = "2rem";
    el.style.padding = "1rem";
    let resultButton=document.querySelector(".resBtn");
    resultButton.addEventListener("click",()=>{
        const Name2=document.querySelector("#res");
        Name2.innerText="";
            for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
        el.remove()
        turnO=true;
        count=0;
        count2=0;
    })

    
}