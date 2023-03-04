const a=document.getElementById("a");
const b=document.getElementById("b");
const c=document.getElementById("c");
const d=document.getElementById("d");
const e=document.getElementById("e");
const f=document.getElementById("f");
const g=document.getElementById("g");
const h=document.getElementById("h");
const i=document.getElementById("i");
const reset=document.getElementById("reset");

let char=true;

class Mark{
    constructor(para) {
        this.para=para; 
    }

    mark(){
        if(char==true){
            this.para.innerHTML="X";
            char=false;

        }
        else {
            this.para.innerHTML="O";
            char=true;
        }
        
    
    }

}

function turnShower() {
    if(char==true) {
        document.getElementById("turnShower").textContent="X's turn "
    } else {
        document.getElementById("turnShower").textContent="O's turn "

    }
}

window.addEventListener("click", ()=> {
    turnShower();
})
a.addEventListener("click", ()=> {
    const aObj=new Mark(a);
    aObj.mark();
    
});

b.addEventListener("click", ()=> {
    const bObj=new Mark(b);
    bObj.mark();
});
c.addEventListener("click", ()=> {
    const cObj=new Mark(c);
    cObj.mark();
});
d.addEventListener("click", ()=> {
    const dObj=new Mark(d);
    dObj.mark();
});
e.addEventListener("click", ()=> {
    const eObj=new Mark(e);
    eObj.mark();
});
f.addEventListener("click", ()=> {
    const fObj=new Mark(f);
    fObj.mark();
});
g.addEventListener("click", ()=> {
    const gObj=new Mark(g);
    gObj.mark();
});
h.addEventListener("click", ()=> {
    const hObj=new Mark(h);
    hObj.mark();
});
i.addEventListener("click", ()=> {
    const iObj=new Mark(i);
    iObj.mark();
});

reset.addEventListener("click", ()=> {
    location.reload();
})