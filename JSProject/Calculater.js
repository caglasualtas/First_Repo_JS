
function base2ConvertBase10(number, initialBase) {
    let changeBase = 10;
    return parseInt(number + '', initialBase).toString(changeBase);

}
function base2ConvertBase8(number, initialBase) {

    let changeBase = 8;
    return parseInt(number + '', initialBase).toString(changeBase);

}
function base2ConvertBase16(number, initialBase) {
    let changeBase = 16;
    return parseInt(number + '', initialBase).toString(changeBase);

}
function base10ConvertBase2(number, initialBase) {
    let changeBase = 2;
    return parseInt(number + '', initialBase).toString(changeBase);

}
function base10ConvertBase8(number, initialBase) {
    let changeBase = 8;
    return parseInt(number + '', initialBase).toString(changeBase);
}
function base10ConvertBase16(number, initialBase) {
    let changeBase = 2;
    return parseInt(number + '', initialBase).toString(changeBase);

}
function base8ConvertBase2(number, initialBase) {
    let changeBase = 2;
    return parseInt(number + '', initialBase).toString(changeBase);

}
function base8ConvertBase10(number, initialBase) {
    let changeBase = 2;
    return parseInt(number + '', initialBase).toString(changeBase);

}
function base8ConvertBase16(number, initialBase) {
    let changeBase = 2;
    return parseInt(number + '', initialBase).toString(changeBase);

}
function base16ConvertBase2(number, initialBase) {
    let changeBase = 2;
    return parseInt(number + '', initialBase).toString(changeBase);

}
function base16ConvertBase10(number, initialBase) {
    let changeBase = 2;
    return parseInt(number + '', initialBase).toString(changeBase);

}
function base16ConvertBase8(number, initialBase) {
    let changeBase = 2;
    return parseInt(number + '', initialBase).toString(changeBase);

}
function ekle(sayi) {
    let yId = document.getElementById('yazılan');
    if (yId.innerText == 0) {
        yId.innerText = sayi;
    } else {
        yId.innerText += sayi;
    }
}
function silme() {
    let sonucId = document.getElementById('sonuc');
    sonucId.innerText = "";
    let yazılanId = document.getElementById('yazılan');
    yazılanId.innerText = "";
}
function tekSilme() {
    let txt = document.getElementById('yazılan');
    txt.innerText = txt.innerText.substring(0, txt.innerText.length - 1);

}
function showBin() {
    let element1 = document.querySelector('#iki');
    let element2 = document.querySelector('#uc');
    let element3 = document.querySelector('#dort');
    let element4 = document.querySelector('#bes');
    let element5 = document.querySelector('#alti');
    let element6 = document.querySelector('#yedi');
    let element7 = document.querySelector('#sekiz');
    let element8 = document.querySelector('#dokuz');
    let element9 = document.querySelector('#A');
    let element10 = document.querySelector('#B');
    let element11 = document.querySelector('#C');
    let element12 = document.querySelector('#D');
    let element13 = document.querySelector('#E');
    let element14 = document.querySelector('#F');

    let yId = document.getElementById('yazılan');
    let sId = document.getElementById('sonuc');
    yId.innerHTML = "";
    sId.innerHTML = "";
    if (element1.style.display == "" || element2.style.display == ""
        || element3.style.display == "" || element4.style.display == ""
        || element5.style.display == "" || element6.style.display == ""
        || element7.style.display == "" || element8.style.display == "" ||
        element9.style.display == "" || element10.style.display == ""
        || element11.style.display == "" || element12.style.display == ""
        || element13.style.display == "" || element14.style.display == "") {
        element1.style.display = "none";
        element2.style.display = "none";
        element3.style.display = "none";
        element4.style.display = "none";
        element5.style.display = "none";
        element6.style.display = "none";
        element7.style.display = "none";
        element8.style.display = "none";
        element9.style.display = "none";
        element10.style.display = "none";
        element11.style.display = "none";
        element12.style.display = "none";
        element13.style.display = "none";
        element14.style.display = "none";

    }

}
function showOct() {
    let element1 = document.querySelector('#A');
    let element2 = document.querySelector('#B');
    let element3 = document.querySelector('#C');
    let element4 = document.querySelector('#D');
    let element5 = document.querySelector('#E');
    let element6 = document.querySelector('#F');
    let element7 = document.querySelector('#iki');
    let element8 = document.querySelector('#uc');
    let element9 = document.querySelector('#dort');
    let element10 = document.querySelector('#bes');
    let element11 = document.querySelector('#alti');
    let element12 = document.querySelector('#yedi');
    let element13 = document.querySelector('#sekiz');
    let element14 = document.querySelector('#dokuz');
    let yId = document.getElementById('yazılan');
    let sId = document.getElementById('sonuc');
    yId.innerHTML = "";
    sId.innerHTML = "";

    if (element1.style.display == "" || element2.style.display == ""
        || element3.style.display == "" || element4.style.display == ""
        || element5.style.display == "" || element6.style.display == ""
        || element7.style.display == "" || element8.style.display == ""
        || element9.style.display == "" || element10.style.display == ""
        || element11.style.display == "" || element12.style.display == ""
        || element13.style.display == "" || element14.style.display == "") {
        element1.style.display = "none";
        element2.style.display = "none";
        element3.style.display = "none";
        element4.style.display = "none";
        element5.style.display = "none";
        element6.style.display = "none";
        element13.style.display = "none";
        element14.style.display = "none";

    } else if (element1.style.display == "none" || element2.style.display == "none"
        || element3.style.display == "none" || element4.style.display == "none"
        || element5.style.display == "none" || element6.style.display == "none"
        || element7.style.display == "none" || element8.style.display == "none"
        || element9.style.display == "none" || element10.style.display == "none"
        || element11.style.display == "none" || element12.style.display == "none"
        || element13.style.display == "none" || element14.style.display == "none") {

        element7.style.display = "";
        element8.style.display = "";
        element9.style.display = "";
        element10.style.display = "";
        element11.style.display = "";
        element12.style.display = "";




    }

}
function showHex() {
    let element1 = document.querySelector('#A');
    let element2 = document.querySelector('#B');
    let element3 = document.querySelector('#C');
    let element4 = document.querySelector('#D');
    let element5 = document.querySelector('#E');
    let element6 = document.querySelector('#F');
    let element7 = document.querySelector('#iki');
    let element8 = document.querySelector('#uc');
    let element9 = document.querySelector('#dort');
    let element10 = document.querySelector('#bes');
    let element11 = document.querySelector('#alti');
    let element12 = document.querySelector('#yedi');
    let element13 = document.querySelector('#sekiz');
    let element14 = document.querySelector('#dokuz');
    let yId = document.getElementById('yazılan');
    let sId = document.getElementById('sonuc');
    yId.innerHTML = "";
    sId.innerHTML = "";


    if (element1.style.display == "none" || element2.style.display == "none"
        || element3.style.display == "none" || element4.style.display == "none"
        || element5.style.display == "none" || element6.style.display == "none"
        || element7.style.display == "none" || element8.style.display == "none"
        || element9.style.display == "none" || element10.style.display == "none"
        || element11.style.display == "none" || element12.style.display == "none"
        || element13.style.display == "none" || element14.style.display == "none") {

        element1.style.display = "";
        element2.style.display = "";
        element3.style.display = "";
        element4.style.display = "";
        element5.style.display = "";
        element6.style.display = "";
        element7.style.display = "";
        element8.style.display = "";
        element9.style.display = "";
        element10.style.display = "";
        element11.style.display = "";
        element12.style.display = "";
        element13.style.display = "";
        element14.style.display = "";
    }

}
function showDec() {
    let element1 = document.querySelector('#A');
    let element2 = document.querySelector('#B');
    let element3 = document.querySelector('#C');
    let element4 = document.querySelector('#D');
    let element5 = document.querySelector('#E');
    let element6 = document.querySelector('#F');
    let element7 = document.querySelector('#iki');
    let element8 = document.querySelector('#uc');
    let element9 = document.querySelector('#dort');
    let element10 = document.querySelector('#bes');
    let element11 = document.querySelector('#alti');
    let element12 = document.querySelector('#yedi');
    let element13 = document.querySelector('#sekiz');
    let element14 = document.querySelector('#dokuz');
    let yId = document.getElementById('yazılan');
    yId.innerHTML = "";

    if (element1.style.display == "none" || element2.style.display == "none"
        || element3.style.display == "none" || element4.style.display == "none"
        || element5.style.display == "none" || element6.style.display == "none"
        || element7.style.display == "none" || element8.style.display == "none"
        || element9.style.display == "none" || element10.style.display == "none"
        || element11.style.display == "none" || element12.style.display == "none"
        || element13.style.display == "none" || element14.style.display == "none") {


        element7.style.display = "";
        element8.style.display = "";
        element9.style.display = "";
        element10.style.display = "";
        element11.style.display = "";
        element12.style.display = "";
        element13.style.display = "";
        element14.style.display = "";
    }
    else if (element1.style.display == "" || element2.style.display == ""
        || element3.style.display == "" || element4.style.display == ""
        || element5.style.display == "" || element6.style.display == ""
        || element7.style.display == "" || element8.style.display == ""
        || element9.style.display == "" || element10.style.display == ""
        || element11.style.display == "" || element12.style.display == ""
        || element13.style.display == "" || element14.style.display == "") {

        element1.style.display = "none";
        element2.style.display = "none";
        element3.style.display = "none";
        element4.style.display = "none";
        element5.style.display = "none";
        element6.style.display = "none";
    }

}
function getOperand(operand) {
    let yId = document.getElementById('yazılan');
    switch (operand){
        case '+':
            yId.innerText += '+';
            break;
        case '-':
            yId.value += '-';
            yId.innerText+='-';
            break;
        case '*':
            yId.innerText += '*';
            break;
        case '/':
            yId.innerText += '/';
            break;
        case '%':
            yId.innerText += '%';
            break;
    }

}
function hesapla(){
   	
		var input =document.getElementById('yazılan');
		var ans = Math.floor(+eval(input.value));
		document.getElementById('sonuc').value= '='+ans;
		var output = document.getElementById('cevap');

        

}
