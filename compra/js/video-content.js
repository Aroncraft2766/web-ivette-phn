/**
 * video-content.js — Textos de la sección "Nanotecnología PHN™"
 * ─────────────────────────────────────────────────────────────
 * Edita ESTE archivo para cambiar los textos de los 3 videos
 * en TODAS las páginas de compra a la vez.
 *
 * Estructura de cada escena:
 *   heading  → título grande (negrita)
 *   body     → párrafo descriptivo  (deja "" para ocultarlo)
 *   extra    → (opcional) bloque adicional con su propio heading + body
 */
window.PHN_VIDEO_CONTENT = {

  /* ── ESPAÑOL ──────────────────────────────────────────────────────────── */
  es: {
    sectionLabel: "Ciencia que se siente",
    sectionTitle: "Nanotecnología PHN™",
    scenes: [
      {
        heading: "Molido a escala nanométrica",
        body: "Reducimos cada ingrediente a partículas tan finas que atraviesan las barreras del cuerpo sin esfuerzo. No es solo polvo: es ingeniería al servicio de tu salud."
      },
      {
        heading: "Tu cuerpo lo absorbe, no lo desperdicia",
        body: "Al multiplicar la superficie de contacto de cada partícula, los principios activos entran al torrente sanguíneo más rápido y en mayor cantidad. Eso significa que cada cápsula trabaja de verdad, no se pierde en el camino."
      },
      {
        heading: "Llega donde otros suplementos no llegan",
        body: "El polvo ultrafino se dispersa de forma uniforme por todo el organismo y penetra directamente en la célula. Tus tejidos reciben los nutrientes íntegros, con una velocidad y eficacia que los suplementos convencionales simplemente no alcanzan.",
        extra: {
          heading: "Nano-encapsulado exclusivo PHN",
          body: "Nuestro proceso patentado convierte los ingredientes en polvo nanométrico protegido por una microcapa que lo mantiene estable hasta el momento exacto de la absorción. El resultado: más potencia real con menos cantidad."
        }
      }
    ]
  },

  /* ── INGLÉS ───────────────────────────────────────────────────────────── */
  en: {
    sectionLabel: "Science you can feel",
    sectionTitle: "PHN Nanotechnology™",
    scenes: [
      {
        heading: "Nanometric-scale milling",
        body: "We reduce every ingredient to particles so fine they pass through the body's barriers effortlessly. It's not just powder — it's engineering in the service of your health."
      },
      {
        heading: "Your body absorbs it, not wastes it",
        body: "By multiplying each particle's contact surface, active compounds enter the bloodstream faster and in greater amounts. That means every capsule actually works instead of being lost along the way."
      },
      {
        heading: "Reaches where other supplements can't",
        body: "The ultra-fine powder disperses evenly throughout your body and penetrates directly into the cell. Your tissues receive nutrients intact — with a speed and efficacy that conventional supplements simply can't match.",
        extra: {
          heading: "PHN exclusive nano-encapsulation",
          body: "Our patented process converts ingredients into nanometric powder shielded by a micro-layer that keeps it stable until the exact moment of absorption. The result: more real potency with less quantity."
        }
      }
    ]
  }
};
