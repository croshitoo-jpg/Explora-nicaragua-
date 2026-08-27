import React, { useState } from 'react';
import { TouristRoute, Place } from '../types';
import { NICARAGUA_ROUTES } from '../data/nicaraguaRoutes';
import { NICARAGUA_PLACES } from '../data/nicaraguaPlaces';
import { 
  Route as RouteIcon, MapPin, Clock, Navigation, 
  ChevronRight, Compass, Sparkles, CheckCircle2, DollarSign, Bus 
} from 'lucide-react';

interface RouteExplorerProps {
  onSelectRouteOnMap: (route: TouristRoute) => void;
  currency: 'NIO' | 'USD';
  onViewPlaceDetails: (place: Place) => void;
  onAskAIAboutRoute: (routeTitle: string) => void;
}

export const RouteExplorer: React.FC<RouteExplorerProps> = ({
  onSelectRouteOnMap,
  currency,
  onViewPlaceDetails,
  onAskAIAboutRoute,
}) => {
  const [selectedRouteId, setSelectedRouteId] = useState<string>(NICARAGUA_ROUTES[0].id);

  const currentRoute = NICARAGUA_ROUTES.find((r) => r.id === selectedRouteId) || NICARAGUA_ROUTES[0];

  const getPlaceById = (placeId: string): Place | undefined => {
    return NICARAGUA_PLACES.find((p) => p.id === placeId);
  };

  const formattedBudget = currency === 'NIO'
    ? `C$ ${currentRoute.estimatedBudgetNio.toLocaleString()} NIO`
    : `$ ${currentRoute.estimatedBudgetUsd} USD`;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#0c0c0e] via-[#09090b] to-[#0c0c0e] border border-zinc-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3">
            <RouteIcon className="w-4 h-4" />
            <span>Circuitos Turísticos Oficiales de Nicaragua</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-100">Rutas Temáticas y Aventuras Inolvidables</h2>
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed font-sans">
            Explora itinerarios completos diseñados paso a paso para recorrer volcanes, ciudades coloniales, playas de surf, plantaciones de café y el Caribe soñado.
          </p>
        </div>
      </div>

      {/* Route Selector Tabs / Cards Carousel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {NICARAGUA_ROUTES.map((route) => {
          const isSelected = route.id === selectedRouteId;
          return (
            <div
              key={route.id}
              id={`route-card-select-${route.id}`}
              onClick={() => setSelectedRouteId(route.id)}
              className={`cursor-pointer rounded-2xl border transition-all duration-300 p-4 relative flex flex-col justify-between overflow-hidden ${
                isSelected
                  ? 'bg-zinc-900/90 border-amber-400 shadow-xl shadow-amber-500/5 ring-1 ring-amber-400/30'
                  : 'bg-[#09090b] border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40'
              }`}
            >
              {/* Badge if available */}
              {route.badge && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-md bg-amber-400 text-black font-bold text-[10px] uppercase shadow">
                    {route.badge}
                  </span>
                </div>
              )}

              <div>
                <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                  {route.region} • {route.durationDays} Días • {route.distanceKm} km
                </span>
                <h3 className="font-serif text-base font-bold text-zinc-100 mt-1 group-hover:text-amber-400">
                  {route.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 mt-1.5 leading-relaxed font-sans">
                  {route.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-medium">{route.stops.length} Destinos</span>
                <span className="font-semibold text-amber-400 flex items-center gap-1">
                  Ver Itinerario <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Route Detailed Overview */}
      <div className="bg-[#09090b] border border-zinc-800/80 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-6">
        {/* Route Hero Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-xl bg-amber-400 text-black text-xs font-bold shadow-sm">
                {currentRoute.region}
              </span>
              <span className="px-3 py-1 rounded-xl bg-zinc-900 text-zinc-200 text-xs font-semibold border border-zinc-800">
                {currentRoute.category}
              </span>
              <span className="text-xs text-zinc-400">
                Dificultad: <strong className="text-zinc-200 font-semibold">{currentRoute.difficulty}</strong>
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-100">{currentRoute.title}</h2>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed max-w-3xl font-sans">{currentRoute.description}</p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <button
              id="btn-ask-ai-route"
              onClick={() => onAskAIAboutRoute(currentRoute.title)}
              className="px-4 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-amber-400/30 text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Personalizar con IA</span>
            </button>

            <button
              id="btn-view-route-on-map"
              onClick={() => onSelectRouteOnMap(currentRoute)}
              className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs shadow-lg shadow-amber-500/10 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Navigation className="w-4 h-4" />
              <span>Ver y Seguir Ruta en el Mapa</span>
            </button>
          </div>
        </div>

        {/* Route Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-zinc-950/70 p-4 rounded-2xl border border-zinc-800 text-xs">
          <div>
            <p className="text-zinc-500 text-[11px]">Duración sugerida</p>
            <p className="text-base font-bold text-zinc-100 flex items-center gap-1.5 mt-0.5">
              <Clock className="w-4 h-4 text-amber-400" />
              {currentRoute.durationDays} Días
            </p>
          </div>

          <div>
            <p className="text-zinc-500 text-[11px]">Distancia Total</p>
            <p className="text-base font-bold text-zinc-100 flex items-center gap-1.5 mt-0.5">
              <Navigation className="w-4 h-4 text-emerald-400" />
              ~{currentRoute.distanceKm} km
            </p>
          </div>

          <div>
            <p className="text-zinc-500 text-[11px]">Presupuesto Estimado</p>
            <p className="text-base font-bold text-amber-400 flex items-center gap-1.5 mt-0.5">
              <DollarSign className="w-4 h-4" />
              {formattedBudget}
            </p>
          </div>

          <div>
            <p className="text-zinc-500 text-[11px]">Paradas en la Ruta</p>
            <p className="text-base font-bold text-cyan-400 flex items-center gap-1.5 mt-0.5">
              <MapPin className="w-4 h-4" />
              {currentRoute.stops.length} Destinos
            </p>
          </div>
        </div>

        {/* Highlights Bar */}
        <div>
          <h4 className="font-serif text-sm font-bold text-zinc-100 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Puntos Clave de la Ruta</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentRoute.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800">
                <span className="text-amber-400 font-bold">✓</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transport Advice Alert */}
        <div className="p-4 rounded-2xl bg-amber-950/25 border border-amber-900/40 flex items-start gap-3 text-xs text-amber-200">
          <Bus className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-300">Consejo de transporte:</strong> {currentRoute.transportAdvice}
          </div>
        </div>

        {/* Day by Day Step Timeline */}
        <div className="pt-4">
          <h3 className="font-serif text-lg font-bold text-zinc-100 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-400" />
            <span>Itinerario Día a Día</span>
          </h3>

          <div className="space-y-4 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-zinc-800">
            {currentRoute.itinerary.map((step) => {
              const place = getPlaceById(step.placeId);
              return (
                <div 
                  key={step.day} 
                  className="relative flex items-start gap-4 bg-zinc-950/80 p-4 sm:p-5 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  {/* Day Badge */}
                  <div className="w-10 h-10 rounded-2xl bg-amber-400 text-black font-bold text-sm flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/10 z-10">
                    D{step.day}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-serif text-base font-bold text-zinc-100">{step.title}</h4>
                      {place && (
                        <button
                          id={`btn-open-place-from-route-${place.id}`}
                          onClick={() => onViewPlaceDetails(place)}
                          className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 hover:underline"
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Ver {place.name}</span>
                        </button>
                      )}
                    </div>

                    <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed font-sans">{step.description}</p>

                    {/* Step Activities */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {step.activities.map((act, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-zinc-900 text-[11px] text-zinc-300 border border-zinc-800 font-medium">
                          • {act}
                        </span>
                      ))}
                    </div>

                    {/* Stay & Transport note */}
                    <div className="mt-3 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
                      <div>
                        🏨 Alojamiento sugerido: <span className="text-zinc-200 font-medium">{step.recommendedStay}</span>
                      </div>
                      <div>
                        🚌 <span className="text-zinc-300">{step.transportLeg}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
