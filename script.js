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

var sufliky = [
    {zaradenie: "v20", pozicia: 2, startX: 130, startY: 160, endX: "588", endY: "368", sirka:"64.2%", vyska:"26.5%", farba: "biela", display:"none"},
    {zaradenie: "v20", pozicia: 1, startX: 130, startY: 370, endX: "588", endY: "583", sirka:"64.2%", vyska:"26.5%", farba: "biela", display:"none"},
    {zaradenie: "v30", pozicia: 3, startX: 124, startY: 54, endX: "583", endY: "263", sirka:"64.2%", vyska:"26.5%", farba: "biela", display:"none"},
    {zaradenie: "v30", pozicia: 2, startX: 124, startY: 265, endX: "583", endY: "475", sirka:"64.2%", vyska:"26.5%", farba: "biela", display:"none"},
    {zaradenie: "v30", pozicia: 1, startX: 124, startY: 478, endX: "583", endY: "691", sirka:"64.2%", vyska:"26.5%", farba: "biela", display:"none"},
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

// *****************   PREDOK  / SUFLIK ***************
// ************* FARBA *************
    document.getElementById("sufBtnWhite").addEventListener("click", function () {
      sufZmenFarbu("biela")
    });
    document.getElementById("sufBtnRed").addEventListener("click", function () {
      sufZmenFarbu("cervena")
    });
    document.getElementById("sufBtnGrey").addEventListener("click", function () {
      sufZmenFarbu("siva")
    });

// ************* ZOBRAZENIE *************
    document.getElementById("suf3").addEventListener("click", function () {
       sufOnOff(3);
    });
    document.getElementById("suf2").addEventListener("click", function () {
        sufOnOff(2);
    });
    document.getElementById("suf1").addEventListener("click", function () {
        sufOnOff(1);
    });
    document.getElementById("sufVyhod").addEventListener("click", function () {
      sufVymaz();
    });
    
}

function testovanie() {
    console.log(event.target.id);
}

//vyber menu
function showChoice(rozmer, farba, predok) {
    document.getElementById("vyberRozmer").style.display = rozmer;
    document.getElementById("vyberFarba").style.display = farba;
    document.getElementById("vyberPredok").style.display = predok;
}

// ************************** hlavna funkcia, ktora meni zobrazeny obrazok  ***************************
//zmeni dany parameter v objecte, nacita z objectu novu verziu suboru k obrazku, zobrazi novy obrazok, zobrazi sufliky
//zmeni hlavny obrazok
function changeInfo(vlastnost, hodnota) {
    var mainPicture = document.getElementById("mainPicture");
    korpus[vlastnost] = hodnota;
    image.src = korpus.obrSubor();
    image.onload = function () {
        mainPicture.setAttribute("xlink:href", korpus.obrSubor());
    }
    drawSufliky();
}

// ************   ZOBRAZENIE VSETKYCH SUFLIKOV - konkretne nastavenia berie z objectu koordinaty
function drawSufliky() {
    var vyska = korpus.vyska;
    sufVypniMimoKorpus(vyska);
    for (var i=0; i<sufliky.length; i++) {
        if (sufliky[i].zaradenie===vyska) {
            var suflikCislo = "svgSuflik"+sufliky[i].pozicia;
            var suflikKonkretny=document.getElementById(suflikCislo);
            var sufIMG = "suf"+sufliky[i].pozicia+"IMG";
            var sufIMGKonkretny=document.getElementById(sufIMG);
            var style = suflikKonkretny.style.display;
            var suflikFarba = "pic\\suflik-1-"+sufliky[i].farba+".png";
            
            //*** POZICIA ***
            suflikKonkretny.setAttribute("x", sufliky[i].startX);
            suflikKonkretny.setAttribute("y", sufliky[i].startY);
            suflikKonkretny.setAttribute("width", sufliky[i].sirka);
            suflikKonkretny.setAttribute("height", sufliky[i].vyska);
                
            //*** FARBA ***
            sufIMGKonkretny.setAttribute("xlink:href", suflikFarba);

            //*** ZOBRAZENIE ***
            suflikKonkretny.style.display = sufliky[i].display;
            
        }
        console.log("i: "+i+" ; pozicia: "+sufliky[i].pozicia+" ; farba: "+sufliky[i].farba+" ; zobraz: "+sufliky[i].display);
    }
    console.log("***************");
}

