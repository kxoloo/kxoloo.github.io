
function numYazLar() {
    for (var i = 1; i < 11; i++) {
        var elemIDyaz = '#ul1';
        var elemIDnum = '#ul2';
        var words = toWords(i);
        $(elemIDyaz).append("<li id ='w" + i + "' >" + words + "</li>");
        $(elemIDnum).append("<li id='n" + i + "' >" + i + "</li>");
        $('#w' + i).data("index", {index: i});
        $('#n' + i).data("index", {index: i});
        $('#w' + i).droppable({drop: function(event, ui) {
                isabet(event, ui);
        }});
        $('#n' + i).draggable();
    }
}
;

function isabet(event, ui) {
    var ni = ui.draggable.attr("id");
    var wi = ui.droppable.attr("id");
    var wii = $('#' +wi);
    var nii = $('#' +ni);
    if(wii.data("index").index === nii.data("index").index) {
        alert('hello');
    }
}
