var imagens = ["img/banner-01.jpg", "img/banner-02.jpg", "img/banner-03.jpg", "img/banner-04.jpg", "img/banner-05.jpg"]
var ImagemAtual = 0;

function trocarImagem() {
    ImagemAtual = (ImagemAtual + 1) % 5;
    document.querySelector('.banner-principal img').src = imagens[ImagemAtual];
}
setInterval(trocarImagem, 1500);