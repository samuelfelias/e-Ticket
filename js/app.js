let qntdPista = document.getElementById("qtd-pista").textContent
let qntdSuperior = document.getElementById("qtd-superior").textContent
let qntdInferior = document.getElementById("qtd-inferior").textContent
function comprar(){
    
    let qntdDesejada = document.getElementById("qtd").value
    let opc = document.getElementById("tipo-ingresso").value


    if(opc == "inferior"){
        if(qntdDesejada > qntdInferior){
            alert("Quantidade indisponível para tipo inferior")
        }else{
            qntdInferior = qntdInferior - qntdDesejada
            let spanInferior = document.getElementById("qtd-inferior")
            spanInferior.innerHTML = `<span id="qtd-pista">${qntdInferior}</span>`
        }
    }
    if(opc == "superior"){
        if(qntdDesejada > qntdSuperior){
            alert("Quantidade indisponível para tipo superior")
        }else{
            qntdSuperior = qntdSuperior - qntdDesejada
            let spanSuperior = document.getElementById("qtd-superior")
            spanSuperior.innerHTML = `<span id="qtd-pista">${qntdSuperior}</span>`
        }
    }
    if(opc == "pista"){
        if(qntdDesejada > qntdPista){
            alert("Quantidade indisponível para tipo pista")
        }else{
            qntdPista = qntdPista - qntdDesejada
            let spanPista = document.getElementById("qtd-pista")
            spanPista.innerHTML = `<span id="qtd-pista">${qntdPista}</span>`
        }
    }
    document.getElementById("qtd").value = ""
}
