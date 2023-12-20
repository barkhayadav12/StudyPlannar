document.querySelector(".writebtn").onclick=function()
{
    document.querySelector(".container").style.display="block";
    
}
document.querySelector("#addbtn").onclick=function()
{
    document.querySelector(".container").style.display="none";
    let text=document.querySelector(".input").value;
    document.querySelector(".content").innerHTML+=
    `
    <div class="notes">
    <p class="noteContent">${text}</p>
    </div>
    `
    let currentTask=document.querySelectorAll(".notes");
        for(let i=0; i<currentTask.length; i++){
            currentTask[i].ondblclick=function(){
                this.remove();
            }
        }
    document.querySelector(".input").value="";
    
}
document.querySelector("#closebtn").onclick=function()
{
    document.querySelector(".container").style.display="none";
}