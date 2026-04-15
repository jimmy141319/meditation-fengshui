const COPY = {
  zh: {
    appName: '時辰安穩',
    eyebrow: 'iPad / iPhone 車內平穩模式',
    subtitle: '一進入就依時辰自動切換。含冥想模式、中英雙語、一次買斷 NT$99。',
    now: '現在時間',
    autoMode: '自動模式',
    emotion: '情緒目標',
    sound: '音樂氛圍',
    freq: '基準音頻',
    freqNote: '作為原創冥想聲景的基礎音色標示',
    pulse: '節奏',
    pulseNote: '建議播放節奏範圍',
    meditation: '冥想',
    meditationNote: '進入短版呼吸與安定引導',
    play: '開始播放',
    meditate: '開始冥想',
    reset: '90 秒拉回',
    adviceTitle: '現在最適合',
    meditationPanel: '冥想引導',
    helper: '點擊開始冥想後，依圈圈節奏呼吸。',
    settings: '設定',
    autoPrepare: '進入後自動準備播放',
    meditationDefault: '預設顯示冥想區',
    manualMode: '手動覆蓋模式',
    license: '授權模式',
    installHint: '加入主畫面',
    footer: '此 App 以時辰與氛圍為靈感，提供原創聲景與冥想流程；基準音頻為創作標示，不作醫療診斷或療效保證。',
    statusReady: '聲音尚未開始。點一下「開始播放」即可啟動原創聲景。',
    statusPlaying: '正在播放原創聲景：',
    statusMeditation: '冥想已啟動。請跟著圈圈節奏慢慢呼吸。',
    statusReset: '已啟動 90 秒拉回。現在先穩住，不用解決全部。',
    statusFailed: '音訊啟動失敗：',
    breathing: ['吸氣', '停留', '吐氣'],
    price: 'NT$99 一次買斷'
  },
  en: {
    appName: 'Shichen Calm',
    eyebrow: 'iPad / iPhone In-Car Calm Mode',
    subtitle: 'Auto-switches by time segment on entry. Includes meditation, bilingual UI, and a one-time NT$99 purchase model.',
    now: 'Current Time',
    autoMode: 'Auto Mode',
    emotion: 'Emotional Goal',
    sound: 'Sound Mood',
    freq: 'Base Tone',
    freqNote: 'Shown as the tonal base for original meditation soundscapes',
    pulse: 'Pulse',
    pulseNote: 'Suggested rhythm range',
    meditation: 'Meditation',
    meditationNote: 'Enter a short breathing and grounding session',
    play: 'Start Audio',
    meditate: 'Start Meditation',
    reset: '90-sec Reset',
    adviceTitle: 'Best for Now',
    meditationPanel: 'Meditation Guide',
    helper: 'After starting meditation, breathe with the ring rhythm.',
    settings: 'Settings',
    autoPrepare: 'Auto-prepare on entry',
    meditationDefault: 'Show meditation area by default',
    manualMode: 'Manual override mode',
    license: 'License',
    installHint: 'Add to Home Screen',
    footer: 'This app uses time-based ambience as inspiration and provides original soundscapes plus meditation flows. Base tone labels are for creative reference only, not medical diagnosis or treatment claims.',
    statusReady: 'Audio is ready but not started. Tap "Start Audio" to launch the original soundscape.',
    statusPlaying: 'Playing original soundscape: ',
    statusMeditation: 'Meditation started. Follow the ring and breathe slowly.',
    statusReset: '90-second reset started. Stabilize first; do not solve everything at once.',
    statusFailed: 'Audio start failed: ',
    breathing: ['Inhale', 'Hold', 'Exhale'],
    price: 'NT$99 one-time purchase'
  }
};

