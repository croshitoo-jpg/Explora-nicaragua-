import { BusTerminalInfo } from '../types';

export const BUS_TERMINALS: BusTerminalInfo[] = [
  {
    name: 'Terminal UCA (Frente a Universidad Centroamericana)',
    location: 'Pista Juan Pablo II, Managua',
    city: 'Managua',
    destinations: ['León', 'Granada', 'Masaya', 'Jinotepe', 'Nandaime', 'Diriamba', 'Laguna de Apoyo', 'Catarina', 'San Marcos'],
    tips: 'Es la terminal más rápida y cómoda para viajes cortos de un día en microbuses interlocales ("Vans"). Salen cada vez que se llenan (cada 10-15 min). Paga en efectivo con cambio.',
    operatingHours: '5:00 AM - 8:30 PM todos los días'
  },
  {
    name: 'Terminal Mercado Roberto Huembes',
    location: 'Pista de la Resistencia / Mercado Huembes, Managua',
    city: 'Managua',
    destinations: ['Rivas', 'San Juan del Sur', 'Peñas Blancas (Frontera Costa Rica)', 'San Jorge (Ferry Ometepe)', 'Granada', 'Masaya', 'Popoyo / Tola'],
    tips: 'Punto de partida principal hacia todo el sur de Nicaragua y la frontera con Costa Rica. Hay buses ordinarios y expresos. Los expresos a San Juan del Sur y Rivas tienen aire acondicionado.',
    operatingHours: '4:30 AM - 6:30 PM'
  },
  {
    name: 'Terminal Mercado El Mayoreo',
    location: 'Sector Nororiente de Managua, frente a Mercado El Mayoreo',
    city: 'Managua',
    destinations: ['Matagalpa', 'Jinotega', 'Estelí', 'Somoto (Cañón)', 'Ocotal', 'San Carlos (Río San Juan)', 'Bluefields (Caribe Sur)', 'Juigalpa', 'El Rama', 'Boaco'],
    tips: 'La terminal de enlace hacia el Norte montañoso y el Caribe nicaragüense. Para rutas largas como San Carlos, Somoto o Bluefields, compra tu boleto al menos 40 minutos antes.',
    operatingHours: '3:30 AM - 7:00 PM'
  },
  {
    name: 'Terminal Mercado Israel Lewites',
    location: 'Carretera Sur, Managua',
    city: 'Managua',
    destinations: ['Pochomil', 'Masachapa', 'Chinandega', 'Corinto', 'El Tránsito', 'Las Peñitas', 'Poneloya', 'Guasaule (Frontera Honduras)', 'San Rafael del Sur'],
    tips: 'Ideal para playas cercanas de Managua (Pochomil/Masachapa) y hacia el occidente norte (Chinandega y paso fronterizo a Honduras). Microbuses continuos a Pochomil y Masachapa.',
    operatingHours: '5:00 AM - 7:00 PM'
  },
  {
    name: 'Terminal Intermunicipal de Rivas',
    location: 'Entrada a la ciudad de Rivas, sobre Carretera Panamericana',
    city: 'Rivas',
    destinations: ['San Jorge (Puerto del Ferry a Ometepe)', 'San Juan del Sur', 'Tola / Popoyo / Guasacate', 'Peñas Blancas (Frontera Costa Rica)', 'Managua'],
    tips: 'Epicentro del sur nicaragüense. Desde aquí salen los buses y taxis colectivos hacia el puerto de San Jorge (10 min) para tomar el ferry a Ometepe, y hacia San Juan del Sur (35 min).',
    operatingHours: '5:00 AM - 6:00 PM'
  },
  {
    name: 'Terminal COTRAN Estelí (Norte y Sur)',
    location: 'Salida Sur y Salida Norte sobre Carretera Panamericana, Estelí',
    city: 'Estelí',
    destinations: ['Somoto (Cañón)', 'Ocotal', 'Matagalpa', 'Managua', 'Miraflor', 'Reserva Tisey / La Estanzuela'],
    tips: 'Conexión clave entre el norte y la capital. Para ir al Cañón de Somoto salen buses cada 30 minutos (1h 15m de viaje).',
    operatingHours: '4:00 AM - 6:30 PM'
  },
  {
    name: 'Terminal COTRAN Matagalpa (Guanuca y Sur)',
    location: 'Mercado Guanuca / Salida a Managua, Matagalpa',
    city: 'Matagalpa',
    destinations: ['Jinotega', 'San Ramón', 'Finca Selva Negra', 'Estelí', 'Managua', 'El Tuma-La Dalia', 'Waslala'],
    tips: 'Desde la Terminal Guanuca salen los buses hacia las fincas de café de las montañas y hacia Jinotega.',
    operatingHours: '4:30 AM - 6:30 PM'
  }
];

