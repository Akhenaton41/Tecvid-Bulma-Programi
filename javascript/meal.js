var acikKuran = [];
var acikKuranSira;

function mealBul() {
    ayetTespit();
    if (!sureNo) {
        alert("Ayet referansı belirtmediniz.");
        window.location = "#sureAdi";
        id("sureAdi").focus();
        return false;
    }

    notlar = [];

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);

            var alfabetik = [];

            if (id("meal0").checked) { alfabetik.push(3); }
            if (id("meal2").checked) { alfabetik.push(1); }
            if (id("meal5").checked) { alfabetik.push(2); }
            if (id("meal6").checked) { alfabetik.push(5); }
            if (id("meal8").checked) { alfabetik.push(8); }
            if (id("meal10").checked) { alfabetik.push(6); }
            if (id("meal19").checked) { alfabetik.push(7); }
            if (id("meal20").checked) { alfabetik.push(0); }
            if (id("meal23").checked) { alfabetik.push(4); }

            var mealler = [];

            if (alfabetik.length > 0) {
                for (var j = 0; j < alfabetik.length; j++) {
                    var yazar$ = myObj["data"][alfabetik[j]]["edition"].name;
                    var son$ = false;

                    if (yazar$ == "Alİ Bulaç") { yazar$ = "Ali Bulaç"; }
                    if (yazar$ == "Öztürk") { yazar$ = "Yaşar Nuri " + yazar$; }

                    var m2 = "";

                    for (var i = bas - 1; i <= son - 1; i++) {
                        var ilk$ = myObj["data"][alfabetik[j]]["ayahs"][i].text + " ";
                        if (ilk$ != son$) {
                            ilk$ = ilk$.replace(/[']/g, "’");
                            m2 += "<b>(" + (i + 1) + ")</b> " + ilk$;
                        }
                        son$ = ilk$;
                    }

                    mealler.push(yazar$ + "·" + m2);
                }
            }

            acikKuran = [];

            if (id("meal9").checked) { acikKuran.push("Elmalılı Hamdi Yazır (sadeleştirilmiş)·15"); }
            if (id("meal7").checked) { acikKuran.push("Edip Yüksel (Eski Baskı)·13"); }
            if (id("meal1").checked) { acikKuran.push("Ahmed Hulusi·3"); }
            if (id("meal3").checked) { acikKuran.push("Ali Rıza Safa·51"); }
            if (id("meal4").checked) { acikKuran.push("Bayraktar Bayraklı·8"); }
            if (id("meal12").checked) { acikKuran.push("Erhan Aktaş (Yeni Baskı)·105"); }
            if (id("meal11").checked) { acikKuran.push("Erhan Aktaş (Eski Baskı)·50"); }
            if (id("meal13").checked) { acikKuran.push("Gültekin Onan·18"); }
            if (id("meal14").checked) { acikKuran.push("Hasan Basri Çantay·19"); }
            if (id("meal15").checked) { acikKuran.push("İbni Kesir·21"); }
            if (id("meal16").checked) { acikKuran.push("Mehmet Okuyan·107"); }
            if (id("meal17").checked) { acikKuran.push("Muhammed Esed·22"); }
            if (id("meal18").checked) { acikKuran.push("Mustafa İslamoğlu·38"); }
            if (id("meal22").checked) { acikKuran.push("Şaban Piriş·25"); }
            if (id("meal21").checked) { acikKuran.push("Süleymaniye Vakfı·52"); }

            if (acikKuran.length > 0) {
                acikKuranSira = 0;
                acikKuranDatabase();
            } else {
                mealDokum(mealler);
            }
        }
    };

    xmlhttp.open("GET", "https://api.alquran.cloud/v1/surah/" + sureNo + "/editions/tr.ates,tr.bulac,tr.diyanet,tr.golpinarli,tr.ozturk,tr.vakfi,tr.yazir,tr.yildirim,tr.yuksel", true);
    xmlhttp.send();
}
