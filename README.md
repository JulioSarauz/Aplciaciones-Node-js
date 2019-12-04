## Aplicación de tareas Node JS
### Autor: Julio Saráuz
### Grupo: 1

Antes de empezar recuerda **instalar** los paquetes 

```
npm install
```
### Aplicación de Node js que permite guardar tareas en un archivo node js
La aplicación cuenta con la siguiente arquitectura:

* config
    * yargs.js
* controlador
    * tareas-por-hacer.js
* db
    * data.json
* app.js
* README.md

con estra estructura es posible contruir nuestra aplicacion que guardara y modificara una tarea
utilizando node js y almacenandolas en un archivo json.

En la carpeta **config** se guardaran los archivos que permiten configurar los parametros y comandos
El archivo **yargs.js** es el modulo que permite usar los comandos necesarios para la aplicación
por ejemplo:
```
-d "Tarea"
-c "Estado"
``` 
de esta manera el usuario sera capaz de enviar la descripcion y el estado de la tarea
dependiendo del comando empleado.
