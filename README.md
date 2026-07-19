# SG Beauty Landingpage

Premium-One-Page-Landingpage für **SG Beauty** mit cinematischem Hero, endlosem Beauty-Bildslider und Kontaktbereich.

## Stack
React, TypeScript, Vite, Tailwind CSS, Framer Motion und Lucide React.

## Installation
```bash
npm install
```

## Lokale Entwicklung
```bash
npm run dev
```

## Produktions-Build
```bash
npm run build
npm run preview
```

## Vercel Deployment
Framework Preset: Vite · Build Command: `npm run build` · Output Directory: `dist` · Install Command: `npm install`. Eine `vercel.json` ist nicht erforderlich.

## Inhalte anpassen
Kontaktdaten, Navigation, Buchungslink, Logo- und Video-Pfade werden zentral in `src/config/siteConfig.ts` gepflegt. Gallery-Bilder und Labels liegen in `src/data/galleryItems.ts`.

## Assets austauschen
Siehe `ASSET_REPLACEMENT_GUIDE.md` für empfohlene Dateinamen, Größen und Komprimierung.

## Demo-Kontaktformular
Das Formular validiert clientseitig und zeigt eine Demo-Erfolgsmeldung. Es sendet keine Daten an ein Backend. Die markierte Stelle in `src/components/ContactForm.tsx` kann später mit Formspree, Resend oder einem eigenen API-Endpunkt verbunden werden.

## Rechtliches
Impressum und Datenschutz verweisen aktuell auf `#` und müssen vor Veröffentlichung durch echte Seiten ersetzt werden.
