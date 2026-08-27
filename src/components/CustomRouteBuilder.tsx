import React, { useState } from 'react';
import { Place, CustomRoute, CustomRouteItem } from '../types';
import { NICARAGUA_PLACES } from '../data/nicaraguaPlaces';
import confetti from 'canvas-confetti';
import { 
  Plus, Trash2, ArrowUp, ArrowDown, MapPin, Navigation, 
  Clock, DollarSign, Share2, Printer, Sparkles, CheckCircle2, BookmarkPlus 
} from 'lucide-react';

interface CustomRouteBuilderProps {
  customRouteItems: Place[];
  onRemovePlace: (placeId: string) => void;
  onAddPlace: (place: Place) => void;
  onClearRoute: () => void;
  onMovePlace: (fromIndex: number, toIndex: number) => void;
  currency: 'NIO' | 'USD';
  onAskAIPlanCustom: (routeSummary: string) => void;
}

const STARTING_POINTS = [
  { name: 'Managua (Aeropuerto Internacional Augusto C. Sandino - MGA)', lat: 12.1415, lng: -86.1681 },
  { name: 'Managua (Terminal Microbuses UCA)', lat: 12.1270, lng: -86.2700 },
  { name: 'Granada (Parque Central)', lat: 11.9344, lng: -85.9560 },
  { name: 'León (Catedral Basílica)', lat: 12.4379, lng: -86.8780 },
  { name: 'Peñas Blancas (Frontera con Costa Rica)', lat: 11.2180, lng: -85.6120 },
  { name: 'Guasaule (Frontera con Honduras)', lat: 13.0480, lng: -86.9920 },
];

