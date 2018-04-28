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
    {zaradenie: "v20", pozicia: 2, startX: "130", startY: "160", endX: "588", endY: "368", farba: "cervena", display:"block"},
    {zaradenie: "v20", pozicia: 1, startX: "130", startY: "370", endX: "588", endY: "583", farba: "biela", display:"block"},
    {zaradenie: "v30", pozicia: 3, startX: "124", startY: "54", endX: "583", endY: "263", farba: "siva", display:"block"},
    {zaradenie: "v30", pozicia: 2, startX: "124", startY: "265", endX: "583", endY: "475", farba: "biela", display:"block"},
    {zaradenie: "v30", pozicia: 1, startX: "124", startY: "478", endX: "583", endY: "691", farba: "siva", display:"block"},
];

window.onload = function (e) {
    init();
    showChoice("block", "block", "block");
    changeInfo("vyska", "v20");
}

var ctx = null;
var canvas = null;
var image = null;

function init() {
    image = new Image();


//***** horne hlavne menu **** MENU + funkcie na zobrazenie len vybranych <div> elementov **********************************
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


        
//********************************************   ROZNE MANIPULACIE SO SAMOTNYM OBRAZKOM *************************************
    
// *************** ROZMERY **************
    var btnHeight10 = document.getElementById("btnH10");
    var btnHeight20 = document.getElementById("btnH20");
    btnHeight10.addEventListener("click", function () {
        changeInfo("vyska", "v20")
    });
    btnHeight20.addEventListener("click", function () {
        changeInfo("vyska", "v30")
    });

//       ***** FARBY ********************
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

// *****************   PREDOK  / SUFLIK / HLAVNY PROBLEM***************
    var btnSuf3 = document.getElementById("suf3");
    btnSuf3.addEventListener("click", function () {
       drawSuflik(3);
    });
    var btnSuf2 = document.getElementById("suf2");
    btnSuf2.addEventListener("click", function () {
        drawSuflik(2);
    });
    var btnSuf1 = document.getElementById("suf1");
    btnSuf1.addEventListener("click", function () {
        drawSuflik(1);
    });
    var btnSufA = document.getElementById("sufA");
    btnSufA.addEventListener("click", zobrazVsetkysufliky);
    
}


function showChoice(rozmer, farba, predok) {
    document.getElementById("vyberRozmer").style.display = rozmer;
    document.getElementById("vyberFarba").style.display = farba;
    document.getElementById("vyberPredok").style.display = predok;
}

// ************************** hlavna funkcia, ktora meni zobrazeny obrazok  ***************************
//zmeni dany parameter v objecte, nacita z objectu novu verziu suboru k obrazku, prisposobi canvas obrazku, zobrazi novy obrazok
//zmeni hlavny obrazok
function changeInfo(vlastnost, hodnota) {
    var mainPicture = document.getElementById("mainPicture");
    korpus[vlastnost] = hodnota;
    image.src = korpus.obrSubor();
    image.onload = function () {
        mainPicture.setAttribute("xlink:href", korpus.obrSubor());
    }
}

function drawSuflik(pozicia) {
    var suflikCislo = "svgSuflik"+pozicia;
    var suflik=document.getElementById(suflikCislo);
    var style = suflik.style.display;
    var vyska = korpus.vyska;
    for (var i=0; i<koordinaty.length; i++) {
        if (koordinaty[i].zaradenie===vyska) {
            if (koordinaty[i].pozicia===pozicia) {
                //*** FARBA ***
                var sufIMG = "suf"+pozicia+"IMG";
                var sufFarba=document.getElementById(sufIMG);
                var suflikFarba = "pic\\suflik-1-"+koordinaty[i].farba+".png";
                sufFarba.setAttribute("xlink:href", suflikFarba);
                //*** ZOBRAZENIE ***
                if(style === "block") {
                        suflik.style.display = "none";
                    }
                else
                    suflik.style.display = "block";
            }            
        }
    }
}

function zobrazVsetkysufliky() {
    for (var i=1; i<4; i++)
        drawSuflik(i);
}


function drawPredok() {
    var vyska = korpus.vyska;
    for (var i = 0; i < koordinaty.length; i++) {
        if ((koordinaty[i].zaradenie === vyska) && (koordinaty[i].zobraz === true)) {
            for (var j = 1; j < 4; j++) {
                if (koordinaty[i].pozicia === j) {
                    var suflikCislo = "svgSuflik"+j;
                    var link = "pic\\suflik-1-siva.png";
                    var suflik=document.getElementById("svgSuflik3");
                    suflik.setAttribute("xlink:href", link);
                    suflik.style.display = "block";
                    
//                    var suflikFarba="pic\\suflik-1-" + koordinaty[i].farba + ".png";
//                    suflik.setAttribute("xlink:href", suflikFarba);
//                    kontrolnyText.innerHTML=suflik;
//                    suflik.style.display = "block";
//                    suflik.setAttribute("xlink:href", "pic\\suflik-1-siva.png");
                }
            }
        }
    }
}




