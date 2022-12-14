## 馃搷1. Callback

Una funci贸n de callback es una funci贸n que se pasa a otra funci贸n como un **argumento**, que luego se invoca dentro de la funci贸n externa para completar alg煤n tipo de rutina o acci贸n.

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

Podemos hacerlo de una forma as铆ncrona de la siguiente forma:

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

Inicialmente tenemos este c贸digo:

```sh
function modify(array, callback) {
    // hacemos algo...
    array.push('Brith')
    // despu茅s de hacer algo...
    callback()
}

const names = ['Gabriel', 'El铆as', 'Tomate']

modify(names, function () {
    console.log(' 隆He modificado el array! ')
})
```

Explicaci贸n:
- En la l铆nea #55 la funci贸n la estamos pasando al callback (arg. de la funci贸n de la l铆nea #46). De modo que se ejecuta *despu茅s de hacer algo*.

En la consola se ejecuta:

```sh
  隆He modificado el array!
```

## 馃搷2. Promises

