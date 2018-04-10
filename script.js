// zakladne vseobecne premenne
var pomocnyNazov = "pic\\korpus-";
var vyska = "v10";
var sirka = "s10";
var farba = "biela";
//var onOFF = "hidden";
var imageSrcOld1 = "pic\\rea-office-10-10-biela.jpg";
var imageSrcOld2 = "pic\\rea-office-10-10-biela.jpg";
var imageSrcOld3 = "pic\\rea-office-10-10-biela.jpg";
var imageSrcOld4 = "pic\\rea-office-10-10-biela.jpg";
var image = new Image ();
var canvas = document.getElementById("mainPicture");
var ctx = canvas.getContext('2d');


window.onload = function (e) {
    showChoice("block", "none", "none", "none")
    updateImgSrc();
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

// ***** ROZMERY *****
var btnHeight10 = document.getElementById("btnH10");
var btnHeight20 = document.getElementById("btnH20");
var btnWidth10 = document.getElementById("btnW10");
var btnWidth20 = document.getElementById("btnW20");

btnHeight10.addEventListener("click", function () {changeHeight("v10")} );
btnHeight20.addEventListener("click", function () {changeHeight("v20")} );
//btnWidth10.addEventListener("click", function() {changeWidth("s10")});
//btnWidth20.addEventListener("click", function() {changeWidth("s20")});

//function changeWidth(width) {
//    sirka = width;
//    updateImgSrc();
//}

function changeHeight(height) {
    vyska = height;
    updateImgSrc();
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
    updateImgSrc();
}

// hlavna funkcia, ktora meni zobrazeny obrazok 
//image.src = "4farby.jpg";
//var imageTemp = document.getElementById("imageTest");
//var imageSRC = "pic\\rea-office-10-10-biela.jpg";

function updateImgSrc() {
    image.src = pomocnyNazov + vyska + "-" + sirka + "-" + farba + ".jpg";
    canvas.width=image.width;
    canvas.height=image.height;
    textName.innerText=image.src;
    image.onload = function() {
        ctx.drawImage(image, 0, 0);
    }
    //            updateOldImages(imageSRC);
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

var btnImgUpload = document.getElementById("imgUpload");
btnImgUpload.addEventListener("click", uploadCanvasSecond);

function uploadCanvasSecond () {
    var canvasSecond = document.getElementById("canvasSecond");
    var ctxSecond = canvasSecond.getContext("2d");
    var imageKorpus = new Image ();
    imageKorpus.src = "pic\\4farby.jpg";
    var imageSuflik = new Image ();
    imageSuflik.src = "pic\\suflik1.jpg";  
    canvasSecond.width=imageKorpus.width;
    canvasSecond.height=imageKorpus.height;

    ctxSecond.canvas.addEventListener('mousemove', function(event){
        var mouseX = event.clientX - ctxSecond.canvas.offsetLeft;
        var mouseY = event.clientY - ctxSecond.canvas.offsetTop;
        var status = document.getElementById('status');
        status.innerHTML = mouseX+" | "+mouseY;
    });
    ctxSecond.canvas.addEventListener('click', function(event){
        var mouseX = event.clientX - ctxSecond.canvas.offsetLeft;
        var mouseY = event.clientY - ctxSecond.canvas.offsetTop;
//         alert(mouseX+" | "+mouseY);
        ctx.fillStyle = "orange";
        ctx.fillRect(mouseX-15, mouseY-15, 30, 30);
    });

    imageKorpus.onload = function() {
        ctxSecond.drawImage(imageKorpus, 0, 0, canvasSecond.width/2, canvasSecond.height/2);    
        ctxSecond.drawImage(imageSuflik, canvasSecond.width/2, canvasSecond.height/2, canvasSecond.width-1, canvasSecond.height-1);    
    }
    
}

//*************************************************************************************
var btnTEST = document.getElementById("spustiTEST");
btnTEST.addEventListener("click", initCanvas);
function initCanvas(){
    var ctx = document.getElementById('canvasTest').getContext('2d');
    ctx.canvas.addEventListener('mousemove', function(event){
        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        var status = document.getElementById('statusTest');
        status.innerHTML = mouseX+" | "+mouseY;
    });
    ctx.canvas.addEventListener('click', function(event){
        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        // alert(mouseX+" | "+mouseY);
        ctx.fillStyle = "orange";
        ctx.fillRect(mouseX-15, mouseY-15, 30, 30);
    });
}







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


