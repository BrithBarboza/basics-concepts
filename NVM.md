## 馃搷1. NVM

**NVM (Node Version Manager)** permite instalar y gestionar distintas versiones de NodeJS en un ordenador, lo que facilita el trabajo con proyectos que requieren versiones distintas.

### Beneficios

NVM soluciona algunos problemas t铆picos que suelen ocurrir cuando se trabaja con npm y al instalar dependencias globales se requieren permisos de sudo. Con nvm no los necesitar谩s y el software funcionar谩 correctamente.

### Instalaci贸n en MAC

Para instalar NVM en el ordenar se deben seguir los siguientes pasos:

- Abrir la terminal y escribir el comando `nvm` , como no lo tenemos instalado, la terminal nos arrojar谩 el siguiente mensaje:

```sh
zsh: command not found: nvm
```

- Para instalarlo debemos de ejecutar la l铆nea de c贸digo que se encuentra en el repositorio oficial de [NVM](https://github.com/nvm-sh/nvm)

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

- Posteriormente ejecutar este comando en la terminal:

```sh
source ~/.nvm/nvm.sh
```

- Verificar la versi贸n de NVM ejecutando en la terminal:

```sh
nvm
```

### Comandos 煤tiles

- Versi贸n de NVM -> `nvm --version`
- Instalar la versi贸n m谩s reciente de NodeJS -> `nnvm install node`
- Verificar la versi贸n de NodeJS en el ordenador-> `node --version`
- Para conocer todas las versiones de NodeJS instaladas en el ordenador-> `nvm list`
- Para listar todas las versiones de NodeJS -> `nvm ls-remote`
- Instalar otra versi贸n de NodeJS -> `nvm install v.##.#.#`
- Usar una versi贸n espec铆fica de NodeJS -> `nvm use v##.#.#`
- Versi贸n de NVM -> `nvm --version`
- Versi贸n de NVM -> `nvm --version`
- Versi贸n de NVM -> `nvm --version`

## 馃搷2. Long Term Support (LTS)

La versi贸n LTS es una abreviatura de la versi贸n **Long Time Support** en la que la versi贸n del software se mantiene durante un per铆odo de tiempo m谩s prolongado.
En Node.js, las nuevas versiones suelen incluir m谩s funciones, un rendimiento optimizado y correcciones de errores. Las versiones de Node.js se ven como x.y.z donde x representa los cambios m谩s significativos y el resto representa los cambios menores.

### Versiones LTS de NodeJS:

La versi贸n LTS de node.js es una versi贸n de node.js con n煤meros **pares** como 14. x.x LTS, 16.x.x, etc. recomendada para la mayor铆a de los usuarios. Debe usar estas versiones para implementar su proyecto e implementarlo en un entorno de producci贸n. La versi贸n LTS se enfoca en la estabilidad y una aplicaci贸n m谩s confiable para cualquier escala.

### Comandos para LTS de NodeJS:

- Para listar todas las versiones de LTS de NodeJS -> `nvm ls-remote --lts`

### 驴C贸mo trabajarlo en Visual Studio Code?

- Crear un archivo con el nombre `.nvmrc`
- Escribir dentro del archivo la versi贸n de NodeJS con la que queremos trabajar.
- Ejecutar `nvm use` para cambiar a la versi贸n indicada en el anterior paso.
