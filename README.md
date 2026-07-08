# 🖥️ Plataforma Interactiva de Diapositivas: Laboratorio Oficina Virtual

¡Bienvenido al repositorio oficial del proyecto! Esta aplicación web interactiva fue diseñada utilizando **React**, **Vite**, **JavaScript**, **HTML5** y **CSS3**, adoptando los principios de diseño de **Microsoft Fluent** para ofrecer una experiencia corporativa visualmente pulcra, ágil y moderna.

El propósito principal de esta aplicación es servir como soporte dinámico y profesional para la exposición técnica sobre la implementación de una **Infraestructura de Oficina Virtual**.

---

## 🚀 Enlaces del Proyecto

*   **🌐 Aplicación Desplegada (Vercel):** [https://diapo-pos-ang.vercel.app/](https://diapo-pos-ang.vercel.app/)[cite: 17]
*   **📦 Repositorio Oficial (GitHub):** [https://github.com/AnglerPosada-30/DiapoPosAng.git](https://github.com/AnglerPosada-30/DiapoPosAng.git)[cite: 17]
*   **📄 Material de Apoyo Unificado:** [Manual Completo en Google Docs](https://docs.google.com/document/d/1Rbci8cnw-15cxpqyZS4J1SduGV8FH7InQMSSEpjFBhU/edit?usp=drive_web)[cite: 17]

---

## 🎨 Estructura Visual y Filosofía de Diseño

La interfaz sigue estrictamente las directrices de **Microsoft Fluent Design System**, enfocándose en los siguientes pilares:
1.  **Tipografía Clara:** Uso de la familia tipográfica `Segoe UI` para máxima legibilidad en ámbitos empresariales.
2.  **Uso de la Luz y Elevación (Shadows):** Los contenedores de las diapositivas emplean sombras sutiles multinivel (`box-shadow`) para simular profundidad física sobre un fondo neutro (`#f3f2f1`).
3.  **Manejo de Íconos:** Integración de la biblioteca oficial `@fluentui/react-icons` para representar de forma inequívoca cada pilar de la red informática.

---

## 🧱 Arquitectura del Software

El código se estructuró bajo un modelo estrictamente modular e independiente para facilitar el mantenimiento y escalabilidad del contenido:

```text
src/
├── components/
│   └── Slide.jsx          # Intérprete lógico y renderizador dinámico de contenido
├── data/
│   └── slidesData.jsx     # Origen de datos (Modelo), estructurando textos e íconos Fluent UI
├── App.jsx                # Controlador principal del estado de navegación por teclado (MVM)
├── App.css                # Estilos globales y layouts basados en Fluent Design
├── main.jsx               # Punto de entrada de la aplicación
└── index.css              # Reset estricto del navegador