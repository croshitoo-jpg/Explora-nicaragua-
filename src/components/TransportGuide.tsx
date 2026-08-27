import React, { useState } from 'react';
import { BUS_TERMINALS, FERRY_SCHEDULES, PRACTICAL_TIPS } from '../data/transportData';
import { Bus, Anchor, DollarSign, Clock, ShieldCheck, MapPin, Sparkles, ArrowRightLeft } from 'lucide-react';

export const TransportGuide: React.FC = () => {
  const [exchangeAmount, setExchangeAmount] = useState<number>(100);
  const [conversionDirection, setConversionDirection] = useState<'USD_TO_NIO' | 'NIO_TO_USD'>('USD_TO_NIO');
  const EXCHANGE_RATE = 36.65; // Official standard exchange rate approx

  const convertedResult = conversionDirection === 'USD_TO_NIO'
    ? (exchangeAmount * EXCHANGE_RATE).toFixed(2)
    : (exchangeAmount / EXCHANGE_RATE).toFixed(2);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#0c0c0e] via-[#09090b] to-[#0c0c0e] border border-zinc-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="max-w-3xl">
          <span className="px-3 py-1 rounded-xl bg-amber-400/15 text-amber-300 text-xs font-semibold border border-amber-400/30">
            Guía Práctica del Viajero
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-100 mt-2">Terminales, Buses, Ferrys y Consejos Nicas</h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed font-sans">
            Todo lo que necesitas saber para moverte por Nicaragua de forma fácil, económica y segura en transporte público, ferries y lanchas.
          </p>
        </div>
      </div>

      {/* Quick Currency Converter Widget */}
      <div className="bg-[#09090b] border border-zinc-800/80 rounded-3xl p-5 sm:p-6 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-black font-bold flex items-center justify-center text-lg shadow-sm">
              💵
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-zinc-100">Conversor de Moneda (Córdoba NIO ↔ Dólar USD)</h3>
              <p className="text-xs text-zinc-400">Tipo de cambio referencial: 1 USD = 36.65 NIO C$</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <div className="flex items-center bg-[#050505] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white">
              <span className="text-zinc-400 font-semibold mr-1.5">
                {conversionDirection === 'USD_TO_NIO' ? '$ USD' : 'C$ NIO'}
              </span>
              <input
                id="currency-converter-input"
                type="number"
                value={exchangeAmount}
                onChange={(e) => setExchangeAmount(Math.max(0, Number(e.target.value)))}
                className="w-20 bg-transparent text-zinc-100 font-bold focus:outline-none"
              />
            </div>

            <button
              id="btn-switch-currency-direction"
              onClick={() => setConversionDirection(prev => prev === 'USD_TO_NIO' ? 'NIO_TO_USD' : 'USD_TO_NIO')}
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-zinc-700 transition-colors"
              title="Cambiar dirección de conversión"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>

            <div className="bg-amber-400 text-black px-4 py-2 rounded-xl font-bold text-sm shadow-sm">
              = {conversionDirection === 'USD_TO_NIO' ? `C$ ${convertedResult} NIO` : `$ ${convertedResult} USD`}
            </div>
          </div>
        </div>
      </div>

      {/* Bus Terminals Directory */}
      <div>
        <h3 className="font-serif text-xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
          <Bus className="w-5 h-5 text-amber-400" />
          <span>Principales Terminales de Buses en Managua</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BUS_TERMINALS.map((term, idx) => (
            <div
              key={idx}
              className="bg-[#09090b] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-5 shadow-lg space-y-3 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-serif text-base font-bold text-zinc-100">{term.name}</h4>
                  <p className="text-xs text-amber-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{term.location}</span>
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-zinc-900 text-[10px] text-zinc-300 font-semibold border border-zinc-700 whitespace-nowrap">
                  🕒 {term.operatingHours}
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold text-zinc-300 mb-1.5">Destinos Principales:</p>
                <div className="flex flex-wrap gap-1.5">
                  {term.destinations.map((dest, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-[#050505] text-[11px] text-amber-300 border border-zinc-800 font-medium"
                    >
                      • {dest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800 text-xs text-zinc-300 bg-[#050505]/70 p-2.5 rounded-xl">
                <strong className="text-amber-400">💡 Consejo de uso:</strong> {term.tips}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ferries and Water Transport */}
      <div>
        <h3 className="font-serif text-xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
          <Anchor className="w-5 h-5 text-cyan-400" />
          <span>Transporte Acuático, Ferrys y Pangas</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FERRY_SCHEDULES.map((ferry, idx) => (
            <div
              key={idx}
              className="bg-[#09090b] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-5 shadow-lg space-y-3 flex flex-col justify-between transition-colors"
            >
              <div>
                <span className="px-2.5 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-[10px] font-semibold border border-cyan-500/30 uppercase">
                  Ruta Acuática
                </span>
                <h4 className="font-serif text-sm font-bold text-zinc-100 mt-2 leading-snug">{ferry.route}</h4>

                <div className="mt-3 space-y-1.5 text-xs text-zinc-300">
                  <p><strong className="text-zinc-100">Duración:</strong> {ferry.duration}</p>
                  <p><strong className="text-zinc-100">Tarifa:</strong> {ferry.cost}</p>
                  <p><strong className="text-zinc-100">Frecuencia:</strong> {ferry.frequency}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800 text-[11px] text-zinc-300 bg-[#050505]/70 p-2.5 rounded-xl">
                <strong className="text-cyan-400">Nota:</strong> {ferry.tips}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practical Travel Tips */}
      <div>
        <h3 className="font-serif text-xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>Consejos Esenciales para el Viajero</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRACTICAL_TIPS.map((tip, idx) => (
            <div
              key={idx}
              className="bg-[#09090b] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-5 shadow-lg space-y-2 transition-colors"
            >
              <h4 className="font-serif text-sm font-bold text-zinc-100 flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span>
                <span>{tip.title}</span>
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
