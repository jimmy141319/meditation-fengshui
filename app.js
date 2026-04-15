/**
 * Shichen Calm — app.js
 * Bilingual meditation web app: Wu Xing × Shichen × Web Audio API
 * © Shichen Calm. No medical claims. No copyrighted audio.
 */

'use strict';

/* ════════════════════════════════════════════════════════════
   1. SHICHEN DATA
   12 two-hour periods with Wu Xing, animals, audio params
   ════════════════════════════════════════════════════════════ */

const SHICHEN_DATA = [
  {
    id: 'zi',
    startHour: 23, endHour: 1,
    glyph: '子', pinyin: 'Zǐ Shí',
    nameZh: '子時 — 鼠 · 深夜', nameEn: 'Zi Hour — Rat · Midnight',
    timeRange: '23:00 – 01:00',
    element: 'water',
    elementZh: '水 · Water', elementEn: 'Water',
    elementIcon: '💧',
    animalEmoji: '🐭', animalZh: '鼠', animalEn: 'Rat',
    baseTone: 174, pulse: 58,
    descZh: '子時一陽初生，天地靜謐，宜調息養神，順應水德之柔。',
    descEn: 'The first Yang energy stirs at midnight. Rest deeply; let the Water element restore your spirit.',
    affirmZh: '此刻，如水般靜定，安住於當下。',
    affirmEn: 'In this moment, be still as deep water. Rest in the now.',
    elementStat: '水',
    audioHarmonics: [1, 1.5, 2, 0.5],
    audioLfoRate: 0.03, noiseFilter: { type: 'lowpass', freq: 300 },
    reverbDur: 3.5,
    themeColor: '#08101a',
  },
  {
    id: 'chou',
    startHour: 1, endHour: 3,
    glyph: '丑', pinyin: 'Chǒu Shí',
    nameZh: '丑時 — 牛 · 黎明前', nameEn: 'Chou Hour — Ox · Before Dawn',
    timeRange: '01:00 – 03:00',
    element: 'earth',
    elementZh: '土 · Earth', elementEn: 'Earth',
    elementIcon: '🌍',
    animalEmoji: '🐂', animalZh: '牛', animalEn: 'Ox',
    baseTone: 285, pulse: 60,
    descZh: '丑時大地沉睡，土氣厚重，心神宜靜，培固根基之氣。',
    descEn: 'The Earth rests in the pre-dawn stillness. Ground yourself; let deep roots hold you steady.',
    affirmZh: '我如大地，穩固厚實，靜待天明。',
    affirmEn: 'I am as the earth: solid, grounded, patient for the dawn.',
    elementStat: '土',
    audioHarmonics: [1, 1.25, 0.5, 1.75],
    audioLfoRate: 0.02, noiseFilter: { type: 'lowpass', freq: 180 },
    reverbDur: 2.8,
    themeColor: '#18120a',
  },
  {
    id: 'yin',
    startHour: 3, endHour: 5,
    glyph: '寅', pinyin: 'Yín Shí',
    nameZh: '寅時 — 虎 · 晨曦', nameEn: 'Yin Hour — Tiger · Dawn Stirring',
    timeRange: '03:00 – 05:00',
    element: 'wood',
    elementZh: '木 · Wood', elementEn: 'Wood',
    elementIcon: '🌿',
    animalEmoji: '🐯', animalZh: '虎', animalEn: 'Tiger',
    baseTone: 396, pulse: 64,
    descZh: '寅時肝氣生發，木氣上升，宜舒展筋絡，養肝護體。',
    descEn: 'The Liver Qi rises with the Wood element before dawn. A time for gentle awakening.',
    affirmZh: '我如新芽，向光生長，充滿生命力。',
    affirmEn: 'Like a new shoot reaching for light, I grow with quiet strength.',
    elementStat: '木',
    audioHarmonics: [1, 1.5, 2, 3],
    audioLfoRate: 0.05, noiseFilter: { type: 'bandpass', freq: 500, Q: 2 },
    reverbDur: 2.2,
    themeColor: '#091408',
  },
  {
    id: 'mao',
    startHour: 5, endHour: 7,
    glyph: '卯', pinyin: 'Mǎo Shí',
    nameZh: '卯時 — 兔 · 旭日', nameEn: 'Mao Hour — Rabbit · Sunrise',
    timeRange: '05:00 – 07:00',
    element: 'wood',
    elementZh: '木 · Wood', elementEn: 'Wood',
    elementIcon: '🌿',
    animalEmoji: '🐰', animalZh: '兔', animalEn: 'Rabbit',
    baseTone: 396, pulse: 66,
    descZh: '卯時日出東方，萬物甦醒，木氣蓬勃，迎接嶄新的開始。',
    descEn: 'The sun rises. Wood energy blooms as the world awakens. Welcome this new beginning.',
    affirmZh: '清晨的光，照亮我前行的路。',
    affirmEn: 'Morning light illuminates my path forward.',
    elementStat: '木',
    audioHarmonics: [1, 1.5, 2, 2.5],
    audioLfoRate: 0.06, noiseFilter: { type: 'bandpass', freq: 600, Q: 1.5 },
    reverbDur: 1.8,
    themeColor: '#091408',
  },
  {
    id: 'chen',
    startHour: 7, endHour: 9,
    glyph: '辰', pinyin: 'Chén Shí',
    nameZh: '辰時 — 龍 · 朝氣', nameEn: 'Chen Hour — Dragon · Morning Vitality',
    timeRange: '07:00 – 09:00',
    element: 'earth',
    elementZh: '土 · Earth', elementEn: 'Earth',
    elementIcon: '🌍',
    animalEmoji: '🐲', animalZh: '龍', animalEn: 'Dragon',
    baseTone: 417, pulse: 68,
    descZh: '辰時胃氣最盛，土氣溫養，宜靜心進食，滋養一日之根。',
    descEn: 'Morning vitality peaks. Earth energy nourishes. Breathe steadily and centre your day.',
    affirmZh: '我以平靜之心，迎接今天每一個時刻。',
    affirmEn: 'I meet each moment of this day with a calm and centred heart.',
    elementStat: '土',
    audioHarmonics: [1, 1.25, 0.75, 1.5],
    audioLfoRate: 0.04, noiseFilter: { type: 'lowpass', freq: 400 },
    reverbDur: 2.0,
    themeColor: '#18120a',
  },
  {
    id: 'si',
    startHour: 9, endHour: 11,
    glyph: '巳', pinyin: 'Sì Shí',
    nameZh: '巳時 — 蛇 · 上午', nameEn: 'Si Hour — Snake · Forenoon',
    timeRange: '09:00 – 11:00',
    element: 'fire',
    elementZh: '火 · Fire', elementEn: 'Fire',
    elementIcon: '🔥',
    animalEmoji: '🐍', animalZh: '蛇', animalEn: 'Snake',
    baseTone: 528, pulse: 70,
    descZh: '巳時心陽升騰，火氣漸盛，宜聚精會神，以清明之心處世。',
    descEn: 'Fire energy grows through the forenoon. Stay clear-headed and focused as you engage the world.',
    affirmZh: '我的心如明火，清晰而溫暖。',
    affirmEn: 'My heart is a clear flame: bright, warm, and steady.',
    elementStat: '火',
    audioHarmonics: [1, 2, 3, 0.5],
    audioLfoRate: 0.08, noiseFilter: { type: 'bandpass', freq: 800, Q: 3 },
    reverbDur: 1.5,
    themeColor: '#18090a',
  },
  {
    id: 'wu',
    startHour: 11, endHour: 13,
    glyph: '午', pinyin: 'Wǔ Shí',
    nameZh: '午時 — 馬 · 正午', nameEn: 'Wu Hour — Horse · Noon',
    timeRange: '11:00 – 13:00',
    element: 'fire',
    elementZh: '火 · Fire', elementEn: 'Fire',
    elementIcon: '🔥',
    animalEmoji: '🐴', animalZh: '馬', animalEn: 'Horse',
    baseTone: 528, pulse: 72,
    descZh: '午時陽氣最盛，火德鼎盛，短暫靜心可使心神得以中和休憩。',
    descEn: 'Yang energy peaks at noon. A brief pause at the height of day restores balance and clarity.',
    affirmZh: '在最熱的時刻，我選擇靜定。',
    affirmEn: 'At the height of the day, I choose stillness.',
    elementStat: '火',
    audioHarmonics: [1, 2, 4, 0.5],
    audioLfoRate: 0.1, noiseFilter: { type: 'bandpass', freq: 1000, Q: 2 },
    reverbDur: 1.2,
    themeColor: '#18090a',
  },
  {
    id: 'wei',
    startHour: 13, endHour: 15,
    glyph: '未', pinyin: 'Wèi Shí',
    nameZh: '未時 — 羊 · 下午', nameEn: 'Wei Hour — Goat · Afternoon',
    timeRange: '13:00 – 15:00',
    element: 'earth',
    elementZh: '土 · Earth', elementEn: 'Earth',
    elementIcon: '🌍',
    animalEmoji: '🐑', animalZh: '羊', animalEn: 'Goat',
    baseTone: 417, pulse: 66,
    descZh: '未時陽盛轉衰，土氣沉澱，宜緩步調息，讓心漸漸回歸平靜。',
    descEn: 'Yang begins its slow descent. Earth energy steadies you as afternoon unfolds.',
    affirmZh: '我放慢步伐，讓思緒如秋葉般輕落。',
    affirmEn: 'I slow my pace and let thoughts fall lightly, like autumn leaves.',
    elementStat: '土',
    audioHarmonics: [1, 1.25, 0.5, 1.5],
    audioLfoRate: 0.035, noiseFilter: { type: 'lowpass', freq: 350 },
    reverbDur: 2.4,
    themeColor: '#18120a',
  },
  {
    id: 'shen',
    startHour: 15, endHour: 17,
    glyph: '申', pinyin: 'Shēn Shí',
    nameZh: '申時 — 猴 · 傍晚前', nameEn: 'Shen Hour — Monkey · Late Afternoon',
    timeRange: '15:00 – 17:00',
    element: 'metal',
    elementZh: '金 · Metal', elementEn: 'Metal',
    elementIcon: '✨',
    animalEmoji: '🐒', animalZh: '猴', animalEn: 'Monkey',
    baseTone: 639, pulse: 68,
    descZh: '申時金氣初現，宜收斂思慮，讓清脆的金德之聲洗滌心中雜念。',
    descEn: 'Metal energy emerges in late afternoon. Let crystalline clarity cut through the noise of the day.',
    affirmZh: '如金屬般純粹，我放下今日的煩擾。',
    affirmEn: 'Pure as polished metal, I release the noise of today.',
    elementStat: '金',
    audioHarmonics: [1, 2, 4, 8],
    audioLfoRate: 0.05, noiseFilter: { type: 'highpass', freq: 600 },
    reverbDur: 4.0,
    themeColor: '#0d0e1a',
  },
  {
    id: 'you',
    startHour: 17, endHour: 19,
    glyph: '酉', pinyin: 'Yǒu Shí',
    nameZh: '酉時 — 雞 · 黃昏', nameEn: 'You Hour — Rooster · Dusk',
    timeRange: '17:00 – 19:00',
    element: 'metal',
    elementZh: '金 · Metal', elementEn: 'Metal',
    elementIcon: '✨',
    animalEmoji: '🐓', animalZh: '雞', animalEn: 'Rooster',
    baseTone: 639, pulse: 65,
    descZh: '酉時夕陽西沉，金氣收斂，此刻正是放下工作、靜心回歸的好時機。',
    descEn: 'The sun sets. Metal contracts. This is the golden hour to release work and return to yourself.',
    affirmZh: '我感謝今日，輕輕放手，迎接夜晚的安寧。',
    affirmEn: 'I am grateful for this day. I release it gently and welcome the peace of evening.',
    elementStat: '金',
    audioHarmonics: [1, 2, 3, 6],
    audioLfoRate: 0.04, noiseFilter: { type: 'highpass', freq: 500 },
    reverbDur: 4.5,
    themeColor: '#0d0e1a',
  },
  {
    id: 'xu',
    startHour: 19, endHour: 21,
    glyph: '戌', pinyin: 'Xū Shí',
    nameZh: '戌時 — 狗 · 夜幕', nameEn: 'Xu Hour — Dog · Evening',
    timeRange: '19:00 – 21:00',
    element: 'earth',
    elementZh: '土 · Earth', elementEn: 'Earth',
    elementIcon: '🌍',
    animalEmoji: '🐕', animalZh: '狗', animalEn: 'Dog',
    baseTone: 285, pulse: 62,
    descZh: '戌時夜幕低垂，土氣沉穩，宜靜思今日，滋養內心的平靜與感恩。',
    descEn: 'Evening descends. Earth settles. Reflect on the day and nurture gratitude within.',
    affirmZh: '我在平靜中回顧今天，心中充滿感恩。',
    affirmEn: 'I reflect on today in stillness, my heart full of gratitude.',
    elementStat: '土',
    audioHarmonics: [1, 1.25, 0.5, 0.75],
    audioLfoRate: 0.025, noiseFilter: { type: 'lowpass', freq: 250 },
    reverbDur: 3.0,
    themeColor: '#18120a',
  },
  {
    id: 'hai',
    startHour: 21, endHour: 23,
    glyph: '亥', pinyin: 'Hài Shí',
    nameZh: '亥時 — 豬 · 入夜', nameEn: 'Hai Hour — Pig · Night',
    timeRange: '21:00 – 23:00',
    element: 'water',
    elementZh: '水 · Water', elementEn: 'Water',
    elementIcon: '💧',
    animalEmoji: '🐷', animalZh: '豬', animalEn: 'Pig',
    baseTone: 174, pulse: 58,
    descZh: '亥時水氣最旺，萬籟俱寂，是最適合靜心入定、養陰補腎的時刻。',
    descEn: 'Water energy peaks as the night deepens. Surrender to stillness and restore your Yin essence.',
    affirmZh: '我放下今日的一切，沉入深沉的靜謐。',
    affirmEn: 'I release all of today and sink into deep, restorative stillness.',
    elementStat: '水',
    audioHarmonics: [1, 1.5, 2, 0.5],
    audioLfoRate: 0.03, noiseFilter: { type: 'lowpass', freq: 280 },
    reverbDur: 4.0,
    themeColor: '#08101a',
  },
];

