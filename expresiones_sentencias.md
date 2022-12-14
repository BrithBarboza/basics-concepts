## 馃搷1. Expresiones

Es una unidad de c贸digo que **produce un valor**.

### Expresi贸n primaria

Cualquier palabra peque帽a que **por s铆 sola produzca un valor**.
Ejemplo: Los valores primitivos (string, number, boolean, null, undefined, symbol or bigint). Tambi茅n los arrays, objetos.

### Expresi贸n de funci贸n

Cuando escribimos una **funci贸n en un lugar del c贸digo donde se espera un valor**.

Podemos asignarle como valor a una variable:

```sh
const func = function saludar() {
    console.log('隆Hola!');
};
```

Podemos pasarla como par谩metro cuando invocamos a otra funci贸n:

```sh
numeros.filter(function filtarPares(numero) {
    return numero % 2 === 0;
});
```

## 馃搷2. Sentencias

Es una acci贸n que JavaScript ejecuta para que ocurra algo, para que avance la l贸gica de nuestro programa.

- Las sentencias terminan con `;`.

### Sentencia de expresi贸n

Sirve para evaluar una expresi贸n.
**Ejemplo:**

- mostrarModal();
- let edad;
- edad = 26;
- edad ++;

### Sentencia vac铆a

Sirve para evaluar una expresi贸n.
**Ejemplo:**

```sh
const arr = [];
for (let i = 0; i <= 99; i++) {
    arr[i] = i + 1;
}
```

Realizamos todo en el ciclo for y reemplazamos el contenido por la sentencia vac铆a `;`.

```sh
const arr = [];
for (let i = 0; i <= 99; arr[i++] = i);
```

### Sentencia de bloque

- Utilizar un bloque de c贸digo, por m谩s que sea para agrupar una 煤nica instrucci贸n.
  **Ejemplo:**

```sh
if (error) {
    mostrarError();
} else {
    mostrarExito();
}
limpiar();
```

### Declaraci贸n de funci贸n

Sirve para _crear una funci贸n_ con el nombre y los par谩metros indicados dentro del scope donde se encuentra esa sentencia.

- No podemos invocar a una funci贸n sin nombre.
  **Ejemplo:**

```sh
const saludar = function(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
};
saludar();
```
