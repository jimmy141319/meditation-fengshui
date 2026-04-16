
const COPY = {
  zh: {
    appName:'時辰安穩', eyebrow:'iPad / iPhone 車內平穩模式', subtitle:'完全覆蓋版：改用本地音檔播放，先證明播放核心功能成立。', now:'現在時間', autoMode:'自動模式', emotion:'情緒目標', sound:'音樂氛圍',
    freq:'基準音頻', pulse:'節奏', play:'開始播放', pause:'暫停播放', meditate:'開始冥想', reset:'90 秒拉回', adviceTitle:'現在最適合', meditationPanel:'冥想引導', helper:'點擊開始冥想後，依圈圈節奏呼吸。', settings:'設定',
    manualMode:'手動覆蓋模式', license:'授權模式', installHint:'加入主畫面', footer:'完全覆蓋版：先驗證手機上本地音檔可正常播放，再談更高級的聲景系統。', price:'NT$99 一次買斷',
    statusReady:'音訊尚未開始。按「開始播放」測試本地音檔播放。', statusPlaying:'正在播放本地音檔：', statusPaused:'已暫停播放。', statusFailed:'音訊播放失敗：', statusMeditation:'冥想已啟動。請跟著圈圈節奏慢慢呼吸。', statusReset:'已啟動 90 秒拉回。先穩住，不用解決全部。', audioLabel:'播放來源', audioSource:'local audio', volume:'音量', breathing:['吸氣','停留','吐氣']
  },
  en: {
    appName:'Shichen Calm', eyebrow:'iPad / iPhone In-Car Calm Mode', subtitle:'Overwrite build: switched to local audio files to prove playback works first.', now:'Current Time', autoMode:'Auto Mode', emotion:'Emotional Goal', sound:'Sound Mood',
    freq:'Base Tone', pulse:'Pulse', play:'Start Audio', pause:'Pause Audio', meditate:'Start Meditation', reset:'90-sec Reset', adviceTitle:'Best for Now', meditationPanel:'Meditation Guide', helper:'After starting meditation, breathe with the ring rhythm.', settings:'Settings',
    manualMode:'Manual Override', license:'License', installHint:'Add to Home Screen', footer:'Overwrite build: prove local audio playback works on phone first, then evolve the sound system later.', price:'NT$99 one-time purchase',
    statusReady:'Audio is ready but not started. Tap "Start Audio" to test local playback.', statusPlaying:'Playing local audio: ', statusPaused:'Playback paused.', statusFailed:'Audio playback failed: ', statusMeditation:'Meditation started. Follow the ring and breathe slowly.', statusReset:'90-second reset started. Stabilize first.', audioLabel:'Source', audioSource:'local audio', volume:'Volume', breathing:['Inhale','Hold','Exhale']
  }
};

