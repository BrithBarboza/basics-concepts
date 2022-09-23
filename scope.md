## 📍1. Scope

El **scope** puede definirse como el alcance que una variable tendrá en tu código. En otras palabras, el scope decide a qué variables tienes acceso en cada parte del código.

### Scope global

Se dice que una variable está en el **scope global** cuando **está declarada fuera de una función o de un bloque**. También son conocidas como **variables globales**. Puedes acceder a este tipo de variables desde `cualquier parte de tu código`, ya sea dentro o fuera de una función.

### Scope local

Cuando puedes acceder a una variable únicamente **en cierta parte del código**. Estas también son conocidas como **variables locales**.

#### Scope de función

- Accesibles dentro de toda la función, pero no fuera de la misma.
- Variables declaradas con `var`.

#### Scope de bloque

- Bloque: porción de código encerrado entre llaves `{}`.
- Accesibles dentro de todo el bloque, pero no fuera del mismo.
- Variables declaradas con `let` o `const`.

## 📍2. Lexical Scoping

El scope de cada variable se determina leyendo el código del programa, sin ejecutarlo.

## 📍3. Variable Shadowing

Se produce cuando una variable que está en un _scope más reducido_ tiene el **mismo nombre** que otra que está en un _scope superior_ siguiendo su cadena de scopes.

- JS prioriza a la variable dentro del scope más interno.
