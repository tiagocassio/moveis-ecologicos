var mensagens = [ 'Mensagem Banner 1', 'Mensagem Banner 2' ];
var bannerAtual = 0;

function trocaBanner() {
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('h2#mensagem').textContent = mensagens[bannerAtual];
}

setInterval(trocaBanner, 1000);