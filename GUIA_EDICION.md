# Guía de edición — Dónde modificar cada cosa (con líneas exactas)

> **Regla de oro:** nunca edites HTML directamente para cambiar textos o imágenes.
> Todo el contenido editable vive en archivos `content.js`.

---

## 1. PÁGINA PRINCIPAL — `content.js` (raíz)

| Qué cambiar | Línea | Campo |
|---|---|---|
| Título de la pestaña del navegador | 10 | `meta.title` |
| Descripción SEO | 11 | `meta.description` |
| Favicon | 12 | `meta.faviconUrl` |
| Logo del navbar (imagen) | 17 | `navbar.logoUrl` |
| Adónde lleva el logo al hacer clic | 18 | `navbar.logoLink` |
| Links del menú de navegación | 20–25 | `navbar.links[]` |
| Texto botón "Habla con Meredit IA" | 26 | `navbar.loginText` |
| Enlace botón Meredit | 27 | `navbar.loginHref` |
| Título principal hero (línea 1) | 32 | `hero.titleLine1` |
| Título principal hero (línea 2) | 33 | `hero.titleLine2` |
| Subtítulo hero | 34 | `hero.subtitle` |
| Texto botón CTA hero | 35 | `hero.ctaText` |
| Enlace botón CTA hero (WhatsApp) | 36 | `hero.ctaLink` |
| Título sección testimonios | 41 | `testimonials.heading` |
| Avatar de los testimonios | 42 | `testimonials.avatarUrl` |
| Texto / autor de cada testimonio | 45–75 | `testimonials.items[]` |
| Título sección experiencias | 81 | `experiences.heading` |
| Título de cada experiencia (tarjeta) | ~84, 102, 119… | `experiences.items[N].title` |
| Imagen de cada experiencia (tarjeta) | ~85, 103, 120… | `experiences.items[N].imageUrl` |
| Texto botón "Comprar" de cada tarjeta | ~86, 104, 121… | `experiences.items[N].ctaText` |
| Enlace de cada tarjeta de experiencia | ~87, 105, 122… | `experiences.items[N].ctaLink` |
| Descripción larga de cada experiencia | ~88, 106, 123… | `experiences.items[N].description` |
| Lista "incluye" de cada experiencia | ~89–99, 107–117… | `experiences.items[N].includes[]` |
| Libros descargables (título, imagen, PDF) | 318–337 | `libros` |
| Número de WhatsApp de contacto | 341 | `contacto.whatsapp` |
| Correo de contacto | 342 | `contacto.email` |
| ID de Formspree (formulario) | 343 | `contacto.formspreeId` |
| Preguntas frecuentes | 349–387 | `faq.items[]` |
| Textos fijos del renderer (botones, labels) | 389–437 | `ui` |

> **Nota sobre `description`:** Usa `\n\n` dentro de la cadena para separar párrafos.
> Nunca uses saltos de línea reales (Enter) dentro de las comillas.

---

## 2. PÁGINAS DE COMPRA — `experiencias/Experiencia X/content/content.js`

Cada experiencia tiene su propio archivo. La estructura es idéntica en todas.

### Experiencia 1 — `experiencias/Experiencia 1/content/content.js`

| Qué cambiar | Línea | Campo |
|---|---|---|
| Título de pestaña | 10 | `pageTitle` |
| Imagen del banner superior | 16 | `banner.imageUrl` |
| Texto alt del banner | 17 | `banner.imageAlt` |
| Título superpuesto al banner | 18 | `banner.overlayTitle` |
| Subtítulo superpuesto al banner | 19 | `banner.overlaySubtitle` |
| Nombre de la experiencia | 24 | `product.title` |
| Precio | 25 | `product.price` |
| Etiqueta (ej. "3 meses") | 26 | `product.badge` |
| Imagen principal del producto | 30 | `product.imageUrl` |
| Imagen de respaldo | 31 | `product.imageFallback` |
| Descripción corta (gancho) | 34–35 | `product.shortDescription` |
| Descripción larga (detalle) | 36–37 | `product.fullDescription` |
| Lista "incluye" | 38–48 | `product.includes[]` |
| Opciones de cantidad y mensajes WA | 53–59 | `quantities[]` |
| Número de WhatsApp destino | 62 | `whatsappNumber` |
| Texto del botón comprar | 65 | `buyButtonText` |
| Ícono WhatsApp en botón (true/false) | 66 | `buyButtonIcon` |
| Link "Volver al inicio" | 69 | `backLink` |
| Texto "Volver al inicio" | 70 | `backText` |
| Logo (imagen) | 73 | `logoUrl` |
| Logo (adónde lleva) | 74 | `logoLink` |
| Productos mostrados en la página | 78–84 | `products[]` |

### Experiencias 2–15 — misma estructura, mismo orden de líneas

La variable se llama `EXP_CONTENT` en todas (excepto Exp 1 que usa `EXP1_CONTENT`).
Los números de línea son prácticamente idénticos en todas las experiencias.

---

## 3. CATÁLOGO DE PRODUCTOS — `productos/data.js`

Archivo de **solo lectura** para contenido. Contiene `const PHN_CATALOG` con todos los productos.
Cada clave (ej. `'RGC-16'`, `'LH'`) debe coincidir con el campo `key` en `products[]` de cada experiencia.

Campos disponibles por producto: `nombre`, `descripcion`, `ingredientes`, `uso`,
`presentacion`, `dosis`, `contraindicaciones`, `almacenamiento`, `img`, `beneficios`.

