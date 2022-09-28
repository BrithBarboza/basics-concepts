## 📍1. Hoisting (elevación)

Cuando Javascript compila su código todas las declaraciones de variables `utilizando var`, son llevadas al top de su scope. Lo cual quiere decir que en javascript `puedes declarar una variable después de haber sido usada`.

**Ejemplo:**
Tenemos la siguiente función con variables declaradas en diferentes scopes.

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

Javascript eleva las declaraciones con var al top más alto, pero deja las inicializaciones y las líneas de código donde las usamos.
De esta manera, las variables quedan disponibles para usarlas desde cualquier lugar dentro de la función.

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

**Dato:** El Hosting también surge efecto en funciones.

## 📍2. Contexto de ejecusión

Es el código que se está ejecutando actualmente y todo lo que lo rodea que lo ayuda a ejecutarlo.
Puede haber muchos **Ámbitos Léxicos** disponibles, pero el **Contexto de Ejecución** administra el código que se está ejecutando actualmente.

### Fase de creación

Se crean dos únicas cosas:

- Un objeto global llamado `window`.
- Una variable global llamada `this`.

Si hay alguna variable declarada en el código, se asigna un espacio en la memoria para la variable. La variable se inicializa con un valor único llamado `undefined`. Si hay una **función** en el código, se coloca directamente en la memoria.

### Fase de ejecución

La ejecución del código comienza en esta fase. Aquí tiene lugar la asignación de valor de las variables globales. Ten en cuenta que aquí no se invoca ninguna función, como sucede en el contexto de ejecución de funciones.
