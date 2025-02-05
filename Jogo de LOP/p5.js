var gatox
var pocoyo
var patinho=[]
var tempo1
var botaoesc
var botaobase
var botao1ceta
var botao2ceta
var botao3ceta
var botao4ceta
var botao
var sair 
var segundos
var tempo
var a;
var hit,hit2,hit3;
var vidas;
var opa;
var x,y;
var x2,y2;
var x3,y3;
var x4,y4;
var xp1,yp1
var x6,y6;
var pontos
var segundos
var xdoRetangulo,ydoRetangulo,larguradoRetangulo,alturadoRetangulo
var xdoRetangulo2,ydoRetangulo2,larguradoRetangulo2,alturadoRetangulo2
var posxE,posyE,raio
var xbotao1,ybotao1,largura,altura
var xbotao2,ybotao2
var xbotao3,ybotao3
var xcursor,ycursor
var estado 
var raio
var pato
var cont
var fotominha
var teclabaixo
var tecladiretia
var xduret,yduret,larguraduret,alturadoret
var xrect,yrect,largurarect,alturarect
var xpato,ypato
var img=[]
var i
var carro1
var carro2
var carro3
var carro4
var carro5
var hitpatocarro1,hitpatocarro2,hitpatocarro3,hitpatocarro4
var snd
var snd1
var ovo
var snd2
var snd3
var snd4
var sn5
var gato
var fasecompleta
var fotodela
function preload() {
pato= loadImage("Images/Idle 001.png")
fotominha=loadImage("Images/foto pequena para jogo.jpg")
fotodela=loadImage("Images/fotinha da bea .jpeg")  
botaobase=loadImage("Images/KeyboardButtons_Base.png"  )
botao1ceta=loadImage("Images/KeyboardButtons_Basecima.png"  )
ovo=loadImage("Images/egg.png") 
botao2ceta=loadImage( "Images/KeyboardButtons_Basebaixo.png"  )
botao3ceta=loadImage( "Images/KeyboardButtons_Basedireita.png"  )
botao4ceta=loadImage( "Images/KeyboardButtons_Baseesquerda.png"  )
botaoesc=loadImage("Images/esc[2].png")
patinho[0]=loadImage("Images/Running 001.png")
patinho[1]=loadImage("Images/Running 002.png")
carro1=loadImage("Images/CarCollection.png")
carro2=loadImage("Images/CarCollection2.png")
carro3=loadImage("Images/CarCollection3.png")
carro4=loadImage("Images/CarCollection4.png")
soundFormats("mp3")
snd= loadSound('Sons/Wood Plank Flicks.mp3')
snd1=loadSound('Sons/You Are The Only - TrackTribe (mp3cut.net).mp3')
snd2=loadSound('Sons/Stomach Thumps.mp3')
snd3=loadSound('Sons/Takeoff (Sting) - Ethan Meixsell (mp3cut.net).mp3')
snd4= loadSound('Sons/Varios SOM de GAME OVER Sound (mp3cut.net).mp3')
snd5= loadSound('Sons/vitória _ 🔊 efeito sonoro para vídeo🔊 (320 kbps) (mp3cut.net).mp3')
}
function setup() {
createCanvas(400, 400);
opa = "#669900";
x=10;
y=348;
pontos=0
x2 = 350;
y2 = -10
x3=200
y3=-10
x4=-10
y4=100
x5=-10
y5=150
segundos=0
hit=false
hit2=false
hit3=false
vidas=3
a=true
xdoRetangulo=110
ydoRetangulo=50
larguradoRetangulo=180
alturadoRetangulo=50
xdoRetangulo2=110
ydoRetangulo2=120
larguradoRetangulo2=180
alturadoRetangulo2=50
posxE=300
posyE=320
raio=50
largura=100
altura=50
xbotao1=50
ybotao1=90
xbotao2=250
ybotao2=90
xbotao3=150
ybotao3=300
xcursor=50
ycursor=90
x6=330
y6=330
estado=1
xduret=150
yduret=300
larguradoret=80
alturadoret=50
xrect=300
yrect=15
largurarect=70
alturarect=20
segundos=10
tempo=0
tempo1=0
sair=27
xpato=20
ypato=330
raio=20
cont=0
i=0
hitpatocarro1=false
hitpatocarro2=false
hitpatocarro3=false
hitpatocarro4=false
pocoyo=0
gatox=-10
fasecompleta=false
fase2completa=false
}

