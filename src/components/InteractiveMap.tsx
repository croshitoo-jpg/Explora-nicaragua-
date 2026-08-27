import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { Place, TouristRoute } from '../types';
import { NICARAGUA_ROUTES } from '../data/nicaraguaRoutes';
import { getTerminalsForPlace } from '../data/transportData';
import { Compass, Layers, Navigation, ZoomIn, ZoomOut, MapPin, Eye, Route, Bus, ChevronRight } from 'lucide-react';

interface InteractiveMapProps {
  places: Place[];
  selectedPlace: Place | null;
  selectedRoute: TouristRoute | null;
  onSelectPlace: (place: Place) => void;
  onViewPlaceDetails: (place: Place) => void;
  onSelectRoute?: (route: TouristRoute) => void;
  currency?: 'NIO' | 'USD';
  userLocation: { lat: number; lng: number } | null;
  onRequestUserLocation: () => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  places,
  selectedPlace,
  selectedRoute,
  onSelectPlace,
  onViewPlaceDetails,
  onSelectRoute,
  currency = 'NIO',
  userLocation,
  onRequestUserLocation,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersGroupRef = useRef<L.LayerGroup | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const polylineRef = useRef<L.Polyline | null>(null);
  const transitLineRef = useRef<L.Polyline | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);

  const [mapTileStyle, setMapTileStyle] = useState<'streets' | 'satellite' | 'terrain'>('streets');

  // Category Colors
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Volcanes y Aventura': return '#ef4444'; // Red
      case 'Playas y Surf': return '#06b6d4'; // Cyan
      case 'Ciudades Coloniales': return '#f59e0b'; // Amber
      case 'Naturaleza y Cascadas': return '#10b981'; // Emerald
      case 'Islas y Lagos': return '#3b82f6'; // Blue
      case 'Cultura y Gastronomía': return '#8b5cf6'; // Purple
      default: return '#64748b';
    }
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Center of Nicaragua (approx Lake Cocibolca / Managua)
      const map = L.map(mapContainerRef.current, {
        center: [12.4, -85.6],
        zoom: 7.5,
        zoomControl: false,
        attributionControl: false,
      });

      const markersGroup = L.layerGroup().addTo(map);
      markersGroupRef.current = markersGroup;
      mapInstanceRef.current = map;

      // Handle resize
      const resizeObserver = new ResizeObserver(() => {
        map.invalidateSize();
      });
      resizeObserver.observe(mapContainerRef.current);

      return () => {
        resizeObserver.disconnect();
        map.remove();
        mapInstanceRef.current = null;
      };
    }
  }, []);

  // Update Tile Layer when style changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
      tileLayerRef.current = null;
    }

    let newTileUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
    if (mapTileStyle === 'satellite') {
      newTileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
    } else if (mapTileStyle === 'terrain') {
      newTileUrl = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
    }

    const tileLayer = L.tileLayer(newTileUrl, {
      maxZoom: 18,
      subdomains: mapTileStyle === 'terrain' ? 'abc' : 'abcd',
    }).addTo(map);

    tileLayerRef.current = tileLayer;
  }, [mapTileStyle]);

  // Update Markers when places or selection changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersGroup = markersGroupRef.current;
    if (!map || !markersGroup) return;

    markersGroup.clearLayers();

    places.forEach((place) => {
      const isSelected = selectedPlace?.id === place.id;
      const isInSelectedRoute = selectedRoute?.stops.includes(place.id);
      const color = getCategoryColor(place.category);

      const iconHtml = `
        <div style="
          width: ${isSelected ? '38px' : '28px'};
          height: ${isSelected ? '38px' : '28px'};
          border-radius: 50%;
          background: ${color};
          border: ${isSelected ? '3px solid #ffffff' : isInSelectedRoute ? '3px solid #f59e0b' : '2px solid #ffffff'};
          box-shadow: 0 4px 12px rgba(0,0,0,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: ${isSelected ? '16px' : '12px'};
          cursor: pointer;
          transition: all 0.2s ease;
          transform: translate(-50%, -50%);
        ">
          ${isSelected ? '★' : isInSelectedRoute ? '●' : '📍'}
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-map-pin',
        html: iconHtml,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      });

      const marker = L.marker([place.coordinates.lat, place.coordinates.lng], {
        icon: customIcon,
        title: place.name,
      });

      marker.on('click', () => {
        onSelectPlace(place);
      });

      // Tooltip popup with transport info
      const popupHtml = `
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; min-width: 200px; padding: 4px;">
          <div style="font-weight: 700; font-size: 13px; color: #09090b; margin-bottom: 2px;">${place.name}</div>
          <div style="font-size: 11px; color: #71717a; margin-bottom: 6px;">📍 ${place.department} (${place.region})</div>
          <div style="background: #f4f4f5; border-radius: 8px; padding: 5px; margin-bottom: 6px; font-size: 10.5px; color: #27272a;">
            <div>🚌 <b>Terminal:</b> ${place.howToGetThere.terminal || 'Managua'}</div>
            <div>⏱️ <b>Tiempo:</b> ${place.howToGetThere.estimatedTime}</div>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; font-size: 11px; font-weight: 600; color: #d97706;">
            <span>⭐ ${place.rating} / 5.0</span>
            <span style="color: #059669;">C$ ${place.howToGetThere.estimatedFareNio} NIO</span>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { closeButton: false, offset: [0, -10] });

      markersGroup.addLayer(marker);

      if (isSelected) {
        marker.openPopup();
      }
    });
  }, [places, selectedPlace, selectedRoute, onSelectPlace]);

  // Update Route Polyline when a route is selected
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (polylineRef.current) {
      map.removeLayer(polylineRef.current);
      polylineRef.current = null;
    }

    if (transitLineRef.current) {
      map.removeLayer(transitLineRef.current);
      transitLineRef.current = null;
    }

    if (selectedRoute && selectedRoute.pathCoordinates.length > 1) {
      const polyline = L.polyline(selectedRoute.pathCoordinates, {
        color: '#f59e0b',
        weight: 5,
        opacity: 0.9,
        dashArray: '8, 8',
        lineCap: 'round',
        lineJoin: 'round',
      }).addTo(map);

      polylineRef.current = polyline;

      // Fit bounds to the route
      map.fitBounds(polyline.getBounds(), { padding: [50, 50], maxZoom: 12 });
    } else if (selectedPlace) {
      // If no route is selected, draw transit route line from Managua to selected place
      const managuaCoord: [number, number] = [12.1565, -86.2753];
      const destCoord: [number, number] = [selectedPlace.coordinates.lat, selectedPlace.coordinates.lng];

      // Only draw if distance is meaningful (not already in Managua centre)
      const dist = Math.sqrt(Math.pow(managuaCoord[0] - destCoord[0], 2) + Math.pow(managuaCoord[1] - destCoord[1], 2));
      if (dist > 0.05) {
        const transitLine = L.polyline([managuaCoord, destCoord], {
          color: '#38bdf8',
          weight: 3.5,
          opacity: 0.8,
          dashArray: '6, 6',
          lineCap: 'round',
        }).addTo(map);

        transitLineRef.current = transitLine;
      }
    }
  }, [selectedRoute, selectedPlace]);

  // Pan to selected place
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !selectedPlace) return;

    map.flyTo([selectedPlace.coordinates.lat, selectedPlace.coordinates.lng], 11, {
      duration: 1.2,
    });
  }, [selectedPlace]);

  // User Location Marker
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (userMarkerRef.current) {
      map.removeLayer(userMarkerRef.current);
      userMarkerRef.current = null;
    }

    if (userLocation) {
      const userIcon = L.divIcon({
        className: 'user-loc-icon',
        html: `
          <div style="
            width: 20px;
            height: 20px;
            background: #2563eb;
            border: 3px solid #ffffff;
            border-radius: 50%;
            box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.3);
            animation: pulse 2s infinite;
          "></div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });

      const userMarker = L.marker([userLocation.lat, userLocation.lng], {
        icon: userIcon,
        title: 'Tu Ubicación Actual',
      }).addTo(map);

      userMarker.bindPopup('<b>Estás aquí</b>');
      userMarkerRef.current = userMarker;
    }
  }, [userLocation]);

  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  const handleResetView = () => {
    mapInstanceRef.current?.flyTo([12.4, -85.6], 7.5, { duration: 1 });
  };

  // Find related suggested routes and terminals for selected place
  const relatedRoutes = selectedPlace
    ? NICARAGUA_ROUTES.filter((r) => r.stops.includes(selectedPlace.id) || selectedPlace.routeIds?.includes(r.id))
    : [];

  const terminals = selectedPlace
    ? getTerminalsForPlace(selectedPlace.name, selectedPlace.department)
    : [];

  const busFareFormatted = selectedPlace
    ? currency === 'NIO'
      ? `C$ ${selectedPlace.howToGetThere.estimatedFareNio} NIO`
      : `$ ${(selectedPlace.howToGetThere.estimatedFareNio / 36.6).toFixed(1)} USD`
    : '';

  return (
    <div className="relative w-full h-full min-h-[460px] lg:min-h-[580px] rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl bg-[#050505]">
      {/* Map Container */}
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* Floating Controls Overlay */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        {/* Layer Switcher */}
        <div className="bg-[#09090b]/90 backdrop-blur-md p-1.5 rounded-2xl border border-zinc-800 shadow-xl flex flex-col gap-1">
          <button
            id="map-style-streets"
            onClick={() => setMapTileStyle('streets')}
            title="Mapa Claro / Calles"
            className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              mapTileStyle === 'streets' ? 'bg-amber-400 text-black shadow-sm' : 'text-zinc-400 hover:bg-zinc-800/70 hover:text-zinc-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span className="hidden sm:inline">Calles</span>
          </button>
          <button
            id="map-style-satellite"
            onClick={() => setMapTileStyle('satellite')}
            title="Mapa Satélite"
            className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              mapTileStyle === 'satellite' ? 'bg-amber-400 text-black shadow-sm' : 'text-zinc-400 hover:bg-zinc-800/70 hover:text-zinc-200'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span className="hidden sm:inline">Satélite</span>
          </button>
          <button
            id="map-style-terrain"
            onClick={() => setMapTileStyle('terrain')}
            title="Mapa Topográfico / Relieve"
            className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              mapTileStyle === 'terrain' ? 'bg-amber-400 text-black shadow-sm' : 'text-zinc-400 hover:bg-zinc-800/70 hover:text-zinc-200'
            }`}
          >
            <Navigation className="w-4 h-4" />
            <span className="hidden sm:inline">Relieve</span>
          </button>
        </div>

        {/* Zoom & Reset Controls */}
        <div className="bg-[#09090b]/90 backdrop-blur-md p-1.5 rounded-2xl border border-zinc-800 shadow-xl flex flex-col gap-1">
          <button
            id="map-zoom-in"
            onClick={handleZoomIn}
            title="Acercar mapa"
            className="p-2 rounded-xl text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            id="map-zoom-out"
            onClick={handleZoomOut}
            title="Alejar mapa"
            className="p-2 rounded-xl text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            id="map-reset-view"
            onClick={handleResetView}
            title="Centrar en Nicaragua"
            className="p-2 rounded-xl text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors text-xs font-bold font-mono"
          >
            NIC
          </button>
          <button
            id="map-user-location"
            onClick={onRequestUserLocation}
            title="Mi Ubicación"
            className={`p-2 rounded-xl transition-colors ${
              userLocation ? 'text-amber-400 bg-amber-400/15 border border-amber-400/30' : 'text-zinc-300 hover:bg-zinc-800'
            }`}
          >
            <Navigation className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Map Legend Bar at Bottom Left */}
      <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-2.5 bg-[#09090b]/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-zinc-800 shadow-xl text-xs text-zinc-300">
        <span className="font-semibold text-zinc-400 mr-1">Categorías:</span>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span>Volcanes</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
          <span>Playas</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span>Coloniales</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span>Naturaleza</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
          <span>Lagos/Islas</span>
        </div>
      </div>

      {/* Quick Place Card Overlay if a place is currently selected */}
      {selectedPlace && (
        <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:w-[420px] max-h-[85%] overflow-y-auto z-10 bg-[#09090b]/95 backdrop-blur-md rounded-3xl border border-amber-400/30 p-4 sm:p-5 shadow-2xl animate-fade-in text-zinc-100 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedPlace.department} • {selectedPlace.region}</span>
              </div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-zinc-100 truncate">{selectedPlace.name}</h4>
              <p className="text-xs text-zinc-400 line-clamp-2 mt-1 font-sans">{selectedPlace.shortDescription}</p>
            </div>
            <img
              src={selectedPlace.image}
              alt={selectedPlace.name}
              className="w-16 h-16 rounded-2xl object-cover border border-zinc-800 shrink-0"
            />
          </div>

          {/* Transport and Bus Terminal Route Info */}
          <div className="p-3 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-xs space-y-2">
            <div className="flex items-center justify-between font-semibold text-amber-300">
              <span className="flex items-center gap-1.5">
                <Bus className="w-4 h-4 text-amber-400" />
                <span>Cómo llegar por ruta:</span>
              </span>
              <span className="text-emerald-400 font-bold">{busFareFormatted}</span>
            </div>
            <p className="text-zinc-300 text-[11px] leading-relaxed">
              {selectedPlace.howToGetThere.fromManagua}
            </p>
            <div className="pt-2 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-1 text-[11px] text-zinc-400">
              <span>🏢 <b>Terminal:</b> {selectedPlace.howToGetThere.terminal || (terminals[0]?.name.split('(')[0] || 'Managua')}</span>
              <span>⏱️ <b>Tiempo:</b> {selectedPlace.howToGetThere.estimatedTime}</span>
            </div>
          </div>

          {/* Related Suggested Routes quick buttons */}
          {relatedRoutes.length > 0 && onSelectRoute && (
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-zinc-400 flex items-center gap-1">
                <Route className="w-3 h-3 text-amber-400" />
                <span>Rutas sugeridas que incluyen este destino:</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {relatedRoutes.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => onSelectRoute(r)}
                    className="px-2.5 py-1 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 text-[11px] font-semibold border border-amber-400/30 flex items-center gap-1 transition-colors"
                  >
                    <span>{r.title.split('(')[0]}</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between gap-2">
            <button
              onClick={handleResetView}
              className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              Ver mapa completo
            </button>
            <button
              id={`btn-view-details-${selectedPlace.id}`}
              onClick={() => onViewPlaceDetails(selectedPlace)}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 shadow-lg shadow-amber-500/10"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Ver Guía y Terminales</span>
            </button>
          </div>
        </div>
      )}

      {/* Active Route Badge on Top Left */}
      {selectedRoute && (
        <div className="absolute top-4 left-4 z-10 bg-amber-400 text-black px-3.5 py-2 rounded-2xl font-bold text-xs shadow-xl flex items-center gap-2 border border-amber-300">
          <Route className="w-4 h-4" />
          <div className="flex flex-col">
            <span>Ruta: {selectedRoute.title}</span>
            <span className="text-[10px] font-semibold text-black/80">{selectedRoute.stops.length} paradas • ~{selectedRoute.distanceKm} km • {selectedRoute.durationDays} días</span>
          </div>
        </div>
      )}
    </div>
  );
};
