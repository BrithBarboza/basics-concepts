## 馃搷1. Hoisting (elevaci贸n)

Cuando Javascript compila su c贸digo todas las declaraciones de variables `utilizando var`, son llevadas al top de su scope. Lo cual quiere decir que en javascript `puedes declarar una variable despu茅s de haber sido usada`.

**Ejemplo:**
Tenemos la siguiente funci贸n con variables declaradas en diferentes scopes.

```sh
function filterByProductsWithOffers(products) {
    var productsWithOffers = [];
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        if (product.HasADiscount) {
            var Discount = product.Discount;
            if (Discount > 25) {
                productsWithOffers.push(product);
            }
        }
    }
    return productsWithOffers;
}
```

Javascript eleva las declaraciones con var al top m谩s alto, pero deja las inicializaciones y las l铆neas de c贸digo donde las usamos.
De esta manera, las variables quedan disponibles para usarlas desde cualquier lugar dentro de la funci贸n.

```sh
function filterByProductsWithOffers(products) {
    var productsWithOffers;
    var i;
    var product;
    var discount;

    var productsWithOffers = [];
    for (i = 0; i < products.length; i++) {
        product = products[i];
        if (product.HasADiscount) {
            discount = product.discount;
            if (discount > 25) {
                productsWithOffers.push(product);
            }
        }
    }
    return productsWithOffers;
}
```

**Dato:** El Hosting tambi茅n surge efecto en funciones.

## 馃搷2. Contexto de ejecusi贸n

Es el c贸digo que se est谩 ejecutando actualmente y todo lo que lo rodea que lo ayuda a ejecutarlo.
Puede haber muchos **脕mbitos L茅xicos** disponibles, pero el **Contexto de Ejecuci贸n** administra el c贸digo que se est谩 ejecutando actualmente.

### Fase de creaci贸n

Se crean dos 煤nicas cosas:

- Un objeto global llamado `window`.
- Una variable global llamada `this`.

Si hay alguna variable declarada en el c贸digo, se asigna un espacio en la memoria para la variable. La variable se inicializa con un valor 煤nico llamado `undefined`. Si hay una **funci贸n** en el c贸digo, se coloca directamente en la memoria.

### Fase de ejecuci贸n

La ejecuci贸n del c贸digo comienza en esta fase. Aqu铆 tiene lugar la asignaci贸n de valor de las variables globales. Ten en cuenta que aqu铆 no se invoca ninguna funci贸n, como sucede en el contexto de ejecuci贸n de funciones.
