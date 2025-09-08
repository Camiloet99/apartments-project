const MAX_HFOV = 120;

const apts = [
  {
    name: "Piso 1",
    area: 25, beds: 1, baths: 1,
    plan: "imagenes/1_PISO.png",
    pano: "imagenes/Pisos/P1/F01.jpg",
    hotspots: [
      { top: 99, left: 50, panoSrc: "imagenes/Pisos/P1/F09.jpg" },
      { top: 69, left: 96, panoSrc: "imagenes/Pisos/P1/F08.jpg" },
      { top: 38, left: 140, panoSrc: "imagenes/Pisos/P1/F07.jpg" },
      { top: 172, left: 128, panoSrc: "imagenes/Pisos/P1/F10.jpg" },
      { top: 133, left: 178, panoSrc: "imagenes/Pisos/P1/F11.jpg" },
      { top: 101, left: 219, panoSrc: "imagenes/Pisos/P1/F06.jpg" },
      { top: 215, left: 168, panoSrc: "imagenes/Pisos/P1/F14.jpg" },
      { top: 192, left: 196, panoSrc: "imagenes/Pisos/P1/F13.jpg" },
      { top: 171, left: 226, panoSrc: "imagenes/Pisos/P1/F12.jpg" },
      { top: 213, left: 218, panoSrc: "imagenes/Pisos/P1/F18.jpg" },
      { top: 254, left: 218, panoSrc: "imagenes/Pisos/P1/F17.jpg" },
      { top: 227, left: 249, panoSrc: "imagenes/Pisos/P1/F16.jpg" },
      { top: 205, left: 270, panoSrc: "imagenes/Pisos/P1/F15.jpg" },
      { top: 171, left: 335, panoSrc: "imagenes/Pisos/P1/F05.jpg" },
      { top: 259, left: 277, panoSrc: "imagenes/Pisos/P1/F19.jpg" },
      { top: 236, left: 304, panoSrc: "imagenes/Pisos/P1/F20.jpg" },
      { top: 257, left: 336, panoSrc: "imagenes/Pisos/P1/F21.jpg" },
      { top: 311, left: 367, panoSrc: "imagenes/Pisos/P1/F23.jpg" },
      { top: 287, left: 391, panoSrc: "imagenes/Pisos/P1/F22.jpg" },
      { top: 334, left: 403, panoSrc: "imagenes/Pisos/P1/F24.jpg" },
      { top: 312, left: 424, panoSrc: "imagenes/Pisos/P1/F25.jpg" },
      { top: 348, left: 450, panoSrc: "imagenes/Pisos/P1/F02.jpg" },
      { top: 380, left: 496, panoSrc: "imagenes/Pisos/P1/F01.jpg" },
      { top: 300, left: 496, panoSrc: "imagenes/Pisos/P1/F03.jpg" },
      { top: 247, left: 446, panoSrc: "imagenes/Pisos/P1/F04.jpg" },
    ],
  },
  {
    name: "Piso 2-4-6",
    pano: "imagenes/Pisos/P2-4-6/GAMECLUB1.jpg",
    experienceZones: [
      { name: "Game Club", thumb: "imagenes/GAME_CLUB_1.png", panoSrc: "imagenes/Pisos/P2-4-6/GAMECLUB1.jpg" },
      { name: "Social Hub", thumb: "imagenes/SOCIAL_HUB_1.png", panoSrc: "imagenes/Pisos/P2-4-6/SOCIALHUB1.jpg" },
      { name: "Lab Room", thumb: "imagenes/LAB_ROOM_1.png", panoSrc: "imagenes/Pisos/P2-4-6/LABROOM1.jpg" }
    ]
  },
  {
    name: "Piso 8",
    area: 25, beds: 1, baths: 1,
    plan: "imagenes/8_PISO.png",
    pano: "imagenes/Pisos/P8/F01.jpg",
    hotspots: [
      { top: 95, left: 168, panoSrc: "imagenes/Pisos/P8/F01.jpg" },
      { top: 142, left: 162, panoSrc: "imagenes/Pisos/P8/F02.jpg" },
      { top: 136, left: 193, panoSrc: "imagenes/Pisos/P8/F03.jpg" },
      { top: 158, left: 222, panoSrc: "imagenes/Pisos/P8/F04.jpg" },
      { top: 170, left: 263, panoSrc: "imagenes/Pisos/P8/F05.jpg" },
      { top: 188, left: 290, panoSrc: "imagenes/Pisos/P8/F06.jpg" },
      { top: 209, left: 311, panoSrc: "imagenes/Pisos/P8/F07.jpg" },
      { top: 231, left: 339, panoSrc: "imagenes/Pisos/P8/F09.jpg" },
      { top: 190, left: 331, panoSrc: "imagenes/Pisos/P8/F08.jpg" },
      { top: 262, left: 403, panoSrc: "imagenes/Pisos/P8/F10.jpg" },
      { top: 298, left: 426, panoSrc: "imagenes/Pisos/P8/F13.jpg" },
      { top: 307, left: 479, panoSrc: "imagenes/Pisos/P8/F14.jpg" },
      { top: 341, left: 457, panoSrc: "imagenes/Pisos/P8/F18.jpg" },
      { top: 377, left: 433, panoSrc: "imagenes/Pisos/P8/F17.jpg" },
      { top: 346, left: 498, panoSrc: "imagenes/Pisos/P8/F15.jpg" },
      { top: 418, left: 448, panoSrc: "imagenes/Pisos/P8/F16.jpg" },
      { top: 311, left: 331, panoSrc: "imagenes/Pisos/P8/F12.jpg" },
      { top: 287, left: 302, panoSrc: "imagenes/Pisos/P8/F11.jpg" },
    ],
  },
];

