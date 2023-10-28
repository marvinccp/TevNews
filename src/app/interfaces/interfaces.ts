import { Title } from '@angular/platform-browser';

export type Menu = 'Deporte' | 'Política' | 'Tecnología'| 'Home'

interface MenuInterface {
  name: Menu;
  description: string;
  link: string;
}
export const menuOptions: MenuInterface[] = [
  {
    name: 'Deporte',
    description: 'sección de deportes actualizada',
    link: 'deportes',
  },
  {
    name: 'Política',
    description: 'sección de política actualizada',
    link: 'politica',
  },
  {
    name: 'Tecnología',
    description: 'sección de tecnología actualizada',
    link: 'tecnologia',
  },
  {
    name: 'Home',
    description: 'Página principal',
    link: 'Home',
  },
];
interface Post {
  id: number;
  title: string;
  content: string;
  resume: string;
  image?: string;
}
export const recenPost: Post[] = [
  {
    id: 1,
    title: `Trazando el Camino de la Vida: Reflexiones en un Viaje de Autodescubrimiento y Crecimiento"`,
    content:
      'La vida, en su infinita diversidad, nos presenta un escenario en constante evolución, donde los seres humanos, en su búsqueda incansable de significado y propósito, se embarcan en un viaje de autodescubrimiento y crecimiento. Este viaje está marcado por una serie de experiencias que nos desafían, nos inspiran y nos transforman. Cada día nos enfrentamos a un abanico de emociones y circunstancias, desde la alegría efervescente de los momentos de éxito hasta la tristeza melancólica de las derrotas. Estas emociones, lejos de ser simples respuestas químicas, son las manifestaciones más profundas de nuestro ser, reflejando nuestros deseos, anhelos y temores más profundos. En este viaje, las relaciones desempeñan un papel central. Las conexiones que forjamos con otros seres humanos son el tejido de la experiencia humana. A través de estas relaciones, aprendemos a amar, a apoyar, a perdonar y a crecer. Son espejos que reflejan nuestras propias virtudes y flaquezas, y nos desafían a ser mejores. La adversidad también es una compañera constante en nuestro camino. Los desafíos que enfrentamos, ya sean personales o globales, nos instan a encontrar nuestra fuerza interior, nuestra resiliencia y nuestra capacidad de adaptación. La historia está llena de ejemplos de individuos y comunidades que, frente a la adversidad, han encontrado la determinación para superar obstáculos aparentemente insuperables. La búsqueda de significado es un hilo conductor en este viaje. Ya sea a través de la exploración de la ciencia, el arte, la espiritualidad o la filosofía, buscamos respuestas a las grandes preguntas de la existencia. Nos esforzamos por comprender nuestro propósito en el universo y cómo podemos contribuir al bienestar de la humanidad. En última instancia, este viaje es un recordatorio constante de nuestra capacidad para la transformación y el crecimiento. Cada día es una oportunidad para aprender, para amar, para perdonar y para evolucionar como seres humanos. A medida que avanzamos en este viaje, nos damos cuenta de que la vida es un regalo precioso que debemos apreciar y vivir plenamente, con gratitud y compasión hacia nosotros mismos y hacia los demás.',
    resume:
      'La vida, en su infinita diversidad, nos presenta un escenario en constante evolución, donde los seres humanos, en su búsqueda incansable de significado y propósito, se embarcan en un viaje de autodescubrimiento y crecimiento.',
  },
  {
    id: 2,
    title: `ChatGPT: La Revolución de la Inteligencia Artificial en la Conversación`,
    content:
      'En el mundo en constante evolución de la inteligencia artificial, ChatGPT ha emergido como una de las innovaciones más prometedoras. Desarrollado por OpenAI, ChatGPT es un modelo de lenguaje generativo que utiliza el aprendizaje profundo para comprender y generar texto de manera sorprendentemente natural. Con su capacidad para mantener conversaciones coherentes y contextualmente relevantes, ha revolucionado la forma en que interactuamos con las máquinas y ha generado un impacto significativo en una variedad de campos. ChatGPT se basa en una arquitectura de modelo de lenguaje GPT-3, que significa "Generative Pre-trained Transformer 3". Este modelo es la tercera iteración de la serie GPT y se ha entrenado con enormes cantidades de texto en varios idiomas. Su capacidad para comprender el contexto y generar respuestas coherentes lo ha convertido en una herramienta poderosa para una amplia gama de aplicaciones. Uno de los usos más destacados de ChatGPT es en el servicio al cliente y el soporte técnico. Las empresas han incorporado ChatGPT en sus sitios web y aplicaciones para interactuar con los clientes las 24 horas del día, los 7 días de la semana. Su capacidad para proporcionar respuestas precisas y consistentes ha mejorado significativamente la experiencia del cliente y ha reducido la carga de trabajo del personal de soporte. En el ámbito de la educación, ChatGPT ha demostrado ser una herramienta valiosa. Los estudiantes pueden utilizarlo para obtener respuestas a sus preguntas y acceder a material de estudio adicional. Además, los profesores han encontrado en ChatGPT un aliado para crear contenido educativo y ejercicios interactivos. La investigación científica también se beneficia de ChatGPT. Los científicos pueden utilizarlo para analizar grandes cantidades de datos y obtener información valiosa en campos como la biología, la física y la astronomía. ChatGPT se ha convertido en una herramienta de colaboración poderosa para acelerar el progreso científico. Sin embargo, el avance de ChatGPT no está exento de desafíos éticos y preocupaciones. La generación automática de texto plantea preguntas sobre la veracidad y el sesgo en la información. Es esencial abordar estas preocupaciones y garantizar que las aplicaciones de ChatGPT sean responsables y éticas. En resumen, ChatGPT ha revolucionado la forma en que interactuamos con la inteligencia artificial. Su capacidad para mantener conversaciones coherentes y relevantes lo ha convertido en una herramienta valiosa en una variedad de campos, desde el servicio al cliente hasta la educación y la investigación científica. Sin embargo, es importante abordar las preocupaciones éticas a medida que continuamos aprovechando su potencial. ChatGPT representa un emocionante vistazo al futuro de la IA y su impacto en nuestras vidas.',
    resume:
      'En el mundo en constante evolución de la inteligencia artificial, ChatGPT ha emergido como una de las innovaciones más prometedoras. Desarrollado por OpenAI, ChatGPT es un modelo de lenguaje generativo que utiliza el aprendizaje profundo para comprender y generar texto de manera sorprendentemente natural.',
  },
  {
    id: 3,
    title: `Los Desafíos Actuales en la Política Internacional`,
    content:
      'La política internacional se encuentra en constante evolución, y hoy más que nunca, enfrenta desafíos complejos que afectan a nivel global. Desde conflictos regionales hasta cuestiones medioambientales, pasando por la lucha contra el terrorismo y la gestión de la economía mundial, la política internacional se presenta como un campo donde las naciones deben cooperar y resolver sus diferencias. Uno de los desafíos más apremiantes es el cambio climático. El calentamiento global, provocado en gran medida por las emisiones de gases de efecto invernadero, amenaza la estabilidad del planeta y exige una acción coordinada a nivel internacional. Acuerdos como el Acuerdo de París buscan abordar este problema, pero la implementación efectiva sigue siendo un reto. Los conflictos armados y las tensiones geopolíticas también están en el centro de la política internacional. Las crisis en Ucrania, Siria y otros lugares continúan generando preocupación, y la diplomacia internacional busca soluciones pacíficas para estos conflictos. Además, la rivalidad entre superpotencias como Estados Unidos, China y Rusia crea un escenario complicado que requiere una diplomacia hábil. La ciberseguridad es otra preocupación importante en la política internacional. Los ataques cibernéticos, ya sean perpetrados por Estados, grupos terroristas o delincuentes cibernéticos, pueden tener un impacto devastador en la infraestructura crítica y la privacidad de las personas. La cooperación internacional en materia de ciberseguridad es esencial. La economía global presenta su propio conjunto de desafíos. La lucha contra la desigualdad económica, el comercio internacional y la regulación financiera son temas en constante debate. Además, la pandemia de COVID-19 ha tenido un impacto significativo en la economía mundial, lo que requiere una respuesta coordinada a nivel internacional. En resumen, la política internacional afronta desafíos múltiples y complejos en la actualidad. La cooperación y la diplomacia son fundamentales para abordar estas cuestiones y encontrar soluciones efectivas. A medida que el mundo se vuelve cada vez más interconectado, la política internacional desempeña un papel crucial en la promoción de la paz, la estabilidad y el bienestar global.',
    resume:
      'La política internacional se encuentra en constante evolución, y hoy más que nunca, enfrenta desafíos complejos que afectan a nivel global. Desde conflictos regionales hasta cuestiones medioambientales',
  },
];


interface OtherNews {
  id: number;
  content: string;
  section?:string
}

export const OtherNews: OtherNews[] = [
  {
    id: 1,
    content:
      'Descubrimiento científico: Nueva terapia génica promete curar la diabetes tipo 1',
      section:'SALUD'
  },
  {
    id: 2,
    content:
      'Economía mundial en auge: Crecimiento del PIB global alcanza un máximo en una década',
      section:'ECONOMÍA'
  },
  {
    id: 3,
    content:
      'Avance tecnológico: Inteligencia artificial revoluciona la atención médica en el hogar',
      section:'TECNOLOGÍA'
  },
  {
    id: 4,
    content:
      'Éxito espacial: Misión tripulada a Marte establece un nuevo récord de tiempo de viaje interplanetario',
      section:'AEROESPACIAL'
  },
];