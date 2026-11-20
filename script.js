/* =========================================================
   Lotería Nerdearla MX
   Juego completo, sin dependencias. Todo corre en el navegador.
   ========================================================= */
'use strict';

/* ------------------------------------------------------------------
   LA BARAJA — 54 cartas
   Los nombres son los tradicionales de la lotería mexicana, con dos
   sustituciones (El Mariachi y El Xoloitzcuintle) para quitar los dos
   nombres racializados de la baraja original. Las ilustraciones son
   emoji, así que no se usa ninguna imagen con derechos de autor.
   ------------------------------------------------------------------ */
const BARAJA = [
  { n:1,  nombre:'El Gallo',           art:'🐓', verso:'El que le cantó a San Pedro no le volverá a cantar.' },
  { n:2,  nombre:'El Diablito',        art:'😈', verso:'Pórtate bien, cuatito, si no te lleva el coloradito.' },
  { n:3,  nombre:'La Dama',            art:'💃', verso:'Puliendo el paso, por toda la calle real.' },
  { n:4,  nombre:'El Catrín',          art:'🎩', verso:'Don Ferruco en la alameda, su bastón quería tirar.' },
  { n:5,  nombre:'El Paraguas',        art:'☂️', verso:'Para el sol y para el agua.' },
  { n:6,  nombre:'La Sirena',          art:'🧜‍♀️', verso:'Con los cantos de sirena no te vayas a marear.' },
  { n:7,  nombre:'La Escalera',        art:'🪜', verso:'Súbeme paso a pasito, no quieras pegar brinquitos.' },
  { n:8,  nombre:'La Botella',         art:'🍾', verso:'La herramienta del borracho.' },
  { n:9,  nombre:'El Barril',          art:'🛢️', verso:'Tanto bebió el albañil que quedó como barril.' },
  { n:10, nombre:'El Árbol',           art:'🌳', verso:'El que a buen árbol se arrima, buena sombra le cobija.' },
  { n:11, nombre:'El Melón',           art:'🍈', verso:'Me lo das o me lo quitas.' },
  { n:12, nombre:'El Valiente',        art:'🤺', verso:'Por qué le corres, cobarde, trayendo tan buen puñal.' },
  { n:13, nombre:'El Gorrito',         art:'👒', verso:'Ponle su gorrito al nene, no se nos vaya a resfriar.' },
  { n:14, nombre:'La Muerte',          art:'💀', verso:'La muerte tilica y flaca, pareja de todos.' },
  { n:15, nombre:'La Pera',            art:'🍐', verso:'El que espera, desespera.' },
  { n:16, nombre:'La Bandera',         art:'🚩', verso:'Verde, blanco y colorado: la bandera del soldado.' },
  { n:17, nombre:'El Bandolón',        art:'🪕', verso:'Tocando su bandolón, está el mariachi Simón.' },
  { n:18, nombre:'El Violoncello',     art:'🎻', verso:'Creciendo se fue hasta el cielo, y como no fue violín…' },
  { n:19, nombre:'La Garza',           art:'🦩', verso:'Al otro lado del río tengo mi banco de arena.' },
  { n:20, nombre:'El Pájaro',          art:'🐦', verso:'Tú me traes a puros brincos, como pájaro en la rama.' },
  { n:21, nombre:'La Mano',            art:'✋', verso:'La mano de un criminal… o la de un buen amigo.' },
  { n:22, nombre:'La Bota',            art:'👢', verso:'Una bota igual que la otra.' },
  { n:23, nombre:'La Luna',            art:'🌙', verso:'El farol de los enamorados.' },
  { n:24, nombre:'El Cotorro',         art:'🦜', verso:'Cotorro, cotorro saca la pata y empiézame a platicar.' },
  { n:25, nombre:'El Borracho',        art:'🍻', verso:'A qué borracho tan necio, ya no lo puedo aguantar.' },
  { n:26, nombre:'El Mariachi',        art:'🎺', verso:'Si me han de matar mañana, que me maten de una vez.' },
  { n:27, nombre:'El Corazón',         art:'❤️', verso:'No me extrañes, corazón, que regreso en el camión.' },
  { n:28, nombre:'La Sandía',          art:'🍉', verso:'La barriga que Juan tenía era empacho de sandía.' },
  { n:29, nombre:'El Tambor',          art:'🥁', verso:'No te arrugues, cuero viejo, que te quiero pa tambor.' },
  { n:30, nombre:'El Camarón',         art:'🦐', verso:'Camarón que se duerme, se lo lleva la corriente.' },
  { n:31, nombre:'Las Jaras',          art:'🏹', verso:'Las jaras del indio Adán, donde pegan, dan.' },
  { n:32, nombre:'El Músico',          art:'🎷', verso:'El músico trompas de hule, ya no me quiere tocar.' },
  { n:33, nombre:'La Araña',           art:'🕷️', verso:'Atarántamela a palos, no me la dejes llegar.' },
  { n:34, nombre:'El Soldado',         art:'💂', verso:'Uno, dos y tres: el soldado derechito al cuartel.' },
  { n:35, nombre:'La Estrella',        art:'⭐', verso:'La guía de los marineros.' },
  { n:36, nombre:'El Cazo',            art:'🍲', verso:'El que mucho se despide, pocas ganas tiene de irse.' },
  { n:37, nombre:'El Mundo',           art:'🌎', verso:'Este mundo es una bola, y nosotros un bolón.' },
  { n:38, nombre:'El Xoloitzcuintle',  art:'🐕', verso:'El perrito más mexicano, guía del Mictlán.' },
  { n:39, nombre:'El Nopal',           art:'🌵', verso:'Al nopal lo van a ver nomás cuando tiene tunas.' },
  { n:40, nombre:'El Alacrán',         art:'🦂', verso:'El que con la cola pica, le dan una paliza.' },
  { n:41, nombre:'La Rosa',            art:'🌹', verso:'Rosita, rosa de Castilla.' },
  { n:42, nombre:'La Calavera',        art:'☠️', verso:'Al pasar por el panteón, me encontré un calaverón.' },
  { n:43, nombre:'La Campana',         art:'🔔', verso:'Tú con la campana y yo con tu hermana.' },
  { n:44, nombre:'El Cantarito',       art:'🏺', verso:'Tanto va el cántaro al agua, que se quiebra y te moja.' },
  { n:45, nombre:'El Venado',          art:'🦌', verso:'Saltando va buscando, pero no mira nada.' },
  { n:46, nombre:'El Sol',             art:'☀️', verso:'La cobija de los pobres.' },
  { n:47, nombre:'La Corona',          art:'👑', verso:'El sombrero de los reyes.' },
  { n:48, nombre:'La Chalupa',         art:'🛶', verso:'Rema que rema Lupita, sentada en su chalupita.' },
  { n:49, nombre:'El Pino',            art:'🌲', verso:'Fresco y oloroso, en todo tiempo hermoso.' },
  { n:50, nombre:'El Pescado',         art:'🐟', verso:'El que por la boca muere, aunque mudo fuere.' },
  { n:51, nombre:'La Palma',           art:'🌴', verso:'Palmero, sube a la palma y bájame un coco real.' },
  { n:52, nombre:'La Maceta',          art:'🪴', verso:'El que nace pa maceta, no sale del corredor.' },
  { n:53, nombre:'El Arpa',            art:'🎼', verso:'Arpa vieja de mi suegra, ya no sirves pa tocar.' },
  { n:54, nombre:'La Rana',            art:'🐸', verso:'Al ver a la verde rana, qué brinco pegó tu hermana.' }
];