const MODES = [
  { key:'night-calm', start:23, end:7, range:'23:00–07:00', shichenZh:'夜間', shichenEn:'Night', organZh:'膽 / 肝 / 肺 / 大腸', organEn:'Gallbladder / Liver / Lung / Large Intestine', titleZh:'夜間靜養模式', titleEn:'Night Recovery Mode', subtitleZh:'晚上與清晨偏向收心、減刺激、維持安穩。', subtitleEn:'Late night and early morning favor settling down, reducing stimulation, and staying calm.', emotionZh:'收斂、安靜、避免過度刺激', emotionEn:'Settle down, stay quiet, avoid overstimulation', soundZh:'深、緩、靜', soundEn:'Deep, slow, quiet', chipZh:'夜間靜養', chipEn:'Night Recovery', adviceZh:['維持低刺激，不用太多變化。','適合柔和環境音與慢速聲景。','現在先證明本地音檔可正常播放。'], adviceEn:['Keep stimulation low and avoid too much variation.','Soft ambience and slower textures fit best.','First prove local audio playback works.'], frequency:174, pulse:8, voiceZh:'先收斂，再放鬆。', voiceEn:'Settle first, then relax.', audio:'audio/night.wav' },
  { key:'stomach', start:7, end:9, range:'07:00–09:00', shichenZh:'辰時', shichenEn:'Morning', organZh:'胃', organEn:'Stomach', titleZh:'晨間健脾養胃模式', titleEn:'Morning Nourish Mode', subtitleZh:'現在適合穩定啟動，讓你與乘客慢慢進入舒服狀態。', subtitleEn:'Best for a stable start so both driver and passengers ease into a comfortable state.', emotionZh:'溫和啟動、減少鈍感與無力', emotionEn:'Gentle activation, less dullness and low energy', soundZh:'暖、順、柔', soundEn:'Warm, smooth, soft', chipZh:'胃經時段', chipEn:'Stomach Window', adviceZh:['溫和鋼琴感與清爽脈動。','一開始不要太刺激。','先確保手機可正常發聲。'], adviceEn:['Gentle piano feel and a cleaner pulse.','Do not overstimulate early.','First ensure the phone actually plays audio.'], frequency:220, pulse:11, voiceZh:'慢慢啟動，先穩下來。', voiceEn:'Ease in slowly and stabilize first.', audio:'audio/morning.wav' },
  { key:'spleen', start:9, end:11, range:'09:00–11:00', shichenZh:'巳時', shichenEn:'Late Morning', organZh:'脾', organEn:'Spleen', titleZh:'穩定集中模式', titleEn:'Steady Focus Mode', subtitleZh:'脾經時段適合維持專注、舒服、平順的車內氣氛。', subtitleEn:'This period supports focus, comfort, and a smooth in-car atmosphere.', emotionZh:'穩住、聚焦、舒服', emotionEn:'Steady, focused, comfortable', soundZh:'平、淨、舒展', soundEn:'Even, clean, open', chipZh:'脾經時段', chipEn:'Spleen Window', adviceZh:['白天模式維持舒服與規律。','不要太多突兀變化。','核心是能播放，不是先做華麗功能。'], adviceEn:['Keep daytime mode comfortable and regular.','Avoid abrupt variation.','Core goal: playback first, fancy features later.'], frequency:247, pulse:12, voiceZh:'保持平順，不用催快。', voiceEn:'Stay smooth; there is no need to rush.', audio:'audio/morning.wav' },
  { key:'heart', start:11, end:13, range:'11:00–13:00', shichenZh:'午時', shichenEn:'Noon', organZh:'心', organEn:'Heart', titleZh:'午間清心穩神模式', titleEn:'Midday Clear-Heart Mode', subtitleZh:'中午容易心煩，現在適合清心、穩神、維持明亮。', subtitleEn:'Midday can become mentally busy. Clear, steady, and bright works best now.', emotionZh:'清心、穩神、減少煩躁', emotionEn:'Clear the mind, stay steady, reduce irritation', soundZh:'清、透、穩', soundEn:'Clear, airy, stable', chipZh:'心經時段', chipEn:'Heart Window', adviceZh:['中午適合清透但不躁的聲景。','塞車時也要維持穩感。','用本地音檔先證明實際體驗。'], adviceEn:['Midday suits clearer but non-agitating soundscapes.','Maintain steadiness in traffic.','Use local audio to prove real playback first.'], frequency:261, pulse:13, voiceZh:'清一下心，穩一下神。', voiceEn:'Clear the heart and steady the mind.', audio:'audio/noon.wav' },
  { key:'small-intestine', start:13, end:15, range:'13:00–15:00', shichenZh:'未時', shichenEn:'Afternoon', organZh:'小腸', organEn:'Small Intestine', titleZh:'午後整理模式', titleEn:'Afternoon Sorting Mode', subtitleZh:'午後容易混亂與分心，現在適合減少雜音、維持節奏。', subtitleEn:'Afternoons can feel scattered. Reduce noise and maintain rhythm.', emotionZh:'整理、減雜、維持節奏', emotionEn:'Sort, simplify, maintain rhythm', soundZh:'清爽、平穩、流動', soundEn:'Fresh, stable, flowing', chipZh:'小腸經時段', chipEn:'Small Intestine Window', adviceZh:['午後模式要減少分心感。','保持規律與平穩。','現在版本只追求核心功能成立。'], adviceEn:['Afternoon mode should reduce distraction.','Maintain regularity and steadiness.','This version only pursues core function validity.'], frequency:294, pulse:14, voiceZh:'先整理，再前進。', voiceEn:'Sort first, then move forward.', audio:'audio/noon.wav' },
  { key:'bladder', start:15, end:17, range:'15:00–17:00', shichenZh:'申時', shichenEn:'Late Afternoon', organZh:'膀胱', organEn:'Bladder', titleZh:'午後降耗模式', titleEn:'Late-Afternoon Energy Guard Mode', subtitleZh:'這段時間容易開始耗損，現在適合降低刺激、守住穩定。', subtitleEn:'Energy can begin to drain now. Lower stimulation and protect steadiness.', emotionZh:'防耗、減緊繃、避免情緒累積', emotionEn:'Protect energy, ease tension, avoid buildup', soundZh:'淡、穩、收斂', soundEn:'Light, steady, inward', chipZh:'膀胱經時段', chipEn:'Bladder Window', adviceZh:['開始把聲景往收斂方向拉。','避免突然太嗨。','本地音檔比即時合成更適合先驗證。'], adviceEn:['Move sound inward and slightly more restrained.','Avoid sudden intensity.','Local files are better than live synthesis for proof-first testing.'], frequency:329, pulse:12, voiceZh:'先守住，不要被耗掉。', voiceEn:'Protect your energy and do not get drained.', audio:'audio/evening.wav' },
  { key:'kidney', start:17, end:19, range:'17:00–19:00', shichenZh:'酉時', shichenEn:'Evening', organZh:'腎', organEn:'Kidney', titleZh:'養腎安神模式', titleEn:'Evening Grounding Mode', subtitleZh:'傍晚容易緊、累、煩，現在適合回穩與安神。', subtitleEn:'Evening can bring fatigue, tension, and irritability. Ground and calm the system.', emotionZh:'安定、回穩、降低焦慮', emotionEn:'Grounded, stable, less anxious', soundZh:'靜、深、緩', soundEn:'Still, deep, slow', chipZh:'腎經時段', chipEn:'Kidney Window', adviceZh:['晚間適合較慢與較深的聲景。','讓車內情緒收下來。','先證明乘客和司機都聽得到。'], adviceEn:['Evening fits slower and deeper soundscapes.','Let the cabin settle inward.','First prove both driver and passenger can actually hear it.'], frequency:349, pulse:10, voiceZh:'先安定，再前行。', voiceEn:'Ground first, then keep going.', audio:'audio/evening.wav' },
  { key:'pericardium', start:19, end:21, range:'19:00–21:00', shichenZh:'戌時', shichenEn:'Nightfall', organZh:'心包', organEn:'Pericardium', titleZh:'夜間舒心模式', titleEn:'Night Comfort Mode', subtitleZh:'這段時間適合放下白天壓力，維持柔和、安心的氛圍。', subtitleEn:'This time favors releasing daytime pressure and maintaining a soft, reassuring mood.', emotionZh:'舒心、鬆開、帶安全感', emotionEn:'Soothing, loosening, reassuring', soundZh:'柔、暖、放鬆', soundEn:'Soft, warm, easing', chipZh:'心包經時段', chipEn:'Pericardium Window', adviceZh:['適合晚間短程與安穩載客。','避免戲劇性太強的聲音。','這版只驗證播放，不驗證高級聲學。'], adviceEn:['Great for calm evening rides and short trips.','Avoid overly dramatic sounds.','This build validates playback, not advanced acoustic design.'], frequency:392, pulse:9, voiceZh:'把白天放下來一些。', voiceEn:'Set some of the day down.', audio:'audio/night.wav' },
  { key:'triple-burner', start:21, end:23, range:'21:00–23:00', shichenZh:'亥時', shichenEn:'Late Night', organZh:'三焦', organEn:'Triple Burner', titleZh:'晚間收心模式', titleEn:'Late-Night Settle Mode', subtitleZh:'睡前與深夜前段適合減少外界干擾，回到更安定的節奏。', subtitleEn:'Before sleep and in early late-night hours, reduce external input and return to a steadier pace.', emotionZh:'收心、降刺激、準備休息', emotionEn:'Settle, lower stimulation, prepare for rest', soundZh:'淡、緩、靜謐', soundEn:'Subtle, slow, quiet', chipZh:'三焦經時段', chipEn:'Triple Burner Window', adviceZh:['適合簡單、低刺激、少變化的聲景。','若要做冥想，這段也合適。','本地音檔 loop 先成立最重要。'], adviceEn:['Simple, low-stimulation, low-variation soundscapes work best.','This is also a good window for meditation.','A working local-audio loop matters first.'], frequency:432, pulse:8, voiceZh:'慢慢收心，準備安穩。', voiceEn:'Settle in slowly and prepare for calm.', audio:'audio/night.wav' }
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
  pulseLabel: document.getElementById('pulseLabel'),
  pulseValue: document.getElementById('pulseValue'),
  audioLabel: document.getElementById('audioLabel'),
  audioSourceValue: document.getElementById('audioSourceValue'),
  playBtn: document.getElementById('playBtn'),
  pauseBtn: document.getElementById('pauseBtn'),
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
  manualModeLabel: document.getElementById('manualModeLabel'),
  manualModeSelect: document.getElementById('manualModeSelect'),
  licenseLabel: document.getElementById('licenseLabel'),
  licenseField: document.getElementById('licenseField'),
  installHintBtn: document.getElementById('installHintBtn'),
  languageToggle: document.getElementById('languageToggle'),
  footerText: document.getElementById('footerText'),
  player: document.getElementById('player'),
  volumeLabel: document.getElementById('volumeLabel'),
  volumeRange: document.getElementById('volumeRange')
};

