// write js code here corresponding to favourites.html

var data=JSON.parse(localStorage.getItem("favourites"));

display(data)


function display(data){
    document.querySelector("tbody").innerHTML=""

data.forEach(function(el,i){

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
td5.innerText="Remove as Favourite";
td5.style.color="red"
td5.style.cursor="pointer"
td5.addEventListener("click",function(){
    delfunction(el,i)
})
// var td6=document.createElement("td")

box.append(td6,td1,td2,td3,td4,td5,)

var print=document.querySelector("tbody");

print.append(box)

})
}



function delfunction(el,i){

    data.splice(i,1)
    localStorage.setItem("favourites",JSON.stringify(data))
    display(data);
    // window.location.reload();
}






// function filtere(){
// // console.log("me")
//     var val=document.querySelector("#filterVenue").value

//    var x= data.filter(function(card) {
//         return card.venue==val
//     });
   
// display(x)
// // window.location.reload();
// }