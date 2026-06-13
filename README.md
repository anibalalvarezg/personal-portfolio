# Portfolio Personal - Aníbal Álvarez

Portfolio profesional desarrollado con Next.js, TypeScript y TailwindCSS. Sitio estático de alto rendimiento con animaciones premium, accesibilidad y soporte multiidioma (ES/EN).

## 🌐 Demo en Vivo

Puedes ver el portfolio desplegado aquí:

**[👉 Ver Portfolio](https://personal-portfolio-orcin-two.vercel.app/)**

## 🚀 Tecnologías

- **Framework:** Next.js 16 (App Router) con `output: 'export'`
- **Lenguaje:** TypeScript
- **Estilos:** TailwindCSS 4
- **UI Components:** shadcn/ui
- **Animaciones:** GSAP + Framer Motion
- **Temas:** next-themes (Dark mode por defecto)
- **Internacionalización:** Sistema i18n personalizado con contexto de React (ES/EN)
- **Observabilidad:** Vercel Analytics y Speed Insights

## 🎨 Características

- ✅ Diseño responsive y accesible (Lighthouse Accessibility 100)
- ✅ Modo oscuro por defecto
- ✅ Soporte multiidioma (Español/Inglés)
- ✅ Animaciones suaves con scroll y efectos premium (spotlight, cursor magnético, canvas)
- ✅ Secciones: Hero, Proyectos, Publicaciones, Tech Stack, Experiencia, Sobre mí y Contacto
- ✅ Optimizado para SEO con meta tags, OG image y sitemap estático
- ✅ Descarga de CV en PDF
- ✅ Build estático para cualquier hosting estático

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build de producción (genera carpeta out/)
npm run build

# Servir build estático localmente
npx serve out
```

## 📁 Estructura Destacada

- `src/app/` — Rutas, layout, metadata y sitemap.
- `src/components/sections/` — Secciones principales del sitio.
- `src/components/` — Componentes reutilizables (navbar, canvas, cursor, etc.).
- `src/lib/data-es.ts` / `data-en.ts` — Datos localizados (proyectos, experiencia, publicaciones, tech stack).
- `src/hooks/` — Hooks personalizados (reduced motion, scroll progress, active section, etc.).
- `public/` — Activos estáticos incluyendo `og-image.png`.

## 🚀 Deploy

El proyecto está configurado para exportación estática. En Vercel, el comando de build `npm run build` genera la carpeta `out/` y el despliegue se ejecuta automáticamente mediante CI/CD.

## 📄 Licencia

© 2026 Aníbal Álvarez. Todos los derechos reservados.
