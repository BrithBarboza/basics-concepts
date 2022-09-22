## 📍1. Expresiones

Es una unidad de código que **produce un valor**.

### Expresión primaria

Cualquier palabra pequeña que **por sí sola produzca un valor**.
Ejemplo: Los valores primitivos (string, number, boolean, null, undefined, symbol or bigint). También los arrays, objetos.

### Expresión de función

Cuando escribimos una **función en un lugar del código donde se espera un valor**.

Podemos asignarle como valor a una variable:

```sh
const func = function saludar() {
    console.log('¡Hola!');
};
```

Podemos pasarla como parámetro cuando invocamos a otra función:

```sh
numeros.filter(function filtarPares(numero) {
    return numero % 2 === 0;
});
```

## 📍2. Sentencias

Es una acción que JavaScript ejecuta para que ocurra algo, para que avance la lógica de nuestro programa.

- Las sentencias terminan con `;`.

### Sentencia de expresión

Sirve para evaluar una expresión.
**Ejemplo:**

- mostrarModal();
- let edad;
- edad = 26;
- edad ++;

### Sentencia vacía

Sirve para evaluar una expresión.
**Ejemplo:**

```sh
const arr = [];
for (let i = 0; i <= 99; i++) {
    arr[i] = i + 1;
}
```

Realizamos todo en el ciclo for y reemplazamos el contenido por la sentencia vacía `;`.

```sh
const arr = [];
for (let i = 0; i <= 99; arr[i++] = i);
```

### Sentencia de bloque

- Utilizar un bloque de código, por más que sea para agrupar una única instrucción.
  **Ejemplo:**

```sh
if (error) {
    mostrarError();
} else {
    mostrarExito();
}
limpiar();
```

### Declaración de función

Sirve para _crear una función_ con el nombre y los parámetros indicados dentro del scope donde se encuentra esa sentencia.

- No podemos invocar a una función sin nombre.
  **Ejemplo:**

```sh
const saludar = function(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
};
saludar();
```
