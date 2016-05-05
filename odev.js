var numText = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn'];
//var numText = ['null', 'eins', 'zwei'];
var numbers = [];
var numCorrect = 0;
var secLeft = 45;
var timer = null;
var truePoint = 0;
var falsePoint = 0;
var totalPoint = 0;

exports.Numbers = function(numbersCookie, numCorrectCookie) {
    console.log(numbersCookie);
    if (numCorrectCookie == null) {
        numCorrect = 0;
    } else {
        numCorrect = numCorrectCookie;
    }
    //numbers = [];
    if (numbersCookie == null) {
        for (var i = 0; i < numText.length; i++) {
            var number = new Number(numText[i], i, 0, false);
            //        console.log(number);
            numbers.push(number);
        }
    } else {
        numbers = numbersCookie;
    }
    this.initGame = initGame();
    console.log(numbers);
};

function Number(word, digit, errorNum, placed) {
    this.digit = digit;
    this.word = word;
    this.placed = placed;
    this.errorNum = errorNum;
}

function initGame() {
    console.log("initializing");
    var ulText = document.getElementbyId('#numName');
    var ulNum = document.getElementbyId('#numNumeric');
    for (var i = 0; i < numbers.length; i++) {
        ulText.append('<li id="t' + numbers[i].digit + '">' + numbers[i].word + '</li>');
        ulNum.append('<li id="n' + numbers[i].digit + '">' + numbers[i].digit + '</li>');
        if (numbers[i].placed) {
            document.getElementbyId("#n" + i).hide();
        }
    }
    
    addDragNDrop();
    startInterval();
}

function startInterval() {
    timer = setInterval(sayac,1000);
}

function addDragNDrop() {
    for (var i = 0; i < this.numbers.length; i++) {
        document.getElementbyId("#n" + i).data("index", {index: i});
        document.getElementbyId("#t" + i).data("index", {index: i});
        document.getElementbyId('#n' + i).draggable();
        document.getElementbyId("#t" + i).droppable({drop: function (event, ui) {
                checkPlacement(event, ui, this.id);
            }});
    }
}

function sayac(){
    document.getElementbyId('#timer').html('timer:' + secLeft);
    secLeft--;
}

function checkPlacement(event, ui, ti) {
    var ni = ui.draggable.attr("id");
    var niElem = document.getElementById('#' + ni);
    var tiElem = document.getElementById('#' + ti);
    if (niElem.data("index").index === tiElem.data("index").index) {
        niElem.draggable("disable");
        niElem.css("display", "none");
        numbers[niElem.data("index").index].placed = true;
        numCorrect++;
    if (numCorrect === 11) {
        stopInterval();
        totalPoint = (parseInt(truePoint + 1)*5) + (parseInt(falsePoint)*-1) + (parseInt(secLeft));
        document.getElementById('#point').html(parseInt(totalPoint));
    }
        checkPlacementStatus();
        truePoint++;
    } else {
        var dimx = document.getElementsByName('body').width();
        var dimy = document.getElementsByName('body').height();
        var left = Math.floor((Math.random() * (dimx - 20)) + 10);
        var top = Math.floor((Math.random() * (dimy - 20)) + 10);
        niElem.css("left", left + "px");
        niElem.css("top", top + "px");
        numbers[niElem.data("index").index].errorNum++;
        falsePoint++;
    }
    setCookies();
}

 function setCookies() {
    Cookies.set('numbers', numbers, {expires: 128});
    Cookies.set('numCorrect', numCorrect, {expires: 128});
}

function checkPlacementStatus() {
    if (numCorrect === numbers.length) {
        initSorting();
    }
}

function stopInterval() {
    clearInterval(timer);
}

function initSorting() {
    document.getElementsByName('ul').randomize();
    document.getElementById('#numName').sortable({
        start: function (event, ui) {
        },
        update: function (event, ui) {
            var ordered = 0;
            for (var j = 0; j < numText.length; j++) {
                if (document.getElementById('#t' + j).index() == j)
                    ordered++;
            }
            if (ordered == numText.length)
                alert("Your score is =" + totalPoint);
        }
    });
}







