const submitButton = document.getElementById("submit");

submitButton.addEventListener ("click" , () => {
let password =document.getElementById("password").value;

if( password == "zodiac"){
    window.location.href = "./admin.html"; 
}
else{
    alert("You aren't an admin");
}
});