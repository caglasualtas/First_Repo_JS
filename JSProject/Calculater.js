function ekle(value) {
    let options = document.getElementsByName('choices');
    let yazılan = document.getElementById('yazılan');
    let number = document.getElementById('yazılan').innerText;
    let i = 0;
    if (number.length == 1 && number == 0) {
        yazılan.innerHTML = value;
        if (options[0].checked == false && options[1].checked == false &&
            options[2].checked == false && options[3].checked == false) {
            base10Convertion(yazılan.innerHTML);
        } else {
            for (i = 0; i < options.length; i++) {
                if (options[i].value == '2' && options[i].checked) {
                    base2Convertion(yazılan.innerHTML);
                } else if (options[i].value == '8' && options[i].checked) {
                    base8Convertion(yazılan.innerHTML);
                } else if (options[i].value == '10' && options[i].checked) {
                    base10Convertion(yazılan.innerHTML);
                } else if (options[i].value == '16' && options[i].checked) {
                    base16Convertion(yazılan.innerHTML);
                }
            }

        }
    }
    else {
        yazılan.innerHTML += value;
        if (options[0].checked == false && options[1].checked == false &&
            options[2].checked == false && options[3].checked == false) {
            base10Convertion(yazılan.innerHTML);
        } else {
            for (i = 0; i < options.length; i++) {
                if (options[i].value == '2' && options[i].checked) {
                    base2Convertion(yazılan.innerHTML);
                } else if (options[i].value == '8' && options[i].checked) {
                    base8Convertion(yazılan.innerHTML);
                } else if (options[i].value == '10' && options[i].checked) {
                    base10Convertion(yazılan.innerHTML);
                } else if (options[i].value == '16' && options[i].checked) {
                    base16Convertion(yazılan.innerHTML);
                }
            }

        }
    }
}
function sil() {
    let yazılan = document.getElementById('yazılan');
    let sonuc = document.getElementById('sonuc');
    let base2 = document.getElementById('basesDivB');
    let base8 = document.getElementById('basesDivO');
    let base10 = document.getElementById('basesDivD');
    let base16 = document.getElementById('basesDivH');
    yazılan.innerText = "";

    base2.innerText = "";
    base8.innerText = "";
    base10.innerText = "";
    base16.innerText = "";
}
function tekSil() {
    let options = document.getElementsByName('choices');
    let yazılan = document.getElementById('yazılan');

    yazılan.innerText = yazılan.innerText.substring(0, yazılan.innerText.length - 1);

    if (options[0].checked == false && options[1].checked == false &&
        options[2].checked == false && options[3].checked == false) {
        base10Convertion(yazılan.innerHTML);
    } else {
        for (i = 0; i < options.length; i++) {
            if (options[i].value == '2' && options[i].checked) {
                base2Convertion(yazılan.innerHTML);
            } else if (options[i].value == '8' && options[i].checked) {
                base8Convertion(yazılan.innerHTML);
            } else if (options[i].value == '10' && options[i].checked) {
                base10Convertion(yazılan.innerHTML);
            } else if (options[i].value == '16' && options[i].checked) {
                base16Convertion(yazılan.innerHTML);
            }
        }
    }
}
function show() {
    let i = 0;
    let options = document.getElementsByName('choices');
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
    let hexId = document.getElementById('basesDivH');
    let binId = document.getElementById('basesDivB');
    let decId = document.getElementById('basesDivD');
    let octId = document.getElementById('basesDivO');
    for (i = 0; i < options.length; i++) {
        if (options[i].checked == true) {
            console.log(options[i].value);
            decId.innerText = '';
            octId.innerText = '';
            binId.innerText = '';
            hexId.innerText = '';
            yazılan.innerHTML = '';
            if (options[i].value == '2') {

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
            } if (options[i].value == '8') {
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
            } if (options[i].value == '10') {
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
            if (options[i].value == '16') {
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
        }
    }
}
function base10Convertion(number) {
    // convert to base 2 from base 10
    let yazılan = document.getElementById('yazılan').innerText;
    let initialBase = 10;
    let changeBaseBin = 2;
    let sBin = 0;
    if (yazılan != "") {
        let sonucBin = document.getElementById('basesDivB');
        //let number = document.getElementById('yazılan').innerText;
        sBin = parseInt(number + '', initialBase).toString(changeBaseBin);
        sonucBin.innerHTML = sBin;
        // convert to base 8 from base 10
        let changeBaseOct = 8;
        let sOct = 0;
        let sonucOct = document.getElementById('basesDivO');
        sOct = parseInt(number + '', initialBase).toString(changeBaseOct);
        sonucOct.innerHTML = sOct;
        // convert to base 16 from base 10
        let changeBaseHex = 16;
        let sHex = 0;
        let sonucHex = document.getElementById('basesDivH');
        sHex = parseInt(number + '', initialBase).toString(changeBaseHex);
        sonucHex.innerHTML = sHex.toUpperCase();
        let sonucDec = document.getElementById('basesDivD');
        sonucDec.innerText = number;
    } else {


        let base2 = document.getElementById('basesDivB');
        let base8 = document.getElementById('basesDivO');
        let base10 = document.getElementById('basesDivD');
        let base16 = document.getElementById('basesDivH');
        base2.innerText = "";
        base8.innerText = "";
        base10.innerText = "";
        base16.innerText = "";
    }
}
function base2Convertion(number) {
    // convert to base 10 from base 2
    let yazılan = document.getElementById('yazılan').innerText;
    let initialBase = 2;
    let changeBaseDec = 10;
    let sDec = 0;
    if (yazılan != "") {
        let sonucDec = document.getElementById('basesDivD');
        //let number = document.getElementById('yazılan').innerText;
        sDec = parseInt(number + '', initialBase).toString(changeBaseDec);
        sonucDec.innerHTML = sDec;
        // convert to base 8 from base 2
        let changeBaseOct = 8;
        let sOct = 0;
        let sonucOct = document.getElementById('basesDivO');
        sOct = parseInt(number + '', initialBase).toString(changeBaseOct);
        sonucOct.innerHTML = sOct;
        // convert to base 16 from base 2
        let changeBaseHex = 16;
        let sHex = 0;
        let sonucHex = document.getElementById('basesDivH');
        sHex = parseInt(number + '', initialBase).toString(changeBaseHex);
        sonucHex.innerHTML = sHex.toUpperCase();
        let sonucBin = document.getElementById('basesDivB');
        sonucBin.innerText = number;
    }
    else {
        let base2 = document.getElementById('basesDivB');
        let base8 = document.getElementById('basesDivO');
        let base10 = document.getElementById('basesDivD');
        let base16 = document.getElementById('basesDivH');
        base2.innerText = "";
        base8.innerText = "";
        base10.innerText = "";
        base16.innerText = "";
    }
}
function base8Convertion(number) {
    // convert to base 10 from base 8
    let yazılan = document.getElementById('yazılan').innerText;
    let initialBase = 8;
    let changeBaseDec = 10;
    let sDec = 0;
    if (yazılan != "") {
        let sonucDec = document.getElementById('basesDivD');
        // let number = document.getElementById('yazılan').innerText;
        sDec = parseInt(number + '', initialBase).toString(changeBaseDec);
        sonucDec.innerHTML = sDec;
        // convert to base 2 from base 8
        let changeBaseOct = 2;
        let sBin = 0;
        let sonucBin = document.getElementById('basesDivB');
        sBin = parseInt(number + '', initialBase).toString(changeBaseOct);
        sonucBin.innerHTML = sBin;
        // convert to base 16 from base 8
        let changeBaseHex = 16;
        let sHex = 0;
        let sonucHex = document.getElementById('basesDivH');
        sHex = parseInt(number + '', initialBase).toString(changeBaseHex);
        sonucHex.innerHTML = sHex.toUpperCase();
        let sonucOct = document.getElementById('basesDivO');
        sonucOct.innerText = number;
    } else {
        let base2 = document.getElementById('basesDivB');
        let base8 = document.getElementById('basesDivO');
        let base10 = document.getElementById('basesDivD');
        let base16 = document.getElementById('basesDivH');
        base2.innerText = "";
        base8.innerText = "";
        base10.innerText = "";
        base16.innerText = "";
    }
}
function base16Convertion(number) {
    // convert to base 10 from base 16
    let yazılan = document.getElementById('yazılan').innerText;
    let initialBase = 16;
    let changeBaseDec = 10;
    let sDec = 0;
    if (yazılan != "") {
        let sonucDec = document.getElementById('basesDivD');
        //let number = document.getElementById('yazılan').innerText;
        sDec = parseInt(number + '', initialBase).toString(changeBaseDec);
        sonucDec.innerHTML = sDec;
        // convert to base 2 from base 16
        let changeBaseBin = 2;
        let sBin = 0;
        let sonucBin = document.getElementById('basesDivB');
        sBin = parseInt(number + '', initialBase).toString(changeBaseBin);
        sonucBin.innerHTML = sBin;
        // convert to base 8 from base 16
        let changeBaseOct = 8;
        let sOct = 0;
        let sonucOct = document.getElementById('basesDivO');
        sOct = parseInt(number + '', initialBase).toString(changeBaseOct);
        sonucOct.innerHTML = sOct;
        let sonucHex = document.getElementById('basesDivH');
        sonucHex.innerText = number;
    } else {
        let base2 = document.getElementById('basesDivB');
        let base8 = document.getElementById('basesDivO');
        let base10 = document.getElementById('basesDivD');
        let base16 = document.getElementById('basesDivH');
        base2.innerText = "";
        base8.innerText = "";
        base10.innerText = "";
        base16.innerText = "";
    }
}
function hesap() {
    let sonuc;
    let i = 0, j = 0, k = 0, l = 0;
    let numbers = [];
    let n1 = 0, n2 = 0;
    let yazılan = document.getElementById('yazılan');
    var number = document.getElementById('yazılan').innerText;
    var giris = document.getElementById('yazılan');
    let baseDecDiv = document.getElementById('basesDivD');
    let baseOctDiv = document.getElementById('basesDivO');
    let baseBinDiv = document.getElementById('basesDivB');
    let baseHexDiv = document.getElementById('basesDivH');
    let tempNum = number;
    let options = document.getElementsByName('choices');
    console.log();
    if (number.includes('+') || number.includes('-') || number.includes('/') || number.includes('*') ||number.includes('%')   ) {
        if (options[0].checked == false && options[1].checked == false &&
            options[2].checked == false && options[3].checked == false || options[2].checked == true) {
            for (i = 0; i < number.length; i++) {
                if (number.charAt(i) == '+') {
                    n1 = number.substring(0, i);
                    number = number.substring(i + 1, number.length);
                    sonuc = Math.floor(parseInt(n1) + parseInt(number));

                } else if (number.charAt(i) == '-') {
                    n1 = number.substring(0, i);
                    number = number.substring(i + 1, number.length);
                    sonuc = Math.floor(parseInt(n1) - parseInt(number));

                } else if (number.charAt(i) == '*') {
                    n1 = number.substring(0, i);
                    number = number.substring(i + 1, number.length);
                    sonuc = Math.floor(parseInt(n1) * parseInt(number));

                } else if (number.charAt(i) == '/') {
                    n1 = number.substring(0, i);
                    number = number.substring(i + 1, number.length);
                    sonuc = Math.floor(parseInt(n1) / parseInt(number));

                } else if (number.charAt(i) == '%') {
                    n1 = number.substring(0, i);
                    number = number.substring(i + 1, number.length);
                    sonuc = Math.floor(parseInt(n1) % parseInt(number));
                }
            }
            console.log(sonuc);
            baseDecDiv.innerText = sonuc;
            giris.innerText = sonuc;
            baseHexDiv = base10Convertion(sonuc);
            baseOctDiv = base10Convertion(sonuc);
            baseBinDiv = base10Convertion(sonuc);
        } else if (options[0].checked == true) {
            for (k = 0; k < number.length; k++) {
                if (number.charAt(k) == '+') {
                    n1 = parseInt(number.substring(0, k) + '', 2).toString(10);
                    n2 = parseInt(number.substring(k + 1, number.length) + '', 2).toString(10);
                    console.log(n1 + ' ' + n2);
                    sonuc = Number(n1) + Number(n2);
                    console.log(sonuc);
                } if (number.charAt(k) == '-') {
                    n1 = parseInt(number.substring(0, k) + '', 2).toString(10);
                    n2 = parseInt(number.substring(k + 1, number.length) + '', 2).toString(10);
                    console.log(n1 + ' ' + n2);
                    sonuc = (Number(n1) - Number(n2));
                    console.log(sonuc);
                } if (number.charAt(k) == '*') {
                    n1 = parseInt(number.substring(0, k) + '', 2).toString(10);
                    n2 = parseInt(number.substring(k + 1, number.length) + '', 2).toString(10);
                    console.log(n1 + ' ' + n2);
                    sonuc = Math.floor(Number(n1) * Number(n2));
                    console.log(sonuc);
                } if (number.charAt(k) == '/') {
                    n1 = parseInt(number.substring(0, k) + '', 2).toString(10);
                    n2 = parseInt(number.substring(k + 1, number.length) + '', 2).toString(10);
                    console.log(n1 + ' ' + n2);
                    sonuc = Math.floor(Number(n1) / Number(n2));
                    console.log(sonuc);
                } if (number.charAt(k) == '%') {
                    n1 = parseInt(number.substring(0, k) + '', 2).toString(10);
                    n2 = parseInt(number.substring(k + 1, number.length) + '', 2).toString(10);
                    console.log(n1 + ' ' + n2);
                    sonuc = (Number(n1) % Number(n2));
                    console.log(sonuc);
                }
            }
            baseBinDiv.innerText = sonuc;
            baseHexDiv = base10Convertion(sonuc);
            baseOctDiv = base10Convertion(sonuc);
            baseDecDiv = base10Convertion(sonuc);
            giris.innerText = baseBinDiv.innerText;

        } else if (options[1].checked == true) {
            for (l = 0; l < number.length; l++) {
                if (number.charAt(l) == '+') {
                    n1 = parseInt(number.substring(0, l) + '', 8).toString(10);
                    n2 = parseInt(number.substring(l + 1, number.length) + '', 8).toString(10);
                    console.log(n1);
                    console.log(n2);
                    sonuc = Number(n1) + Number(n2);
                    console.log(sonuc);
                } if (number.charAt(l) == '-') {
                    n1 = parseInt(number.substring(0, l) + '', 8).toString(10);
                    n2 = parseInt(number.substring(l + 1, number.length) + '', 8).toString(10);
                    console.log(n1);
                    console.log(n2);
                    sonuc = Number(n1) - Number(n2);
                    console.log(sonuc);
                } if (number.charAt(l) == '/') {
                    n1 = parseInt(number.substring(0, l) + '', 16).toString(10);
                    n2 = parseInt(number.substring(l + 1, number.length) + '', 8).toString(10);
                    console.log(n1);
                    console.log(n2);
                    sonuc = Math.floor(Number(n1) / Number(n2));
                    console.log(sonuc);
                } if (number.charAt(l) == '*') {
                    n1 = parseInt(number.substring(0, l) + '', 8).toString(10);
                    n2 = parseInt(number.substring(l + 1, number.length) + '', 8).toString(10);
                    console.log(n1);
                    console.log(n2);
                    sonuc = Number(n1) * Number(n2);
                    console.log(sonuc);
                } if (number.charAt(l) == '%') {
                    n1 = parseInt(number.substring(0, l) + '', 8).toString(10);
                    n2 = parseInt(number.substring(l + 1, number.length) + '', 8).toString(10);
                    console.log(n1);
                    console.log(n2);
                    sonuc = Number(n1) % Number(n2);
                    console.log(sonuc);
                }
            }
            baseOctDiv.innerText = sonuc;
            baseHexDiv = base10Convertion(sonuc);
            baseBinDiv = base10Convertion(sonuc);
            baseDecDiv = base10Convertion(sonuc);
            giris.innerText = baseOctDiv.innerText;
        }


        else if (options[3].checked) {
            for (j = 0; j < number.length; j++) {
                if (number.charAt(j) == '+') {
                    n1 = parseInt(number.substring(0, j) + '', 16).toString(10);
                    n2 = parseInt(number.substring(j + 1, number.length) + '', 16).toString(10);
                    console.log(n1);
                    console.log(n2);
                    sonuc = Number(n1) + Number(n2);
                    console.log(sonuc);
                } if (number.charAt(j) == '-') {
                    n1 = parseInt(number.substring(0, j) + '', 16).toString(10);
                    n2 = parseInt(number.substring(j + 1, number.length) + '', 16).toString(10);
                    console.log(n1);
                    console.log(n2);
                    sonuc = Number(n1) - Number(n2);
                    console.log(sonuc);
                } if (number.charAt(j) == '/') {
                    n1 = parseInt(number.substring(0, j) + '', 16).toString(10);
                    n2 = parseInt(number.substring(j + 1, number.length) + '', 16).toString(10);
                    console.log(n1);
                    console.log(n2);
                    sonuc = Math.floor(Number(n1) / Number(n2));
                    console.log(sonuc);
                } if (number.charAt(j) == '*') {
                    n1 = parseInt(number.substring(0, j) + '', 16).toString(10);
                    n2 = parseInt(number.substring(j + 1, number.length) + '', 16).toString(10);
                    console.log(n1);
                    console.log(n2);
                    sonuc = Number(n1) * Number(n2);
                    console.log(sonuc);
                } if (number.charAt(j) == '%') {
                    n1 = parseInt(number.substring(0, j) + '', 16).toString(10);
                    n2 = parseInt(number.substring(j + 1, number.length) + '', 16).toString(10);
                    console.log(n1);
                    console.log(n2);
                    sonuc = Number(n1) % Number(n2);
                    console.log(sonuc);
                }
            }

            baseHexDiv.innerText = sonuc;
            baseBinDiv = base10Convertion(sonuc);
            baseOctDiv = base10Convertion(sonuc);
            baseDecDiv = base10Convertion(sonuc);
            giris.innerText = baseHexDiv.innerText;
        }

    }

}
