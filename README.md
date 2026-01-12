# Story Map — Explore Hogwarts

## Korte beschrijving van het concept

Story Map is een interactieve 3D-ervaring waarin je door Hogwarts en het
Quidditchveld navigeert. Je zoomt in op Points of Interest (POI’s) zoals de
Great Hall, de Owlery Tower, de Gryffindor Common Room en de Triwizard Cup,
met aanvullende UI, animaties, geluid en sfeer.

## Technische aanpak

- React + TypeScript + Vite voor de UI en build.
- React Router voor pagina’s (`/` landing page, `/map` 3D-scene).
- React Three Fiber + Drei + Three.js voor de 3D-rendering en controls.
- Zustand voor state (map wissel, actieve POI, camera doelen, muziek).
- Rapier physics voor interactie met de Triwizard Cup.
- GSAP voor hero- & camera-animaties.
- Tailwind CSS voor styling en typografie.
- Eigen Three.js audio hook voor muziek en SFX.

## Credits (modellen, textures, assets)

- 3D modellen: `public/3D-Model/hogwarts.glb`, `public/3D-Model/quidditch.glb`,
  `public/3D-Model/triwizardCup.glb`.
- HDRI: `public/hdri/main.exr`.
- Afbeeldingen/illustraties: `public/images/*` en `public/images/house-shields/*`.
- Icons en cursors: `public/icons/*`, `public/cursor/*`.
- Audio: `public/Music/*`, `public/SFX/door.mp3`.
- Fonts: Cinzel Decorative en EB Garamond (geladen via Google Fonts in
  `src/index.css`).

Credits:
3D (Sketchfab):

- Gear Clock - Mrinal Sumitran
  https://sketchfab.com/3d-models/gear-clock-bab1a7a488d94c6da9278517afc19d0f
  Licentie: CC Attribution
- Wooden Cross – Seth Santos
  https://sketchfab.com/3d-models/wooden-cross-b19335b786ba49009f19a0a2d6a6afab
  Licentie: CC Attribution
- Wooden Bench and Table (Lowpoly) – Vyacheslav_SD
  https://sketchfab.com/3d-models/wooden-bench-and-table-lowpoly-db931b7e39a04558a173bb5ccd499a66
  Licentie: CC Attribution
- Tree – SomeKevin
  https://sketchfab.com/3d-models/tree-66a8d0ef9b49415a9eaf6af216cb9bce
  Licentie: CC Attribution
- Wood Bench Old (3D Scan / Retopo) – Grafi
  https://sketchfab.com/3d-models/wood-bench-old-3d-scan-retopo-d3abaaefbe434c0f9fe2c67ab3d5b710
  Licentie: CC Attribution
- Triwizard Cup – Pixeldog4ever
  https://sketchfab.com/3d-models/triwizard-cup-419396578e9f4165b38252ddec0b77c9
  Licentie: CC Attribution

Textures:

- Whitewashed Brick - Charlotte Baglioni
  https://polyhaven.com/a/whitewashed_brick
  Licentie: CC0
- Damaged Concrete Floor - Rob Tuytel
  https://polyhaven.com/a/damaged_concrete_floor
  Licentie: CC0
- Grey Roof 01 - Rob Tuytel
  https://polyhaven.com/a/grey_roof_01
  Licentie: CC0
- Cobblestone - Charlotte Baglioni
  https://polyhaven.com/a/cobblestone_pavement
  Licentie: CC0
- Grassy Field Texture, Green - Author unknown
  https://www.poliigon.com/texture/grassy-field-texture-green/2769
  Licentie: Commercial License

HDRI:

- Table Mountain 1 (Pure Sky) - Greg Zaal, Jarod Guest
  https://polyhaven.com/a/table_mountain_1_puresky
  Licentie: CC0
