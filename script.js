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

var koordinaty = [
    {zaradenie:"v20", pozicia:2, startX:"130", startY:"160", endX:"588", endY:"368", farba:"biela", zobraz:false},
    {zaradenie:"v20", pozicia:1, startX:"130", startY:"370", endX:"588", endY:"583", farba:"biela", zobraz:false},
    {zaradenie:"v30", pozicia:3, startX:"124", startY:"54", endX:"583", endY:"263", farba:"biela", zobraz:true},
    {zaradenie:"v30", pozicia:2, startX:"124", startY:"265", endX:"583", endY:"475", farba:"biela", zobraz:true},
    {zaradenie:"v30", pozicia:1, startX:"124", startY:"478", endX:"583", endY:"691", farba:"biela", zobraz:true},
];


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
    canvas.width=image.naturalWidth;
    canvas.height=image.naturalHeight;
//    canvas.width=image.width;
//    canvas.height=image.height;
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
//    ctx.canvas.addEventListener('click', function(event){
//        var mouseX = event.layerX;
//        var mouseY = event.layerY;
//        clickKoordinaty.innerHTML = "event.layerX/Y  "+ mouseX+" | "+mouseY;
//    });
        ctx.canvas.addEventListener('click', function(event){
            function search(nameKey, nameKey2) {
                for (var i=0; i<koordinaty.length; i++) {
                    if ((koordinaty[i].zaradenie===nameKey)&&(koordinaty[i].pozicia===nameKey2)) {
                        return koordinaty[i];
                    }
                }
            }
            var test = search("v20", "1");
            clickKoordinaty.innerHTML = test.startY;
    });
    
}


// *****************   PREDOK  / SUFLIK / HLAVNY PROBLEM********************
var btnSuf3 = document.getElementById("suf3");
btnSuf3.addEventListener("click",function() {drawCanvas(3, 124, 54)});
var btnSuf2 = document.getElementById("suf2");
btnSuf2.addEventListener("click",function() {drawCanvas(2, 124, 265)});
var btnSuf1 = document.getElementById("suf1");
btnSuf1.addEventListener("click",function() {drawCanvas(1, 124, 478)});
//var btnSufB = document.getElementById("sufB");
//btnSufB.addEventListener("click",function() {drawCanvas(130, 160)});
var btnSufA = document.getElementById("sufA");
btnSufA.addEventListener("click",drawPredok);

function drawCanvas(pozicia, startX, startY) {
    var picture = new Image();
    picture.src = "pic\\suflik-1-biela.png";
    
    ctx.drawImage(picture, startX, startY);
//        ctx.drawImage(picture, 203, 265, 350, 160);
}

function drawPredok() {
    var vyska = korpus.vyska;
//    var pictureTest = new Image();
//    pictureTest.src = "pic\\suflik-1-biela.png";
//    ctx.drawImage(pictureTest, 124, 265);
    var picture = new Image();
    picture.src = "pic\\suflik-1-cervena.png";
    
    for (var i=0; i<koordinaty.length; i++) {
        if ((koordinaty[i].zaradenie===vyska)&&(koordinaty[i].zobraz===true)) {
            for (var j=1; j<4; j++) {
                if (koordinaty[i].pozicia===j) {
                    ctx.drawImage(picture, koordinaty[i].startX, koordinaty[i].startY);
                    
                }
            }
        }
    }
}



