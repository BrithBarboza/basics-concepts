## 📍1. Callback

Una función de callback es una función que se pasa a otra función como un **argumento**, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

**Ejemplo 1:**

En el ejemplo el argumento _op_ es el callback.

```sh
const operation = (num1, num2, op) => {
    return op(num1, num2)
}

operation(1, 3, (a, b) => a + b)
operation(1, 3, (a, b) => a * b)
operation(1, 3, (a, b) => a - b)
```

El resultado en la consola es:

```sh
4
3
-2
```

Podemos hacerlo de una forma asíncrona de la siguiente forma:

```sh
const operation = (num1, num2, callback) => {
    return setTimeout(() => {
        callback(num1, num2)
    }, 500)
}

operation(1, 3, (a, b) => {
    console.log(a + b)
    })
```

**Ejemplo 2:**

Inicialmente tenemos este código:

```sh
function modify(array, callback) {
    // hacemos algo...
    array.push('Brith')
    // después de hacer algo...
    callback()
}

const names = ['Gabriel', 'Elías', 'Tomate']

modify(names, function () {
    console.log(' ¡He modificado el array! ')
})
```

Explicación:
- En la línea #55 la función la estamos pasando al callback (arg. de la función de la línea #46). De modo que se ejecuta *después de hacer algo*.

En la consola se ejecuta:

```sh
  ¡He modificado el array!
```

## 📍2. Promises

