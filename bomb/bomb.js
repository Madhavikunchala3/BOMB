let headingElement=document.getElementById("count");
let headingtwo=document.getElementById("heading2");
let containerElement=document.getElementById("container")
let userpasscode=document.getElementById("userinput");
let numbercount=15;
function changecount(){
    numbercount=numbercount-1;
    headingElement.textContent=numbercount;
    if (numbercount===0){
        containerElement.style.backgroundColor="red";
        headingtwo.textContent="BOOM"
        clearInterval(stopcount);
        
    }
    

}


let stopcount =setInterval(changecount,1000);
function passfunction(event){
    if(userpasscode.value==="1234" && numbercount>0 && event.key==="Enter" ){
        headingtwo.textContent="YOU ARE SAFE!!"
        headingtwo.style.color="green"


        clearInterval(stopcount);
    }

}
userpasscode.addEventListener("keydown",passfunction);