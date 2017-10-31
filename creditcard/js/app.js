// Se le pide al usuario los digitos de su tarjeta
var userNum = ['1','2','3','4','5'];
/*prompt ('Ingrese los digitos de su tarjeta');
var numArr = [];
var char = userNum.split ('');
var num = numArr.push (char);
// se asigna el número ingresado a un array colocados de manera inversa*/

var newNum = userNum.reverse ();


// se crea una función la cual revisará si la tarjetaes valida
function isValidCard (newNum){
  var res;
// Intera los digitos del nuevo array
  for ( var i= 0; i < newNum.length; i++ ){
// se hace un parseInt ya que los numeros están como string
    var num = Number.parseInt(newNum[i]);
// se hace un acomparaciónn para delimitar las posiciones pares de las que no lo son
    if (i %2 === 0){
//esta variable recibe los digitos y se le concatena una multiplicación
        var numString = '' + num *2;
//si son impares se separan en caracteres diferente para poder sumarlos entre si
        if(numString.length > 1) {
          var digitsArray = numString.split();
          var dig0 = digitsArray[0];
          var dig1 = digitsArray[1];
          num = Number.parseInt(dig0) + Number.parseInt(dig1);
        }else {
          num = Number.parseInt(numString);
        }

    }
// a la variable resultado se suma lo que tenga y se le añade lo que esta en la variable num
    res += num;

  }
// si el resultado de la suma anterior da residuo de 0 devuelve true de lo contrario sería un false
  if(res % 10 === 0) {
    return true;

  }else {
    return false;
  }

}
isValidCard (newNum);
