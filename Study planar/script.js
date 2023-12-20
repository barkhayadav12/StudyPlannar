var plan=document.querySelector(".addMore");
var schedule=document.querySelector(".scheduleTime");
plan.onclick=function()
{
    schedule.innerHTML+=
   `
    <div class="timing">
       <input class="small"><input class="big">
   </div>`
}
document.querySelector(".addReminder").onclick=function()
{
    var reminder=prompt("Add Reminder......");
    if(reminder!=null)
    {
    document.querySelector(".reminder").innerHTML+=
    `
    <li>${reminder}</li>`
    }
}
document.querySelector(".addNote").onclick=function()
{
    var reminder=prompt("Add Note......");
    if(reminder!=null)
    {
    document.querySelector(".notes").innerHTML+=
    `<li>${reminder}</li>`;
    }
    
}
document.querySelector(".addTopic").onclick=function()
{ document.querySelector(".todo").innerHTML+=
   `<div class="a">
                <input class="b">
                <input type="checkbox">
            </div>`
}
document.querySelector(".addTomorrowTask").onclick=function()
{
    var reminder=prompt("Add Tomorrow's Task.....");
    if(reminder!=null)
    {
    document.querySelector(".tomorrowTask").innerHTML+=
    `<li>${reminder}</li>`
    }
    
}
document.querySelector(".finish").onclick=function()
{
    document.querySelector(".addMore").style.display="none";
    document.querySelector(".addReminder").style.display="none";
    document.querySelector(".addNote").style.display="none";
    document.querySelector(".addTopic").style.display="none";
    document.querySelector(".addTomorrowTask").style.display="none";
   

}
document.querySelector(".makeNew").onclick=function()
{
    document.querySelector(".addMore").style.display="block";
    document.querySelector(".addReminder").style.display="block";
    document.querySelector(".addNote").style.display="block";
    document.querySelector(".addTopic").style.display="block";
    document.querySelector(".addTomorrowTask").style.display="block";
   

}