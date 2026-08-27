import React, { useState } from 'react';
import { Place, TouristRoute } from '../types';
import { NICARAGUA_ROUTES } from '../data/nicaraguaRoutes';
import { getTerminalsForPlace } from '../data/transportData';
import { 
  X, MapPin, Star, Bus, Compass, Utensils, Calendar, 
  Sparkles, CheckCircle2, Clock, DollarSign, Plus, Heart, ShieldAlert,
  Route as RouteIcon, ChevronRight, Navigation, Camera
} from 'lucide-react';

interface PlaceDetailModalProps {
  place: Place | null;
  isOpen: boolean;
  onClose: () => void;
  currency: 'NIO' | 'USD';
  isFavorite: boolean;
  onToggleFavorite: (placeId: string) => void;
  onAddToCustomRoute: (place: Place) => void;
  onAskAIAboutPlace: (placeName: string) => void;
  onSelectRouteOnMap?: (route: TouristRoute) => void;
}

export const PlaceDetailModal: React.FC<PlaceDetailModalProps> = ({
  place,
  isOpen,
  onClose,
  currency,
  isFavorite,
  onToggleFavorite,
  onAddToCustomRoute,
  onAskAIAboutPlace,
  onSelectRouteOnMap,
}) => {
  if (!isOpen || !place) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [place.image, ...place.gallery];

  const priceEntrance = currency === 'NIO'
    ? place.entranceFeeNio ? `C$ ${place.entranceFeeNio} NIO` : 'Entrada Libre / Gratuita'
    : place.entranceFeeUsd ? `$ ${place.entranceFeeUsd} USD` : 'Entrada Libre / Gratuita';

  const busFare = currency === 'NIO'
    ? `C$ ${place.howToGetThere.estimatedFareNio} NIO`
    : `$ ${(place.howToGetThere.estimatedFareNio / 36.6).toFixed(1)} USD`;

  // Find routes that contain this place
  const relatedRoutes = NICARAGUA_ROUTES.filter(
    (r) => r.stops.includes(place.id) || place.routeIds?.includes(r.id)
  );

  // Find relevant bus terminals
  const matchingTerminals = getTerminalsForPlace(place.name, place.department);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        id="place-detail-modal-container"
        className="relative bg-[#09090b] border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl text-zinc-100 flex flex-col"
      >
        {/* Modal Close Button */}
        <button
          id="btn-close-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-zinc-950/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700 shadow-xl transition-all active:scale-95"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Section */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0 bg-black">
          <img
            src={images[activeImageIndex] || place.image}
            alt={place.name}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />

          {/* Top floating badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-xl bg-amber-400 text-black font-bold text-xs shadow-lg">
              {place.category}
            </span>
            <span className="px-3 py-1 rounded-xl bg-zinc-950/90 text-zinc-200 font-semibold text-xs border border-zinc-800 backdrop-blur-md">
              Dificultad: {place.difficulty}
            </span>
          </div>

          {/* Bottom Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4" />
                <span>{place.department}, Nicaragua ({place.region})</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">{place.name}</h2>
            </div>

            {/* Favorite toggle */}
            <button
              id={`modal-fav-btn-${place.id}`}
              onClick={() => onToggleFavorite(place.id)}
              className={`p-3 rounded-2xl border backdrop-blur-md shadow-xl transition-all ${
                isFavorite
                  ? 'bg-rose-500 text-white border-rose-400'
                  : 'bg-zinc-950/80 text-zinc-300 border-zinc-700 hover:text-rose-400'
              }`}
              title={isFavorite ? 'En favoritos' : 'Agregar a favoritos'}
            >
              <Heart className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>

        {/* Gallery Thumbnails and Caption if multiple images */}
        {images.length > 1 && (
          <div className="bg-zinc-950/80 px-6 py-2.5 border-b border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex gap-2 overflow-x-auto py-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  id={`gallery-thumb-${place.id}-${idx}`}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    activeImageIndex === idx ? 'border-amber-400 scale-105 shadow-md shadow-amber-400/20' : 'border-zinc-700 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${place.name} foto ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {place.photoCaptions && place.photoCaptions[activeImageIndex] && (
              <div className="flex items-center gap-1.5 text-xs text-zinc-300 italic bg-zinc-900/90 px-3 py-1.5 rounded-xl border border-zinc-800 self-start sm:self-auto max-w-md">
                <Camera className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">{place.photoCaptions[activeImageIndex]}</span>
              </div>
            )}
          </div>
        )}

        {/* Modal Main Content */}
        <div className="p-6 space-y-6">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-zinc-950/70 p-3.5 rounded-2xl border border-zinc-800 text-xs">
            <div className="flex items-center gap-2.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
              <div>
                <p className="text-zinc-500 text-[11px]">Calificación</p>
                <p className="font-semibold text-zinc-100">{place.rating} / 5.0 ({place.reviewsCount})</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <p className="text-zinc-500 text-[11px]">Mejor Época</p>
                <p className="font-semibold text-zinc-100 truncate">{place.bestSeason.split('(')[0]}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <p className="text-zinc-500 text-[11px]">Estadía Recomendada</p>
                <p className="font-semibold text-zinc-100">{place.recommendedDuration}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <DollarSign className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <p className="text-zinc-500 text-[11px]">Costo de Entrada</p>
                <p className="font-semibold text-zinc-100">{priceEntrance}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-serif text-base font-bold text-zinc-100 mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Sobre este destino</span>
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed font-sans">{place.fullDescription}</p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="font-serif text-base font-bold text-zinc-100 mb-2.5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Lo más destacado e imperdible</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {place.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800 text-xs text-zinc-200">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Transport Guide: Cómo Llegar y Terminales */}
          <div className="bg-zinc-950/90 rounded-2xl border border-amber-400/30 p-5 space-y-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-3">
              <h3 className="font-serif text-base font-bold text-amber-300 flex items-center gap-2">
                <Bus className="w-5 h-5 text-amber-400" />
                <span>¿Cómo llegar por ruta y terminales de buses?</span>
              </h3>
              <span className="text-xs bg-amber-400/15 text-amber-300 px-3 py-1 rounded-lg border border-amber-400/30 font-semibold">
                Tarifa estimada: {busFare}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <span className="text-zinc-500 font-medium block text-[11px]">Ruta de Transporte</span>
                <p className="text-zinc-200 mt-0.5 font-medium">{place.howToGetThere.fromManagua}</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <span className="text-zinc-500 font-medium block text-[11px]">Terminal de Salida Principal</span>
                <p className="text-amber-300 mt-0.5 font-semibold">{place.howToGetThere.terminal || 'Terminales de Managua'}</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <span className="text-zinc-500 font-medium block text-[11px]">Tipo de Transporte & Frecuencia</span>
                <p className="text-zinc-200 mt-0.5 font-medium">{place.howToGetThere.busType || 'Buses Expresos / Interlocales'}</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <span className="text-zinc-500 font-medium block text-[11px]">Tiempo de Viaje Estimado</span>
                <p className="text-emerald-400 mt-0.5 font-bold">{place.howToGetThere.estimatedTime}</p>
              </div>
            </div>

            {/* Matching Terminals Details if found */}
            {matchingTerminals.length > 0 && (
              <div className="pt-2">
                <span className="text-xs font-bold text-zinc-200 flex items-center gap-1.5 mb-2">
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Terminales de Buses recomendadas:</span>
                </span>
                <div className="space-y-2">
                  {matchingTerminals.map((terminal, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-1 text-zinc-100 font-semibold">
                        <span>🏢 {terminal.name}</span>
                        <span className="text-zinc-400 text-[11px]">⏰ {terminal.operatingHours}</span>
                      </div>
                      <p className="text-zinc-400 text-[11px] mt-1">📍 {terminal.location}</p>
                      <p className="text-amber-200/90 text-[11px] mt-1 italic">💡 {terminal.tips}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-900/40 text-amber-200 text-xs flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong className="text-amber-300">Consejo local de ruta:</strong> {place.howToGetThere.tips}</span>
            </div>
          </div>

          {/* Suggested Routes including this place */}
          {relatedRoutes.length > 0 && (
            <div>
              <h3 className="font-serif text-base font-bold text-zinc-100 mb-3 flex items-center gap-2">
                <RouteIcon className="w-4 h-4 text-amber-400" />
                <span>Rutas sugeridas que incluyen este destino ({relatedRoutes.length})</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedRoutes.map((route) => (
                  <div
                    key={route.id}
                    className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-400/50 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-amber-400 font-semibold mb-1">
                        <span>{route.region} • {route.durationDays} Días</span>
                        {route.badge && (
                          <span className="px-2 py-0.5 bg-amber-400 text-black rounded text-[9px] font-bold">
                            {route.badge}
                          </span>
                        )}
                      </div>
                      <h4 className="font-serif text-sm font-bold text-zinc-100">{route.title}</h4>
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-2">{route.subtitle}</p>
                    </div>
                    {onSelectRouteOnMap && (
                      <button
                        onClick={() => {
                          onClose();
                          onSelectRouteOnMap(route);
                        }}
                        className="mt-3 pt-2 border-t border-zinc-800/80 text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center justify-between group"
                      >
                        <span>Seguir esta ruta en el mapa</span>
                        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Local Gastronomy: Qué Comer */}
          <div>
            <h3 className="font-serif text-base font-bold text-zinc-100 mb-2.5 flex items-center gap-2">
              <Utensils className="w-4 h-4 text-amber-400" />
              <span>Gastronomía típica recomendada en la zona</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {place.typicalFood.map((food, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1.5 rounded-xl bg-zinc-900 text-xs font-semibold text-amber-300 border border-zinc-800 flex items-center gap-1.5"
                >
                  <span>🍲</span>
                  <span>{food}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions Footer */}
        <div className="p-4 sm:p-6 bg-zinc-950 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            id={`modal-ai-ask-btn-${place.id}`}
            onClick={() => {
              onClose();
              onAskAIAboutPlace(place.name);
            }}
            className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-400 font-semibold text-xs border border-amber-400/30 transition-colors flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Consultar a Guía Nica AI sobre {place.name}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              id={`modal-add-route-btn-${place.id}`}
              onClick={() => {
                onAddToCustomRoute(place);
              }}
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs shadow-lg shadow-amber-500/10 transition-all flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Agregar a Mi Ruta Personalizada</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