let language = localStorage.getItem('shichen_lang') || 'zh';
let currentMode = null;
let meditationTimer = null;

function t(key){ return COPY[language][key]; }
function modeText(mode, zhField, enField){ return language === 'zh' ? mode[zhField] : mode[enField]; }

function matchMode(hour){
  const manual = localStorage.getItem('shichen_manual_mode') || 'auto';
  if (manual !== 'auto') return MODES.find(m => m.key === manual) || MODES[0];
  for (const mode of MODES){
    if (mode.start < mode.end){
      if (hour >= mode.start && hour < mode.end) return mode;
    } else {
      if (hour >= mode.start || hour < mode.end) return mode;
    }
  }
  return MODES[0];
}

function renderSelect(){
  ELS.manualModeSelect.innerHTML = '';
  const autoOpt = document.createElement('option');
  autoOpt.value = 'auto';
  autoOpt.textContent = language === 'zh' ? '自動依時辰' : 'Auto by Time';
  ELS.manualModeSelect.appendChild(autoOpt);
  MODES.forEach(mode => {
    const opt = document.createElement('option');
    opt.value = mode.key;
    opt.textContent = `${mode.range}｜${modeText(mode, 'titleZh', 'titleEn')}`;
    ELS.manualModeSelect.appendChild(opt);
  });
  ELS.manualModeSelect.value = localStorage.getItem('shichen_manual_mode') || 'auto';
}