function draw() {
   if(estado==1){menu()}
   if(estado==2){game()}
   if(estado==3){gameover()}
   if(estado==4){instruçoes()}
   if(estado==5){creditos()}
   if(estado==6){fase2()}
   if(estado==7){fases()}
   if(estado==8){vencedor()}
}

function game (){

createCanvas(400,400)
background(0)
noFill()
stroke(0,0,205)
rect(10,10,380,380)
strokeWeight(1)
stroke(0)
textSize(20)

fill(200,200,200)
text("Pontos: "+pontos,20,32)

fill(200,200,200)
text("Vidas: "+vidas,20,52)

fill(200,200,200)
text("Tempo "+segundos,270,32)

image(carro4,x2, y2,30,60);
y2=y2+2

image(carro4,x3,y3,30,60)
y3=y3+2  

image(carro2,x4,y4,60,30);
x4=x4+2

image(carro1,x5,y5,60,30);
x5=x5+2
                            
image(ovo,x6,y6,25,25)

 cont++
if(cont%15==0){i++}

 if(i%2!==0){image(patinho[0],xpato,ypato,30,30)
              
           }
else{image(patinho[1],xpato,ypato,30,30)
    }


//mover o personagem
if(keyIsDown(LEFT_ARROW)){
xpato=xpato-3;

}if (keyIsDown(RIGHT_ARROW)){
xpato=xpato+3;
}

if (keyIsDown(UP_ARROW)){
ypato=ypato-3;
}
if (keyIsDown(DOWN_ARROW)){
ypato=ypato+3  
}

//vendo se pego na retangulo verde
 hit3 = collideRectRect(x6,y6,20,20,xpato, ypato,30,30 );
if(hit3==true){
  pontos=pontos+1
  snd.play()
  x6=random(100,300)
  y6=random(100,300)
  segundos=segundos+1}

//vendo se pego nos carros
hitpatocarro1= collideRectRect(x2,y2,30,60, xpato, ypato, 30,30); 
if(hitpatocarro1==true){ 
vidas--
segundos--
xpato = 30
ypato = 360 
snd2.play()
} 
hitpatocarro2=collideRectRect(x3,y3,30,60, xpato,ypato,30,30);
if(hitpatocarro2==true){ 
vidas--
segundos--
xpato = 30
ypato = 360   
snd2.play()
} 
hitpatocarro3= collideRectRect(x4,y4,30,60, xpato,ypato,30,30)
if(hitpatocarro3==true){ 
xpato = 30
ypato = 360
vidas=vidas-1
segundos--
snd2.play()
}
hitpatocarro4= collideRectRect(x5,y5,60,30,xpato, ypato,30,30)
if(hitpatocarro4==true){ 
xpato = 30
ypato = 360
vidas=vidas-1
segundos--
snd2.play()
}  

if(y2<=400){ y2=y2+1

                   }else{y2=-20
}
 if(y3<= 400 ){ y3=y3+1
                }else{y3=-20

}
 if(y4<= 400){y4=y4+1
                   }else{y4=-20}
if(x5<=400){x5=x5+1
                   }else{x5=-20}
tempo++
  if(tempo==100){
  segundos--
  tempo=0}
  if(segundos<=5){
    fill(200,0,0)
    text("Tempo "+segundos,270,32)}

if(vidas<=0 ||segundos<=0){estado=3;segundos=10;vidas=3;snd4.play()}

if(pontos>=18){
fill(random(0,200))
text("Voce esta quase lá!! ",100,250)}

   
if(pontos>=20){estado=7;snd5.play();pontos=0;vidas=3;segundos=10;fasecompleta=true}

fill(200,200,200)
text("FASE 1 ",180,380)
  if(keyCode === sair)
 {
    estado=1 }

}

