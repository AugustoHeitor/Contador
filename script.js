function contador(){
    let inicioo = window.document.getElementById('campo1')
    let fimm = window.document.getElementById('campo2')
    let passoo = window.document.getElementById('campo3')
    let res = window.document.getElementById('resultado')

    let inicio = Number(inicioo.value)
    let fim = Number(fimm.value)
    let passo = Number(passoo.value)
    let lista = []

    if(fim == 0 || passo == 0){
        alert("O Fim e o Passo não pode ser 0, preencha um número maior que zero.")
    }else if(passo > fim){
        alert("O Passo não pode ser maior que o Fim, preencha um número menor que o Fim.")
    }else if(inicio > fim){
        alert("O Inicio não pode ser maior que o Fim, preencha um número menor que o Fim.")
    }else{
        while(inicio <= fim){
            lista.push(inicio)
            res.innerHTML = `${lista}`
            inicio += passo
        }
    }
}

