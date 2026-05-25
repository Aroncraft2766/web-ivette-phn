# Arquitectura del proyecto — PHN Ivette

## Diagrama de carpetas

```
Web-Ivette-PHN/
│
├── index.html              ← Punto de entrada del sitio
├── catalogo.html           ← Catálogo de experiencias y cosméticos
├── cosmeticos.html         ← Página de productos cosméticos
├── productos.html          ← Página de productos suplementos
├── sobre-mi.html           ← Página cosmética PHN Cosmetics
├── carrito.html            ← Carrito de compras
├── visor.html              ← Visor de catálogo interactivo
├── registro.html           ← Página de registro
├── meredit-bot.html        ← Página standalone del chatbot
│
├── content/
│   ├── content.js          ← SITE_CONTENT: fuente única de verdad (ES + EN)
│   └── contenido.js        ← TEXTO: contenido de sobre-mi.html (cosmética)
│
├── src/
│   ├── core/
│   │   └── renderer.js     ← Construye todo el HTML de index.html desde SITE_CONTENT
│   ├── features/
│   │   ├── meredith-widget.js     ← Chatbot flotante (OpenRouter API)
│   │   ├── catalogo-hotspots.js   ← Coordenadas de productos en el catálogo PDF
│   │   ├── catalogo-map.json      ← Datos auxiliares del catálogo
│   │   └── productos/
│   │       ├── data.js            ← PHN_CATALOG: catálogo completo de productos
│   │       └── gallery-data.js    ← PHN_GALLERY: imágenes de galería por producto
│   └── shared/                    ← Helpers reutilizables (vacío por ahora)
│
├── public/
│   ├── images/
│   │   ├── logos/          ← Logotipos de la marca
│   │   ├── banners/        ← Banners de catalogo.html
│   │   ├── banners-productos/ ← Banners cosméticos
│   │   ├── reseñas/        ← Capturas de reseñas
│   │   ├── preguntas/      ← Imágenes del FAQ slider
│   │   ├── img/            ← Imágenes auxiliares
│   │   ├── productos/
│   │   │   ├── banners/    ← Banners por producto (ficha.html)
│   │   │   └── gallery/    ← Galerías de producto
│   │   └── experiencias/   ← Thumbnails de experiencias (tarjetas del home)
│   ├── icons/
│   │   └── redes/          ← SVG de redes sociales
│   ├── media/              ← Videos MP4 locales
│   └── libros/             ← PDFs y portadas
│
├── styles/
│   ├── tokens.css          ← Variables CSS (colores, tipografía, espaciados)
│   ├── main.css            ← Punto de entrada de estilos
│   └── components/         ← Estilos de componentes (vacío — los estilos viven en renderer.js)
│
├── experiencias/           ← 13 experiencias de compra (NO mover — rutas relativas internas)
│   └── Experiencia N/
│       ├── compra.html     ← Página de compra (carga CSS desde ../../compra/)
│       └── content/
│           ├── content.js  ← Contenido editable de la experiencia
│           └── images/     ← Imágenes de la experiencia (banner, producto)
│
├── compra/                 ← CSS y JS compartidos de páginas de compra (NO mover)
│   ├── css/                ← Estilos del tema (base, componentes, secciones)
│   └── js/                 ← Scripts (jQuery, footer, scripts compartidos)
│
├── productos/              ← (Ficha de producto y archivos de JS migrados a src/)
│   └── ficha.html          ← Página de detalle de producto
│
└── docs/
    └── architecture.md     ← Este archivo
```

## Flujo de renderizado del home (index.html)

```
1. index.html carga content/content.js  →  define window.SITE_CONTENT
2. index.html carga src/core/renderer.js  →  lee SITE_CONTENT, construye DOM
3. index.html carga src/features/meredith-widget.js  →  inyecta chatbot
```

## Flujo de las páginas de experiencia

```
1. experiencias/Experiencia N/compra.html
   └── carga ../../compra/css/*.css         (estilos del tema)
   └── carga ../../compra/js/*.js           (jQuery, scripts)
   └── carga content/content.js             (EXP_CONTENT editable)
   └── define el HTML del producto
```

## Principios de arquitectura

- **Content-driven**: `content/content.js` es la única fuente de verdad. No toques HTML para cambiar contenido.
- **Sin framework**: Vanilla JS, CSS, HTML. Sin npm, sin bundler.
- **Separación limpia**: `src/` = lógica, `content/` = datos, `public/` = assets, `styles/` = estilos.
- **`compra/` y `experiencias/` no se mueven**: tienen rutas relativas internas que las hacen dependientes de su ubicación actual.
