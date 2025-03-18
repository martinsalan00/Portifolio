// Botão de idioma
document.getElementById('toggle-lang').addEventListener('click', function () {
    const isEnglish = this.innerText === "EN";
    this.innerText = isEnglish ? "PT" : "EN";

    document.querySelectorAll("[data-pt]").forEach(el => {
        el.innerText = isEnglish ? el.dataset.en : el.dataset.pt;
    });
});

// Botão de menu hambúrguer
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

// Enviar WhatsApp
function enviarWhats(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const telefone = '5511975764212';

    if (!nome || !mensagem) {
        alert('Preencha todos os campos.');
        return;
    }

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`, '_blank');
}
