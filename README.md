# E-COMMERCE 馃嵑 Proyecto en NextJS

## Tecnolog铆as utilizadas 馃挕
* NextJs
* Sass
* Git

## Instalaci贸n 馃捇
1. Recuerda crear una carpeta
2. Clona el repositorio 
```
git clone https://github.com/marcobertonati/nextjs-ignite-test.git
```
3. Instala las dependencias con `npm install`
4. Ejecuta el script `npm run dev`

## Arquitectura 馃Υ
### Components
Los components son los encargados de renderizar el contenido visual. Reciben props y retornan un elemento.

### Containers
Los conteiners son los encargados de manejar los servicios, informaci贸n y l贸gica de la aplicaci贸n. Envian props a sus hijos y establecen el estado de los componentes. 

### Pages
Las p谩ginas son un conjunto de components que renderizan una vista.

### Public 
Conjunto de recursos p煤blicos utilizados por la p谩gina web.

### Services
Encargado de solicitar informaci贸n a la API.

### Styles
Archivo SASS que estila los archivos.

## APIS 馃梼锔?

Ruta para obtener un array de productos.
```
http://localhost:3000/api/products/beers
```

Ruta para obtener un array de tipos de productos que contiene todos los productos de ese tipo.
```
http://localhost:3000/api/products/typeBeers
```

## Funcionamiento de filtro 馃搶
* Al hacer clic en el bot贸n de filtrar se despliega un modal con las opciones para filtrar
* Se pueden seleccionar varias opciones
* Al seleccionar una se activa el bot贸n de limpiar y se muestra el n煤mero de opciones seleccionadas en el bot贸n de filtrar
* Al hace clic en el bot贸n de filtrar se cierra el modal y se muestran los productos que cumplen con los filtros seleccionados
* Al hacer clic en el bot贸n de limpiar quita las opciones seleccionados del formulario de filtros y carga el listado con todas las opciones
* Si se recarga la p谩gina y se tenian filtros aplicados, estos se deben de conservar por el uso del Localstorage


## 馃 About author
I'm [Marco Bertonati](https://www.linkedin.com/in/marcobertonati/) from Mendoza (Argentina). Since I was a kid (07/11/1989) I've been interested in technology, comunication & design. I got a bachelor degree in Social Comunication (Universidad Nacional de Cuyo) and currently I'm expanding my knowledge to web development.

___
[Ver prototipo](https://www.figma.com/proto/iAtVRRkGIwqbbz2LGApCtY/Frontend-Test?node-id=73%3A303&viewport=-555%2C2051%2C1.1058835983276367&scaling=scale-down "Prototipo")

[Ver archivo de dise帽o](https://www.figma.com/file/iAtVRRkGIwqbbz2LGApCtY/Frontend-Test?node-id=0%3A1 "Archivo de dise帽o")



