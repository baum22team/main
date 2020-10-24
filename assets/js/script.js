var timerid;
var obj;
var visible = false;
function toggleFade(objectName) {
    obj = document.getElementById(objectName);
    if (obj) {
        clearTimeout(timerid);
        if (visible) {
            hideFade(100);
            visible = false;
        }
        else {  
            showFade(0);
            visible = true;
        }
    }
}

function hideFade(opac) {
    if (obj) {
        if (opac > 0) {
            obj.style.opacity = (opac / 100);
            obj.style.filter = "alpha(opacity=" + opac + ")";
            timerid = setTimeout("hideFade(" + (opac - 10) + ")",50);
        }
        else {
            obj.style.visibility = "hidden";
            obj.style.opacity = 1;
            obj.style.filter = "alpha(opacity=100)";
            clearTimeout(timerid);
        }
    }
}

function showFade(opac) {
    if (obj) {
       if (opac < 100) {
            obj.style.visibility = "visible";
            obj.style.opacity = (opac / 100);
            obj.style.filter = "alpha(opacity=" + opac + ")";
            timerid = setTimeout("showFade(" + (opac + 10) + ")",50);
        }
       else {
            obj.style.opacity = 1;
            obj.style.filter = "alpha(opacity=100)";
            clearTimeout(timerid);
        }
    }
}
