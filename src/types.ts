export type Region = 'Pacífico' | 'Centro-Norte' | 'Caribe';

export type Category = 
  | 'Volcanes y Aventura'
  | 'Playas y Surf'
  | 'Ciudades Coloniales'
  | 'Naturaleza y Cascadas'
  | 'Islas y Lagos'
  | 'Cultura y Gastronomía';

export type Difficulty = 'Fácil' | 'Moderado' | 'Desafiante';

export type BudgetLevel = '$' | '$$' | '$$$';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Place {
  id: string;
  name: string;
  department: string;
  region: Region;
  category: Category;
  rating: number;
  reviewsCount: number;
  coordinates: Coordinates;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  howToGetThere: {
    fromManagua: string;
    terminal?: string;
    busType?: string;
    estimatedTime: string;
    estimatedFareNio: number;
    tips: string;
  };
  bestSeason: string;
  recommendedDuration: string;
  budgetLevel: BudgetLevel;
  entranceFeeNio?: number;
  entranceFeeUsd?: number;
  image: string;
  gallery: string[];
  photoCaptions?: string[];
  typicalFood: string[];
  difficulty: Difficulty;
  tags: string[];
  climate: string;
  popularActivities: string[];
  routeIds: string[];
}

export interface RouteStop {
  day: number;
  placeId: string;
  title: string;
  description: string;
  activities: string[];
  recommendedStay: string;
  transportLeg: string;
}

export interface TouristRoute {
  id: string;
  title: string;
  subtitle: string;
  region: Region | 'Nacional';
  durationDays: number;
  distanceKm: number;
  difficulty: Difficulty;
  category: Category;
  coverImage: string;
  description: string;
  stops: string[]; // Place IDs
  pathCoordinates: [number, number][]; // Lat, Lng for Leaflet Polyline
  itinerary: RouteStop[];
  highlights: string[];
  estimatedBudgetUsd: number;
  estimatedBudgetNio: number;
  transportAdvice: string;
  badge?: string;
}

export interface BusTerminalInfo {
  name: string;
  location: string;
  city: string;
  destinations: string[];
  tips: string;
  operatingHours: string;
}

export interface CustomRouteItem {
  place: Place;
  order: number;
  customNotes?: string;
}

export interface CustomRoute {
  id: string;
  title: string;
  createdAt: string;
  items: CustomRouteItem[];
  totalDistanceKm: number;
  estimatedDriveTimeHours: number;
  estimatedBusTimeHours: number;
  estimatedBudgetNio: number;
  estimatedBudgetUsd: number;
}

export interface FilterState {
  searchQuery: string;
  selectedRegion: Region | 'Todos';
  selectedCategory: Category | 'Todos';
  selectedDifficulty: Difficulty | 'Todos';
  selectedDepartment: string | 'Todos';
  selectedBudget: BudgetLevel | 'Todos';
}
