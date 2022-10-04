let kepek = 18
function picHover(kep) {
    //document.getElementById("desc").style.display = "flex"
    for (i = 1; i <= kepek; i++) {
        if (i == kep) {
            document.getElementById(i).style.filter = "grayscale(0)"
            document.getElementById(i).style.transform = "scale(1.15)"
            //document.getElementById(i).style.filter = "blur(5px)"
            //document.getElementById("txt" + i).style.display = "flex"
            document.getElementById(i).style.backgroundColor = "white"
        } else {
            document.getElementById(i).style.transform = "scale(1)"
            document.getElementById(i).style.filter = "grayscale(10) blur(5px)"
        }
    }
}

function picDown(kep) {
    //document.getElementById("desc").style.display = "none"
    for (i = 1; i <= kepek; i++) {
        document.getElementById(i).style.filter = "grayscale(0)"
        document.getElementById(i).style.transform = "scale(1)"
        //document.getElementById("txt" + i).style.display = "none"
        document.getElementById(i).style.backgroundColor = "rgba(255, 255, 255, 0.2)"
    }
}

window.onscroll = function() {
    let scrollButton = document.getElementById("upDiv")
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollButton.style.display = "block"
        scrollButton.style.position = "fixed"
    } else {
        scrollButton.style.display = "none"
    }
}

function pageUp() {
    window.location.href = "#"
}

function closeBig() {
    document.getElementById("bigDiv").style.display = "none"
}

let szoveg = "Üdvözöljük a Lucky Kávézó weboldalán!"
let timer
let koz = szoveg.split("")
let i = 0
function indexLoaded() {
    let text = document.getElementById("indexH1")
    if (koz.length > 0) {
        text.innerHTML += koz.shift();
    } else {
        clearTimeout(timer);
            }
    loopTimer = setTimeout('indexLoaded()',70);
    
    /*
    if (koz.length == 0) {
        i++
        if (i % 10 == 0) {
            text.innerHTML += "_"
        } if (i % 20 == 0) {
            text.innerHTML = szoveg
        }
        if (i >= 100) {
            text.innerHTML = szoveg
            i = 100
        }  
    }
    */
}

