// write js code here corresponding to matches.html

var data=JSON.parse(localStorage.getItem("schedule"));

display(data)


function display(data){
   document.querySelector("tbody").innerHTML=""
data.forEach(function(el){

var box=document.createElement("tr");
var td6=document.createElement("td");
td6.innerText=el.no

var td1=document.createElement("td")
td1.innerText=el.teamA

var td2=document.createElement("td")
td2.innerText=el.teamB


var td3=document.createElement("td")
td3.innerText=el.date


var td4=document.createElement("td")
td4.innerText=el.venue


var td5=document.createElement("td")
td5.innerText="Add as Favourites";
td5.style.color="green"
td5.style.cursor="pointer"
td5.addEventListener("click",function(){
    favfunction(el)
})
// var td6=document.createElement("td")

box.append(td6,td1,td2,td3,td4,td5,)

var print=document.querySelector("tbody");

print.append(box)

})
}

var favss=JSON.parse(localStorage.getItem("favourites"))||[]

function favfunction(el){

var check=favss.filter(function(che){
    return  el==che;
})

if(check.length==0){
    favss.push(el);
    localStorage.setItem("favourites",JSON.stringify(favss))
    alert("Match Added to favourites")
}
else{
    alert("Match Already In favourites")
}

}






function filtere(){
// console.log("me")
    var val=document.querySelector("#filterVenue").value

   var x= data.filter(function(card) {
        return card.venue==val
    });
   
display(x)
// window.location.reload();
}