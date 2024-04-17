let botao = document.getElementById('btCalcular');
let botaoSim = document.getElementById('btSim');
let botaoNao = document.getElementById('btNao');
let modal = document.getElementById('modal');
let select = document.getElementById('entradaSelect');
let total = document.getElementById('totalConta');
let qPessoas = document.getElementById('qPessoas');
let Mtotal = document.getElementById('modelT');
let valoresConta1 = document.getElementById('valoresConta1');
let valoresConta2 = document.getElementById('valoresConta2');
let valoresConta3 = document.getElementById('valoresConta3');
let btColcuir = document.getElementById('btConcluir');



botao.onclick = () => {
    if(qPessoas.value == '' || total.value == ''){
      alert("Campo vazio!")
    } else{

        modal.showModal();
    }
}

botaoSim.onclick = () => {
    let a = calcular(qPessoas.value, total.value, 10);
    if (select.value == 'sim') {
        a = a + (5 / qPessoas.value);
        let b = total.value - ((10 * total.value) / 100);
        imprimir(a,b, 5);
        modal.close();
        Mtotal.showModal();
    } else {

        let b = total.value - ((10 * total.value) / 100);
        imprimir(a,b, 0);
        modal.close();
        Mtotal.showModal();

    }

}

botaoNao.onclick = () => {
    let a = calcular(qPessoas.value, total.value, 0);
    if (select.value == 'sim') {
        a = a + (5 / qPessoas.value);
        let b = total.value;
        imprimir(a,b,5)
        modal.close();
        Mtotal.showModal();
    } else {

        let b = total.value;
        imprimir(a,b,0)
        modal.close();
        Mtotal.showModal();

    }
}

function imprimir(a, b, c){
    valoresConta1.innerHTML = `Total do consumo: ${b.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} R$`;
    valoresConta2.innerHTML = `Taxa de serviço: ${c.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} R$`;
    valoresConta3.innerHTML = `Total por pessoa: ${a.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} R$`;
}


btColcuir.onclick = () => {
    Mtotal.close();
    qPessoas.value = '';
    total.value = '';
}

function calcular(pessoas, valorConta, porcentagem) {

    if(porcentagem == 0){
        return valorConta  / pessoas; 
    }else {
        return (valorConta - ((porcentagem * valorConta) / 100)) / pessoas; 
    }
}