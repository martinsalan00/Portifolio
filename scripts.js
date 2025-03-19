function enviarWhats(event) {
    event.preventDefault(); // Correção na capitalização de "event"

    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const telefone = '5511975764212';

    if (!nome || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar a mensagem.');
        return;
    }

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
}
