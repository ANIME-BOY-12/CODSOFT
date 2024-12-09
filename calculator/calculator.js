let result = document.getElementById("result")

let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let b4=document.getElementById("b4");
let b5=document.getElementById("b5");
let b6=document.getElementById("b6");
let b7=document.getElementById("b7");
let b8=document.getElementById("b8");
let b9=document.getElementById("b9");
let b10=document.getElementById("b10");
let b11=document.getElementById("b11");
let b12=document.getElementById("b12");
let b13=document.getElementById("b13");
let b14=document.getElementById("b14");
let b15=document.getElementById("b15");
let b16=document.getElementById("b16");
let b17=document.getElementById("b17");
let b18=document.getElementById("b18");
let b19=document.getElementById("b19");
let b20=document.getElementById("b20");
let b21=document.getElementById("b21")
let b22=document.getElementById("b22")
let b23=document.getElementById("b23")
let b24=document.getElementById("b24")
let b25=document.getElementById("b25")
let b26=document.getElementById("b26")
let b27=document.getElementById("b27")
let b28=document.getElementById("b28")
let b29=document.getElementById("b29")
let b30=document.getElementById("b30")
let b31=document.getElementById("b31")
let b32=document.getElementById("b32")
let b33=document.getElementById("b33")
let b34=document.getElementById("b34")


let x=0;
let y=0;
let z=0;


let add0 = ()=>{
    result.innerHTML += 0;
    if(x==0){
    };
}
let add1 = ()=>{
    result.innerHTML += 1;
}
let add2 = ()=>{
    result.innerHTML += 2;
}
let add3 = ()=>{
    result.innerHTML += 3;
}
let add4 = ()=>{
    result.innerHTML += 4;
}
let add5 = ()=>{
    result.innerHTML += 5;
}
let add6 = ()=>{
    result.innerHTML += 6;
}
let add7 = ()=>{
    result.innerHTML += 7;
}
let add8 = ()=>{
    result.innerHTML += 8;
}
let add9 = ()=>{
    result.innerHTML += 9;
}
let addE = ()=>{
    result.innerHTML += 2.718281828459045;
}
let addPie = ()=>{
    result.innerHTML += 3.14159265359;
}


let point = ()=>{
    result.innerHTML += "."
}
let openBrac = ()=>{
    result.innerHTML += "("
}
let closeBrac = ()=>{
    result.innerHTML += ")"
}


let div = ()=>{
    result.innerHTML += "/"
    z=1;
}
let mul = ()=>{
    result.innerHTML += "*"
    z=1;
}
let add = ()=>{
    result.innerHTML += "+"
    z=1;
}
let sub = ()=>{
    result.innerHTML += "-"
    z=1;
}


let percent = ()=>{
    z=2;
    x= Number(result.innerHTML);
    result.innerHTML += "%";
}
let expo = ()=>{
    x= Number(result.innerHTML);
    result.innerHTML += "E Power"
    z=3;
}
let power = ()=>{
    x= Number(result.innerHTML);
    result.innerHTML += "Power "
    z=4;
}
let root = ()=>{
    result.innerHTML += "&#8730; "
    z=5;
}
let doLog = ()=>{
    result.innerHTML += "log"
    z=6;
}
let doLn = ()=>{
    result.innerHTML += "ln"
    z=7;
}
let fat=1;
let fact = ()=>{
    x= Number(result.innerHTML);
    result.innerHTML += "!"
    for(let i =x;i>0;i--){
        fat=fat*i;
    }
    console.log(fat);
    z=8;
}
let doSin = ()=>{
    result.innerHTML += "sin"
    z=9;
}
let doCos = ()=>{
    result.innerHTML += "cos"
    z=10;
}
let doTan = ()=>{
    result.innerHTML += "tan"
    z=11;
}
let doRound = ()=>{
    result.innerHTML += "Round"
    z=12;
}


let allClear = ()=>{
    result.innerHTML = ""
}

let equals = ()=>{
    if(z==1){
        document.getElementById("history").innerHTML+=result.innerHTML 
        result.innerHTML = eval(result.innerHTML);
        document.getElementById("history").innerHTML+=" = "+result.innerHTML + "</br>"
        z==0;
    }else if(z==2){
        document.getElementById("history").innerHTML+=result.innerHTML 
        y =(result.innerHTML.split("%"))[1];
        result.innerHTML=(x/100)*y
        document.getElementById("history").innerHTML+=" = "+result.innerHTML + "</br>"
        z==0;
    }else if(z==3){
        document.getElementById("history").innerHTML+=result.innerHTML
        y =(result.innerHTML.split("E Power"))[1];
        result.innerHTML=Math.exp(y)
        document.getElementById("history").innerHTML+=" = "+result.innerHTML + "</br>"
        z==0;
    }else if(z==4){
        document.getElementById("history").innerHTML+=result.innerHTML
        y =(result.innerHTML.split("Power"))[1];
        result.innerHTML=Math.pow(x,y)
        document.getElementById("history").innerHTML+=" = "+result.innerHTML + "</br>"
        z==0;
    }else if(z==5){
        document.getElementById("history").innerHTML+=result.innerHTML
        y =(result.innerHTML.split(" "))[1];
        result.innerHTML=Math.sqrt(y)
        document.getElementById("history").innerHTML+=" = "+result.innerHTML + "</br>"
        z==0;
    }
    else if(z==6){
        document.getElementById("history").innerHTML+=result.innerHTML
        y =(result.innerHTML.split("log"))[1];
        result.innerHTML=Math.log10(y)
        document.getElementById("history").innerHTML+=" = "+result.innerHTML + "</br>"
        z==0;
    }
    else if(z==7){
        document.getElementById("history").innerHTML+=result.innerHTML
        y =(result.innerHTML.split("ln"))[1];
        result.innerHTML=Math.log(y)
        document.getElementById("history").innerHTML+=" = "+result.innerHTML + "</br>"
        z==0;
    }
    else if(z==8){
        document.getElementById("history").innerHTML+=result.innerHTML
        result.innerHTML=fat;
        document.getElementById("history").innerHTML+=" = "+result.innerHTML + "</br>"
        fat=1;
        z==0;
    }
    else if(z==9){
        document.getElementById("history").innerHTML+=result.innerHTML
        y =(result.innerHTML.split("sin"))[1];
        result.innerHTML=Math.sin(y)
        document.getElementById("history").innerHTML+=" = "+result.innerHTML + "</br>"
        z==0;
    }
    else if(z==10){
        document.getElementById("history").innerHTML+=result.innerHTML
        y =(result.innerHTML.split("cos"))[1];
        result.innerHTML=Math.sin(y)
        document.getElementById("history").innerHTML+=" = "+result.innerHTML + "</br>"
        z==0;
    }
    else if(z==11){
        document.getElementById("history").innerHTML+=result.innerHTML
        y =(result.innerHTML.split("tan"))[1];
        result.innerHTML=Math.sin(y)
        document.getElementById("history").innerHTML+=" = "+result.innerHTML + "</br>"
        z==0;
    }
    else if(z==12){
        document.getElementById("history").innerHTML+=result.innerHTML
        y =(result.innerHTML.split("Round"))[1];
        result.innerHTML=Math.round(y)
        document.getElementById("history").innerHTML+=" = "+result.innerHTML + "</br>"
        z==0;
    }
}

let changeEverything = ()=>{
    
}