/* ════════════════════════════════════════════════════════════
   2. STATE
   ════════════════════════════════════════════════════════════ */
const state = {
  lang: 'zh',
  currentShichen: null,
  audioPlaying: false,
  volume: 0.70,
  breathingActive: false,
  breathingTimer: null,
  meditationActive: false,
  meditationTimer: null,
  meditationDuration: 5 * 60, // seconds
  clockInterval: null,
  shichenInterval: null,
};

/* ════════════════════════════════════════════════════════════
   3. SHICHEN DETECTION
   ════════════════════════════════════════════════════════════ */
function getCurrentShichen(now) {
  const h = now.getHours();
  for (const s of SHICHEN_DATA) {
    const { startHour, endHour } = s;
    if (startHour < endHour) {
      if (h >= startHour && h < endHour) return s;
    } else {
      // wraps midnight (23–1)
      if (h >= startHour || h < endHour) return s;
    }
  }
  return SHICHEN_DATA[0];
}

function getShichenProgress(shichen, now) {
  const h = now.getHours();
  const m = now.getMinutes();
  const totalMinutes = h * 60 + m;
  const startM = shichen.startHour * 60;
  let endM = shichen.endHour * 60;
  if (endM <= startM) endM += 24 * 60;
  const normalizedNow = totalMinutes < startM ? totalMinutes + 24 * 60 : totalMinutes;
  const progress = Math.min(1, Math.max(0, (normalizedNow - startM) / (endM - startM)));
  return Math.round(progress * 100);
}

