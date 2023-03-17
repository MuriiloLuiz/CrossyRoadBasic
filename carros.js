//codigos dos carros

let xCarros = [600, 600, 600, 600, 600 ,600];
let yCarros = [45, 100, 153, 210, 263, 318];
let velCarros = [2, 2.5, 3.2, 5, 3.3, 2];
let comprimentoCarro = 50;
let alturaCarro = 40;

//variaveis do carros

 function mostraCarro(){
    for(let i = 0; i < imagemCarro.length; i++){
  image(imagemCarro[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
    for(let i = 0; i < imagemCarro.length; i++){
        xCarros[i] -= velCarros[i];
        }
}

   
//================================================================
 
function voltaPosicaoInicial(){
  for (let i = 0; i < imagemCarro.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}