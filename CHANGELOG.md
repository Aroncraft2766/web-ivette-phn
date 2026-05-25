# CHANGELOG

## [1.0.0] — 2026-05-13

### Restructuración profesional del proyecto

- Reorganización a estructura estándar: `src/`, `content/`, `public/`, `styles/`, `docs/`
- `content.js` → `content/content.js` (fuente única de verdad del contenido)
- `renderer.js` → `src/core/renderer.js`
- `meredith-widget.js` → `src/features/meredith-widget.js`
- `contenido.js` → `content/contenido.js`
- `catalogo-hotspots.js` → `src/features/catalogo-hotspots.js`
- `productos/data.js` → `src/features/productos/data.js`
- `productos/gallery-data.js` → `src/features/productos/gallery-data.js`
- Assets de `assets/`, `reseñas/`, `Preguntas/`, `img/`, `banners/`, `animacion/`, `libros/` → `public/`
- Creación de `styles/tokens.css` con variables de diseño extraídas del CSS existente
- Creación de documentación: `README.md`, `CLAUDE.md`, `docs/architecture.md`
- Actualización de todas las referencias de rutas en HTML y JS
