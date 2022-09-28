## 📍1. Callback

Sirve para saber qué función se está ejecutando actualmente; además, de saber qué funciones se ejecutaron antes para llegar hasta ella.

```sh
const operation = (num1, num2, op) => {
    return op(num1, num2)
}

operation(1, 3, (a, b) => a + b)
operation(1, 3, (a, b) => a * b)
operation(1, 3, (a, b) => a - b)
```