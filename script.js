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

        function changeColor(color) {
            farba = color;
            updateImage();
        }

        function changeWidth(width) {
            sirka = width;
            updateImage();
        }

        function changeHeight(height) {
            vyska = height;
            updateImage();
        }

        function updateImage() {
          imageSRC = pomocnyNazov + vyska + "-" + sirka + "-" + farba + ".jpg";
            document.getElementById("myImgMAIN").src = imageSRC;
            updateOldImages(imageSRC);
        }

//spodne obrazky, historia vyberu, nahradi src, vzdy o jedno starsi
        function updateOldImages(imageSRC) {
          imageSrcOld4 = imageSrcOld3;
          imageSrcOld3 = imageSrcOld2;
          imageSrcOld2 = imageSrcOld1;
          imageSrcOld1 = imageSRC;
          document.getElementById("IMGOld1").src = imageSrcOld1;
          document.getElementById("IMGOld2").src = imageSrcOld2;
          document.getElementById("IMGOld3").src = imageSrcOld3;
          document.getElementById("IMGOld4").src = imageSrcOld4;
        }


        window.onload = function (e) {
            showDimensions();
            updateImage();
        }