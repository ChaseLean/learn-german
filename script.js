var rightSideBar = document.getElementById("right-sidebar");
var flipCard = document.getElementById("flip-card");
var meaning = document.getElementById("meaning");
var present = document.getElementById("present");
var past = document.getElementById("past");
var pastParticiple = document.getElementById("past-participle");

readStringFromFileAtPath = function (pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false)
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

var csv = readStringFromFileAtPath("german_words.csv");
var data = $.csv.toObjects(csv);
var hist = [];

var setValue = function () {
    var i = Math.floor(Math.random() * data.length);
    while (hist.slice(-3).includes(data[i])) {
        i = Math.floor(Math.random() * data.length);
    }
    var value = data[i];
    hist.push(value)

    meaning.innerHTML = value.Meaning;
    present.innerHTML = value.Present;
    past.innerHTML = value.Past;
    pastParticiple.innerHTML = value.PastParticiple;
}

var rotate = function () {
    if (flipCard.classList.contains("rotated")) {
        flipCard.classList.remove("rotated");
    }
    else {
        flipCard.classList.add("rotated");
    }
}

rightSideBar.onclick = setValue
flipCard.onclick = rotate

document.addEventListener('keydown', (e) => {
    e = e || window.event;
    if (e.key === "ArrowRight") {
        setValue();
    }
    else if (e.key == " ") {
        rotate();
    }
})

setValue();