function ddd(){
    let inicio = window.document.getElementById('campo1')
    let fim = window.document.getElementById('campo2')
    let passo = window.document.getElementById('campo3')
    let botao = window.document.getElementById('botao')

    if(inicio.value == "" || fim.value == "" || passo.value == ""){
        botao.disabled = false
    }
}