function renderStaticCopy(){
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
  ELS.pulseLabel.textContent = t('pulse');
  ELS.audioLabel.textContent = t('audioLabel');
  ELS.audioSourceValue.textContent = t('audioSource');
  ELS.playBtn.textContent = t('play');
  ELS.pauseBtn.textContent = t('pause');
  ELS.meditationBtn.textContent = t('meditate');
  ELS.resetBtn.textContent = t('reset');
  ELS.adviceTitle.textContent = t('adviceTitle');
  ELS.meditationPanelTitle.textContent = t('meditationPanel');
  ELS.helperLine.textContent = t('helper');
  ELS.settingsTitle.textContent = t('settings');
  ELS.manualModeLabel.textContent = t('manualMode');
  ELS.licenseLabel.textContent = t('license');
  ELS.installHintBtn.textContent = t('installHint');
  ELS.footerText.textContent = t('footer');
  ELS.languageToggle.textContent = language === 'zh' ? 'EN' : '中文';
  ELS.licenseField.value = language === 'zh' ? '一次買斷 / NT$99' : 'One-time purchase / NT$99';
  ELS.priceChip.textContent = t('price');
  ELS.volumeLabel.textContent = t('volume');
  renderSelect();
}

function renderMode(){
  const now = new Date();
  currentMode = matchMode(now.getHours());
  ELS.clock.textContent = now.toLocaleTimeString(language === 'zh' ? 'zh-TW' : 'en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  ELS.shichenChip.textContent = `${modeText(currentMode,'chipZh','chipEn')}｜${modeText(currentMode,'shichenZh','shichenEn')}`;
  ELS.organChip.textContent = modeText(currentMode,'organZh','organEn');
  ELS.modeTitle.textContent = modeText(currentMode,'titleZh','titleEn');
  ELS.modeSubtitle.textContent = modeText(currentMode,'subtitleZh','subtitleEn');
  ELS.emotionText.textContent = modeText(currentMode,'emotionZh','emotionEn');
  ELS.soundText.textContent = modeText(currentMode,'soundZh','soundEn');
  ELS.frequencyValue.textContent = `${currentMode.frequency} Hz`;
  ELS.pulseValue.textContent = `${currentMode.pulse} BPM`;
  ELS.modeBadge.textContent = currentMode.range;
  ELS.voiceLine.textContent = modeText(currentMode,'voiceZh','voiceEn');

  ELS.adviceList.innerHTML = '';
  (language === 'zh' ? currentMode.adviceZh : currentMode.adviceEn).forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ELS.adviceList.appendChild(li);
  });

  // switch source only if not actively playing or mode changed source
  if (!ELS.player.src || !ELS.player.src.endsWith(currentMode.audio)) {
    ELS.player.src = currentMode.audio;
    ELS.player.load();
    ELS.statusBox.textContent = `${t('statusReady')} ${currentMode.audio}`;
  }
}

