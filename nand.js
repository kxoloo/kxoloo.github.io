/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function and(a,b){
    return a&b;
}

function orwithnands(a,b) {
                if (((!a) && (!b)))
                return false;
            return true;
            }
            $().ready(function() {
            var r = orwithnands(false,false);
            $('#res').append("0,0 -> " + r + "<br/>");
            r = orwithnands(false,true);
            $('#res').append("0,1 -> " + r + "<br/>");
            r = orwithnands(true,false);
            $('#res').append("1,0 -> " + r + "<br/>");
            r = orwithnands(true,true);
            $('#res').append("1,1 -> " + r + "<br/>");
        });