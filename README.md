## 📍1. NVM
**NVM (Node Version Manager)** permite instalar y gestionar distintas versiones de NodeJS en un ordenador, lo que facilita el trabajo con proyectos que requieren versiones distintas.

### Beneficios
NVM soluciona algunos problemas típicos que suelen ocurrir cuando se trabaja con npm y al instalar dependencias globales se requieren permisos de sudo. Con nvm no los necesitarás y el software funcionará correctamente.

### Instalación en MAC
Para instalar NVM en el ordenar se deben seguir los siguientes pasos:

* Abrir la terminal y escribir el comando `nvm` , como no lo tenemos instalado, la terminal nos arrojará el siguiente mensaje:
```sh
zsh: command not found: nvm
```

* Para instalarlo debemos de ejecutar la línea de código que se encuentra en el repositorio oficial de [NVM](https://github.com/nvm-sh/nvm)
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

* Posteriormente ejecutar este comando en la terminal:
```sh
source ~/.nvm/nvm.sh
```

* Verificar la versión de NVM ejecutando en la terminal:
```sh
nvm
```

### Comandos útiles
* Versión de NVM -> `nvm --version`
* Instalar la versión más reciente de NodeJS -> `nnvm install node`
* Verificar la versión de NodeJS en el ordenador-> `node --version`
* Para conocer todas las versiones de NodeJS instaladas en el ordenador-> `nvm list`
* Para listar todas las versiones de NodeJS -> `nvm ls-remote`
* Instalar otra versión de NodeJS -> `nvm install v.##.#.#`
* Usar una versión específica de NodeJS -> `nvm use v##.#.#`
* Versión de NVM -> `nvm --version`
* Versión de NVM -> `nvm --version`
* Versión de NVM -> `nvm --version`

## 📍2. Long Term Support (LTS)
La versión LTS es una abreviatura de la versión **Long Time Support** en la que la versión del software se mantiene durante un período de tiempo más prolongado.
En Node.js, las nuevas versiones suelen incluir más funciones, un rendimiento optimizado y correcciones de errores. Las versiones de Node.js se ven como x.y.z donde x representa los cambios más significativos y el resto representa los cambios menores.

### Versiones LTS de NodeJS:
La versión LTS de node.js es una versión de node.js con números **pares** como 14. x.x LTS, 16.x.x, etc. recomendada para la mayoría de los usuarios. Debe usar estas versiones para implementar su proyecto e implementarlo en un entorno de producción. La versión LTS se enfoca en la estabilidad y una aplicación más confiable para cualquier escala.

### Comandos para LTS de NodeJS:
* Para listar todas las versiones de LTS de NodeJS -> `nvm ls-remote --lts`

### ¿Cómo trabajarlo en Visual Studio Code?
* Crear un archivo con el nombre `.nvmrc`
* Escribir dentro del archivo la versión de NodeJS con la que queremos trabajar.
* Ejecutar `nvm use` para cambiar a la versión indicada en el anterior paso.
