document.getElementById("NewAdviceButton").addEventListener("click", newAdvice);
document.getElementById("ViewSavedAdviceButton").addEventListener("click", savedAdvice);
document.getElementById("AbouttheCreatorButton").addEventListener("click", goAbout);
document.getElementById("gobackhome").addEventListener("click", goHome);
document.getElementById("gobackhomey").addEventListener("click", goHome);
document.getElementById("gobackhomeyy").addEventListener("click", goHome);
document.getElementById("clicktosaveadvice").addEventListener("click", save);
document.getElementById("clicktosaveadvice").addEventListener("click", sendAlert);
var url = "https://api.adviceslip.com/advice";
var advicee = [];

document.getElementById("NewAdvicePage").style.display = "none";
document.getElementById("SavedAdvicePage").style.display = "none";
document.getElementById("AboutPage").style.display = "none";

function getAdvice() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var realadvice = JSON.parse(this.responseText);
            advices = realadvice.slip.advice;
            console.log(advices);
            document.getElementById("generatedAdvice").innerHTML = advices;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

var xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var realadvice = JSON.parse(this.responseText);
            advices = realadvice.slip.advice;
            console.log(advices);
            document.getElementById("quote").innerHTML = advices;

        }
    };
    xhttp1.open("GET", url, true);
    xhttp1.send();

function save(e){
    e.preventDefault();
    console.log("saved");
    const generatedAdvice = document.getElementById("generatedAdvice");
    const adviceText = generatedAdvice.textContent;
    const adviceListItem = document.createElement("li");
    adviceListItem.textContent = adviceText;
    adviceListItem.id = "ali";
    const items = document.getElementById("items");
    items.appendChild(adviceListItem);
}

function sendAlert(){
    alert("Your advice has been successfully saved.  View your saved advice to see it!")
}

function newAdvice(e){
    e.preventDefault();
    console.log("in newAdvice");

    var trial = document.getElementById("DiscoverNewAdviceButton");
    trial.addEventListener("click", getAdvice);
    console.log("after trial");
    // document.getElementById("generatedAdvice").innerHTML = wordshaha;
    console.log("after innerHTML");


    document.getElementById("homepage").style.display = "none";
    document.getElementById("SavedAdvicePage").style.display = "none";
    document.getElementById("NewAdvicePage").style.display = "";
    document.getElementById("AboutPage").style.display = "none";

}

function savedAdvice(e){
    e.preventDefault();

    document.getElementById("homepage").style.display = "none";
    document.getElementById("SavedAdvicePage").style.display = "";
    document.getElementById("NewAdvicePage").style.display = "none";
    document.getElementById("AboutPage").style.display = "none";

}

function goAbout(e){
    e.preventDefault();

    document.getElementById("homepage").style.display = "none";
    document.getElementById("SavedAdvicePage").style.display = "none";
    document.getElementById("NewAdvicePage").style.display = "none";
    document.getElementById("AboutPage").style.display = "";

}

function goHome(e){
    e.preventDefault();

    document.getElementById("homepage").style.display = "";
    document.getElementById("SavedAdvicePage").style.display = "none";
    document.getElementById("NewAdvicePage").style.display = "none";
    document.getElementById("AboutPage").style.display = "none";
}