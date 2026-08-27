import React from 'react';
import { Place } from '../types';
import { MapPin, Clock, Star, Heart, Navigation, Eye, Plus } from 'lucide-react';

interface PlaceCardProps {
  place: Place;
  isSelected: boolean;
  isFavorite: boolean;
  currency: 'NIO' | 'USD';
  onSelect: (place: Place) => void;
  onViewDetails: (place: Place) => void;
  onToggleFavorite: (placeId: string) => void;
  onAddToCustomRoute?: (place: Place) => void;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({
  place,
  isSelected,
  isFavorite,
  currency,
  onSelect,
  onViewDetails,
  onToggleFavorite,
  onAddToCustomRoute,
}) => {
  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Volcanes y Aventura': return 'bg-red-500/10 text-red-300 border-red-500/30';
      case 'Playas y Surf': return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      case 'Ciudades Coloniales': return 'bg-amber-500/15 text-amber-300 border-amber-500/35';
      case 'Naturaleza y Cascadas': return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'Islas y Lagos': return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
      default: return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
    }
  };

  const formattedPrice = currency === 'NIO'
    ? place.entranceFeeNio ? `C$ ${place.entranceFeeNio}` : 'Gratis'
    : place.entranceFeeUsd ? `$ ${place.entranceFeeUsd} USD` : 'Gratis';

  return (
    <div
      id={`place-card-${place.id}`}
      className={`group relative bg-[#09090b] rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-black/80 ${
        isSelected
          ? 'border-amber-400 ring-1 ring-amber-400/40 shadow-xl shadow-amber-500/5'
          : 'border-zinc-800/80 hover:border-zinc-700'
      }`}
    >
      {/* Cover Image */}
      <div className="relative h-44 w-full overflow-hidden bg-black">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-wider uppercase border backdrop-blur-md ${getCategoryBadgeClass(place.category)}`}>
            {place.category}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          id={`btn-fav-${place.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(place.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-xl backdrop-blur-md border transition-all active:scale-90 ${
            isFavorite
              ? 'bg-rose-500 text-white border-rose-400 shadow-lg'
              : 'bg-zinc-950/70 text-zinc-300 border-zinc-700/70 hover:text-rose-400 hover:border-zinc-600'
          }`}
          title={isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
        >
          <Heart className="w-4 h-4" fill={isFavorite ? 'currentColor' : 'none'} />
        </button>

        {/* Rating Badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-zinc-950/85 backdrop-blur-md px-2 py-0.5 rounded-lg border border-zinc-800 text-xs font-semibold text-amber-400">
          <Star className="w-3.5 h-3.5 fill-amber-400" />
          <span>{place.rating}</span>
          <span className="text-[10px] text-zinc-400 font-normal">({place.reviewsCount})</span>
        </div>

        {/* Price tag */}
        <div className="absolute bottom-3 right-3 bg-zinc-950/85 backdrop-blur-md px-2 py-0.5 rounded-lg border border-zinc-800 text-xs font-semibold text-emerald-400">
          {formattedPrice}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Location details */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium mb-1">
            <MapPin className="w-3.5 h-3.5 text-amber-400/90 shrink-0" />
            <span className="truncate">{place.department}, Nicaragua ({place.region})</span>
          </div>

          <h3 
            onClick={() => onSelect(place)}
            className="font-serif text-base font-bold text-zinc-100 group-hover:text-amber-400 transition-colors cursor-pointer line-clamp-1"
          >
            {place.name}
          </h3>

          <p className="text-xs text-zinc-400 line-clamp-2 mt-1.5 leading-relaxed font-sans">
            {place.shortDescription}
          </p>

          {/* Quick tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {place.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded-md bg-zinc-900/90 text-[10px] text-zinc-400 font-medium border border-zinc-800">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer: Transport info & Actions */}
        <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            <span className="font-medium text-zinc-300">{place.howToGetThere.estimatedTime}</span>
          </div>

          <div className="flex items-center gap-1.5">
            {onAddToCustomRoute && (
              <button
                id={`btn-add-route-${place.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCustomRoute(place);
                }}
                className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-400 border border-zinc-800 transition-colors"
                title="Agregar a mi ruta personalizada"
              >
                <Plus className="w-4 h-4" />
              </button>
            )}

            <button
              id={`btn-focus-map-${place.id}`}
              onClick={() => onSelect(place)}
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
              title="Ver en el mapa"
            >
              <Navigation className="w-4 h-4" />
            </button>

            <button
              id={`btn-details-${place.id}`}
              onClick={() => onViewDetails(place)}
              className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs transition-colors flex items-center gap-1 shadow-sm"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Detalles</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