/* ════════════════════════════════════════════════════════════
   4. DOM UPDATERS
   ════════════════════════════════════════════════════════════ */
function applyShichen(shichen) {
  state.currentShichen = shichen;
  const root = document.documentElement;
  root.setAttribute('data-element', shichen.element);

  // Update meta theme-color
  const themeMeta = document.getElementById('theme-meta');
  if (themeMeta) themeMeta.setAttribute('content', shichen.themeColor);

  // Glyph / pinyin / name
  document.getElementById('shichenGlyph').textContent = shichen.glyph;
  document.getElementById('shichenPinyin').textContent = shichen.pinyin;
  document.getElementById('shichenNameZh').textContent = shichen.nameZh;
  document.getElementById('shichenNameEn').textContent = shichen.nameEn;
  document.getElementById('shichenTimeRange').textContent = shichen.timeRange;

  // Element badge
  document.getElementById('elementIcon').textContent = shichen.elementIcon;
  document.querySelector('#elementLabel [data-zh]').textContent = shichen.elementZh;

  // Animal badge
  document.getElementById('animalEmoji').textContent = shichen.animalEmoji;
  document.getElementById('animalLabelZh').textContent = shichen.animalZh;
  document.getElementById('animalLabelEn').textContent = shichen.animalEn;

  // Description
  document.getElementById('descZh').textContent = shichen.descZh;
  document.getElementById('descEn').textContent = shichen.descEn;

  // Stats
  document.getElementById('statHz').textContent = shichen.baseTone;
  document.getElementById('statBpm').textContent = shichen.pulse;
  document.getElementById('statElement').textContent = shichen.elementStat;

  // Affirmation in meditation modal
  document.querySelector('#meditAffirmation [data-zh]').textContent = shichen.affirmZh;
  document.querySelector('#meditAffirmation [data-en]').textContent = shichen.affirmEn;
  document.getElementById('meditGlyph').textContent = shichen.elementIcon;

  // Progress bar
  updateProgress(shichen);

  // If audio is playing, crossfade to new element
  if (state.audioPlaying && audioEngine.isPlaying) {
    audioEngine.crossfadeTo(shichen);
  }
}