function fases (){


createCanvas(400,400)
background(0,0,205)
noFill()
stroke(0,0,205)
rect(10,10,380,380)
stroke(0,0,0)
noFill()
rect(10,10,380,380)
strokeWeight(4)
stroke(0,0,0)
fill(200,200,200)
rect(110,50,180,50)
noStroke()
fill(0,0,0)
textSize(15)
text("FASE 1",170,85)
strokeWeight(4)
stroke(0,0,0)
fill(200,200,200)
rect(110,120,180,50)
noStroke()
fill(0)
textSize(15)
text("FASE 2 ",170,150)


segundos=10;vidas=3


noStroke()
fill(0)
textSize(15)
text("IMPRESSIONANTE! VOCÊ\nDESBLOQUEOU A FASE 2",110,240)
noFill()
stroke(random(0,250))
strokeWeight(2)
rect(100,205,200,70 )
;
  
if(mouseX >xdoRetangulo  && mouseX < xdoRetangulo+larguradoRetangulo && mouseY > ydoRetangulo  && mouseY < ydoRetangulo+alturadoRetangulo){

strokeWeight(4)
  
rect(110,50,180,50)
fill(0,0,0)
noStroke()
textSize(15)
text("FASE 1",170,85)
xpato = 30;
ypato = 340;
 

}

if(mouseX >xdoRetangulo2  && mouseX < xdoRetangulo2+larguradoRetangulo2 && mouseY > ydoRetangulo2  && mouseY < ydoRetangulo2+alturadoRetangulo2){

strokeWeight(4)

rect(110,120,180,50)
fill(0,0,0)
noStroke()
textSize(15)
fill(0)
text("FASE 2 ",170,150)
xpato = 30;
ypato = 340;

}

  if(mouseIsPressed && (mouseX >xdoRetangulo  && mouseX <       xdoRetangulo+larguradoRetangulo && mouseY > ydoRetangulo  && mouseY < ydoRetangulo+alturadoRetangulo)){estado=2;vidas=3;pontos=0
x=30;y=340 }
 
  if(mouseIsPressed && (mouseX >xdoRetangulo2  && mouseX < xdoRetangulo2+larguradoRetangulo2 && mouseY > ydoRetangulo2  && mouseY < ydoRetangulo2+alturadoRetangulo2)){estado=6;vidas=3;pontos=0
 x = 30;
 y = 340 }



  if(keyCode === sair)
 {
    estado=1 }

}



function fase2(){


createCanvas(400,400)
background(0)
noFill()
stroke(0,0,205)
rect(10,10,380,380)
strokeWeight(1)
stroke(0)

textSize(20)

fill(200,200,200)
text("Pontos: "+pontos,20,32)

fill(200,200,200)
text("Vidas: "+vidas,20,52)

fill(200,200,200)
text("Tempo "+segundos,270,32)

image(carro4,x2, y2,30,60);
y2=y2+2

image(carro4,x3,y3,30,60)
y3=y3+2  

image(carro4,x4,y4,30,60);
y4=y4+2
 
image(carro1,x5,y5,60,30);
x5=x5+2                            

image(ovo,x6,y6,25,25)

 cont++
if(cont%15==0){i++}

 if(i%2!==0){image(patinho[0],xpato,ypato,30,30)
              
           }
else{image(patinho[1],xpato,ypato,30,30)
    }

//mover o personagem
if(keyIsDown(LEFT_ARROW)){
xpato=xpato-3;

}if (keyIsDown(RIGHT_ARROW)){
xpato=xpato+3;
}

if (keyIsDown(UP_ARROW)){
ypato=ypato-3;
}
if (keyIsDown(DOWN_ARROW)){
ypato=ypato+3  
}

//vendo se pego na retangulo verde

 hit3 = collideRectRect(x6,y6,20,20,xpato, ypato,30,30 );
if(hit3==true){
  pontos=pontos+1
  snd.play()
  x6=random(100,300)
  y6=random(100,300)
  segundos=segundos+1}

//vendo se pego nos carros
hitpatocarro1= collideRectRect(x2,y2,30,60, xpato, ypato, 30,30); 
if(hitpatocarro1==true){ 
vidas--
segundos--
xpato = 30
ypato = 360 
snd2.play()
} 
hitpatocarro2=collideRectRect(x3,y3,30,60, xpato,ypato,30,30);
if(hitpatocarro2==true){ 
vidas--
segundos--
xpato = 30
ypato = 360   
snd2.play()
} 
hitpatocarro3= collideRectRect(x4,y4,30,60, xpato,ypato,30,30)
if(hitpatocarro3==true){ 
xpato = 30
ypato = 360
vidas=vidas-1
segundos--
snd2.play()
}
hitpatocarro4= collideRectRect(x5,y5,60,30,xpato, ypato,30,30)
if(hitpatocarro4==true){ 
xpato = 30
ypato = 360
vidas=vidas-1
segundos--
snd2.play()
}  

if(y2<=400){ y2=y2+2

                   }else{y2=-20
}
 if(y3<= 400 ){ y3=y3+2
                }else{y3=-20

}
 if(y4<= 400){y4=y4+2
                   }else{y4=-20}
if(x5<=400){x5=x5+2
                   }else{x5=-20}
tempo++
  if(tempo==100){
  segundos--
    tempo=0
  }
  if(segundos<=5){
    fill(200,0,0)
    text("Tempo "+segundos,270,32)}

if(vidas<=0 ||segundos<=0){estado=3;segundos=10;vidas=3;snd4.play()}

if(pontos>=20){estado=8;segundos=10;vidas=3;snd5.play()
               pontos=0
               xpato = 30;
ypato = 340;
               fase2completa=true
              }
fill(200,200,200)
text("FASE 2 ",180,380)
if(keyCode === sair)
 {
    estado=1 }


}
function vencedor(){
  
createCanvas(400,400)
background(0,0,205)
noFill()
stroke(0,0,205)
rect(10,10,380,380)
stroke(0,0,0)
noFill()
rect(10,10,380,380)
noStroke()
fill(0)
textSize(15)
text("  IMPRESSIONANTE! \nVOCÊ ZEROU O JOGO !",110,200)
noFill()

strokeWeight(2)
rect(100,200,180,70 )

segundos=10;vidas=3
stroke(random(0,250))
textSize(17)
text("pressione ESC para voltar ao menu !!!",50,300)
if(keyCode === sair)
 {
    estado=1
 fasecompleta=false}

}

