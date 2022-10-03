function kepLeiras(kep) {
    let leiras = document.getElementById("txt")
    switch(kep) {
        case logo: {
            leiras.innerHTML = "alap"
            break
        }
        default: {
            leiras.innerHTML = ""
            break
        }
    }
}

let kepek = 3
function picHover(kep) {
    //document.getElementById("desc").style.display = "flex"
    for (i = 1; i <= kepek; i++) {
        if (i == kep) {
            document.getElementById(i).style.filter = "grayscale(0)"
            document.getElementById(i).style.transform = "scale(1.1)"
            document.getElementById(i).style.filter = "blur(5px)"
            document.getElementById("txt" + i).style.display = "flex"
            document.getElementById(i).style.backgroundColor = "white"
        } else {
            document.getElementById(i).style.filter = "grayscale(10)"
            document.getElementById(i).style.transform = "scale(1)"
        }
    }
}

function picDown(kep) {
    //document.getElementById("desc").style.display = "none"
    for (i = 1; i <= kepek; i++) {
        document.getElementById(i).style.filter = "grayscale(0)"
        document.getElementById(i).style.transform = "scale(1)"
        document.getElementById("txt" + i).style.display = "none"
        document.getElementById(i).style.backgroundColor = "rgba(255, 255, 255, 0.2)"
    }
}