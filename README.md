# Portafolio - Juan González

Portafolio personal construido con **Next.js 16 (App Router)**, **React 19**, **TypeScript** y **Tailwind CSS 4**.

## Estructura

```
.
|-- app/
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components/
|   |-- Certifications.tsx
|   |-- Footer.tsx
|   |-- Hero.tsx
|   |-- Navbar.tsx
|   |-- ProjectCard.tsx
|   |-- ProjectModal.tsx
|   `-- ProjectsSection.tsx
|-- data/
|   |-- certifications.ts
|   |-- profile.ts
|   `-- projects.ts
|-- types/
|   `-- index.ts
|-- _legacy/
|   `-- page.tsx.original
|-- next.config.ts
|-- package.json
|-- postcss.config.mjs
`-- tsconfig.json
```

## Comandos

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run start
npm run typecheck
```

## Dónde editar contenido

- **Datos personales y enlaces**: `data/profile.ts`
- **Proyectos**: `data/projects.ts`
- **Certificaciones**: `data/certifications.ts`
- **Tipos**: `types/index.ts`

El archivo original se conserva en `_legacy/page.tsx.original` (excluido de TypeScript).