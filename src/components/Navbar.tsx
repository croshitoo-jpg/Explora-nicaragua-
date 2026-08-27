import React from 'react';
import { Map, Route, Sparkles, Compass, Bus, Heart, DollarSign } from 'lucide-react';

export type ActiveTab = 'map' | 'routes' | 'planner' | 'ai' | 'transport' | 'favorites';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  currency: 'NIO' | 'USD';
  setCurrency: (currency: 'NIO' | 'USD') => void;
  favoritesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currency,
  setCurrency,
  favoritesCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#08080a]/90 backdrop-blur-xl border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Branding */}
          <div 
            id="brand-logo-btn"
            onClick={() => setActiveTab('map')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-transform">
              🇳🇮
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-lg text-zinc-100 tracking-tight">Explora</span>
                <span className="font-serif font-bold text-lg text-amber-400">Nicaragua</span>
              </div>
              <p className="text-[10px] text-zinc-400 font-medium tracking-widest uppercase">Tierra de Lagos y Volcanes</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-950/80 p-1 rounded-xl border border-zinc-800/70">
            <button
              id="tab-btn-map"
              onClick={() => setActiveTab('map')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'map'
                  ? 'bg-amber-400 text-black shadow-md font-bold'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60'
              }`}
            >
              <Map className="w-4 h-4" />
              <span>Mapa y Destinos</span>
            </button>

            <button
              id="tab-btn-routes"
              onClick={() => setActiveTab('routes')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'routes'
                  ? 'bg-amber-400 text-black shadow-md font-bold'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60'
              }`}
            >
              <Route className="w-4 h-4" />
              <span>Rutas Turísticas</span>
            </button>

            <button
              id="tab-btn-planner"
              onClick={() => setActiveTab('planner')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'planner'
                  ? 'bg-amber-400 text-black shadow-md font-bold'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Armar Mi Ruta</span>
            </button>

            <button
              id="tab-btn-ai"
              onClick={() => setActiveTab('ai')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-md font-bold'
                  : 'text-amber-400/90 hover:text-amber-300 hover:bg-zinc-900/60'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Guía Nica AI</span>
            </button>

            <button
              id="tab-btn-transport"
              onClick={() => setActiveTab('transport')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'transport'
                  ? 'bg-amber-400 text-black shadow-md font-bold'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60'
              }`}
            >
              <Bus className="w-4 h-4" />
              <span>Terminales & Buses</span>
            </button>
          </nav>

          {/* Right Action Utilities: Currency Selector & Favorites */}
          <div className="flex items-center gap-2">
            {/* Currency Toggle */}
            <div className="flex items-center bg-zinc-950/80 p-0.5 rounded-lg border border-zinc-800/80 text-xs">
              <button
                id="currency-nio-btn"
                onClick={() => setCurrency('NIO')}
                className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                  currency === 'NIO' ? 'bg-amber-400 text-black font-bold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
                title="Mostrar precios en Córdobas (NIO C$)"
              >
                C$ NIO
              </button>
              <button
                id="currency-usd-btn"
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                  currency === 'USD' ? 'bg-amber-400 text-black font-bold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
                title="Mostrar precios en Dólares ($ USD)"
              >
                $ USD
              </button>
            </div>

            {/* Saved Favorites Tab */}
            <button
              id="btn-favorites-tab"
              onClick={() => setActiveTab('favorites')}
              className={`relative p-2 rounded-xl border transition-all flex items-center justify-center ${
                activeTab === 'favorites'
                  ? 'bg-rose-500/15 border-rose-500/40 text-rose-400'
                  : 'bg-zinc-950/80 border-zinc-800 text-zinc-400 hover:text-rose-400 hover:border-zinc-700'
              }`}
              title="Lugares Favoritos Guardados"
            >
              <Heart className="w-4 h-4" fill={favoritesCount > 0 ? 'currentColor' : 'none'} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow">
                  {favoritesCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="flex md:hidden overflow-x-auto py-2 gap-1 scrollbar-none -mx-4 px-4 border-t border-zinc-800/60">
          <button
            onClick={() => setActiveTab('map')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'map' ? 'bg-amber-400 text-black font-bold' : 'text-zinc-400 bg-zinc-950 border border-zinc-800'
            }`}
          >
            <Map className="w-3.5 h-3.5" />
            <span>Mapa</span>
          </button>
          <button
            onClick={() => setActiveTab('routes')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'routes' ? 'bg-amber-400 text-black font-bold' : 'text-zinc-400 bg-zinc-950 border border-zinc-800'
            }`}
          >
            <Route className="w-3.5 h-3.5" />
            <span>Rutas</span>
          </button>
          <button
            onClick={() => setActiveTab('planner')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'planner' ? 'bg-amber-400 text-black font-bold' : 'text-zinc-400 bg-zinc-950 border border-zinc-800'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Armar Ruta</span>
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'ai' ? 'bg-amber-400 text-black font-bold' : 'text-amber-400 bg-zinc-950 border border-zinc-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guía AI</span>
          </button>
          <button
            onClick={() => setActiveTab('transport')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'transport' ? 'bg-amber-400 text-black font-bold' : 'text-zinc-400 bg-zinc-950 border border-zinc-800'
            }`}
          >
            <Bus className="w-3.5 h-3.5" />
            <span>Buses</span>
          </button>
        </div>
      </div>
    </header>
  );
};