function updateProgress(shichen) {
  const now = new Date();
  const pct = getShichenProgress(shichen, now);
  document.getElementById('shichenFill').style.width = pct + '%';
  document.getElementById('progressPct').textContent = pct + '%';
  document.getElementById('progressStart').textContent = shichen.timeRange.split('–')[0].trim();
  document.getElementById('progressEnd').textContent = shichen.timeRange.split('–')[1].trim();
}

function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('liveClock').textContent = `${hh}:${mm}`;

  // Update progress bar every tick
  if (state.currentShichen) updateProgress(state.currentShichen);

  // Check if Shichen changed
  const newShichen = getCurrentShichen(now);
  if (!state.currentShichen || newShichen.id !== state.currentShichen.id) {
    applyShichen(newShichen);
  }
}

/* ════════════════════════════════════════════════════════════
   5. LANGUAGE TOGGLE
   ════════════════════════════════════════════════════════════ */
function setLang(lang) {
  state.lang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';

  // Toggle data-zh / data-en spans
  document.querySelectorAll('[data-zh]').forEach(el => {
    el.style.display = lang === 'zh' ? '' : 'none';
  });
  document.querySelectorAll('[data-en]').forEach(el => {
    el.style.display = lang === 'en' ? '' : 'none';
  });

  // Active button state
  document.getElementById('btnZh').classList.toggle('active', lang === 'zh');
  document.getElementById('btnEn').classList.toggle('active', lang === 'en');
  document.getElementById('btnZh').setAttribute('aria-pressed', lang === 'zh');
  document.getElementById('btnEn').setAttribute('aria-pressed', lang === 'en');
}

/* ════════════════════════════════════════════════════════════
   6. WEB AUDIO ENGINE
   ════════════════════════════════════════════════════════════ */
