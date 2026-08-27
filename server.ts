import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
let geminiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!geminiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    geminiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return geminiClient;
}

// API Health Check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
});

// API: AI Travel Advisor & Route Generator for Nicaragua
app.post("/api/ai/travel-advisor", async (req, res) => {
  try {
    const { prompt, days, budget, travelStyle, startingPoint, currentDestination } = req.body;

    if (!prompt && !travelStyle) {
      return res.status(400).json({ error: "Se requiere un prompt o preferencias de viaje." });
    }

    const ai = getGeminiClient();

    const systemInstruction = `Eres "Guía Nica AI", un experto guía turístico local y apasionado de Nicaragua (la tierra de lagos y volcanes).
Tu objetivo es ayudar a los viajeros nacionales y extranjeros a planificar rutas, conocer destinos increíbles de Nicaragua, saber exactamente cómo llegar (incluyendo terminales de buses como El Mayoreo, UCA, Roberto Huembes, Israel Lewites, ferrys en San Jorge, lanchas en Bluefields/Río San Juan), calcular presupuestos realistas en Córdobas (NIO C$) y Dólares ($), y brindar recomendaciones culturales, gastronómicas y de seguridad.

Formatea tus respuestas de manera limpia con Markdown, usando emojis relevantes (🌋, 🏖️, 🏛️, 🚌, ☕, 🍲), listas con viñetas, secciones claras (Itinerario sugerido, Cómo llegar y Transporte, Presupuesto estimado, Qué comer, Consejos de lugareño).
Mantén un tono cálido, hospitalario, muy nicaragüense y profesional ("¡Tuani!", "¡A la orden!"). Siempre sé muy preciso con las distancias y tiempos reales de traslado en Nicaragua.`;

    let userQuery = prompt || "";
    if (days || budget || travelStyle || startingPoint) {
      userQuery = `Planifica una ruta turística personalizada en Nicaragua con los siguientes detalles:
- Punto de partida: ${startingPoint || "Managua (Aeropuerto Augusto C. Sandino o Terminal UCA)"}
- Duración: ${days || "3"} días
- Presupuesto / Estilo: ${budget || "Económico/Mochilero"} (${travelStyle || "Aventura y Naturaleza"})
${currentDestination ? `- Destino de especial interés: ${currentDestination}` : ""}
${prompt ? `- Detalles o preguntas adicionales: ${prompt}` : ""}

Por favor proporciona un itinerario día a día detallado, rutas de transporte exactas, costos estimados en C$ y $, paradas gastronómicas imperdibles y consejos prácticos.`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "No se pudo generar la respuesta en este momento.";
    return res.json({ reply });
  } catch (error: any) {
    console.error("Error in /api/ai/travel-advisor:", error);
    return res.status(500).json({
      error: error.message || "Error al procesar la solicitud con Gemini AI",
    });
  }
});

// Start Server with Vite Middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Explora Nicaragua Server running on http://localhost:${PORT}`);
  });
}

startServer();
