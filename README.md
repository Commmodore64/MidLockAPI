# MIDLOCK API

API destinada a la obtencion de datos de Firebase por medio de una API, facilitando la peticion de informacion por medio de un ESP32

## Descripción

La API utiliza Firebase y Node.js para obtener datos de Firebase Realtime Database y exponerlos a través de puntos finales HTTP. Proporciona una manera sencilla de obtener datos específicos de la base de datos y también obtener toda la base de datos si es necesario.

## Requisitos previos

Antes de ejecutar la API, asegúrate de tener instalado lo siguiente:

- Node.js
- Dependencias de npm (puedes instalarlas ejecutando `npm install`)

## Configuración

Antes de ejecutar la API, asegúrate de configurar Firebase con las credenciales correctas. Sigue estos pasos:

1. Crea un proyecto en Firebase y obtén las credenciales de configuración.
2. Copia el archivo `firebaseConfig.js.example` y renómbralo a `firebaseConfig.js`.
3. Abre `firebaseConfig.js` y reemplaza las variables `apiKey`, `authDomain`, `databaseURL`, etc., con tus propias credenciales de Firebase.

## Ejecución

Para ejecutar la API, sigue estos pasos:

1. Abre una terminal en la carpeta raíz del proyecto.
2. Ejecuta el siguiente comando para instalar las dependencias:
```
npm install
```

4. Una vez que se hayan instalado las dependencias, ejecuta el siguiente comando para iniciar el servidor:
```
npm start
```
4. La API estará disponible en `http://localhost:3000`.

## Uso

### Obtener datos de la base de datos

Puedes obtener datos específicos de la base de datos utilizando los puntos finales HTTP. A continuación se muestra un ejemplo:
```
GET /api/data?id={ID}
```

Reemplaza `{ID}` con el identificador específico de los datos que deseas obtener.

### Obtener toda la base de datos

Para obtener toda la base de datos, utiliza el siguiente punto final HTTP:
```
GET /api/data
```
Este punto final devolverá todos los datos almacenados en la base de datos.

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).
