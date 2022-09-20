
let hasil = document.getElementById("hasil");
let history = document.getElementById("history");
let temp = null;

let equal = document.getElementById("samad");

function reset() {
    hasil.value = null;
    temp = null;
}
function tampil(val) {
    temp = null;
    document.getElementById("hasil").value +=val;
}
function tampilOperator(valu) {
    if (temp == null) {
        document.getElementById("hasil").value +=valu;
        temp = valu;
    }else{
        if (temp == valu) {
            return hasil.value;
        }else{
            hasil.value = (hasil.value).substring(0,((hasil.value).length)-1);
            document.getElementById("hasil").value +=valu;
            temp = valu;
        }
    }

    
}
function hapus() {
    hasil.value = (hasil.value).substring(0,((hasil.value).length)-1);
}

function samadengan() {
    hasil.value = eval(hasil.value);
    
}


