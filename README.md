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

con estra estructura es posible construir nuestra aplicación que guardará y modificará una tarea
utilizando node js y almacenandolas en un archivo json.

En la carpeta **config** se guardaran los archivos que permiten configurar los parámetros y comandos
El archivo **yargs.js** es el módulo que permite usar los comandos necesarios para la aplicación
por ejemplo:
```
-d "Tarea"
-c "Estado"
``` 
de esta manera el usuario sera capaz de enviar la descripción y el estado de la tarea
dependiendo del comando empleado.
por ejemplo:
```
node app crear -d "Estudiar"
node app actualizar -d "Estudiar"
node app borrar -d "Estudiar"
node app listar -c false
node app listar -c true
```
de esta manera podremos:
- crear una tarea
- actualizar el estado de una tarea
- borrar una tarea creada
- listar las tareas pendientes
- listar las tareas realizadas
respectivamente

En la carpeta **controlador** se almacenarán los modulos con las funciones necesarias
El archivo **tareas-por-hacer.js** es el encargado de tener las funciones necesarias
para que la aplicación sepa que operaciones solicita el usuario, es decir
en este apartado se pueden encontrar las operaciones y funciones que gestionen los datos
ya sea para crearlos, editarlos o eliminarlos.

En la carpeta **db** será donde se encuentra el archivo **.json** donde almacenaremos 
toda la informacion de las tareas ingresada o editada por el usuario.

Finalmente el archivo **app.js** es el lugar donde todo toma forma y aqui nos permite
realizar la ejecucion de todo nuestros codigos, pues en este archivo se hace el llamado
a los modulos para su posterior ejecucion.

**Nota:**Para más especificidad ver los comentarios de los diferentes archivos en este  proyectos