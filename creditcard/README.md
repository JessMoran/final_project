## Tarjeta de crédito válida

Descripción
Crear una web que pida, el número de una tarjeta de crédito y confirme
su validez según el algoritmo de Luhn, contemplando que el usuario
no debe poder ingresar un campo vacío


# Pseudocódigo

1. Crear un prompt que pida el numero de tarjeta del usuario
2. Pasar los numeros ingresados a un array
3. Hacer que queden de manera inversa usando reverse
4. Crear una función llamada 'isValidCard'
5. Hacer un for que recorra el array
6. Hacer que el parseInt haga el string numbers
7. Poner un if que me permita commparar y tomar
  los numeros que están en una posicion par
8. hacer una variable vacia la cual va a recibir los digitos y posteriormente  multiplicará los que se encuentran en un posición par por 2
9. si el resultado es mayor o igual a 10
debera separar los caracteres con un split y se sumaran entre si
10. en caso de ser impares de igual manera se hará un paresint y se sumarán con los numeros del resultado de los pares
11. El reusltado de la suma anterior se le sacará el residuo de 10,s si el resultado es igual a 0 la tarjeta es valida