/* ------------------------------------------------------------------
   PATRONES PARA GANAR (tabla de 4x4, índices 0..15)
   ------------------------------------------------------------------ */
const PATRONES = {
  linea: {
    label:'Línea',
    combos:[
      [0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15],   // horizontales
      [0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15],   // verticales
      [0,5,10,15],[3,6,9,12]                            // diagonales
    ]
  },
  esquinas:{ label:'4 esquinas', combos:[[0,3,12,15]] },
  centro:  { label:'Centro',     combos:[[5,6,9,10]] },
  llena:   { label:'Tabla llena',combos:[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]] }
};

/* ------------------------------------------------------------------
   ESTADO
   ------------------------------------------------------------------ */
const cfg = { boards:1, speed:3800, pattern:'linea', voice:true, verso:true, auto:false };

const state = {
  deck:[],            // orden revuelto de la baraja
  idx:-1,             // índice de la última carta cantada
  called:new Set(),   // números cantados
  boards:[],          // [{cards:[carta x16], marks:Set<indiceCelda>}]
  running:false,
  startedAt:0,
  tick:null,          // intervalo del cantor
  clock:null,         // intervalo del reloj
  nextAt:0,
  falsas:0
};

/* ------------------------------------------------------------------
   ATAJOS AL DOM
   ------------------------------------------------------------------ */
