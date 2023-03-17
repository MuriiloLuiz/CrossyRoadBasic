 function setup() {
  createCanvas(500, 400);
  somDeFundo.loop();
}

 function draw() {
  background(imagemEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro();
  voltaPosicaoInicial();
  verificaColisao();
  incluiPontos();
  marcaPonto();
 }










