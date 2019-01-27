---
layout: post
title:  "Evolución de Animanoir.com"
date:   2018-12-27 12:00:01 -0600
categoria: blog
image: "/assets/gifs/logos-animanoir.gif"
permalink: evolucion-animanoir-web
---
<div class="pb-3">
<div class="display-4 fuente-josefin font-weight-bold color-post-titulo">Evolución <i>Animanoir</i></div>
<small class="text-dark">(2015/18)</small>
</div>

<div class="pb-4">
<img class="img-fluid" src="/assets/posts/evolanim/evolanim-img1.jpg">
</div>

<div class="pt-1 fuente-opensans color-lectura posts" markdown="1">

<span class="h3">H</span>ace algún tiempo platiqué con un par de amigos sobre ROMA, el filme de Cuarón. Uno de ellos me comentó que una de las razones por las cuales ha pegado tanto es porque es una historia *muy personal*. Es decir, es algo que *nadie* sabía, o sentido, con anterioridad. ¿Alguien de aquí conoce a Alfonso personalmente? Ése es el punto, **a través de su obra extrapola su ser**.

**Vivimos en un mundo ~~asquerosamente~~ hiperconectado**. Desde [Alan Moore](https://www.goodreads.com/questions/572410-hi-alan-you-ve-said-correctly-so-far-as){:target="_blank"} hasta [Aphex Twin](https://pitchfork.com/features/cover-story/reader/aphex-twin/#music-from-another-planet){:target="_blank"}, muchos concuerdan que *la contracultura ha muerto*. Ya casi no hay esa emoción de conocer pensamientos o creaciones que van más allá de tu contexto personal. Absolutamente todo lo que se crea se conoce en un instante, sea desde México a Japón, o viceversa. Satisfacción inmediata. Por supuesto que tiene muchos pros, pero sus contras son más densos, en lo personal. 

<span id="palabra-1">Malaventurados</span> aquellos seres que les tocó vivir el génesis de la era digital.

Este nuevo paradigma, por consecuencia, ha modificado la psique de la sociedad. Por éso es pertinente adaptarse, pero no sacrificando la **individualidad** de uno. Sin embargo, muchos lo hacen. Las redes sociales son la televisión del siglo XXI, en sentido peyorativo. Pero dados sus "beneficios", poca gente se da cuenta cuán manipulada está. *¡Sube más fotos!, ¡comparte más de tus opiniones!, ¡infla tu ego!.. ¡que todo éso nos da dinero!* El ego es adictivo; una de las más potentes drogas, y con éso lucran las corporaciones de hoy.

Lo peor de todo esto no es el capitalismo en su más puerca forma, sino la *homogeneidad social/cultural* que ésto provoca. Por más "artístico" que algo intente ser, si lo veo en Instagram, para mí, automáticamente, se convierte en otro más del montón. Es algo psicológico; es **el contexto**.

Contexto, contexto, contexto. Por éso siempre insto a todas las personas que tengan algo que mostrar a *crearse un lugar **personal***. Es importante, en mi opinión, volver a cierta tribalidad que fertilice un nuevo tipo de creatividad, y no dejarse corromper por las efímeras modas de hoy en día.

Por énde mi sitio web.

*Animanoir* no es más que un nombre cool que se me ocurrió para un ficticio estudio de animación por allí en el 2014. Poco tiempo después encontré que también es el nombre de un álbum de una banda llamada [_Theatres Des Vampires_](https://www.discogs.com/es/Theatres-Des-Vampires-Anima-Noir/master/445069){:target="_blank"}. Es decir, _todo se ha inventado ya_; a alguien ya se le ha ocurrido _tu_ gran idea. 

Explicaré brevemente cómo es que está desarrollada a nivel de diseño, funcionamiento y tecnologías. Para ello, he aquí letras bien grandotas y venudas para quienes quieran el piquete rápido.

<h2><a href="#diseño">Diseño</a></h2>
<h2><a href="#funcion">Funcionamiento</a></h2>
<h2><a href="#tecnos">Tecnologías</a></h2>

<hr>

<div id="diseño" markdown="1">
<h2>Diseño</h2>

Con diseño me refiero a los colores, UI/UX, etc. **Omití por completo cualquier trend de frontend que exista**. Honestamente estoy hastiado de ver sitios web con la misma puta plantilla pirateada. Éso es lo que hacen aquellos que buscan dinero fácil. Decidí inspirarme en mis gustos, en lo que yo espero de un sitio web, es decir:

- Minimalista.
- Directo al contenido.
- Estético.

Esta página la construí desde cero. Comprendí que **las cosas realmente satisfactorias toman su tiempo**. Por éso creo que resultó tal cual lo imaginé y maqueté.

Una cosa muy importante que cambié fue el *cómo se leen este tipo de entradas*. En el sitio anterior, el *menú* estaba a la izquierda, mientras que el contenido un tanto en el centro. Pasable, todo bien. Pero en esta ocasión quería hacerlo un tanto más *familiar*, al menos a las personas no arábigas: De izquierda a derecha la lectura. Evito decir "usuarios"; sí, técnicamente así se les llamarían, pero prefiero llamarlos **personas, seres humanos**. Creo que una interfaz entre más humana mejor.

La paleta de colores es simple. Quería algo que se acomodara a mi personalidad, de éso no hay tanto pierde. Intenté que combinaran, así como las fuentes. Reitero, los **detalles lo son todo**, y decisiones como los pares de fuente a usar afectan drásticamente la usabilidad.

</div>

<div id="funcion" markdown="1">
<h2>Funcionamiento</h2>

Con funcionamiento me refiero a *cómo funciona internamente el sitio web*. 

Este sitio es estático, o sea, no usa bases de datos. Pero la forma en la que se construyó cambia mucho las cosas. Todo viene de un **Static Site Generator**, **Jekyll** específicamente (más de éso en <span><a href="#tecnos">Tecnologías</a></span>). La razón por la que decidí aprenderlo a fondo/usarlo es porque permite:

- Modularidad.
- Desarrollo más rápido.
- Organización.

Para mí, **la modularidad es libertad**. Todo sistema se construye de subsistemas. Si estamos al tanto de cada uno de ellos, es más fácil visualizar el todo. No por nada escribir este tipo de posts es sumamente sencillo y satisfactorio. **Jekyll** permite ésto; bueno, cualquier SSG, cualquier framework MVC, me imagino que en cualquier parte del mundo todo (debería) ser modular. Se me ocurrieron un chingo de ideas qué ponerle a este sitio, pero como me propuse un deadline para antes del fin del 2018 (**alabados sean los deadlines**), decidí concentrarme en que funcione correctamente y para futuras actualizaciones.

Otra cosa sumamente importante fue la **optimización**, es decir, que corra lo más rápido que pueda. Hay una tendencia en la que le ponen un pinche loader a todas las páginas. Concuerdo que hay veces que es mejor mostrar todo de putazo a irlo viendo cargar, ¿pero pues qué tanto le metes? Este tipo de trucos, que bien suenan fundamentales, te los vas encontrando en el camino. Algunos de los que tengo pleno conocimiento y apliqué fueron:

- Reducción de *HTTP requests*.
- Optimización de imágenes.
- Carga asíncrona de ciertos elementos.
- Programación más limpia y minificada.

Con los requests, me refiero a *entre menos llamadas le pidas al servidor, mejor*. O sea, si tienes un putero de archivos y los quieres cargar en una sola página (sin AJAX), pues todo se alentará horriblemente. Por éso, tecnologías como [**webpack**](https://webpack.js.org/){:target="_blank"}, que es una herramienta que te minifica, optimiza imágenes, traduce SASS a CSS, y, por sobre todo, **intenta crear un sólo archivo .js, .css** resultan importantes para el desarrollo web moderno.

Optimización de imágenes es reducir lo más que se pueda su tamaño para que se descarguen rápido. Menos de 1mb es suficiente. Menos de 500kb, excelso.

La carga asíncrona quiere decir que, si tienes algún script/js, el renderizado de la página *no se detenga* hasta que funcione éste; si no, que siga cargando lo demás, y el script se ejecute cuando esté listo por su cuenta. Uso un poquito de js aquí, por lo que era necesario reducir la obstrucción y bloqueo de carga del HTML.

Y con programación más limpia y minificada me refiero a **usar una lógica más adecuada de programación que reduzca las líneas de código a ejecutar**. Por allí hay un mito que dice que no importan tanto cuántas líneas de código, sino que funcione. Difiero. **Todo, absolutamente todo ocupa espacio en el mundo físico**, desde [las memorias en un cerebro](http://www.human-memory.net/processes_storage.html){:target="_blank"}, hasta texto en una computadora. Por éso es importante reducir lo más que se pueda algún programa para que éste funcione de manera óptima.

</div>

<div id="tecnos" markdown="1">
<h2>Tecnologías</h2>

Me refiero a *las herramientas que usé para la creación de este sitio*. Como mencioné arriba, usé el SSG [**Jekyll**](https://jekyllrb.com/){:target="_blank"}, aunque lo usé por consecuencia de querer usar [**GitHub Pages**](https://pages.github.com/){:target="_blank"} para hostear mi sitio web <b>gratis</b>.

A todos, siempre a todos les recomiendo usarlo ya que, para muchos creadores, artistas, desarrolladores, etc., **no les es necesario rentar una suite completa pseudoempresarial**; ¡te ahorras cerca de $2000.00 MXN! Éso es comida por 3 meses para mí. Lo que intento decir es que **es importante adecuar el plan a las expectativas que se esperan para que haya cohesión entre ambas**, no inflar el diseño innecesariamente. GitHub cuenta con la seguridad y fiabilidad de una gran comunidad, por lo que no veo razón alguna para no usarlo.

Dentro de Jekyll, pues, como cualquier buen SSG, tiene su propio template language: **Liquid**. Fascinante, me ahorra chingo de trabajo y me permite modularidad. E igual usé SASS. Digo, no puedo desarrollar tanto en este aspecto "tecnológico" dado que usé lo que siempre se ha usado y probablemente usará el resto de la eternidad en el desarrollo web: HTML/CSS/JS. A lo que iba era **cuánto nivel de abstracción empleeé**. SASS (y Boostrap ) es una abstracción de CSS, [Three.js](https://threejs.org/){:target="_blank"} una abstracción de **WebGL en JS** (el cual usé para una simple animación 3D en la página de  <a href="contacto.html" target="_blank">Contacto</a>). Recalco que en este sitio no me fue necesario implementar algún algoritmo conocido de ciencias de la computación o similar ya que es, relativamente, simple. Pero, en un futuro, muy probablemente lo haga.

En fin, la programación, al final, [se reduce a mover electricidad de aquí para allá dentro de un circuito](https://www.quora.com/What-is-programming-actually){:target="_blank"}. Vaya, hasta puedes [*programar* con cartas de Magic The Gathering](https://www.toothycat.net/~hologram/Turing/HowItWorks.html){:target="_blank"}. El punto es *cuán fácil puedes realizar alguna acción*; facilidad = organización y rapidez. Por éso me fue necesario aprender nuevas tecnologías para desarrollar mi sitio más agilmente.

</div>

<hr>

En conclusión, quería actualizar mi página para aprender nuevas tecnologías web, así como para adecuarlo al diseño y funcionalidad que a mí me satisface. También, comparto todo ésto porque creo que el **conocimiento debe ser libre y compartido**. No quisiera morir sabiendo que pude haber ayudado a alguien, pero no lo hice.

Ojalá te sirva a ti :^)

<div class="video-container">
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/558756030&color=%23020202&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
</div>

</div>

<script>

let idPalabra = document.querySelector('#palabra-1');
let palabra1 = 'Bienaventurados';
let palabra2 = 'Malaventurados';

idPalabra.textContent = palabra1;

setInterval(function(){
    if (idPalabra.textContent === palabra1) {
        idPalabra.textContent = palabra2;
    } else {
        idPalabra.textContent = palabra1;
    }
}, 1000);

</script>