function gameover(){
createCanvas(400,400)

background(0,0,205)
strokeWeight(2)
stroke(0,0,0)
noFill()
rect(10,10,380,380)


strokeWeight(4)
stroke(0,0,0)
fill(200,200,200)
rect(110,50,180,50)

noStroke()
fill(0,0,0)
textSize(15)
text("VOLTAR PARA O MENU",120,85)

strokeWeight(4)
stroke(0,0,0)
fill(200,200,200)
rect(110,120,180,50)
noStroke()
fill(0,0,0)
textSize(15)
text("TENTAR NOVAMENTE",120,150)

noStroke()
fill(0,0,0)
textSize(25)
text("GAME OVER!",120,250)
noFill()
stroke(random(0,250))
strokeWeight(2)
rect(110,215,180,50 )
;
  
if(mouseX >xdoRetangulo  && mouseX < xdoRetangulo+larguradoRetangulo && mouseY > ydoRetangulo  && mouseY < ydoRetangulo+alturadoRetangulo){

stroke(0,0,0)
noFill()
rect(10,10,380,380)   
fill(0,191,255)
strokeWeight(4)
stroke(0,0,0)

  
rect(110,50,180,50)
fill(0,0,0)
noStroke()
textSize(15)
text("VOLTAR PARA O MENU",120,85)
xpato = 30;
ypato = 340;
}

if(mouseX >xdoRetangulo2  && mouseX < xdoRetangulo2+larguradoRetangulo2 && mouseY > ydoRetangulo2  && mouseY < ydoRetangulo2+alturadoRetangulo2){

stroke(0,0,0)
noFill()
rect(10,10,380,380)   
fill(0,191,255)

strokeWeight(4)
stroke(0,0,0)
rect(110,120,180,50)
fill(0,0,0)
noStroke()
textSize(15)
text("TENTAR NOVAMENTE",120,150)

}
strokeWeight(2)
stroke(225,250,250)
fill(0,0,0)
rect(110,300,180,50)
noStroke()
fill(250,250,250)
textSize(14)
text("USE O MOUSE PARA",130,320) 
text("SELECIONAR",150,340)


  if(mouseIsPressed && (mouseX >xdoRetangulo  && mouseX < xdoRetangulo+larguradoRetangulo && mouseY > ydoRetangulo  && mouseY < ydoRetangulo+alturadoRetangulo)){
    estado=1;vidas=3;pontos=0;x=30;y=340 
  }
 
  if(mouseIsPressed && (mouseX >xdoRetangulo2  && mouseX < xdoRetangulo2+larguradoRetangulo2 && mouseY > ydoRetangulo2  && mouseY < ydoRetangulo2+alturadoRetangulo2)){
  x = 30;y = 340;vidas=3;pontos=0
  if(fasecompleta==true){
  estado=6
    }else{
  estado=2
    }  
  }
    if(keyCode === sair){
    estado=1;
    fasecompleta=false
    }
  
fill(250,250,250)
textSize(14)  
text(" VOCÊ FEZ "+pontos +" PONTOS !!!",117,285)
x = 30;
y = 360;
}

