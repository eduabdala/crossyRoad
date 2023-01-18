//variaveis ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor, 15)
    if (colisao){
      voltaParaPosicaoInicial()
       if (colisao){
    meusPontos -= 1;
    if (meusPontos < 0){
      meusPontos = 0
    }
  }
    }
  }
}

function voltaParaPosicaoInicial(){
  yAtor = 366
}

function colisaoAtorBorda(){
  if(xAtor < -1){
    xAtor = 0
  }
  if(xAtor > 470){
    xAtor = 470
  }
  if (yAtor > 366){
    yAtor = 366
  }
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25);
  text(meusPontos, width / 5, 27);
}

function marcarPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaParaPosicaoInicial()
  }
}

