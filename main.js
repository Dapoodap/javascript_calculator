
let val = document.getElementById("val");

function onoff() {
    
}
function reset() {
    val.value = null;
}
function tampil(val) {
    document.getElementById("val").value +=val;
}

function del() {
    val.value = (val.value).substring(0,((val.value).length)-1);
}

function equal() {
    if (val. value == "") {
        alert("empty formula")
    }else{
        try {
            val.value = eval(val.value);
        } catch (err) {
            alert("wrong formula, or try using '(_)'")
        }
    }
}