export const getTerminalsForPlace = (placeName: string, department: string): BusTerminalInfo[] => {
  const normPlace = placeName.toLowerCase();
  const normDept = department.toLowerCase();

  return BUS_TERMINALS.filter((t) => {
    return t.destinations.some((d) => {
      const normD = d.toLowerCase();
      return normPlace.includes(normD) || normD.includes(normPlace) || normDept.includes(normD) || normD.includes(normDept);
    });
  });
};

export const FERRY_SCHEDULES = [
  {
    route: 'Puerto San Jorge (Rivas) ↔ Isla de Ometepe (Moyogalpa / San José del Sur)',
    duration: '60 - 75 minutos',
    cost: 'C$ 50 - 70 NIO (~$1.5 - $2 USD) por persona | Vehículo liviano: C$ 450 - 650 NIO',
    frequency: 'Ferrys y lanchas casi cada hora desde las 7:00 AM hasta las 5:45 PM.',
    tips: 'Si viajas con auto rentado a Ometepe, debes reservar espacio en el ferry con al menos 24 horas de antelación llamando a las navieras (Ferry Rey del Cocibolca o Che Guevara).'
  },
  {
    route: 'Big Corn Island ↔ Little Corn Island (Panga pública)',
    duration: '30 minutos',
    cost: 'C$ 300 - 350 NIO (~$8 - $10 USD) por vía',
    frequency: 'Salidas diarias en la mañana (~10:00 AM) y tarde (~4:30 PM) según la llegada de los vuelos.',
    tips: 'El oleaje puede salpicar bastante; el equipaje se guarda en bolsas impermeables. Lleva tu impermeable personal a mano.'
  },
  {
    route: 'San Carlos ↔ El Castillo (Río San Juan)',
    duration: '2 horas (Panga rápida) / 3.5 horas (Bote ordinario)',
    cost: 'C$ 150 - 220 NIO (~$4 - $6 USD)',
    frequency: 'Salidas regulares por la mañana (7:00 AM, 11:00 AM, 2:30 PM).',
    tips: 'Llega temprano al muelle de San Carlos para comprar boleto en ventanilla oficial.'
  }
];

export const PRACTICAL_TIPS = [
  {
    icon: 'Banknote',
    title: 'Moneda y Pagos',
    content: 'La moneda oficial es el Córdoba (NIO, símbolo C$). El dólar estadounidense ($ USD) es ampliamente aceptado. Los cajeros automáticos dispensan tanto córdobas como dólares. En islas y pueblos pequeños (Little Corn, Solentiname) lleva efectivo.'
  },
  {
    icon: 'Sun',
    title: 'Clima y Qué Llevar',
    content: 'Nicaragua tiene clima tropical todo el año. La época seca ("verano") va de Noviembre a Abril. Para el Pacífico y playas lleva ropa fresca de algodón, protector solar y lentes de sol; para el Norte montañoso (Matagalpa, Estelí) empaca un suéter ligero.'
  },
  {
    icon: 'Bus',
    title: 'Transporte Nica',
    content: 'Los buses amarillos tradicionales ("Chicken buses") son muy económicos e interactivos. Los microbuses interlocales son rápidos y directos. En Managua los taxis cobran por carrera negociada antes de abordar; en ciudades coloniales todo se camina fácilmente.'
  },
  {
    icon: 'Wifi',
    title: 'Conectividad y SIMs',
    content: 'Puedes adquirir una tarjeta SIM prepagada de Claro o Tigo en el aeropuerto o en cualquier pulpería/kiosco por $3-$5 USD con paquetes de datos LTE rápidos.'
  }
];
