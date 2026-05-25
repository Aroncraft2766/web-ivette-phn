# Sitio Web Ivette — PHN Proher Natura

Sitio web de la distribuidora Ivette de **Proher Natura (PHN)**, construido con HTML/CSS/JS vanilla (sin frameworks). Arquitectura *content-driven*: todo el contenido editable vive en `content/content.js`.

## Cómo correr localmente

1. Abre el archivo `index.html` directamente en un navegador, **o**
2. Usa un servidor local para evitar restricciones CORS con archivos PDF:
   ```bash
   # Python
   python -m http.server 8080
   # Node (npx)
   npx serve .
   ```
3. Accede en `http://localhost:8080`

## Cómo editar contenido

**Regla de oro: edita `content/content.js`, nunca toques los archivos HTML ni renderer.js.**

| Qué quieres cambiar | Dónde editarlo |
|---|---|
| Textos, títulos, precios | `content/content.js` |
| Imágenes del hero, experiencias | `content/content.js` → campo `imageUrl` |
| Links de WhatsApp | `content/content.js` → campo `ctaLink` |
| Logo de la marca | `content/content.js` → `navbar.logoUrl` |
| Experiencias del catálogo | `content/content.js` → sección `experiences` |
| Libros y PDFs | `content/content.js` → sección `libros` |
| Preguntas frecuentes | `content/content.js` → sección `faq` |
| Testimonios | `content/content.js` → sección `testimonials` |
| Chatbot Meredith | `src/features/meredith-widget.js` |
| Productos del catálogo | `src/features/productos/data.js` |

## Estructura del proyecto

```
├── index.html              # Página principal
├── content/
│   └── content.js          # Fuente única de verdad del contenido
├── src/
│   ├── core/
│   │   └── renderer.js     # Construye el HTML desde content.js
│   └── features/
│       ├── meredith-widget.js
│       ├── catalogo-hotspots.js
│       └── productos/
│           ├── data.js
│           └── gallery-data.js
├── public/
│   ├── images/             # Imágenes del sitio
│   ├── icons/              # SVG de redes sociales
│   ├── media/              # Videos
│   └── libros/             # PDFs y portadas
├── styles/
│   ├── tokens.css          # Variables CSS (colores, tipografía)
│   └── main.css
└── docs/
    └── architecture.md
```

## Stack

- HTML5, CSS3, JavaScript (ES6+ vanilla)
- Sin frameworks ni bundlers
- Fuentes: Google Fonts (Montserrat, Lato)
- Chatbot: OpenRouter API (widget Meredith)
