## 馃搷1. Callstack (pila/conjunto de ejecusi贸n)

Sirve para saber qu茅 funci贸n se est谩 ejecutando actualmente; adem谩s, de saber qu茅 funciones se ejecutaron antes para llegar hasta ella.

```sh
function multiplicar(num1, num2) {
    return num1 * num2;
}

function doble(num) {
    return multiplicar(num, 2);
}

let result = doble(7);
console.log(' El doble de 7 es: ' + result);
```

Explicaci贸n: 

- Al llamar a la l铆nea #17, el motor va a llamar a la funci贸n que la resuelve.
- Luego, una vez en la funci贸n *doble(num)*, hace otro llamado a la funci贸n *multiplicar(num1, num2) para que lo resuelva.

Es as铆 como el Callstack se va formando en el siguiente orden:

| multiplicar() |
|    doble()    |
|    result     |
 ----------------

**Importante:**

- El callstack no solo guarda el nombre de la funci贸n, el archivo al que pertenece y la pr贸xima l铆nea a ejecutar; sino tambi茅n su contexto de ejecusi贸n.

### Stacktrace

La secuencia de llamadas que se fueron dando hasta encontrar una excepci贸n o un error inesperado.