const MODES = [
  { key:'night-calm', start:23, end:7, range:'23:00–07:00', shichenZh:'夜間', shichenEn:'Night', organZh:'膽 / 肝 / 肺 / 大腸', organEn:'Gallbladder / Liver / Lung / Large Intestine', titleZh:'夜間靜養模式', titleEn:'Night Recovery Mode', subtitleZh:'晚上與清晨偏向收心、減刺激、維持安穩。', subtitleEn:'Late night and early morning favor settling down, reducing stimulation, and staying calm.', emotionZh:'收斂、安靜、避免過度刺激', emotionEn:'Settle down, stay quiet, avoid overstimulation', soundZh:'深、緩、靜', soundEn:'Deep, slow, quiet', chipZh:'夜間靜養', chipEn:'Night Recovery', adviceZh:['維持低刺激，不用太多變化。','適合柔和環境音、慢鋼琴、安神聲景。','如果只是短暫查看，建議不要大音量。'], adviceEn:['Keep stimulation low and avoid too much variation.','Soft ambience, slow piano, and calming textures fit best.','If opening briefly, keep the volume low.'], frequency:174, pulse:8, voiceZh:'先收斂，再放鬆。', voiceEn:'Settle first, then relax.' },
  { key:'stomach', start:7, end:9, range:'07:00–09:00', shichenZh:'辰時', shichenEn:'Morning', organZh:'胃', organEn:'Stomach', titleZh:'晨間健脾養胃模式', titleEn:'Morning Nourish Mode', subtitleZh:'現在適合穩定啟動，讓你與乘客慢慢進入舒服狀態。', subtitleEn:'Best for a stable start so both driver and passengers ease into a comfortable state.', emotionZh:'溫和啟動、減少鈍感與無力', emotionEn:'Gentle activation, less dullness and low energy', soundZh:'暖、順、柔', soundEn:'Warm, smooth, soft', chipZh:'胃經時段', chipEn:'Stomach Window', adviceZh:['用溫暖鋼琴、木吉他、乾淨 lo-fi。','一開始不要太刺激，先讓節奏和呼吸對上。','適合早班載客的乾淨車內氛圍。'], adviceEn:['Use warm piano, acoustic guitar, and clean lo-fi textures.','Do not overstimulate early; align rhythm with breathing first.','Great for a clean in-car mood during morning rides.'], frequency:220, pulse:11, voiceZh:'慢慢啟動，先穩下來。', voiceEn:'Ease in slowly and stabilize first.' },
  { key:'spleen', start:9, end:11, range:'09:00–11:00', shichenZh:'巳時', shichenEn:'Late Morning', organZh:'脾', organEn:'Spleen', titleZh:'穩定集中模式', titleEn:'Steady Focus Mode', subtitleZh:'脾經時段適合維持專注、舒服、平順的車內氣氛。', subtitleEn:'This period supports focus, comfort, and a smooth in-car atmosphere.', emotionZh:'穩住、聚焦、舒服', emotionEn:'Steady, focused, comfortable', soundZh:'平、淨、舒展', soundEn:'Even, clean, open', chipZh:'脾經時段', chipEn:'Spleen Window', adviceZh:['節奏可略微往前，但仍保持柔和。','適合白天市區載客與短距離通勤。','避免過度低頻與強烈鼓點。'], adviceEn:['The pulse can move slightly forward while staying gentle.','Works well for daytime city rides and short commutes.','Avoid heavy bass and aggressive drums.'], frequency:247, pulse:12, voiceZh:'保持平順，不用催快。', voiceEn:'Stay smooth; there is no need to rush.' },
  { key:'heart', start:11, end:13, range:'11:00–13:00', shichenZh:'午時', shichenEn:'Noon', organZh:'心', organEn:'Heart', titleZh:'午間清心穩神模式', titleEn:'Midday Clear-Heart Mode', subtitleZh:'中午容易心煩，現在適合清心、穩神、維持明亮。', subtitleEn:'Midday can become mentally busy. Clear, steady, and bright works best now.', emotionZh:'清心、穩神、減少煩躁', emotionEn:'Clear the mind, stay steady, reduce irritation', soundZh:'清、透、穩', soundEn:'Clear, airy, stable', chipZh:'心經時段', chipEn:'Heart Window', adviceZh:['可用較清透的器樂、輕電子 chill 或輕爵士。','保持清醒，但不要讓情緒往上衝。','塞車時尤其適合穩節奏。'], adviceEn:['Use transparent instrumentals, light chill electronics, or light jazz.','Stay awake without pushing emotions upward.','Especially helpful in traffic where steadiness matters.'], frequency:261, pulse:13, voiceZh:'清一下心，穩一下神。', voiceEn:'Clear the heart and steady the mind.' },
  { key:'small-intestine', start:13, end:15, range:'13:00–15:00', shichenZh:'未時', shichenEn:'Afternoon', organZh:'小腸', organEn:'Small Intestine', titleZh:'午後整理模式', titleEn:'Afternoon Sorting Mode', subtitleZh:'午後容易混亂與分心，現在適合減少雜音、維持節奏。', subtitleEn:'Afternoons can feel scattered. Reduce noise and maintain rhythm.', emotionZh:'整理、減雜、維持節奏', emotionEn:'Sort, simplify, maintain rhythm', soundZh:'清爽、平穩、流動', soundEn:'Fresh, stable, flowing', chipZh:'小腸經時段', chipEn:'Small Intestine Window', adviceZh:['不要讓選曲太跳。','適合節拍穩定但不強攻擊性的聲景。','用規律感對抗下午分心。'], adviceEn:['Avoid tracks that jump around too much.','Choose stable pulses without aggressive attack.','Use rhythmic regularity against afternoon drift.'], frequency:294, pulse:14, voiceZh:'先整理，再前進。', voiceEn:'Sort first, then move forward.' },
  { key:'bladder', start:15, end:17, range:'15:00–17:00', shichenZh:'申時', shichenEn:'Late Afternoon', organZh:'膀胱', organEn:'Bladder', titleZh:'午後降耗模式', titleEn:'Late-Afternoon Energy Guard Mode', subtitleZh:'這段時間容易開始耗損，現在適合降低刺激、守住穩定。', subtitleEn:'Energy can begin to drain now. Lower stimulation and protect steadiness.', emotionZh:'防耗、減緊繃、避免情緒累積', emotionEn:'Protect energy, ease tension, avoid buildup', soundZh:'淡、穩、收斂', soundEn:'Light, steady, inward', chipZh:'膀胱經時段', chipEn:'Bladder Window', adviceZh:['開始把音樂往收斂方向拉。','不要突然切到太嗨的歌。','適合準備進入傍晚節奏。'], adviceEn:['Begin moving the sound toward a more inward feel.','Do not suddenly switch to overly intense tracks.','Prepare for the evening rhythm now.'], frequency:329, pulse:12, voiceZh:'先守住，不要被耗掉。', voiceEn:'Protect your energy and do not get drained.' },
  { key:'kidney', start:17, end:19, range:'17:00–19:00', shichenZh:'酉時', shichenEn:'Evening', organZh:'腎', organEn:'Kidney', titleZh:'養腎安神模式', titleEn:'Evening Grounding Mode', subtitleZh:'傍晚容易緊、累、煩，現在適合回穩與安神。', subtitleEn:'Evening can bring fatigue, tension, and irritability. Ground and calm the system.', emotionZh:'安定、回穩、降低焦慮', emotionEn:'Grounded, stable, less anxious', soundZh:'靜、深、緩', soundEn:'Still, deep, slow', chipZh:'腎經時段', chipEn:'Kidney Window', adviceZh:['適合較慢、較深、較安定的聲景。','讓車內情緒收下來，避免夜間躁感。','乘客會更容易感到安全與舒適。'], adviceEn:['Use slower, deeper, more grounded soundscapes.','Let the cabin settle to avoid nighttime agitation.','Passengers often feel safer and more comfortable in this mood.'], frequency:349, pulse:10, voiceZh:'先安定，再前行。', voiceEn:'Ground first, then keep going.' },
  { key:'pericardium', start:19, end:21, range:'19:00–21:00', shichenZh:'戌時', shichenEn:'Nightfall', organZh:'心包', organEn:'Pericardium', titleZh:'夜間舒心模式', titleEn:'Night Comfort Mode', subtitleZh:'這段時間適合放下白天壓力，維持柔和、安心的氛圍。', subtitleEn:'This time favors releasing daytime pressure and maintaining a soft, reassuring mood.', emotionZh:'舒心、鬆開、帶安全感', emotionEn:'Soothing, loosening, reassuring', soundZh:'柔、暖、放鬆', soundEn:'Soft, warm, easing', chipZh:'心包經時段', chipEn:'Pericardium Window', adviceZh:['可加一點柔和 pad 與慢鋼琴。','適合晚間短程與安穩載客。','避免戲劇性太強的人聲情歌。'], adviceEn:['Add gentle pads and slow piano.','Great for calm evening rides and short night trips.','Avoid highly dramatic vocal ballads.'], frequency:392, pulse:9, voiceZh:'把白天放下來一些。', voiceEn:'Set some of the day down.' },
  { key:'triple-burner', start:21, end:23, range:'21:00–23:00', shichenZh:'亥時', shichenEn:'Late Night', organZh:'三焦', organEn:'Triple Burner', titleZh:'晚間收心模式', titleEn:'Late-Night Settle Mode', subtitleZh:'睡前與深夜前段適合減少外界干擾，回到更安定的節奏。', subtitleEn:'Before sleep and in early late-night hours, reduce external input and return to a steadier pace.', emotionZh:'收心、降刺激、準備休息', emotionEn:'Settle, lower stimulation, prepare for rest', soundZh:'淡、緩、靜謐', soundEn:'Subtle, slow, quiet', chipZh:'三焦經時段', chipEn:'Triple Burner Window', adviceZh:['音量再降一點。','適合簡單、低刺激、少變化的聲景。','如果要做冥想，這段最適合。'], adviceEn:['Lower the volume a bit further.','Use simple, low-stimulation, low-variation soundscapes.','If you want meditation, this is one of the best windows.'], frequency:432, pulse:8, voiceZh:'慢慢收心，準備安穩。', voiceEn:'Settle in slowly and prepare for calm.' }
];