const audioEngine = (function () {
  let ctx = null;
  let masterGain = null;
  let compressor = null;
  let dryGain = null;
  let wetGain = null;
  let reverbNode = null;
  let currentNodes = [];
  let isPlaying = false;
  let fadeTimer = null;

  /* ─── Generate a synthetic reverb impulse ─── */
  function generateImpulse(duration, decay, reverse) {
    if (!ctx) return null;
    const len = Math.floor(ctx.sampleRate * duration);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const ch = buf.getChannelData(c);
      for (let i = 0; i < len; i++) {
        const n = reverse ? len - i : i;
        ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / len, decay);
      }
    }
    return buf;
  }

  /* ─── Filtered noise source ─── */
  function createNoise(filterType, filterFreq, filterQ, gainVal) {
    const bufSize = ctx.sampleRate * 2;
    const noiseBuf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    // Brown-ish noise (integrate white noise)
    let lastOut = 0;
    for (let i = 0; i < bufSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5; // normalize
    }

    const src = ctx.createBufferSource();
    src.buffer = noiseBuf;
    src.loop = true;

    const biquad = ctx.createBiquadFilter();
    biquad.type = filterType;
    biquad.frequency.value = filterFreq;
    if (filterQ !== undefined) biquad.Q.value = filterQ;

    const gain = ctx.createGain();
    gain.gain.value = gainVal;

    src.connect(biquad);
    biquad.connect(gain);

    return { source: src, gain, biquad };
  }

  /* ─── Create an oscillator with AM LFO ─── */
  function createOsc(freq, type, lfoRate, lfoDepth, gainVal, pan) {
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.value = freq;

    // Subtle frequency LFO (vibrato)
    const freqLfo = ctx.createOscillator();
    freqLfo.frequency.value = lfoRate * 0.7;
    const freqLfoGain = ctx.createGain();
    freqLfoGain.gain.value = freq * 0.002; // 0.2% vibrato
    freqLfo.connect(freqLfoGain);
    freqLfoGain.connect(osc.frequency);
    freqLfo.start();

    // Amplitude LFO (tremolo)
    const ampLfo = ctx.createOscillator();
    ampLfo.frequency.value = lfoRate;
    const ampLfoGain = ctx.createGain();
    ampLfoGain.gain.value = lfoDepth;
    ampLfo.connect(ampLfoGain);

    const oscGain = ctx.createGain();
    oscGain.gain.value = gainVal;
    ampLfoGain.connect(oscGain.gain);
    ampLfo.start();

    const panner = ctx.createStereoPanner();
    panner.pan.value = pan;

    osc.connect(oscGain);
    oscGain.connect(panner);

    return { osc, oscGain, ampLfo, freqLfo, panner, freqLfoGain, ampLfoGain };
  }

  /* ─── Build audio graph for a shichen ─── */
  function buildGraph(shichen) {
    const nodes = [];
    const { baseTone, audioHarmonics, audioLfoRate, noiseFilter, element } = shichen;

    // Gain values vary slightly per element
    const baseGain = 0.12;
    const gainMap = { water: 0.10, wood: 0.11, fire: 0.09, earth: 0.10, metal: 0.08 };
    const g = gainMap[element] || baseGain;

    // Oscillator stack
    const panPositions = [-0.4, 0.3, -0.2, 0.5];
    const waveTypes = ['sine', 'sine', 'triangle', 'sine'];

    audioHarmonics.forEach((ratio, i) => {
      const freq = baseTone * ratio;
      if (freq < 20 || freq > 18000) return;
      const pan = panPositions[i] || 0;
      const lfoDepth = g * 0.35;
      const n = createOsc(freq, waveTypes[i] || 'sine', audioLfoRate, lfoDepth, g * (1 / (i + 1) * 1.2), pan);
      n.osc.start();
      n.panner.connect(dryGain);
      n.panner.connect(reverbNode);
      nodes.push(n);
    });

    // Pulse oscillator (rhythmic amplitude modulation at BPM)
    const pulseFreq = shichen.pulse / 60; // Hz
    const pulseOsc = ctx.createOscillator();
    pulseOsc.frequency.value = baseTone * 1.5;
    pulseOsc.type = 'sine';
    const pulseAm = ctx.createOscillator();
    pulseAm.frequency.value = pulseFreq;
    const pulseAmGain = ctx.createGain();
    pulseAmGain.gain.value = g * 0.5;
    const pulseGain = ctx.createGain();
    pulseGain.gain.value = g * 0.5;
    pulseAm.connect(pulseAmGain);
    pulseAmGain.connect(pulseGain.gain);
    pulseOsc.connect(pulseGain);
    pulseGain.connect(dryGain);
    pulseGain.connect(reverbNode);
    pulseOsc.start();
    pulseAm.start();
    nodes.push({ osc: pulseOsc, pulseAm, pulseAmGain, pulseGain });

    // Noise layer
    const nf = noiseFilter;
    const noise = createNoise(nf.type, nf.freq, nf.Q || 1, g * 0.18);
    noise.source.start();
    noise.gain.connect(dryGain);
    noise.gain.connect(reverbNode);
    nodes.push(noise);

    return nodes;
  }

  /* ─── Stop all current nodes ─── */
  function stopAllNodes(nodes, fadeTime) {
    const t = ctx.currentTime + fadeTime;
    nodes.forEach(n => {
      try {
        if (n.oscGain)    { n.oscGain.gain.setTargetAtTime(0, ctx.currentTime, fadeTime / 5); }
        if (n.pulseGain)  { n.pulseGain.gain.setTargetAtTime(0, ctx.currentTime, fadeTime / 5); }
        if (n.gain)       { n.gain.gain.setTargetAtTime(0, ctx.currentTime, fadeTime / 5); }
        if (n.osc)        { n.osc.stop(t + 0.1); }
        if (n.ampLfo)     { n.ampLfo.stop(t + 0.1); }
        if (n.freqLfo)    { n.freqLfo.stop(t + 0.1); }
        if (n.pulseAm)    { n.pulseAm.stop(t + 0.1); }
        if (n.source)     { n.source.stop(t + 0.1); }
      } catch (e) { /* already stopped */ }
    });
  }

  return {
    get isPlaying() { return isPlaying; },

    async init() {
      if (ctx) return;
      ctx = new (window.AudioContext || window.webkitAudioContext)();

      // Master compressor
      compressor = ctx.createDynamicsCompressor();
      compressor.threshold.value = -18;
      compressor.knee.value = 10;
      compressor.ratio.value = 4;
      compressor.attack.value = 0.05;
      compressor.release.value = 0.3;

      masterGain = ctx.createGain();
      masterGain.gain.value = state.volume;

      // Reverb
      reverbNode = ctx.createConvolver();
      reverbNode.buffer = generateImpulse(2.5, 3.0, false);

      dryGain = ctx.createGain();
      dryGain.gain.value = 0.65;
      wetGain = ctx.createGain();
      wetGain.gain.value = 0.35;

      dryGain.connect(masterGain);
      reverbNode.connect(wetGain);
      wetGain.connect(masterGain);
      masterGain.connect(compressor);
      compressor.connect(ctx.destination);
    },

    async play(shichen) {
      await this.init();
      if (ctx.state === 'suspended') await ctx.resume();

      // Update reverb for this element
      reverbNode.buffer = generateImpulse(shichen.reverbDur, 3.0, false);

      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(state.volume, ctx.currentTime + 2.5);

      currentNodes = buildGraph(shichen);
      isPlaying = true;
    },

    stop() {
      if (!isPlaying) return;
      masterGain.gain.setTargetAtTime(0, ctx.currentTime, 0.8);
      stopAllNodes(currentNodes, 2.5);
      currentNodes = [];
      isPlaying = false;
    },

    crossfadeTo(shichen) {
      if (!isPlaying || !ctx) return;
      const oldNodes = currentNodes;
      stopAllNodes(oldNodes, 2.0);

      reverbNode.buffer = generateImpulse(shichen.reverbDur, 3.0, false);
      masterGain.gain.setTargetAtTime(0, ctx.currentTime, 0.5);
      setTimeout(() => {
        if (!isPlaying) return;
        currentNodes = buildGraph(shichen);
        masterGain.gain.setTargetAtTime(state.volume, ctx.currentTime, 1.0);
      }, 1500);
    },

    setVolume(v) {
      state.volume = v;
      if (masterGain) masterGain.gain.setTargetAtTime(v, ctx.currentTime, 0.1);
    },
  };
})();

