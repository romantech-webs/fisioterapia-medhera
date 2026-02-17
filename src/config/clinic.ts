export const clinic = {
  name: "Fisioterapia Medhera",
  logo: "/images/logo.png",
  tagline: "Tu recuperación en manos expertas en Sevilla",
  description: "Fisioterapia Medhera es tu clínica de fisioterapia de confianza en Sevilla, con valoración de 5 estrellas en Google por 47 pacientes. Dirigida por José, fisioterapeuta especializado en tratamiento de lesiones articulares, contracturas y rehabilitación personalizada. Utilizamos ecografía diagnóstica, ejercicios adaptados y planes personalizados para cada paciente. Atención de urgencias disponible.",
  colors: {
    primary: "#2563EB",
    secondary: "#1E293B",
    accent: "#06B6D4",
    neutral: "#F8FAFC"
  },
  phone: "603 77 03 85",
  whatsapp: "+34603770385",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "Av. de la Innovación, 6, Edificio Convención, oficina 212, 41020 Sevilla, España",
    city: "Sevilla",
    province: "Madrid",
    postalCode: "41020",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=10995448154532872594&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Fisioterapia%20Medhera%20%4037.4057%2C-5.92893&z=16&output=embed",
  coordinates: {
    lat: 37.4057,
    lng: -5.92893
  },
  schedule: [
    {
      days: "lunes - domingo",
      hours: "9:00–21:00"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 47,
    url: "https://maps.google.com/?cid=10995448154532872594&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "TOÑI PUNTIVERO",
        rating: 5,
        text: "Lo recomiendo 100 %. Jose es un profesional excepcional, atento, implicado y muy comprometido con su trabajo. Te orienta con ejercicios físicos, adaptados a tus capacidades y dolencias para la mejora y recuperación de las lesiones. El mejor fisioterapeuta que he tenido. En varios meses me he recuperado de varias lesiones articulares. Se basa en pruebas médicas de imagen y lo complementa con el ecógrafo. Un 10 para él.",
        date: "Hace 3 semanas"
      },
      {
        author: "Lara Franco",
        rating: 5,
        text: "Jose me ha buscado un hueco hoy sábado de donde no tenía para atenderme de urgencias. Llevo muchos años de fisioterapeutas y soy muy exigente con los tratamientos; no solo el de la consulta ha sido fantástico sino que me ha mandado un PDF personalizado con estiramientos para casa. Sin duda alguna acaba de ganar una nueva clienta. Súper recomendable!",
        date: "Hace 2 semanas"
      },
      {
        author: "mcristina perez",
        rating: 5,
        text: "Tengo una contractura en la espalda muy grande.\nMe atendió de urgencias y no puedo estar más agradecida.\nLlevo dos sesiones y aunque sé las baritas mágicas no existen he mejorado mucho.\nMil gracias Jose tienes unas manos que valen un imperio, eres todo amabilidad aparte de de un magnífico profesional, nos vemos en la próxima sesión.",
        date: "Hace 7 meses"
      },
      {
        author: "Daniela Rozales",
        rating: 5,
        text: "Mi fisioterapeuta es José, es muy amable, cercano y profesional. No solo te trata durante la sesión, sino que te da ejercicios para seguir mejorando desde casa. Lo recomiendo totalmente",
        date: "Hace 3 meses"
      },
      {
        author: "Claudia SC",
        rating: 5,
        text: "Mi pareja y yo estamos encantados con las sesiones de Jose. Es un gran profesional, amable y atento en todo momento. Es el mejor fisio al que ambos hemos ido. Muchas gracias!",
        date: "Hace 3 meses"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual Especializada",
      description: "Tratamiento manual avanzado con técnicas especializadas para aliviar el dolor y mejorar la movilidad. Nuestro enfoque se basa en el diagnóstico preciso de tu lesión para aplicar las maniobras más efectivas. Manos expertas que marcan la diferencia en tu recuperación.",
      benefits: [
        "Alivio inmediato del dolor",
        "Mejora de la movilidad articular",
        "Tratamiento personalizado según tu lesión"
      ],
      icon: "Hand"
    },
    {
      id: "lesiones-articulares",
      name: "Tratamiento de Lesiones Articulares",
      description: "Especialización en lesiones articulares con apoyo de pruebas médicas de imagen y ecografía diagnóstica. Diseñamos planes de recuperación específicos para cada articulación afectada. Seguimiento exhaustivo hasta tu completa recuperación funcional.",
      benefits: [
        "Diagnóstico preciso con ecografía",
        "Recuperación basada en evidencia médica",
        "Planes adaptados a cada articulación"
      ],
      icon: "Target"
    },
    {
      id: "contracturas-musculares",
      name: "Tratamiento de Contracturas",
      description: "Eliminación efectiva de contracturas musculares con técnicas manuales avanzadas y punción seca. Tratamos desde contracturas leves hasta las más persistentes y dolorosas. Resultados visibles desde las primeras sesiones.",
      benefits: [
        "Reducción significativa del dolor",
        "Técnicas manuales especializadas",
        "Mejora progresiva sesión a sesión"
      ],
      icon: "Activity"
    },
    {
      id: "rehabilitacion-personalizada",
      name: "Rehabilitación Personalizada",
      description: "Programas de rehabilitación diseñados específicamente para tus capacidades y dolencias. Incluye ejercicios adaptados y progresivos para realizar en clínica y en casa. Te enviamos PDFs personalizados con tu rutina de ejercicios.",
      benefits: [
        "Ejercicios adaptados a tu nivel",
        "Material personalizado para casa",
        "Seguimiento continuo de tu progreso"
      ],
      icon: "Dumbbell"
    },
    {
      id: "ecografia-diagnostica",
      name: "Ecografía Diagnóstica",
      description: "Tecnología de ecografía para complementar las pruebas médicas de imagen y obtener un diagnóstico preciso. Visualizamos en tiempo real el estado de tus tejidos y articulaciones. Fundamental para diseñar el tratamiento más efectivo.",
      benefits: [
        "Diagnóstico visual inmediato",
        "Complemento a pruebas médicas",
        "Mayor precisión en el tratamiento"
      ],
      icon: "Zap"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Recuperación y prevención de lesiones deportivas con técnicas avanzadas. Tratamiento específico para deportistas que buscan volver a su actividad al máximo rendimiento. Planes de fortalecimiento y prevención de recaídas.",
      benefits: [
        "Retorno seguro a la actividad deportiva",
        "Prevención de nuevas lesiones",
        "Optimización del rendimiento físico"
      ],
      icon: "Target"
    },
    {
      id: "atencion-urgencias",
      name: "Atención de Urgencias",
      description: "Disponibilidad para atenderte en situaciones de urgencia, incluso fines de semana. Entendemos que el dolor no espera y buscamos huecos para darte solución inmediata. Compromiso con tu bienestar cuando más lo necesitas.",
      benefits: [
        "Atención rápida cuando la necesitas",
        "Disponibilidad en fines de semana",
        "Solución inmediata al dolor agudo"
      ],
      icon: "Heart"
    },
    {
      id: "ejercicios-domiciliarios",
      name: "Programas de Ejercicios para Casa",
      description: "Estiramientos y ejercicios personalizados que complementan tu tratamiento en clínica. Te proporcionamos material en PDF adaptado a tu lesión y capacidades. Seguimiento de tu evolución con los ejercicios pautados.",
      benefits: [
        "Continuidad del tratamiento en casa",
        "PDFs personalizados con ilustraciones",
        "Mejora más rápida y sostenida"
      ],
      icon: "Activity"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llama al 603 77 03 85 o escríbenos por WhatsApp. Te buscamos hueco lo antes posible, incluso para urgencias en fin de semana si lo necesitas."
    },
    {
      step: 2,
      title: "Valoración con Ecografía",
      description: "Evaluamos tu lesión basándonos en tus pruebas médicas de imagen y complementamos con ecografía diagnóstica. Diseñamos un plan de tratamiento específico para tu caso."
    },
    {
      step: 3,
      title: "Tratamiento Personalizado",
      description: "Aplicamos las técnicas manuales más adecuadas para tu recuperación. Durante la sesión trabajamos tu lesión y te explicamos ejercicios adaptados a tus capacidades para continuar en casa."
    },
    {
      step: 4,
      title: "Seguimiento y Recuperación",
      description: "Te proporcionamos PDFs personalizados con ejercicios y estiramientos. Hacemos seguimiento continuo de tu evolución hasta que recuperes completamente tu funcionalidad y bienestar."
    }
  ],
  whyUs: [
    {
      title: "5 Estrellas en Google con 47 Reseñas",
      description: "Nuestros pacientes nos avalan con la máxima puntuación. Destacan nuestra profesionalidad, implicación personal y resultados efectivos. La confianza de quienes ya han recuperado su bienestar con nosotros es nuestra mejor carta de presentación.",
      icon: "Heart"
    },
    {
      title: "Diagnóstico con Ecografía",
      description: "Complementamos las pruebas médicas de imagen con ecografía diagnóstica en consulta. Esta tecnología nos permite visualizar tus lesiones en tiempo real y diseñar el tratamiento más preciso y efectivo para tu caso específico.",
      icon: "Zap"
    },
    {
      title: "Seguimiento Integral Personalizado",
      description: "No solo te tratamos en consulta: te proporcionamos PDFs personalizados con ejercicios y estiramientos adaptados a tu lesión. Este seguimiento continuo acelera tu recuperación y te empodera para cuidar tu salud desde casa.",
      icon: "Target"
    },
    {
      title: "Atención de Urgencias Disponible",
      description: "Entendemos que el dolor no espera. Por eso buscamos huecos para atenderte cuando más lo necesitas, incluso en fines de semana. Tu bienestar es nuestra prioridad y nos adaptamos a situaciones urgentes.",
      icon: "Activity"
    }
  ],
  team: [
    {
      name: "José",
      role: "Fisioterapeuta",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Fisioterapia Medhera nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "Fisioterapia Medhera - Imagen 1"
    },
    {
      src: "/images/hero.webp",
      alt: "Fisioterapia Medhera - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Fisioterapia Medhera - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Fisioterapia Medhera - Imagen 4"
    }
  ],
  faq: [
    {
      question: "¿Qué hace diferente a Fisioterapia Medhera?",
      answer: "En Fisioterapia Medhera combinamos técnicas manuales especializadas con tecnología de ecografía diagnóstica para un tratamiento más preciso. Nuestros pacientes destacan la implicación personal, el seguimiento exhaustivo y los ejercicios personalizados que enviamos en PDF para continuar en casa. Con 5 estrellas en 47 reseñas de Google, nuestro compromiso es tu recuperación completa."
    },
    {
      question: "¿Cuántas sesiones necesitaré para recuperarme?",
      answer: "Cada lesión y cada persona son diferentes, por lo que el número de sesiones varía según tu caso específico. En Fisioterapia Medhera basamos nuestro diagnóstico en pruebas médicas de imagen y ecografía para establecer un plan realista. Muchos pacientes notan mejora desde las primeras sesiones, pero trabajamos contigo hasta tu recuperación completa, no aplicamos tratamientos estándar."
    },
    {
      question: "¿Atendéis urgencias y fines de semana?",
      answer: "Sí, en Fisioterapia Medhera entendemos que el dolor no espera. Hacemos lo posible por buscar huecos para atenderte en situaciones de urgencia, incluso en sábados si es necesario. Llama al 603 77 03 85 y te daremos la mejor solución posible para tu caso."
    },
    {
      question: "¿Qué tipo de lesiones tratáis principalmente?",
      answer: "En Fisioterapia Medhera somos especialistas en lesiones articulares, contracturas musculares, lesiones deportivas y rehabilitación personalizada. Trabajamos con ecografía diagnóstica y pruebas médicas para tratar desde dolores agudos hasta lesiones crónicas. Nuestros pacientes destacan especialmente nuestra efectividad en contracturas de espalda y problemas articulares."
    },
    {
      question: "¿Proporcionáis ejercicios para hacer en casa?",
      answer: "Sí, es una parte fundamental de nuestro tratamiento en Fisioterapia Medhera. Te proporcionamos PDFs personalizados con ejercicios y estiramientos adaptados a tu lesión y capacidades físicas. Estos ejercicios complementan el trabajo en clínica y aceleran significativamente tu recuperación. Nuestros pacientes valoran mucho este seguimiento integral."
    },
    {
      question: "¿Cómo puedo pedir cita en Fisioterapia Medhera?",
      answer: "Puedes solicitar tu cita llamando directamente al 603 77 03 85 o escribiendo por WhatsApp al mismo número. Te atenderemos personalmente para buscar el mejor horario según tu disponibilidad. Si tienes una urgencia, haremos lo posible por atenderte lo antes posible."
    },
    {
      question: "¿Usáis tecnología de diagnóstico en los tratamientos?",
      answer: "Sí, en Fisioterapia Medhera utilizamos ecografía diagnóstica como complemento a las pruebas médicas de imagen que aportes. Esto nos permite visualizar en tiempo real el estado de tus tejidos y articulaciones, lo que resulta en un diagnóstico más preciso y un tratamiento más efectivo y personalizado."
    },
    {
      question: "¿Qué opinan vuestros pacientes del tratamiento?",
      answer: "Fisioterapia Medhera tiene una valoración de 5 estrellas sobre 5 en Google con 47 reseñas de pacientes reales. Nuestros pacientes destacan la profesionalidad, la implicación personal, las manos expertas, la atención cercana y los resultados efectivos. Muchos mencionan que somos el mejor fisioterapeuta que han tenido y recomiendan nuestros servicios al 100%."
    }
  ],
  seo: {
    titleTemplate: "%s | Fisioterapia Medhera",
    defaultTitle: "Fisioterapia Medhera - Fisioterapia en Sevilla",
    defaultDescription: "Clínica de fisioterapia en Sevilla con 5★ en Google. Especialistas en lesiones articulares, contracturas y rehabilitación. Ecografía diagnóstica. Pide cita: 603 77 03 85",
    keywords: [
      "fisioterapia Sevilla",
      "Fisioterapia Medhera",
      "fisioterapeuta Sevilla",
      "lesiones articulares Sevilla",
      "contracturas musculares Sevilla",
      "ecografía fisioterapia Sevilla",
      "rehabilitación personalizada Sevilla",
      "fisioterapia deportiva Sevilla",
      "fisioterapia urgencias Sevilla",
      "tratamiento contracturas Sevilla",
      "clínica fisioterapia Sevilla",
      "mejor fisioterapeuta Sevilla"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Fisioterapia Medhera",
    cif: "",
    registeredAddress: "Av. de la Innovación, 6, Edificio Convención, oficina 212, 41020 Sevilla, España, Sevilla, Madrid"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Sevilla"
  ],
  heroDescription: "En Fisioterapia Medhera combinamos técnicas manuales avanzadas con tecnología de diagnóstico por ecografía para tratar tus lesiones de forma efectiva. Nuestro compromiso es tu recuperación completa, con seguimiento personalizado y ejercicios adaptados a tus necesidades específicas.",
  specialty: "Lesiones Articulares y Contracturas",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu bienestar físico?",
  ctaDescription: "Solicita tu cita de valoración en Fisioterapia Medhera. Te atendemos con la profesionalidad y cercanía que mereces, incluso en urgencias.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