const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

const el = {
  screenStart:$('#screen-start'),
  screenGame:$('#screen-game'),
  boards:$('#boards'),
  current:$('#current-card'),
  verso:$('#cantor-verso'),
  calledList:$('#called-list'),
  statCalled:$('#stat-called'),
  statTime:$('#stat-time'),
  statGoal:$('#stat-goal'),
  timerFill:$('#timer-fill'),
  btnPause:$('#btn-pause'),
  overlay:$('#overlay'),
  modalEmoji:$('#modal-emoji'),
  modalTitle:$('#modal-title'),
  modalText:$('#modal-text'),
  modalStats:$('#modal-stats'),
  confetti:$('#confetti')
};

/* ------------------------------------------------------------------
   UTILIDADES
   ------------------------------------------------------------------ */
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function fmtTime(ms){
  const s = Math.floor(ms/1000);
  return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
}

/* ---------- voz del cantor ---------- */
let voces = [];
function cargarVoces(){ voces = window.speechSynthesis ? speechSynthesis.getVoices() : []; }
if(window.speechSynthesis){
  cargarVoces();
  speechSynthesis.addEventListener('voiceschanged', cargarVoces);
}
function hablar(texto){
  if(!cfg.voice || !window.speechSynthesis) return;
  try{
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texto);
    const vMx = voces.find(v=>/es[-_]MX/i.test(v.lang)) || voces.find(v=>/^es/i.test(v.lang));
    if(vMx) u.voice = vMx;
    u.lang = vMx ? vMx.lang : 'es-MX';
    u.rate = 0.98; u.pitch = 1.05;
    speechSynthesis.speak(u);
  }catch(_){ /* si no hay voz, ni se siente */ }
}

/* ---------- sonidos cortos (sin archivos) ---------- */
let actx = null;
function beep(freq=620, dur=0.08, type='triangle', vol=0.16){
  try{
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.value = vol;
    o.connect(g); g.connect(actx.destination);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dur);
    o.stop(actx.currentTime + dur + 0.02);
  }catch(_){}
}
const sfxBean = () => beep(380, .09, 'square', .12);
const sfxBad  = () => { beep(200,.14,'sawtooth',.14); setTimeout(()=>beep(150,.2,'sawtooth',.12),110); };
const sfxWin  = () => [0,1,2,3,4].forEach((i)=>setTimeout(()=>beep([523,659,784,1046,1318][i],.18,'triangle',.14), i*120));

/* ------------------------------------------------------------------
   PANTALLA DE INICIO: opciones
   ------------------------------------------------------------------ */
$$('.chip[data-opt]').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    const opt = chip.dataset.opt;
    $$(`.chip[data-opt="${opt}"]`).forEach(c=>{
      c.classList.remove('is-on');
      c.setAttribute('aria-checked','false');
    });
    chip.classList.add('is-on');
    chip.setAttribute('aria-checked','true');
    const v = chip.dataset.value;
    cfg[opt] = isNaN(Number(v)) ? v : Number(v);
    beep(760,.05);
  });
});

$$('.chip[data-toggle]').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    const key = chip.dataset.toggle;
    cfg[key] = !cfg[key];
    chip.classList.toggle('is-on', cfg[key]);
    chip.setAttribute('aria-pressed', String(cfg[key]));
    beep(cfg[key]?760:420,.05);
  });
});

/* ------------------------------------------------------------------
   ARRANQUE DE PARTIDA
   ------------------------------------------------------------------ */
