# Guía de edición de contenido — Página PHN

Todo el contenido editable vive en `content/content.js`.  
`src/core/renderer.js` lee ese archivo y construye el HTML de la página principal.  
Cada página de compra tiene su propio `experiencias/Experiencia X/content/content.js`.  
**Nunca edites HTML directamente para cambiar textos, imágenes o links.**

---

## Archivos del proyecto

| Archivo | Qué contiene | ¿Se edita? |
|---|---|---|
| `content/content.js` | Contenido de la página principal (experiencias, testimonios, FAQ, navbar…) | ✅ Sí |
| `src/core/renderer.js` | Construye el HTML desde `content.js` | ❌ No tocar |
| `index.html` | Estructura base de la página principal | ❌ No tocar |
| `experiencias/Experiencia X/content/content.js` | Contenido de cada página de compra | ✅ Sí |
| `experiencias/Experiencia X/compra.html` | Estructura de la página de compra (igual en las 13) | ❌ No tocar |
| `src/features/productos/data.js` | Catálogo técnico de productos (`const PHN_CATALOG`) | ❌ Solo lectura |
| `src/features/productos/gallery-data.js` | Rutas de galería por producto (hasta 4 imágenes c/u, `const PHN_GALLERY`) | ✅ Sí — agregar rutas de imagen |
| `public/images/productos/gallery/<clave>/` | Carpetas donde se suben las imágenes de galería de cada producto | ✅ Subir imágenes aquí |
| `public/images/banners/` | Imágenes de banner para `catalogo.html` | ✅ Subir imágenes aquí |
| `public/images/productos/banners/` | Banners por producto para `ficha.html`. Se asignan en `data.js` campo `banners[]`. Cosméticos: sin persona primero, con persona después | ✅ Subir imágenes aquí |
| `CLAUDE.md` | Esta guía | ✅ **Actualizar siempre** que se agregue un archivo, cambie una regla de edición o se introduzca un nuevo patrón |
| `compra/js/video-content.js` | Textos de los 3 videos en todas las páginas de compra (ES + EN) | ✅ Sí |
| `compra/js/translations.js` | Traducciones al inglés de todas las páginas de compra (título, descripción, lista) | ✅ Sí |
| `compra/js/scripts.js` | Lógica compartida: slider móvil, botón traducir, orden del carrito | ⚠️ Solo al final del archivo |
| `compra/js/footer.js` | Footer completo compartido. Se carga con `<script data-root="../../">` en compra.html y `<script data-root="">` en raíz | ✅ Sí — editar datos directamente en el objeto `data` |
| `catalogo.html` | Landing de catálogo con 2 banners: Productos y Cosméticos | ✅ Sí — editar banners, títulos |
| `cosmeticos.html` | Página de productos cosméticos (VR-4 GEL, DB-6 CREMA, COLAGENO 80/20, COLAGENO 50/50, MASCARILLA) | ⚠️ Misma estructura que `productos.html` |
| `src/features/meredith-widget.js` | Bot Meredith — se inyecta en cualquier página con `<script src="src/features/meredith-widget.js" data-root="" defer>`. Llama a `/api/chat` (nunca directamente a OpenRouter) | ✅ Sí — editar prompt, catálogo, comportamiento |
| `src/features/catalogo-hotspots.js` | Coordenadas de hotspots de productos en páginas del catálogo PDF (visor.html). `{ x, y, w, h }` en % | ✅ Sí — agregar/ajustar posiciones |
| `api/chat.js` | Función serverless Vercel que hace de proxy a OpenRouter. **La API key vive solo aquí como variable de entorno `OPENROUTER_API_KEY`**. Nunca hardcodear la key en el frontend. | ❌ No tocar salvo cambio de modelo o límites |
| `vercel.json` | Configuración de despliegue Vercel: headers de seguridad (X-Frame-Options, nosniff, Referrer-Policy) | ❌ No tocar |

### Experiencias existentes

