/* ============================================================
   SHICHEN CALM — app.js
   Premium Bilingual Meditation App · iPad & iPhone
   ============================================================ */

'use strict';

/* ══════════════════════════════════════════════
   SECTION 1 — MODE DATA (9 Shichen Periods)
   ══════════════════════════════════════════════ */

const MODES = [
  {
    id: 'night-recovery',
    timeStart: 23,
    timeEnd:   7,
    shichenZh: '子時・丑時・寅時・卯時',
    shichenPy: 'Zǐ · Chǒu · Yín · Mǎo',
    organZh:   '腎 · 肝 · 膽',
    organEn:   'Kidney · Liver · Gallbladder',
    elementZh: '水',
    orbChar:   '靜',
    titleZh:   '夜間修復',
    titleEn:   'Night Recovery',
    emotionalZh: '放下一切，靜入深眠，讓身體自行修復',
    emotionalEn: 'Release everything, sink into deep rest, let the body restore itself',
    soundZh:   '深海靜流',
    soundEn:   'Deep Ocean Stillness',
    baseTone:  174,
    pulse:     40,
    element:   'water',
    colors: {
      bg1: '#030712', bg2: '#071128',
      accent: '#4080b0',
      accentSoft: 'rgba(64,128,176,0.18)', accentGlow: 'rgba(64,128,176,0.12)',
      orbColor:  'rgba(64,128,176,0.28)',  btnBorder: 'rgba(64,128,176,0.45)',
      textPrimary: '#d0e4f5', textSecondary: '#6a90b8', textMuted: '#364e64',
    },
  },
  {
    id: 'morning-nourish',
    timeStart: 7,
    timeEnd:   9,
    shichenZh: '辰時',
    shichenPy: 'Chén Shí',
    organZh:   '胃',
    organEn:   'Stomach',
    elementZh: '土',
    orbChar:   '養',
    titleZh:   '晨間養胃',
    titleEn:   'Morning Nourish',
    emotionalZh: '晨光初醒，溫養胃氣，以平靜迎接新的一天',
    emotionalEn: 'Dawn awakens gently — warm and nourish the stomach, greet the new day in calm',
    soundZh:   '晨曦暖流',
    soundEn:   'Dawn Warm Current',
    baseTone:  285,
    pulse:     52,
    element:   'earth',
    colors: {
      bg1: '#110a00', bg2: '#251500',
      accent: '#c08830',
      accentSoft: 'rgba(192,136,48,0.18)', accentGlow: 'rgba(192,136,48,0.12)',
      orbColor:  'rgba(192,136,48,0.28)',  btnBorder: 'rgba(192,136,48,0.45)',
      textPrimary: '#f0ddb0', textSecondary: '#b89050', textMuted: '#6a4e20',
    },
  },
  {
    id: 'steady-focus',
    timeStart: 9,
    timeEnd:   11,
    shichenZh: '巳時',
    shichenPy: 'Sì Shí',
    organZh:   '脾',
    organEn:   'Spleen',
    elementZh: '土',
    orbChar:   '定',
    titleZh:   '脾氣穩定',
    titleEn:   'Steady Focus',
    emotionalZh: '氣定神閒，思維清晰，專注當下每一刻',
    emotionalEn: 'Calm and composed, clear-minded, present in each moment',
    soundZh:   '黃土共鳴',
    soundEn:   'Golden Earth Resonance',
    baseTone:  396,
    pulse:     58,
    element:   'earth',
    colors: {
      bg1: '#0e0c00', bg2: '#1c1800',
      accent: '#b09020',
      accentSoft: 'rgba(176,144,32,0.18)', accentGlow: 'rgba(176,144,32,0.12)',
      orbColor:  'rgba(176,144,32,0.28)',  btnBorder: 'rgba(176,144,32,0.45)',
      textPrimary: '#ece0a0', textSecondary: '#a08828', textMuted: '#5a4c14',
    },
  },
  {
    id: 'midday-heart',
    timeStart: 11,
    timeEnd:   13,
    shichenZh: '午時',
    shichenPy: 'Wǔ Shí',
    organZh:   '心',
    organEn:   'Heart',
    elementZh: '火',
    orbChar:   '明',
    titleZh:   '午間清心',
    titleEn:   'Midday Clear-Heart',
    emotionalZh: '心明如水，清除雜念，以光明心境度過午時',
    emotionalEn: 'Heart clear as water — release scattered thoughts, move through midday with clarity',
    soundZh:   '赤日清暉',
    soundEn:   'Bright Solar Clarity',
    baseTone:  432,
    pulse:     64,
    element:   'fire',
    colors: {
      bg1: '#14020a', bg2: '#280514',
      accent: '#c04060',
      accentSoft: 'rgba(192,64,96,0.18)',  accentGlow: 'rgba(192,64,96,0.12)',
      orbColor:  'rgba(192,64,96,0.28)',   btnBorder: 'rgba(192,64,96,0.45)',
      textPrimary: '#f5d0d8', textSecondary: '#b06878', textMuted: '#623040',
    },
  },
  {
    id: 'afternoon-sorting',
    timeStart: 13,
    timeEnd:   15,
    shichenZh: '未時',
    shichenPy: 'Wèi Shí',
    organZh:   '小腸',
    organEn:   'Small Intestine',
    elementZh: '火',
    orbChar:   '化',
    titleZh:   '午後疏理',
    titleEn:   'Afternoon Sorting',
    emotionalZh: '消化所感，分類所思，讓下午的節奏平穩流動',
    emotionalEn: 'Digest what was felt, sort through thoughts, let the afternoon rhythm flow steadily',
    soundZh:   '暖陽徐風',
    soundEn:   'Warm Sun Gentle Wind',
    baseTone:  417,
    pulse:     60,
    element:   'fire',
    colors: {
      bg1: '#140900', bg2: '#281200',
      accent: '#d05020',
      accentSoft: 'rgba(208,80,32,0.18)',  accentGlow: 'rgba(208,80,32,0.12)',
      orbColor:  'rgba(208,80,32,0.28)',   btnBorder: 'rgba(208,80,32,0.45)',
      textPrimary: '#f5dcc8', textSecondary: '#b07050', textMuted: '#6a3820',
    },
  },
  {
    id: 'energy-guard',
    timeStart: 15,
    timeEnd:   17,
    shichenZh: '申時',
    shichenPy: 'Shēn Shí',
    organZh:   '膀胱',
    organEn:   'Bladder',
    elementZh: '水',
    orbChar:   '守',
    titleZh:   '護守元氣',
    titleEn:   'Energy Guard',
    emotionalZh: '守護內在能量，避免消耗過度，以穩健之力完成下午',
    emotionalEn: 'Guard your inner energy, avoid over-extension, complete the afternoon with steadiness',
    soundZh:   '清泉護流',
    soundEn:   'Clear Spring Guardian',
    baseTone:  528,
    pulse:     56,
    element:   'water',
    colors: {
      bg1: '#030c14', bg2: '#061828',
      accent: '#3070a8',
      accentSoft: 'rgba(48,112,168,0.18)', accentGlow: 'rgba(48,112,168,0.12)',
      orbColor:  'rgba(48,112,168,0.28)',  btnBorder: 'rgba(48,112,168,0.45)',
      textPrimary: '#c8dff0', textSecondary: '#5888b0', textMuted: '#2a5070',
    },
  },
  {
    id: 'evening-grounding',
    timeStart: 17,
    timeEnd:   19,
    shichenZh: '酉時',
    shichenPy: 'Yǒu Shí',
    organZh:   '腎',
    organEn:   'Kidney',
    elementZh: '水',
    orbChar:   '歸',
    titleZh:   '傍晚歸元',
    titleEn:   'Evening Grounding',
    emotionalZh: '歸於根本，沉澱一日，讓腎氣在靜默中充盈',
    emotionalEn: 'Return to your roots, settle the day, let kidney essence replenish in silence',
    soundZh:   '暮色深淵',
    soundEn:   'Dusk Deep Resonance',
    baseTone:  396,
    pulse:     50,
    element:   'water',
    colors: {
      bg1: '#07030f', bg2: '#120620',
      accent: '#6050a8',
      accentSoft: 'rgba(96,80,168,0.18)',  accentGlow: 'rgba(96,80,168,0.12)',
      orbColor:  'rgba(96,80,168,0.28)',   btnBorder: 'rgba(96,80,168,0.45)',
      textPrimary: '#d0c8f0', textSecondary: '#8878c0', textMuted: '#404090',
    },
  },
  {
    id: 'night-comfort',
    timeStart: 19,
    timeEnd:   21,
    shichenZh: '戌時',
    shichenPy: 'Xū Shí',
    organZh:   '心包',
    organEn:   'Pericardium',
    elementZh: '火',
    orbChar:   '撫',
    titleZh:   '夜間安撫',
    titleEn:   'Night Comfort',
    emotionalZh: '包裹心房，柔化一天的情緒，以溫柔迎接夜晚',
    emotionalEn: 'Enfold the heart, soften the day\'s emotions, welcome the night with gentleness',
    soundZh:   '暗夜溫光',
    soundEn:   'Night Warm Glow',
    baseTone:  639,
    pulse:     46,
    element:   'fire',
    colors: {
      bg1: '#130511', bg2: '#260a20',
      accent: '#a04880',
      accentSoft: 'rgba(160,72,128,0.18)', accentGlow: 'rgba(160,72,128,0.12)',
      orbColor:  'rgba(160,72,128,0.28)',  btnBorder: 'rgba(160,72,128,0.45)',
      textPrimary: '#f0d0e8', textSecondary: '#c878a8', textMuted: '#703860',
    },
  },
  {
    id: 'late-night-settle',
    timeStart: 21,
    timeEnd:   23,
    shichenZh: '亥時',
    shichenPy: 'Hài Shí',
    organZh:   '三焦',
    organEn:   'Triple Burner',
    elementZh: '火',
    orbChar:   '息',
    titleZh:   '夜晚安定',
    titleEn:   'Late-Night Settle',
    emotionalZh: '放鬆神經，引入睡意，化解殘餘思緒',
    emotionalEn: 'Ease the nerves, invite gentle drowsiness, dissolve lingering thoughts',
    soundZh:   '暮靜流韻',
    soundEn:   'Dusk Still Resonance',
    baseTone:  741,
    pulse:     44,
    element:   'fire',
    colors: {
      bg1: '#0a0514', bg2: '#160a28',
      accent: '#8050b0',
      accentSoft: 'rgba(128,80,176,0.18)', accentGlow: 'rgba(128,80,176,0.12)',
      orbColor:  'rgba(128,80,176,0.28)',  btnBorder: 'rgba(128,80,176,0.45)',
      textPrimary: '#e8d0f8', textSecondary: '#a080d0', textMuted: '#583870',
    },
  },
];

