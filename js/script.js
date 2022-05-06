function subtrai(){
    let mostrar = window.document.querySelector('input#num')
    n = Number(mostrar.value)
    num = n
    mostrar.setAttribute('value', `${n - 1}`)
}

function reseta(){
    let mostrar = window.document.querySelector('input#num')
    n = Number(mostrar.value)
    num = n
    mostrar.setAttribute('value', '0')
}

function adiciona(){
    let mostrar = window.document.querySelector('input#num')
    n = Number(mostrar.value)
    num = n
    mostrar.setAttribute('value', `${n + 1}`)
}