function recarga(){
var x =document.getElementById("div");
var pos =0;
var TimerName="4000";
do {
//  setTimeout(5000);
//clearInterval(TimerName);
//alert("hola");
pos = pos + 0.1;
//pos = pos.toString();
console.log(pos);
x.style.opacity = pos;
//$(".w3-top").css('opacity',pos);
//$(".w3-top").css({"opacity":pos});
//pos = parseInt(pos);
}
//x.style.opacity = pos;
//alert("si");
while (pos <= 2);
}

$(document).ready(function() {// en este documento cuando este listo e interpretado

                $(".w3-top").fadeTo(3000, 2, function() {//que en un tiempo de 3 segundos aumente a 2 la opacidad
                  document.querySelector('h1').innerHTML="Bienvenido!";//para seleccionar etiquetas dentro de js
                    //alert("The fadeTo effect has finished!");

});
$("#boton").fadeTo(3000, 2, function() {//que en un tiempo de 3 segundos aumente a 2 la opacidad
  //document.querySelector('h1').innerHTML="hola bro";//para seleccionar etiquetas dentro de js
    //alert("The fadeTo effect has finished!");

});


        });


function multiplica(numero1,numero2){
console.log(numero1 * numero2);

}

function entreunoydiez(numero){

if (numero < 1 )
{
console.log("el numero es menor a cero");

}
if (numero > 0 && numero < 11 ){
console.log("el numero es esta entre esos numeros");

}

if (numero > 10){
console.log("el numero es mayor a 10");

}
}

function encontrar(){
  var  lista=["asado","chorizo","bondiola","entrada"];
  var car={type:"fiat",model:"500",color:"white"};

document.getElementById("d").innerHTML = "si te fijas a la vuelta de la esquina se hace un " + lista[0] ;
alert( "el auto es un  " + car.type + " " +  car.model);


}


function  encontrar2(){
var requestURL = 'localhost:8000/superheroes.json';
var request = new XMLHttpRequest();//la clave que utilizamos para pedir la peticion
request.open('GET',requestURL);//en la peticion decimos que agarre la variable que tiene el json
console.log(request.open('GET',requestURL));
}