const ORIGINAL_PLAN_WIDTH = 600;
let current = 0;

let activeId = 'panorama';
const viewers = {};

const nameEl = document.getElementById("aptName");
const planWrapper = document.querySelector(".plan-wrapper");
const planImg = document.getElementById("planImg");
const hotspotsContainer = document.getElementById("hotspotsContainer");
const specsContainer = document.querySelector(".specs");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const experienceZonesContainer = document.getElementById("experienceZonesContainer");

function preloadImages(urls) {
  const unique = Array.from(new Set(urls)).filter(Boolean);
  return Promise.all(
    unique.map(src => new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = src;
    }))
  );
}

function getInactiveId() {
  return activeId === 'panorama' ? 'panoramaNext' : 'panorama';
}

function initViewer(panoramaUrl) {
  if (!viewers[activeId]) {
    viewers[activeId] = pannellum.viewer(activeId, {
      type: "equirectangular",
      panorama: panoramaUrl,
      sceneFadeDuration: 0,
      autoLoad: true,
      showZoomCtrl: false,
      compass: false,
      hfov: MAX_HFOV,
      maxHfov: MAX_HFOV,
      minHfov: 40,
      autoRotate: -12
    });
  } else {
    switchPanoramaWithBlur(panoramaUrl);
  }
}

function switchPanoramaWithBlur(targetUrl) {
  const currentId = activeId;
  const nextId = getInactiveId();

  const currentEl = document.getElementById(currentId);
  const nextEl = document.getElementById(nextId);
  if (!currentEl || !nextEl || !targetUrl) return;

  currentEl.classList.add('blur');

  const img = new Image();
  img.onload = () => {
    nextEl.innerHTML = '';
    viewers[nextId] = pannellum.viewer(nextId, {
      type: 'equirectangular',
      panorama: targetUrl,
      sceneFadeDuration: 0,
      autoLoad: true,
      showZoomCtrl: false,
      compass: false,
      hfov: MAX_HFOV,   
      maxHfov: MAX_HFOV,
      minHfov: 40,      
      autoRotate: -12
    });

    viewers[nextId].on('load', () => {
      nextEl.classList.add('active');
      setTimeout(() => {
        currentEl.classList.remove('active', 'blur');
        try { viewers[currentId]?.destroy?.(); } catch { }
        currentEl.innerHTML = '';
        activeId = nextId;
      }, 220);
    });
  };
  img.onerror = () => {
    console.warn('No se pudo precargar:', targetUrl);
    currentEl.classList.remove('blur');
  };
  img.src = targetUrl;
}

function renderPlanHotspots() {
  const ap = apts[current];
  hotspotsContainer.innerHTML = "";

  if (!ap.plan || !planImg.offsetWidth) return;

  const scale = planImg.offsetWidth / ORIGINAL_PLAN_WIDTH;

  (ap.hotspots || []).forEach((spot, i) => {
    const el = document.createElement("span");
    el.className = "hotspot";
    el.textContent = "360";

    el.style.top = (spot.top * scale) + "px";
    el.style.left = (spot.left * scale) + "px";

    const size = 28 * Math.max(scale, 0.8);
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.fontSize = (12 * Math.max(scale, 0.85)) + "px";

    el.addEventListener("click", () => switchPanoramaWithBlur(spot.panoSrc));
    hotspotsContainer.appendChild(el);
  });
}

function updateApartment(index) {
  current = index;
  const ap = apts[current];

  nameEl.textContent = ap.name;

  initViewer(ap.pano);

  if (ap.experienceZones) {
    planWrapper.style.display = 'none';
    specsContainer.style.visibility = 'hidden';
    experienceZonesContainer.style.display = 'flex';

    experienceZonesContainer.innerHTML = '';
    ap.experienceZones.forEach(zone => {
      const z = document.createElement('div');
      z.className = 'experience-zone-item';
      z.innerHTML = `<img src="${zone.thumb}" alt="${zone.name}"><span class="name">${zone.name}</span>`;
      z.addEventListener('click', () => switchPanoramaWithBlur(zone.panoSrc));
      experienceZonesContainer.appendChild(z);
    });

  } else {
    planWrapper.style.display = 'block';
    specsContainer.style.visibility = 'visible';
    experienceZonesContainer.style.display = 'none';

    const areaEl = document.getElementById("specArea");
    const bedsEl = document.getElementById("specBeds");
    const bathsEl = document.getElementById("specBaths");
    if (areaEl) areaEl.textContent = (ap.area ?? "") + " m²";
    if (bedsEl) bedsEl.textContent = ap.beds ?? "";
    if (bathsEl) bathsEl.textContent = ap.baths ?? "";

    planImg.src = ap.plan;
    planImg.onload = renderPlanHotspots;
    if (planImg.complete) renderPlanHotspots();
  }

  const toPreload = [];
  if (ap.pano) toPreload.push(ap.pano);
  if (ap.hotspots) toPreload.push(...ap.hotspots.map(h => h.panoSrc).filter(Boolean));
  if (ap.experienceZones) toPreload.push(...ap.experienceZones.map(z => z.panoSrc).filter(Boolean));
  preloadImages(toPreload).catch(() => { });
}

document.addEventListener("DOMContentLoaded", () => {
  prevBtn.addEventListener("click", () =>
    updateApartment((current - 1 + apts.length) % apts.length)
  );
  nextBtn.addEventListener("click", () =>
    updateApartment((current + 1) % apts.length)
  );
  window.addEventListener('resize', renderPlanHotspots);
  updateApartment(current);
});
