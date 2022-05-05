st1 = document.getElementById("st1");
if (st1 === null) {
} else {
    var sheet = document.createElement('style'); 
    sheet.innerHTML = ".blur {color:red; filter:blur(2px);};"; 
    document.body.appendChild(sheet)
    st1.classList.add("blur");
}