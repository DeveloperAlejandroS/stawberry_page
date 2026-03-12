# 🍓 Dulce Tentación — Landing Page

> Página web oficial de **Dulce Tentación**, negocio artesanal de fresas con crema ubicado en Bogotá, Colombia.

Proyecto desarrollado como ejercicio de **marketing digital y diseño web** para la carrera de Mercadeo y Publicidad. El objetivo fue plasmar la identidad de marca de un negocio real en una landing page profesional, optimizada para conversión y experiencia móvil.

---

## Sobre el proyecto

Dulce Tentación es un emprendimiento bogotano que vende fresas frescas con crema artesanal, con opción vegana. La landing page fue diseñada para:

- Comunicar la propuesta de valor de la marca de forma clara y atractiva.
- Facilitar pedidos a domicilio y para recoger directamente desde WhatsApp.
- Reflejar la identidad visual del negocio: cálida, artesanal y apetitosa.
- Ser completamente funcional en dispositivos móviles, que representan la mayoría del tráfico de un negocio local.

---

## Secciones

- **Hero** — foto de producto como fondo, headline principal y dos CTAs directos.
- **Propuesta de valor** — cuatro pilares: frescura, crema artesanal, opción vegana y domicilio.
- **Menú** — cards con productos: Originales y Veganas, con imágenes y botón de pedido.
- **Oferta del día** — sección dinámica para promociones especiales (conectada a Instagram).
- **Haz tu pedido** — tabs interactivos entre domicilio y para recoger, con link directo a WhatsApp.
- **Contacto** — correo, teléfono, dirección y redes sociales.
- **Footer** — navegación secundaria y créditos.

---

## Decisiones de diseño

**Paleta de color** extraída directamente del branding existente del negocio: crema cálida `#f5f0e8`, borgoña profundo `#7a1c1c` y rojo fresa `#c0392b`. Todos los tokens están en variables CSS para facilitar cambios.

**Tipografía:** `Cormorant Garamond` (display, serif elegante) para títulos y `Nunito` (sans-serif amigable) para el cuerpo. La combinación transmite artesanal + accesible, coherente con el producto.

**Mobile-first real:** las cards de menú se convierten en layout horizontal en móvil para aprovechar el espacio, las tarjetas de valor pasan a lista con ícono lateral, los botones se estiran al ancho completo y el menú desplegable ocupa toda la pantalla con items grandes y táctiles.

**Conversión:** el botón principal abre WhatsApp con el mensaje de pedido prellenado, eliminando fricciones. No hay formularios, no hay pasos innecesarios.

---

## Tecnologías

| | |
|---|---|
| Lenguajes | HTML5 · CSS3 · JavaScript ES5+ |
| Tipografías | Cormorant Garamond + Nunito (Google Fonts) |
| Frameworks | Ninguno |
| Build tools | Ninguno |
| Integraciones | WhatsApp Business API (link directo) |

---

## Estructura de archivos

```
dulce-tentacion/
├── index.html         # Estructura semántica y contenido
├── style.css          # Diseño completo con variables CSS y responsive
├── script.js          # Menú móvil, tabs, animaciones, nav activo
└── src/
    └── img/
        ├── logo.png               # Logo principal (fondo transparente)
        ├── logo_w_bg.jpg          # Logo con fondo (favicon)
        ├── hero.jpg               # Foto de portada (hero)
        ├── og_fresa.png           # Producto original
        ├── vegan.png              # Producto vegano
        ├── fresa_png-removebg-preview.png  # Fresa decorativa (oferta)
        ├── redes.png              # Foto para sección contacto
        └── ig.png                 # Ícono Instagram
```

---

## Responsive

| Breakpoint | Comportamiento |
|---|---|
| > 900px | Layout completo en dos columnas donde aplica |
| ≤ 900px | Columnas de menú en 2, contacto apilado |
| ≤ 700px | Nav hamburguesa, cards de valor en lista, menú cards horizontal, botones full-width |
| ≤ 420px | Cards de menú apiladas, ajustes tipográficos finales |

---

## Contacto del negocio

- 📧 dulcetentacion18@gmail.com
- 📱 302 797 2591
- 📍 CLL 16 Fbis A #20-20, Barrio Los Pinos, Bogotá

---

*Proyecto académico · Mercadeo y Publicidad · Bogotá, Colombia*
