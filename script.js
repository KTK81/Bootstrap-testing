//313 riadkov - pred jquery
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
    {zaradenie: "v20", pozicia: 2, startX: 130, startY: 160, endX: "588", endY: "368", sirka:"64.2%", vyska:"26.5%", farba: "biela", display:"none", selected:false},
    {zaradenie: "v20", pozicia: 1, startX: 130, startY: 370, endX: "588", endY: "583", sirka:"64.2%", vyska:"26.5%", farba: "biela", display:"none", selected:false},
    {zaradenie: "v30", pozicia: 3, startX: 124, startY: 54, endX: "583", endY: "263", sirka:"64.2%", vyska:"26.5%", farba: "biela", display:"none", selected:false},
    {zaradenie: "v30", pozicia: 2, startX: 124, startY: 265, endX: "583", endY: "475", sirka:"64.2%", vyska:"26.5%", farba: "biela", display:"none", selected:false},
    {zaradenie: "v30", pozicia: 1, startX: 124, startY: 478, endX: "583", endY: "691", sirka:"64.2%", vyska:"26.5%", farba: "biela", display:"none", selected:false},
];

window.onload = function (e) {
    init();
    showChoice("block", "block", "block");
    changeInfo("vyska", "v20");
}

var image = null;
var akcia = "nic";
var moznost = "nic";

function init() {

    image = new Image();


//***** horne hlavne menu **** MENU + funkcie na zobrazenie len vybranych <div> elementov **********************************
    $("#navRozmery").click(function() {
       showChoice("block", "none", "none")
   });
    $("#navFarba").click(function() {
       showChoice("none", "block", "none")
   });
    $("#navSuflik").click(function() {
       showChoice("none", "none", "block")
   });    
    $("#navAll").click(function() {
       showChoice("block", "block", "block")
   });    

//********************************************   ROZNE MANIPULACIE SO SAMOTNYM OBRAZKOM *************************************
    
// *************** ROZMERY **************

    $("#btnH10").click(function(){
        changeInfo("vyska", "v20")
    });
    $("#btnH20").click(function(){
        changeInfo("vyska", "v30")
    });


//       ***** FARBY ********************
    $("#btnColorBiela").click(function(){
        changeInfo("farba", "biela")
    });
    $("#btnColorBuk").click(function(){
        changeInfo("farba", "buk")
    });
    $("#btnColorDub").click(function(){
        changeInfo("farba", "dub")
    });
    $("#btnColorNabarra").click(function(){
        changeInfo("farba", "navarra")
    });
    $("#btnColorWenge").click(function(){
        changeInfo("farba", "wenge")
    });
// *****************   PREDOK  / SUFLIK ***************
// ************* FARBA *************
    $("#sufBtnWhite").click(function () {
        vyber("sufFarba", "biela");
    });
    $("#sufBtnRed").click(function () {
        vyber("sufFarba", "cervena");
    });
    $("#sufBtnGrey").click(function () {
        vyber("sufFarba", "siva");
    });    
    

// ************* ZOBRAZENIE *************
    $("#sufBtnAdd").click(function () {
        zobrazVsetkySufliky();
    });
    $("#sufVyhod").click(function () {
        vyber("sufVymaz", "X");
    });
}

function testovanie() {
    console.log(event.target.id);
}

//vyber menu
function showChoice(rozmer, farba, predok) {
    vymazNekliknuteSuf();
    document.getElementById("vyberRozmer").style.display = rozmer;
    document.getElementById("vyberFarba").style.display = farba;
    document.getElementById("vyberPredok").style.display = predok;
}

// ************************** hlavna funkcia, ktora meni zobrazeny obrazok  ***************************
//zmeni dany parameter v objecte, nacita z objectu novu verziu suboru k obrazku, zobrazi novy obrazok, zobrazi sufliky
//zmeni hlavny obrazok
function changeInfo(vlastnost, hodnota) {
    vymazNekliknuteSuf();
    var mainPicture = document.getElementById("mainPicture");
    korpus[vlastnost] = hodnota;
    image.src = korpus.obrSubor();
    image.onload = function () {
        mainPicture.setAttribute("xlink:href", korpus.obrSubor());
    }
    drawSufliky();
}


//pomocou tychto premennych si urcim, co ma robit hlavna funkcia na sufliky
//takze ich zmenou, menim aj to, co robi hlavna funkcia
function vyber(volba, moznyVyber) {
    if (volba!=="sufPridaj") {
        vymazNekliknuteSuf();
    }
    akcia = volba;
    moznost = moznyVyber;
}

$(".suflikClass").click(function() {
    vykonajAkciu();
});

function vykonajAkciu() {
    console.log("entering:"+akcia+";"+moznost);
    //zistim, ktory suflik spustil funkciu
    var pozicia = 0;
    var element = event.target.id;
    if (element.includes("1"))
        pozicia = 1;
    else if (element.includes("2"))
        pozicia = 2;
    else if (element.includes("3"))
        pozicia = 3;
        
    //podla toho
    if (akcia.includes("sufFarba")) {
        for (var i=0; i<sufliky.length; i++) {
            if (sufliky[i].pozicia===pozicia) {
                sufliky[i].farba = moznost;
            }
        }
    }
    
    if (akcia.includes("sufVymaz")) {
        for (var i=0; i<sufliky.length; i++) {
            if (sufliky[i].pozicia===pozicia) {
                sufliky[i].display = "none";
                sufliky[i].selected = false;
                sufliky[i].farba = "biela";
            }
        }
    }
    
    if (akcia.includes("sufPridaj")) {
        for (var i=0; i<sufliky.length; i++) {
            if (sufliky[i].pozicia===pozicia) {
                sufliky[i].display = "block";
                sufliky[i].selected = true;
                sufliky[i].farba = "biela";
            }
        }
    }
    
    drawSufliky();
}

function zobrazVsetkySufliky() {
    for (var i=0; i<sufliky.length; i++) {
        if ((sufliky[i].selected===false)&&(sufliky[i].display==="none"))
            sufliky[i].display="block";
    }
    vyber("sufPridaj", "X");
    drawSufliky();
}

function vymazNekliknuteSuf() {
    for (var i=0; i<sufliky.length; i++) {
        if ((sufliky[i].selected===false)&&(sufliky[i].display==="block"))
            sufliky[i].display="none";
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
            sufliky[j].selected=false;
            sufliky[j].farba="biela";
            var suflikCislo = "svgSuflik"+sufliky[j].pozicia;
            var suflikKonkretny=document.getElementById(suflikCislo);
            suflikKonkretny.style.display = "none";
            suflikKonkretny.style.selected =false;
            suflikKonkretny.style.farba = "biela";
        }
    }
}

$("#btnQuery").click(function () {
   vytvorQuery(); 
});

function vytvorQuery() {
    var premenna="";
    var pomocna="";
    for (var i=0; i<sufliky.length; i++) {
        pomocna+="s"+i;
        if (sufliky[i].farba.includes("biela"))
            pomocna+=("b");
        else if (sufliky[i].farba.includes("cervena"))
            pomocna+=("c");
        else if (sufliky[i].farba.includes("siva"))
            pomocna+=("s");
        
    }
    console.log(pomocna);
}


