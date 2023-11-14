function abrirLogin(){
    const divGeral = document.createElement("div");
    divGeral.id = "divGeral"
    divGeral.style.position = "absolute";
    divGeral.style.zIndex = "101";
    divGeral.style.top = "0px";
    divGeral.style.left = "0px";
    divGeral.style.width = "100%";
    divGeral.style.height = "100%";
    divGeral.style.overflow = "hidden";
    document.body.appendChild(divGeral);
    // document.getElementById("divGeral").style.transitionDuration = "1s"
    document.getElementById("divGeral").style.backdropFilter = "blur(10px)"

    document.getElementById("wrapper").style.display = "block"
    return
}

function fecharLogin(){
    document.getElementById("divGeral").remove()
    document.getElementById("wrapper").style.display = "none"

}