window.onload = function (e) {
    showDimensions();
//    updateImage();
}


//***** horne hlavne menu **** MENU + funkcie na zobrazenie len vybranych <div> elementov
var menuRozmery = document.getElementById("navRozmery");
var menuFarba = document.getElementById("navFarba");
var menuAll = document.getElementById("navAll");
var menuCan = document.getElementById("navCan");

menuRozmery.addEventListener("click", showDimensions);
menuFarba.addEventListener("click", showColor);
menuAll.addEventListener("click",showAll);
menuCan.addEventListener("click", showAll);

function showDimensions() {
    document.getElementById("vyberRozmer").style.display = "block";
    document.getElementById("vyberFarba").style.display = "none";
}

function showColor() {
    document.getElementById("vyberRozmer").style.display = "none";
    document.getElementById("vyberFarba").style.display = "block";
}

function showAll() {
    document.getElementById("vyberRozmer").style.display = "block";
    document.getElementById("vyberFarba").style.display = "block";
}


// zakladne vseobecne premenne
var pomocnyNazov = "pic\\rea-office-";
var vyska = "10";
var sirka = "10";
var farba = "biela";
var onOFF = "hidden";
var imageSRC = "pic\\rea-office-10-10-biela.jpg";
var imageSrcOld1 = "pic\\rea-office-10-10-biela.jpg";
var imageSrcOld2 = "pic\\rea-office-10-10-biela.jpg";
var imageSrcOld3 = "pic\\rea-office-10-10-biela.jpg";
var imageSrcOld4 = "pic\\rea-office-10-10-biela.jpg";

// ***** ROZMERY *****
var btnHeight10 = document.getElementById("btnH10");
var btnHeight20 = document.getElementById("btnH20");
var btnWidth10 = document.getElementById("btnW10");
var btnWidth20 = document.getElementById("btnW20");

btnHeight10.addEventListener("click", function () {changeHeight("10")} );
btnHeight20.addEventListener("click", function () {changeHeight("20")} );
btnWidth10.addEventListener("click", function() {changeWidth("10")});
btnWidth20.addEventListener("click", function() {changeWidth("20")});

function changeWidth(width) {
    sirka = width;
    updateImage();
}

function changeHeight(height) {
    vyska = height;
    updateImage();
}

// ***** FARBY *****
var btnBiela = document.getElementById("btnColorBiela");
var btnBuk = document.getElementById("btnColorBuk");
var btnBardolino = document.getElementById("btnColorBardolino");
var btnCanyon = document.getElementById("btnColorCanyon");
var btnGraphite = document.getElementById("btnColorGraphite");
var btnNavarra = document.getElementById("btnColorNabarra");
var btnOrech = document.getElementById("btnColorOrech");
var btnWenge = document.getElementById("btnColorWenge");

btnBiela.addEventListener("click", function() {changeColor("biela")});
btnBuk.addEventListener("click", function() {changeColor("buk")});
btnBardolino.addEventListener("click", function() {changeColor("dub-bardolino")});
btnCanyon.addEventListener("click", function() {changeColor("dub-canyon")});
btnGraphite.addEventListener("click", function() {changeColor("graphite")});
btnNavarra.addEventListener("click", function() {changeColor("navarra")});
btnOrech.addEventListener("click", function() {changeColor("orech")});
btnWenge.addEventListener("click", function() {changeColor("wenge")});
btnBiela.addEventListener("click", function() {changeColor("biela")});
btnBiela.addEventListener("click", function() {changeColor("biela")});

function changeColor(color) {
    farba = color;
    updateImage();
}

// hlavna funkcia, ktora meni zobrazeny obrazok 
//function updateImage() {
//    imageSRC = pomocnyNazov + vyska + "-" + sirka + "-" + farba + ".jpg";
//    document.getElementById("myImgMAIN").src = imageSRC;
////            updateOldImages(imageSRC);
//        }

//spodne obrazky, historia vyberu, nahradi src, vzdy o jedno starsi
//        function updateOldImages(imageSRC) {
//          imageSrcOld4 = imageSrcOld3;
//          imageSrcOld3 = imageSrcOld2;
//          imageSrcOld2 = imageSrcOld1;
//          imageSrcOld1 = imageSRC;
//          document.getElementById("IMGOld1").src = imageSrcOld1;
//          document.getElementById("IMGOld2").src = imageSrcOld2;
//          document.getElementById("IMGOld3").src = imageSrcOld3;
//          document.getElementById("IMGOld4").src = imageSrcOld4;
//        }


