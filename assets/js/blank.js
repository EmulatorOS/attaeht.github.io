
function blank() {
    let inFrame

    try {
        inFrame = window !== top
    } catch (e) {
        inFrame = true
    }

    if (!inFrame && !navigator.userAgent.includes("Firefox")) {
        const popup = open("about:blank", "_blank")
        if (!popup || popup.closed) {
            alert("Popups are disabled!")
        } else {
            const doc = popup.document
            const iframe = doc.createElement("iframe")
            const style = iframe.style
            const link = doc.createElement("link")

            doc.title = "Google"
            link.rel = "icon";
            link.href = "https://raw.githubusercontent.com/attaeht/attaeht.github.io/blob/main/assets/img/favicon.png";
            iframe.src = location.href
            style.position = "fixed"
            style.top = style.bottom = style.left = style.right = 0
            style.border = style.outline = "none"
            style.width = style.height = "100%"

            doc.body.appendChild(iframe)
            location.replace("https://google.com")
        }
    }

}


//detect iframe first
var txt;
if (window.frameElement) {
    //yes i frame SO DONT DO ANYTHING because we already asked

}
else {
    //no iframe we should ask them
    promptalert();
}



//alert
function promptalert() {
    if (confirm("Do you want to open this website in an about:blank page? \ Press ok to open website in a blank tab! \ Press Cancel to continue to normal website!")) {
        txt = "You pressed OK!";
        blank();
    }
    else {
        txt = "You pressed Cancel!";
    }
    console.log(txt);
}