function nuevaPartida(){
  state.deck    = shuffle(BARAJA);
  state.idx     = -1;
  state.called  = new Set();
  state.falsas  = 0;
  state.running = true;
  state.startedAt = Date.now();

  // una tabla = 16 cartas distintas tomadas de la baraja
  state.boards = Array.from({length:cfg.boards}, ()=>({
    cards: shuffle(BARAJA).slice(0,16),
    marks: new Set()
  }));

  el.statGoal.textContent = PATRONES[cfg.pattern].label;
  el.calledList.innerHTML = '';
  el.statCalled.textContent = '0';
  el.statTime.textContent = '0:00';
  el.verso.textContent = '¡Se va y se corre con…!';
  el.current.innerHTML =
    '<span class="lcard__num">—</span><span class="lcard__art">🪅</span><span class="lcard__name">Prepárate…</span>';

  pintarTablas();
  mostrar('game');

  clearInterval(state.clock);
  state.clock = setInterval(actualizarReloj, 250);

  // primera carta rapidito, luego al ritmo elegido
  setTimeout(()=>{ if(state.running) cantar(); }, 900);
  programarSiguiente();
}

function programarSiguiente(){
  clearInterval(state.tick);
  state.nextAt = Date.now() + cfg.speed;
  state.tick = setInterval(()=>{
    if(!state.running) return;
    if(Date.now() >= state.nextAt) cantar();
  }, 120);
}

function actualizarReloj(){
  if(state.running) el.statTime.textContent = fmtTime(Date.now() - state.startedAt);
  const restante = Math.max(0, state.nextAt - Date.now());
  el.timerFill.style.width = `${100 - (restante/cfg.speed*100)}%`;
}

/* ------------------------------------------------------------------
   EL CANTOR
   ------------------------------------------------------------------ */
function cantar(){
  if(!state.running) return;

  state.idx++;
  if(state.idx >= state.deck.length){ finDeBaraja(); return; }

  const c = state.deck[state.idx];
  state.called.add(c.n);
  state.nextAt = Date.now() + cfg.speed;

  // carta grande
  el.current.classList.remove('lcard--big');
  void el.current.offsetWidth;            // reinicia la animación
  el.current.classList.add('lcard--big');
  el.current.innerHTML =
    `<span class="lcard__num">${c.n}</span>` +
    `<span class="lcard__art">${c.art}</span>` +
    `<span class="lcard__name">${c.nombre}</span>`;

  el.verso.textContent = cfg.verso ? c.verso : c.nombre;
  el.statCalled.textContent = String(state.called.size);

  // historial
  const li = document.createElement('li');
  li.textContent = c.art;
  li.title = `${c.n}. ${c.nombre}`;
  el.calledList.prepend(li);
  while(el.calledList.children.length > 54) el.calledList.lastChild.remove();

  beep(880,.06,'triangle',.1);
  hablar(cfg.verso ? `${c.verso} ${c.nombre}` : c.nombre);

  // marca en las celdas que ya se pueden tapar
  state.boards.forEach((b, bi)=>{
    b.cards.forEach((card, ci)=>{
      if(card.n !== c.n) return;
      const cell = document.querySelector(`.cell[data-b="${bi}"][data-c="${ci}"]`);
      if(cell) cell.classList.add('is-called');
      if(cfg.auto){ b.marks.add(ci); if(cell) cell.classList.add('is-marked'); }
    });
  });

  if(cfg.auto) revisarAuto();
}

function finDeBaraja(){
  pausar(true);
  abrirModal('🫤','Se acabó la baraja',
    'Cantamos las 54 cartas y nadie gritó lotería. Échate otra, ahora sí con los ojos bien abiertos.');
}

/* ------------------------------------------------------------------
   TABLAS
   ------------------------------------------------------------------ */
function pintarTablas(){
  el.boards.innerHTML = '';
  el.boards.classList.toggle('is-two', cfg.boards === 2);

  state.boards.forEach((b, bi)=>{
    const wrap = document.createElement('div');
    wrap.className = 'board';
    wrap.innerHTML = `<p class="board__title">Tabla ${bi+1}</p>`;

    const grid = document.createElement('div');
    grid.className = 'board__grid';

    b.cards.forEach((card, ci)=>{
      const cell = document.createElement('button');
      cell.className = 'cell';
      cell.dataset.b = bi;
      cell.dataset.c = ci;
      cell.setAttribute('aria-label', `${card.nombre}, carta ${card.n}`);
      cell.innerHTML =
        `<span class="cell__num">${card.n}</span>` +
        `<span class="cell__art">${card.art}</span>` +
        `<span class="cell__name">${card.nombre}</span>`;
      cell.addEventListener('click', ()=>toggleFrijol(bi, ci, cell));
      grid.appendChild(cell);
    });

    wrap.appendChild(grid);
    el.boards.appendChild(wrap);
  });
}