---

## 4. DISEÑO Y ESTILOS

| Qué cambiar | Archivo | Dónde |
|---|---|---|
| Color verde de botones (`#70B62F`) | `renderer.js` | Busca `#70B62F` |
| Hover verde (`#5a9424`) | `renderer.js` | Busca `#5a9424` |
| Tipografía global (Montserrat) | `renderer.js` | Línea ~44 |
| Estilos base página de compra | `compra/css/base.css` | Todo el archivo |
| Animación slider móvil | `compra/css/component-slider-fading.css` | Línea 1 + apéndice |
| Animación video fijo desktop | `compra/css/section-fixed-video-campaign-lipo.css` | Línea 1 |
| Botones slider de imágenes | `compra/css/component-slider.css` | Línea 1 |
| Componente acordeón | `compra/css/component-accordion.css` | Línea 1 |

---

## 5. JAVASCRIPT

| Qué hace | Archivo | Líneas |
|---|---|---|
| Construye toda la página principal desde `content.js` | `renderer.js` | Todo el archivo |
| **Textos de los 3 videos (todas las páginas de compra)** | **`compra/js/video-content.js`** | **Todo el archivo** |
| Slider móvil, botón traducir, orden del carrito | `compra/js/scripts.js` | Final del archivo |
| Scroll fijo de videos desktop (Nanotecnología) | `experiencias/Experiencia X/compra.html` | ~645–740 |
| Galería de imágenes del producto | `compra/js/media-gallery.js` | Todo el archivo |
| Formulario del producto | `compra/js/product-form.js` | Todo el archivo |

### Cómo editar los textos de los videos (todas las páginas a la vez)

Edita `compra/js/video-content.js`. Hay dos bloques: `es` (español) y `en` (inglés).
Cada bloque tiene `sectionLabel`, `sectionTitle` y un array `scenes[]` con 3 escenas.

```js
// Escena 1 — video "capsula 1.mp4"
{ heading: "Ultra-molido de precisión", body: "" }

// Escena 2 — video "capsula 2.mp4"
{ heading: "Biodisponibilidad superior", body: "Párrafo..." }

// Escena 3 — video "capsula 3.mp4"
{ heading: "Fusión celular avanzada", body: "Párrafo...",
  extra: { heading: "Nano-encapsulado PHN", body: "Párrafo..." } }
```

### Botón de traducción (EN/ES)

El botón "EN" aparece automáticamente en el navbar de todas las páginas de compra.
Al hacer clic alterna entre español e inglés, actualizando los textos del video y los botones de la UI.
Para agregar traducción del contenido del producto (título, descripción, lista) agrega un objeto `product_en` en el `content/content.js` de cada experiencia — el sistema lo detecta automáticamente.

---

## 6. ARCHIVOS QUE NUNCA SE EDITAN

| Archivo | Por qué no |
|---|---|
| `renderer.js` | Lógica del renderer — cambiar texto aquí rompe la separación contenido/estructura |
| `index.html` | Estructura base — el contenido lo inyecta renderer.js |
| `experiencias/Experiencia X/compra.html` | Idéntico en las 13 exp. — cambios van en `content/content.js` |
| `productos/data.js` | Catálogo técnico — solo lectura desde el resto del código |
| `compra/js/jquery-3.5.1.min.js` | Librería externa |
| `Solaray_files/` | Recursos de terceros (Shopify) |

---

## 7. VIDEOS DE LA SECCIÓN "NANOTECNOLOGÍA PHN"

Los tres videos se cargan desde la carpeta `/animacion/`:

| Video | Archivo | Escena |
|---|---|---|
| Cápsula 1 | `animacion/capsula 1.mp4` | "Ultra-molido de precisión" |
| Cápsula 2 | `animacion/capsula 2.mp4` | "Biodisponibilidad superior" |
| Cápsula 3 | `animacion/capsula 3.mp4` | "Fusión celular avanzada" |

Para reemplazar un video: sube el nuevo archivo con el mismo nombre a `/animacion/`.
Para cambiar los textos que acompañan los videos: edita directamente el `compra.html`
de cada experiencia (es la excepción a la regla, ya que estos textos están en el HTML).

---

## 8. IMÁGENES DE PRODUCTOS

Guardadas en `productos/imagen1.webp` … `imagen31.webp`.
Para saber cuál imagen corresponde a qué producto, revisa el campo `img` dentro de `PHN_CATALOG` en `productos/data.js`.

---

## 9. ESTRUCTURA RÁPIDA DE CARPETAS

```
pagina distribuidora PHN/
├── content.js              ← EDITA AQUÍ (página principal)
├── renderer.js             ← No tocar
├── index.html              ← No tocar
├── GUIA_EDICION.md         ← Este archivo
├── CLAUDE.md               ← Guía para IA
├── animacion/              ← Videos mp4 (capsula 1-3)
├── assets/logos/           ← Logos PNG/WEBP
├── compra/
│   ├── css/                ← Hojas de estilo de páginas de compra
│   └── js/                 ← Scripts de páginas de compra
├── experiencias/
│   └── Experiencia X/
│       ├── compra.html     ← No tocar
│       ├── imagen.webp     ← Imagen de la tarjeta (página principal)
│       └── content/
│           └── content.js  ← EDITA AQUÍ (página de compra)
├── productos/
│   ├── data.js             ← Catálogo (solo lectura)
│   └── imagen*.webp        ← Fotos de productos
└── libros/                 ← PDFs descargables
```
