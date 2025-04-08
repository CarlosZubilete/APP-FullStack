function mostrar1(){
  console.log('Mostrar 1')
  return true
}

console.log('Ejmplo 1');
if(mostrar1()){
  console.log('Es verdadero')
}
/* Se cumple la condicion
  OUTPUT:
    mostrar 1 
    es verdadero
*/ 

console.log('Ejmplo 2');
// if ( mostrar1() && false){
//   console.log('Es verdadero');
// }
/* No se cumple la condicion, pero mostrar1() se ejecuta 
  OUTPUT:
  Mostrar 1
*/

console.log('Ejemplo 3:')
// if ( false && mostrar1()) {
//   console.log('Es verdadero');
// }
/* No se cumple la condicion:
  OUTPUT: no muestra nada, 
  JavaScript, evalua las condiciones de izquierda a derecha
  Como el primer valor es falso , Js ni siquiera evalua la segunda parte de la condicion
  Se llama cortocircuito (short-circuiting)

 NOTAS:
 En JavaScript, una función por sí misma (sin ejecutarla con ()) siempre es considerada "verdadera".
*/
 
