var korpus = {
    pomocnyNazov: "pic\\korpus-",
    zaradenie: "NS2",
    farba: "biela",
    vyska: "v20",
    sirka: "s20",
    hlbka: "h20",
    obrSubor: function () {
        return this.pomocnyNazov + this.vyska + "-" + this.sirka + "-" + this.farba + ".jpg";
    }
};

var koordinaty = [
    {zaradenie: "v20", pozicia: 2, startX: "130", startY: "160", endX: "588", endY: "368", farba: "biela", zobraz: true},
    {zaradenie: "v20", pozicia: 1, startX: "130", startY: "370", endX: "588", endY: "583", farba: "cervena", zobraz: true},
    {zaradenie: "v30", pozicia: 3, startX: "124", startY: "54", endX: "583", endY: "263", farba: "biela", zobraz: true},
    {zaradenie: "v30", pozicia: 2, startX: "124", startY: "265", endX: "583", endY: "475", farba: "siva", zobraz: true},
    {zaradenie: "v30", pozicia: 1, startX: "124", startY: "478", endX: "583", endY: "691", farba: "cervena", zobraz: true},
];

window.onload = function (e) {
    init();
    showChoice("block", "block", "block")
    changeInfo("vyska", "v20");
}

var ctx = null;
var canvas = null;
var image = null;

function init() {

    // ************************** hlavna funkcia, ktora meni zobrazeny obrazok  ***************************
    //zmeni dany parameter v objecte, nacita z objectu novu verziu suboru k obrazku, prisposobi canvas obrazku, zobrazi novy obrazok
    image = new Image();


    //***** horne hlavne menu **** MENU + funkcie na zobrazenie len vybranych <div> elementov
    var menuRozmery = document.getElementById("navRozmery");
    var menuFarba = document.getElementById("navFarba");
    var menuSuflik = document.getElementById("navSuflik");
    var menuAll = document.getElementById("navAll");


    menuRozmery.addEventListener("click", function () {
        showChoice("block", "none", "none")
    });
    menuFarba.addEventListener("click", function () {
        showChoice("none", "block", "none")
    });
    menuSuflik.addEventListener("click", function () {
        showChoice("none", "none", "block")
    });
    menuAll.addEventListener("click", function () {
        showChoice("block", "block", "block")
    });

    // *        **** ROZMERY *****
    var btnHeight10 = document.getElementById("btnH10");
    var btnHeight20 = document.getElementById("btnH20");
    btnHeight10.addEventListener("click", function () {
        changeInfo("vyska", "v20")
    });
    btnHeight20.addEventListener("click", function () {
        changeInfo("vyska", "v30")
    });

    //       ***** FARBY *****
    var btnBiela = document.getElementById("btnColorBiela");
    var btnBuk = document.getElementById("btnColorBuk");
    var btnDub = document.getElementById("btnColorDub");
    var btnNavarra = document.getElementById("btnColorNabarra");
    var btnWenge = document.getElementById("btnColorWenge");
    btnBiela.addEventListener("click", function () {
        changeInfo("farba", "biela")
    });
    btnBuk.addEventListener("click", function () {
        changeInfo("farba", "buk")
    });
    btnDub.addEventListener("click", function () {
        changeInfo("farba", "dub")
    });
    btnNavarra.addEventListener("click", function () {
        changeInfo("farba", "navarra")
    });
    btnWenge.addEventListener("click", function () {
        changeInfo("farba", "wenge")
    });

    // *****************   PREDOK  / SUFLIK / HLAVNY PROBLEM********************
//    var btnSuf3 = document.getElementById("suf3");
//    btnSuf3.addEventListener("click", function () {
//        drawCanvas(3, 124, 54)
//    });
//    var btnSuf2 = document.getElementById("suf2");
//    btnSuf2.addEventListener("click", function () {
//        drawCanvas(2, 124, 265)
//    });
//    var btnSuf1 = document.getElementById("suf1");
//    btnSuf1.addEventListener("click", function () {
//        drawCanvas(1, 124, 478)
//    });
//    var btnSufA = document.getElementById("sufA");
//    btnSufA.addEventListener("click", drawPredok);
    
}


function showChoice(rozmer, farba, predok) {
    document.getElementById("vyberRozmer").style.display = rozmer;
    document.getElementById("vyberFarba").style.display = farba;
    document.getElementById("vyberPredok").style.display = predok;
}

//zmeni hlavny obrazok
function changeInfo(vlastnost, hodnota) {
    var mainPicture = document.getElementById("mainPicture");
    korpus[vlastnost] = hodnota;
    image.src = korpus.obrSubor();
    image.onload = function () {
        mainPicture.setAttribute("xlink:href", korpus.obrSubor());
    }
}


//function drawPredok() {
//    var vyska = korpus.vyska;
//    for (var i = 0; i < koordinaty.length; i++) {
//        if ((koordinaty[i].zaradenie === vyska) && (koordinaty[i].zobraz === true)) {
//            for (var j = 1; j < 4; j++) {
//                if (koordinaty[i].pozicia === j) {
//                    var picture = new Image();
//                    picture.startX = koordinaty[i].startX;
//                    picture.startY = koordinaty[i].startY;
//                    picture.src = "pic\\suflik-1-" + koordinaty[i].farba + ".png";
//                    picture.onload = function () {
//                        ctx.drawImage(this, this.startX, this.startY);
//                        
//                    }
//
//                }
//            }
//        }
//    }
//}




