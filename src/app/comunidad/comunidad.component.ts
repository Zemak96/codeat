import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-comunidad',
    standalone: true,
    imports: [],
    templateUrl: './comunidad.component.html',
    styleUrl: './comunidad.component.css'
})
export class ComunidadComponent {
    private transcripcion = `
  (Intro)

  - Antonio Sola: Soy Antonio Sola y estoy aquí con unos invitados, provinientes del grado superior de desarrollo de aplicaciones web. Buenos días Lorena, Zaén, Zaira...

  - Lorena, Zaén y Zaira: Buenos días.

  - Antonio Sola: Bueno, para iniciar esta ronda así, de tertulia, me gustaría saber qué os llevó a empezar a estudiar este grado, porque algunos de vosotros venís de sectores completamente diferentes. Qué os animó a llegar hasta donde os encontrais ahora mismo?.

  - Lorena: Pues, a ver, empezando por mi, la verdad es que fué algo complicada la decisión. Yo estaba trabajando en una empresa mucho tiempo y básicamente lo dejé todo, decidí empezar a estudiar esto porque, aparte de que ya me tocaba un poco la fibra cuando era más jovencita, en el trabajo tenía mucho contacto con el equipo técnico. No sé, me picó el gusanillo, creyendo que nunca es tarde me dije, ¿y por qué no?, aprender cosas nuevas que me puedan llenar más que las cosas que estaba haciendo en ese momento. Y nada, así empecé, un poco de locura.

  - Antonio Sola: Muy guay, muy guay... Y tú, Zaén?.

  - Zaén: Pues yo la verdad es que estaba estudiando en el conservatorio, un grado en percusión que me gustaba bastante pero las espectativas de futuro eran bastante negras, por así decirlo, porque la principal salida es la docencia y a mi no me gustaba nada. Yo trabajar con niños, jajajaja no, no me gusta nada la verdad.

  - Antonio Sola: Acababa con tus nervios..

  - Zaén: Si, si, totalmente. Y entonces vi que me quería dedicar a lo que me gustaba de ese campo que era tocar en orquesta, pero aquí en España es muy difícil, hay muy pocas orquestas de las que puedas vivir de ellas y era no tener vida prácticamente durante los próximos 5-10 años perfectamente hasta que pudieras tener una plaza para vivir de ello. Entonces decidí dejarmelo, estuve un año sin saber que hacer con mi vida y siempre me habían gustado los ordenadores, aunque no había estado en contacto directo con el sector de la informática, por así decirlo, pero decidí darle una oportunidad y me ha gustado bastante. Estoy muy contento con la decisión que tomé, la verdad.

  - Antonio Sola: Muy bien, muy bien. Y tú Zaira, como fué, como acabaste aquí?.

  - Zaira: Pues para mi esto es un poco como una aventura la verdad, porque yo no tenía ni idea de que yo pudiera o quisiera dedicarme a esto. Yo acabé el bachillerato y dije, ¿Qué hago con mi vida?. Me gustaba veterinaria y la ingeniería informática pero, no me atrevía a meterme a la ingeniería informática sin conocer nada y bueno, pues pruebo este grado y veo que pasa. No sé si acabaré dedicándome a esto o no, pero de momento, aquí estamos.

  - Antonio Sola: Muy bien!. Siguiendo con el tema, ¿qué espectativas laborales tenéis al finalizar el grado?, ¿qué veis en el futuro? y ¿Cuál es vuestro enfoque hacia las tecnologías que os gustaría seguir aprendiendo?.

  - Lorena: Esa es una pregunta larga, jajaja.

  - Antonio Sola: Venga, vayamos por partes, jajajaja. Las espectativas laborales al finalizar.

  - Lorena: A ver, no sé, en mi caso, cuando empezamos creo yo qué era bastante positiva, pensando en las empresas tecnológicas, consultas, empresas medio grande que tienen sus propios departamentos estaban buscando informáticos por todos lados, porque no había!. Ahora con el tema de todos los ciclos que van saliendo y también la cantidad de gente que se ha puesto a estudiar lo mismo que nosotros pués, hay más candidatos pero bueno, es un sector que crece muchísimo, que tiene muchísimos campos y creo que no tendremos en principio, ningún tipo de problema. Enlazando un poco con el tema de las tecnologias, todavía no tengo una tecnología definida, de todo lo visto lo que más me gusta es el tema del Front End, y por raro que parezca, las bases de datos jajajaja.

  - Antonio Sola: jajajaja no es raro, no no, no es raro.

  - Lorena: El tema de las consultas, la verdad es que me gustaban, no me costaban y creo que me gusta bastante. Por eso te digo, van un poco enlazados los dos temas porque al final te vas a tener que sentir identificado con el trabajo que haces y entonces, o trabajas en una empresa en la que puedas tirarle un poco a todo o tocará especializarse un poco en algo tipo nicho. En cualquiera de los casos sería una buena opcíon estar en una empresa que te permitan aprender y a día de hoy las consultoras son las que mejor pueden proporcionarte eso. A mi al inicio si me gustaría pasar por ahí, sobre todo por seguir aprendiendo. Si puedo perfecto y si no pues me tocará buscarme la vida por algún otro lado relacionado con la tecnologia.

  - Antonio Sola: Hombre, claro, por supuesto jajaja, cómo no!. Bueno, Zaén, cuéntanos.

  - Zaén: Pues a ver... Mis espectativas son por lo pronto dejar de trabajar en los trabajos en los que llevo varios años, que no son nada satisfactorios y eso, básicamente el primer trabajo sería aprender todo lo que pudiera y estar un año o dos en una consultora o algo así para desarrollarme y aprender. Luego ya poder especializarme en algo que me guste más donde, de momento, lo que más me tira es el Front End también y en particular Javascript/Angular pero no me cierro a nada. Realmente estamos todavía en el incio de nuestra carrera y no hemos abarcado ni visto aún mcuho, entonces de momento quiero probar un poco de todo y ver que es realmente lo que me gusta.

  - Antonio Sola: Entiendo, muy buena decisión. Bueno, Zaira, qué tal, como lo llevas?.

  - Zaira: Más de lo mismo, como Lorena y Zaén, la verdad. Mi idea era acabar en una consultora, estar un tiempo ahí y como me quiero ir a vivir al extranjero, mientras estoy preparandome también francés e inglés y eso, estar en una consultora donde pueda aprender lo máximo posible
  para poder irme luego sabiendo todo lo posible.

  - Antonio Sola: Estupendo, estupendo!. Bueno chicos, no tengo más preguntas para vosotros pero si queréis proponer algo o hablar de algún tema en concreto que nos hayamos dejado en el tintero, pues sois libres y si no, con esto hemos acabado nuestra mini tertulia.

  - Lorena: Guay!. Sobre todo, agradecer a lo compañeros que hayan podido participar en este podcast y sobre todo a tí, Antonio, por invitarnos. Ha sido un placer y espero que nuestra experiencia pueda ayudar a otras personas que esten por CodeaT y que se animen también a seguir aprendiendo de manera autodidacta o que se animen a inciar el ciclo.

  - Antonio Sola: Efectivamente, siempre viene bien. Muchísimas gracias por participar y nos vemos en proximas grabaciones. Muchas gracias!!.

  - Lorena, Zaén y Zaira: Adiós, muchas gracias!.

  (Intro)
  `;

    private showTranscripcion: boolean = false
    constructor(private router: Router) {

    }

    getTranscripcion() {
        return this.transcripcion
    }
    mostrarTranscripcion() {

        return this.showTranscripcion = !this.showTranscripcion
    }
}
