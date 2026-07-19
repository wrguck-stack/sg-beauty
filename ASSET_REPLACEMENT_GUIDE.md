# Asset Replacement Guide – SG Beauty

1. **Logo ablegen:** `/public/assets/sg-beauty-logo.svg`.
2. **Logo-Dateiname:** Bevorzugt `sg-beauty-logo.svg`; `BrandLogo.tsx` fällt automatisch auf Text zurück, falls die Datei fehlt.
3. **Hero-Video ablegen:** `/public/assets/sg-beauty-hero.mp4` und optional `/public/assets/sg-beauty-hero.webm`.
4. **Videoformate:** MP4/H.264 als Pflichtformat, WebM/VP9 oder AV1 optional. Empfohlen: 16:9, 8–12 Sekunden, stummer nahtloser Loop, keine Logos, keine Schrift.
5. **Poster-Bild:** `/public/assets/sg-beauty-hero-poster.webp`, ideal 1920×1080 px, unter 350 KB.
6. **Gallery-Bilder ersetzen:** Dateien in `/public/assets/gallery/beauty-01.webp` bis `beauty-06.webp` austauschen und Metadaten bei Bedarf in `src/data/galleryItems.ts` ändern.
7. **Bildabmessungen:** Portrait ca. 760×1040 px, Landscape ca. 900×680 px, Social Preview 1200×630 px.
8. **Dateigrößen:** Gallery-Bilder je 120–260 KB, Hero-Poster unter 350 KB, Hero-Video möglichst 2–5 MB.
9. **Kontaktdaten:** In `src/config/siteConfig.ts` ändern; Platzhalter sind dort kommentiert.
10. **Buchungslink:** `bookingUrl` in `src/config/siteConfig.ts` auf externes System oder `#contact` setzen.

Empfohlene Dateien:

```text
/public/assets/sg-beauty-logo.svg
/public/assets/sg-beauty-hero.mp4
/public/assets/sg-beauty-hero.webm
/public/assets/sg-beauty-hero-poster.webp
/public/assets/sg-beauty-social-preview.webp
/public/assets/gallery/beauty-01.webp
...
/public/assets/gallery/beauty-06.webp
```
