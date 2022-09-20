## 📍1. NVM
**NVM (Node Version Manager)** permite instalar y gestionar distintas versiones de NodeJS en un ordenador, lo que facilita el trabajo con proyectos que requieren versiones distintas.

## 📍2. Beneficios
NVM soluciona algunos problemas típicos que suelen ocurrir cuando se trabaja con npm y al instalar dependencias globales se requieren permisos de sudo. Con nvm no los necesitarás y el software funcionará correctamente.

## 📍3. Instalación en MAC
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

## 📍4. Comandos útiles

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