/* ════════════════════════════════════════════════════════════
   7. AUDIO CONTROLS (UI)
   ════════════════════════════════════════════════════════════ */
async function toggleAudio() {
  const btn = document.getElementById('btnPlay');
  const icon = document.getElementById('playIcon');

  if (!state.audioPlaying) {
    btn.disabled = true;
    try {
      await audioEngine.play(state.currentShichen);
      state.audioPlaying = true;
      btn.classList.add('playing');
      icon.textContent = '⏸';
      btn.setAttribute('aria-label', 'Pause ambient sound');
    } catch (e) {
      console.error('Audio error:', e);
    } finally {
      btn.disabled = false;
    }
  } else {
    audioEngine.stop();
    state.audioPlaying = false;
    btn.classList.remove('playing');
    icon.textContent = '▶';
    btn.setAttribute('aria-label', 'Play ambient sound');
  }
}

function setVolume(val) {
  const v = Number(val) / 100;
  audioEngine.setVolume(v);
}

/* ════════════════════════════════════════════════════════════
   8. BREATHING EXERCISE
   90 seconds · Box Breathing: 4s inhale, 4s hold, 4s exhale, 4s rest
   ════════════════════════════════════════════════════════════ */
const BREATH_PHASES = [
  { id: 'inhale',  durS: 4, labelZh: '吸氣',  labelEn: 'Inhale',  circleClass: 'inhale'  },
  { id: 'hold1',   durS: 4, labelZh: '止息',  labelEn: 'Hold',    circleClass: ''        },
  { id: 'exhale',  durS: 4, labelZh: '呼氣',  labelEn: 'Exhale',  circleClass: 'exhale'  },
  { id: 'rest',    durS: 4, labelZh: '靜息',  labelEn: 'Rest',    circleClass: ''        },
];
const BREATH_TOTAL = 90; // seconds
const BREATH_RING_CIRCUMFERENCE = 565; // 2π × 90

