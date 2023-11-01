export interface PrincipalPostInterface {
  id: number;
  title: string;
  subTitle?: string;
  section?: string;
  post: string;
  resume?:string
  image?: string;
  autor?: {
    name: string;
    avatar: string;
    bio: string;
  };
}

export const principalPost: PrincipalPostInterface[] = [
  {
    id: 2,
    title:
      'Nuevo estudio demuestra que el consumo de frutas y verduras reduce el riesgo de enfermedades cardíacas',
    subTitle: 'Más razones para comer sano',
    section: 'SALUD',
    post: 'Un reciente estudio científico ha revelado que una dieta rica en frutas y verduras puede reducir significativamente el riesgo de enfermedades cardíacas. Esta investigación destaca la importancia de una alimentación equilibrada en la prevención de problemas cardiovasculares, que son una de las principales causas de muerte en todo el mundo.\n\nLos expertos en nutrición han encontrado que las personas que consumen al menos cinco porciones de frutas y verduras al día tienen un 30% menos de probabilidades de desarrollar enfermedades cardíacas en comparación con aquellos que no siguen esta pauta. Los antioxidantes y las fibras presentes en estos alimentos desempeñan un papel fundamental en la protección del corazón y los vasos sanguíneos.\n\nEste descubrimiento enfatiza la importancia de adoptar hábitos alimenticios saludables y promueve la idea de que la comida puede ser una poderosa medicina preventiva.\n\nLa investigación se basa en un análisis de datos de miles de participantes a lo largo de varios años y confirma la relación entre la dieta y la salud del corazón. Los resultados han sido publicados en una prestigiosa revista médica y están siendo ampliamente divulgados en la comunidad científica y de salud.\n\nLos médicos y nutricionistas alientan a las personas a incluir una variedad de frutas y verduras en su dieta diaria para mantener un corazón saludable y prevenir enfermedades cardiovasculares. Comer de manera equilibrada es esencial para el bienestar a largo plazo.\n\nEste importante hallazgo brinda a las personas una razón adicional para tomar decisiones alimenticias saludables y proteger su salud cardiovascular.',
    resume:
      'Un estudio reciente destaca la importancia de una dieta rica en frutas y verduras para reducir el riesgo de enfermedades cardíacas, una de las principales causas de muerte a nivel mundial. Expertos en nutrición han encontrado que consumir al menos cinco porciones de frutas y verduras al día reduce el riesgo de enfermedades cardíacas en un 30%. Los antioxidantes y fibras presentes en estos alimentos desempeñan un papel crucial en la protección del corazón. Los resultados se basan en un análisis de datos de miles de participantes durante varios años y han sido publicados en una revista médica prestigiosa.',
    image: '../../assets/principalPost/fruits-vegetables.jpg',
    autor: {
      name: 'Ana Pérez',
      avatar: 'https://joesch.moe/api/v1/female/random',
      bio: 'Ana Pérez, periodista de 32 años, apasionada por la divulgación científica y la promoción de la salud. Graduada en periodismo de salud, se dedica a investigar y comunicar noticias relacionadas con la medicina y el bienestar. Su objetivo es ayudar a las personas a tomar decisiones informadas sobre su salud.',
    },
  },
];
