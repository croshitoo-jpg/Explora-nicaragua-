import { TouristRoute } from '../types';

export const NICARAGUA_ROUTES: TouristRoute[] = [
  {
    id: 'ruta-aventura-norte',
    title: 'Ruta Aventura en el Norte (Matagalpa, Estelí y Somoto)',
    subtitle: 'Tierras altas montañosas, cascadas entre pinos, puros premium y la colosal garganta del Cañón de Somoto',
    region: 'Centro-Norte',
    durationDays: 4,
    distanceKm: 260,
    difficulty: 'Moderado',
    category: 'Naturaleza y Cascadas',
    badge: 'Aventura & Frescura',
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    description: 'Una expedición cautivadora por el norte verde de Nicaragua. Inicia en las frescas montañas cafetaleras y bosques de niebla de Matagalpa, continúa en la vibrante capital del tabaco y cascada La Estanzuela en Estelí, y culmina con la máxima adrenalina nadando y flotando entre las milenarias paredes rocosas del Cañón de Somoto.',
    stops: ['matagalpa-selva-negra', 'esteli-tisey-estanzuela', 'canon-de-somoto'],
    pathCoordinates: [
      [12.1565, -86.2753], // Managua
      [12.9256, -85.9178], // Matagalpa (Selva Negra)
      [13.0894, -86.3539], // Estelí (Tisey - La Estanzuela)
      [13.4862, -86.6698]  // Cañón de Somoto
    ],
    highlights: [
      'Nadar, flotar con chaleco y saltar desde acantilados en las aguas turquesas del Cañón de Somoto',
      'Senderismo en bosque de niebla y cata de café de especialidad en Selva Negra (Matagalpa)',
      'Bañarse en la poza natural de la Cascada La Estanzuela en la Reserva Tisey (Estelí)',
      'Visitar las esculturas talladas en roca viva de Don Alberto en El Jalacate',
      'Degustar las auténticas rosquillas somoteñas y güirilas con cuajada fresca'
    ],
    estimatedBudgetUsd: 175,
    estimatedBudgetNio: 6400,
    transportAdvice: 'Salidas directas desde la Terminal Mercado El Mayoreo en Managua hacia Matagalpa (2h); luego buses interurbanos conectan Matagalpa con Estelí (1.5h) y Estelí con Somoto (1h 15m) por la Carretera Panamericana Norte.',
    itinerary: [
      {
        day: 1,
        placeId: 'matagalpa-selva-negra',
        title: 'Matagalpa, Clima de Montaña y Finca Selva Negra',
        description: 'Salida desde Managua hacia la Perla del Septentrión. Almuerzo con güirilas en El Guayacán y tour del café ecológico en la Reserva Selva Negra.',
        activities: ['Tour guiado del proceso del café de altura', 'Senderismo entre árboles centenarios y orquídeas', 'Cena de comida campestre matagalpina'],
        recommendedStay: 'Selva Negra Ecolodge o Hotel en Matagalpa Centro',
        transportLeg: 'Bus Expreso Mayoreo (Managua) -> Matagalpa (2 horas)'
      },
      {
        day: 2,
        placeId: 'esteli-tisey-estanzuela',
        title: 'Estelí, Fábricas de Tabaco y Cascada La Estanzuela',
        description: 'Traslado a Estelí, recorrido por sus murales urbanos, visita a una fábrica de puros artesanales y caminata refrescante a la Cascada La Estanzuela.',
        activities: ['Visita a fábrica de puros premium', 'Caminata y baño en Cascada La Estanzuela', 'Mirador y esculturas de piedra en El Jalacate'],
        recommendedStay: 'Estelí Centro',
        transportLeg: 'Bus interurbano Matagalpa -> Estelí (1.5 horas)'
      },
      {
        day: 3,
        placeId: 'canon-de-somoto',
        title: 'Expedición y Adrenalina en el Cañón de Somoto',
        description: 'Viaje a Madriz y recorrido por el Cañón de Somoto con guías locales comunitarios: caminata en el cañón, natación en aguas calmas y saltos de roca.',
        activities: ['Circuito guiado por el Cañón de Somoto', 'Saltos opcionales de 3 a 10 metros', 'Paseo en bote de remos tradicional por la salida del cañón'],
        recommendedStay: 'Cabañas comunitarias del Cañón o Somoto',
        transportLeg: 'Bus Estelí -> Terminal Somoto (1h 15m) + colectivo al Cañón (15 min)'
      },
      {
        day: 4,
        placeId: 'canon-de-somoto',
        title: 'Rosquillas de Somoto, Miradores y Retorno',
        description: 'Visita a los tradicionales talleres de rosquillas y viejitas en Somoto, mirador panorámico de Cacaulí y regreso cómodo a Managua.',
        activities: ['Degustación de rosquillas recién horneadas con café', 'Compra de artesanías locales', 'Viaje de retorno en bus expreso'],
        recommendedStay: 'Managua',
        transportLeg: 'Bus Expreso Somoto -> Terminal El Mayoreo Managua (3.5 horas)'
      }
    ]
  },
  {
    id: 'ruta-playas-pacifico',
    title: 'Ruta Playas del Pacífico (San Juan del Sur, Popoyo, Masachapa y Pochomil)',
    subtitle: 'Olas de clase mundial, bahías de ensueño, mariscos frescos en el muelle de Masachapa y diversión en Pochomil',
    region: 'Pacífico',
    durationDays: 5,
    distanceKm: 270,
    difficulty: 'Fácil',
    category: 'Playas y Surf',
    badge: 'Sol & Olas',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description: 'El circuito costero más completo de la costa pacífica de Nicaragua. Combina la animada bahía y surf de San Juan del Sur, los tubos legendarios y pozas de marea en Popoyo, con la tradición pesquera del muelle de Masachapa y la energía de Pochomil con paseos a caballo y cuatrimotos.',
    stops: ['san-juan-del-sur', 'playa-popoyo-tola', 'playa-masachapa', 'playa-pochomil'],
    pathCoordinates: [
      [12.1565, -86.2753], // Managua
      [11.2530, -85.8705], // San Juan del Sur
      [11.4556, -86.1211], // Popoyo / Tola
      [11.7880, -86.5140], // Masachapa
      [11.7833, -86.5167]  // Pochomil
    ],
    highlights: [
      'Subir al Cristo de la Misericordia y surfear en Playa Maderas (San Juan del Sur)',
      'Surfear la rompiente de arrecife y sumergirse en pozas de marea en Popoyo',
      'Visitar el pintoresco muelle de pescadores de Masachapa y comer pargo rojo fresco',
      'Manejar cuatrimotos (ATV) sobre las extensas arenas y paseos a caballo en Pochomil',
      'Aguas termales minerales en Las Salinas de Nahualapa'
    ],
    estimatedBudgetUsd: 240,
    estimatedBudgetNio: 8800,
    transportAdvice: 'Hacia San Juan del Sur y Popoyo se viaja desde la Terminal Roberto Huembes; hacia Masachapa y Pochomil los microbuses salen de la Terminal Mercado Israel Lewites cada 20 minutos.',
    itinerary: [
      {
        day: 1,
        placeId: 'san-juan-del-sur',
        title: 'Bahía de San Juan del Sur y Mirador del Cristo',
        description: 'Llegada a San Juan del Sur, subida al mirador del Cristo con vistas panorámicas a la bahía y tarde de relax o surf en Playa Maderas.',
        activities: ['Mirador del Cristo de la Misericordia', 'Shuttle y sesión de surf en Playa Maderas', 'Cena de ceviche en el malecón'],
        recommendedStay: 'San Juan del Sur',
        transportLeg: 'Bus Expreso Roberto Huembes (Managua) -> San Juan del Sur (2.5 horas)'
      },
      {
        day: 2,
        placeId: 'playa-popoyo-tola',
        title: 'Popoyo, Costa Esmeralda y Pozas de Marea',
        description: 'Traslado a la zona de Tola, sesión de surf en Popoyo Main Break y baño en las piscinas de roca natural de Guasacate con marea baja.',
        activities: ['Surf en la rompiente de Popoyo', 'Baño en piscinas naturales de roca en Guasacate', 'Atardecer dorado frente a acantilados'],
        recommendedStay: 'Popoyo / Guasacate Ecolodge',
        transportLeg: 'Shuttle de playa o taxi San Juan del Sur -> Popoyo (1 hora)'
      },
      {
        day: 3,
        placeId: 'playa-popoyo-tola',
        title: 'Aguas Termales de Las Salinas y Conexión al Pacífico Central',
        description: 'Mañana en las aguas termales curativas de Las Salinas de Nahualapa y traslado hacia la costa central de Managua.',
        activities: ['Baño relajante en aguas termales minerales', 'Paseo por la costa de Santana', 'Traslado hacia Masachapa'],
        recommendedStay: 'Masachapa o Pochomil',
        transportLeg: 'Vehículo por Carretera Costanera o conexión vía Rivas / Managua (2 horas)'
      },
      {
        day: 4,
        placeId: 'playa-masachapa',
        title: 'Muelle de Pescadores de Masachapa y Almuerzo Marinero',
        description: 'Exploración del tradicional muelle de pescadores de Masachapa, almuerzo de pargo rojo a la tipitapa recién pescado y paseo en lancha.',
        activities: ['Ver el desembarque de la pesca artesanal en el muelle', 'Almuerzo de pargo rojo a la tipitapa frente al mar', 'Paseo costero a caballo al atardecer'],
        recommendedStay: 'Masachapa frente a la playa',
        transportLeg: 'A pie o mototaxi entre Masachapa y Pochomil (5 minutos)'
      },
      {
        day: 5,
        placeId: 'playa-pochomil',
        title: 'Centro Turístico Pochomil, Cuatrimotos (ATV) y Retorno',
        description: 'Día lleno de diversión en Pochomil con renta de cuatrimotos (ATV) en las dunas de arena, natación en el mar y retorno a Managua.',
        activities: ['Ruta en cuatrimoto ATV por la orilla del mar', 'Relax en hamacas y agua de coco fría', 'Regreso en microbús a Managua'],
        recommendedStay: 'Managua',
        transportLeg: 'Microbús Interlocal Pochomil -> Terminal Israel Lewites Managua (1h 15m)'
      }
    ]
  },
  {
    id: 'ruta-colonial-volcanes',
    title: 'Ruta Colonial y de los Volcanes',
    subtitle: 'Historia de 500 años, catedrales barrocas, cráteres activos y volcano boarding',
    region: 'Pacífico',
    durationDays: 5,
    distanceKm: 210,
    difficulty: 'Moderado',
    category: 'Volcanes y Aventura',
    badge: 'La Más Popular',
    coverImage: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80',
    description: 'El circuito clásico imprescindible de Nicaragua. Conecta las dos joyas coloniales rivales (Granada y León) pasando por el impresionante cráter de lava del Volcán Masaya, los miradores de la Laguna de Apoyo y la adrenalina de deslizarse sobre cenizas volcánicas en el Cerro Negro.',
    stops: ['managua-historica', 'volcan-masaya', 'mirador-de-catarina', 'laguna-de-apoyo', 'granada-colonial', 'volcan-mombacho', 'leon-cerro-negro', 'volcan-telica'],
    pathCoordinates: [
      [12.1565, -86.2753], // Managua
      [11.9844, -86.1611], // Masaya
      [11.9108, -86.0744], // Catarina
      [11.9239, -86.0336], // Apoyo
      [11.9344, -85.9560], // Granada
      [11.8267, -85.9681], // Mombacho
      [12.1565, -86.2753], // Managua retorno / paso
      [12.4379, -86.8780], // León & Cerro Negro
      [12.6022, -86.8450]  // Telica
    ],
    highlights: [
      'Caminar descalzo en las cúpulas blancas de la Catedral de León (UNESCO)',
      'Descenso en tabla a toda velocidad por el Volcán Cerro Negro',
      'Observar lava incandescente en el cráter Santiago del Volcán Masaya de noche',
      'Paseo en lancha por las 365 Isletas del Gran Lago Cocibolca',
      'Nadar en las aguas termales de la Laguna de Apoyo'
    ],
    estimatedBudgetUsd: 220,
    estimatedBudgetNio: 8050,
    transportAdvice: 'Fácilmente realizable en transporte público interlocal desde la Terminal UCA en Managua o en vehículo rentado por la Carretera Panamericana.',
    itinerary: [
      {
        day: 1,
        placeId: 'managua-historica',
        title: 'Llegada a Managua y Volcán Masaya de Noche',
        description: 'Recorrido por el centro histórico de Managua y traslado por la tarde al Parque Nacional Volcán Masaya para admirar el lago de lava.',
        activities: ['Plaza de la Revolución y Antigua Catedral', 'Malecón Puerto Salvador Allende', 'Tour nocturno en el cráter del Volcán Masaya'],
        recommendedStay: 'Granada o Managua',
        transportLeg: 'Microbús UCA Managua -> Masaya (40 min)'
      },
      {
        day: 2,
        placeId: 'granada-colonial',
        title: 'Granada Colonial e Isletas del Lago',
        description: 'Exploración del centro histórico de Granada, campanario de La Merced y tour en lancha entre las Isletas.',
        activities: ['Campanario Iglesia de La Merced', 'Paseo en lancha en Isletas de Granada', 'Cena y música en Calle La Calzada'],
        recommendedStay: 'Granada Colonial',
        transportLeg: 'A pie o coche de caballos en Granada'
      },
      {
        day: 3,
        placeId: 'mirador-de-catarina',
        title: 'Pueblos Blancos y Laguna de Apoyo',
        description: 'Vistas panorámicas desde Catarina, talleres de alfarería en San Juan de Oriente y tarde relajante en la Laguna de Apoyo.',
        activities: ['Mirador de Catarina con marimbas', 'Tornos de barro en San Juan de Oriente', 'Kayak y natación en Laguna de Apoyo'],
        recommendedStay: 'Laguna de Apoyo eco-lodge o Granada',
        transportLeg: 'Taxi o bus local Granada -> Catarina -> Apoyo (30 min)'
      },
      {
        day: 4,
        placeId: 'leon-cerro-negro',
        title: 'León Universitario y Techos de la Catedral',
        description: 'Viaje hacia León, almuerzo con quesillos en La Paz Centro, visita a la Basílica Catedral y museos de arte.',
        activities: ['Paseo en techos de Catedral de León', 'Tumba de Rubén Darío', 'Museo Ortiz-Gurdián y murales históricos'],
        recommendedStay: 'León Centro',
        transportLeg: 'Microbús Interlocal Granada -> Managua UCA -> León (2 horas)'
      },
      {
        day: 5,
        placeId: 'leon-cerro-negro',
        title: 'Volcano Boarding en Cerro Negro y Playa Las Peñitas',
        description: 'Aventura extrema descendiendo el volcán Cerro Negro y atardecer con mariscos en la playa Las Peñitas.',
        activities: ['Sandboarding en Cerro Negro', 'Atardecer en Las Peñitas', 'Regreso a Managua'],
        recommendedStay: 'Managua o Las Peñitas',
        transportLeg: 'Tour 4x4 a Cerro Negro + Bus local a Las Peñitas'
      }
    ]
  },
  {
    id: 'ruta-sur-ometepe',
    title: 'Ruta de los Lagos, Ometepe y Playas del Sur',
    subtitle: 'El paraíso de dos volcanes en agua dulce, surf en San Juan del Sur y piscinas de marea',
    region: 'Pacífico',
    durationDays: 6,
    distanceKm: 260,
    difficulty: 'Moderado',
    category: 'Islas y Lagos',
    badge: 'Naturaleza & Playa',
    coverImage: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80',
    description: 'La ruta soñada para desconectar: navega por el Gran Lago Cocibolca hacia la mágica Isla de Ometepe con sus manantiales y cascadas, y continúa hacia las costas del Pacífico en San Juan del Sur y Popoyo con olas de surf mundial y atardeceres de ensueño.',
    stops: ['granada-colonial', 'isla-ometepe', 'san-juan-del-sur', 'playa-popoyo-tola'],
    pathCoordinates: [
      [11.9344, -85.9560], // Granada
      [11.4344, -85.8260], // Rivas / San Jorge
      [11.5385, -85.5683], // Ometepe (Moyogalpa / Altagracia)
      [11.2530, -85.8705], // San Juan del Sur
      [11.4556, -86.1211]  // Popoyo & Tola
    ],
    highlights: [
      'Nadar en el manantial natural Ojo de Agua en Ometepe',
      'Pasear en motocicleta alrededor de los volcanes Concepción y Maderas',
      'Ver el atardecer en la lengua de arena de Punta Jesús María',
      'Clases de surf en Playa Maderas y el mirador del Cristo en San Juan del Sur',
      'Pozas de marea cristalinas en Popoyo'
    ],
    estimatedBudgetUsd: 280,
    estimatedBudgetNio: 10250,
    transportAdvice: 'Ferry desde Puerto San Jorge a Ometepe (frecuencias cada hora). En la isla es altamente recomendado alquilar moto, scooter o quad.',
    itinerary: [
      {
        day: 1,
        placeId: 'isla-ometepe',
        title: 'Travesía en Ferry a Ometepe y Punta Jesús María',
        description: 'Llegada a Puerto San Jorge, cruce en ferry por el Gran Lago y primer atardecer en Punta Jesús María.',
        activities: ['Cruce en ferry con vistas a los volcanes', 'Alquiler de moto o scooter', 'Atardecer en Punta Jesús María'],
        recommendedStay: 'Moyogalpa o Playa Santo Domingo',
        transportLeg: 'Bus a Rivas (2h) + Taxi a Puerto San Jorge + Ferry (1h)'
      },
      {
        day: 2,
        placeId: 'isla-ometepe',
        title: 'Ojo de Agua y Cascada San Ramón',
        description: 'Día completo disfrutando del manantial mineral del Ojo de Agua y caminata a la Cascada San Ramón en el Volcán Maderas.',
        activities: ['Baño en Ojo de Agua', 'Caminata a Cascada San Ramón', 'Kayak en Río Istián con monos aulladores'],
        recommendedStay: 'Playa Santo Domingo / Balgüe',
        transportLeg: 'Recorrido en moto o vehículo en la isla'
      },
      {
        day: 3,
        placeId: 'isla-ometepe',
        title: 'Petroglifos y Playa Santo Domingo',
        description: 'Descubrimiento de petroglifos milenarios en Finca Magdalena y relajación en las arenas del lago antes del cruce de regreso.',
        activities: ['Senderismo en Finca Magdalena', 'Cata de café orgánico de Ometepe', 'Ferry de retorno a tierra firme'],
        recommendedStay: 'San Juan del Sur',
        transportLeg: 'Ferry a San Jorge + Taxi/Bus a San Juan del Sur (45 min)'
      },
      {
        day: 4,
        placeId: 'san-juan-del-sur',
        title: 'San Juan del Sur y Mirador del Cristo',
        description: 'Vistas panorámicas desde el monumento del Cristo de la Misericordia, caminata por la bahía y cena de mariscos frescos.',
        activities: ['Mirador del Cristo de la Misericordia', 'Caminata por la bahía de SJDS', 'Vida nocturna y gastronomía local'],
        recommendedStay: 'San Juan del Sur',
        transportLeg: 'A pie o taxi local'
      },
      {
        day: 5,
        placeId: 'san-juan-del-sur',
        title: 'Surf en Playa Maderas y Tortugas en La Flor',
        description: 'Día de surf en las famosas olas de Playa Maderas y visita vespertina al santuario de tortugas en Refugio La Flor.',
        activities: ['Clase de surf o alquiler de tabla en Maderas', 'Atardecer en Playa Hermosa', 'Tour nocturno de anidación de tortugas (temporada)'],
        recommendedStay: 'San Juan del Sur o Playa Maderas',
        transportLeg: 'Beach Shuttle desde San Juan del Sur (30 min)'
      },
      {
        day: 6,
        placeId: 'playa-popoyo-tola',
        title: 'Pozas de Marea y Relax en Popoyo',
        description: 'Exploración de la Costa Esmeralda, pozas naturales de Guasacate y aguas termales rústicas en Las Salinas.',
        activities: ['Baño en piscinas de roca natural en marea baja', 'Surf o descanso frente al mar', 'Regreso a Managua'],
        recommendedStay: 'Managua o Popoyo',
        transportLeg: 'Vehículo o shuttle Popoyo -> Managua (2.5 horas)'
      }
    ]
  },
  {
    id: 'ruta-cafe-norte',
    title: 'Ruta del Café, Cañones y Tierras Altas',
    subtitle: 'Naturaleza neblinosa, el colosal Cañón de Somoto, cascadas y las mejores fincas cafetaleras',
    region: 'Centro-Norte',
    durationDays: 5,
    distanceKm: 280,
    difficulty: 'Moderado',
    category: 'Naturaleza y Cascadas',
    badge: 'Aventura & Frescura',
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    description: 'Adéntrate en el norte verde y montañoso de Nicaragua con clima fresco, la hospitalidad campesina, los senderos neblinosos de Matagalpa y Jinotega, la cultura tabacalera de Estelí y el asombroso Cañón de Somoto esculpido en roca pura.',
    stops: ['matagalpa-selva-negra', 'jinotega-apanas-la-bastilla', 'esteli-tisey-estanzuela', 'canon-de-somoto'],
    pathCoordinates: [
      [12.1565, -86.2753], // Managua
      [12.9256, -85.9178], // Matagalpa (Selva Negra)
      [13.0900, -85.9980], // Jinotega
      [13.0894, -86.3539], // Estelí (Tisey)
      [13.4862, -86.6698]  // Somoto
    ],
    highlights: [
      'Nadar y saltar acantilados dentro del Cañón de Somoto',
      'Tour del Café de altura y cata profesional en Selva Negra',
      'Subir los 800 escalones a la Peña de la Cruz en Jinotega',
      'Bañarse en la Cascada La Estanzuela en Estelí',
      'Degustar Güirilas con cuajada fresca y rosquillas somoteñas'
    ],
    estimatedBudgetUsd: 190,
    estimatedBudgetNio: 6950,
    transportAdvice: 'Buses expresos desde la Terminal Mercado El Mayoreo en Managua salen frecuentemente hacia Matagalpa, Estelí y Somoto.',
    itinerary: [
      {
        day: 1,
        placeId: 'matagalpa-selva-negra',
        title: 'Matagalpa y Reserva Selva Negra',
        description: 'Viaje a la Perla del Septentrión, almuerzo con güirilas en El Guayacán y tour del café ecológico en Selva Negra.',
        activities: ['Tour del café y proceso del grano de oro', 'Senderismo en bosque nuboso en Selva Negra', 'Cata de café de especialidad'],
        recommendedStay: 'Selva Negra Ecolodge o Matagalpa',
        transportLeg: 'Bus Expreso Mayoreo -> Matagalpa (2 horas)'
      },
      {
        day: 2,
        placeId: 'jinotega-apanas-la-bastilla',
        title: 'Ciudad de las Brumas y Lago de Apanás',
        description: 'Ascenso a la Peña de la Cruz para admirar el valle montañoso y paseo en lancha en el Lago de Apanás.',
        activities: ['Ascenso a Peña de la Cruz', 'Paseo en lancha y avistamiento de aves en Lago Apanás', 'Cafeterías de especialidad'],
        recommendedStay: 'Jinotega o Estelí',
        transportLeg: 'Bus interlocal Matagalpa -> Jinotega (45 min)'
      },
      {
        day: 3,
        placeId: 'esteli-tisey-estanzuela',
        title: 'Estelí, Fábricas de Puros y Cascada La Estanzuela',
        description: 'Recorrido por la capital tabacalera de Nicaragua, visita a la reserva Tisey y baño en la cascada La Estanzuela.',
        activities: ['Cascada La Estanzuela', 'Esculturas en roca de Don Alberto en El Jalacate', 'Tour en fábrica de puros premium'],
        recommendedStay: 'Estelí Centro',
        transportLeg: 'Bus Jinotega -> Estelí (1.5 horas)'
      },
      {
        day: 4,
        placeId: 'canon-de-somoto',
        title: 'Aventura Flotante en el Cañón de Somoto',
        description: 'Día de pura adrenalina en el Cañón de Somoto: caminata, flotación en aguas cristalinas, saltos y paseo en bote.',
        activities: ['Circuito completo en el Cañón de Somoto con guía', 'Saltos de roca a pozas profundas', 'Tarde de rosquillas en talleres somoteños'],
        recommendedStay: 'Somoto o Cabañas comunitarias del Cañón',
        transportLeg: 'Bus Estelí -> Somoto (1 hora 15 min)'
      },
      {
        day: 5,
        placeId: 'canon-de-somoto',
        title: 'Miradores del Norte y Retorno a Managua',
        description: 'Desayuno campestre norteño con montucas y café de palo, vistas panorámicas de la cordillera y regreso a Managua.',
        activities: ['Compra de artesanías y rosquillas', 'Mirador de Cacaulí', 'Regreso a Managua'],
        recommendedStay: 'Managua',
        transportLeg: 'Bus Expreso Somoto -> Managua El Mayoreo (3.5 horas)'
      }
    ]
  },
  {
    id: 'ruta-caribe-paraiso',
    title: 'Ruta del Paraíso Caribeño (Corn Island & Cayos)',
    subtitle: 'Aguas cristalinas turquesas, arrecifes vírgenes, rondón, cultura creole y desconexión total',
    region: 'Caribe',
    durationDays: 5,
    distanceKm: 340,
    difficulty: 'Fácil',
    category: 'Playas y Surf',
    badge: 'Caribe Soñado',
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    description: 'Descubre el Caribe nicaragüense más idílico. Desde Big Corn Island con sus playas de arena dorada hasta Little Corn Island, una isla sin coches con arrecifes de coral rebosantes de vida marina, gastronomía de mariscos y ritmo reggae.',
    stops: ['corn-islands'],
    pathCoordinates: [
      [12.1565, -86.2753], // Managua
      [12.0122, -83.7635], // Bluefields
      [12.1644, -83.0417], // Big Corn Island
      [12.2880, -82.9780]  // Little Corn Island
    ],
    highlights: [
      'Snorkel y buceo con tiburones nodriza y rayas águila en arrecifes vírgenes',
      'Little Corn Island: caminar por senderos selváticos y playas desiertas',
      'Comer Rondón tradicional cocinado a fuego lento con leche de coco fresca',
      'Degustar langosta caribeña recién pescada a precios increíbles',
      'Atardeceres deslumbrantes en Otto Beach'
    ],
    estimatedBudgetUsd: 380,
    estimatedBudgetNio: 13900,
    transportAdvice: 'Vuelo directo de 1 hora 15 min desde Managua a Big Corn Island con aerolínea local (La Costeña), luego panga pública (30 min) hacia Little Corn Island.',
    itinerary: [
      {
        day: 1,
        placeId: 'corn-islands',
        title: 'Vuelo al Caribe y Llegada a Big Corn Island',
        description: 'Vuelo sobre la selva nicaragüense y el mar turquesa. Check-in y tarde en Playa Arenas (South West Bay).',
        activities: ['Vuelo escénico Managua - Corn Island', 'Playa Arenas y coco fresco', 'Cena caribeña de langosta'],
        recommendedStay: 'Big Corn Island',
        transportLeg: 'Vuelo MGA -> Big Corn Island (1h 15m)'
      },
      {
        day: 2,
        placeId: 'corn-islands',
        title: 'Panga a Little Corn Island y Otto Beach',
        description: 'Cruce en panga hacia Little Corn Island, instalación en cabaña frente al mar y caminata hacia la paradisíaca Otto Beach.',
        activities: ['Panga entre islas', 'Caminata sin coches por la selva', 'Snorkel desde la orilla en Otto Beach'],
        recommendedStay: 'Little Corn Island',
        transportLeg: 'Panga pública Big Corn -> Little Corn (30 min)'
      },
      {
        day: 3,
        placeId: 'corn-islands',
        title: 'Buceo / Snorkel en Arrecifes y Rondón Creole',
        description: 'Tour de buceo o snorkel en los arrecifes coralinos de Blowing Rock y cena con el tradicional Rondón caribeño.',
        activities: ['Tour de snorkel con guías locales', 'Avistamiento de tortugas y rayas', 'Cena de Rondón con pan de coco'],
        recommendedStay: 'Little Corn Island',
        transportLeg: 'A pie o en lancha de buceo'
      },
      {
        day: 4,
        placeId: 'corn-islands',
        title: 'Día Libre, Paddleboard y Mirador del Faro',
        description: 'Yoga matutino, paddleboard sobre aguas cristalinas y caminata hacia el antiguo faro para vista 360° del Caribe.',
        activities: ['Stand-up paddleboard en aguas calmas', 'Subida al faro de Little Corn', 'Música reggae y fogata en la playa'],
        recommendedStay: 'Little Corn Island',
        transportLeg: 'Caminata descalzo por la isla'
      },
      {
        day: 5,
        placeId: 'corn-islands',
        title: 'Retorno a Big Corn y Vuelo a Managua',
        description: 'Panga matutina de regreso a Big Corn, compra de pan de coco para llevar y vuelo de retorno a Managua.',
        activities: ['Compra de pan de coco y recuerdos', 'Vuelo panorámico de retorno', 'Llegada a Managua'],
        recommendedStay: 'Managua',
        transportLeg: 'Panga a Big Corn + Vuelo a Managua'
      }
    ]
  },
  {
    id: 'ruta-rio-san-juan',
    title: 'Ruta del Río San Juan e Historia Pirata',
    subtitle: 'Navegación por el mítico desaguadero del Cocibolca, fortalezas coloniales y selva virgen',
    region: 'Caribe',
    durationDays: 4,
    distanceKm: 290,
    difficulty: 'Moderado',
    category: 'Naturaleza y Cascadas',
    badge: 'Historia & Selva',
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    description: 'Sigue los pasos de piratas, conquistadores y naturalistas en una de las vías fluviales más ricas en historia y biodiversidad de América Latina, con la fortaleza española de El Castillo y la impenetrable Reserva Indio Maíz.',
    stops: ['archipielago-solentiname', 'rio-san-juan-el-castillo'],
    pathCoordinates: [
      [12.1565, -86.2753], // Managua
      [11.1272, -84.7778], // San Carlos
      [11.1764, -85.0336], // Solentiname
      [11.0189, -84.3986]  // El Castillo
    ],
    highlights: [
      'Visitar la Fortaleza de la Inmaculada Concepción (1675)',
      'Expedición en lancha por el Río San Juan y sus rápidos',
      'Senderismo en la Reserva Biológica Indio Maíz',
      'Pintura primitivista y talleres de arte en Solentiname',
      'Safari nocturno de caimanes y aves ribereñas'
    ],
    estimatedBudgetUsd: 230,
    estimatedBudgetNio: 8400,
    transportAdvice: 'Bus desde Managua Mayoreo a San Carlos, luego pangas públicas fluviales que recorren el río varias veces al día.',
    itinerary: [
      {
        day: 1,
        placeId: 'archipielago-solentiname',
        title: 'Llegada a San Carlos y Archipiélago de Solentiname',
        description: 'Traslado a San Carlos y lancha a Solentiname para conocer a los pintores primitivistas y santuario de aves.',
        activities: ['Navegación en el Lago de Nicaragua', 'Visita a talleres de artesanos en madera de balsa', 'Atardecer en Isla Mancarrón'],
        recommendedStay: 'Solentiname (Isla San Fernando o Mancarrón)',
        transportLeg: 'Bus Managua -> San Carlos + Lancha rápida (1h)'
      },
      {
        day: 2,
        placeId: 'rio-san-juan-el-castillo',
        title: 'Navegación hacia la Histórica Fortaleza El Castillo',
        description: 'Lancha de Solentiname a San Carlos y descenso por el Río San Juan pasando por los Rápidos del Toro hasta el pintoresco El Castillo.',
        activities: ['Navegación escénica por el Río San Juan', 'Paseo por el pueblo peatonal sin autos', 'Museo y murallas de la Fortaleza'],
        recommendedStay: 'El Castillo (Hoteles sobre pilotes en el río)',
        transportLeg: 'Panga pública fluvial San Carlos -> El Castillo (2 horas)'
      },
      {
        day: 3,
        placeId: 'rio-san-juan-el-castillo',
        title: 'Selva de Indio Maíz y Safari Nocturno de Caimanes',
        description: 'Caminata con guarda-parque en la Reserva Indio Maíz y tour nocturno en bote para buscar caimanes.',
        activities: ['Senderismo en la selva tropical primaria', 'Avistamiento de ranitas venenosas rojas y verdes', 'Safari de caimanes con reflector nocturno'],
        recommendedStay: 'El Castillo',
        transportLeg: 'Bote con motor fuera de borda'
      },
      {
        day: 4,
        placeId: 'rio-san-juan-el-castillo',
        title: 'Rápidos del Río y Retorno a Managua',
        description: 'Desayuno con camarones de río y retorno en panga a San Carlos para tomar el transporte terrestre de regreso.',
        activities: ['Fotografía matutina de la niebla en el río', 'Panga de retorno a San Carlos', 'Regreso a Managua'],
        recommendedStay: 'Managua',
        transportLeg: 'Panga El Castillo -> San Carlos + Bus a Managua'
      }
    ]
  },
  {
    id: 'ruta-pacifico-surf',
    title: 'Ruta del Surf y Playas del Pacífico',
    subtitle: 'Vientos constantes offshore 300 días al año, arrecifes, olas de clase mundial y ambiente costero',
    region: 'Pacífico',
    durationDays: 5,
    distanceKm: 240,
    difficulty: 'Fácil',
    category: 'Playas y Surf',
    badge: 'Olas & Relax',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description: 'El itinerario definitivo para surfistas de todos los niveles y amantes de la playa. Desde las olas suaves y largas para principiantes en Las Peñitas y Playa Remanso, hasta los desafiantes tubos de Popoyo y Playa Maderas.',
    stops: ['leon-cerro-negro', 'playa-popoyo-tola', 'san-juan-del-sur'],
    pathCoordinates: [
      [12.3556, -86.9744], // Las Peñitas
      [12.0500, -86.7200], // El Tránsito
      [11.4556, -86.1211], // Popoyo
      [11.2530, -85.8705]  // San Juan del Sur
    ],
    highlights: [
      'Surfear tubos perfectos en Popoyo Main Break',
      'Atardeceres legendarios en Playa Maderas con música acústica',
      'Piscinas de roca volcánica en Guasacate',
      'Paseos en velero al atardecer por la costa de San Juan del Sur',
      'Clases de surf en Las Peñitas'
    ],
    estimatedBudgetUsd: 250,
    estimatedBudgetNio: 9150,
    transportAdvice: 'Fácil acceso por la Carretera Costanera y shuttles de surfistas que conectan los principales hostales de playa.',
    itinerary: [
      {
        day: 1,
        placeId: 'leon-cerro-negro',
        title: 'León y Playa Las Peñitas',
        description: 'Llegada a la costa leonesa, olas largas en Las Peñitas y paseo por la Reserva Isla Juan Venado.',
        activities: ['Sesión de surf matutina', 'Tour en kayak por los manglares de Juan Venado', 'Ceviche fresco frente al mar'],
        recommendedStay: 'Las Peñitas',
        transportLeg: 'Bus UCA Managua -> León + Bus local a Las Peñitas'
      },
      {
        day: 2,
        placeId: 'playa-popoyo-tola',
        title: 'Traslado a la Costa Esmeralda y Popoyo',
        description: 'Viaje hacia la zona de Tola en Rivas, check-in en ecolodge de playa y sesión de surf al atardecer en Popoyo.',
        activities: ['Surf en Popoyo Break', 'Pozas naturales de marea en Guasacate', 'Cena de pescado pargo rojo'],
        recommendedStay: 'Popoyo / Guasacate',
        transportLeg: 'Shuttle costero o vehículo particular (2 horas)'
      },
      {
        day: 3,
        placeId: 'playa-popoyo-tola',
        title: 'Aguas Termales de Las Salinas y Playa Santana',
        description: 'Surf en las olas rápidas de Playa Santana y baño relajante en las aguas termales de Las Salinas.',
        activities: ['Surf en Santana beach break', 'Aguas termales minerales', 'Yoga al atardecer'],
        recommendedStay: 'Popoyo',
        transportLeg: 'Caminata o moto local'
      },
      {
        day: 4,
        placeId: 'san-juan-del-sur',
        title: 'San Juan del Sur y Playa Maderas',
        description: 'Llegada a San Juan del Sur, subida al Cristo de la Misericordia y sesión de surf en Playa Maderas.',
        activities: ['Mirador del Cristo de la Misericordia', 'Surf en Playa Maderas', 'Cena en el malecón de SJDS'],
        recommendedStay: 'San Juan del Sur',
        transportLeg: 'Shuttle Popoyo -> San Juan del Sur (1 hora)'
      },
      {
        day: 5,
        placeId: 'san-juan-del-sur',
        title: 'Paseo en Catamarán y Despedida del Pacífico',
        description: 'Mañana en catamarán con snorkel y barra libre, avistamiento de delfines y regreso a Managua.',
        activities: ['Tour en catamarán de navegación a vela', 'Snorkel en caletas escondidas', 'Retorno a Managua'],
        recommendedStay: 'Managua',
        transportLeg: 'Bus Expreso SJDS -> Managua Roberto Huembes (2.5 horas)'
      }
    ]
  }
];