function menu (){
    
var a1,b1,a2,b2
a1=10
b1=200
a2=390
b2=200



createCanvas(400,400)
background(0,0,205)
rect(10,10,380,380)

//telinha
strokeWeight(2)
stroke(0,0,0)
noFill()
fill(0,0,205)
rect(10,10,380,380)

//caminho por onde o pato vai passar
fill(0,0,255)
rect(10,200,380,50)

//primeiro botao

fill(200,200,200)
rect(xbotao1,ybotao1,largura,altura)

//segundo botao

fill(200,200,200)
rect(xbotao2,ybotao2,largura,altura)

//terceiro botao

fill(200,200,200)
rect(xbotao3,ybotao3,largura,altura)

//cursor
fill(0,191,255)
stroke(0)
strokeWeight(4)
rect(xcursor,ycursor,largura,altura)

fill(0)
strokeWeight(0)
textSize(15)
text("INICIAR",70,120)

fill(0)
text("INSTRUÇÕES",252,120)
text("CRÉDITOS",160,330)

strokeWeight(1)
stroke(0)
fill(200,200,200)
text("As aventuras de DUCK",130,40)

image(pato,x=x+1,165,80,80)
if(x==320){x=5}
text("MOVA COM AS SETINHAS",115,380)

}

function keyPressed() {

if (keyCode === LEFT_ARROW) {
   xcursor=xbotao1;ycursor=ybotao1;
  }

  
  if (keyCode === RIGHT_ARROW) {
   xcursor=xbotao2;ycursor=ybotao2;
  }

  if(keyCode=== UP_ARROW && xcursor==xbotao3){ 
    xcursor=xbotao1;ycursor=ybotao1
  }

if(keyCode=== DOWN_ARROW){
    xcursor=xbotao3;ycursor=ybotao3
  }
  
if(keyCode=== ENTER && xcursor==xbotao1 && ycursor==ybotao1){
 estado=2;snd3.play()
  }
  
if (xcursor==xbotao2 && ycursor==ybotao2  && keyCode===ENTER) {
   estado=4;
  }
if(xcursor==xbotao3 && ycursor==ybotao3  && keyCode===ENTER) {
   estado=5;
  }
}

function instruçoes(){  

createCanvas(400,400)
background(0,0,205)
rect(10,10,380,380)

strokeWeight(2)
stroke(0,0,0)
noFill()
fill(0,0,205)
rect(10,10,380,380)

strokeWeight(1)  
textSize(15) 
fill(200,200,200)  
text("Intruçoes\ne comandos",150,30)

noFill()
strokeWeight(2)
rect(140,15,100,40)
 
strokeWeight(0)  
textSize(15) 
fill(200,200,200)
text(" * O jogo As aventuras de DUCK é feito para crianças \n pequenas para ensinalas as noçoes de lateralidade,\n espaço,etc e com isso ensinar conceitos de \n matemática.",20,100)
 
  strokeWeight(0)  
textSize(20) 
fill(200,200,200)
text(" Intruçoes",150,200)
    
strokeWeight(0)  
textSize(15) 
fill(200,200,200)
text(" Use os direcionais do teclado\n para movimentar o pato:  ",20,226)

image(botaobase,90,250)
image(botao1ceta,105,255)

image(botaobase,90,300)
image(botao2ceta,105,305)  


image(botaobase,140,300)
image(botao3ceta,145,310)
  
image(botaobase,40,300)
image(botao4ceta,45,315)
  
strokeWeight(0)  
textSize(15) 
fill(200,200,200)
text("Use para voltar\n para o Menu: ",250,226) 
image(botaoesc,280,270)  
 
 textSize(12)
strokeWeight(0)
text("Pressione o tecla Esc\n para voltar ao Menu",250,30)  
             
 if(keyCode === sair){
    estado=1 
  }
}

function creditos(){
  
createCanvas(400,400)
background(0,0,205)
rect(10,10,380,380)

strokeWeight(2)
stroke(0,0,0)
noFill()
fill(0,0,205)
rect(10,10,380,380)
 
stroke(0)
strokeWeight(1)
textSize(15)
fill(200,200,200)  
text("CRÉDITOS",150,35)
  
image(fotominha,50,50)
textSize(12)
strokeWeight(0)
text("Rilkemberg Fernandes Santos\ndiscente do curso Ciências e\nTecnologia da UFRN\nPROGAMADOR",160,100)

image(fotodela,50,200)
textSize(12)
strokeWeight(0)
text("Beatriz Izidoro\nGraduanda do curso em Pedagogia,\npesquisadora em tecnologias\neducacionais e historia da educaçao.\nNORTEADORA",160,220)

textSize(12)
strokeWeight(0)
text("Pressione o tecla Esc\n para voltar ao Menu",250,30)
 if(keyCode==sair){ 
  estado=1    
 }
}