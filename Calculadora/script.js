function calcular(){
    let n1 = Number(document.getElementById("numero1").value)
    let n2 = Number(document.getElementById("numero2").value)
    let operador = document.getElementById("operador").value

    let resultado

    if (operador === "+"){
        resultado = n1 + n2
    }

    else if(operador === "-"){
        resultado = n1 - n2
    }

    else if(operador === "/"){
        resultado = n1 / n2
    }

    else if(operador === "*"){
        resultado = n1 * n2
    }

    document.getElementById("resultado").innerText = resultado
}

function LimparCampo(){
    document.getElementById("numero1").value = ""
    document.getElementById("numero2").value = ""
    document.getElementById("resultado").innerText = ""
}