let breathInterval  = null;
let breathElapsed   = 0;
let breathPhaseIdx  = 0;
let breathPhaseTime = 0;

function openBreathing() {
  document.getElementById('breathingModal').classList.add('open');
  resetBreathingUI();
}

function closeBreathing() {
  document.getElementById('breathingModal').classList.remove('open');
  stopBreathingExercise();
}

function resetBreathingUI() {
  breathElapsed   = 0;
  breathPhaseIdx  = 0;
  breathPhaseTime = 0;
  updateBreathUI(BREATH_PHASES[0], BREATH_TOTAL);
  document.getElementById('breathCircle').className = 'breathing-circle';
  document.getElementById('breathRing').style.strokeDashoffset = BREATH_RING_CIRCUMFERENCE;
  document.getElementById('btnStartBreathing').style.display = '';
}

function startBreathing() {
  if (state.breathingActive) return;
  state.breathingActive = true;
  document.getElementById('btnStartBreathing').style.display = 'none';

  breathElapsed   = 0;
  breathPhaseIdx  = 0;
  breathPhaseTime = 0;

  // Ensure audio plays for breathing
  if (!state.audioPlaying) toggleAudio();

  breathInterval = setInterval(breathTick, 1000);
  breathTick(); // immediate first tick
}

function breathTick() {
  breathElapsed++;
  breathPhaseTime++;

  const phase = BREATH_PHASES[breathPhaseIdx];
  const remaining = BREATH_TOTAL - breathElapsed + 1;

  if (breathPhaseTime > phase.durS) {
    breathPhaseTime = 1;
    breathPhaseIdx = (breathPhaseIdx + 1) % BREATH_PHASES.length;
  }

  const currentPhase = BREATH_PHASES[breathPhaseIdx];
  updateBreathUI(currentPhase, remaining);

  // Ring progress
  const progress = breathElapsed / BREATH_TOTAL;
  const offset = BREATH_RING_CIRCUMFERENCE * (1 - progress);
  document.getElementById('breathRing').style.strokeDashoffset = offset;

  if (breathElapsed >= BREATH_TOTAL) {
    stopBreathingExercise(true);
  }
}

function updateBreathUI(phase, remaining) {
  const circle  = document.getElementById('breathCircle');
  const counter = document.getElementById('breathCount');
  const name    = document.getElementById('breathPhaseName');
  const timer   = document.getElementById('breathTimerDisplay');

  circle.className = 'breathing-circle' + (phase.circleClass ? ' ' + phase.circleClass : '');
  counter.textContent = BREATH_PHASES[breathPhaseIdx] ? BREATH_PHASES[breathPhaseIdx].durS - breathPhaseTime + 1 : '–';

  const zh = name.querySelector('[data-zh]') || name;
  const en = name.querySelector('[data-en]') || null;
  if (zh && en) {
    zh.textContent = phase.labelZh;
    en.textContent = phase.labelEn;
  } else {
    name.textContent = state.lang === 'zh' ? phase.labelZh : phase.labelEn;
  }

  const m = Math.floor(Math.max(0, remaining - 1) / 60);
  const s = Math.max(0, remaining - 1) % 60;
  timer.textContent = `${m}:${String(s).padStart(2, '0')}`;
}

function stopBreathingExercise(completed) {
  if (!state.breathingActive) return;
  clearInterval(breathInterval);
  state.breathingActive = false;

  const circle = document.getElementById('breathCircle');
  circle.className = 'breathing-circle';
  document.getElementById('breathCount').textContent = completed ? '✓' : '–';
  document.getElementById('breathTimerDisplay').textContent = completed ? '0:00' : '1:30';
  if (completed) {
    document.getElementById('breathRing').style.strokeDashoffset = '0';
  }
  document.getElementById('btnStartBreathing').style.display = '';

  // Reset for next use after a short delay
  if (completed) {
    setTimeout(resetBreathingUI, 2500);
  }
}

/* ════════════════════════════════════════════════════════════
   9. MEDITATION MODE
   ════════════════════════════════════════════════════════════ */
let meditationInterval  = null;
let meditationRemaining = 5 * 60;

function openMeditation() {
  document.getElementById('meditationModal').classList.add('open');
}

function closeMeditation() {
  document.getElementById('meditationModal').classList.remove('open');
  stopMeditation();
}

