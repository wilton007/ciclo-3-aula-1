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
    modal.showModal();
}

botaoSim.onclick = () => {
    let a = calcular(qPessoas.value, total.value, 10);
    if (select.value == 'sim') {
        a = a + (5 / qPessoas.value);
        let b = total.value - ((10 * total.value) / 100);
        valoresConta1.innerHTML = `Total do consumo: ${b.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} R$`;
        valoresConta2.innerHTML = `Taxa de serviço: 5,00 R$`;
        valoresConta3.innerHTML = `Total por pessoa: ${a.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} R$`;
        modal.close();
        Mtotal.showModal();
    } else {

        let b = total.value - ((10 * total.value) / 100);
        valoresConta1.innerHTML = `Total do consumo: ${b.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} R$`;
        valoresConta2.innerHTML = `Taxa de serviço: 0,00 R$`;
        valoresConta3.innerHTML = `Total por pessoa: ${a.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} R$`;
        modal.close();
        Mtotal.showModal();

    }

}

btNao.onclick = () => {
    let a = calcular(qPessoas.value, total.value, 0);
    if (select.value == 'sim') {
        a = a + (5 / qPessoas.value);
        let b = total.value;
        valoresConta1.innerHTML = `Total do consumo: ${b.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} R$`;
        valoresConta2.innerHTML = `Taxa de serviço: 5,00 R$`;
        valoresConta3.innerHTML = `Total por pessoa: ${a.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} R$`;
        modal.close();
        Mtotal.showModal();
    } else {

        let b = total.value;
        valoresConta1.innerHTML = `Total do consumo: ${b.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} R$`;
        valoresConta2.innerHTML = `Taxa de serviço: 0,00 R$`;
        valoresConta3.innerHTML = `Total por pessoa: ${a.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} R$`;
        modal.close();
        Mtotal.showModal();

    }
}


btColcuir.onclick = () => {
    Mtotal.close();
}

function calcular(pessoas, valorConta, porcentagem) {

    if(porcentagem == 0){
        return valorConta  / pessoas; 
    }else {
        return (valorConta - ((porcentagem * valorConta) / 100)) / pessoas; 
    }
}