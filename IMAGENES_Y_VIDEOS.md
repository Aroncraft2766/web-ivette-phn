# Dónde cambiar imágenes y videos

---

## VIDEOS — renderer.js

Los videos del fondo del hero están en **`renderer.js`** (estos son los únicos que NO están en content.js):

| Línea | Archivo | Qué cambia |
|-------|---------|------------|
| **444** | `renderer.js` | Video en **móvil** (`assets/movil.mp4`) |
| **445** | `renderer.js` | Video en **escritorio/desktop** (`assets/video3.mp4`) |

### Cómo cambiar el video:
Abre `renderer.js`, ve a la línea 444 o 445 y reemplaza la ruta del archivo:
```html
<!-- Línea 444 — móvil -->
<source src="assets/NUEVO_VIDEO_MOVIL.mp4" media="(max-width: 900px)" type="video/mp4" />

<!-- Línea 445 — desktop -->
<source src="assets/NUEVO_VIDEO_DESKTOP.mp4" type="video/mp4" />
```
Puedes poner la ruta de un archivo local (ej. `assets/mi-video.mp4`) o una URL externa.

---

## IMÁGENES — content.js

Todas las imágenes se cambian en **`content.js`**:

| Línea | Sección | Qué imagen es |
|-------|---------|---------------|
| **17**  | `navbar` → `logoUrl` | Logo del menú de navegación |
| **42**  | `testimonials` → `avatarUrl` | Avatar/foto de todos los testimonios |
| **85**  | `experiences` → item 1 → `imageUrl` | Imagen de "Experiencia Baja a tu Figura Vital" |
| **103** | `experiences` → item 2 → `imageUrl` | Imagen de "Experiencia Artis" |
| **120** | `experiences` → item 3 → `imageUrl` | Imagen de "Experiencia Armonización Facial" |
| **137** | `experiences` → item 4 → `imageUrl` | Imagen de "Experiencia Baja de Edad Corporal" |
| **167** | `faq` → `imageUrl` | Imagen de la sección Preguntas Frecuentes |

### Cómo cambiar una imagen:
Abre `content.js`, busca la línea indicada y cambia la ruta o URL:
```js
// Ejemplo: cambiar imagen de la Experiencia 1 (línea 85)
imageUrl: "Experiencia 1/nueva-imagen.webp",
// o con URL externa:
imageUrl: "https://ejemplo.com/mi-imagen.jpg",
```

---

## Resumen rápido

- **Videos** → editar `renderer.js` líneas 444–445
- **Imágenes** → editar `content.js` en las líneas de la tabla de arriba
