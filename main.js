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

function submitBlog() {
    let name = document.getElementById("blogName").value
    let message = document.getElementById("blogMsg").value

    if (name) {
        if (message) {
            let query = "$name=" + name + "$msg=" + message
            console.log(query)
            alert("Sajnáljuk!\nAz adatbázis jelenleg fejlesztés alatt áll, így a blog rész jelenleg nem üzemel.")
        } else {
            alert("Írjon be egy üzenetet!")
        }
    } else {
        alert("Írja be a nevét!")
    }
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
            bigDesc.innerHTML = "<h1> Miami beach-i vannília latte - Édes</h1> <p> A túl édes latin (főleg argentin és brazil) kávék ellen harcoló „ízesített” amerikai kávék slágerreceptje. A felgőzölt tejbe sűrű vaníliát kevernek, kis fahéjjal és csipetnyi szerecsendióval.</p> <p><i> 850 Ft</i></p>"
            break
        }
        case 2: {
            bigPic.setAttribute("src", "images/Amerikai_Kávék/Mississippi_Kávé.PNG")
            bigDesc.innerHTML = "<h1> Mississippi gesztenye latte - Édes</h1> <p> A Mississippi környéke, vagyis az amerikai déli konyha az édes gesztenye-recept kreációk zászlóshajója. A karácsony a new orleans-i otthonokban például aligha képzelhető el gyömbéres, gesztenyés sárgarépaszósz nélkül. A szilveszter este pedig a mississippi gesztenye-kávéval indul. Édes, darabos, sűrű gesztenyében úszó varázslattal.</p> <p><i> 850 Ft</i></p>"
            break
        }
        case 3: {
            bigPic.setAttribute("src", "images/Amerikai_Kávék/StLouise_Kávé.PNG")
            bigDesc.innerHTML = "<h1> St. Louisi földimogyoró brisé - Édes</h1> <p> Az eredetileg orvosságként felirt mogyoróvajat St. Louisban keverték először tejeskávéba, több mint száz évvel ezelőtt. Tejszínt adtak hozzá, és reszelt csokoládéval egészítették ki (ezt hívták akkoriban francia kifejezéssel brisé-nek). Mi még narancs-kókuszt is szórunk a tetejére.</p> <p><i> 850 Ft</i></p>"
            break
        }

        //Arab kávék
        case 4: {
            bigPic.setAttribute("src", "images/Arab_Kávék/babelTornya_kávé.PNG")
            bigDesc.innerHTML = "<h1> Bábel-tornya karamellkávé - Édes</h1> <p> A mai Irak területén épített ókori torony nyolc emeletből állt, ezért a mi kávénk is nyolc alkotórészből építkezik. A tejjel, karamellával és a cukorral készített alap espressoban egymásba gabalyodnak a fűszerek: a gyömbér, a fahéj, és a szegfűbors, valamint az ital tetején a ropogós tejszín-krokant. Valóságos édenkerti gyönyör!</p> <p><i> 850 Ft</i></p>"
            break
        }
        case 5: {
            bigPic.setAttribute("src", "images/Arab_Kávék/Beduin_kávé.PNG")
            bigDesc.innerHTML = "<h1> Beduin kávé - Édes, nem tartalmaz tejet</h1> <p> Sokáig készül, mert őrölt kardamom van benne. Évszázadokon át ez volt az arab tevekaravánok kedvenc itala. Mi is forró homokban főzzük, úgy mint egykor a beduinok. A szír változatot, ahogy még a véres polgárháború előtt aleppóban készítették, és ahogy például a szíriában sok időt töltő krimiszerző, Agatha Christie is szerette.</p> <p><i> 700 Ft</i></p>"
            break
        }
        case 6: {
            bigPic.setAttribute("src", "images/Arab_Kávék/goldenLatte_kávé.PNG")
            bigDesc.innerHTML = "<h1> Pandzsábi vaníliás golden latte</h1> <p> A legendás india-kutató, Baktay Ervin kalandos élete ihlette ezt a desszertkávét. Brit és indiai ízvilág, madártej-úszósziget, kávé és vanília koktélospohárban. Pont olyan egzotikus, mint az egykori gyarmati világ.</p> <p><i> 700 Ft</i></p>"
            break
        }

        //Francia kávék
        case 7: {
            bigPic.setAttribute("src", "images/Francia_Kávék/Parizsi_kave.PNG")
            bigDesc.innerHTML = "<h1> Párizsi tejeskávé „Cafe au lait”</h1> <p> A franciák „válasza” az olaszok tejeskávéjára. Csak azért is gőzölt tejjel készül! Ráadásul sok tejjel. A hosszú kávé és a gőzölt tej egyformán meleg, mert az ízek így keverednek igazán lágyan össze. A tetején hab és fahéj.</p> <p><i> 800 Ft</i></p>"
            break
        }
        case 8: {
            bigPic.setAttribute("src", "images/Francia_Kávék/Piskóta_Kávé.PNG")
            bigDesc.innerHTML = "<h1> Savoyai rumos-diós piskótakávé</h1> <p> Akár tiramisu-kávénak is hívhatnánk! Évszázadokkal ezelőtt a francia udvari cukrászok az édes-szájú XII. Lajos számára „találták”ki a babapiskótát, a savoiardit. Nem sokkal később a savoyai hercegségben ez felkerült a habos, rumos-diós kávé tetejére. Folyékony tiramisu!</p> <p><i> 850 Ft</i></p>"
            break
        }
        case 9: {
            bigPic.setAttribute("src", "images/Francia_Kávék/Zanzibári_szegfu_kave.PNG")
            bigDesc.innerHTML = "<h1> Zanzibári szegfűszeg latte</h1> <p> Sok szegfűszeggel, kis fahéjjal, gyömbérrel (ezt az ottani szultánnak köszönjük), és narancsvirág kivonattal főzött édeskés latte. Hosszú, lágy, levegős tejeskávé, barátnők pletykapartijaihoz.</p> <p><i> 850 Ft</i></p>"
            break
        }

        //Japán kávék
        case 10: {
            bigPic.setAttribute("src", "images/Japán_Kávék/Kiotoi_Kávé.PNG")
            bigDesc.innerHTML = "<h1> Kiotói szilvás krémkávé - Édes</h1> <p> A habos, fahéjas, espresso alapú kávé különlegessége leginkább a jégbe fagyott japán szilva turmixszerű elegye, ami a forró kávét langyossá, az italt pedig krémessé teszi. Kiotóban a lefagyasztott gyümölcsök pépjét hámozatlanul keverik a kávéba, és annyira népszerű, hogy karácsony táján még az utcán is árulják.</p> <p><i> 700 Ft</i></p>"
            break
        }
        case 11: {
            bigPic.setAttribute("src", "images/Japán_Kávék/Maláj_Kávé.PNG")
            bigDesc.innerHTML = "<h1> Maláj fehércsoki kávé</h1> <p> A malajziában, ahol rengeteg japán él, az arrafelé mindennaposnak számító ipoh fehérkávénak ez a japánosított luxusverziója. Maláj ital japán kávé-technikával tökéletesítve. Édeskés kávészemekből főzött, fehércsokoládéval ízesített, kisméretű latte. Pörkölt dióval keverik össze, hogy pikáns legyen. A pohár alján ott a csoki, ne felejtsék el kikanalazni!</p> <p><i> 700 Ft</i></p>"
            break
        }
        case 12: {
            bigPic.setAttribute("src", "images/Japán_Kávék/Oszakai_Kávé.PNG")
            bigDesc.innerHTML = "<h1> Oszakai pisztáciás mathcha latte</h1> <p> Tejeskávé - az Oszakai cukrászatok kreatív kísérletezései alapján. Pisztácia pasztát társítunk porított zöld matcha teával<a href = 'https://takeb1nzyto.space/'>,</a> ezt keverjük a sűrű, tejszínes lattéba. Az eredmény egy izgalmas, mandulás-marcipános ízvilágú kávéital japán csészében szervírozva.</p> <p><i> 850 Ft</i></p>"
            break
        }

        //Latin kávék
        case 13: {
            bigPic.setAttribute("src", "images/Latin_Kávék/BarcelonaiRumosKörtés_Kávé.PNG")
            bigDesc.innerHTML = "<h1> Barcelonai rumos-körtés csillámmokka - Édes</h1> <p> Barcelonai cortado az alapja, vagyis kesernyésre pörkölt (az olasznál hosszabbra főzött) katalán espresso, leheletnyi tejjel. Ennek a mélyén ölelkezik össze a rum a körtepéppel és a forró csokoládéval. A latin ital-költeményt sok hab és csillámló csokigömböcskék koronázzák.</p> <p><i> 850 Ft</i></p>"
            break
        }
        case 14: {
            bigPic.setAttribute("src", "images/Latin_Kávék/PeruiNarancsvirágLatte_Kávé.PNG")
            bigDesc.innerHTML = "<h1>Perui narancs-virág latte - Édes</h1> <p> Ennek a meleg, tejes italnak már a részletes leírása is költemény, hát még az íze! Inka égi-virág kávé sárgabarack zselével, kék konkolyból és narancsvirágból.</p> <p><i> 850 Ft</i></p>"
            break
        }
        case 15: {
            bigPic.setAttribute("src", "images/Latin_Kávék/RióiKókuszos_Kávé.PNG")
            bigDesc.innerHTML = "<h1> Riói kókuszos „media” rózsaborssal - Édes</h1> <p> Ahogy az elnevezésben szereplő „media” szócska is mutatja, ez a kávé tejjel, közepes hosszúságúra főzve készül, a legújabb riói trend szerint, kókusszal és rózsaborssal felgőzölve. A rózsabors elnevezése csalóka, mert az íze nem csípős, hanem édeskés, csak a végén emlékeztet kicsit a borsra.</p> <p><i> 850 Ft</i></p>"
            break
        }

        //Sarkvidéki kávék
        case 16: {
            bigPic.setAttribute("src", "images/Sarkvidéki_Kávék/BajorJég_Kávé.PNG")
            bigDesc.innerHTML = "<h1> Bajor jég-kávé - Édes</h1> <p> A bajorok világosra pörkölt, citrusos kávéja remekül egybesimul a hideg, olvasztott cukorsziruppal. Ezt nálunk citromreszelék teszi még inkább pikánssá. A bajorok tejszínhabot tesznek a tetejére, úgyhogy mi is!</p> <p><i> 850 Ft</i></p>"
            break
        }
        case 17: {
            bigPic.setAttribute("src", "images/Sarkvidéki_Kávék/FilmsztárLatte_Kávé.PNG")
            bigDesc.innerHTML = "<h1> Filmsztárok mogyorós kókusz-lattéja - Édes</h1> <p> Los Angeles-i jeges kókusz-kávé mogyorós csokikrémmel, és rózsaborssal meghintett habbal. Ízkavalkád! Pont olyan intenzív és ingergazdag, mint a hollywoodi kasszasikerek. És pont úgy, mint a legjobb filmek, ez is a végére áll össze  csak most a szánkban.</p> <p><i> 850 Ft</i></p>"
            break
        }
        case 18: {
            bigPic.setAttribute("src", "images/Sarkvidéki_Kávék/IceCappuccino_Kávé.PNG")
            bigDesc.innerHTML = "<h1> Ice cappuccino - Édes</h1> <p> A jeges „klasszikus”. Krémes espresso és habosított édes tej jeges keveréke. Az espressot rövidre főzzük, hiszen a jég miután megolvad, úgyis kicsit „meghosszabbítja” a kávét!</p> <p><i> 850 Ft</i></p>"
            break
        }

        //SÜTEMÉNYEK
        //Sajttorták
        case 's1': {
            bigPic.setAttribute("src", "images/Sütemények/Sajttortak/karamellas_sajttorta.png")
            bigDesc.innerHTML = "<h1> Cím </h2> <p> Leírás </p> <p><i> Ár </i></p>"
            break
        }
        case 's2': {
            bigPic.setAttribute("src", "images/Sütemények/Sajttortak/Marakujas_sajttorta.png")
            bigDesc.innerHTML = "<h1> Cím </h2> <p> Leírás </p> <p><i> Ár </i></p>"
            break
        }
        case 's3': {
            bigPic.setAttribute("src", "images/Sütemények/Sajttortak/Nutellas_sajttorta.png")
            bigDesc.innerHTML = "<h1> Cím </h2> <p> Leírás </p> <p><i> Ár </i></p>"
            break
        }
    }
}