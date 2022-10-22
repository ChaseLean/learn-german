var rightSideBar = document.getElementById("right-sidebar");
var flipCard = document.getElementById("flip-card");
var meaning = document.getElementById("meaning");
var present = document.getElementById("present");
var past = document.getElementById("past");
var pastParticiple = document.getElementById("past-participle");

readStringFromFileAtPath = function(pathOfFileToReadFrom)
    {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }


var values = eval(readStringFromFileAtPath ( "words.txt" ));
var words = [present, past, pastParticiple];
var hist = [];

var setValue = function() {
    var i = Math.floor(Math.random() * values.length);
    while(hist.slice(-3).includes(values[i])){
        i = Math.floor(Math.random() * values.length);
    }
    var value = values[i];
    hist.push(value)

    meaning.innerHTML = value[0];
    present.innerHTML = value[1];
    past.innerHTML = value[2];
    pastParticiple.innerHTML = value[3];
}

rightSideBar.onclick = function() {
    setValue();
}

flipCard.onclick = function() {
    if(flipCard.classList.contains("rotated")){
        flipCard.classList.remove("rotated");
    }
    else{
        flipCard.classList.add("rotated");
    }
}

setValue();