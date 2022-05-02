// write js code here corresponding to index.html
// You should add submit event on the form


var form=document.querySelector("#masaiForm");
form.addEventListener("submit",myfunction);

var datas=JSON.parse(localStorage.getItem("schedule"))||[]
function myfunction(){
event.preventDefault();

var data={
    no:form.matchNum.value,
    teamA:form.teamA.value,
    teamB:form.teamB.value,
    date:form.date.value,
    venue:form.venue.value
}

datas.push(data);
localStorage.setItem("schedule",JSON.stringify(datas));

}