const ELS = {
  eyebrow: document.getElementById('eyebrowLabel'),
  appTitle: document.getElementById('appTitle'),
  appSubtitle: document.getElementById('appSubtitle'),
  nowLabel: document.getElementById('nowLabel'),
  clock: document.getElementById('clock'),
  shichenChip: document.getElementById('shichenChip'),
  organChip: document.getElementById('organChip'),
  priceChip: document.getElementById('priceChip'),
  autoModeLabel: document.getElementById('autoModeLabel'),
  modeTitle: document.getElementById('modeTitle'),
  modeSubtitle: document.getElementById('modeSubtitle'),
  emotionLabel: document.getElementById('emotionLabel'),
  emotionText: document.getElementById('emotionText'),
  soundLabel: document.getElementById('soundLabel'),
  soundText: document.getElementById('soundText'),
  freqLabel: document.getElementById('freqLabel'),
  frequencyValue: document.getElementById('frequencyValue'),
  freqNote: document.getElementById('freqNote'),
  pulseLabel: document.getElementById('pulseLabel'),
  pulseValue: document.getElementById('pulseValue'),
  pulseNote: document.getElementById('pulseNote'),
  meditationLabel: document.getElementById('meditationLabel'),
  meditationValue: document.getElementById('meditationValue'),
  meditationNote: document.getElementById('meditationNote'),
  playBtn: document.getElementById('playBtn'),
  meditationBtn: document.getElementById('meditationBtn'),
  resetBtn: document.getElementById('resetBtn'),
  statusBox: document.getElementById('statusBox'),
  adviceTitle: document.getElementById('adviceTitle'),
  modeBadge: document.getElementById('modeBadge'),
  adviceList: document.getElementById('adviceList'),
  meditationPanelTitle: document.getElementById('meditationPanelTitle'),
  voiceLine: document.getElementById('voiceLine'),
  breathRing: document.getElementById('breathRing'),
  breathText: document.getElementById('breathText'),
  helperLine: document.getElementById('helperLine'),
  settingsTitle: document.getElementById('settingsTitle'),
  autoPrepareLabel: document.getElementById('autoPlayLabel'),
  meditationDefaultLabel: document.getElementById('meditationDefaultLabel'),
  manualModeLabel: document.getElementById('manualModeLabel'),
  licenseLabel: document.getElementById('licenseLabel'),
  installHintBtn: document.getElementById('installHintBtn'),
  autoPrepareToggle: document.getElementById('autoPrepareToggle'),
  meditationDefaultToggle: document.getElementById('meditationDefaultToggle'),
  manualModeSelect: document.getElementById('manualModeSelect'),
  licenseField: document.getElementById('licenseField'),
  footerText: document.getElementById('footerText'),
  languageToggle: document.getElementById('languageToggle')
};