export const CustomRouteBuilder: React.FC<CustomRouteBuilderProps> = ({
  customRouteItems,
  onRemovePlace,
  onAddPlace,
  onClearRoute,
  onMovePlace,
  currency,
  onAskAIPlanCustom,
}) => {
  const [selectedStartPoint, setSelectedStartPoint] = useState(STARTING_POINTS[0]);
  const [routeTitle, setRouteTitle] = useState('Mi Aventura Soñada en Nicaragua');
  const [isSaved, setIsSaved] = useState(false);

  // Haversine distance calculator between coordinates
  const calculateDistanceKm = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    // Road factor multiplier in Central America approx 1.35x
    return Math.round(R * c * 1.35);
  };

  // Compute total route metrics
  let totalKm = 0;
  let prevLat = selectedStartPoint.lat;
  let prevLng = selectedStartPoint.lng;

  customRouteItems.forEach((place) => {
    totalKm += calculateDistanceKm(prevLat, prevLng, place.coordinates.lat, place.coordinates.lng);
    prevLat = place.coordinates.lat;
    prevLng = place.coordinates.lng;
  });

  const estimatedDriveHours = Math.max(1, (totalKm / 55)).toFixed(1);
  const estimatedBusHours = Math.max(1.5, (totalKm / 38)).toFixed(1);
  const estimatedFuelNio = Math.round(totalKm * 5.5); // ~5.5 NIO per km fuel
  const estimatedBusFareNio = customRouteItems.reduce((acc, p) => acc + (p.howToGetThere.estimatedFareNio || 60), 100);
  const estimatedBudgetNio = (customRouteItems.length * 800) + estimatedBusFareNio;
  const estimatedBudgetUsd = Math.round(estimatedBudgetNio / 36.6);

  const availableToAdd = NICARAGUA_PLACES.filter(
    (p) => !customRouteItems.some((item) => item.id === p.id)
  );

  const handleSaveItinerary = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAIHelp = () => {
    const summary = `Punto de partida: ${selectedStartPoint.name}. Paradas seleccionadas: ${customRouteItems.map((p, i) => `${i + 1}. ${p.name} (${p.department})`).join(', ')}. Distancia estimada: ${totalKm} km.`;
    onAskAIPlanCustom(summary);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#0c0c0e] via-[#09090b] to-[#0c0c0e] border border-zinc-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-xl bg-amber-400/15 text-amber-300 text-xs font-semibold border border-amber-400/30">
            Planificador Personalizado
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-100 mt-2">Diseña Tu Propio Itinerario por Nicaragua</h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl font-sans">
            Elige tu punto de partida, añade los destinos que más te gusten, reordena tus paradas y calcula distancias, tiempos y presupuestos al instante.
          </p>
        </div>

        {customRouteItems.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              id="btn-print-custom-route"
              onClick={handlePrint}
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700 transition-colors"
              title="Imprimir o Guardar PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              id="btn-save-custom-route"
              onClick={handleSaveItinerary}
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/10 transition-transform active:scale-95"
            >
              <BookmarkPlus className="w-4 h-4" />
              <span>{isSaved ? '¡Guardado!' : 'Guardar Ruta'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Starting Point & Title Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#09090b] border border-zinc-800/80 rounded-3xl p-5 shadow-xl">
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
            <Navigation className="w-3.5 h-3.5 text-amber-400" />
            <span>Punto de Partida del Viaje:</span>
          </label>
          <select
            id="start-point-select"
            value={selectedStartPoint.name}
            onChange={(e) => {
              const pt = STARTING_POINTS.find((s) => s.name === e.target.value);
              if (pt) setSelectedStartPoint(pt);
            }}
            className="w-full bg-[#050505] border border-zinc-800 text-zinc-100 rounded-xl p-3 text-xs focus:outline-none focus:border-amber-400 transition-colors"
          >
            {STARTING_POINTS.map((sp, idx) => (
              <option key={idx} value={sp.name}>
                {sp.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
            <span>Nombre de tu Ruta:</span>
          </label>
          <input
            id="custom-route-title-input"
            type="text"
            value={routeTitle}
            onChange={(e) => setRouteTitle(e.target.value)}
            className="w-full bg-[#050505] border border-zinc-800 text-zinc-100 rounded-xl p-3 text-xs focus:outline-none focus:border-amber-400 font-medium transition-colors"
            placeholder="Ej: Recorrido Volcanes y Playas 2026"
          />
        </div>
      </div>

      {/* Main Builder Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Route Stops List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-zinc-100 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>Paradas del Viaje ({customRouteItems.length})</span>
            </h3>
            {customRouteItems.length > 0 && (
              <button
                id="btn-clear-custom-route"
                onClick={onClearRoute}
                className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Vaciar Todo</span>
              </button>
            )}
          </div>

          {/* Starting Station Row */}
          <div className="bg-[#09090b] border border-zinc-800 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center justify-center font-bold text-xs shrink-0">
              0
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">Inicio</span>
              <p className="text-xs font-semibold text-zinc-100 truncate">{selectedStartPoint.name}</p>
            </div>
          </div>

          {/* If No Stops Added Yet */}
          {customRouteItems.length === 0 ? (
            <div className="bg-[#09090b]/60 border border-dashed border-zinc-800 rounded-3xl p-10 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto text-xl font-bold">
                +
              </div>
              <h4 className="font-serif text-base font-bold text-zinc-100">Tu ruta está vacía</h4>
              <p className="text-xs text-zinc-500 max-w-md mx-auto">
                Selecciona destinos del catálogo a la derecha para agregarlos a tu itinerario y calcular tiempos de viaje automáticamente.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {customRouteItems.map((place, index) => (
                <div
                  key={place.id}
                  id={`custom-stop-item-${place.id}`}
                  className="bg-[#09090b] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-4 flex items-center gap-3 transition-all"
                >
                  {/* Order Number */}
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-black font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                    {index + 1}
                  </div>

                  {/* Thumbnail */}
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-14 h-14 rounded-xl object-cover border border-zinc-800 shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-amber-400 uppercase">
                        {place.department}
                      </span>
                      <span className="text-[10px] text-zinc-500">• {place.category}</span>
                    </div>
                    <h4 className="font-serif text-sm font-bold text-zinc-100 truncate">{place.name}</h4>
                    <p className="text-[11px] text-zinc-400">
                      Estadía sugerida: <strong className="text-zinc-200 font-medium">{place.recommendedDuration}</strong>
                    </p>
                  </div>

                  {/* Reorder and Delete Actions */}
                  <div className="flex items-center gap-1">
                    <button
                      id={`btn-move-up-${place.id}`}
                      disabled={index === 0}
                      onClick={() => onMovePlace(index, index - 1)}
                      className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 disabled:opacity-30 transition-colors"
                      title="Mover arriba"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </button>
                    <button
                      id={`btn-move-down-${place.id}`}
                      disabled={index === customRouteItems.length - 1}
                      onClick={() => onMovePlace(index, index + 1)}
                      className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 disabled:opacity-30 transition-colors"
                      title="Mover abajo"
                    >
                      <ArrowDown className="w-4 h-4" />
                    </button>
                    <button
                      id={`btn-delete-stop-${place.id}`}
                      onClick={() => onRemovePlace(place.id)}
                      className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 transition-colors"
                      title="Quitar parada"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Route Summary & Add Places Quick Catalog */}
        <div className="space-y-6">
          {/* Estimated Metrics Box */}
          <div className="bg-[#09090b] border border-zinc-800/80 rounded-3xl p-5 shadow-2xl space-y-4">
            <h3 className="font-serif text-base font-bold text-zinc-100 flex items-center gap-2">
              <Navigation className="w-4 h-4 text-emerald-400" />
              <span>Resumen de la Ruta</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                <span className="text-zinc-400">Distancia aproximada en carretera:</span>
                <span className="font-bold text-zinc-100 text-sm">~{totalKm} km</span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                <span className="text-zinc-400">Tiempo estimado en auto/4x4:</span>
                <span className="font-semibold text-zinc-200">~{estimatedDriveHours} horas</span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                <span className="text-zinc-400">Tiempo estimado en transporte público:</span>
                <span className="font-semibold text-zinc-200">~{estimatedBusHours} horas</span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                <span className="text-zinc-400">Presupuesto sugerido (transporte + entradas):</span>
                <span className="font-bold text-amber-400 text-sm">
                  {currency === 'NIO' ? `C$ ${estimatedBudgetNio.toLocaleString()} NIO` : `$ ${estimatedBudgetUsd} USD`}
                </span>
              </div>
            </div>

            {/* AI Optimization Trigger */}
            {customRouteItems.length > 0 && (
              <button
                id="btn-ai-optimize-custom"
                onClick={handleAIHelp}
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs shadow-lg shadow-amber-500/10 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Optimizar Itinerario con IA</span>
              </button>
            )}
          </div>

          {/* Quick Catalog to Add More Stops */}
          <div className="bg-[#09090b] border border-zinc-800/80 rounded-3xl p-5 shadow-2xl space-y-3">
            <h4 className="font-serif text-sm font-bold text-zinc-100 flex items-center gap-2">
              <Plus className="w-4 h-4 text-amber-400" />
              <span>Añadir Destinos a tu Ruta</span>
            </h4>

            <div className="max-h-72 overflow-y-auto space-y-2 pr-1 scrollbar-thin">
              {availableToAdd.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#050505] p-2.5 rounded-xl border border-zinc-800 flex items-center justify-between gap-2 hover:border-zinc-700 transition-colors"
                >
                  <div className="min-w-0">
                    <p className="font-serif text-xs font-bold text-zinc-100 truncate">{p.name}</p>
                    <p className="text-[10px] text-zinc-500">{p.department} • {p.category}</p>
                  </div>
                  <button
                    id={`btn-add-place-${p.id}`}
                    onClick={() => onAddPlace(p)}
                    className="p-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-colors shrink-0 shadow-sm"
                    title="Añadir parada"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