async function startAudio(){
  try{
    if (!ELS.player.src) {
      ELS.player.src = currentMode.audio;
      ELS.player.load();
    }
    await ELS.player.play();
    ELS.statusBox.textContent = `${t('statusPlaying')}${modeText(currentMode,'titleZh','titleEn')}｜${currentMode.audio}`;
  } catch(err){
    console.error(err);
    ELS.statusBox.textContent = `${t('statusFailed')}${err.message}`;
  }
}

function pauseAudio(){
  ELS.player.pause();
  ELS.statusBox.textContent = t('statusPaused');
}

function breathingSequence(durationMs = 90000){
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
  function runPhase(){
    const p = phases[phase];
    ELS.breathText.textContent = p.label;
    ELS.breathRing.classList.toggle('active', p.active);
    elapsed += p.ms;
    phase = (phase + 1) % phases.length;
    if (elapsed >= durationMs){
      clearInterval(meditationTimer);
      ELS.breathText.textContent = language === 'zh' ? '完成' : 'Done';
      ELS.breathRing.classList.remove('active');
      return;
    }
  }
  runPhase();
  meditationTimer = setInterval(runPhase, 4000);
}

function startMeditation(){
  ELS.statusBox.textContent = t('statusMeditation');
  breathingSequence(90000);
}
function startReset(){
  ELS.statusBox.textContent = t('statusReset');
  breathingSequence(90000);
}

function bindEvents(){
  ELS.playBtn.addEventListener('click', startAudio);
  ELS.pauseBtn.addEventListener('click', pauseAudio);
  ELS.meditationBtn.addEventListener('click', startMeditation);
  ELS.resetBtn.addEventListener('click', startReset);
  ELS.player.addEventListener('error', () => {
    ELS.statusBox.textContent = `${t('statusFailed')}file missing or unsupported`;
  });
  ELS.manualModeSelect.addEventListener('change', (e) => {
    localStorage.setItem('shichen_manual_mode', e.target.value);
    pauseAudio();
    renderMode();
  });
  ELS.languageToggle.addEventListener('click', () => {
    language = language === 'zh' ? 'en' : 'zh';
    localStorage.setItem('shichen_lang', language);
    renderStaticCopy();
    renderMode();
  });
  ELS.installHintBtn.addEventListener('click', () => {
    alert(language === 'zh'
      ? 'iPad / iPhone：請用 Safari 點分享，再選「加入主畫面」。'
      : 'On iPad / iPhone: open in Safari, tap Share, then choose "Add to Home Screen."');
  });
  const savedVol = localStorage.getItem('shichen_volume') || '70';
  ELS.volumeRange.value = savedVol;
  ELS.player.volume = Number(savedVol) / 100;
  ELS.volumeRange.addEventListener('input', (e) => {
    ELS.player.volume = Number(e.target.value) / 100;
    localStorage.setItem('shichen_volume', e.target.value);
  });
}

function init(){
  renderStaticCopy();
  renderMode();
  bindEvents();
  setInterval(renderMode, 15000);
}
init();