/* ── Helper: detect current mode from local time ── */
function detectMode() {
  const h = new Date().getHours();
  if (h >= 23 || h < 7)  return MODES[0]; // Night Recovery
  if (h >= 7  && h < 9)  return MODES[1]; // Morning Nourish
  if (h >= 9  && h < 11) return MODES[2]; // Steady Focus
  if (h >= 11 && h < 13) return MODES[3]; // Midday Clear-Heart
  if (h >= 13 && h < 15) return MODES[4]; // Afternoon Sorting
  if (h >= 15 && h < 17) return MODES[5]; // Energy Guard
  if (h >= 17 && h < 19) return MODES[6]; // Evening Grounding
  if (h >= 19 && h < 21) return MODES[7]; // Night Comfort
  return MODES[8];                         // Late-Night Settle
}

/* ── Helper: zero-pad ── */
function pad2(n) { return String(n).padStart(2, '0'); }

/* ── Helper: format seconds as M:SS ── */
function fmtTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${pad2(s)}`;
}


/* ══════════════════════════════════════════════
   SECTION 2 — AUDIO ENGINE (Web Audio API)
   ══════════════════════════════════════════════ */

class AudioEngine {
  constructor() {
    this.ctx         = null;
    this.masterGain  = null;
    this.nodes       = [];   // { osc, gain } pairs to stop later
    this.isPlaying   = false;
  }

  /* Lazily create AudioContext on first user gesture */
  _ensureCtx() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0;
    this.masterGain.connect(this.ctx.destination);
  }

  /* Build a simple Schroeder-style reverb from all-pass delay network */
  _makeReverb() {
    const ctx  = this.ctx;
    const wet  = ctx.createGain();
    const dry  = ctx.createGain();
    wet.gain.value = 0.28;
    dry.gain.value = 0.72;

    const delays  = [0.023, 0.041, 0.067, 0.089, 0.127];
    const fbGains = [0.36,  0.34,  0.32,  0.30,  0.28 ];

    delays.forEach((dt, i) => {
      const delay = ctx.createDelay(0.5);
      const fb    = ctx.createGain();
      const lp    = ctx.createBiquadFilter();
      delay.delayTime.value = dt;
      fb.gain.value         = fbGains[i];
      lp.type               = 'lowpass';
      lp.frequency.value    = 2800;
      lp.Q.value            = 0.5;

      wet.connect(delay);
      delay.connect(lp);
      lp.connect(fb);
      fb.connect(delay);
      delay.connect(this.masterGain);
    });

    return { wet, dry };
  }

  /* Generate layered drone tones for a given mode */
  async start(mode) {
    this._ensureCtx();
    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    // Fade out & clear previous sounds
    if (this.isPlaying) await this.stop(true);

    this.isPlaying = true;
    const ctx = this.ctx;
    const t   = ctx.currentTime;
    const { baseTone, element, pulse } = mode;

    /* Reverb network */
    const rev = this._makeReverb();
    rev.dry.connect(this.masterGain);

    /* Harmonic series for each element archetype */
    const harmonics = this._harmonicsFor(element, baseTone);

    harmonics.forEach(({ freq, gainVal, type, detuneHz }) => {
      const osc    = ctx.createOscillator();
      const gainNd = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type            = type || 'sine';
      osc.frequency.value = freq;
      if (detuneHz) osc.detune.value = detuneHz * 100; // cents

      filter.type            = 'lowpass';
      filter.frequency.value = element === 'fire' ? 3200 : element === 'earth' ? 2400 : 1800;
      filter.Q.value         = 0.6;

      gainNd.gain.setValueAtTime(0, t);
      gainNd.gain.linearRampToValueAtTime(gainVal, t + 4);

      osc.connect(filter);
      filter.connect(gainNd);
      gainNd.connect(rev.wet);
      gainNd.connect(rev.dry);

      osc.start(t);
      this.nodes.push({ osc, gain: gainNd });
    });

    /* Tremolo LFO */
    const lfo     = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type            = 'sine';
    lfo.frequency.value = element === 'water' ? 0.028 : element === 'earth' ? 0.042 : 0.055;
    lfoGain.gain.value  = 0.06;
    lfo.connect(lfoGain);
    if (this.nodes.length > 0) {
      lfoGain.connect(this.nodes[0].gain.gain);
    }
    lfo.start(t);
    this.nodes.push({ osc: lfo, gain: lfoGain });

    /* Pulse beat (very subtle amplitude modulation at mode BPM) */
    const beatLfo     = ctx.createOscillator();
    const beatGain    = ctx.createGain();
    beatLfo.type            = 'sine';
    beatLfo.frequency.value = pulse / 60;
    beatGain.gain.value     = 0.04;
    beatLfo.connect(beatGain);
    beatGain.connect(this.masterGain.gain);
    beatLfo.start(t);
    this.nodes.push({ osc: beatLfo, gain: beatGain });

    /* Fade-in master */
    this.masterGain.gain.cancelScheduledValues(t);
    this.masterGain.gain.setValueAtTime(0, t);
    this.masterGain.gain.linearRampToValueAtTime(0.48, t + 4);
  }

  /* Element-specific harmonic layers */
  _harmonicsFor(element, base) {
    switch (element) {
      case 'water':
        return [
          { freq: base,         gainVal: 0.38, type: 'sine' },
          { freq: base * 1.5,   gainVal: 0.14, type: 'sine' },
          { freq: base * 2,     gainVal: 0.07, type: 'sine' },
          { freq: base * 0.5,   gainVal: 0.28, type: 'sine' },
          { freq: base * 0.75,  gainVal: 0.10, type: 'sine', detuneHz: 0.7 },
        ];
      case 'earth':
        return [
          { freq: base,         gainVal: 0.35, type: 'sine' },
          { freq: base * 1.25,  gainVal: 0.20, type: 'sine' },
          { freq: base * 1.5,   gainVal: 0.12, type: 'sine' },
          { freq: base * 2,     gainVal: 0.06, type: 'sine' },
          { freq: base * 0.75,  gainVal: 0.16, type: 'sine', detuneHz: 0.5 },
        ];
      case 'fire':
        return [
          { freq: base,         gainVal: 0.30, type: 'sine' },
          { freq: base * 1.25,  gainVal: 0.18, type: 'sine' },
          { freq: base * 2,     gainVal: 0.14, type: 'sine' },
          { freq: base * 3,     gainVal: 0.07, type: 'sine' },
          { freq: base * 0.667, gainVal: 0.12, type: 'sine', detuneHz: 0.6 },
        ];
      default:
        return [
          { freq: base,       gainVal: 0.38, type: 'sine' },
          { freq: base * 1.5, gainVal: 0.14, type: 'sine' },
        ];
    }
  }

  /* Graceful fade-out and cleanup */
  stop(immediate = false) {
    return new Promise((resolve) => {
      if (!this.ctx || this.nodes.length === 0) {
        this.isPlaying = false;
        resolve();
        return;
      }
      const t = this.ctx.currentTime;
      const fadeTime = immediate ? 0.8 : 2.5;

      this.masterGain.gain.cancelScheduledValues(t);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, t);
      this.masterGain.gain.linearRampToValueAtTime(0, t + fadeTime);

      const nodes = this.nodes.slice();
      this.nodes = [];
      this.isPlaying = false;

      setTimeout(() => {
        nodes.forEach(({ osc }) => { try { osc.stop(); } catch (_) {} });
        resolve();
      }, (fadeTime + 0.1) * 1000);
    });
  }

  setVolume(v) {
    if (!this.masterGain) return;
    this.masterGain.gain.setTargetAtTime(v, this.ctx.currentTime, 0.4);
  }
}


/* ══════════════════════════════════════════════
   SECTION 3 — MEDITATION TIMER
   ══════════════════════════════════════════════ */

class MeditationTimer {
  constructor(onTick, onComplete) {
    this.onTick     = onTick;
    this.onComplete = onComplete;
    this.duration   = 5 * 60; // seconds
    this.remaining  = this.duration;
    this.running    = false;
    this._interval  = null;
    this._breathPhase = 'inhale';
    this._breathSecs  = 0;
  }

  setDuration(mins) {
    this.duration  = mins * 60;
    this.remaining = this.duration;
    this.onTick(this.remaining, this._breathPhase);
  }

  start() {
    if (this.running) return;
    this.running     = true;
    this._breathSecs = 0;
    this._breathPhase = 'inhale';

    this._interval = setInterval(() => {
      this.remaining--;
      this._breathSecs++;

      // 4s inhale → 6s exhale = 10s cycle
      if (this._breathPhase === 'inhale' && this._breathSecs >= 4) {
        this._breathPhase = 'exhale';
        this._breathSecs  = 0;
      } else if (this._breathPhase === 'exhale' && this._breathSecs >= 6) {
        this._breathPhase = 'inhale';
        this._breathSecs  = 0;
      }

      this.onTick(this.remaining, this._breathPhase);

      if (this.remaining <= 0) {
        this.stop();
        this.onComplete();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this._interval);
    this._interval = null;
    this.running   = false;
  }

  reset() {
    this.stop();
    this.remaining    = this.duration;
    this._breathSecs  = 0;
    this._breathPhase = 'inhale';
    this.onTick(this.remaining, 'idle');
  }
}


/* ══════════════════════════════════════════════
   SECTION 4 — BREATHING RESET (90 seconds)
   ══════════════════════════════════════════════ */

class BreathingReset {
  /* 4s inhale + 6s exhale = 10s cycle × 9 = 90s */
  constructor(onTick, onComplete) {
    this.onTick     = onTick;
    this.onComplete = onComplete;
    this.TOTAL      = 90;
    this.remaining  = this.TOTAL;
    this.running    = false;
    this._interval  = null;
    this._phase     = 'idle';
    this._phaseSecs = 0;
    this._cycle     = 9;
  }

  start() {
    if (this.running) return;
    this.running    = true;
    this.remaining  = this.TOTAL;
    this._phase     = 'inhale';
    this._phaseSecs = 0;
    this._cycle     = 9;
    this.onTick(this.remaining, this._phase, this._cycle);

    this._interval = setInterval(() => {
      this.remaining--;
      this._phaseSecs++;

      if (this._phase === 'inhale' && this._phaseSecs >= 4) {
        this._phase     = 'exhale';
        this._phaseSecs = 0;
      } else if (this._phase === 'exhale' && this._phaseSecs >= 6) {
        this._phase     = 'inhale';
        this._phaseSecs = 0;
        this._cycle     = Math.max(0, this._cycle - 1);
      }

      this.onTick(this.remaining, this._phase, this._cycle);

      if (this.remaining <= 0) {
        this.stop();
        this.onComplete();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this._interval);
    this._interval = null;
    this.running   = false;
    this._phase    = 'idle';
  }

  reset() {
    this.stop();
    this.remaining  = this.TOTAL;
    this._cycle     = 9;
    this.onTick(this.remaining, 'idle', 9);
  }
}


/* ══════════════════════════════════════════════
   SECTION 5 — BACKGROUND CANVAS PAINTER
   ══════════════════════════════════════════════ */

class BackgroundPainter {
  constructor(canvas) {
    this.canvas  = canvas;
    this.ctx     = canvas.getContext('2d');
    this.particles = [];
    this.accent  = '#4080b0';
    this.running = false;
    this._raf    = null;
    this._resize();
    window.addEventListener('resize', () => this._resize());
  }

  _resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  setAccent(hex) { this.accent = hex; }

  _spawnParticle() {
    return {
      x:    Math.random() * this.canvas.width,
      y:    Math.random() * this.canvas.height,
      r:    1 + Math.random() * 2.5,
      vx:   (Math.random() - 0.5) * 0.18,
      vy:   -0.06 - Math.random() * 0.14,
      life: 0,
      maxLife: 200 + Math.random() * 300,
    };
  }

  start() {
    if (this.running) return;
    this.running    = true;
    this.particles  = Array.from({ length: 28 }, () => this._spawnParticle());
    this._loop();
  }

  _loop() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((p, i) => {
      p.life++;
      p.x += p.vx;
      p.y += p.vy;

      const progress = p.life / p.maxLife;
      const alpha    = progress < 0.2 ? progress / 0.2 : progress > 0.8 ? (1 - progress) / 0.2 : 1;
      /* Max alpha hex 0x3C ≈ 24% opacity — keeps particles subtle */
      const MAX_PARTICLE_ALPHA_HEX = 0x3C;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = this.accent + Math.round(alpha * MAX_PARTICLE_ALPHA_HEX).toString(16).padStart(2, '0');
      ctx.fill();

      if (p.life >= p.maxLife) {
        this.particles[i] = this._spawnParticle();
      }
    });

    /* Slow sweeping glow arc in top-left quadrant */
    const t     = Date.now() / 8000;
    const gx    = this.canvas.width  * 0.22;
    const gy    = this.canvas.height * 0.18;
    const grad  = ctx.createRadialGradient(gx, gy, 0, gx, gy, this.canvas.width * 0.55);
    const hexA  = this.accent + '22';
    const hexB  = this.accent + '00';
    grad.addColorStop(0, hexA);
    grad.addColorStop(1, hexB);
    ctx.globalAlpha = 0.5 + Math.sin(t) * 0.18;
    ctx.fillStyle   = grad;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.globalAlpha = 1;

    this._raf = requestAnimationFrame(() => this._loop());
  }

  stop() {
    this.running = false;
    if (this._raf) { cancelAnimationFrame(this._raf); this._raf = null; }
  }
}


/* ══════════════════════════════════════════════
   SECTION 6 — APP CONTROLLER
   ══════════════════════════════════════════════ */

class App {
  constructor() {
    this.currentMode  = null;
    this.lang         = 'zh';
    this.audio        = new AudioEngine();
    this.bgPainter    = null;
    this.medTimer     = null;
    this.breathReset  = null;
    this.audioPlaying = false;
    this._modeCheckInterval = null;
  }

  /* ── Init ── */
  init() {
    this._cacheDOM();
    this._initBg();
    this._initMeditation();
    this._initBreathing();
    this._bindEvents();
    this._applyMode(detectMode(), false);
    this._startClock();
    this._startModeWatch();
    this._registerSW();
  }

  /* ── DOM refs ── */
  _cacheDOM() {
    const $ = (id) => document.getElementById(id);
    this.dom = {
      app:          document.getElementById('app'),
      clock:        $('liveClock'),
      langToggle:   $('langToggle'),
      ltZh:         document.querySelector('.lt-zh'),
      ltEn:         document.querySelector('.lt-en'),
      /* mode fields */
      shichenZh:    $('shichenZh'),
      shichenPy:    $('shichenPy'),
      elementZh:    $('elementZh'),
      elementBadge: $('elementBadge'),
      organZh:      $('organZh'),
      organEn:      $('organEn'),
      orbChar:      $('orbChar'),
      modeTitleZh:  $('modeTitleZh'),
      modeTitleEn:  $('modeTitleEn'),
      emotionalZh:  $('emotionalZh'),
      emotionalEn:  $('emotionalEn'),
      soundZh:      $('soundZh'),
      soundEn:      $('soundEn'),
      metricHz:     $('metricHz'),
      metricBpm:    $('metricBpm'),
      /* buttons */
      btnAudio:     $('btnAudio'),
      btnAudioIcon: $('btnAudioIcon'),
      btnMeditation:$('btnMeditation'),
      btnBreath:    $('btnBreath'),
      /* meditation overlay */
      medOverlay:   $('meditationOverlay'),
      medClose:     $('btnMeditationClose'),
      medBackdrop:  $('meditationBackdrop'),
      medCircle:    $('medCircle'),
      medPhase:     $('medPhase'),
      medTimer:     $('medTimer'),
      medStart:     $('btnMeditationStart'),
      durationRow:  $('durationRow'),
      /* breathing overlay */
      breathOverlay: $('breathingOverlay'),
      breathClose:   $('btnBreathClose'),
      breathBackdrop:$('breathingBackdrop'),
      breathCircle:  $('breathCircle'),
      breathFill:    $('breathFill'),
      breathPhase:   $('breathPhase'),
      breathCycle:   $('breathCycle'),
      breathProgress:$('breathProgressBar'),
      breathSecs:    $('breathSecsLeft'),
      breathStart:   $('btnBreathStart'),
      /* meta */
      themeColor:    $('themeMetaColor'),
    };
  }

  /* ── Background canvas ── */
  _initBg() {
    const canvas = document.getElementById('bgCanvas');
    if (canvas) {
      this.bgPainter = new BackgroundPainter(canvas);
      this.bgPainter.start();
    }
  }

  /* ── Mode application ── */
  _applyMode(mode, animate = true) {
    if (this.currentMode && mode.id === this.currentMode.id) return;
    this.currentMode = mode;

    const { colors, pulse } = mode;
    const root = document.documentElement;

    /* CSS custom properties */
    root.style.setProperty('--bg-1',          colors.bg1);
    root.style.setProperty('--bg-2',          colors.bg2);
    root.style.setProperty('--accent',        colors.accent);
    root.style.setProperty('--accent-soft',   colors.accentSoft);
    root.style.setProperty('--accent-glow',   colors.accentGlow);
    root.style.setProperty('--orb-color',     colors.orbColor);
    root.style.setProperty('--btn-border',    colors.btnBorder);
    root.style.setProperty('--text-primary',  colors.textPrimary);
    root.style.setProperty('--text-secondary',colors.textSecondary);
    root.style.setProperty('--text-muted',    colors.textMuted);
    root.style.setProperty('--pulse-period',  `${(60 / pulse).toFixed(3)}s`);

    /* Theme-color meta */
    if (this.dom.themeColor) {
      this.dom.themeColor.setAttribute('content', colors.bg1);
    }

    /* Background painter accent */
    if (this.bgPainter) this.bgPainter.setAccent(colors.accent);

    /* Update text content */
    const d = this.dom;
    d.shichenZh.textContent   = mode.shichenZh;
    d.shichenPy.textContent   = mode.shichenPy;
    d.elementZh.textContent   = mode.elementZh;
    d.organZh.textContent     = mode.organZh;
    d.organEn.textContent     = mode.organEn;
    d.orbChar.textContent     = mode.orbChar;
    d.modeTitleZh.textContent = mode.titleZh;
    d.modeTitleEn.textContent = mode.titleEn;
    d.emotionalZh.textContent = mode.emotionalZh;
    d.emotionalEn.textContent = mode.emotionalEn;
    d.soundZh.textContent     = mode.soundZh;
    d.soundEn.textContent     = mode.soundEn;
    d.metricHz.textContent    = mode.baseTone;
    d.metricBpm.textContent   = mode.pulse;

    /* Animate content sections */
    if (animate) {
      const targets = [
        d.shichenZh, d.organZh, d.modeTitleZh, d.emotionalZh,
        d.soundZh, d.metricHz, d.metricBpm
      ];
      targets.forEach((el) => {
        if (!el) return;
        el.classList.remove('mode-animate');
        void el.offsetWidth; // force reflow
        el.classList.add('mode-animate');
      });
    }

    /* If audio is playing, cross-fade to new mode sounds */
    if (this.audioPlaying) {
      this.audio.start(mode);
    }
  }

  /* ── Clock ── */
  _startClock() {
    const update = () => {
      const now = new Date();
      if (this.dom.clock) {
        this.dom.clock.textContent = `${pad2(now.getHours())}:${pad2(now.getMinutes())}`;
      }
    };
    update();
    setInterval(update, 1000);
  }

  /* ── Hourly mode watch ── */
  _startModeWatch() {
    this._modeCheckInterval = setInterval(() => {
      this._applyMode(detectMode());
    }, 60 * 1000);
  }

  /* ── Language toggle ── */
  _setLang(lang) {
    this.lang = lang;
    // Set on <html> so all elements — including overlays — inherit it
    document.documentElement.dataset.lang = lang;
    if (this.dom.ltZh) {
      this.dom.ltZh.classList.toggle('active', lang === 'zh');
      this.dom.ltEn.classList.toggle('active', lang === 'en');
    }
  }

  /* ── Overlay helpers ── */
  _openOverlay(el) {
    el.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  _closeOverlay(el) {
    el.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* ── Meditation overlay ── */
  _initMeditation() {
    let selectedMins = 5;
    let isRunning    = false;

    this.medTimer = new MeditationTimer(
      (remaining, phase) => {
        if (this.dom.medTimer) {
          this.dom.medTimer.textContent = fmtTime(remaining);
        }
        if (this.dom.medPhase) {
          const zhText = phase === 'inhale' ? '吸氣' : phase === 'exhale' ? '呼氣' : '靜坐';
          const enText = phase === 'inhale' ? 'Inhale' : phase === 'exhale' ? 'Exhale' : 'Sit Still';
          this.dom.medPhase.innerHTML =
            `<span class="zh">${zhText}</span><span class="en">${enText}</span>`;
        }
        /* Drive breathing animation */
        const circle = this.dom.medCircle;
        if (circle) {
          circle.classList.remove('inhale', 'exhale');
          if (phase === 'inhale' || phase === 'exhale') {
            void circle.offsetWidth;
            circle.classList.add(phase);
          }
        }
      },
      () => {
        /* Completion */
        isRunning = false;
        if (this.dom.medStart) {
          this.dom.medStart.innerHTML =
            '<span class="zh">再次冥想</span><span class="en">Again</span>';
          this.dom.medStart.classList.remove('running');
        }
        if (this.dom.medCircle) this.dom.medCircle.classList.remove('inhale', 'exhale');
        if (this.dom.medPhase) {
          this.dom.medPhase.innerHTML =
            '<span class="zh">完成 ✦</span><span class="en">Complete ✦</span>';
        }
      }
    );

    /* Duration buttons */
    this.dom.durationRow?.addEventListener('click', (e) => {
      const btn = e.target.closest('.dur-btn');
      if (!btn || isRunning) return;
      selectedMins = parseInt(btn.dataset.mins, 10);
      this.dom.durationRow.querySelectorAll('.dur-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this.medTimer.setDuration(selectedMins);
    });

    /* Start/stop */
    this.dom.medStart?.addEventListener('click', () => {
      if (!isRunning) {
        this.medTimer.setDuration(selectedMins);
        this.medTimer.start();
        isRunning = true;
        this.dom.medStart.innerHTML =
          '<span class="zh">停止冥想</span><span class="en">Stop</span>';
        this.dom.medStart.classList.add('running');
      } else {
        this.medTimer.stop();
        isRunning = false;
        this.medTimer.reset();
        this.dom.medStart.innerHTML =
          '<span class="zh">開始冥想</span><span class="en">Begin</span>';
        this.dom.medStart.classList.remove('running');
        if (this.dom.medCircle) this.dom.medCircle.classList.remove('inhale', 'exhale');
      }
    });
  }

  /* ── Breathing reset overlay ── */
  _initBreathing() {
    /* SVG breath circle: radius=80, circumference = 2π × 80 ≈ 502.65 */
    const BREATH_CIRCLE_RADIUS = 80;
    const CIRC = 2 * Math.PI * BREATH_CIRCLE_RADIUS;

    this.breathReset = new BreathingReset(
      (remaining, phase, cycle) => {
        /* Progress bar */
        const pct = ((90 - remaining) / 90) * 100;
        if (this.dom.breathProgress) this.dom.breathProgress.style.width = `${pct}%`;
        if (this.dom.breathSecs)     this.dom.breathSecs.textContent = remaining;
        if (this.dom.breathCycle)    this.dom.breathCycle.textContent = cycle;

        /* Phase label */
        if (this.dom.breathPhase) {
          const zhText = phase === 'inhale' ? '吸氣' : phase === 'exhale' ? '呼氣' : '準備';
          const enText = phase === 'inhale' ? 'Inhale' : phase === 'exhale' ? 'Exhale' : 'Ready';
          this.dom.breathPhase.innerHTML =
            `<span class="zh">${zhText}</span><span class="en">${enText}</span>`;
        }

        /* SVG arc animation */
        if (this.dom.breathFill && phase !== 'idle') {
          const cycleSecs  = phase === 'inhale' ? 4 : 6;
          // We don't track exact sub-cycle time here, so animate via CSS
          // The fill runs full circle per phase duration using CSS transition
          const dashOffset = phase === 'inhale' ? 0 : CIRC;
          this.dom.breathFill.style.transition = `stroke-dashoffset ${cycleSecs}s linear`;
          this.dom.breathFill.style.strokeDashoffset = dashOffset;
        }
      },
      () => {
        /* Completion */
        if (this.dom.breathStart) {
          this.dom.breathStart.innerHTML =
            '<span class="zh">重置完成 ✦</span><span class="en">Reset Complete ✦</span>';
          this.dom.breathStart.classList.remove('running');
        }
        if (this.dom.breathPhase) {
          this.dom.breathPhase.innerHTML =
            '<span class="zh">感謝自己</span><span class="en">Well done</span>';
        }
        if (this.dom.breathProgress) this.dom.breathProgress.style.width = '100%';
      }
    );

    this.dom.breathStart?.addEventListener('click', () => {
      if (!this.breathReset.running) {
        this.breathReset.start();
        this.dom.breathStart.innerHTML =
          '<span class="zh">停止重置</span><span class="en">Stop</span>';
        this.dom.breathStart.classList.add('running');
        /* Reset SVG fill */
        if (this.dom.breathFill) {
          this.dom.breathFill.style.transition = 'none';
          this.dom.breathFill.style.strokeDashoffset = CIRC;
        }
      } else {
        this.breathReset.stop();
        this.breathReset.reset();
        this.dom.breathStart.innerHTML =
          '<span class="zh">開始重置</span><span class="en">Begin Reset</span>';
        this.dom.breathStart.classList.remove('running');
        if (this.dom.breathProgress)  this.dom.breathProgress.style.width = '0%';
        if (this.dom.breathSecs)      this.dom.breathSecs.textContent = '90';
        if (this.dom.breathCycle)     this.dom.breathCycle.textContent = '9';
        if (this.dom.breathPhase) {
          this.dom.breathPhase.innerHTML =
            '<span class="zh">準備</span><span class="en">Ready</span>';
        }
        if (this.dom.breathFill) {
          this.dom.breathFill.style.transition = 'none';
          this.dom.breathFill.style.strokeDashoffset = CIRC;
        }
      }
    });
  }

  /* ── Event bindings ── */
  _bindEvents() {
    const d = this.dom;

    /* Language toggle */
    d.langToggle?.addEventListener('click', () => {
      this._setLang(this.lang === 'zh' ? 'en' : 'zh');
    });

    /* Audio toggle */
    d.btnAudio?.addEventListener('click', async () => {
      if (!this.audioPlaying) {
        await this.audio.start(this.currentMode);
        this.audioPlaying = true;
        d.btnAudio.setAttribute('aria-pressed', 'true');
        d.btnAudioIcon.textContent = '■';
        d.btnAudio.querySelector('.zh').textContent = '停止音境';
        d.btnAudio.querySelector('.en').textContent = 'Stop Audio';
      } else {
        await this.audio.stop();
        this.audioPlaying = false;
        d.btnAudio.setAttribute('aria-pressed', 'false');
        d.btnAudioIcon.textContent = '▶';
        d.btnAudio.querySelector('.zh').textContent = '開始音境';
        d.btnAudio.querySelector('.en').textContent = 'Start Audio';
      }
    });

    /* Open meditation overlay */
    d.btnMeditation?.addEventListener('click', () => {
      this._openOverlay(d.medOverlay);
    });

    /* Close meditation overlay */
    d.medClose?.addEventListener('click', () => {
      this._closeOverlay(d.medOverlay);
      if (this.medTimer) { this.medTimer.stop(); this.medTimer.reset(); }
      if (d.medStart) {
        d.medStart.innerHTML = '<span class="zh">開始冥想</span><span class="en">Begin</span>';
        d.medStart.classList.remove('running');
      }
    });

    d.medBackdrop?.addEventListener('click', () => {
      this._closeOverlay(d.medOverlay);
    });

    /* Open breathing overlay */
    d.btnBreath?.addEventListener('click', () => {
      this._openOverlay(d.breathOverlay);
    });

    /* Close breathing overlay */
    d.breathClose?.addEventListener('click', () => {
      this._closeOverlay(d.breathOverlay);
      if (this.breathReset) { this.breathReset.stop(); this.breathReset.reset(); }
    });

    d.breathBackdrop?.addEventListener('click', () => {
      this._closeOverlay(d.breathOverlay);
    });

    /* Keyboard close overlays */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this._closeOverlay(d.medOverlay);
        this._closeOverlay(d.breathOverlay);
      }
    });
  }

  /* ── PWA Service Worker ── */
  _registerSW() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
  }
}


/* ══════════════════════════════════════════════
   SECTION 7 — BOOTSTRAP
   ══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();

  /* Expose for debugging in dev */
  if (typeof window !== 'undefined') {
    window._shichenApp = app;
  }
});
