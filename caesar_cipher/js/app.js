// Se le pide una frase al usuario
var userPhrase = prompt ('¿Deseas cifrar una frase?','Escribe tu frase, aquí!');
//Se hace una función la cual codificará los caracteres ingresados
function cipher (userPhrase){
  var cipherPhrase = '';
// Se itera cada caracter para darle una asignación diferente
  for (var i= 0; i< userPhrase.length; i++){
//Se asigna un codigo de acuerdo a nuestra tabla en ASCII
    var code = userPhrase.charCodeAt(i);
//Si el código es de carácter espacio, se deja sin cifrar
    if (code === 32){
      cipherPhrase += ' ';
//De acuerdo al número en el código asignado anteriormente se le asigna un nuevo caracter
    }else if ( code >= 65 && code <= 90){ //mayusculas
      var newChar = (code-65+33) % 26 + 65;
      cipherPhrase += String.fromCharCode (newChar);// se le da un valor y nos devuelve el caracter
    }else if ( code >= 97 && code <= 122){ //minusculas
      var newChar2 = (code-97+33) % 26 + 97;
      cipherPhrase += String.fromCharCode (newChar2);// se le da un valor y nos devuelve el caracter
    }
  }
  return cipherPhrase;
}

// Se toma el resultado de la funcion anterior para decifrar
function decipher (phrase1){
  var phrase = '';
// Se itera cada caracter para darle una asignación diferente
  for (var i= 0; i< phrase1.length; i++){
//Se asigna un codigo de acuerdo a nuestra tabla en ASCII
    var code = phrase1.charCodeAt(i);
//Si el código es de carácter espacio, se deja sin cifrar
    if (code === 32){
      phrase += ' ';
//De acuerdo al número en el código asignado anteriormente se le asigna un nuevo caracter
    }else if ( code >= 65 && code <= 90){ // mayusculas
      var newChar = (code-65) - 33 % 26 + 65;
      phrase += String.fromCharCode (newChar); // se le da un valor y nos devuelve el caracter
    }else if ( code >= 97 && code <= 122){ // minusculas
      var newChar2 = (code-97) - 33 % 26 + 97;
      phrase += String.fromCharCode (newChar2);// se le da un valor y nos devuelve el caracter
    }
  }
  return phrase;

}

var phrase1 = cipher (userPhrase);
console.log(phrase1);

var phrase2 = decipher (phrase1);
console.log(phrase2);
