/**
 * PHN — Sección de 4 columnas (calidad / confianza)
 * Aparece al final de cada página de compra y de cada ficha de producto.
 * Edita aquí y el cambio se refleja en todos los lugares automáticamente.
 */
window.PHN_FEATURES = {
  heading: "",

  es: [
    {
      img: "compra/img/QualityByNumber_3_QualityPage_550x.webp",
      title: "Sellado que protege lo que importa",
      text: "Cada crema y gel se envasa en líneas automatizadas con control de higiene estricto. Así, lo que llega a tus manos conserva toda su frescura y pureza desde la fábrica hasta tu piel."
    },
    {
      img: "compra/img/3Pillars1_Sourcing_QualityPage_550x.webp",
      title: "Ingredientes naturales, resultados reales",
      text: "Seleccionamos cada activo por su origen natural y su capacidad de absorción comprobada. Sin rellenos innecesarios: solo lo que tu cuerpo necesita para sentir la diferencia."
    },
    {
      img: "compra/img/SOL_Mag_Quality_TestedEveryTime_Desktop_550x.webp",
      title: "Dosis exacta en cada cápsula",
      text: "Maquinaria de alta precisión mide y dosifica cada cápsula al miligramo. Eso significa que cada toma entrega la cantidad justa de principios activos, sin variaciones."
    },
    {
      img: "compra/img/LookInside1_LabTest6_QualityPage_550x.webp",
      title: "Del laboratorio a tu mesa, sin perder potencia",
      text: "Cada frasco se llena y sella en líneas de producción controladas que eliminan la exposición al aire y la humedad. El producto mantiene su potencia intacta hasta el momento en que lo abres."
    }
  ],

  en: [
    {
      img: "compra/img/QualityByNumber_3_QualityPage_550x.webp",
      title: "Sealed to protect what matters",
      text: "Every cream and gel is packaged on automated lines with strict hygiene controls. What reaches your hands retains its full freshness and purity from the factory to your skin."
    },
    {
      img: "compra/img/3Pillars1_Sourcing_QualityPage_550x.webp",
      title: "Natural ingredients, real results",
      text: "We select each active ingredient for its natural origin and proven absorption capacity. No unnecessary fillers — only what your body needs to feel the difference."
    },
    {
      img: "compra/img/SOL_Mag_Quality_TestedEveryTime_Desktop_550x.webp",
      title: "Exact dose in every capsule",
      text: "High-precision machinery measures and fills each capsule to the milligram. That means every dose delivers the exact amount of active ingredients, without variation."
    },
    {
      img: "compra/img/LookInside1_LabTest6_QualityPage_550x.webp",
      title: "From lab to table, without losing potency",
      text: "Every bottle is filled and sealed on controlled production lines that eliminate exposure to air and moisture. The product keeps its full potency until the moment you open it."
    }
  ],

  // Retrocompatibilidad: items apunta a ES por defecto
  get items() { return this.es; }
};
