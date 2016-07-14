//2016 07 13
//Tallerde p5.js
//Hacer una elipse que sigue el mouse
//en javascript existen funciones y variables,

//Variables
//las variables hay que declararlas
//esto se hace solo una vez
// equivale a decirle al compu que guarde un espacio en memoria
var radioCirculo;
// asignacion deun valor a una variable
// las mayusculas y minusculas serán diferente
// para que sea texto debo usar " "
radioCirculo = 50;

//una vairiable declarada acá al inicio será una variable global, y se pueden usaro por todas las funciones
// puede ser útil pero peligroso ya que algún error costaría encontrar dónde está el problema
// manera corta de declarar y asignar la variable es
var extra = 10;

//Variable global de oscilador
var osc;


//Funciones
// declaracion de funciones
// acá se aprende las funciones, pero las ejecuta


function borde1() {
  //acá va lo que hace la función
  //función para definir color de la figura
  // hace que la figura tenga un ancho de 10px
  // que sea relleno amarillo

  // stroke elige el color del trazo
  stroke(255, 255, 0);
  //fill(r, g, b) elige el relleno
  fill(0, 255, 255);
  //strokeWeight (px) define el tamaño del trazado, por defecto es uno
  strokeWeight(10);
}

function borde2() {
  //acá va lo que hace la función
  //función para definir color de la figura
  // hace que la figura tenga un ancho de 10px
  // que sea relleno amarillo

  // stroke elige el color del trazo
  stroke(200, 50, 0);
  //fill(r, g, b) elige el relleno
  fill(0, 25, 0);
  //strokeWeight (px) define el tamaño del trazado, por defecto es uno
  strokeWeight(5);
}

//funcion que aumenta en 10 veces el radio del círculo
// aumento será nuestro argumento
function aumentaRadio(aumento) {
  radioCirculo = radioCirculo + aumento;
}



//Funcion
function setup() {
  // vreateCanves(direccionHorizontal, direccionVertical)
  createCanvas(windowWidth, windowWidth);
  // background (red, green, blue)
  background(0, 255, 0);
  //ellipse(100, 200, 205, 55);

  //Le digo que muestre en la pantalla las cosas, así puedo cachar si hizo lo que hice o no
  console.log(extra);

  //declaramos una variable local
  var noSe = 40;
  //imprimir consola
  console.log(noSe);

  //

  frameRate(1);
}

// se ejecuta 60 veces por segundo
function draw() {

  background(0, 255, 0);

  // si el argumento de if es verdadero,
  // se ejecuta el cuerpo
  // en caso que no sea verdadero
  // se ejecuta el cuerpo else
  if (mouseIsPressed) {
    borde1();
  } else {
    borde2();
  }

  ellipse(100, 100, radioCirculo * 2, radioCirculo);
  ellipse(mouseX, mouseY, radioCirculo, radioCirculo);

  muchosRectangulos(500);

}


function muchosRectangulos(numero) {
  //rect (posX, posY, alto, ancho)

  //sin Borde
  noStroke();


  // loop o bucle
  //for(crear contador; condicion a evaluar; refresco) {cuerpo}
  for (i = 1; i < numero; i++) {
    //rect en posicion aleatoria 
    rect(random(width), random(height), 20, 20);
    //color aleatorio. Si tiene un numero es bn
    // con tres variables es RGB
    //y la cuarta es transparencia
    fill(random(255), random(255), random(255), random(255))
  }

}