function toggleFrijol(bi, ci, cell){
  if(!state.running) return;
  const marks = state.boards[bi].marks;
  if(marks.has(ci)){
    marks.delete(ci);
    cell.classList.remove('is-marked');
    beep(300,.05,'square',.08);
  }else{
    marks.add(ci);
    cell.classList.add('is-marked');
    sfxBean();
  }
}

/* ------------------------------------------------------------------
   ¿GANÉ?
   ------------------------------------------------------------------ */
function comboCompleto(marks){
  for(const combo of PATRONES[cfg.pattern].combos){
    if(combo.every(i => marks.has(i))) return combo;
  }
  return null;
}

function reclamar(){
  if(!state.running) return;

  // 1) ¿hay frijoles en cartas que nadie cantó?
  let tramposas = [];
  state.boards.forEach((b, bi)=>{
    b.marks.forEach(ci=>{
      if(!state.called.has(b.cards[ci].n)) tramposas.push([bi,ci]);
    });
  });

  if(tramposas.length){
    state.falsas++;
    tramposas.forEach(([bi,ci])=>{
      const cell = document.querySelector(`.cell[data-b="${bi}"][data-c="${ci}"]`);
      if(cell){
        cell.classList.add('is-wrong');
        setTimeout(()=>cell.classList.remove('is-wrong'), 900);
      }
    });
    sfxBad();
    el.verso.textContent = tramposas.length === 1
      ? '¡Te adelantaste! Traes un frijol en una carta que nadie cantó.'
      : `¡Te adelantaste! Traes ${tramposas.length} frijoles en cartas que nadie cantó.`;
    hablar('Te adelantaste');
    return;
  }

  // 2) ¿se completó el patrón en alguna tabla?
  for(let bi=0; bi<state.boards.length; bi++){
    const combo = comboCompleto(state.boards[bi].marks);
    if(combo){ ganar(bi, combo); return; }
  }

  // 3) nada todavía
  state.falsas++;
  sfxBad();
  el.verso.textContent = `Aguanta: todavía no cierras ${PATRONES[cfg.pattern].label.toLowerCase()}.`;
  hablar('Todavía no');
}

function ganar(bi, combo){
  pausar(true);
  combo.forEach(ci=>{
    const cell = document.querySelector(`.cell[data-b="${bi}"][data-c="${ci}"]`);
    if(cell) cell.classList.add('is-win');
  });
  sfxWin();
  hablar('¡Lotería!');
  lanzarConfetti();

  const ms = Date.now() - state.startedAt;
  const record = guardarRecord(state.called.size);

  abrirModal('🎉','¡LOTERÍA!',
    record
      ? '¡Nuevo récord! Le ganaste a tu mejor marca con esta meta.'
      : '¡Ganaste! Ahora ve a presumirla al stand de AWS.',
    [
      ['Cartas', state.called.size],
      ['Tiempo', fmtTime(ms)],
      ['Falsas', state.falsas],
      ['Récord', `${localStorage.getItem(keyRecord()) || state.called.size} cartas`]
    ]);
}

function revisarAuto(){
  for(let bi=0; bi<state.boards.length; bi++){
    const combo = comboCompleto(state.boards[bi].marks);
    if(combo){ ganar(bi, combo); return; }
  }
}

const keyRecord = () => `loteria-mx:record:${cfg.pattern}`;
function guardarRecord(cartas){
  try{
    const prev = Number(localStorage.getItem(keyRecord()) || 0);
    if(!prev || cartas < prev){ localStorage.setItem(keyRecord(), String(cartas)); return !!prev; }
  }catch(_){}
  return false;
}

/* ------------------------------------------------------------------
   PAUSA / NAVEGACIÓN / MODAL
   ------------------------------------------------------------------ */
