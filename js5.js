
function numYaz() {
    for (var i = 1; i < 11; i++) {
        var elemIDyaz = '#ul1';
        var words = toWords(i);
        $(elemIDyaz).append("<li id ='w" + i + "' >" + words + "</li>");
        $('#w' + i).droppable();
    }
}
;

function numLar() {
    for (var i = 1; i < 11; i++) {
        var elemIDnum = '#ul2';
        $(elemIDnum).append("<li id='n" + i + "' >" + i + "</li>");
        $('#n' + i).draggable();
    }
}
;