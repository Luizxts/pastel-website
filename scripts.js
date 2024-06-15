// scripts.js
const precoBase = 17.00;
const precoAdicional = 3.00;

function atualizarValor() {
    const checkboxesAdicional = document.querySelectorAll('input[name="adicional"]:checked');
    const valorTotal = precoBase + (checkboxesAdicional.length * precoAdicional);
    document.getElementById('valorTotal').innerText = valorTotal.toFixed(2);
}

function enviarPedido() {
    const checkboxesRecheio = document.querySelectorAll('input[name="recheio"]:checked');
    const checkboxesAdicional = document.querySelectorAll('input[name="adicional"]:checked');
    
    if (checkboxesRecheio.length > 10) {
        alert('Você pode selecionar no máximo 10 recheios.');
        return;
    }

    let pedido = 'Pedido de Pastel:\n\nRecheios:\n';
    checkboxesRecheio.forEach((checkbox) => {
        pedido += `- ${checkbox.value}\n`;
    });

    if (checkboxesAdicional.length > 0) {
        pedido += '\nAdicionais (R$3 cada):\n';
        checkboxesAdicional.forEach((checkbox) => {
            pedido += `- ${checkbox.value}\n`;
        });
    }

    const numeroWhatsApp = '+5521990084297';
    const mensagem = encodeURIComponent(pedido);
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    
    window.open(url, '_blank');
}