function pausar(forzarPausa){
  const quiereCorrer = forzarPausa === undefined ? !state.running : false;
  state.running = quiereCorrer;
  el.btnPause.textContent = state.running ? '⏸' : '▶';
  el.btnPause.setAttribute('aria-label', state.running ? 'Pausar' : 'Continuar');
  if(state.running){
    state.nextAt = Date.now() + cfg.speed;
  }else if(window.speechSynthesis){
    speechSynthesis.cancel();
  }
}

function mostrar(cual){
  el.screenStart.classList.toggle('is-active', cual === 'start');
  el.screenGame.classList.toggle('is-active', cual === 'game');
  window.scrollTo({top:0, behavior:'instant'});
}

function abrirModal(emoji, titulo, texto, stats){
  el.modalEmoji.textContent = emoji;
  el.modalTitle.textContent = titulo;
  el.modalText.textContent  = texto;
  el.modalStats.innerHTML = (stats || [])
    .map(([k,v]) => `<div>${k}<b>${v}</b></div>`).join('');
  el.overlay.hidden = false;
}

function cerrarModal(){ el.overlay.hidden = true; pararConfetti(); }

function salirAlInicio(){
  state.running = false;
  clearInterval(state.tick);
  clearInterval(state.clock);
  if(window.speechSynthesis) speechSynthesis.cancel();
  cerrarModal();
  mostrar('start');
}

/* ------------------------------------------------------------------
   CONFETTI
   ------------------------------------------------------------------ */
let confAnim = null;
function lanzarConfetti(){
  const cv = el.confetti, ctx = cv.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  cv.width = innerWidth*dpr; cv.height = innerHeight*dpr;
  cv.style.width = innerWidth+'px'; cv.style.height = innerHeight+'px';
  ctx.scale(dpr,dpr);
  cv.classList.add('is-on');

  const colores = ['#ff2d78','#ffc93c','#00d6c2','#2bd46a','#ff7a1a','#fff6e6'];
  const piezas = Array.from({length:150}, ()=>({
    x:Math.random()*innerWidth,
    y:-20 - Math.random()*innerHeight*0.6,
    w:6+Math.random()*7,
    h:9+Math.random()*11,
    vy:2+Math.random()*3.4,
    vx:-1.3+Math.random()*2.6,
    rot:Math.random()*Math.PI,
    vr:-0.12+Math.random()*0.24,
    col:colores[Math.floor(Math.random()*colores.length)]
  }));

  let frames = 0;
  (function loop(){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    piezas.forEach(p=>{
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      if(p.y > innerHeight+30){ p.y = -20; p.x = Math.random()*innerWidth; }
      ctx.save();
      ctx.translate(p.x,p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.col;
      ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);
      ctx.restore();
    });
    frames++;
    if(frames < 60*14) confAnim = requestAnimationFrame(loop);
    else pararConfetti();
  })();
}
function pararConfetti(){
  if(confAnim) cancelAnimationFrame(confAnim);
  confAnim = null;
  el.confetti.classList.remove('is-on');
}

/* ------------------------------------------------------------------
   EVENTOS
   ------------------------------------------------------------------ */
$('#btn-play').addEventListener('click', ()=>{
  // el primer toque desbloquea audio y voz en móviles
  beep(660,.06);
  if(window.speechSynthesis && cfg.voice) hablar('Vámonos con la lotería');
  nuevaPartida();
});
$('#btn-next').addEventListener('click', ()=>{ if(state.running) cantar(); });
$('#btn-pause').addEventListener('click', ()=>pausar());
$('#btn-back').addEventListener('click', salirAlInicio);
$('#btn-loteria').addEventListener('click', reclamar);
$('#btn-again').addEventListener('click', ()=>{ cerrarModal(); nuevaPartida(); });
$('#btn-home').addEventListener('click', salirAlInicio);

document.addEventListener('keydown', (e)=>{
  if(!el.screenGame.classList.contains('is-active')) return;
  if(e.code === 'Space'){ e.preventDefault(); if(state.running) cantar(); }
  else if(e.key.toLowerCase() === 'l'){ reclamar(); }
  else if(e.key === 'Escape'){ el.overlay.hidden ? pausar() : cerrarModal(); }
});

// si el navegador se va a otra pestaña, no sigas cantando solo
document.addEventListener('visibilitychange', ()=>{
  if(document.hidden && state.running) pausar(true);
});
