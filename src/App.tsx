import React, { useState, useEffect, useMemo } from 'react';
import { Place, TouristRoute, Region, Category, Difficulty } from './types';
import { NICARAGUA_PLACES } from './data/nicaraguaPlaces';
import { NICARAGUA_ROUTES } from './data/nicaraguaRoutes';
import { Navbar, ActiveTab } from './components/Navbar';
import { InteractiveMap } from './components/InteractiveMap';
import { PlaceCard } from './components/PlaceCard';
import { PlaceDetailModal } from './components/PlaceDetailModal';
import { RouteExplorer } from './components/RouteExplorer';
import { CustomRouteBuilder } from './components/CustomRouteBuilder';
import { GuiaNicaAI } from './components/GuiaNicaAI';
import { TransportGuide } from './components/TransportGuide';
import { 
  Search, Filter, MapPin, Sparkles, Heart, Compass, 
  RotateCcw, SlidersHorizontal, Layers, ChevronDown 
} from 'lucide-react';

const CATEGORIES: Category[] = [
  'Volcanes y Aventura',
  'Playas y Surf',
  'Ciudades Coloniales',
  'Naturaleza y Cascadas',
  'Islas y Lagos',
  'Cultura y Gastronomía',
];

const REGIONS: Region[] = ['Pacífico', 'Centro-Norte', 'Caribe'];

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('map');
  const [currency, setCurrency] = useState<'NIO' | 'USD'>('NIO');

  // Search and Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<Region | 'Todos'>('Todos');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>('Todos');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'Todos'>('Todos');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('Todos');

  // Selections
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [activeModalPlace, setActiveModalPlace] = useState<Place | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<TouristRoute | null>(null);

  // Favorites (Persistent)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('explora_nica_favorites');
      return saved ? JSON.parse(saved) : ['granada-colonial', 'isla-ometepe', 'volcan-masaya'];
    } catch {
      return ['granada-colonial', 'isla-ometepe', 'volcan-masaya'];
    }
  });

  // Custom Route Planner (Persistent)
  const [customRoutePlaces, setCustomRoutePlaces] = useState<Place[]>(() => {
    try {
      const saved = localStorage.getItem('explora_nica_custom_route');
      if (saved) {
        const ids: string[] = JSON.parse(saved);
        return ids
          .map((id) => NICARAGUA_PLACES.find((p) => p.id === id))
          .filter(Boolean) as Place[];
      }
      return [NICARAGUA_PLACES[0], NICARAGUA_PLACES[1], NICARAGUA_PLACES[2]];
    } catch {
      return [NICARAGUA_PLACES[0], NICARAGUA_PLACES[1]];
    }
  });

  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Search auto-suggest matches
  const searchSuggestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return { places: [], routes: [] };

    const matchedPlaces = NICARAGUA_PLACES.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.department.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.highlights.some((h) => h.toLowerCase().includes(query)) ||
        p.shortDescription.toLowerCase().includes(query)
    ).slice(0, 5);

    const matchedRoutes = NICARAGUA_ROUTES.filter(
      (r) =>
        r.title.toLowerCase().includes(query) ||
        r.subtitle.toLowerCase().includes(query) ||
        r.region.toLowerCase().includes(query)
    ).slice(0, 3);

    return { places: matchedPlaces, routes: matchedRoutes };
  }, [searchQuery]);

  // AI Prompt transfer
  const [aiInitialPrompt, setAiInitialPrompt] = useState<string>('');

  // Geolocation
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('explora_nica_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  // Save custom route to localStorage
  useEffect(() => {
    try {
      const ids = customRoutePlaces.map((p) => p.id);
      localStorage.setItem('explora_nica_custom_route', JSON.stringify(ids));
    } catch (e) {
      console.error(e);
    }
  }, [customRoutePlaces]);

  // Toggle favorite
  const handleToggleFavorite = (placeId: string) => {
    setFavorites((prev) =>
      prev.includes(placeId) ? prev.filter((id) => id !== placeId) : [...prev, placeId]
    );
  };

  // Add to custom route
  const handleAddToCustomRoute = (place: Place) => {
    if (!customRoutePlaces.some((p) => p.id === place.id)) {
      setCustomRoutePlaces((prev) => [...prev, place]);
    }
  };

  const handleRemoveFromCustomRoute = (placeId: string) => {
    setCustomRoutePlaces((prev) => prev.filter((p) => p.id !== placeId));
  };

  const handleMovePlaceInCustomRoute = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= customRoutePlaces.length) return;
    const updated = [...customRoutePlaces];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setCustomRoutePlaces(updated);
  };

  // Request User Location
  const handleRequestUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => {
          console.warn('Geolocation denied or unavailable:', err.message);
        }
      );
    }
  };

  // Unique departments for filter dropdown
  const departments = useMemo(() => {
    const set = new Set<string>();
    NICARAGUA_PLACES.forEach((p) => set.add(p.department));
    return Array.from(set).sort();
  }, []);

  // Filtered Places
  const filteredPlaces = useMemo(() => {
    return NICARAGUA_PLACES.filter((place) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = place.name.toLowerCase().includes(q);
        const matchesDept = place.department.toLowerCase().includes(q);
        const matchesDesc = place.shortDescription.toLowerCase().includes(q);
        const matchesTags = place.tags.some((t) => t.toLowerCase().includes(q));
        const matchesHighlights = place.highlights.some((h) => h.toLowerCase().includes(q));
        if (!matchesName && !matchesDept && !matchesDesc && !matchesTags && !matchesHighlights) {
          return false;
        }
      }

      // Region Filter
      if (selectedRegion !== 'Todos' && place.region !== selectedRegion) {
        return false;
      }

      // Category Filter
      if (selectedCategory !== 'Todos' && place.category !== selectedCategory) {
        return false;
      }

      // Difficulty Filter
      if (selectedDifficulty !== 'Todos' && place.difficulty !== selectedDifficulty) {
        return false;
      }

      // Department Filter
      if (selectedDepartment !== 'Todos' && place.department !== selectedDepartment) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedRegion, selectedCategory, selectedDifficulty, selectedDepartment]);

  // Favorites List
  const favoritePlaces = useMemo(() => {
    return NICARAGUA_PLACES.filter((p) => favorites.includes(p.id));
  }, [favorites]);

  // Reset Filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('Todos');
    setSelectedCategory('Todos');
    setSelectedDifficulty('Todos');
    setSelectedDepartment('Todos');
  };

  // Handler to switch to map and highlight a route
  const handleSelectRouteOnMap = (route: TouristRoute) => {
    setSelectedRoute(route);
    setActiveTab('map');
    // Select the first stop of the route
    const firstPlace = NICARAGUA_PLACES.find((p) => p.id === route.stops[0]);
    if (firstPlace) {
      setSelectedPlace(firstPlace);
    }
  };

  // Handler to ask AI about place
  const handleAskAIAboutPlace = (placeName: string) => {
    setAiInitialPrompt(`Quiero saber los mejores consejos, cómo llegar en bus y qué hacer en ${placeName}, Nicaragua.`);
    setActiveTab('ai');
  };

  // Handler to ask AI about route
  const handleAskAIAboutRoute = (routeTitle: string) => {
    setAiInitialPrompt(`Quiero personalizar el itinerario de "${routeTitle}" en Nicaragua.`);
    setActiveTab('ai');
  };

  const handleAskAIPlanCustom = (summary: string) => {
    setAiInitialPrompt(`Por favor optimiza este itinerario de viaje por Nicaragua con paradas, tiempos de viaje y recomendaciones gastronómicas:\n${summary}`);
    setActiveTab('ai');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currency={currency}
        setCurrency={setCurrency}
        favoritesCount={favorites.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* VIEW 1: MAP AND DESTINATIONS */}
        {activeTab === 'map' && (
          <div className="space-y-6">
            {/* Search & Filter Bar */}
            <div className="bg-[#09090b]/90 border border-zinc-800/80 rounded-3xl p-4 sm:p-5 shadow-2xl space-y-4">
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
                {/* Search Input with Auto-Suggest Dropdown */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 z-10" />
                  <input
                    id="search-destinations-input"
                    type="text"
                    value={searchQuery}
                    onFocus={() => setIsSearchFocused(true)}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setIsSearchFocused(true);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setIsSearchFocused(false);
                        if (searchSuggestions.places.length > 0) {
                          setSelectedPlace(searchSuggestions.places[0]);
                        } else if (searchSuggestions.routes.length > 0) {
                          handleSelectRouteOnMap(searchSuggestions.routes[0]);
                        }
                      }
                    }}
                    placeholder="Buscar por volcán, playa, ciudad colonial, departamento (ej: Ometepe, Granada, Somoto, Surf)..."
                    className="w-full bg-[#050505] border border-zinc-800 text-zinc-100 rounded-2xl pl-10 pr-9 py-2.5 text-xs focus:outline-none focus:border-amber-400 placeholder:text-zinc-500 font-medium transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setIsSearchFocused(false);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white z-10 p-1"
                    >
                      ✕
                    </button>
                  )}

                  {/* Auto-suggest Search Popup */}
                  {isSearchFocused && searchQuery.trim().length > 0 && (
                    <div 
                      className="absolute left-0 right-0 top-full mt-2 z-30 bg-[#09090b] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden divide-y divide-zinc-800/80 animate-fade-in"
                      onMouseDown={(e) => e.preventDefault()} // Prevent blur before click
                    >
                      {/* Places Results */}
                      {searchSuggestions.places.length > 0 && (
                        <div className="p-2 space-y-1">
                          <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                            Destinos ({searchSuggestions.places.length})
                          </div>
                          {searchSuggestions.places.map((place) => (
                            <button
                              key={place.id}
                              id={`search-suggest-place-${place.id}`}
                              onClick={() => {
                                setSelectedPlace(place);
                                setSelectedRegion('Todos');
                                setSelectedCategory('Todos');
                                setIsSearchFocused(false);
                              }}
                              className="w-full flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-zinc-900 text-left transition-colors group"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <img
                                  src={place.image}
                                  alt={place.name}
                                  className="w-8 h-8 rounded-lg object-cover border border-zinc-800 shrink-0"
                                />
                                <div className="min-w-0">
                                  <p className="text-xs font-semibold text-zinc-100 group-hover:text-amber-300 truncate">
                                    {place.name}
                                  </p>
                                  <p className="text-[11px] text-zinc-500 truncate">
                                    📍 {place.department} • 🚌 {place.howToGetThere.estimatedTime}
                                  </p>
                                </div>
                              </div>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-950 text-amber-400 border border-zinc-800 font-semibold shrink-0">
                                {place.category}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Routes Results */}
                      {searchSuggestions.routes.length > 0 && (
                        <div className="p-2 space-y-1 bg-zinc-950/60">
                          <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                            Rutas Sugeridas ({searchSuggestions.routes.length})
                          </div>
                          {searchSuggestions.routes.map((route) => (
                            <button
                              key={route.id}
                              id={`search-suggest-route-${route.id}`}
                              onClick={() => {
                                handleSelectRouteOnMap(route);
                                setIsSearchFocused(false);
                              }}
                              className="w-full flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-zinc-900 text-left transition-colors group"
                            >
                              <div className="min-w-0">
                                <p className="text-xs font-semibold text-amber-300 group-hover:text-amber-200 truncate">
                                  🗺️ {route.title}
                                </p>
                                <p className="text-[11px] text-zinc-400 truncate">
                                  {route.region} • {route.stops.length} paradas • {route.durationDays} días
                                </p>
                              </div>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400 text-black font-bold shrink-0">
                                Ver ruta
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {searchSuggestions.places.length === 0 && searchSuggestions.routes.length === 0 && (
                        <div className="p-4 text-center text-xs text-zinc-400">
                          No se encontraron destinos o rutas para "{searchQuery}"
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Region Filter Buttons */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                  {(['Todos', 'Pacífico', 'Centro-Norte', 'Caribe'] as const).map((reg) => (
                    <button
                      key={reg}
                      id={`filter-reg-${reg}`}
                      onClick={() => setSelectedRegion(reg)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                        selectedRegion === reg
                          ? 'bg-amber-400 text-black shadow-md font-bold'
                          : 'bg-[#050505] text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-zinc-800/90'
                      }`}
                    >
                      {reg === 'Todos' ? 'Toda Nicaragua' : reg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Secondary Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                <button
                  id="filter-cat-todos"
                  onClick={() => setSelectedCategory('Todos')}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === 'Todos'
                      ? 'bg-zinc-800 text-zinc-100 font-bold border border-zinc-700'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                  }`}
                >
                  Todas las categorías
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    id={`filter-cat-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? 'bg-amber-400/15 text-amber-300 border border-amber-400/40 font-bold'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Active Filters Summary & Reset */}
              {(selectedRegion !== 'Todos' ||
                selectedCategory !== 'Todos' ||
                searchQuery ||
                selectedDepartment !== 'Todos' ||
                selectedRoute) && (
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-zinc-800/80 text-xs">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <span>Filtros activos:</span>
                    {selectedRegion !== 'Todos' && (
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-amber-300 font-semibold">
                        Región: {selectedRegion}
                      </span>
                    )}
                    {selectedCategory !== 'Todos' && (
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-amber-300 font-semibold">
                        Categoría: {selectedCategory}
                      </span>
                    )}
                    {selectedRoute && (
                      <span className="px-2 py-0.5 rounded bg-amber-400 text-black font-bold">
                        Ruta: {selectedRoute.title}
                      </span>
                    )}
                  </div>

                  <button
                    id="btn-reset-filters"
                    onClick={() => {
                      handleResetFilters();
                      setSelectedRoute(null);
                    }}
                    className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Limpiar Filtros y Ruta</span>
                  </button>
                </div>
              )}
            </div>

            {/* Split Layout: Interactive Map + Places Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Interactive Map (Sticky / Featured on desktop) */}
              <div className="lg:col-span-6 h-[460px] lg:h-[680px] sticky top-20">
                <InteractiveMap
                  places={filteredPlaces}
                  selectedPlace={selectedPlace}
                  selectedRoute={selectedRoute}
                  onSelectPlace={(p) => setSelectedPlace(p)}
                  onViewPlaceDetails={(p) => setActiveModalPlace(p)}
                  onSelectRoute={handleSelectRouteOnMap}
                  currency={currency}
                  userLocation={userLocation}
                  onRequestUserLocation={handleRequestUserLocation}
                />
              </div>

              {/* Destination Cards List */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between px-1">
                  <h3 className="font-serif text-base font-bold text-zinc-100 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Destinos Encontrados ({filteredPlaces.length})</span>
                  </h3>
                  <span className="text-xs text-zinc-500">
                    Haz clic para centrar en el mapa
                  </span>
                </div>

                {filteredPlaces.length === 0 ? (
                  <div className="bg-[#09090b]/80 border border-zinc-800/80 rounded-3xl p-10 text-center space-y-3">
                    <p className="text-sm text-zinc-300 font-semibold">No se encontraron destinos con esos filtros.</p>
                    <button
                      onClick={handleResetFilters}
                      className="px-4 py-2 bg-amber-400 text-black font-semibold text-xs rounded-xl shadow transition-colors hover:bg-amber-300"
                    >
                      Mostrar todos los destinos
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredPlaces.map((place) => (
                      <PlaceCard
                        key={place.id}
                        place={place}
                        isSelected={selectedPlace?.id === place.id}
                        isFavorite={favorites.includes(place.id)}
                        currency={currency}
                        onSelect={(p) => setSelectedPlace(p)}
                        onViewDetails={(p) => setActiveModalPlace(p)}
                        onToggleFavorite={handleToggleFavorite}
                        onAddToCustomRoute={handleAddToCustomRoute}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: THEMATIC CURATED ROUTES */}
        {activeTab === 'routes' && (
          <RouteExplorer
            onSelectRouteOnMap={handleSelectRouteOnMap}
            currency={currency}
            onViewPlaceDetails={(p) => setActiveModalPlace(p)}
            onAskAIAboutRoute={handleAskAIAboutRoute}
          />
        )}

        {/* VIEW 3: CUSTOM ROUTE BUILDER */}
        {activeTab === 'planner' && (
          <CustomRouteBuilder
            customRouteItems={customRoutePlaces}
            onRemovePlace={handleRemoveFromCustomRoute}
            onAddPlace={handleAddToCustomRoute}
            onClearRoute={() => setCustomRoutePlaces([])}
            onMovePlace={handleMovePlaceInCustomRoute}
            currency={currency}
            onAskAIPlanCustom={handleAskAIPlanCustom}
          />
        )}

        {/* VIEW 4: GUIA NICA AI ASSISTANT */}
        {activeTab === 'ai' && (
          <GuiaNicaAI initialPrompt={aiInitialPrompt} />
        )}

        {/* VIEW 5: TRANSPORT & TERMINALS GUIDE */}
        {activeTab === 'transport' && (
          <TransportGuide />
        )}

        {/* VIEW 6: FAVORITES */}
        {activeTab === 'favorites' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0c0c0e] via-[#09090b] to-[#0c0c0e] border border-zinc-800/80 rounded-3xl p-6 shadow-2xl flex items-center justify-between">
              <div>
                <span className="px-3 py-1 rounded-xl bg-rose-500/15 text-rose-400 text-xs font-semibold border border-rose-500/30">
                  Tus Favoritos Guardados
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-100 mt-2">Lugares que Deseas Visitar ({favoritePlaces.length})</h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Guarda tus destinos favoritos para encontrarlos rápido o agregarlos a tu ruta personalizada.
                </p>
              </div>
            </div>

            {favoritePlaces.length === 0 ? (
              <div className="bg-[#09090b]/80 border border-zinc-800/80 rounded-3xl p-12 text-center space-y-3">
                <Heart className="w-12 h-12 text-zinc-700 mx-auto" />
                <h3 className="font-serif text-base font-bold text-zinc-200">No tienes destinos en favoritos</h3>
                <p className="text-xs text-zinc-500">
                  Explora el mapa y haz clic en el corazón de cualquier lugar para guardarlo aquí.
                </p>
                <button
                  onClick={() => setActiveTab('map')}
                  className="px-4 py-2.5 bg-amber-400 text-black font-semibold text-xs rounded-xl shadow hover:bg-amber-300 transition-colors"
                >
                  Explorar Destinos
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {favoritePlaces.map((place) => (
                  <PlaceCard
                    key={place.id}
                    place={place}
                    isSelected={selectedPlace?.id === place.id}
                    isFavorite={true}
                    currency={currency}
                    onSelect={(p) => {
                      setSelectedPlace(p);
                      setActiveTab('map');
                    }}
                    onViewDetails={(p) => setActiveModalPlace(p)}
                    onToggleFavorite={handleToggleFavorite}
                    onAddToCustomRoute={handleAddToCustomRoute}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Place Detail Modal */}
      <PlaceDetailModal
        place={activeModalPlace}
        isOpen={Boolean(activeModalPlace)}
        onClose={() => setActiveModalPlace(null)}
        currency={currency}
        isFavorite={activeModalPlace ? favorites.includes(activeModalPlace.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onAddToCustomRoute={handleAddToCustomRoute}
        onAskAIAboutPlace={handleAskAIAboutPlace}
        onSelectRouteOnMap={handleSelectRouteOnMap}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-800/80 bg-[#050505] py-6 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 Explora Nicaragua • Tierra de Lagos y Volcanes 🇳🇮</p>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Pacífico</span> • <span>Centro-Norte</span> • <span>Caribe</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
