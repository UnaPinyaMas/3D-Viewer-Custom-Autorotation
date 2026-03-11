<div align="center">

# 🌐 3D Viewer — Custom Autorotation

<img src="https://img.shields.io/badge/Three.js-v0.146.0-black?style=for-the-badge&logo=three.js&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/GLTF-3D%20Model-00ff88?style=for-the-badge"/>

<br/>

> Visor 3D interactivo en el navegador con controles de escena personalizables en tiempo real. Carga cualquier modelo **GLTF/GLB** y explóralo con rotación automática, iluminación dinámica y mucho más.

</div>

---

## ✨ Características

- 🎮 **Modelo 3D interactivo** — Carga y renderiza cualquier modelo en formato GLTF/GLB
- 🔄 **Autorotación personalizable** — Activa/desactiva la rotación automática y ajusta su velocidad
- 🖱️ **OrbitControls** — Gira, haz zoom y desplaza el modelo libremente con el ratón
- 💡 **Iluminación dinámica** — Controla el color e intensidad de la luz ambiental y direccional
- 🎨 **Fondo personalizable** — Cambia el color del fondo de la escena en tiempo real
- 🔍 **Control de zoom** — Ajusta el nivel de zoom mediante un slider
- 📱 **Responsive** — Se adapta automáticamente al tamaño de la ventana
- 🍔 **Menú lateral animado** — Panel de opciones con hamburger menu elegante

---

## 🗂️ Estructura del Proyecto

```
3D-Viewer-Custom-Autorotation/
│
├── 📄 index.html        # Estructura HTML + menú de opciones de escena
├── 📜 script.js         # Lógica Three.js: escena, cámara, luces y controles
├── 🎨 styles.css        # Estilos del visor y del menú lateral
└── 📁 assets/
    └── (modelos GLTF/GLB aquí)
```

---

## 🚀 Instalación y Uso

### 1. Clona el repositorio

```bash
git clone https://github.com/UnaPinyaMas/3D-Viewer-Custom-Autorotation.git
cd 3D-Viewer-Custom-Autorotation
```

### 2. Lanza un servidor local

> ⚠️ Los modelos GLTF requieren un servidor HTTP. No abras el `index.html` directamente desde el explorador de archivos.

**Con VS Code (Live Server):**
```
Instala la extensión "Live Server" → clic en "Go Live"
```

**Con Python:**
```bash
python -m http.server 8080
```

**Con Node.js:**
```bash
npx serve .
```

### 3. Abre en el navegador

```
http://localhost:8080
```

---

## 🎛️ Panel de Controles

Haz clic en el **botón hamburguesa** (☰) para abrir el panel lateral:

| Control | Descripción |
|---|---|
| 🎨 **Color de fondo** | Cambia el color del fondo de la escena |
| 💡 **Luz Ambiental** | Ajusta color e intensidad de la iluminación global |
| 🔦 **Luz Direccional** | Ajusta color e intensidad de la luz direccional |
| 🔍 **Zoom** | Controla el nivel de zoom de la cámara |
| 🔄 **Autorotación** | Activa o desactiva la rotación automática |
| ⚡ **Velocidad de Rotación** | Ajusta la velocidad del giro automático |

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| [Three.js](https://threejs.org/) | v0.146.0 | Motor de renderizado 3D WebGL |
| **GLTFLoader** | v0.146.0 | Carga de modelos 3D en formato `.gltf` / `.glb` |
| **OrbitControls** | v0.146.0 | Control de cámara con el ratón |
| **HTML5 / CSS3** | — | Interfaz y estilos |
| **JavaScript ES6** | — | Lógica de la aplicación |

---

## 🔄 Usar tu propio modelo 3D

Pon tu modelo GLTF/GLB dentro de la carpeta `assets/` y actualiza la ruta en `script.js`:

```javascript
loader.load(
  'assets/tu-modelo/scene.gltf', // 👈 Cambia esta ruta
  function (gltf) { ... }
);
```

La cámara se posicionará **automáticamente** según el tamaño del modelo usando su bounding box.

---

## ⚙️ Cómo Funciona Internamente

```
1. Se inicializa la escena Three.js con WebGLRenderer (antialiasing activado)
2. Se añaden luces: ambiental + direccional, ambas configurables
3. GLTFLoader carga el modelo 3D desde la ruta especificada
4. La cámara se posiciona automáticamente mediante BoundingBox del modelo
5. OrbitControls permite interactuar (rotar, zoom, pan) con damping suavizado
6. El bucle de animación (requestAnimationFrame) actualiza y renderiza cada frame
7. El menú lateral modifica la escena en tiempo real mediante event listeners
```

---

<div align="center">

Hecho con 💚 y [Three.js](https://threejs.org/)

</div>
