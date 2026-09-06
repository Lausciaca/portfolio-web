# Portfolio — Laureano J. Sciacaluga

Portfolio enfocado en clientes no técnicos para vender sistemas a medida.
Stack: **Astro (estático) + Tailwind CSS v4**. Hosting gratis en **Vercel**.

## Editar rápido

- Contacto / WhatsApp / redes: `src/data/site.ts`
  - Cambia `whatsappNumero`, `whatsappLink`, `email`, `linkedin`, `github`
- Proyectos: `src/data/projects.ts` (títulos, problema, solución, resultado)
- Imágenes reales: reemplaza los SVG en `public/images/` manteniendo el mismo nombre,
  o usa `.webp` y actualiza la ruta en `projects.ts`:
  - `proyecto-bolsa-empleo.svg` → Bolsa de Empleo
  - `proyecto-ifvc.svg` → IFVC
  - `proyecto-prode.svg` → Prode CoPA
  - `proyecto-clubes.svg` → Clubes
  - `proyecto-agrimensores.svg` → SaaS Agrimensores
- CV: reemplaza `public/cv.pdf` con tu CV real (mismo nombre).
- URL final: cambia `site:` en `astro.config.mjs` por tu `https://xxx.vercel.app`.

## Formulario de contacto

Usa [Web3Forms](https://web3forms.com) (gratis, sin backend):
1. Crea tu Access Key gratis.
2. En `src/components/Contact.astro` busca `WEB3FORMS_KEY` y pegala.

Sin key muestra aviso y deriva a WhatsApp (no se rompe).

## Comandos

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # genera dist/
npm run preview
```

## Deploy gratis en Vercel

1. Sube a GitHub: crea repo, `git init`, `git add .`, `git commit -m "portfolio"`, `git push`.
2. Entra a vercel.com → Add New → Project → Import tu repo.
3. Framework: Astro (lo detecta solo). Build: `npm run build`, Output: `dist`.
4. Deploy → te da `https://tu-portfolio.vercel.app` con HTTPS.
5. Cada `git push` a `main` republica solo.

Respaldo: Halcyon Systems (mención secundaria en Sobre mí + Footer).
