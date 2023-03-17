//variaveis do ator
let xAtor = 90;
let yAtor = 369;
let larguraAtor = 27;
let alturaAtor = 27;
let colisao = false
let meusPontos = 0

 function mostraAtor(){
   image(imagemAtor, xAtor, yAtor, larguraAtor, alturaAtor)
}

 function movimentaAtor(){
   if (keyIsDown(UP_ARROW)){
     yAtor -= 3
   }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}
 function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarro.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtor();
      somDaColisao.play();
      if (meusPontos > 0){
      meusPontos -= 1;
    
      }
    }
  }
 }   

 function voltaAtor(){
   yAtor = 369;
}

 function incluiPontos(){
   textAlign(CENTER);
   textSize(25);
   text(meusPontos, width / 5, 27);
   fill(color(0,255,0));
 }

 function marcaPonto(){
   if (yAtor < 15){
     meusPontos += 1;
     voltaAtor();
     somPonto.play();
   }
 }
   
   function podeSeMover(){
     return yAtor < 369;
   }