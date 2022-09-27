let kepek = 18
function picHover(kep) {
    //document.getElementById("desc").style.display = "flex"
    for (i = 1; i <= kepek; i++) {
        if (i == kep) {
            document.getElementById(i).style.filter = "grayscale(0)"
            document.getElementById(i).style.transform = "scale(1.1)"
            document.getElementById(i).style.filter = "blur(1px)"
            document.getElementById("txt" + i).style.display = "flex"
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
        document.getElementById("txt" + i).style.display = "none"
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