function picClick(kep) {
    let bigPic = document.getElementById("bigPic")
    let bigDesc = document.getElementById("bigDesc")

    document.getElementById("bigDiv").style.display = "block"
    switch(kep) {
        //Amerikai kávék
        case 1: {
            bigPic.setAttribute("src", "images/Amerikai_Kávék/MiamiBeach_Kávé.PNG")
            bigDesc.innerHTML = "<h1>Miami beach-i vannília latte - Édes</h1> <p>A túl édes latin (főleg argentin és brazil) kávék ellen harcoló „ízesített” amerikai kávék slágerreceptje. A felgőzölt tejbe sűrű vaníliát kevernek, kis fahéjjal és csipetnyi szerecsendióval.</p> <p><i>850Ft</i></p>"
            break
        }
        case 2: {
            bigPic.setAttribute("src", "images/Amerikai_Kávék/Mississippi_Kávé.PNG")
            bigDesc.innerHTML = "<h1>Mississippi gesztenye latte - Édes</h1> <p>A Mississippi környéke, vagyis az amerikai déli konyha az édes gesztenye-recept kreációk zászlóshajója. A karácsony a new orleans-i otthonokban például aligha képzelhető el gyömbéres, gesztenyés sárgarépaszósz nélkül. A szilveszter este pedig a mississippi gesztenye-kávéval indul. Édes, darabos, sűrű gesztenyében úszó varázslattal.</p> <p><i>580Ft</i></p>"
            break
        }
        case 3: {
            bigPic.setAttribute("src", "images/Amerikai_Kávék/StLouise_Kávé.PNG")
            bigDesc.innerHTML = "<h1>St. Louisi földimogyoró brisé - Édes</h1> <p>Az eredetileg orvosságként felirt mogyoróvajat St. Louisban keverték először tejeskávéba, több mint száz évvel ezelőtt. Tejszínt adtak hozzá, és reszelt csokoládéval egészítették ki (ezt hívták akkoriban francia kifejezéssel brisé-nek). Mi még narancs-kókuszt is szórunk a tetejére.</p> <p><i>850Ft</i></p>"
            break
        }

        //Arab kávék
        case 4: {
            bigPic.setAttribute("src", "images/Arab_Kávék/babelTornya_kávé.PNG")
            bigDesc.innerHTML = "<h1>Bábel-tornya karamellkávé - Édes</h1> <p>A mai Irak területén épített ókori torony nyolc emeletből állt, ezért a mi kávénk is nyolc alkotórészből építkezik. A tejjel, karamellával és a cukorral készített alap espressoban egymásba gabalyodnak a fűszerek: a gyömbér, a fahéj, és a szegfűbors, valamint az ital tetején a ropogós tejszín-krokant. Valóságos édenkerti gyönyör!</p> <p><i>850Ft</i></p>"
            break
        }
        case 5: {
            bigPic.setAttribute("src", "images/Arab_Kávék/Beduin_kávé.PNG")
            bigDesc.innerHTML = "<h1>Neve</h1> <p>Leírása</p> <p><i>Ára</i></p>"
            break
        }
        case 6: {
            bigPic.setAttribute("src", "images/Arab_Kávék/goldenLatte_kávé.PNG")
            bigDesc.innerHTML = "<h1>Neve</h1> <p>Leírása</p> <p><i>Ára</i></p>"
            break
        }

        //Francia kávék
        case 7: {
            bigPic.setAttribute("src", "images/Francia_Kávék/Parizsi_kave.PNG")
            bigDesc.innerHTML = "<h1>Neve</h1> <p>Leírása</p> <p><i>Ára</i></p>"
            break
        }
        case 8: {
            bigPic.setAttribute("src", "images/Francia_Kávék/Piskóta_Kávé.PNG")
            bigDesc.innerHTML = "<h1>Neve</h1> <p>Leírása</p> <p><i>Ára</i></p>"
            break
        }
        case 9: {
            bigPic.setAttribute("src", "images/Francia_Kávék/Zanzibári_szegfu_kave.PNG")
            bigDesc.innerHTML = "<h1>Neve</h1> <p>Leírása</p> <p><i>Ára</i></p>"
            break
        }

        //Japán kávék
        case 10: {
            bigPic.setAttribute("src", "images/Japán_Kávék/Kiotoi_Kávé.PNG")
            bigDesc.innerHTML = "<h1>Neve</h1> <p>Leírása</p> <p><i>Ára</i></p>"
            break
        }
        case 11: {
            bigPic.setAttribute("src", "images/Japán_Kávék/Maláj_Kávé.PNG")
            bigDesc.innerHTML = "<h1>Neve</h1> <p>Leírása</p> <p><i>Ára</i></p>"
            break
        }
        case 12: {
            bigPic.setAttribute("src", "images/Japán_Kávék/Oszakai_Kávé.PNG")
            bigDesc.innerHTML = "<h1>Neve</h1> <p>Leírása</p> <p><i>Ára</i></p>"
            break
        }

        //Latin kávék
        case 13: {
            bigPic.setAttribute("src", "images/Latin_Kávék/BarcelonaiRumosKörtés_Kávé.PNG")
            bigDesc.innerHTML = "<h1>Neve</h1> <p>Leírása</p> <p><i>Ára</i></p>"
            break
        }
        case 14: {
            bigPic.setAttribute("src", "images/Latin_Kávék/PeruiNarancsvirágLatte_Kávé.PNG")
            bigDesc.innerHTML = "<h1>Neve</h1> <p>Leírása</p> <p><i>Ára</i></p>"
            break
        }
        case 15: {
            bigPic.setAttribute("src", "images/Latin_Kávék/RióiKókuszos_Kávé.PNG")
            bigDesc.innerHTML = "<h1>Neve</h1> <p>Leírása</p> <p><i>Ára</i></p>"
            break
        }

        //Sarkvidéki kávék
        case 16: {
            bigPic.setAttribute("src", "images/Sarkvidéki_Kávék/BajorJég_Kávé.PNG")
            bigDesc.innerHTML = "<h1>Neve</h1> <p>Leírása</p> <p><i>Ára</i></p>"
            break
        }
        case 17: {
            bigPic.setAttribute("src", "images/Sarkvidéki_Kávék/FilmsztárLatte_Kávé.PNG")
            bigDesc.innerHTML = "<h1>Neve</h1> <p>Leírása</p> <p><i>Ára</i></p>"
            break
        }
        case 18: {
            bigPic.setAttribute("src", "images/Sarkvidéki_Kávék/IceCappuccino_Kávé.PNG")
            bigDesc.innerHTML = "<h1>Neve</h1> <p>Leírása</p> <p><i>Ára</i></p>"
            break
        }
    }
}