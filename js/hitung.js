function kosong1() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
}
function kosong2() {
    let frm = document.getElementById("formulir");
    frm.a2.value = "";
}
function kosongAll() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
    frm.a2.value = "";
    frm.hasil.value = "";
    
}
function hitung(operasi){
    let a1 = document.formulir.a1;
    let a2= document.formulir.a2;

    let hasil= document.formulir.hasil;
    if(isNaN(a1.value)|| a1.value==""||isNaN(a2.value)||a2.value==""){
        alert("Masukkan Angka!");
    }else{
        if(operasi == '+'){
            hasil.value=Number(a1.value) + Number(a2.value);
        }
        else if(operasi =='-'){
            hasil.value=Number(a1.value) - Number(a2.value);
        } else if(operasi =='*'){
            hasil.value=Number(a1.value) * Number(a2.value);
         } else if(operasi =='/'){
            hasil.value=Number(a1.value) / Number(a2.value);
        } else if(operasi =='**'){
             hasil.value=Number(a1.value) ** Number(a2.value);
        }
    }
}