let language = localStorage.getItem('shichen_lang') || 'zh';
let currentMode = null;
let audioCtx = null;
let masterGain = null;
let oscillators = [];
let lfo = null;
let meditationTimer = null;
let timeTicker = null;

function t(key) { return COPY[language][key]; }
function modeText(mode, zhField, enField) { return language === 'zh' ? mode[zhField] : mode[enField]; }
function getCurrentHourMinute() { const now = new Date(); return { now, hour: now.getHours(), minute: now.getMinutes() }; }

function matchMode(hour) {
  const manual = localStorage.getItem('shichen_manual_mode') || 'auto';
  if (manual !== 'auto') return MODES.find(m => m.key === manual) || MODES[0];
  for (const mode of MODES) {
    if (mode.start < mode.end) {
      if (hour >= mode.start && hour < mode.end) return mode;
    } else {
      if (hour >= mode.start || hour < mode.end) return mode;
    }
  }
  return MODES[0];
}

function renderSelect() {
  ELS.manualModeSelect.innerHTML = '';
  const autoOption = document.createElement('option');
  autoOption.value = 'auto';
  autoOption.textContent = language === 'zh' ? '自動依時辰' : 'Auto by Time';
  ELS.manualModeSelect.appendChild(autoOption);
  MODES.forEach(mode => {
    const opt = document.createElement('option');
    opt.value = mode.key;
    opt.textContent = `${mode.range}｜${modeText(mode, 'titleZh', 'titleEn')}`;
    ELS.manualModeSelect.appendChild(opt);
  });
  ELS.manualModeSelect.value = localStorage.getItem('shichen_manual_mode') || 'auto';
}

