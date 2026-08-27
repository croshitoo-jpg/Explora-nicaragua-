import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, Compass, Clock, DollarSign, MapPin, RefreshCw } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

interface GuiaNicaAIProps {
  initialPrompt?: string;
}

const QUICK_PROMPTS = [
  '¿Cómo viajar de Managua a Isla de Ometepe en bus y ferry paso a paso?',
  'Itinerario mochilero de 5 días en Nicaragua con presupuesto económico',
  '¿Cómo hacer Volcano Boarding en Cerro Negro y visitar León?',
  '¿Cuál es la mejor época y ruta para ir a Corn Island (Big y Little Corn)?',
  'Ruta gastronómica nicaragüense: ¿Qué comer y dónde encontrar los mejores platillos?',
  '¿Cómo visitar el Cañón de Somoto y cuánto cuesta la entrada con guía?',
];

export const GuiaNicaAI: React.FC<GuiaNicaAIProps> = ({ initialPrompt }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `¡Hola viajero! 👋 Soy tu **Guía Nica AI**, tu asesor experto en destinos, rutas de transporte, volcanes, lagos, playas y cultura de Nicaragua.\n\n¿Qué tipo de viaje estás planeando o qué destino te gustaría descubrir hoy? ¡Pregúntame sobre horarios de buses, ferrys, presupuestos en córdobas o dólares, o déjame armar un itinerario completo a tu medida!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [inputQuery, setInputQuery] = useState(initialPrompt || '');
  const [isLoading, setIsLoading] = useState(false);

  // Quick Itinerary Parameters
  const [days, setDays] = useState('3');
  const [travelStyle, setTravelStyle] = useState('Aventura y Volcanes');
  const [budget, setBudget] = useState('Mochilero / Económico');
  const [startingPoint, setStartingPoint] = useState('Managua (Terminal UCA / Aeropuerto)');

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputQuery;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/travel-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: textToSend }),
      });

      const data = await response.json();

      const aiMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'ai',
        text: data.reply || data.error || 'Lo siento, no pude procesar la consulta en este momento.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          sender: 'ai',
          text: 'Ocurrió un error al conectar con el servidor. Por favor verifica tu conexión e intenta de nuevo.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateCustomItinerary = async () => {
    if (isLoading) return;

    const promptText = `Genera un itinerario estructurado para ${days} días enfocado en ${travelStyle}, con presupuesto ${budget}, partiendo desde ${startingPoint}.`;
    
    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: `🗺️ **Solicitud de Itinerario**:\n- Duración: ${days} días\n- Estilo: ${travelStyle}\n- Presupuesto: ${budget}\n- Salida: ${startingPoint}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/travel-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          days,
          travelStyle,
          budget,
          startingPoint,
        }),
      });

      const data = await response.json();

      const aiMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'ai',
        text: data.reply || data.error || 'No se pudo generar el itinerario.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          sender: 'ai',
          text: 'Error al generar el itinerario.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Assistant Banner */}
      <div className="bg-gradient-to-br from-[#0c0c0e] via-[#09090b] to-[#0c0c0e] border border-zinc-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-2 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Guía Nica AI Inteligente</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-100">Tu Asesor Local en Rutas y Destinos de Nicaragua</h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed font-sans">
              Consulta sobre rutas de transporte, costos exactos de pasajes en terminales nicas, horarios de ferrys, mejores temporadas y recomendaciones auténticas.
            </p>
          </div>
        </div>
      </div>

      {/* Generator & Chat Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Quick Itinerary Builder Form */}
        <div className="bg-[#09090b] border border-zinc-800/80 rounded-3xl p-5 shadow-2xl space-y-4 h-fit">
          <h3 className="font-serif text-base font-bold text-zinc-100 flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Generador Rápido de Itinerarios</span>
          </h3>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-zinc-300 font-semibold mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>¿Cuántos días tienes disponibles?</span>
              </label>
              <select
                id="ai-select-days"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="w-full bg-[#050505] border border-zinc-800 text-zinc-100 rounded-xl p-2.5 text-xs focus:outline-none focus:border-amber-400 transition-colors"
              >
                <option value="1">1 Día (Excursión express)</option>
                <option value="2">2 Días (Fin de semana)</option>
                <option value="3">3 Días (Puente / Feriado)</option>
                <option value="5">5 Días (Ruta clásica)</option>
                <option value="7">7 Días (1 Semana completa)</option>
                <option value="10">10 Días (Aventura profunda)</option>
                <option value="14">14 Días (Gran Vuelta a Nicaragua)</option>
              </select>
            </div>

            <div>
              <label className="block text-zinc-300 font-semibold mb-1 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>Estilo de Viaje / Preferencias:</span>
              </label>
              <select
                id="ai-select-style"
                value={travelStyle}
                onChange={(e) => setTravelStyle(e.target.value)}
                className="w-full bg-[#050505] border border-zinc-800 text-zinc-100 rounded-xl p-2.5 text-xs focus:outline-none focus:border-amber-400 transition-colors"
              >
                <option value="Aventura y Volcanes">Aventura y Volcanes Activos</option>
                <option value="Playas y Surf">Playas, Surf y Atardeceres</option>
                <option value="Ciudades Coloniales e Historia">Ciudades Coloniales y Cultura</option>
                <option value="Ruta del Café y Clima Fresco del Norte">Ruta del Café y Montañas del Norte</option>
                <option value="Caribe, Buceo y Desconexión">Caribe Soñado (Corn Island)</option>
                <option value="Familiar y Relax">Familiar, Seguro y Relajante</option>
              </select>
            </div>

            <div>
              <label className="block text-zinc-300 font-semibold mb-1 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                <span>Nivel de Presupuesto:</span>
              </label>
              <select
                id="ai-select-budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-[#050505] border border-zinc-800 text-zinc-100 rounded-xl p-2.5 text-xs focus:outline-none focus:border-amber-400 transition-colors"
              >
                <option value="Mochilero / Económico (Hostales y buses públicos)">Mochilero / Económico ($20-$35 USD/día)</option>
                <option value="Moderado (Hoteles confortables y tours guiados)">Moderado / Estándar ($50-$90 USD/día)</option>
                <option value="Premium / Eco-Resorts y vehículos privados">Premium / Eco-Lodges de lujo ($120+ USD/día)</option>
              </select>
            </div>

            <div>
              <label className="block text-zinc-300 font-semibold mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Punto de Partida:</span>
              </label>
              <input
                id="ai-input-start"
                type="text"
                value={startingPoint}
                onChange={(e) => setStartingPoint(e.target.value)}
                className="w-full bg-[#050505] border border-zinc-800 text-zinc-100 rounded-xl p-2.5 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                placeholder="Ej: Managua, Granada o Rivas"
              />
            </div>

            <button
              id="btn-generate-ai-itinerary"
              disabled={isLoading}
              onClick={handleGenerateCustomItinerary}
              className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs shadow-lg shadow-amber-500/10 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isLoading ? 'Generando Ruta Nica...' : 'Generar Itinerario con IA'}</span>
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="pt-3 border-t border-zinc-800">
            <h4 className="text-xs font-semibold text-zinc-400 mb-2">Preguntas Populares:</h4>
            <div className="space-y-1.5">
              {QUICK_PROMPTS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="w-full text-left p-2.5 rounded-xl bg-[#050505] hover:bg-zinc-900 text-[11px] text-zinc-300 hover:text-amber-300 transition-colors border border-zinc-800 line-clamp-1"
                >
                  💬 {q}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Chat Interface */}
        <div className="lg:col-span-2 bg-[#09090b] border border-zinc-800/80 rounded-3xl shadow-2xl flex flex-col h-[650px] overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b border-zinc-800 bg-[#050505] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold shadow">
                🇳🇮
              </div>
              <div>
                <h3 className="font-serif text-sm font-bold text-zinc-100 flex items-center gap-1.5">
                  <span>Guía Nica AI</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </h3>
                <p className="text-[11px] text-zinc-400">Potenciado por Gemini 3.7 Flash</p>
              </div>
            </div>

            <button
              id="btn-clear-chat"
              onClick={() => {
                setMessages([
                  {
                    id: 'welcome-reset',
                    sender: 'ai',
                    text: 'Conversación reiniciada. ¿En qué ruta o destino de Nicaragua puedo ayudarte ahora?',
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                  },
                ]);
              }}
              className="text-xs text-zinc-400 hover:text-zinc-100 p-1.5 rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-1"
              title="Reiniciar chat"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Limpiar</span>
            </button>
          </div>

          {/* Chat Message Thread */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-black font-bold flex items-center justify-center text-xs shrink-0 mt-1 shadow-sm">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-amber-400 text-black font-medium rounded-br-none shadow-md'
                      : 'bg-[#050505] text-zinc-200 border border-zinc-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  <div className="whitespace-pre-wrap font-sans space-y-2">
                    {msg.text}
                  </div>
                  <span
                    className={`block text-[10px] mt-2 ${
                      msg.sender === 'user' ? 'text-black/60 text-right' : 'text-zinc-500'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-zinc-800 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-1 border border-zinc-700">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-black font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-[#050505] border border-zinc-800 rounded-2xl p-4 rounded-bl-none text-xs text-amber-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce delay-100"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce delay-200"></span>
                  <span>Guía Nica está preparando las mejores rutas y consejos para ti...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Box */}
          <div className="p-3 border-t border-zinc-800 bg-[#050505]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                id="ai-chat-input"
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Escribe tu pregunta sobre Nicaragua, buses, volcanes, comida o rutas..."
                className="flex-1 bg-[#09090b] border border-zinc-800 text-zinc-100 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-amber-400 placeholder:text-zinc-500 transition-colors"
              />
              <button
                id="ai-chat-send-btn"
                type="submit"
                disabled={!inputQuery.trim() || isLoading}
                className="px-4 py-3 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-xl text-xs transition-all disabled:opacity-40 flex items-center gap-1.5 shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Enviar</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
