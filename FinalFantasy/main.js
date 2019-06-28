/**************************/
/********** MENU **********/
/**************************/


function ClickBtn() {
    $('#menu_btn').toggle();
    $('#FFVII').fadeToggle(500);
    $('#FFVIII').fadeToggle(500);
    $('#FFIX').fadeToggle(500);
}


/****************************/
/********** RETOUR **********/
/****************************/


function ClickBtn2() {
    $('#menu_btn').toggle();
    $('#FFVII').fadeToggle(500);
    $('#FFVIII').fadeToggle(500);
    $('#FFIX').fadeToggle(500);
    $('#article_hidden').fadeToggle(500);
    $('#slideshow').show(500);
}


/****************************/
/********** NAV FF **********/
/****************************/


function ClickFFVII(){
    $('#slideshow').hide(500);
    

    var response = $.getJSON('./json/FFVII.json', function () {
        document.getElementById("article_hidden").style.display = "block";
        var repJson = response.responseJSON;
        var src = repJson.logo;
        document.getElementById("afficherBoitier").src = src;
        document.getElementById("afficherTitre").innerHTML = repJson.titre;
        document.getElementById("afficherGenre").innerHTML = repJson.genre;
        document.getElementById("afficherMode").innerHTML = repJson.mode;
        document.getElementById("afficherEditeurs").innerHTML = repJson.editeur;
        document.getElementById("afficherDev").innerHTML = repJson.developpeur;
        document.getElementById("afficherConcepteurs").innerHTML = repJson.concepteur;
        document.getElementById("afficherMusique").innerHTML = repJson.musique;
        document.getElementById("afficherSortiePs").innerHTML = repJson.sortiePs;
        document.getElementById("afficherSortiePc").innerHTML = repJson.sortieWin;
        document.getElementById("afficherSortiePsn").innerHTML = repJson.sortiePsn;
    })
}

function ClickFFVIII() {
    $('#slideshow').hide(500);

    var response = $.getJSON('./json/FFVIII.json', function () {
        document.getElementById("article_hidden").style.display = "block";
        var repJson = response.responseJSON;
        var src = repJson.logo;
        document.getElementById("afficherBoitier").src = src;
        document.getElementById("afficherTitre").innerHTML = repJson.titre;
        document.getElementById("afficherGenre").innerHTML = repJson.genre;
        document.getElementById("afficherMode").innerHTML = repJson.mode;
        document.getElementById("afficherEditeurs").innerHTML = repJson.editeur;
        document.getElementById("afficherDev").innerHTML = repJson.developpeur;
        document.getElementById("afficherConcepteurs").innerHTML = repJson.concepteur;
        document.getElementById("afficherMusique").innerHTML = repJson.musique;
        document.getElementById("afficherSortiePs").innerHTML = repJson.sortiePs;
        document.getElementById("afficherSortiePc").innerHTML = repJson.sortieWin;
        document.getElementById("afficherSortiePsn").innerHTML = repJson.sortiePsn;
    })
}

function ClickFFIX() {
    $('#slideshow').hide(500);

    var response = $.getJSON('./json/FFIX.json', function () {
        document.getElementById("article_hidden").style.display = "block";
        var repJson = response.responseJSON;
        var src = repJson.logo;
        document.getElementById("afficherBoitier").src = src;
        document.getElementById("afficherTitre").innerHTML = repJson.titre;
        document.getElementById("afficherGenre").innerHTML = repJson.genre;
        document.getElementById("afficherMode").innerHTML = repJson.mode;
        document.getElementById("afficherEditeurs").innerHTML = repJson.editeur;
        document.getElementById("afficherDev").innerHTML = repJson.developpeur;
        document.getElementById("afficherConcepteurs").innerHTML = repJson.concepteur;
        document.getElementById("afficherMusique").innerHTML = repJson.musique;
        document.getElementById("afficherSortiePs").innerHTML = repJson.sortiePs;
        document.getElementById("afficherSortiePc").innerHTML = repJson.sortieWin;
        document.getElementById("afficherSortiePsn").innerHTML = repJson.sortiePsn;
    })
}

/*******************************/
/********** SLIDESHOW **********/
/*******************************/


$(function slideshow() {
    setInterval(function () {
        $(".slideshow ul").animate({ marginLeft: -232 }, 2000, function () {
            $(this).css({ marginLeft: 0 }).find("li:last").after($(this).find("li:first"));
        })
    }, 4000);
});