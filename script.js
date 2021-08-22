
// //counter using html and Js

// function inc() {
//     let incnum = document.getElementById("num");
//     let initialnum = incnum.innerText;
//     let updatednum = parseInt(initialnum) + 1;
//     incnum.innerHTML = updatednum;
// }

// function dec() {
//     let incnum = document.getElementById("num");
//     let initialnum = incnum.innerText;
//     let updatednum = parseInt(initialnum) - 1;
//     incnum.innerHTML = updatednum;
// }

// function reset() {
//     let incnum = document.getElementById("num");
    
//     incnum.innerHTML = 0;
// }



// Using JS only

let main1 = document.getElementById("main");
let heading1 = document.createElement("h1");
heading1.innerHTML = 0;
heading1.setAttribute("id", "num")
let buttoninc = document.createElement("button");
buttoninc.innerHTML = "Increment";
buttoninc.setAttribute("onclick", "inc()");
let buttondec = document.createElement("button");
buttondec.innerHTML = "Decrement";
buttondec.setAttribute("onclick", "dec()");
let buttonreset = document.createElement("button");
buttonreset.innerHTML = "Reset";
buttonreset.setAttribute("onclick", "reset()");
main.appendChild(heading1);
main.appendChild(buttoninc);
main.appendChild(buttondec);
main.appendChild(buttonreset);


function inc() {
    let incnum = document.getElementById("num");
    let initialnum = incnum.innerText;
    let updatednum = parseInt(initialnum) + 1;
    incnum.innerHTML = updatednum;
}

function dec() {
    let incnum = document.getElementById("num");
    let initialnum = incnum.innerText;
    let updatednum = parseInt(initialnum) - 1;
    incnum.innerHTML = updatednum;
}

function reset() {
    let incnum = document.getElementById("num");
    
    incnum.innerHTML = 0;
}



