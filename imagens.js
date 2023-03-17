//imagens e sons do jogo
let imagemEstrada;
let imagemAtor;
let imagemCarro1;

let somDeFundo;
let somDaColisao;
let somPonto;

function preload(){
   imagemEstrada = loadImage("imagens/estrada.png")
   imagemAtor = loadImage("imagens/ator-1.png")
   imagemCarro1 = loadImage("imagens/carro-1.png")
   imagemCarro2 = loadImage("imagens/carro-2.png")
   imagemCarro3 = loadImage("imagens/carro-3.png")
   imagemCarro = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
  
  somDeFundo = loadSound("sons/trilha.mp3")
  somDaColisao = loadSound("sons/colidiu.mp3")
  somPonto = loadSound("sons/pontos.wav")
 }
