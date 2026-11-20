# 🫘 Lotería Nerdearla MX

Lotería mexicana completa y jugable en el navegador. HTML, CSS y JavaScript puro —
cero dependencias, cero build, cero frameworks. Hecha para el reto
**"Despliega tu juego mexicano"** de AWS en Nerdearla México 2026.

## Cómo se juega

El cantor va sacando cartas de una baraja de 54. Tú pones el frijol (🫘) en las
cartas de tu tabla cuando las oyes. Cuando cierres el patrón que elegiste,
le picas a **¡LOTERÍA!**.

Si pusiste frijol en una carta que nadie cantó, el juego te la cacha y te dice
cuántas traes mal. Nada de hacer trampa.

## Qué trae

- **Baraja completa de 54 cartas** con su número, su ilustración y su verso.
- **Cantor con voz** (Web Speech API, busca voz `es-MX`) que grita el verso y el nombre.
- **1 o 2 tablas** de 4×4 generadas al azar en cada partida.
- **4 patrones para ganar**: línea (horizontal, vertical o diagonal), 4 esquinas,
  centro y tabla llena.
- **Validación de trampas**: te marca en rojo los frijoles mal puestos.
- **3 velocidades** del cantor, pausa, "cantar ya" manual y marcado automático opcional.
- **Récord personal** por patrón, guardado en `localStorage`.
- **Confetti** y fanfarria cuando ganas.
- **Atajos de teclado**: `Espacio` canta la siguiente, `L` grita lotería, `Esc` pausa.
- **Mobile-first**: diseñada para jugarse con el pulgar, en vertical.
- Papel picado animado, paleta de talavera y accesibilidad básica
  (`aria-label`, foco visible, respeta `prefers-reduced-motion`).

## Nota sobre la baraja

Los nombres son los tradicionales de la lotería mexicana, con dos sustituciones:
**El Mariachi** y **El Xoloitzcuintle** entran en lugar de los dos nombres
racializados de la baraja original. Las ilustraciones son emoji, así que el juego
no usa ninguna imagen con derechos de autor.

## Correrlo en tu máquina

No necesita nada. Abre `index.html` en el navegador y ya.

Si prefieres servirlo:

```bash
npx serve .
```

## Desplegarlo en AWS Amplify

1. Sube este repo a GitHub.
2. En la consola de AWS, entra a **Amplify** → **Deploy an app** → **GitHub**.
3. Autoriza con **"Only select repositories"** y elige este repo, rama `main`.
4. Amplify lee el `amplify.yml` que ya viene aquí: sin build command,
   output directory `/`.
5. **Save and deploy**, y en un par de minutos tienes tu URL `*.amplifyapp.com`.

Cada push a `main` vuelve a desplegar solo.

## Estructura

```
index.html     # pantallas de inicio y juego, modal
styles.css     # paleta, papel picado, cartas, tablas, confetti
script.js      # baraja de 54, cantor, tablas, patrones, validación
amplify.yml    # build spec (sitio estático, sin build)
```

## Licencia

MIT — ver [LICENSE](LICENSE).