function renderStaticCopy() {
  document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en';
  document.title = language === 'zh' ? '時辰安穩 / Shichen Calm' : 'Shichen Calm / 時辰安穩';
  ELS.eyebrow.textContent = t('eyebrow');
  ELS.appTitle.textContent = t('appName');
  ELS.appSubtitle.textContent = t('subtitle');
  ELS.nowLabel.textContent = t('now');
  ELS.autoModeLabel.textContent = t('autoMode');
  ELS.emotionLabel.textContent = t('emotion');
  ELS.soundLabel.textContent = t('sound');
  ELS.freqLabel.textContent = t('freq');
  ELS.freqNote.textContent = t('freqNote');
  ELS.pulseLabel.textContent = t('pulse');
  ELS.pulseNote.textContent = t('pulseNote');
  ELS.meditationLabel.textContent = t('meditation');
  ELS.meditationNote.textContent = t('meditationNote');
  ELS.playBtn.textContent = t('play');
  ELS.meditationBtn.textContent = t('meditate');
  ELS.resetBtn.textContent = t('reset');
  ELS.adviceTitle.textContent = t('adviceTitle');
  ELS.meditationPanelTitle.textContent = t('meditationPanel');
  ELS.helperLine.textContent = t('helper');
  ELS.settingsTitle.textContent = t('settings');
  ELS.autoPrepareLabel.textContent = t('autoPrepare');
  ELS.meditationDefaultLabel.textContent = t('meditationDefault');
  ELS.manualModeLabel.textContent = t('manualMode');
  ELS.licenseLabel.textContent = t('license');
  ELS.installHintBtn.textContent = t('installHint');
  ELS.footerText.textContent = t('footer');
  ELS.languageToggle.textContent = language === 'zh' ? 'EN' : '中文';
  ELS.licenseField.value = language === 'zh' ? '一次買斷 / NT$99' : 'One-time purchase / NT$99';
  ELS.priceChip.textContent = t('price');
  renderSelect();
}

function renderMode() {
  const { now, hour } = getCurrentHourMinute();
  currentMode = matchMode(hour);
  ELS.clock.textContent = now.toLocaleTimeString(language === 'zh' ? 'zh-TW' : 'en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  ELS.shichenChip.textContent = `${modeText(currentMode, 'chipZh', 'chipEn')}｜${modeText(currentMode, 'shichenZh', 'shichenEn')}`;
  ELS.organChip.textContent = modeText(currentMode, 'organZh', 'organEn');
  ELS.modeTitle.textContent = modeText(currentMode, 'titleZh', 'titleEn');
  ELS.modeSubtitle.textContent = modeText(currentMode, 'subtitleZh', 'subtitleEn');
  ELS.emotionText.textContent = modeText(currentMode, 'emotionZh', 'emotionEn');
  ELS.soundText.textContent = modeText(currentMode, 'soundZh', 'soundEn');
  ELS.frequencyValue.textContent = `${currentMode.frequency} Hz`;
  ELS.pulseValue.textContent = `${currentMode.pulse} BPM`;
  ELS.meditationValue.textContent = language === 'zh' ? '90 秒 Reset' : '90-sec Reset';
  ELS.modeBadge.textContent = currentMode.range;
  ELS.voiceLine.textContent = modeText(currentMode, 'voiceZh', 'voiceEn');
  ELS.adviceList.innerHTML = '';
  const adviceList = language === 'zh' ? currentMode.adviceZh : currentMode.adviceEn;
  adviceList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ELS.adviceList.appendChild(li);
  });
  if (!audioCtx && ELS.autoPrepareToggle.checked) {
    ELS.statusBox.textContent = t('statusReady');
  }
}

function stopAudio() {
  oscillators.forEach((o) => {
    try { o.stop(); } catch (e) {}
    try { o.disconnect(); } catch (e) {}
  });
  oscillators = [];
  if (lfo) {
    try { lfo.stop(); } catch (e) {}
    try { lfo.disconnect(); } catch (e) {}
    lfo = null;
  }
}

