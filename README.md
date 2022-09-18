# E-COMMERCE 🍺 Proyecto en NextJS

## Tecnologías utilizadas 💡
* NextJs
* Sass
* Git

## Instalación 💻
1. Recuerda crear una carpeta
2. Clona el repositorio 
```
git clone https://github.com/marcobertonati/nextjs-ignite-test.git
```
3. Instala las dependencias con `npm install`
4. Ejecuta el script `npm run dev`

## Arquitectura 🦴
### Components
Los components son los encargados de renderizar el contenido visual. Reciben props y retornan un elemento.

### Containers
Los conteiners son los encargados de manejar los servicios, información y lógica de la aplicación. Envian props a sus hijos y establecen el estado de los componentes. 

### Pages
Las páginas son un conjunto de components que renderizan una vista.

### Public 
Conjunto de recursos públicos utilizados por la página web.

### Services
Encargado de solicitar información a la API.

### Styles
Archivo SASS que estila los archivos.

## APIS 🗃️

Ruta para obtener un array de productos.
```
http://localhost:3000/api/products/beers
```

Ruta para obtener un array de tipos de productos que contiene todos los productos de ese tipo.
```
http://localhost:3000/api/products/typeBeers
```

## Funcionamiento de filtro 📌
* Al hacer clic en el botón de filtrar se despliega un modal con las opciones para filtrar
* Se pueden seleccionar varias opciones
* Al seleccionar una se activa el botón de limpiar y se muestra el número de opciones seleccionadas en el botón de filtrar
* Al hace clic en el botón de filtrar se cierra el modal y se muestran los productos que cumplen con los filtros seleccionados
* Al hacer clic en el botón de limpiar quita las opciones seleccionados del formulario de filtros y carga el listado con todas las opciones
* Si se recarga la página y se tenian filtros aplicados, estos se deben de conservar por el uso del Localstorage


## 🤓 About author
I'm [Marco Bertonati](https://www.linkedin.com/in/marcobertonati/) from Mendoza (Argentina). Since I was a kid (07/11/1989) I've been interested in technology, comunication & design. I got a bachelor degree in Social Comunication (Universidad Nacional de Cuyo) and currently I'm expanding my knowledge to web development.

___
[Ver prototipo](https://www.figma.com/proto/iAtVRRkGIwqbbz2LGApCtY/Frontend-Test?node-id=73%3A303&viewport=-555%2C2051%2C1.1058835983276367&scaling=scale-down "Prototipo")

[Ver archivo de diseño](https://www.figma.com/file/iAtVRRkGIwqbbz2LGApCtY/Frontend-Test?node-id=0%3A1 "Archivo de diseño")



