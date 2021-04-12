# FormalLanguage

En matemáticas, lógica y ciencias de la computación, un lenguaje formal es un lenguaje cuyos símbolos son primitivos y reglas para unir esos símbolos están formalmente especificados. Al conjunto de los símbolos primitivos se lo llama el alfabeto (o vocabulario) del lenguaje, y al conjunto de las reglas se lo llama la gramática formal (o sintaxis). A una cadena de símbolos formada de acuerdo a la gramática se la llama una fórmula bien formada (o palabra) del lenguaje. Estrictamente hablando, un lenguaje formal es idéntico al conjunto de todas sus fórmulas bien formadas.
FormalLanguage esta desarrollado con typescript lenguaje que se transpila a javascript, Angular, y la parte grafica con primeNg.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Link Deploy
Mediante 
* Github Pages = https://johnrubio27.github.io/FormalLanguage/#/alfabeto
* Netlify = https://lenguaje-formal.netlify.app/#/alfabeto
## Pasos para deplegar el proyecto de forma local

Descargar el proyecto o utilizar git clone https://github.com/johnrubio27/FormalLanguage

En la terminal en la carpeta del proyecto ejecutar los siguientes comando.

```bash
npm install
ng serve -o
```
## Funcionamiento y vistas del Shopping Cart
| Sin Acciones | Operaciones |
| --- | --- |
| ![SinOperacionesAlf](readme/alfabetosSinAnadir.png) | ![ConOperacionesAlf](readme/operacionesAlfabeto.png) |
| ![SinOperacionesLen](readme/lenguajesSinAnadir.png) | ![ConOperacionesLen](readme/operacionesLenguaje.png) |
| ![SinOperacionesPal](readme/palabraSinAnadir.png) | ![ConOperacionesPal](readme/operacionesPalabra.png) |

El alfabeto cuenta con las siguiente operaciones:
* Unión
* Diferencia
* Intersección

Los lenguaje comparten o heredan las misma operaciones de un alfabeto añadiendo las siguietes:
* Inversa
* Cardinalidad
* Concatenación
* Potencia

Y las palabras y los Lenguajes tienen en común las operaciones Inversa y Cardinalidad.

El estudiante deberá construir o desarrollar un programa usando el lenguaje JavaScript, HTML y CSS. Este programa debe tener los requisitos funcionales:
Sobre los alfabetos:
* Realizar la unión de alfabetos.
* Realizar la diferencia entre alfabetos.
* Realizar la intersección entre alfabetos.

Sobre los lenguajes:
* Calcular la unión entre lenguajes. 
* Calcular la diferencia entre lenguajes. 
* Calcular la intersección entre lenguajes.
* Calcular la concatenación entre lenguajes. 
* Calcular la potencia de un lenguaje.
* Calcular la inversa de un lenguaje.
* Calcular la cardinalidad de un lenguaje.

Sobre las palabras:
* Calcular la cardinalidad de una palabra.
* Inversa de una palabra.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

Proyecto Presentado por:

* Joel Arzuza
* Leonardo Liñan
* John Rubio
* Pedro Figueredo
