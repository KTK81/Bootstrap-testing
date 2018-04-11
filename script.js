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

var imageSrcOld1 = "pic\\rea-office-10-10-biela.jpg";
var imageSrcOld2 = "pic\\rea-office-10-10-biela.jpg";
var imageSrcOld3 = "pic\\rea-office-10-10-biela.jpg";
var imageSrcOld4 = "pic\\rea-office-10-10-biela.jpg";
var image = new Image ();
var canvas = document.getElementById("mainPicture");
var ctx = canvas.getContext('2d');

window.onload = function (e) {
    showChoice("block", "none", "none", "none")
    changeInfo("vyska","v20");
}

//***** horne hlavne menu **** MENU + funkcie na zobrazenie len vybranych <div> elementov
var menuRozmery = document.getElementById("navRozmery");
var menuFarba = document.getElementById("navFarba");
var menuAll = document.getElementById("navAll");
var menuCan = document.getElementById("navCan");
var menuTEST = document.getElementById("navTEST");

menuRozmery.addEventListener("click", function() { showChoice("block", "none", "none", "none")});
menuFarba.addEventListener("click", function() { showChoice("none", "block", "none", "none")});
menuCan.addEventListener("click", function() { showChoice("none", "none", "block", "none")});
menuTEST.addEventListener("click", function() { showChoice("none", "none", "none", "block")});
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
var btnWidth10 = document.getElementById("btnW10");
var btnWidth20 = document.getElementById("btnW20");

btnHeight10.addEventListener("click", function() {changeInfo("vyska","v20")});
btnHeight20.addEventListener("click", function() {changeInfo("vyska","v30")});
//btnWidth10.addEventListener("click", function() {changeInfo("sirka","s20")});
//btnWidth20.addEventListener("click", function() {changeInfo("sirka","s30")});

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
function changeInfo(vlastnost, hodnota) {
    korpus[vlastnost]=hodnota;
    image.src = korpus.obrSubor();
    canvas.width=image.width;
    canvas.height=image.height;
    textName.innerText=image.src;
    image.onload = function() {
        ctx.drawImage(image, 0, 0);
    }
    //            updateOldImages(imageSRC);
}

// *****************   PREDOK  ********************
var btnSuf1 = document.getElementById("suf3");
btnSuf1.addEventListener("click",function() {drawCanvas()});

function drawCanvas(xStart,yStart, xEnd, yEnd) {
    var picture = new Image();
    picture.src = "pic\\suflik-8-1.png";
    ctx.drawImage(picture, 0, 0, 100, 200);
//        ctxKorpus.drawImage(picture, 203, 265, 350, 160);
}



//*************************************************************************************
var btnTEST = document.getElementById("spustiTEST");
btnTEST.addEventListener("click", zistiCoords);
function zistiCoords(){
    ctx.canvas.addEventListener('mousemove', function(event){
        var mouseX = event.layerX;
        var mouseY = event.layerY;
        var status = document.getElementById('statusTest');
        status.innerHTML = mouseX+" | "+mouseY;
    });
    ctx.canvas.addEventListener('click', function(event){
        var mouseX = event.layerX;
        var mouseY = event.layerY;
        clickKoordinaty.innerHTML = mouseX+" | "+mouseY;
    });
}










//    **************** CANVAS ****************
//var suflikMaly = document.getElementById("btnSuf10");
//suflikMaly.addEventListener("click", addSuflik);
//
//function addSuflik () {
////    textName.innerText="CANVAAAAS";
//    var canvas1 = document.getElementById("canvasSecond");
//    var ctx2 = canvas1.getContext("2d");
//    var imageNew = new Image ();
//    imageNew.src = "4farby.jpg";
//    imageNew.onload = function() {
//        ctx.drawImage(imageNew, canvas.width/2-150, canvas.height/2+50, 200, 200);    
//    }
//    
//}

//var btnImgUpload = document.getElementById("imgUpload");
//btnImgUpload.addEventListener("click", uploadCanvasSecond);
//
//function uploadCanvasSecond () {
//    var canvasSecond = document.getElementById("canvasSecond");
//    var ctxSecond = canvasSecond.getContext("2d");
//    var imageKorpus = new Image ();
//    imageKorpus.src = "pic\\4farby.jpg";
//    var imageSuflik = new Image ();
//    imageSuflik.src = "pic\\suflik1.jpg";  
//    canvasSecond.width=imageKorpus.width;
//    canvasSecond.height=imageKorpus.height;
//
//    ctxSecond.canvas.addEventListener('mousemove', function(event){
//        var mouseX = event.clientX - ctxSecond.canvas.offsetLeft;
//        var mouseY = event.clientY - ctxSecond.canvas.offsetTop;
//        var status = document.getElementById('status');
//        status.innerHTML = mouseX+" | "+mouseY;
//    });
//    ctxSecond.canvas.addEventListener('click', function(event){
//        var mouseX = event.clientX - ctxSecond.canvas.offsetLeft;
//        var mouseY = event.clientY - ctxSecond.canvas.offsetTop;
////         alert(mouseX+" | "+mouseY);
//        ctx.fillStyle = "orange";
//        ctx.fillRect(mouseX-15, mouseY-15, 30, 30);
//    });
//
//    imageKorpus.onload = function() {
//        ctxSecond.drawImage(imageKorpus, 0, 0, canvasSecond.width/2, canvasSecond.height/2);    
//        ctxSecond.drawImage(imageSuflik, canvasSecond.width/2, canvasSecond.height/2, canvasSecond.width-1, canvasSecond.height-1);    
//    }
//    
//}









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


