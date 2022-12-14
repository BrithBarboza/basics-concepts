## 馃搷1. Scope

El **scope** puede definirse como el alcance que una variable tendr谩 en tu c贸digo. En otras palabras, el scope decide a qu茅 variables tienes acceso en cada parte del c贸digo.

### Scope global

Se dice que una variable est谩 en el **scope global** cuando **est谩 declarada fuera de una funci贸n o de un bloque**. Tambi茅n son conocidas como **variables globales**. Puedes acceder a este tipo de variables desde `cualquier parte de tu c贸digo`, ya sea dentro o fuera de una funci贸n.

### Scope local

Cuando puedes acceder a una variable 煤nicamente **en cierta parte del c贸digo**. Estas tambi茅n son conocidas como **variables locales**.

#### Scope de funci贸n

- Accesibles dentro de toda la funci贸n, pero no fuera de la misma.
- Variables declaradas con `var`.

#### Scope de bloque

- Bloque: porci贸n de c贸digo encerrado entre llaves `{}`.
- Accesibles dentro de todo el bloque, pero no fuera del mismo.
- Variables declaradas con `let` o `const`.

## 馃搷2. Lexical Scoping

El scope de cada variable se determina leyendo el c贸digo del programa, sin ejecutarlo.

## 馃搷3. Variable Shadowing

Se produce cuando una variable que est谩 en un _scope m谩s reducido_ tiene el **mismo nombre** que otra que est谩 en un _scope superior_ siguiendo su cadena de scopes.

- JS prioriza a la variable dentro del scope m谩s interno.