//podla vysky korpusu zisti max pocet suflikov v tejto vyske a vsetky sufliky mimo tejto vysky vypne
//takze ked napr zmenim z vysokeho regala na mensi, tak sufliky mimo maleho regala sa prestanu zobrazovat
function sufVypniMimoKorpus() {
    var maxSuflik = 1;
    var vyska = korpus.vyska;
    for (var i=0; i<sufliky.length; i++) {
        if (sufliky[i].zaradenie===vyska) {
            if (sufliky[i].pozicia>maxSuflik)
                maxSuflik=sufliky[i].pozicia;
        }
    }
    for (var j=0; j<sufliky.length;j++) {
        if (sufliky[j].pozicia>maxSuflik) {
            sufliky[j].display="none";
            sufliky[j].farba="biela";
            var suflikCislo = "svgSuflik"+sufliky[j].pozicia;
            var suflikKonkretny=document.getElementById(suflikCislo);
            suflikKonkretny.style.display = "none";
        }
    }
}

//u VSETKYCH suflikov na danej pozicii, bez ohladu na vysku korpusu, zmenim stav zobrazovania
//takze ked zmenim vysku korpusu, tak na suflik na danej pozicii bude mat vzdy rovnaku hodnotu zbrazovania, bud ano alebo nie
//takze nieze prvy suflik pri malom regale sa bude zobrazovat, ale ked zmenim vysku regalu, tak tam sa uz zobrazovat nebude, 
//lebo kazda vyska bude mat vlastne nastavenia
function sufOnOff(pozicia) {
    console.log(event.target.id);
    for (var i=0; i<sufliky.length; i++) {
            if (sufliky[i].pozicia===pozicia) {
                if(sufliky[i].display === "block") {
                    sufliky[i].display = "none";
                    }
                else
                    sufliky[i].display = "block";
            }            
    }
    drawSufliky();
}


function sufVymaz() {
     document.getElementById("suf1IMG").addEventListener("click", function () {
        zistiPoziciu();
    });
    document.getElementById("suf2IMG").addEventListener("click", function () {
        zistiPoziciu();
    });
    document.getElementById("suf3IMG").addEventListener("click", function () {
        zistiPoziciu();
    });
    
    function zistiPoziciu() {
        var element = event.target.id;
        var pozicia = 0;
        if (element.includes("1"))
            pozicia = 1;
        else if (element.includes("2"))
            pozicia = 2;
        else if (element.includes("3"))
            pozicia = 3;
        
        for (var i=0; i<sufliky.length; i++) {
                if (sufliky[i].pozicia===pozicia) {
                    sufliky[i].display = "none";
                }
        }
    }
    drawSufliky();
}


//u VSETKYCH suflikov na danej pozicii, bez ohladu na vysku korpusu, zmenim farbu
//najprv zistim, ktoru farbu klikol, pomocou atributu v hlavnej funkcii, nasledne kliknutie na niektory suflik spusti druhu funkciu,
//ktora zisti na ktory SVG klikol a na tychto poziciach zmeni farbu suflikov
function sufZmenFarbu(farbaKliknuta) {
    document.getElementById("suf1IMG").addEventListener("click", function () {
        zistiPoziciu();
    });
    document.getElementById("suf2IMG").addEventListener("click", function () {
        zistiPoziciu();
    });
    document.getElementById("suf3IMG").addEventListener("click", function () {
        zistiPoziciu();
    });
    
    function zistiPoziciu() {
        var element = event.target.id;
        var pozicia = 0;
        if (element.includes("1"))
            pozicia = 1;
        else if (element.includes("2"))
            pozicia = 2;
        else if (element.includes("3"))
            pozicia = 3;
        
        for (var i=0; i<sufliky.length; i++) {

                if (sufliky[i].pozicia===pozicia) {
                    sufliky[i].farba = farbaKliknuta;
                }
        }
        drawSufliky();
    }
}

