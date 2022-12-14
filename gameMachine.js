//Game MAchine
// A Machine to accept score as number input and give a remark.

const btn = document.querySelector("#btn");
const notice = document.querySelector("p");
const input = document.querySelector("input");
const remark = document.querySelector("h4");
const viewRemark = document.querySelector("#viewRemark");

//Create a function machineStatus to start and stop machine using a button.
function machineStatus() {
    if(btn.textContent === "Start Game machine"){
          btn.textContent = "Stop Game machine";
          notice.textContent = "The Game machine has started!"
          viewRemark.addEventListener("click", processRemark);
            
    } else{
          btn.textContent = "Start Game machine"
          notice.textContent = "The Game machine is stopped!.";
          viewRemark.addEventListener("click", machineStopped);
    } 
  }

//create a function machineStopped to stop processing inputs when machine is stopped.
function machineStopped(){
    if (notice.textContent === "The Game machine is stopped!."){
        remark.textContent = "Start Game Machine to Continue, The Game machine is stopped!.";
    } else{
        processRemark();
    }
}
//create a function processRemark to give remark for each range of inputted score.
function processRemark(){
    const choice = parseInt(input.value);
    if (choice < 0 || choice > 100){
        remark.textContent = "Please Insert a Valid Score between 0 and 100"
    }else if(choice < 20 && choice !== (' ')){
        remark.textContent = "Whoaaa You Can do Better!";
    }else if (choice < 40 && choice !== (' ')){
        remark.textContent = "You are Coming up!";
    }else if (choice < 60 && choice !== (' ')){
        remark.textContent = "Yey You are Doing Well!"
    }else if (choice < 80 && choice !== (' ')){
        remark.textContent = "Wow What a Good Score You Have There;";
    }else if (choice <= 100 && choice !== (' ')){
        remark.textContent = "Wowww What a Great Score You Nailed It!";
    }else {
        remark.textContent = "Please Insert A Valid Score!";
    }
}

btn.addEventListener("click", machineStatus);