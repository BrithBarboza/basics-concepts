## 📍1. Callstack (pila/conjunto de ejecusión)

Sirve para saber qué función se está ejecutando actualmente; además, de saber qué funciones se ejecutaron antes para llegar hasta ella.

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

Explicación: 

- Al llamar a la línea #17, el motor va a llamar a la función que la resuelve.
- Luego, una vez en la función *doble(num)*, hace otro llamado a la función *multiplicar(num1, num2) para que lo resuelva.

Es así como el Callstack se va formando en el siguiente orden:

| multiplicar() |
|    doble()    |
|    result     |
 ----------------

**Importante:**

- El callstack no solo guarda el nombre de la función, el archivo al que pertenece y la próxima línea a ejecutar; sino también su contexto de ejecusión.

### Stacktrace

La secuencia de llamadas que se fueron dando hasta encontrar una excepción o un error inesperado.
