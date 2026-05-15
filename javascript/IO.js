var sureler = [
    {name: "Fâtiha·Elham", sayfaNo: 1, ayetSayisi: 7},
    {name: "Bakara", sayfaNo: 2, ayetSayisi: 286},
    {name: "Al-i İmran", sayfaNo: 50, ayetSayisi: 200},
    {name: "Nisâ", sayfaNo: 77, ayetSayisi: 176},
    {name: "Mâide", sayfaNo: 106, ayetSayisi: 120},
    {name: "Enâm", sayfaNo: 128, ayetSayisi: 165},
    {name: "Arâf", sayfaNo: 151, ayetSayisi: 206},
    {name: "Enfâl", sayfaNo: 177, ayetSayisi: 75},
    {name: "Tevbe·Tövbe", sayfaNo: 187, ayetSayisi: 129},
    {name: "Yûnus", sayfaNo: 208, ayetSayisi: 109},
    {name: "Hûd", sayfaNo: 221, ayetSayisi: 123},
    {name: "Yûsuf", sayfaNo: 235, ayetSayisi: 111},
    {name: "Rad", sayfaNo: 249, ayetSayisi: 43},
    {name: "İbrâhîm", sayfaNo: 255, ayetSayisi: 52},
    {name: "Hicr·Hicir", sayfaNo: 262, ayetSayisi: 99},
    {name: "Nahl·Nahıl", sayfaNo: 267, ayetSayisi: 128},
    {name: "İsrâ", sayfaNo: 282, ayetSayisi: 111},
    {name: "Kehf", sayfaNo: 293, ayetSayisi: 110},
    {name: "Meryem", sayfaNo: 305, ayetSayisi: 98},
    {name: "Tâ-Hâ", sayfaNo: 312, ayetSayisi: 135},
    {name: "Enbiyâ", sayfaNo: 322, ayetSayisi: 112},
    {name: "Hac·Hacc", sayfaNo: 332, ayetSayisi: 78},
    {name: "Muminûn", sayfaNo: 342, ayetSayisi: 118},
    {name: "Nûr", sayfaNo: 350, ayetSayisi: 64},
    {name: "Furkân", sayfaNo: 359, ayetSayisi: 77},
    {name: "Şuarâ", sayfaNo: 367, ayetSayisi: 227},
    {name: "Neml·Nemil", sayfaNo: 377, ayetSayisi: 93},
    {name: "Kasas", sayfaNo: 385, ayetSayisi: 88},
    {name: "Ankebût", sayfaNo: 396, ayetSayisi: 69},
    {name: "Rûm", sayfaNo: 404, ayetSayisi: 60},
    {name: "Lokmân", sayfaNo: 411, ayetSayisi: 34},
    {name: "Secde", sayfaNo: 415, ayetSayisi: 30},
    {name: "Ahzâb", sayfaNo: 418, ayetSayisi: 73},
    {name: "Sabâ", sayfaNo: 428, ayetSayisi: 54},
    {name: "Fâtır", sayfaNo: 434, ayetSayisi: 45},
    {name: "Yâ-Sîn", sayfaNo: 440, ayetSayisi: 83},
    {name: "Saffât", sayfaNo: 446, ayetSayisi: 182},
    {name: "Sâd", sayfaNo: 453, ayetSayisi: 88},
    {name: "Zümer", sayfaNo: 458, ayetSayisi: 75},
    {name: "Mümin·Gafir", sayfaNo: 467, ayetSayisi: 85},
    {name: "Fussilet", sayfaNo: 477, ayetSayisi: 54},
    {name: "Şûrâ", sayfaNo: 483, ayetSayisi: 53},
    {name: "Zuhruf", sayfaNo: 489, ayetSayisi: 89},
    {name: "Duhân", sayfaNo: 496, ayetSayisi: 59},
    {name: "Câsiye", sayfaNo: 499, ayetSayisi: 37},
    {name: "Ahkâf", sayfaNo: 502, ayetSayisi: 35},
    {name: "Muhammed", sayfaNo: 507, ayetSayisi: 38},
    {name: "Fetih", sayfaNo: 511, ayetSayisi: 29},
    {name: "Hucurât", sayfaNo: 515, ayetSayisi: 18},
    {name: "Kâf", sayfaNo: 518, ayetSayisi: 45},
    {name: "Zâriyât", sayfaNo: 520, ayetSayisi: 60},
    {name: "Tûr", sayfaNo: 523, ayetSayisi: 49},
    {name: "Necm·Necim", sayfaNo: 526, ayetSayisi: 62},
    {name: "Kamer", sayfaNo: 528, ayetSayisi: 55},
    {name: "Rahmân", sayfaNo: 531, ayetSayisi: 78},
    {name: "Vâkıa", sayfaNo: 534, ayetSayisi: 96},
    {name: "Hadîd", sayfaNo: 537, ayetSayisi: 29},
    {name: "Mücâdele", sayfaNo: 542, ayetSayisi: 22},
    {name: "Haşr·Haşır", sayfaNo: 545, ayetSayisi: 24},
    {name: "Mümtehine", sayfaNo: 549, ayetSayisi: 13},
    {name: "Saff·Saf", sayfaNo: 551, ayetSayisi: 14},
    {name: "Cuma", sayfaNo: 553, ayetSayisi: 11},
    {name: "Munâfikûn", sayfaNo: 554, ayetSayisi: 11},
    {name: "Teğâbun", sayfaNo: 556, ayetSayisi: 18},
    {name: "Talâk", sayfaNo: 558, ayetSayisi: 12},
    {name: "Tahrîm", sayfaNo: 560, ayetSayisi: 12},
    {name: "Mülk·Tebarekellezi·Teberakellezi", sayfaNo: 562, ayetSayisi: 30},
    {name: "Kalem", sayfaNo: 564, ayetSayisi: 52},
    {name: "Hakka", sayfaNo: 566, ayetSayisi: 52},
    {name: "Mearic·Maaric", sayfaNo: 568, ayetSayisi: 44},
    {name: "Nûh", sayfaNo: 570, ayetSayisi: 28},
    {name: "Cin", sayfaNo: 572, ayetSayisi: 28},
    {name: "Müzzemmil·Müzemmil", sayfaNo: 574, ayetSayisi: 20},
    {name: "Müddessir·Müddesir·Müdesir", sayfaNo: 575, ayetSayisi: 56},
    {name: "Kıyâmet", sayfaNo: 577, ayetSayisi: 40},
    {name: "İnsân", sayfaNo: 578, ayetSayisi: 31},
    {name: "Mürselât", sayfaNo: 580, ayetSayisi: 50},
    {name: "Nabe·Amme Yeteseelun", sayfaNo: 582, ayetSayisi: 40},
    {name: "Nâziât", sayfaNo: 583, ayetSayisi: 46},
    {name: "Abese", sayfaNo: 585, ayetSayisi: 42},
    {name: "Tekvîr", sayfaNo: 586, ayetSayisi: 29},
    {name: "İnfitâr", sayfaNo: 587, ayetSayisi: 19},
    {name: "Mutaffifîn·Mutafifin", sayfaNo: 587, ayetSayisi: 36},
    {name: "İnşikâk", sayfaNo: 589, ayetSayisi: 25},
    {name: "Burûc", sayfaNo: 590, ayetSayisi: 22},
    {name: "Târık", sayfaNo: 591, ayetSayisi: 17},
    {name: "Alâ", sayfaNo: 591, ayetSayisi: 19},
    {name: "Gâşiye", sayfaNo: 592, ayetSayisi: 26},
    {name: "Fecr·Fecir", sayfaNo: 593, ayetSayisi: 39},
    {name: "Beled", sayfaNo: 594, ayetSayisi: 20},
    {name: "Şems", sayfaNo: 595, ayetSayisi: 15},
    {name: "Leyl", sayfaNo: 595, ayetSayisi: 21},
    {name: "Duhâ·Vedduha", sayfaNo: 596, ayetSayisi: 11},
    {name: "İnşirah", sayfaNo: 596, ayetSayisi: 8},
    {name: "Tîn·Vettini", sayfaNo: 597, ayetSayisi: 8},
    {name: "Alak·İkra", sayfaNo: 597, ayetSayisi: 19},
    {name: "Kadir·Kadr", sayfaNo: 598, ayetSayisi: 5},
    {name: "Beyyine", sayfaNo: 598, ayetSayisi: 8},
    {name: "Zilzâl·Zelzele", sayfaNo: 599, ayetSayisi: 8},
    {name: "Adiyât", sayfaNo: 599, ayetSayisi: 11},
    {name: "Kâria", sayfaNo: 600, ayetSayisi: 11},
    {name: "Tekâsür", sayfaNo: 600, ayetSayisi: 8},
    {name: "Asr·Asır", sayfaNo: 601, ayetSayisi: 3},
    {name: "Hümeze", sayfaNo: 601, ayetSayisi: 9},
    {name: "Fîl·Elemtere·Elem Tere", sayfaNo: 601, ayetSayisi: 5},
    {name: "Kureyş·Kureyiş", sayfaNo: 602, ayetSayisi: 4},
    {name: "Mâûn", sayfaNo: 602, ayetSayisi: 7},
    {name: "Kevser", sayfaNo: 602, ayetSayisi: 3},
    {name: "Kâfirûn", sayfaNo: 603, ayetSayisi: 6},
    {name: "Nasr·Nasır", sayfaNo: 603, ayetSayisi: 3},
    {name: "Tebbet·Masad", sayfaNo: 603, ayetSayisi: 5},
    {name: "İhlâs·Gülhü", sayfaNo: 604, ayetSayisi: 4},
    {name: "Felak", sayfaNo: 604, ayetSayisi: 5},
    {name: "Nâs", sayfaNo: 604, ayetSayisi: 6}
];

