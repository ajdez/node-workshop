// First Program


console.log("Hello World!");
setTimeout(x => console.log("Hello World Again!!"), 10000);


//A wild interval has appeared!


function printIt (){
    console.log("hi");
    setTimeout(printIt, 2000);
}

printIt();