| Carpeta | Nombre | Productos |
|---|---|---|
| Experiencia 1 | Baja a tu Figura Vital | KIT F. VIT MAX, F.VIT-90, F.VIT 6, LH |
| Experiencia 2 | Artis (articulaciones) | RGC-16, A-10, D-7, VC-1 |
| Experiencia 3 | Armonización Facial | RGC-16, D-7, R-12, COLAGENO |
| Experiencia 4 | Baja de Edad Corporal | RGC-16, D-7 |
| Experiencia 5 | Limpieza Hepática | LH, H-9 |
| Experiencia 7 | Depura (colesterol) | RGC-16, LH, VC-1, D-7, H-9 |
| Experiencia 8 | Equilibrio Íntimo Femenino | RGC-16, D-7, VC-1, OV-12 |
| Experiencia 9 | Respiración Vital | EUK-7, VC-1 |
| Experiencia 10 | Confort Gastro (gastritis) | LH, FIBRA, G-6 |
| Experiencia 11 | Bienestar Metabólico (colon) | FIBRA, LH |
| Experiencia 12 | Salud Integral Familiar | RGC-16, VC-1, N-7 |
| Experiencia 14 | Piernas Tonificadas (várices) | VR-4, VR-4 GEL |
| Experiencia 15 | Tranquilidad Natural Mental | RGC-16, CR-7, N-7 |

---

## Estructura de `content.js` (página principal)

```
SITE_CONTENT
├── meta          → título de pestaña y descripción SEO
├── navbar        → logo, links del menú
├── hero          → sección principal (título, subtítulo, botón CTA, fondo imagen o video)
├── testimonials  → carousel de testimonios (avatarUrl + items[])
├── experiences   → tarjetas de experiencias (heading + items[])
├── libros        → sección de libros descargables
├── contacto      → WhatsApp, correo, Formspree ID
├── faq           → preguntas frecuentes (items[])
└── ui            → textos fijos del renderer
```

### Cambiar el fondo del hero (imagen o video)

Edita `hero` en `content.js`:

```js
hero: {
  // ...
  mediaType: "image",               // "image" → muestra img | "video" → muestra video
  imageUrl:  "assets/imagen1.webp", // ruta usada cuando mediaType === "image"
},
```

- `mediaType: "image"` → el renderer muestra `<img class="hero-bg">` con `imageUrl`.
- `mediaType: "video"` (o si falta la propiedad) → muestra el `<video>` con `assets/video3.mp4`.
- `renderer.js` líneas ~503-509 contienen la lógica condicional.

---

### Cambiar descripción o lista de una experiencia (página principal)

Edita el objeto correspondiente dentro de `experiences.items[]`:

```js
experiences: {
  items: [
    {
      title:       "EXPERIENCIA BAJA A TU FIGURA VITAL",
      imageUrl:    "experiencias/Experiencia 1/imagen.webp",
      ctaText:     "Comprar",
      ctaLink:     "experiencias/Experiencia 1/compra.html",
      description: "Texto largo de la experiencia...",
      includes: [
        "Plan de alimentación para 3 meses",
        "Jugos, tés e infusiones...",
        // ...
      ],
    },
    // ... más experiencias
  ],
},
```

> **Importante:** `description` usa `\n\n` (escape JS) para separar párrafos, NO saltos de línea reales.

### Cambiar un testimonio

```js
testimonials: {
  avatarUrl: "assets/logos/Logo PHN.png",  // avatar compartido
  items: [
    { text: "Texto del testimonio.", author: "Nombre Apellido" },
  ],
},
```

### Cambiar navbar / logo

```js
navbar: {
  logoUrl:  "assets/logos/Logo PHN.webp",
  logoLink: "index.html",
  links: [
    { text: "Inicio",              href: "index.html" },
    { text: "Compra tu experiencia", href: "#section-experiences" },
    { text: "Productos",           href: "productos.html" },
    { text: "Preguntas",           href: "#section-faq" },
    { text: "Contacto",            href: "#section-contacto" },
  ],
},
```

### Cambiar datos de contacto

```js
contacto: {
  whatsapp:  "5215540339970",              // código país + número, sin + ni espacios
  email:     "prohernatura.contacto@gmail.com",
  formspreeId: "XXXXXXXX",               // ID de Formspree (formspree.io)
},
```

---

## Estructura de cada `experiencias/Experiencia X/content/content.js`

```
EXP_CONTENT  (o EXP1_CONTENT en Experiencia 1)
├── pageTitle          → título de la pestaña
├── banner             → imagen de cabecera (imageUrl, imageAlt, overlayTitle, overlaySubtitle)
├── product
│   ├── title          → nombre de la experiencia
│   ├── price          → precio (deja "" para ocultar)
│   ├── badge          → etiqueta pequeña (ej. "3 meses")
│   ├── imageUrl       → imagen principal del producto
│   ├── imageFallback  → imagen de respaldo si imageUrl no existe
│   ├── shortDescription → párrafo corto (hook)
│   ├── fullDescription  → descripción larga con párrafos separados por \n\n
│   └── includes[]     → lista de qué incluye la experiencia
├── quantities[]       → opciones de cantidad con mensaje de WhatsApp
├── whatsappNumber     → número destino (formato: 52XXXXXXXXXX)
├── buyButtonText      → texto del botón comprar
├── buyButtonIcon      → true/false muestra ícono de WhatsApp
├── backLink / backText → link y texto del botón "Volver al inicio"
├── logoUrl / logoLink / logoAlt → branding
└── products[]         → productos individuales mostrados en la página
                         { key, nombre, img }  — key debe coincidir con PHN_CATALOG
```