String.prototype.toArabicNumber = function() {
    const arb = ["&#1632;", "&#1633;", "&#1634;", "&#1635;", "&#1636;", "&#1637;", "&#1638;", "&#1639;", "&#1640;", "&#1641;"];
    return this.replace(/[0-9]/g, function(w) {
        return arb[+w];
    });
};

function arabicNumber(e) {
    return e.toString().toArabicNumber();
}

function id(e) {
    return document.getElementById(e);
}

function okunusBul(a1) {
    if (!a1) return "";

    a1 = a1.replace(/<span>/i, "").replace(/<.span>/i, "");

    id("gizliDiv").textContent = a1;
    a1 = id("gizliDiv").innerText;

    a1 = a1.replace(new RegExp(String.fromCharCode(1614) + String.fromCharCode(1648), "g"), String.fromCharCode(1648));

    for (let m = 0; m < transkripsiyon.length; m++) {
        let harf = transkripsiyon[m].split("·");
        harf[1] = harf[1].split("-");

        let ses = harf[3] || harf[1][0].charAt(0);

        a1 = a1.replace(new RegExp(harf[0] + sedde + ustun, "g"), ses + harf[1][0]);
        a1 = a1.replace(new RegExp(harf[0] + sedde + esre, "g"), ses + harf[1][1]);
        a1 = a1.replace(new RegExp(harf[0] + sedde + otre, "g"), ses + harf[1][2]);

        a1 = a1.replace(new RegExp(harf[0] + sedde + ikiUstun, "g"), ses + harf[1][0] + "n");
        a1 = a1.replace(new RegExp(harf[0] + sedde + ikiEsre, "g"), ses + harf[1][1] + "n");
        a1 = a1.replace(new RegExp(harf[0] + sedde + ikiOtre, "g"), ses + harf[1][2] + "n");
    }

    for (let m = 0; m < transkripsiyon.length; m++) {
        let harf = transkripsiyon[m].split("·");
        harf[1] = harf[1].split("-");

        let ses = harf[1][3] || harf[1][0].charAt(0);

        a1 = a1.replace(new RegExp(harf[0] + ustun, "g"), harf[1][0]);
        a1 = a1.replace(new RegExp(harf[0] + uzunUstun, "g"), ses + "ê");

        a1 = a1.replace(new RegExp(harf[0] + esre, "g"), harf[1][1]);
        a1 = a1.replace(new RegExp(harf[0] + otre, "g"), harf[1][2]);

        a1 = a1.replace(new RegExp(harf[0] + ikiUstun, "g"), harf[1][0] + "n");
        a1 = a1.replace(new RegExp(harf[0] + ikiEsre, "g"), harf[1][1] + "n");
        a1 = a1.replace(new RegExp(harf[0] + ikiOtre, "g"), harf[1][2] + "n");

        a1 = a1.replace(new RegExp(harf[0] + cezm, "g"), ses);
    }

    a1 = a1.replace(new RegExp("[uü]" + vav, "g"), "û");
    a1 = a1.replace(new RegExp("a" + elif, "g"), "â");
    a1 = a1.replace(new RegExp("e" + elif, "g"), "ê");

    a1 = a1.replace(new RegExp("e" + ye1, "g"), "ê");
    a1 = a1.replace(new RegExp("e" + ye2, "g"), "ê");

    a1 = a1.replace(new RegExp("[ıi]" + ye1, "g"), "î");
    a1 = a1.replace(new RegExp("[ıi]" + ye2, "g"), "î");

    a1 = a1.replace(/n b/g, "m-b")
           .replace(/nb/i, "mb")
           .replace(/([âeuüûaê]) ([iî])/g, "$1$2")
           .replace(/([âeıiîaê]) ([uüû])/g, "$1$2")
           .replace(/([âıiuüûîaê]) (e)/g, "$1$2")
           .replace(/([âıiuüûîae]) (ê)/g, "$1$2");

    a1 = a1.replace(/n ([lmnrvy])/g, "$1-$1")
           .replace(/lê/g, "lâ");

    if (a1.substring(0, 2) == "ال") {
        a1 = a1.substring(2);
    }

    a1 = a1.replace(/ê([bcdfgğhklmnrstvyz])([bcdfgğhklmnrstvyz ])/g, "e$1$2");

    a1 = a1.replace(/([eiuüa]) (tt)/g, "$1$2");

    a1 = a1.trim();

    return a1;
}