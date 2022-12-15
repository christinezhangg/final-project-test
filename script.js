document.getElementById("NewAdviceButton").addEventListener("click", newAdvice);
document.getElementById("ViewSavedAdviceButton").addEventListener("click", savedAdvice);
document.getElementById("AbouttheCreatorButton").addEventListener("click", goAbout);
document.getElementById("gobackhome").addEventListener("click", goHome);
document.getElementById("gobackhomey").addEventListener("click", goHome);
document.getElementById("gobackhomeyy").addEventListener("click", goHome);
var url = "https://api.adviceslip.com/advice";
var advicee = [];

document.getElementById("NewAdvicePage").style.display = "none";
document.getElementById("SavedAdvicePage").style.display = "none";
document.getElementById("AboutPage").style.display = "none";

function getAdvice(i) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var realadvice = JSON.parse(this.responseText);
            advices = realadvice.slip.advice;
            console.log(advices);
            document.getElementById("quote").innerHTML = advices;
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

function newAdvice(e){
    e.preventDefault();

    document.getElementById("DiscoverNewAdviceButton").addEventListener("click", getAdvice);


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