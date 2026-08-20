# Propuesta Ejecutiva — Inversión & Valor de la Plataforma

Presentación ejecutiva interactiva (21 diapositivas) que sustenta la inversión de una
plataforma de personalización, cotización y producción: qué se construye, cómo se compone la
inversión, qué gana el negocio y cuáles son los próximos pasos.

Incluye guion del presentador por diapositiva, mapa de miniaturas, navegación por teclado y
modo pantalla completa.

## Uso durante la presentación

| Acción | Atajo |
| --- | --- |
| Siguiente diapositiva | `→` · `Espacio` · `Av Pág` |
| Diapositiva anterior | `←` · `Re Pág` |
| Cerrar guion / mapa | `Esc` |
| Guion del presentador | botón **Guion** |
| Mapa de diapositivas | botón de rejilla |
| Pantalla completa | botón de expandir |

La diapositiva activa queda en la URL (`.../#/7`), así que se puede compartir un enlace
directo a cualquier punto de la presentación.

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # typecheck + bundle de producción en dist/
npm run preview  # revisar el bundle ya construido
npm run lint     # oxlint
```

Stack: React 19 + TypeScript + Vite + Tailwind CSS v4 + lucide-react.

## Estructura

```
src/
├── App.tsx                  Shell: cabecera, progreso, navegación y modales
├── types.ts                 Tipos Slide / SlideType
├── data/slides.ts           Contenido editorial de las 21 diapositivas
├── slides/                  Un componente por tipo de diapositiva
│   └── index.ts             Registro SlideType → componente
├── components/              SlideRenderer, guion, mapa de miniaturas y UI compartida
└── hooks/                   Pantalla completa y sincronización con el hash
```

### Editar el contenido

- **Texto, título, guion:** `src/data/slides.ts`.
- **Diseño de una diapositiva:** el componente correspondiente en `src/slides/`.
- **Diapositiva nueva:** agregar el `SlideType` en `src/types.ts`, su componente en
  `src/slides/`, registrarlo en `src/slides/index.ts` y añadir la entrada en
  `src/data/slides.ts`. Si falta el registro, el build falla — es intencional.

## Despliegue

El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) construye y publica
en GitHub Pages con cada push a `main`.

Para activarlo la primera vez: **Settings → Pages → Build and deployment → Source:
GitHub Actions**.

Vite usa rutas relativas (`base: './'`), así que el sitio funciona igual en una Page de
proyecto, en una de usuario o servido desde cualquier subcarpeta.

## Cifras

Las cifras económicas provienen de los documentos de la propuesta. La diapositiva 16 presenta
dos versiones económicas ($73.304.000 y $96.628.000 IVA incluido) que siguen **pendientes de
validación comercial**; están mostradas por separado a propósito, sin mezclarlas.
