var korpus = {
    pomocnyNazov:"pic\\korpus-",
    zaradenie:"NS2",
    farba:"biela",
    vyska:"v20",
    sirka:"s20",
    hlbka:"h20",
    obrSubor: function() {
        return this.pomocnyNazov + this.vyska + "-" + this.sirka + "-" + this.farba + ".jpg";
    }
};

var predok = {
    suflik1:false,
    suflik1Xstart:780,
    suflik1Ystart:180,
    suflik1Xend:1180,
    suflik1Yend:380
}

window.onload = function (e) {
    showChoice("block", "block", "none", "none")
    changeInfo("vyska","v20");
}

//***** horne hlavne menu **** MENU + funkcie na zobrazenie len vybranych <div> elementov
var menuRozmery = document.getElementById("navRozmery");
var menuFarba = document.getElementById("navFarba");
var menuSuflik = document.getElementById("navSuflik");
var menuCoords = document.getElementById("navCoords");
var menuAll = document.getElementById("navAll");


menuRozmery.addEventListener("click", function() { showChoice("block", "none", "none", "none")});
menuFarba.addEventListener("click", function() { showChoice("none", "block", "none", "none")});
menuSuflik.addEventListener("click", function() { showChoice("none", "none", "block", "none")}); 
menuCoords.addEventListener("click", zistiCoords);
menuAll.addEventListener("click", function() { showChoice("block", "block", "none", "none")});

function showChoice (rozmer, farba, predok, TEST) {
    document.getElementById("vyberRozmer").style.display = rozmer;
    document.getElementById("vyberFarba").style.display = farba;
    document.getElementById("vyberPredok").style.display = predok;
    document.getElementById("vyberTEST").style.display = TEST;
}

// *        **** ROZMERY *****
var btnHeight10 = document.getElementById("btnH10");
var btnHeight20 = document.getElementById("btnH20");
btnHeight10.addEventListener("click", function() {changeInfo("vyska","v20")});
btnHeight20.addEventListener("click", function() {changeInfo("vyska","v30")});

//       ***** FARBY *****
var btnBiela = document.getElementById("btnColorBiela");
var btnBuk = document.getElementById("btnColorBuk");
var btnDub = document.getElementById("btnColorDub");
var btnNavarra = document.getElementById("btnColorNabarra");
var btnWenge = document.getElementById("btnColorWenge");
btnBiela.addEventListener("click", function() {changeInfo("farba","biela")});
btnBuk.addEventListener("click", function() {changeInfo("farba","buk")});
btnDub.addEventListener("click", function() {changeInfo("farba","dub")});
btnNavarra.addEventListener("click", function() {changeInfo("farba","navarra")});
btnWenge.addEventListener("click", function() {changeInfo("farba","wenge")});

// ************************** hlavna funkcia, ktora meni zobrazeny obrazok  ***************************
//zmeni dany parameter v objecte, nacita z objectu novu verziu suboru k obrazku, prisposobi canvas obrazku, zobrazi novy obrazok
var image = new Image ();
var canvas = document.getElementById("mainPicture");
var ctx = canvas.getContext('2d');
//zmeni hlavny obrazok
function changeInfo(vlastnost, hodnota) {
    korpus[vlastnost]=hodnota;
    image.src = korpus.obrSubor();
    canvas.width=image.width;
    canvas.height=image.height;
    textName.innerText=image.src;
    image.onload = function() {
        ctx.drawImage(image, 0, 0);
    }
}

function zistiCoords(){
    showChoice("none", "none", "none", "block");
    ctx.canvas.addEventListener('mousemove', function(event){
        var mouseX = event.layerX;
        var mouseY = event.layerY;
        var mouseXclient = event.clientX;
        var mouseYclient = event.clientY;
        var mouseXOffset = event.layerX - ctx.canvas.offsetLeft;
        var mouseYOffset = event.layerY - ctx.canvas.offsetTop;
        var mouseXClientOffset = event.clientX - ctx.canvas.offsetLeft;
        var mouseYClientOffset = event.clientY - ctx.canvas.offsetTop;
        statusTest.innerHTML = "event.layerX  "+mouseX+" | "+mouseY;
        statusClient.innerHTML = "event.clientX  "+mouseXclient+" | "+mouseYclient;
        statusLayerOff.innerHTML = "offset layer "+mouseXOffset+" | "+mouseYOffset;
        statusClientOff.innerHTML = "offset client "+mouseXClientOffset+" | "+mouseYClientOffset;
    });
    ctx.canvas.addEventListener('click', function(event){
        var mouseX = event.layerX;
        var mouseY = event.layerY;
        clickKoordinaty.innerHTML = "event.layerX/Y  "+ mouseX+" | "+mouseY;
    });
}


// *****************   PREDOK  / SUFLIK / HLAVNY PROBLEM********************
// 1. uloha : nakreslit horny suflik v hornej casti, dolny v dolnej casti. 
// 2. uloha : nakreslit ho tam pri roznych rozliseniach, responsive ready
var btnSufUP = document.getElementById("sufUP");
btnSufUP.addEventListener("click",function() {drawCanvas()});
var btnSufDOWN = document.getElementById("sufDOWN");
btnSufDOWN.addEventListener("click",function() {drawCanvas()});

function drawCanvas() {
    var picture = new Image();
    picture.src = "pic\\suflik-8-1.png";
    ctx.drawImage(picture, 80, 140);
//        ctx.drawImage(picture, 203, 265, 350, 160);
}