console.log("----AHORA SI DAS CLICK AL BOTON TE TRAE EL JSON")
document.querySelector('#boton').addEventListener('click',traerdatos); //id # y clase .detecta un evento click
//del documento selecciono con query selector el id con  # que se llama boton y agrego un evento que va a ser click y cuando sea click llamo la funcion traer traerdatos
//ejemplo de un querySelector ---> document.querySelector("#demo").innerHTML = "Hello World!";
////////////////////MI TRABAJO CON JSON------------------------------------------------------------
function traerdatos()
{
console.log('dentro de traerdatos');
var solicitud = new XMLHttpRequest();
//hace de mandar solicitudes HTTP algo muy fácil.  Sólo crea una instancia del objeto, abre una URL, y envia la solicitud.
//  El estatus HTTP y el contenido del resultado, estan disponibles en el objecto cuando se termina la transacción.

//declaramos una constante xhttp
//iba a ser una nueva instancia de XMLHttpRequest y accedemos a los metodos de XMLHttpRequest en la conxtante declarada

solicitud.open('GET', 'maderas.json', true); // aca al objeto le selecciono un metodo que va a ser open y que agarren el  ,le estoy pidiendo al server maderas.json y que sea asincrono
//solicitud.responseType = 'json';// le paso que sea de tipo json
solicitud.responseType = 'text';// le paso que sea de tipo texto
/*La propiedad responseType para el objeto XMLHttpRequest se agrega en su nueva variante XMLHttpRequest Level 2 y se incluye en HTML 5, no estoy seguro de que todos los navegadores admitan este método, por lo que es posible que esté usando un navegador que no implemente ese método.*/
// archivo 'maderas.json' y le digo que sea asincrono con el true

solicitud.send();// Envía la petición al servidor para que me traiga lo que yo quiero agarrar con el GET anteriormente

//aca espero la respuesta---------------------------------------------------------
 solicitud.onreadystatechange = function(){//cuando este cargada toodo el archivo json llamo a una funcion anonima
console.log("devolviendo json ")

if(solicitud.readyState == 4 && solicitud.status == 200) // puedo agregarle this.readyState y lo va a entender porque esta dentro de la funcion function() que es anonima y que agarra al objeto solicitud
{
//console.log(solicitud.responseText);
//La propiedad responseText te devolverá siempre un DOMString, esto es básicamente un string normal (UTF 16), conteniendo la respuesta del servidor. Aún especifiques en la respuesta la cabecera Content-Type, al usar responseText obtendrás la representación en texto plano de la respuesta.

console.log(solicitud.response);//muestra un null porque es una respuesta de tipo que se esperaba(en nuestro caso json o texto) no un texto plano de la solicitud
//Por otro lado, la propiedad response obtiene la respuesta de acuerdo al tipo que se espera y que se ha especificado por medio de XMLHttpRequest#responseType. Es decir, si especificas que la respuesta será un JSON:
console.log(solicitud.responseText);// tanto el response como el responseText traen la respuesta solo que uno lo trae en texto y el otro dependiendo de lo que vos hayas puesto en el responseType, A MI ME TIRABA ERROR responseType='json' no lo traia bien , parece ser por la version de chrome.
var respuesta = solicitud.response;// al usar el responseType "text" responseText y response van a aparecer iguales
mostrar(respuesta);
}
}

function mostrar(texto)
{//uso el parse para pasarlo como un json todo el texto
var datos =JSON.parse(texto);//parse(): Acepta una cadena JSON como parámetro, y devuelve el objeto JavaScript correspondiente, es decir recibe un texto y lo transforma en json, porque solo ahi tengo la cadena de texto pero realmente no sabe que es un json porque en responseType lo pase a text
//mmmmconsole.log(datos); //muestra todo el json traido como array de tipo json
//document.querySelector('#header').innerHTML = texto ; //muesta todo en el encabezado h1
for (var item of datos){////creo una variable llamada item por cada variable item de datos
console.log(item.Color); //ese item. llamo a la propiedad color
}

//console.log(datos2);
var datos2 = datos[0].Color; // mostrará datos[0] y la propiedad color de ese index

console.log(datos2);//Salida por consola

/////OTRO FOR

for (var i = 0; i <datos.length; i++) {/// mismo for para que se veo que se puede tomar el datos
console.log(datos[i].Color);/// salida de los 3 colores por consola

}

//######'-------'FOR ORIGINAL QUE ME TRAE LOS DATOS DEL JSON LOS OTROS ERAN PRUEBAS PARA TRAER POR CONSOLA
for (var j = 0; j <datos.length; j++) {/// mismo for para que se veo que se puede tomar el datos
console.log(datos[j].Color);/// salida de los 3 colores por consola


var nombre = datos[j].nombre;
var pais = datos[j].Pais;
var flexibilidad = datos[j].Flexibilidad;

//document.getElementById("myImg").style.visibility = "visible";
//document.getElementById("myImg").src = datos[2].imagen;
if (j % 3 == 0 || j == 0 ) ///como quiero dividir y que me salga abajo las otras imagenes seteo en 3 la cantidad posible
//entonces agarro a los que son divisibles por 3 y los que son iguales al contador en 0
{
  var tr =document.createElement("tr");//y cuando pase esa condicion creo un objeto del tipo elemento tr
document.getElementById("res").appendChild(tr);// agarro del documento el elemento que tenga id "res" que es la tabla y la agrego el objeto de tag tr
//console.log("hola campeon");
}

var fila = document.createElement("td");//creo un nuevo elemento llamado td

tr.appendChild(fila); //donde lo agrego? en el objeto dom creado tr , la idea es que si es falso porque no es divisible por 3 o 0 ENTONCES
//que en ese tr siga creando un td ,adentro de ese td una imagen y dentro de ese td una lista desordenada sin . con 3 tags li una por cada atributo sacado del json
var elem = document.createElement("img"); //creo otro elemento imagen
elem.setAttribute("src", datos[j].imagen);//le agrego el atributo de mi json que es la imagen su atributo  y que sea del tipo src de mi tag
elem.setAttribute("width", "200");//atributos de ancho y alto de la imagen
elem.setAttribute("height", "150");
fila.appendChild(elem);//lo agrego en fila que es el objeto dom de mi td

var ul = document.createElement("ul");///okey creo un elemento de tipo lista desordenada
ul.setAttribute("style","list-style-type:none");///le meto un atributo style que no tenga .
fila.appendChild(ul);// en fila que es el objeto dom "td" la hago un appendChild de el objeto ul
var li = document.createElement("li");//creo una lista
ul.appendChild(li);//se la agrego a ul
li.innerHTML = nombre;//es objeto creado le metemos un innerHTML y lo mismo con los otros agregados
var li = document.createElement("li");
ul.appendChild(li);
li.innerHTML = pais;
var li = document.createElement("li");
ul.appendChild(li);
li.innerHTML = flexibilidad;
console.log(nombre);
console.log(pais);
console.log(flexibilidad);


}
//######'-------'FOR
  }



}

//#### CAMBIANDO COLOR boton y TD tambien
document.querySelector('#boton').addEventListener('mouseover',changecolor); ///eventos con query selector
document.querySelector('#boton').addEventListener('mouseout',changecolor2);
document.querySelector('#res').addEventListener('mouseover',changecolor3);
document.querySelector('#res').addEventListener('mouseout',changecolor4);
function changecolor(){
$("#boton").css("background-color", "white"); ///aca como tengo la libreria traida de jquery puedo meterme al css sin probemas
}
function changecolor2(){
document.querySelector("#boton").style.backgroundColor = "#f44336";/// y aca lo mismo sin jquery con el query selector metiendome en el id tambien
////son dos funciones que cambian el color dependiendo el evento pero el codigo es diferente
}
function changecolor3(){
$("#res").css("background-color", "red");
console.log("cambia color");
}
function changecolor4(){
document.querySelector("#res").style.backgroundColor = "white";
console.log("cambia color al original");
}
