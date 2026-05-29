/**
 * PHN — Galería de imágenes por producto
 *
 * Para cada clave agrega hasta 4 rutas de imagen (relativas a productos/).
 * Las carpetas ya existen en productos/gallery/<nombre-producto>/
 *
 * Ejemplo:
 *   'RGC-16': [
 *     '../public/images/productos/gallery/RGC-16/1.webp',
 *     '../public/images/productos/gallery/RGC-16/2.webp',
 *     '../public/images/productos/gallery/RGC-16/3.webp',
 *     '../public/images/productos/gallery/RGC-16/4.webp',
 *   ],
 *
 * Si el array está vacío la galería no se muestra y sólo aparece
 * la imagen principal definida en data.js.
 *
 * Claves con espacio/barra en el nombre usan la carpeta equivalente:
 *   'COLAGENO 80/20' → gallery/COLAGENO 80-20/
 *   'COLAGENO 50/50' → gallery/COLAGENO 50-50/
 */
const PHN_GALLERY = {
  'F.VIT-90': [
    '../public/images/productos/gallery/F.VIT-90/ECOMMERCE F.VIT 31776271266.webp',
    '../public/images/productos/gallery/F.VIT-90/ECOMMERCE F.VIT 41776271266.webp',
    '../public/images/productos/gallery/F.VIT-90/ECOMMERCE F.VIT 51776271266.webp',
  ],
  'H-9': [
    '../public/images/productos/gallery/H-9/PHN_H9_021776270743.webp',
    '../public/images/productos/gallery/H-9/PHN_H9_31776270739.webp',
  ],
  'G-6': [
    '../public/images/productos/gallery/G-6/PHN_G6_021776270742.webp',
  ],
  'D-7': [
    '../public/images/productos/gallery/D-7/PHN_D7_021776270739.webp',
    '../public/images/productos/gallery/D-7/PHN_D7_031776270740.webp',
  ],
  'OV-12': [
    '../public/images/productos/gallery/OV-12/PHN_OV12_21776270746.webp',
    '../public/images/productos/gallery/OV-12/PHN_OV12_31776270747.webp',
  ],
  'A-10': [
    '../public/images/productos/gallery/A-10/PHN_A10_021776216958.webp',
    '../public/images/productos/gallery/A-10/PHN_A10_031776216959.webp',
  ],
  'VC-1': [
    '../public/images/productos/gallery/VC-1/PHN_VC1_021776270756.webp',
    '../public/images/productos/gallery/VC-1/PHN_VC1_031776270757.webp',
  ],
  'EUK-7': [
    '../public/images/productos/gallery/EUK-7/PHN_EUK7_021776270758.webp',
    '../public/images/productos/gallery/EUK-7/PHN_EUK7_031776270759.webp',
  ],
  'N-7': [
    '../public/images/productos/gallery/N-7/PHN_N7_021776270744.webp',
    '../public/images/productos/gallery/N-7/PHN_N7_031776270745.webp',
  ],
  'DB-6':           [],
  'R-12': [
    '../public/images/productos/gallery/R-12/PHN_R17_021776270752.webp',
    '../public/images/productos/gallery/R-12/PHN_R17_031776270753.webp',
  ],
  'CR-7': [
    '../public/images/productos/gallery/CR-7/PHN_CR7_021776270750.webp',
    '../public/images/productos/gallery/CR-7/PHN_CR7_031776270751.webp',
  ],
  'FIBRA': [
    '../public/images/productos/gallery/FIBRA/PHN_FVIT_051776270761.webp',
    '../public/images/productos/gallery/FIBRA/PHN_FVIT_061776270762.webp',
  ],
  'LH': [
    '../public/images/productos/gallery/LH/ECOMMERCE F.VIT LH 31776271268.webp',
    '../public/images/productos/gallery/LH/ECOMMERCE F.VIT LH 41776271268.webp',
    '../public/images/productos/gallery/LH/ECOMMERCE F.VIT LH 51776271268.webp',
  ],
  'RGC-16': [
    '../public/images/productos/gallery/RGC-16/PHN_RC6_021776272940.webp',
  ],
  'F.VIT-GEL': [
    '../public/images/productos/gallery/F.VIT-GEL/ECOMMERCE F.VIT GEL 31776271268.webp',
    '../public/images/productos/gallery/F.VIT-GEL/ECOMMERCE F.VIT GEL 41776271268.webp',
  ],
  'AVI-13': [
    '../public/images/productos/gallery/AVI-13/PHN_AVI_13_031776217410.webp',
  ],
  'F.VIT 6':        [],
  'VR-4': [
    '../public/images/productos/gallery/VR-4/PHN_VR4_021776270755.webp',
    '../public/images/productos/gallery/VR-4/PHN_VR4_031776270749.webp',
  ],
  'VR-4 GEL': [
    '../public/images/productos/gallery/VR-4 GEL/ECOMMERCE VR4 CREMA 31776271270.webp',
    '../public/images/productos/gallery/VR-4 GEL/ECOMMERCE VR4 CREMA 41776271270.webp',
  ],
  'DB-6 CREMA': [
    '../public/images/productos/gallery/DB-6 CREMA/ECOMMERCE DB6 CREMA 31776271266.webp',
    '../public/images/productos/gallery/DB-6 CREMA/ECOMMERCE DB6 CREMA 41776271266.webp',
  ],
  'KIT F. VIT MAX': [
    '../public/images/productos/gallery/KIT F. VIT MAX/ECOMMERCE F.VIT MAX 31776271269.webp',
    '../public/images/productos/gallery/KIT F. VIT MAX/ECOMMERCE F.VIT MAX 41776271269.webp',
    '../public/images/productos/gallery/KIT F. VIT MAX/ECOMMERCE F.VIT MAX 51776271269.webp',
  ],
  'HERGY SX': [
    '../public/images/productos/gallery/HERGY SX/ECOMMERCE HERGY SX 31776271269.webp',
    '../public/images/productos/gallery/HERGY SX/ECOMMERCE HERGY SX 41776271269.webp',
    '../public/images/productos/gallery/HERGY SX/ECOMMERCE HERGY SX 51776271269.webp',
  ],
  'COLAGENO': [
    '../public/images/productos/gallery/COLAGENO/ECOMMERCE CLGN 31776218139.webp',
    '../public/images/productos/gallery/COLAGENO/ECOMMERCE CLGN 41776218139.webp',
    '../public/images/productos/gallery/COLAGENO/ECOMMERCE CLGN 51776271264.webp',
  ],
  'MINERALES': [
    '../public/images/productos/gallery/MINERALES/ECOMMERCE F.VIT CM 31776271267.webp',
    '../public/images/productos/gallery/MINERALES/ECOMMERCE F.VIT CM 41776271267.webp',
    '../public/images/productos/gallery/MINERALES/ECOMMERCE F.VIT CM 51776271267.webp',
  ],
  'COLAGENO 80/20': [
    '../public/images/productos/gallery/COLAGENO 80-20/ECOMMERCE CLGQDIA 31776271265.webp',
    '../public/images/productos/gallery/COLAGENO 80-20/ECOMMERCE CLGQDIA 41776271265.webp',
  ],
  'COLAGENO 50/50': [
    '../public/images/productos/gallery/COLAGENO 50-50/ECOMMERCE CLGQNOCHE 31776271265.webp',
    '../public/images/productos/gallery/COLAGENO 50-50/ECOMMERCE CLGQNOCHE 41776271265.webp',
  ],
  'MASCARILLA': [
    '../public/images/productos/gallery/MASCARILLA/ECOMMERCE PGMT20 31776271270.webp',
    '../public/images/productos/gallery/MASCARILLA/ECOMMERCE PGMT20 41776271270.webp',
  ],
};
