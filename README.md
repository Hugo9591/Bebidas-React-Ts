# Bebidas-Reacr-Ts  

## Descripcion
Página web que permite buscar recetas de bebidas utilizando la API de www.thecocktaildb.com/api. 
Los usuarios seleccionan una categoría de bebidas desde un formulario y se muestran los resultados en tarjetas con la imagen, nombre y un botón para ver más detalles. 
Al hacer clic en "Ver Receta", aparece un modal con la descripción, ingredientes y cantidades para la bebida, además de opciones para agregarlo o eliminarlo de favoritos. 
Las bebidas en favoritos se guardan en LocalStorage y pueden consultarse en una página aparte llamada favoritos, usamos react router para el manejo de multiples paginas. 

## Características  
- Búsqueda por categoría y nombre:  
  - Se obtiene la lista de categorías desde la API.  
  - El usuario selecciona una categoría y el nombre o ingredientes de las bebidas y se muestran las recetas en tarjetas.  
- Detalles de la receta:  
  - Imagen, nombre, descripción, ingredientes y cantidades.  
  - Se muestra en un modal.  
- Favoritos:  
  - Los usuarios pueden guardar recetas en favoritos.  
  - Los favoritos se almacenan en Local Storage.  
  - Página especial para ver todas las recetas favoritas.  
  - Opción para eliminar recetas de favoritos.   

## Tecnologías Utilizadas  
- React  
- Tailwind(estilos y modales)  
- CSS personalizado**  
- TypeScript  
- Zustand
- React Router
  
## Instalación y Uso  
1. Clona este repositorio:  
   git clone https://github.com/Hugo9591/Bebidas-React-Ts.git
2. npm install
3. npm run dev
4. abrir en nav en localhost:5173

Selecciona una categoría del menú desplegable.
Explora las recetas y usa el botón "Ver más" para detalles.
Guarda recetas en favoritos y consultalos despues.