function selectDuration(mins, btn) {
  state.meditationDuration = mins * 60;
  meditationRemaining = mins * 60;
  document.querySelectorAll('.duration-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  updateMeditCountdown(meditationRemaining);
}

function startMeditation() {
  if (state.meditationActive) return;
  state.meditationActive = true;
  meditationRemaining = state.meditationDuration;

  document.getElementById('btnStartMeditation').style.display = 'none';
  document.getElementById('btnStopMeditation').style.display = 'inline-block';
  document.getElementById('meditDurationPicker').style.display = 'none';
  document.getElementById('meditCountdown').classList.add('active');

  // Ensure audio plays
  if (!state.audioPlaying) toggleAudio();

  updateMeditCountdown(meditationRemaining);
  meditationInterval = setInterval(() => {
    meditationRemaining--;
    updateMeditCountdown(meditationRemaining);
    if (meditationRemaining <= 0) {
      stopMeditation(true);
    }
  }, 1000);
}

function stopMeditation(completed) {
  if (!state.meditationActive && !completed) return;
  clearInterval(meditationInterval);
  state.meditationActive = false;

  document.getElementById('btnStartMeditation').style.display = 'inline-block';
  document.getElementById('btnStopMeditation').style.display = 'none';
  document.getElementById('meditDurationPicker').style.display = '';
  document.getElementById('meditCountdown').classList.remove('active');

  const statusEl = document.getElementById('meditStatus');
  if (completed) {
    statusEl.querySelector('[data-zh]').textContent = '冥想完成 ✓';
    statusEl.querySelector('[data-en]').textContent = 'Session complete ✓';
    setTimeout(() => {
      statusEl.querySelector('[data-zh]').textContent = '音景已就緒';
      statusEl.querySelector('[data-en]').textContent = 'Soundscape ready';
    }, 3000);
  }
}

function updateMeditCountdown(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  document.getElementById('meditCountdown').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/* ════════════════════════════════════════════════════════════
   10. ALL SHICHEN PANEL
   ════════════════════════════════════════════════════════════ */
function showAllShichen() {
  const modal = document.getElementById('allShichenModal');
  const list  = document.getElementById('allShichenList');
  list.innerHTML = '';

  const now = new Date();
  const currentId = state.currentShichen ? state.currentShichen.id : null;

  SHICHEN_DATA.forEach(s => {
    const isActive = s.id === currentId;
    const elementColors = {
      water: '#4fc3f7', wood: '#81c784', fire: '#ff7043',
      earth: '#ffb74d', metal: '#b0bec5',
    };
    const accent = elementColors[s.element] || '#fff';
    const item = document.createElement('div');
    item.style.cssText = `
      display:flex;align-items:center;gap:14px;
      padding:12px 16px;border-radius:12px;
      background:${isActive ? `rgba(${hexToRgb(accent)},0.15)` : 'rgba(255,255,255,0.04)'};
      border:1px solid ${isActive ? accent : 'rgba(255,255,255,0.08)'};
      transition:background 0.2s;
    `;
    item.innerHTML = `
      <span style="font-size:1.8rem;flex-shrink:0">${s.glyph}</span>
      <div style="flex:1;min-width:0">
        <div style="font-weight:700;color:${isActive ? accent : '#eceff1'};font-size:0.95rem">
          ${state.lang === 'zh' ? s.nameZh : s.nameEn}
          ${isActive ? `<span style="font-size:0.7rem;margin-left:6px;padding:2px 8px;background:${accent};color:#111;border-radius:10px;vertical-align:middle">${state.lang === 'zh' ? '現在' : 'Now'}</span>` : ''}
        </div>
        <div style="font-size:0.78rem;color:#78909c;margin-top:2px">
          ${s.timeRange} · ${s.elementZh} · ${s.baseTone} Hz · ${s.pulse} BPM
        </div>
      </div>
      <span style="font-size:1.2rem">${s.elementIcon}</span>
    `;
    list.appendChild(item);
  });

  modal.classList.add('open');
}

function closeAllShichen() {
  document.getElementById('allShichenModal').classList.remove('open');
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

/* ════════════════════════════════════════════════════════════
   11. PURCHASE
   ════════════════════════════════════════════════════════════ */
function handlePurchase() {
  // In production, replace this URL with your payment provider link
  // (e.g., Stripe, PayPal, Buy Me a Coffee, Gumroad, etc.)
  const paymentUrl = 'https://github.com/jimmy141319/meditation-fengshui';
  window.open(paymentUrl, '_blank', 'noopener,noreferrer');
}

/* ════════════════════════════════════════════════════════════
   12. MODAL KEYBOARD / ACCESSIBILITY
   ════════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeBreathing();
    closeMeditation();
    closeAllShichen();
  }
});

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      closeBreathing();
      closeMeditation();
      closeAllShichen();
    }
  });
});

/* ════════════════════════════════════════════════════════════
   13. PWA SERVICE WORKER REGISTRATION
   ════════════════════════════════════════════════════════════ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.warn('Service Worker registration failed:', err);
    });
  });
}

/* ════════════════════════════════════════════════════════════
   14. INIT
   ════════════════════════════════════════════════════════════ */
function init() {
  // Initial shichen
  const now = new Date();
  const shichen = getCurrentShichen(now);
  applyShichen(shichen);

  // Clock tick every second
  updateClock();
  state.clockInterval = setInterval(updateClock, 1000);

  // Apply initial language
  setLang('zh');

  // Default meditation duration display
  updateMeditCountdown(state.meditationDuration);
}

document.addEventListener('DOMContentLoaded', init);
