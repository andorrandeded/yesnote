function savee(){
codena = document.querySelector("#thecode").value;
if(codena==""){
document.getElementById("nothing").innerText="enter code imporant"

}else{
 m =  document.getElementById("text").value;
if(m==""){
document.getElementById("nothing").innerText="??!!"
}else{

a = document.getElementById("text").value;

thecode = document.getElementById("thecode").value;

localStorage.setItem(thecode,a);

setTimeout (function(){
document.getElementById("text3").innerText="....";
},400);
setTimeout (function(){
document.getElementById("text3").innerText="done!";
},900);


}
}
}
function mysaved(){

document.getElementById("text3").innerText="";

var input =document.createElement("input");
input.placeholder= "your code to get your note...";
input.size="50"
input.id="codeagain"
input.style="margin: 0px; width: 500px; height: 30px;position:absolute;height: 30px;left: calc(0.5% );"


var body = document.getElementsByTagName("body")[0];
body.appendChild(input);



var button =document.createElement("button");
button.innerHTML = "get the note now";



var body = document.getElementsByTagName("body")[0];
body.appendChild(button);


button.addEventListener ("click", function() {

c = document.querySelector("#codeagain").value;
if(localStorage.getItem(c)!=null){
document.getElementById("text").value=localStorage.getItem(c);
}else{
document.getElementById("nothing").innerText="can not be founded"

}
});


}