### Cambiar precio o duración de una experiencia

```js
product: {
  price: "$350",      // deja "" para ocultar
  badge: "3 meses",  // etiqueta junto al título
},
```

### Cambiar la descripción de una experiencia (página de compra)

```js
product: {
  shortDescription: "Párrafo de enganche visible al inicio.",
  fullDescription:  "Párrafo 1...\n\nPárrafo 2...\n\nPárrafo 3...",
  //                 ↑ usa \n\n para separar párrafos, NO saltos de línea reales
},
```

### Cambiar los productos individuales que aparecen en la página de compra

```js
products: [
  { key: 'RGC-16', nombre: 'RGC16 1L',  img: '../../productos/imagen15.webp' },
  { key: 'LH',     nombre: 'F.VIT LH',  img: '../../productos/imagen14.webp' },
],
// El campo key debe existir en productos/data.js (const PHN_CATALOG)
```

### Cambiar la imagen del producto

Todas las experiencias (2–15) usan la imagen de Experiencia 1:

```js
imageUrl: "../Experiencia 1/content/images/producto.webp",
```

Experiencia 1 usa su propia imagen:

```js
imageUrl: "content/images/producto.webp",
```

---

## Galería de imágenes por producto (`productos/gallery-data.js`)

Cada producto puede tener hasta 4 imágenes adicionales que aparecen como miniaturas en `ficha.html`.

### Flujo para agregar imágenes

1. Sube las imágenes a `productos/gallery/<clave-producto>/` (ej. `gallery/RGC-16/1.webp`).
2. Agrega las rutas en `gallery-data.js`:

```js
'RGC-16': [
  'gallery/RGC-16/1.webp',
  'gallery/RGC-16/2.webp',
  'gallery/RGC-16/3.webp',
  'gallery/RGC-16/4.webp',
],
```

- Las rutas son **relativas a `productos/`**.
- Si el array está vacío `[]`, no se muestra la fila de miniaturas.
- La primera imagen del array reemplaza la imagen principal al cargar la página.
- Claves con barra (`/`) usan carpeta con guión: `COLAGENO 80/20` → `gallery/COLAGENO 80-20/`.

---

## Catálogo de productos (`productos/data.js`)

El archivo exporta `const PHN_CATALOG` (no en `window`). Para acceder desde otro script:

```js
const info = (typeof PHN_CATALOG !== 'undefined' && PHN_CATALOG[prod.key]) || {};
```

Campos disponibles por producto: `nombre`, `descripcion`, `ingredientes`, `uso`,
`presentacion`, `dosis`, `contraindicaciones`, `almacenamiento`, `img`, `beneficios`,
`propiedades` (texto comercial que vende), `beneficiosList` (array de beneficios para lista visual en ficha.html).

---

## Diseño y estilos

- **Color principal de botones:** `#70B62F` (verde PHN), hover: `#5a9424`
- **Tipografía:** Montserrat (Google Fonts, aplicada con `!important` en compra.html)
- **Modales de producto:** click en producto → modal pantalla completa con imagen + info técnica del catálogo
- **Tema claro/oscuro:** default siempre claro. El botón `🌙` en el navbar alterna modo oscuro; la preferencia se guarda en `localStorage` con clave `phn-theme` (`"light"` / `"dark"`). Los estilos oscuros viven en `renderer.js` bajo `html.dark *`. El botón está en el `<div id="div_block-69-16289">` del navbar.

---

## Reglas importantes

1. `fullDescription` y `description` usan `\n\n` como escape JS para separar párrafos. Si escribes saltos de línea reales dentro de un string entre comillas dobles, el JS se rompe.
2. Para editar las 13 `compra.html` en bulk, usa scripts Python con reemplazo exacto de cadenas (cuidado: los archivos usan tabulaciones, no espacios).
3. `const PHN_CATALOG` en `data.js` no se adjunta a `window` — siempre usa `typeof` antes de referenciarlo.
4. No modifiques `renderer.js` para cambiar textos; todo va en `content.js`.
