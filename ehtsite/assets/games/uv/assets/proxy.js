function proxy() {
    const name = document.getElementById('jamal');
    name2 = name.value;
    let url = "https://ultraviolet-node.attaeht.repl.co/attaeht.html#";
    turl = url + name2;

    win = window.open();
        win.document.body.style.margin = '0';
        win.document.body.style.height = '100vh';
        var iframe = win.document.createElement('iframe');
        iframe.style.border = 'none';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.margin = '0';
        iframe.src = turl;
        win.document.body.appendChild(iframe)

    window.open(win);
}