async function ensureAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.12;
    masterGain.connect(audioCtx.destination);
  }
  if (audioCtx.state === 'suspended') {
    await audioCtx.resume();
  }
  return audioCtx;
}

async function startAudio() {
  try {
    await ensureAudio();
    stopAudio();
    const base = currentMode.frequency;
    const ratios = [1, 1.5, 2];

    ratios.forEach((ratio, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.value = base * ratio;
      filter.type = 'lowpass';
      filter.frequency.value = 1200 - idx * 200;
      gain.gain.value = idx === 0 ? 0.05 : 0.02;
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      osc.start();
      oscillators.push(osc);
    });

    lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    lfo.frequency.value = Math.max(0.05, currentMode.pulse / 240);
    lfoGain.gain.value = 0.015;
    lfo.connect(lfoGain);
    lfoGain.connect(masterGain.gain);
    lfo.start();

    console.log('AudioContext state:', audioCtx ? audioCtx.state : 'not created');
    ELS.statusBox.textContent = `${t('statusPlaying')}${modeText(currentMode, 'titleZh', 'titleEn')} · ${currentMode.frequency} Hz · ${currentMode.pulse} BPM · AudioContext: ${audioCtx.state}`;
  } catch (err) {
    console.error(err);
    ELS.statusBox.textContent = `${t('statusFailed')}${err.message}`;
  }
}

function breathingSequence(durationMs = 90000) {
  clearInterval(meditationTimer);
  ELS.breathRing.classList.remove('active');
  const labels = t('breathing');
  let elapsed = 0;
  let phase = 0;
  const phases = [
    { label: labels[0], active: true, ms: 4000 },
    { label: labels[1], active: false, ms: 2000 },
    { label: labels[2], active: true, ms: 6000 }
  ];
  function runPhase() {
    const p = phases[phase];
    ELS.breathText.textContent = p.label;
    ELS.breathRing.classList.toggle('active', p.active);
    elapsed += p.ms;
    phase = (phase + 1) % phases.length;
    if (elapsed >= durationMs) {
      clearInterval(meditationTimer);
      ELS.breathText.textContent = language === 'zh' ? '完成' : 'Done';
      ELS.breathRing.classList.remove('active');
      return;
    }
  }
  runPhase();
  meditationTimer = setInterval(runPhase, 4000);
}

function startMeditation() {
  ELS.statusBox.textContent = t('statusMeditation');
  ELS.voiceLine.textContent = modeText(currentMode, 'voiceZh', 'voiceEn');
  breathingSequence(90000);
}

function startReset() {
  ELS.statusBox.textContent = t('statusReset');
  breathingSequence(90000);
}

function bindEvents() {
  ELS.playBtn.addEventListener('click', async () => { await startAudio(); });
  ELS.meditationBtn.addEventListener('click', startMeditation);
  ELS.resetBtn.addEventListener('click', startReset);
  ELS.manualModeSelect.addEventListener('change', (e) => {
    localStorage.setItem('shichen_manual_mode', e.target.value);
    renderMode();
  });
  ELS.autoPrepareToggle.checked = JSON.parse(localStorage.getItem('shichen_auto_prepare') ?? 'true');
  ELS.meditationDefaultToggle.checked = JSON.parse(localStorage.getItem('shichen_meditation_default') ?? 'true');
  ELS.autoPrepareToggle.addEventListener('change', (e) => localStorage.setItem('shichen_auto_prepare', JSON.stringify(e.target.checked)));
  ELS.meditationDefaultToggle.addEventListener('change', (e) => localStorage.setItem('shichen_meditation_default', JSON.stringify(e.target.checked)));
  ELS.languageToggle.addEventListener('click', () => {
    language = language === 'zh' ? 'en' : 'zh';
    localStorage.setItem('shichen_lang', language);
    renderStaticCopy();
    renderMode();
  });
  ELS.installHintBtn.addEventListener('click', () => {
    const text = language === 'zh'
      ? 'iPad / iPhone：請用 Safari 點分享，再選「加入主畫面」。'
      : 'On iPad / iPhone: open in Safari, tap Share, then choose "Add to Home Screen."';
    alert(text);
  });
}

function init() {
  renderStaticCopy();
  renderMode();
  bindEvents();
  clearInterval(timeTicker);
  timeTicker = setInterval(renderMode, 15000);
}
init();
