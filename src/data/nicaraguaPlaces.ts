import { Place } from '../types';

export const NICARAGUA_PLACES: Place[] = [
  {
    id: 'granada-colonial',
    name: 'Granada Colonial e Isletas',
    department: 'Granada',
    region: 'Pacífico',
    category: 'Ciudades Coloniales',
    rating: 4.9,
    reviewsCount: 1420,
    coordinates: { lat: 11.9344, lng: -85.9560 },
    shortDescription: 'La Gran Sultana, fundada en 1524 a orillas del Gran Lago Cocibolca con arquitectura colonial y más de 365 isletas.',
    fullDescription: 'Granada es una de las ciudades coloniales más antiguas del continente americano. Destaca por su imponente Catedral de color amarillo en el Parque Central, la Iglesia de la Merced con su campanario panorámico, y paseos en lancha por las Isletas de Granada, formadas por la erupción milenaria del Volcán Mombacho.',
    highlights: [
      'Subir al campanario de la Iglesia de la Merced para vista 360°',
      'Paseo en lancha o kayak por las 365 Isletas del Lago Cocibolca',
      'Pasear en coche de caballos por la Calle Real de Xalteva',
      'Visitar el Convento San Francisco y sus estatuas precolombinas',
      'Vida nocturna y gastronomía en la Calle La Calzada'
    ],
    howToGetThere: {
      fromManagua: 'Microbuses interlocales desde Terminal UCA (cada 15 min) o buses ordinarios desde Terminal Mercado Roberto Huembes.',
      terminal: 'Terminal UCA (Managua) o Mercado Huembes',
      busType: 'Microbús Interlocal Express',
      estimatedTime: '50 - 70 minutos',
      estimatedFareNio: 40,
      tips: 'Llega temprano a la UCA en horas pico para tomar asiento cómodo. En Granada puedes moverte a pie por todo el centro histórico.'
    },
    bestSeason: 'Todo el año (Noviembre a Abril con cielos despejados)',
    recommendedDuration: '2 - 3 días',
    budgetLevel: '$$',
    entranceFeeNio: 50,
    entranceFeeUsd: 1.5,
    image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Catedral de Granada y Parque Central',
      'Paseo en lancha por las 365 Isletas en el Lago Cocibolca',
      'Vista panorámica desde el campanario de la Iglesia La Merced',
      'Arquitectura colonial y coches tradicionales de caballos',
      'Corredores coloniales del Convento San Francisco'
    ],
    typicalFood: ['Vigorón con chicharrón en hoja de plátano', 'Fresco de Grama', 'Cajetas granadinas', 'Pescado Guapote sin espinas'],
    difficulty: 'Fácil',
    tags: ['Colonial', 'Historia', 'Isletas', 'Kayak', 'Gastronomía'],
    climate: 'Cálido tropical (28°C - 34°C)',
    popularActivities: ['Fotografía colonial', 'Paseo en lancha', 'Cata de chocolate en ChocoMuseo', 'Ciclismo'],
    routeIds: ['ruta-colonial-volcanes', 'ruta-sur-ometepe']
  },
  {
    id: 'volcan-masaya',
    name: 'Parque Nacional Volcán Masaya',
    department: 'Masaya',
    region: 'Pacífico',
    category: 'Volcanes y Aventura',
    rating: 4.8,
    reviewsCount: 1890,
    coordinates: { lat: 11.9844, lng: -86.1611 },
    shortDescription: 'Uno de los pocos volcanes del mundo donde puedes asomarte a su cráter activo "Santiago" y ver lava hirviendo.',
    fullDescription: 'Conocido históricamente por los conquistadores españoles como "La Boca del Infierno", el Volcán Masaya es un espectáculo natural único. Cuenta con un centro de interpretación, senderos ecológicos y un mirador al borde del cráter activo Santiago, donde el lago de lava y las fumarolas de azufre impresionan tanto de día como en el tour nocturno.',
    highlights: [
      'Tour nocturno para observar el brillo incandescente del lago de lava',
      'Ver pericos verdes volando dentro del cráter sulfuroso',
      'Visitar la Cruz de Bobadilla instalada en 1529',
      'Museo vulcanológico interactivo'
    ],
    howToGetThere: {
      fromManagua: 'Buses interlocales Managua-Masaya o Managua-Granada desde UCA o Huembes; pedir parada en la entrada del Parque Nacional sobre la Carretera a Masaya (Km 23).',
      terminal: 'Terminal UCA o Roberto Huembes',
      busType: 'Interlocal o Bus Ruterio',
      estimatedTime: '30 - 45 minutos',
      estimatedFareNio: 25,
      tips: 'Desde la entrada principal puedes subir en vehículo propio o tomar el shuttle oficial del parque hasta el cráter.'
    },
    bestSeason: 'Noviembre a Mayo (Tour nocturno disponible a partir de las 5:00 PM)',
    recommendedDuration: '3 - 4 horas (Tarde-Noche)',
    budgetLevel: '$$',
    entranceFeeNio: 150,
    entranceFeeUsd: 5,
    image: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Lago de lava incandescente en el cráter activo Santiago de noche',
      'Fumarolas de azufre y borde del cráter durante el día',
      'Cruz de Bobadilla y mirador panorámico del complejo volcánico',
      'Paisaje de campos de lava basáltica y senderos ecológicos'
    ],
    typicalFood: ['Yoltamal con cuajada', 'Chicha de Maíz', 'Masa de Cazuela', 'Güirilas'],
    difficulty: 'Fácil',
    tags: ['Volcán Activo', 'Lava', 'Nocturno', 'Naturaleza'],
    climate: 'Cálido y ventoso en el cráter (25°C - 30°C)',
    popularActivities: ['Observación de lava', 'Fotografía nocturna', 'Senderismo en cuevas de murciélagos'],
    routeIds: ['ruta-colonial-volcanes']
  },
  {
    id: 'isla-ometepe',
    name: 'Isla de Ometepe (Concepción y Maderas)',
    department: 'Rivas',
    region: 'Pacífico',
    category: 'Islas y Lagos',
    rating: 4.9,
    reviewsCount: 2150,
    coordinates: { lat: 11.5385, lng: -85.5683 },
    shortDescription: 'La isla volcánica en agua dulce más grande del mundo, Reserva de la Biosfera con dos colosos gemelos.',
    fullDescription: 'Ometepe ("Lugar de dos montañas" en náhuatl) emerge del inmenso Lago Cocibolca formada por el Volcán Concepción (activo y cónico) y el Volcán Maderas (inactivo y cubierto de bosque nuboso con laguna en su cráter). Es un paraíso ecológico con petroglifos precolombinos, cascadas, manantiales cristalinos y una energía mística inigualable.',
    highlights: [
      'Bañarse en las aguas minerales cristalinas del Ojo de Agua',
      'Caminata a la Cascada San Ramón en las faldas del Volcán Maderas',
      'Atardecer en la Punta Jesús María con una estrecha lengua de arena sobre el lago',
      'Kayak en el Río Istián avistando monos congos y aves tropicales',
      'Ascenso desafiante al Volcán Concepción o Volcán Maderas'
    ],
    howToGetThere: {
      fromManagua: 'Bus desde Terminal Roberto Huembes a Rivas (2 hrs); de Rivas tomar taxi o bus a Puerto San Jorge (10 min); luego ferry o lancha a Moyogalpa o San José del Sur (1 hora).',
      terminal: 'Mercado Roberto Huembes -> Puerto San Jorge',
      busType: 'Bus Expreso a Rivas + Ferry Che Guevara / El Rey del Cocibolca',
      estimatedTime: '3.5 - 4.5 horas en total',
      estimatedFareNio: 180,
      tips: 'Alquila una motocicleta, scooter o quad en Moyogalpa para recorrer la isla con total libertad y vistas panorámicas.'
    },
    bestSeason: 'Diciembre a Mayo',
    recommendedDuration: '3 - 4 días',
    budgetLevel: '$$',
    entranceFeeNio: 100,
    entranceFeeUsd: 3,
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Los volcanes gemelos Concepción y Maderas emergiendo del Lago Cocibolca',
      'Atardecer dorado en la lengua de arena de Punta Jesús María',
      'Manantial natural de aguas termales cristalinas en Ojo de Agua',
      'Kayak ecológico explorando los humedales del Río Istián',
      'Cascada San Ramón entre la densa selva del Volcán Maderas'
    ],
    typicalFood: ['Pescado a la tipitapa fresco del lago', 'Plátanos fritos con queso frito', 'Café orgánico de Ometepe'],
    difficulty: 'Moderado',
    tags: ['Isla', 'Biosfera', 'Senderismo', 'Cascadas', 'Petroglifos'],
    climate: 'Tropical fresco en la montaña (22°C - 30°C)',
    popularActivities: ['Alquiler de moto/scooter', 'Senderismo a volcanes', 'Kayak', 'Avistamiento de aves'],
    routeIds: ['ruta-sur-ometepe', 'ruta-colonial-volcanes']
  },
  {
    id: 'san-juan-del-sur',
    name: 'San Juan del Sur y Playas de Tola',
    department: 'Rivas',
    region: 'Pacífico',
    category: 'Playas y Surf',
    rating: 4.7,
    reviewsCount: 2300,
    coordinates: { lat: 11.2530, lng: -85.8705 },
    shortDescription: 'La meca del surf en Centroamérica con bahía en herradura, vida nocturna vibrante y el monumental Cristo de la Misericordia.',
    fullDescription: 'San Juan del Sur es el destino playero por excelencia de Nicaragua. Su bahía colorida está flanqueada por restaurantes de mariscos y el mirador del Cristo de la Misericordia. A pocos minutos en shuttles se encuentran algunas de las mejores olas del planeta como Playa Maderas, Playa Hermosa, Remanso, y el Refugio de Vida Silvestre La Flor donde desovan miles de tortugas paslama.',
    highlights: [
      'Clases de surf en Playa Maderas y Playa Remanso',
      'Subir al mirador del Cristo de la Misericordia para ver el atardecer',
      'Avistamiento de arribadas de tortugas marinas en Refugio La Flor (Jul-Dic)',
      'Paseos en catamarán con avistamiento de ballenas jorobadas',
      'Cenas de mariscos frente al mar en el malecón'
    ],
    howToGetThere: {
      fromManagua: 'Buses expresos directos desde Terminal Mercado Roberto Huembes (Managua - San Juan del Sur) o interlocal a Rivas y conexión a SJDS.',
      terminal: 'Terminal Roberto Huembes (Managua)',
      busType: 'Bus Expreso Directo',
      estimatedTime: '2.5 - 3 horas',
      estimatedFareNio: 120,
      tips: 'Los "beach shuttles" salen cada 45 minutos desde Casa Oro en el centro hacia Playa Maderas, Playa Hermosa y Marsella.'
    },
    bestSeason: 'Noviembre a Mayo (Vientos offshore constantes ideales para surf)',
    recommendedDuration: '3 - 5 días',
    budgetLevel: '$$',
    entranceFeeNio: 70,
    entranceFeeUsd: 2,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Bahía en herradura de San Juan del Sur y barcos pesqueros al atardecer',
      'Surfeando olas perfectas en Playa Maderas',
      'Mirador monumental del Cristo de la Misericordia sobre los acantilados',
      'Atardecer rosado en el malecón con restaurantes de mariscos',
      'Playa Hermosa y santuario de anidación de tortugas marinas'
    ],
    typicalFood: ['Ceviche de corvina', 'Langosta al ajillo', 'Tacos de pescado fresco', 'Toña helada'],
    difficulty: 'Fácil',
    tags: ['Surf', 'Playas', 'Atardeceres', 'Tortugas', 'Vida Nocturna'],
    climate: 'Cálido costero con brisa marina (28°C - 33°C)',
    popularActivities: ['Surf & Bodyboard', 'Paseo en catamarán', 'Tour de tortugas', 'Yoga frente al mar'],
    routeIds: ['ruta-playas-pacifico', 'ruta-sur-ometepe', 'ruta-pacifico-surf']
  },
  {
    id: 'canon-de-somoto',
    name: 'Monumento Nacional Cañón de Somoto',
    department: 'Madriz',
    region: 'Centro-Norte',
    category: 'Naturaleza y Cascadas',
    rating: 4.9,
    reviewsCount: 1650,
    coordinates: { lat: 13.4862, lng: -86.6698 },
    shortDescription: 'Una garganta geológica impresionante de millones de años con paredes de roca de más de 150 metros y aguas turquesas.',
    fullDescription: 'Descubierto internacionalmente para el turismo en 2004, el Cañón de Somoto es una de las maravillas geológicas más espectaculares de Centroamérica. El Río Coco (el más largo de la región) serpentea entre farallones rocosos donde se realizan circuitos de aventura que combinan senderismo, natación con chalecos salvavidas, saltos de acantilados y paseos en bote de remos.',
    highlights: [
      'Circuito largo o medio flotando por el cañón con guía local certificado',
      'Saltos al agua desde rocas de 3 a 12 metros de altura',
      'Paseo en lancha de remos tradicional en la salida del cañón',
      'Degustar las famosas Rosquillas Somoteñas recién horneadas'
    ],
    howToGetThere: {
      fromManagua: 'Buses expresos desde Terminal Mercado El Mayoreo hacia Somoto (3.5 - 4 horas). En la terminal de Somoto tomar bus local hacia El Espino y bajarse en la comunidad de Sonís / entrada al Cañón.',
      terminal: 'Terminal Mercado El Mayoreo (Managua)',
      busType: 'Bus Expreso Managua-Somoto',
      estimatedTime: '4 - 4.5 horas',
      estimatedFareNio: 150,
      tips: 'Contrata siempre a los guías locales comunitarios en el centro de visitantes; incluye chaleco salvavidas obligatorio y bolsa impermeable.'
    },
    bestSeason: 'Noviembre a Mayo (Agua cristalina y caudal ideal)',
    recommendedDuration: '1 - 2 días',
    budgetLevel: '$',
    entranceFeeNio: 120,
    entranceFeeUsd: 3.5,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Farallones verticales de más de 150m y aguas turquesas del Cañón de Somoto',
      'Aventureros flotando con chalecos por el cañón rocoso',
      'Paseo en bote de madera tradicional por el Río Coco',
      'Paisaje geológico milenario y cuevas naturales'
    ],
    typicalFood: ['Rosquillas y Viejitas de Somoto con café de palo', 'Montucas', 'Nacatamal norteño'],
    difficulty: 'Moderado',
    tags: ['Aventura', 'Cañón', 'Natación', 'Geología', 'Ecoturismo'],
    climate: 'Templado y agradable (22°C - 28°C)',
    popularActivities: ['Canyoning', 'Saltos de roca', 'Paseo en bote', 'Senderismo'],
    routeIds: ['ruta-aventura-norte', 'ruta-cafe-norte']
  },
  {
    id: 'leon-cerro-negro',
    name: 'León Colonial y Volcán Cerro Negro',
    department: 'León',
    region: 'Pacífico',
    category: 'Volcanes y Aventura',
    rating: 4.9,
    reviewsCount: 1980,
    coordinates: { lat: 12.4379, lng: -86.8780 },
    shortDescription: 'Capital cultural e histórica de Nicaragua, hogar de la Basílica Catedral más grande de Centroamérica y el volcán de arena negra.',
    fullDescription: 'León vibra con arte, murales revolucionarios, poetas insignes como Rubén Darío y la imponente Catedral de León (Patrimonio de la Humanidad UNESCO), famosa por sus techos y cúpulas encaladas de blanco donde se camina descalzo. A poca distancia se encuentra el Volcán Cerro Negro, el más joven de Centroamérica, donde se inventó el deporte extremo "Volcano Boarding".',
    highlights: [
      'Volcano Boarding: deslizarse en tabla a 60-80 km/h por las arenas negras del Cerro Negro',
      'Caminar descalzo sobre el techo blanco de la Real Basílica Catedral de León',
      'Visitar la tumba de Rubén Darío custodiada por un león de mármol',
      'Probar los famosos quesillos de La Paz Centro / Nagarote',
      'Tarde de playa y surf en Las Peñitas o Poneloya (a 20 min de León)'
    ],
    howToGetThere: {
      fromManagua: 'Microbuses interlocales desde Terminal UCA cada 10-15 minutos directos a la Terminal de León.',
      terminal: 'Terminal UCA (Managua)',
      busType: 'Microbús Interlocal Express',
      estimatedTime: '1 hora 15 minutos',
      estimatedFareNio: 70,
      tips: 'Lleva lentes de sol para caminar en el techo de la Catedral (el reflejo del blanco es intenso) y ropa ligera para el calor de León.'
    },
    bestSeason: 'Noviembre a Mayo',
    recommendedDuration: '2 - 3 días',
    budgetLevel: '$$',
    entranceFeeNio: 110,
    entranceFeeUsd: 3,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Techos y cúpulas blancas de la Real Basílica Catedral de León (UNESCO)',
      'Volcano Boarding a toda velocidad en las arenas negras del Cerro Negro',
      'Arquitectura colonial e iglesias barrocas del centro histórico de León',
      'Playas de Las Peñitas y olas del Pacífico a minutos de la ciudad'
    ],
    typicalFood: ['Quesillo con cebollita encurtida y crema', 'Tiste en jícara con hielo', 'Cosa de Horno', 'Raspados de leche con tamarindo'],
    difficulty: 'Moderado',
    tags: ['Volcano Boarding', 'Catedral UNESCO', 'Cultura', 'Poesía', 'Playas'],
    climate: 'Cálido (30°C - 36°C)',
    popularActivities: ['Volcano boarding', 'Paseo en techos de Catedral', 'Museo de Arte Fundación Ortiz-Gurdián', 'Surf en Las Peñitas'],
    routeIds: ['ruta-colonial-volcanes', 'ruta-pacifico-surf']
  },
  {
    id: 'corn-islands',
    name: 'Corn Island (Big Corn & Little Corn)',
    department: 'RACCS (Caribe Sur)',
    region: 'Caribe',
    category: 'Playas y Surf',
    rating: 5.0,
    reviewsCount: 1320,
    coordinates: { lat: 12.1644, lng: -83.0417 },
    shortDescription: 'El tesoro caribeño de aguas turquesas cristalinas, arrecifes de coral virgen, palmeras de coco y langosta fresca.',
    fullDescription: 'Las Islas del Maíz (Corn Island) son un paraíso tropical en el Mar Caribe nicaragüense. Big Corn Island cuenta con carreteras asfaltadas y playas tranquilas como Playa Arenas, mientras que Little Corn Island es una joya peatonal (sin vehículos de motor), con senderos de selva, cabañas frente al mar y puntos de buceo de clase mundial como "Blowing Rock".',
    highlights: [
      'Buceo y snorkel con rayas águila, tiburones nodriza y jardines de coral virgen',
      'Little Corn Island: caminar por senderos descalzo y desconexión total',
      'Comer "Rondón" tradicional y langosta caribeña con pan de coco recién horneado',
      'Atardeceres caribeños en Otto Beach y South West Beach',
      'Tour en velero o panga hacia Cayos Perlas'
    ],
    howToGetThere: {
      fromManagua: 'Vuelo directo de Managua (Aeropuerto MGA) a Big Corn Island con aerolínea local (1h 15m) o ruta de aventura terrestre-fluvial (Bus a Bluefields + lancha o ferry rápido a Corn Island). Para Little Corn se toma la panga pública desde el muelle de Big Corn (30 min).',
      terminal: 'Aeropuerto Internacional Augusto C. Sandino (MGA) o Terminal El Mayoreo (Bus a Bluefields)',
      busType: 'Vuelo doméstico / Bus + Lancha rápida',
      estimatedTime: '1h 15m (Vuelo) o 10h (Ruta terrestre-acuática)',
      estimatedFareNio: 3500,
      tips: 'En Little Corn solo hay energía eléctrica en ciertos horarios y no hay cajeros automáticos; lleva suficiente efectivo en Dólares o Córdobas.'
    },
    bestSeason: 'Febrero a Septiembre (Mar Caribe en calma y máxima visibilidad para buceo)',
    recommendedDuration: '4 - 6 días',
    budgetLevel: '$$$',
    entranceFeeNio: 0,
    entranceFeeUsd: 0,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Aguas turquesas transparentes y arenas blancas en Little Corn Island',
      'Arrecifes de coral vivos y buceo con fauna marina caribeña',
      'Senderos tropicales entre palmeras de coco y cabañas playeras',
      'Atardecer caribeño en Otto Beach y South West Beach'
    ],
    typicalFood: ['Rondón marinero con leche de coco', 'Pan de Coco recién salido del horno de leña', 'Langosta a la parrilla', 'Patí caribeño'],
    difficulty: 'Fácil',
    tags: ['Caribe', 'Buceo', 'Arrecifes', 'Langosta', 'Playas Vírgenes'],
    climate: 'Tropical caribeño cálido con brisa fresca (27°C - 31°C)',
    popularActivities: ['Snorkel & Buceo', 'Paddleboard', 'Pesca deportiva', 'Relajación en hamacas'],
    routeIds: ['ruta-caribe-paraiso']
  },
  {
    id: 'laguna-de-apoyo',
    name: 'Reserva Natural Laguna de Apoyo',
    department: 'Masaya / Granada',
    region: 'Pacífico',
    category: 'Naturaleza y Cascadas',
    rating: 4.9,
    reviewsCount: 1540,
    coordinates: { lat: 11.9239, lng: -86.0336 },
    shortDescription: 'Un inmenso cráter volcánico extinto de agua dulce cristalina, mineralizada y rodeada de exuberante bosque tropical.',
    fullDescription: 'Formada hace más de 20,000 años tras la explosión colosal del antiguo volcán de Apoyo, esta laguna es el cuerpo de agua más limpio y profundo de Nicaragua. Sus aguas azul turquesa tienen propiedades termales minerales suaves. Es el lugar perfecto para nadar, practicar kayak, escuchar monos aulladores y descansar en eco-lodges a orillas del agua.',
    highlights: [
      'Nadar en aguas termales tibias y cristalinas',
      'Navegar en kayak o paddleboard con vistas a las paredes selváticas del cráter',
      'Escuchar el rugido de tropas de monos congos en el dosel del bosque',
      'Mirador de Catarina para ver la panorámica completa de la laguna y Granada'
    ],
    howToGetThere: {
      fromManagua: 'Microbús a Masaya o Granada; bajarse en la rotonda de Las Flores o entrada de la Laguna; tomar taxi o shuttle directo hacia la orilla de la laguna.',
      terminal: 'Terminal UCA (Managua)',
      busType: 'Interlocal Managua-Granada + Taxi',
      estimatedTime: '50 minutos',
      estimatedFareNio: 80,
      tips: 'Puedes pasar el día en hostales y clubes de playa como The Monkey Hut, San Simian o Laguna Beach Club con pase de día que incluye kayaks.'
    },
    bestSeason: 'Todo el año',
    recommendedDuration: '1 - 2 días',
    budgetLevel: '$$',
    entranceFeeNio: 100,
    entranceFeeUsd: 3,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Cráter volcánico de aguas azul profundo y bosques tropicales en Laguna de Apoyo',
      'Paseo en kayak por las aguas termales y tranquilas de la laguna',
      'Deck de madera y hamacas frente al agua en los eco-lodges costeros',
      'Vista aérea panorámica de la laguna desde los miradores de Catarina'
    ],
    typicalFood: ['Pescado frito con tostones', 'Ceviche fresco', 'Frutas tropicales', 'Coco helado'],
    difficulty: 'Fácil',
    tags: ['Laguna Cráter', 'Aguas Termales', 'Kayak', 'Naturaleza', 'Eco-lodge'],
    climate: 'Agradable y templado (25°C - 30°C)',
    popularActivities: ['Kayak', 'Natación', 'Avistamiento de monos', 'Yoga'],
    routeIds: ['ruta-colonial-volcanes']
  },
  {
    id: 'matagalpa-selva-negra',
    name: 'Matagalpa y Reserva Selva Negra (Ruta del Café)',
    department: 'Matagalpa',
    region: 'Centro-Norte',
    category: 'Naturaleza y Cascadas',
    rating: 4.8,
    reviewsCount: 1210,
    coordinates: { lat: 12.9256, lng: -85.9178 },
    shortDescription: 'La Perla del Septentrión, tierra de montañas neblinosas, fincas cafetaleras históricas y cascadas ocultas.',
    fullDescription: 'Matagalpa es la capital del café nicaragüense y la puerta de entrada a las tierras altas del norte. Con un clima fresco de montaña, destaca la legendaria finca agroecológica y reserva forestal Selva Negra, fundada por inmigrantes alemanes en el siglo XIX, donde se pueden recorrer senderos nubosos, observar cientos de especies de aves y conocer el proceso completo del café de altura.',
    highlights: [
      'Tour del Café de altura y cata profesional en fincas orgánicas',
      'Senderismo entre bosque de niebla y árboles centenarios en Selva Negra',
      'Avistamiento del esquivo quetzal y tucanes verdes',
      'Probar las famosas Güirilas con cuajada en El Guayacán'
    ],
    howToGetThere: {
      fromManagua: 'Buses expresos e interlocales desde la Terminal Mercado El Mayoreo cada 30 minutos directo a la terminal de Cotran en Matagalpa.',
      terminal: 'Terminal Mercado El Mayoreo (Managua)',
      busType: 'Bus Expreso Directo',
      estimatedTime: '2 horas',
      estimatedFareNio: 110,
      tips: 'Lleva suéter o chaqueta ligera para las tardes y noches frescas en las montañas.'
    },
    bestSeason: 'Octubre a Marzo (Época de cosecha del café y clima más fresco)',
    recommendedDuration: '2 - 3 días',
    budgetLevel: '$$',
    entranceFeeNio: 150,
    entranceFeeUsd: 4,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Bosque nuboso y senderos ecológicos de la Reserva Selva Negra',
      'Granos maduros de café de altura arábica en fincas orgánicas',
      'Laguna rodeada de montañas verdes y cabañas rústicas de montaña',
      'Paisaje de las cordilleras norteñas de Matagalpa'
    ],
    typicalFood: ['Güirilas con cuajada fresca y crema', 'Nacatamal norteño', 'Café especial de estricta altura', 'Pollo frito al estilo matagalpino'],
    difficulty: 'Fácil',
    tags: ['Café', 'Montaña', 'Niebla', 'Ecoturismo', 'Aves'],
    climate: 'Fresco de montaña (17°C - 24°C)',
    popularActivities: ['Tour del café', 'Senderismo', 'Birdwatching', 'Cabalgatas'],
    routeIds: ['ruta-aventura-norte', 'ruta-cafe-norte']
  },
  {
    id: 'rio-san-juan-el-castillo',
    name: 'Río San Juan y Fortaleza El Castillo',
    department: 'Río San Juan',
    region: 'Caribe',
    category: 'Naturaleza y Cascadas',
    rating: 4.9,
    reviewsCount: 980,
    coordinates: { lat: 11.0189, lng: -84.3986 },
    shortDescription: 'El majestuoso río histórico que une el Gran Lago con el Mar Caribe, rodeado por la selva virgen de Indio Maíz.',
    fullDescription: 'Río San Juan es una de las arterias fluviales e históricas más fascinantes del continente. El pequeño poblado peatonal de El Castillo alberga la imponente Fortaleza de la Inmaculada Concepción (1675), construida para repeler ataques de piratas como Francis Drake y donde combatió el héroe Horatio Nelson. Desde aquí se accede a la Reserva Biológica Indio Maíz.',
    highlights: [
      'Recorrer la Fortaleza de la Inmaculada Concepción y su museo de piratas',
      'Expedición en lancha por el Río San Juan y rápidos del Raudal del Toro',
      'Caminata guiada en la densa selva tropical de la Reserva Biológica Indio Maíz',
      'Tour nocturno en bote para avistamiento de caimanes y fauna nocturna',
      'Pesca deportiva de Sábalo Real (Catch and Release)'
    ],
    howToGetThere: {
      fromManagua: 'Bus desde Terminal Mercado El Mayoreo hasta San Carlos (6 horas). En el muelle de San Carlos tomar panga pública hacia El Castillo (2 horas río abajo).',
      terminal: 'Terminal Mercado El Mayoreo (Managua) -> Muelle de San Carlos',
      busType: 'Bus Expreso + Panga fluvial rápida',
      estimatedTime: '7 - 8 horas',
      estimatedFareNio: 350,
      tips: 'Los boletos de panga pública en San Carlos se compran por orden de llegada; madruga para asegurar tu cupo en los turnos de la mañana.'
    },
    bestSeason: 'Diciembre a Mayo',
    recommendedDuration: '3 - 4 días',
    budgetLevel: '$$',
    entranceFeeNio: 120,
    entranceFeeUsd: 3.5,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Fortaleza histórica de la Inmaculada Concepción (1675) sobre el río',
      'Navegación en panga por la selva virgen del Río San Juan',
      'Fauna silvestre y bosque primario de la Reserva Indio Maíz',
      'Atardecer y reflejos dorados en el agua del río'
    ],
    typicalFood: ['Camarón de río gigante al ajillo', 'Gaspar seco salado', 'Arroz con frijoles y coco', 'Tostones'],
    difficulty: 'Moderado',
    tags: ['Selva Virgen', 'Historia Colonial', 'Piratas', 'Río Histórico', 'Fauna'],
    climate: 'Cálido húmedo selvático (24°C - 30°C)',
    popularActivities: ['Navegación fluvial', 'Senderismo en Indio Maíz', 'Tour de caimanes', 'Pesca de sábalo'],
    routeIds: ['ruta-rio-san-juan']
  },
  {
    id: 'volcan-mombacho',
    name: 'Reserva Natural Volcán Mombacho',
    department: 'Granada',
    region: 'Pacífico',
    category: 'Volcanes y Aventura',
    rating: 4.8,
    reviewsCount: 1390,
    coordinates: { lat: 11.8267, lng: -85.9681 },
    shortDescription: 'Un imponente volcán dormido con bosque nuboso en su cima, fumarolas termales y vistas aéreas a las Isletas y Granada.',
    fullDescription: 'El Volcán Mombacho (1,345 msnm) es un ecosistema único en el Pacífico nicaragüense, cubierto por un microclima de bosque nuboso perpetuo. Posee 4 cráteres colapsados y varios senderos impresionantes como El Cráter, El Tigrillo y El Puma. Es hogar de la salamandra del Mombacho y orquídeas endémicas.',
    highlights: [
      'Senderismo en el Sendero El Cráter con túneles de vapor termal',
      'Canopy / Tirolesa entre las copas de los árboles de las plantaciones de café',
      'Miradores panorámicos hacia el Lago Cocibolca y la ciudad de Granada',
      'Subir en camión militar 4x4 por pendientes vertiginosas'
    ],
    howToGetThere: {
      fromManagua: 'Bus a Granada o Nandaime; bajarse en el empalme de Guanacaste; tomar mototaxi a la estación base del Volcán Mombacho.',
      terminal: 'Terminal UCA o Roberto Huembes',
      busType: 'Interlocal + Taxi local',
      estimatedTime: '1 hora 15 minutos',
      estimatedFareNio: 60,
      tips: 'La subida a la cumbre se realiza caminando (empinada de 5 km) o en los camiones 4x4 oficiales de la reserva.'
    },
    bestSeason: 'Noviembre a Abril',
    recommendedDuration: 'Medio día a 1 día',
    budgetLevel: '$$',
    entranceFeeNio: 150,
    entranceFeeUsd: 5,
    image: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Bosque enano nuboso y cráter cubierto de vegetación en la cumbre',
      'Sendero ecológico entre orquídeas y fumarolas de vapor caliente',
      'Vista aérea espectacular de las 365 Isletas y Granada colonial',
      'Canopy tirolesa volando sobre el dosel de los cafetales'
    ],
    typicalFood: ['Café orgánico de altura del Mombacho', 'Repostería casera', 'Gallo pinto tradicional'],
    difficulty: 'Moderado',
    tags: ['Bosque Nuboso', 'Volcán', 'Canopy', 'Fumarolas', 'Vistas'],
    climate: 'Fresco y húmedo en la cumbre (18°C - 24°C)',
    popularActivities: ['Senderismo guiado', 'Canopy tour', 'Fotografía de orquídeas'],
    routeIds: ['ruta-colonial-volcanes']
  },
  {
    id: 'esteli-tisey-estanzuela',
    name: 'Estelí y Reserva Tisey-La Estanzuela',
    department: 'Estelí',
    region: 'Centro-Norte',
    category: 'Naturaleza y Cascadas',
    rating: 4.7,
    reviewsCount: 1100,
    coordinates: { lat: 13.0894, lng: -86.3539 },
    shortDescription: 'El diamante de las Segovias, capital mundial del puro premium con la mágica cascada La Estanzuela y el bosque de pinos.',
    fullDescription: 'Estelí combina dinamismo urbano, muralismo artístico y famosas fábricas de puros reconocidas entre las mejores del mundo. En sus alrededores montañosos se encuentra la Reserva Natural Tisey-La Estanzuela con su cascada de más de 40 metros, el mirador El Jalacate donde Don Alberto esculpe figuras en roca viva, y densos bosques de roble y pino.',
    highlights: [
      'Caminata y baño en la poza de la Cascada La Estanzuela',
      'Visitar las esculturas en piedra de Don Alberto en El Jalacate',
      'Tour en fábricas de puros artesanales de clase mundial',
      'Ruta de los murales urbanos en el centro de Estelí'
    ],
    howToGetThere: {
      fromManagua: 'Buses expresos directos desde Terminal Mercado El Mayoreo cada 30-45 minutos.',
      terminal: 'Terminal Mercado El Mayoreo (Managua)',
      busType: 'Bus Expreso Directo',
      estimatedTime: '2.5 horas',
      estimatedFareNio: 120,
      tips: 'Los buses salen con puntualidad desde El Mayoreo; prueba los quesillos y montucas en las paradas del camino.'
    },
    bestSeason: 'Octubre a Mayo',
    recommendedDuration: '2 días',
    budgetLevel: '$',
    entranceFeeNio: 50,
    entranceFeeUsd: 1.5,
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Cascada La Estanzuela con caída de 40 metros y poza natural',
      'Esculturas en roca viva de Don Alberto en El Jalacate',
      'Bosques de pino y miradores de la Reserva Tisey',
      'Murales artísticos y cultura del tabaco en Estelí'
    ],
    typicalFood: ['Cuajada esteliana ahumada', 'Nacatamal con chile congo', 'Pernil de cerdo horneado'],
    difficulty: 'Fácil',
    tags: ['Cascadas', 'Puros', 'Esculturas', 'Pinos', 'Murales'],
    climate: 'Templado de montaña (19°C - 27°C)',
    popularActivities: ['Senderismo', 'Tour de tabaco', 'Visita a granjas de queso orgánico'],
    routeIds: ['ruta-aventura-norte', 'ruta-cafe-norte']
  },
  {
    id: 'archipielago-solentiname',
    name: 'Archipiélago de Solentiname',
    department: 'Río San Juan',
    region: 'Pacífico',
    category: 'Cultura y Gastronomía',
    rating: 4.8,
    reviewsCount: 750,
    coordinates: { lat: 11.1764, lng: -85.0336 },
    shortDescription: 'Archipiélago de 36 islas en el Gran Lago de Nicaragua, cuna de la pintura primitivista y santuario de aves.',
    fullDescription: 'Solentiname es un rincón de paz y creatividad fundado espiritualmente por el poeta Ernesto Cardenal. Sus habitantes son afamados pintores primitivistas que plasman en lienzos los colores intensos de la naturaleza y artesanos que tallan coloridas aves en madera de balsa. Cuenta con santuarios de anidación de aves acuáticas como la Isla Los Guatusos.',
    highlights: [
      'Talleres comunitarios de pintura primitivista y artesanías en madera de balsa',
      'Santuario de Aves acuáticas en Isla Zapote y Pajarera',
      'Petroglifos precolombinos grabados en rocas en Isla San Fernando y Mancarrón',
      'Paseos en bote al atardecer sobre el espejo de agua del Lago Cocibolca'
    ],
    howToGetThere: {
      fromManagua: 'Bus a San Carlos desde El Mayoreo (6 hrs) y tomar lancha comunitaria desde el puerto de San Carlos hacia Solentiname (1.5 horas).',
      terminal: 'Terminal Mercado El Mayoreo -> Muelle de San Carlos',
      busType: 'Bus Expreso + Lancha rápida',
      estimatedTime: '7 - 8 horas',
      estimatedFareNio: 280,
      tips: 'Excelente destino para artistas, escritores y personas que buscan desconexión total y meditación en la naturaleza.'
    },
    bestSeason: 'Noviembre a Mayo',
    recommendedDuration: '2 - 3 días',
    budgetLevel: '$$',
    entranceFeeNio: 50,
    entranceFeeUsd: 1.5,
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Paisaje sereno del archipiélago de 36 islas sobre el Lago Cocibolca',
      'Pinturas primitivistas tradicionales de artistas comunitarios',
      'Artesanías talladas en madera de balsa de tucanes y garzas',
      'Muelle y pangas en la Isla Mancarrón al atardecer'
    ],
    typicalFood: ['Guapote frito entero', 'Sopa de cangrejos de agua dulce', 'Tostones con cuajada'],
    difficulty: 'Fácil',
    tags: ['Arte Primitivista', 'Islas', 'Aves', 'Paz', 'Petroglifos'],
    climate: 'Cálido tropical con brisa de lago (26°C - 31°C)',
    popularActivities: ['Clases de pintura', 'Avistamiento de aves', 'Kayak en el lago', 'Paseo en bote'],
    routeIds: ['ruta-rio-san-juan']
  },
  {
    id: 'playa-popoyo-tola',
    name: 'Playa Popoyo y Costa Esmeralda (Tola)',
    department: 'Rivas',
    region: 'Pacífico',
    category: 'Playas y Surf',
    rating: 4.9,
    reviewsCount: 1250,
    coordinates: { lat: 11.4556, lng: -86.1211 },
    shortDescription: 'El epicentro mundial del surf en olas de arrecife (Reef Break) con mareas constantes y piscinas naturales de roca.',
    fullDescription: 'Popoyo es venerada por surfistas internacionales gracias a sus vientos constantes que soplan más de 300 días al año desde el Lago de Nicaragua hacia el océano Pacífico. Ofrece olas de categoría mundial como Popoyo Outer Reef y Popoyo Main Break, así como pozas de marea cristalinas en Guasacate y aguas termales rústicas en Las Salinas.',
    highlights: [
      'Surfear la legendaria ola de arrecife de Popoyo Break',
      'Bañarse en las piscinas de marea naturales de Guasacate con marea baja',
      'Visitar las aguas termales rústicas de Las Salinas de Nahualapa',
      'Atardeceres inolvidables sobre acantilados rocosos'
    ],
    howToGetThere: {
      fromManagua: 'Bus a Rivas desde Huembes (2h); en Rivas tomar bus ruterio a Salinas / Tola / Guasacate (1.5h) o taxi/shuttle privado.',
      terminal: 'Terminal Roberto Huembes (Managua)',
      busType: 'Bus Expreso a Rivas + Bus Ruterio a Las Salinas',
      estimatedTime: '3.5 - 4 horas',
      estimatedFareNio: 150,
      tips: 'Los caminos en la zona de Tola tienen tramos de tierra compactada; un vehículo 4x4 o moto trail es ideal si vas por cuenta propia.'
    },
    bestSeason: 'Todo el año para surf (Marzo a Noviembre para olas grandes)',
    recommendedDuration: '3 - 5 días',
    budgetLevel: '$$',
    entranceFeeNio: 0,
    entranceFeeUsd: 0,
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Tubo perfecto y olas de arrecife mundial en Popoyo Break',
      'Pozas de marea naturales en las rocas de Guasacate con marea baja',
      'Acantilados y costa virgen de la Costa Esmeralda en Tola',
      'Atardecer dorado sobre las olas del océano Pacífico'
    ],
    typicalFood: ['Burritos de pescado y aguacate', 'Batidos de pitahaya fresca', 'Ceviche de pargo rojo'],
    difficulty: 'Moderado',
    tags: ['Surf Pro', 'Pozas de Marea', 'Costa Esmeralda', 'Aguas Termales'],
    climate: 'Cálido y ventoso (28°C - 33°C)',
    popularActivities: ['Surf avanzado e intermedio', 'Yoga al atardecer', 'Exploración de pozas'],
    routeIds: ['ruta-playas-pacifico', 'ruta-pacifico-surf', 'ruta-sur-ometepe']
  },
  {
    id: 'managua-historica',
    name: 'Managua Histórica y Puerto Salvador Allende',
    department: 'Managua',
    region: 'Pacífico',
    category: 'Cultura y Gastronomía',
    rating: 4.6,
    reviewsCount: 1800,
    coordinates: { lat: 12.1565, lng: -86.2753 },
    shortDescription: 'La capital de Nicaragua a orillas del Lago Xolotlán, con el moderno malecón Salvador Allende y la histórica Plaza de la Revolución.',
    fullDescription: 'Managua es el corazón comercial y cultural del país. El paseo costanero Puerto Salvador Allende ofrece restaurantes temáticos, paseos en barco sobre el Lago Xolotlán, parque de diversiones y vistas al Volcán Momotombo. En el casco histórico destaca la Antigua Catedral de Santiago, el Palacio de la Cultura y el Parque Histórico Nacional Loma de Tiscapa.',
    highlights: [
      'Paseo nocturno en Puerto Salvador Allende frente al Lago Xolotlán',
      'Paseo en barco "El Momotombito" con vista al volcán',
      'Vista panorámica de la capital desde la Loma de Tiscapa y Canopy',
      'Recorrer la Plaza de la Revolución y el Teatro Nacional Rubén Darío',
      'Probar comida típica en el Tiangue La Fe sobre la Avenida Bolívar'
    ],
    howToGetThere: {
      fromManagua: 'Centro de la capital; accesible en taxis locales, transporte urbano colectivo (Rutas 109, 112, 133) o aplicaciones de viaje.',
      terminal: 'En el centro de Managua',
      busType: 'Transporte Urbano Colectivo / Taxi',
      estimatedTime: 'En la ciudad',
      estimatedFareNio: 20,
      tips: 'Visita el malecón a partir de las 4:30 PM para disfrutar del atardecer con brisa fresca del lago.'
    },
    bestSeason: 'Todo el año',
    recommendedDuration: '1 - 2 días',
    budgetLevel: '$$',
    entranceFeeNio: 35,
    entranceFeeUsd: 1,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Paseo costanero Puerto Salvador Allende y vista al Lago Xolotlán',
      'Antigua Catedral de Managua en la Plaza de la Revolución',
      'Laguna de Tiscapa y vista panorámica de la ciudad',
      'Avenida Bolívar iluminada de noche y centros culturales'
    ],
    typicalFood: ['Baho tradicional con carne deshebrada y yuca', 'Fritanga nicaragüense', 'Quesillo con doble crema', 'Cacao con leche'],
    difficulty: 'Fácil',
    tags: ['Capital', 'Malecón', 'Historia', 'Teatro', 'Fritangas'],
    climate: 'Cálido tropical (29°C - 35°C)',
    popularActivities: ['Paseo en barco', 'Gastronomía nocturna', 'Museos históricos'],
    routeIds: ['ruta-colonial-volcanes']
  },
  {
    id: 'jinotega-apanas-la-bastilla',
    name: 'Jinotega (Ciudad de las Brumas) y Lago de Apanás',
    department: 'Jinotega',
    region: 'Centro-Norte',
    category: 'Naturaleza y Cascadas',
    rating: 4.7,
    reviewsCount: 890,
    coordinates: { lat: 13.0900, lng: -85.9980 },
    shortDescription: 'La Ciudad de las Brumas entre cumbres montañosas, el lago artificial de Apanás y fincas agro-ecológicas.',
    fullDescription: 'Jinotega es el mayor productor de café de alta calidad de Nicaragua. Enclavada en un valle rodeado de cerros verdes cubiertos de neblina matutina, ofrece atractivos como el ascenso a la Peña de la Cruz (con más de 800 gradas y vista panorámica), paseos en bote o kayak en el Lago de Apanás (Humedal Ramsar) y visitas a fincas ecológicas como La Bastilla.',
    highlights: [
      'Ascenso a la Peña de la Cruz para admirar toda la Ciudad de las Brumas',
      'Paseo en lancha y kayak en el Lago de Apanás observando aves acuáticas',
      'Ecolodge La Bastilla y sus senderos de bosque de pino y café',
      'Cascada de La Mocuana y leyendas locales'
    ],
    howToGetThere: {
      fromManagua: 'Buses expresos desde Terminal Mercado El Mayoreo (2.5 - 3 horas).',
      terminal: 'Terminal Mercado El Mayoreo (Managua)',
      busType: 'Bus Expreso Directo',
      estimatedTime: '2.5 - 3 horas',
      estimatedFareNio: 130,
      tips: 'El ascenso a la Peña de la Cruz es mejor hacerlo por la mañana antes del mediodía para evitar el sol fuerte.'
    },
    bestSeason: 'Noviembre a Abril',
    recommendedDuration: '2 días',
    budgetLevel: '$',
    entranceFeeNio: 40,
    entranceFeeUsd: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Espejo de agua y aves en el Lago de Apanás entre las montañas',
      'Panorámica de Jinotega desde el mirador de la Peña de la Cruz',
      'Bosques de pino y cafetales de altura en La Bastilla',
      'Montañas brumosas del departamento de Jinotega'
    ],
    typicalFood: ['Agua de Chicha Bruja', 'Pan dulce jinotegano', 'Guisados norteños con verduras frescas'],
    difficulty: 'Moderado',
    tags: ['Montaña', 'Brumas', 'Lago Apanás', 'Peña de la Cruz', 'Café'],
    climate: 'Fresco de montaña (16°C - 23°C)',
    popularActivities: ['Senderismo a Peña de la Cruz', 'Paseos en lancha', 'Cata de café'],
    routeIds: ['ruta-cafe-norte']
  },
  {
    id: 'mirador-de-catarina',
    name: 'Pueblos Blancos y Mirador de Catarina',
    department: 'Masaya',
    region: 'Pacífico',
    category: 'Cultura y Gastronomía',
    rating: 4.8,
    reviewsCount: 1720,
    coordinates: { lat: 11.9108, lng: -86.0744 },
    shortDescription: 'Pueblos de artesanos floristas con la panorámica más famosa hacia la Laguna de Apoyo y el Volcán Mombacho.',
    fullDescription: 'Los Pueblos Blancos (Catarina, San Juan de Oriente, Diriomo, Diriá, Niquinohomo) son el corazón artesanal de Nicaragua. Catarina es famosa por sus viveros de flores exóticas y su mirador natural sobre el cráter de la Laguna de Apoyo con música en vivo de marimbas. San Juan de Oriente es el centro alfarero precolombino con talleres abiertos al público.',
    highlights: [
      'Contemplar la Laguna de Apoyo y Granada desde el Mirador de Catarina',
      'Escuchar sones nicas en marimba en vivo en el mirador',
      'Paseo a caballo por los senderos del borde del cráter',
      'Talleres de cerámica artística y tornos en San Juan de Oriente',
      'Comprar plantas tropicales en los viveros florales'
    ],
    howToGetThere: {
      fromManagua: 'Microbús interlocal desde UCA hacia Masaya o Rivas; bajarse en el empalme de Catarina; mototaxi o caminata de 10 minutos al mirador.',
      terminal: 'Terminal UCA (Managua)',
      busType: 'Microbús Interlocal',
      estimatedTime: '45 minutos',
      estimatedFareNio: 45,
      tips: 'Aprovecha para visitar San Juan de Oriente (a solo 2 km) y modelar tu propia vasija de barro con los artesanos locales.'
    },
    bestSeason: 'Todo el año (especialmente fines de semana por el ambiente festivo)',
    recommendedDuration: 'Medio día',
    budgetLevel: '$',
    entranceFeeNio: 20,
    entranceFeeUsd: 0.6,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Vista icónica de la Laguna de Apoyo y Volcán Mombacho desde Catarina',
      'Viveros de flores exóticas y plantas ornamentales de Catarina',
      'Torno alfarero y cerámica artística en San Juan de Oriente',
      'Música de marimba nicaragüense y paseos a caballo'
    ],
    typicalFood: ['Cajetas de leche y coco en Diriomo (Pueblo de brujos)', 'Chicha de Maíz', 'Tostones con queso'],
    difficulty: 'Fácil',
    tags: ['Mirador', 'Artesanías', 'Marimba', 'Cerámica', 'Flores'],
    climate: 'Templado y fresco con brisa constante (23°C - 28°C)',
    popularActivities: ['Paseo a caballo', 'Compra de artesanías', 'Sesiones de fotos'],
    routeIds: ['ruta-colonial-volcanes']
  },
  {
    id: 'volcan-telica',
    name: 'Volcán Telica y Hervideros de San Jacinto',
    department: 'León',
    region: 'Pacífico',
    category: 'Volcanes y Aventura',
    rating: 4.8,
    reviewsCount: 920,
    coordinates: { lat: 12.6022, lng: -86.8450 },
    shortDescription: 'Cráter activo con magma incandescente visible de noche y campos geotérmicos de lodo hirviente en San Jacinto.',
    fullDescription: 'El Volcán Telica es uno de los volcanes más activos y accesibles de la cordillera de Los Maribios. Su cráter mide más de 700 metros de diámetro y 120 metros de profundidad. Al atardecer, los tours nocturnos permiten asomarse con precaución para observar el brillo del magma y el espectáculo de cientos de murciélagos saliendo del cráter. Cerca están los Hervideros de San Jacinto.',
    highlights: [
      'Ver el brillo del magma incandescente en el fondo del cráter de noche',
      'Campamento nocturno bajo cielos estrellados en las faldas del volcán',
      'Atardecer dorado sobre toda la cadena volcánica de Los Maribios',
      'Visitar las fumarolas y pozas de lodo geotérmico en San Jacinto'
    ],
    howToGetThere: {
      fromManagua: 'Microbús a León desde UCA; en León contratar tour operador (con transporte 4x4) o tomar bus local a San Jacinto.',
      terminal: 'Terminal UCA (Managua) -> León',
      busType: 'Interlocal + Tour 4x4 desde León',
      estimatedTime: '2 horas hasta León + 1h aproximación',
      estimatedFareNio: 150,
      tips: 'Lleva linterna frontal, abrigo ligero para la noche en la cima y calzado adecuado para caminata en ceniza volcánica.'
    },
    bestSeason: 'Noviembre a Abril',
    recommendedDuration: '1 tarde/noche o campamento',
    budgetLevel: '$$',
    entranceFeeNio: 100,
    entranceFeeUsd: 3,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Cráter inmenso del Volcán Telica con fumarolas y paredes escarpadas',
      'Brillo de lava y magma al fondo del cráter durante el tour nocturno',
      'Pozas de lodo volcánico hirviente en los Hervideros de San Jacinto',
      'Atardecer panorámico sobre la Cordillera de Los Maribios'
    ],
    typicalFood: ['Gallo pinto de campamento', 'Bebidas hidratantes', 'Quesillo de regreso en La Paz Centro'],
    difficulty: 'Desafiante',
    tags: ['Magma Nocturno', 'Camping', 'Maribios', 'Fumarolas', 'Trekking'],
    climate: 'Cálido de día y fresco-ventoso de noche (18°C - 32°C)',
    popularActivities: ['Trekking nocturno', 'Astrofotografía', 'Observación de murciélagos'],
    routeIds: ['ruta-colonial-volcanes']
  },
  {
    id: 'playa-masachapa',
    name: 'Playa Masachapa y Muelle de Pescadores',
    department: 'Managua',
    region: 'Pacífico',
    category: 'Playas y Surf',
    rating: 4.6,
    reviewsCount: 1120,
    coordinates: { lat: 11.7880, lng: -86.5140 },
    shortDescription: 'Auténtico pueblo costero con muelle de pescadores tradicionales, mariscos recién sacados del mar y paseos a orilla de playa.',
    fullDescription: 'Masachapa es una de las playas con mayor tradición pesquera del Pacífico nicaragüense, ubicada en el municipio de San Rafael del Sur. Su pintoresco muelle es el epicentro donde decenas de pangas artesanales desembarcan a diario pargo rojo, camarones, langostas y corvina fresca. Es ideal para degustar un almuerzo marinero en los ranchos típicos y recorrer su amplia costa conectada directamente con Pochomil.',
    highlights: [
      'Visitar el muelle de pescadores y ver la llegada de lanchas con pesca fresca',
      'Almorzar pargo rojo a la tipitapa en ranchos sobre la arena',
      'Paseos a caballo a la orilla del mar al atardecer',
      'Comprar mariscos frescos a precios directos de pescadores'
    ],
    howToGetThere: {
      fromManagua: 'Buses interlocales (microbuses) y buses ordinarios salen cada 20 a 30 minutos desde la Terminal Mercado Israel Lewites hacia Masachapa y Pochomil por la Carretera Vieja a León.',
      terminal: 'Terminal Mercado Israel Lewites (Managua)',
      busType: 'Microbús Interlocal o Bus Ruterio',
      estimatedTime: '1 hora 15 minutos',
      estimatedFareNio: 45,
      tips: 'Los microbuses salen directamente hasta el parque central y malecón de Masachapa. Es un viaje directo y económico.'
    },
    bestSeason: 'Todo el año (Noviembre a Mayo para sol radiante)',
    recommendedDuration: '1 - 2 días',
    budgetLevel: '$',
    entranceFeeNio: 0,
    entranceFeeUsd: 0,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Muelle tradicional de pescadores y lanchas de colores en Masachapa',
      'Pargo rojo frito y mariscos frescos servidos en ranchos costeros',
      'Playa extensa con brisa marina del Pacífico',
      'Atardecer sobre el océano y paseos a caballo por la orilla'
    ],
    typicalFood: ['Pargo rojo frito a la tipitapa con salsa criolla y tostones', 'Ceviche de curvina y camarón', 'Sopa marinera con leche de coco'],
    difficulty: 'Fácil',
    tags: ['Playa', 'Pesca Tradicional', 'Mariscos', 'Pacífico', 'Paseos a Caballo'],
    climate: 'Cálido tropical con brisa marina (29°C - 34°C)',
    popularActivities: ['Degustación de mariscos', 'Paseos a caballo', 'Fotografía de barcos pesqueros', 'Caminatas playeras'],
    routeIds: ['ruta-playas-pacifico']
  },
  {
    id: 'playa-pochomil',
    name: 'Centro Turístico Playa Pochomil',
    department: 'Managua',
    region: 'Pacífico',
    category: 'Playas y Surf',
    rating: 4.7,
    reviewsCount: 1580,
    coordinates: { lat: 11.7833, lng: -86.5167 },
    shortDescription: 'El balneario costero más popular del Pacífico central, con extensas playas de arena gris, olas suaves, cuatrimotos y paseos a caballo.',
    fullDescription: 'Pochomil es el centro turístico de playa por excelencia para los managuas y visitantes de todo el país. Cuenta con un extenso malecón costero, decenas de restaurantes de mariscos frente al mar, renta de cuatrimotos (ATV) para recorrer las dunas y la orilla marina, paseos a caballo y cálidas aguas del océano Pacífico perfectas para bañistas de todas las edades.',
    highlights: [
      'Renta de cuatrimotos (ATV) para recorrer kilómetros de costa arenosa',
      'Paseos a caballo por la orilla del mar al atardecer',
      'Música en vivo y ambiente festivo en los ranchos costeros',
      'Visitar el mirador de Pochomil Viejo con pozas naturales entre rocas'
    ],
    howToGetThere: {
      fromManagua: 'Buses interlocales y expresos desde Terminal Mercado Israel Lewites directos a Pochomil (cada 20-30 min). En vehículo particular se toma la Carretera Sur y el desvío a San Rafael del Sur (Km 62).',
      terminal: 'Terminal Mercado Israel Lewites (Managua)',
      busType: 'Microbús Interlocal / Bus Expreso',
      estimatedTime: '1 hora 15 minutos',
      estimatedFareNio: 45,
      tips: 'Lleva protector solar y toalla; la zona de Pochomil Viejo es más tranquila y rocosa, ideal para escapar del bullicio en fines de semana.'
    },
    bestSeason: 'Noviembre a Mayo',
    recommendedDuration: '1 - 2 días',
    budgetLevel: '$',
    entranceFeeNio: 0,
    entranceFeeUsd: 0,
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Extensa playa de arena del balneario turístico de Pochomil',
      'Paseos en cuatrimotos (ATV) por la orilla del mar',
      'Paseos a caballo al atardecer frente a las olas del Pacífico',
      'Restaurantes y ranchos típicos de mariscos frente al mar'
    ],
    typicalFood: ['Pescado frito entero con arroz, frijoles y tajadas', 'Cóctel de conchas negras y camarones', 'Coco fresco'],
    difficulty: 'Fácil',
    tags: ['Balneario', 'ATV / Cuatrimotos', 'Caballos', 'Mariscos', 'Familiar'],
    climate: 'Cálido y soleado (29°C - 35°C)',
    popularActivities: ['Alquiler de ATV / Cuatrimoto', 'Paseos a caballo', 'Natación en el mar', 'Relax en hamacas'],
    routeIds: ['ruta-playas-pacifico']
  }
];
