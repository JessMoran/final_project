#Cifrado César
Crea una web que pida, por medio de un prompt(), una frase al usuario y
devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César
con el parámetro de desplazamiento de 33 espacios hacia la derecha

Por ejemplo:

Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG

Posteriormente esa misma frase cifrada la devolvera como en un inicio

#Pseudocódigo

1. Crear un prompt(),que pida una frase
2. Crera una funcion llamada 'cipher'
3. Poner una variable vacia la cual recibira la frase codificada
4. Iterar cada letra usando un for
5. Asignarle el código ASCII
6. Si el código es de carácter espacio, se deja sin cifrar (no usar el código ASCII)
    usando un if
7. Hacer dos else if los cuales asignaran un nuevo caracter dependiendo si son
mayusuculas o minusculas
8. Crear una funcion llamada decipher
  (la cual recibirá el valor de la frase cifrada anteriormente)
9. Poner una variable vacia la cual recibira la frase a decodificar
10. Iterar cada letra usando un for
11. Asignarle el código ASCII
12. Si el código es de carácter espacio, se deja sin cifrar (no usar el código ASCII)
    usando un if
13. Hacer dos else if los cuales asignaran un nuevo caracter dependiendo si son
mayusuculas o minusculas
