
let inicio = window.document.getElementById('campo1')
let fim = window.document.getElementById('campo2')
let passo = window.document.getElementById('campo3')
let botao = window.document.getElementById('botao')
let caixa1 = window.document.getElementById('caixaCampos')
let caixa2 = window.document.getElementById('campo1')
let caixa3 = window.document.getElementById('campo2')
let caixa4 = window.document.getElementById('campo3')


botao.addEventListener('mouseenter', entrar1)
caixa1.addEventListener('mouseenter', entrar2)
caixa2.addEventListener('mouseenter', entrar3)
caixa3.addEventListener('mouseenter', entrar4)
caixa4.addEventListener('mouseenter', entrar5)



function entrar1(){
    if(inicio.value == "" || fim.value == "" || passo.value == ""){
        botao.disabled = true
        alert("Preencha todos os campos....")
    }
}

function entrar2(){
    if(inicio.value == "" || fim.value == "" || passo.value == ""){
        botao.disabled = false
    }
}

function entrar3(){
    if(inicio.value == "" || fim.value == "" || passo.value == ""){
        botao.disabled = false
    }
}

function entrar4(){
    if(inicio.value == "" || fim.value == "" || passo.value == ""){
        botao.disabled = false
    }
}

function entrar5(){
    if(inicio.value == "" || fim.value == "" || passo.value == ""){
        botao.disabled = false
    }
}

