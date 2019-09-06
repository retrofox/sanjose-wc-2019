
<h1 align="center">SanJose WordCamp @2019</h1>

<p align="center">
<img src="https://2019.sanjose.wordcamp.org/files/2019/03/date-header-home-temp.png" width="436px" />
</p>

Repositorio donde se aloja todo el material utilizado para el dictado del workshop en el [WordCamp de San Jose](https://2019.sanjose.wordcamp.org), Costa Rica, llevado a cabo el 7 y 8 de septiembre del 2019.

---------------------------------

# WordPress.js@0.0.1-beta.0

Guiá de desarrollo de una aplicación moderna integrada con WordPress.

# Idea

La idea es realizar un workshop focalizado en el desarrollo de una aplicación web moderna, donde se mostraran ejemplos claros y consisos de algunas herramientas tan útiles y básicas como necesarias.
Desde la configuración de tu entorno de trabajo pasando, por varias etapas intermedias tales como revisionar tu código, herramientas de edición y testeo, etc. para finalmente aterrizar en el uso de la integración con WordPress.

`#nodejs`, `#git` ,`#react` y `#wordpress` son algunos tags que definen por sí solos el alcance del curso.


Si bien el nivel del curso depende de cuán familiarizado se esté con este tipo de tecnologías está pensado partiendo de un nivel `#principiante`; pero sin dejar de tener en cuenta que también se abordarán detalles específicos y avanzados relacionados con el entorno.

# Watchdog - Aplicación de Ejemplo

Intentaremos desarrollar una aplicación que sirva como herramienta de supervisión de sitios web implementados con WordPress.
Un ejemplo sencillo de uso sencillo podría ser la supervisón de blogs de nuestros clientes. A veces para dar un buen soporte necesitamos saber qué cuáles son las acciones que se han realizado en los sitios web para entender la falla del problema: instalación de plugins, themes, cambio de permisos, elimiar usuarios, etc. son algunas de las acciones que intentaremos supervisar.

----------------------------------------------------

# Sumario

* [Presentación](#step-presentation)
* [Herramientas de desarrollo](#step-dev-tools)
* [Dependencias básicas](#initial-dependencies)
* [Aplicación básica funcionando](#app-first-approach)
* [Layout](#app-layout)
<<<<<<< HEAD
* [Mejores menores](#iteration-1)
* [OAuth con WordPress.com](#wordpress-com-oauth)
* [Interacción con la API WordPress.com](#wordpress-com-api-requests)
* [Renderizando listado de sitios](#render-sites-list)
=======
* [OAuth con WordPress.com](#wordpress-com-oauth)
>>>>>>> origin/master

## Presentación
Charla rápida de lo qué se abordará en el taller.

* Tecnologías
* Entorno de desarrollo. Aplicaciones.
* Idea de la aplicación Watchdog

## <a name="step-presentation">Paso básico: Primeras acciones en el teclado</a>

* Editor (emmet)
* Crear la estructura básica: Directorio de Trabajo.
* `git`: Instalacion. Init. Primer commit.
* `markdown`: README.md y tips básicos.
* `git`: repositorio local. Primer commit. Ignorando _.idea/_
* Cuenta en [Github](https://github.com).
* Configuración repo local -> repo remoto - push!
* Log: `git log` y comandos git customizados.
* Github desktop. Agregar repositorio actual.
* Crear tag inicial.

#### links

* [git](https://git-scm.com/)
* [github](https://github.com)
* [markdown specification](https://commonmark.org/)
* [tutorial _empezando con git_](https://git-scm.com/book/es/v1/Empezando)
* [16 awesome git aliases that you will love](http://codersopinion.com/blog/16-awesome-git-aliases-that-you-will-love/)

## <a name="step-dev-tools">Herramientas de desarrollo</a>

* `nodejs`, `npm`. Qué son? Instalación.
* `n` manejando versiones de `nodejs`.
* Configuración inicial de la app
  * Valores por defecto de `npm`
  * Crear package.json `./app/watchdog`.`npm init`
* Browser con herramientas de desarrollo (chrome)
* Terminal Hyper

#### links

* [Cómo instalar node.js](https://nodejs.org/es/download/package-manager/)
* [npm](https://www.npmjs.com) - [npm config](https://docs.npmjs.com/misc/config)
* [n](https://github.com/tj/n)
* [hyper](https://hyper.is/)

## <a name="initial-dependencies">Dependencias básicas</a>

Instalación de las dependencias básicas de la aplicación. Presentación teórica de React y Next.js

#### links

* [next.js](https://nextjs.org/)
* [React](https://es.reactjs.org/)

## <a name="app-first-approach">Aplicación básica funcionando</a>

Primer versión de la aplicación _super básica_ funcionando. Configuración de next.js.
Agregar scripts de ejecución.
Homepage (pages/index.js).
Primer componente. Agregamos estilos básicos (in line).

## <a name="app-layout">Layout</a>
<<<<<<< HEAD
* Crear e implementar un layout básico (este dede funcionar como un HOC).
* Carpeta `./components` y archivo `./components/layout.js`.
* Crear `menu` and `footer`.

## <a name="iteration-1">Mejores menores</a>
* Estilos globales.
* Uso de `<Link />` component.
* agregar versión de app
* Agregar `doc` link al menu principal (markdown). (TODO)
* Agregar Theme (TODO) 

#### links

* [Global Styles and Layours](https://github.com/zeit/next.js/wiki/Global-styles-and-layouts)

https://github.com/zeit/next.js/wiki/Global-styles-and-layouts

## <a name="wordpress-com-oauth">OAuth con WordPress.com</a>

* Implementación de OAuth con nuestra cuenta de WordPress.com.
* Instalación y uso del component de React.
* Configuración.
* Almacenar token para hacer persistente la autenticación.

#### links

* [WordPress.com OAuth](https://developer.wordpress.com/docs/oauth2/)
* [React OAuth Flow](https://github.com/adambrgmn/react-oauth-flow#readme)


## <a name="wordpress-com-api-requests">Interacción con la API WordPress.com</a>

* Obtener información personal (/me)
* Obtener listado de Sitios (/sites)

## <a name="render-sites-list">Renderizando listado de sitios</a>

## <a name="redux">Data flow - Redux</a>

* Implementar el ciclo de almacenamiento de datos con Redux (useRedux)

## <a name="redux">Data flow - Persistencia</a>

* Almacenar los datos obtenidos en el client usando foreStorage

=======
* Crear e implementar un layout básico (este dede buncionar como un HOC)
* Carpeta `./components` y archivo `./components/layout.js`

## <a name="wordpress-com-oauth">OAuth con WordPress.com</a>

Implementación de OAuth con nuestra cuenta de WordPress.com.
Instalación y uso del component de React.
Configuración.
 
>>>>>>> origin/master

#### links

* [WordPress.com API OAuth](https://developer.wordpress.com/docs/oauth2/)
* [WordPress API Endpoints list](https://developer.wordpress.com/docs/api/)

---------------------

### Acerca de mi

<img align="left" width="100" height="100" style="margin: 0 20px 5px 0; border: 1px solid #ddd; padding: 5px; background-color: #eee" src="https://www.gravatar.com/avatar/3e37f1c7095721acea903744625cb7dd?s=256">
Mi nombre es [Damián Suárez](https://damian.blog), soy programador/desarrollador 100% especializado en tecnologías webs con más de 10 años de experiencia, de los cuales más de la mitad los he vivido con la gran familia [Automattic](http://automattic.com).

Utilizo [`@retrofox`](https://twitter.com/retrofox) como seudónomo (cuando me es posible :-D). He trabajado como freelancer varios años, en un par de startups siendo [cloudup](https://cloudup.com) la más conocida y exitosa de mi carrera.

Principiante autodidacta, apasianado por vocación, trato de mantener viva la llama que alimenta el deseo de hacer de la programación una tarea creativa y divertida.
