$ create-react-app chura-lovers -->> creamos
React es declarativo - 
$ npm install -g create-react-app  (ya no es necesario?)
$ create-react-app -nombre del proyecto-  // En este punto se estará instalando React y otras herramientas, también se configurará el entorno usando Webpack.
*Babel: Traduce Javascript moderno (JSX) a un Javascript que todos los navegadores puedan interpretar.
*Eslint: Lee el código y avisa de errores.
****>>>Ahora no es necesario instalar el create-react-app, lo único que debes hacer es ejecutar el comando $ npx create-react-app nombre-del-proyecto ****

#*************************************** - ReactDOM.render - **************************************************
//Como conectar el html con el js?? --->> React lo hace //(create-react-app babel y webpack) los importa // Fichero principal de html en “public/index.html” y el punto de entrada de javascript en “scr/index.js”.
ReactDom.render(__qué__,__dónde__) //Si usamos Jsx (= <h1> </h1>) se debe importar el / import React from "react"  / en cada archivo

React y ReactDOM trabajarán en conjunto.
React como análogo a createElement
ReactDOM análogo a appendChild
#*************************************** - JSX - **************************************************
JSX es una extensión de JavaScript, tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo.
const jsx = <h1>Hola soy, {2 + 3}</h1>; //dentro de {} se pueden poner expresiones y funciones, si el resultado es null, undefined o false no se va a mostrar

const jsx = (
  <div>
    <h1>Hola, soy Miguel </h1>
    <p>Soy ingeniero FullStack</p>
  </div>
);

//si usamos createElement, sale muy feo el codigo, por eso se prefiere jsx (Sugar Sintax)
React.createElement("div", {} , React.createElement("h1", {},"Hola, soy"), React.createElement("p",{},"Soy ingeniero"));
##*************************************** - Componente - **************************************************
Componentes: Unidad básica de desarollo. Bloques de construcción.
Identificación de componentes: 
¿Qué elementos se repiten? - Estos son los elementos en una lista o los que comparten aspecto visual y su funcionalidad.
¿Qué elementos cumplen una función muy específica? - Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.
Elemento: El elemento sale del componente. 
Elementos con una función específica: Encapsular lógica, Permiten juntar muchos comportammientos y aspectos visuales en un solo lugar.
//Todos los componentes requieren de un metodo obligatorio render()

##*************************************** - Estilos - **************************************************
Para usar los estilos es necesario importarlos con import.
¿Es recomendable integrar SASS con React? - SASS solo es un preprocesador para css, y pueden funcionar en archivos totalmente separados.React es poderoso, Solo basta con instalar “node-sass” y cambiar las 
extensiones a “sass” o “scss” (ojo no hagas mixing, solo una de las dos y cambia todo archivo css a esta extensión).

//*************************************** - Props - **************************************************
Argumentos a una funcion/ Atributos de nuestro componente. Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().
ReactDom.render( <Badge firstName="Lilly" lastName="Kaufman" jobTitle="kickass Frontend Engineer" twitter="churups" />, container);
//********************************************
DIFERENCIA ENTRE INSTALAR BOOTSTRAP O USAR EL CDN - La diferencia es: que cuando instalas bootstrap y llevas tu app a producción, webpack genera un bundle (dist) y todo queda empaquetado en este o estos archivos.
Cuando usas un CDN se hace una llamada de referencia a la libreria o estilos que estas solicitando!
Cuando hay un boton en el formulario, por defecto ese boton es de tipo submit. (para evitar eso podemos establecer el <button type="button" >Save</button>)
e.preventDefatult(); //no queremos que en form se envie, el default es enviar el formulario y no queremos eso.

//************************************ - MANEJO DE ESTADO - *******************************
El state en React es un objeto que deriva de la clase React Component. Puede definirse a sí mismo como un objeto qe almacena las propiedades observables que controlan el comportamiento 
del componente. (como en este caso el value de los inputs de los formularios).

Por defecto el input es no controlado, agregando un value={} se hace un input controlado para leer el estado, usamos value={this.state.firstName} para escribirlo usamos setState.
No olvidar inicializar el state como un objeto vacío, dentro de la class {  state= {};  }

//************************************ - LEVANTAMIENTO DE ESTADO - *******************************
*Levantar el estado es una técnica de React que pone el estado en una localización donde se le pueda pasar como props a los componentes.
React es su parte de "reactivo" ya que cada vez que hay un cambio en el estado o en los props que recibe un componente se vuelve a renderizar todo el componente y todos sus descendientes.

//WARNING: cada hijo en una lista debe tener un prop unico llamado key - Ese prop ayuda a React a determinar cuadno el elemnt se vuelve a renderizar, saber si se mantuvo en la lista o si cambio









