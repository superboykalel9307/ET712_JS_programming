/* ===== Pre-K Learning Adventure - script.js ===== */

/* ---------- DATA: 10 items for each of the 4 skills ---------- */
const colors = [
  { name: 'Red', hex: '#ef4444' },
  { name: 'Blue', hex: '#3b82f6' },
  { name: 'Yellow', hex: '#f7c82f' },
  { name: 'Green', hex: '#22c55e' },
  { name: 'Orange', hex: '#f97316' },
  { name: 'Purple', hex: '#8b5cf6' },
  { name: 'Pink', hex: '#ec4899' },
  { name: 'Brown', hex: '#92400e' },
  { name: 'Black', hex: '#111827' },
  { name: 'White', hex: '#ffffff' }
];

const numbers = [
  { n: 1, word: 'One', emoji: '🍎', noun: 'apple' },
  { n: 2, word: 'Two', emoji: '🎈', noun: 'balloons' },
  { n: 3, word: 'Three', emoji: '🐥', noun: 'chicks' },
  { n: 4, word: 'Four', emoji: '🌼', noun: 'flowers' },
  { n: 5, word: 'Five', emoji: '⭐', noun: 'stars' },
  { n: 6, word: 'Six', emoji: '🍪', noun: 'cookies' },
  { n: 7, word: 'Seven', emoji: '🦋', noun: 'butterflies' },
  { n: 8, word: 'Eight', emoji: '🍓', noun: 'strawberries' },
  { n: 9, word: 'Nine', emoji: '🚗', noun: 'cars' },
  { n: 10, word: 'Ten', emoji: '🐟', noun: 'fish' }
];

const shapes = [
  { name: 'Circle', fill: '#ef4444', svg: '<circle cx="50" cy="50" r="42"/>' },
  { name: 'Square', fill: '#3b82f6', svg: '<rect x="14" y="14" width="72" height="72" rx="4"/>' },
  { name: 'Triangle', fill: '#22c55e', svg: '<polygon points="50,10 92,88 8,88"/>' },
  { name: 'Rectangle', fill: '#f97316', svg: '<rect x="6" y="26" width="88" height="48" rx="4"/>' },
  { name: 'Star', fill: '#f7c82f', svg: '<polygon points="50,6 62,38 95,38 68,58 78,91 50,71 22,91 32,58 5,38 38,38"/>' },
  { name: 'Heart', fill: '#ec4899', svg: '<path d="M50 90 C8 58 4 28 27 18 C40 13 50 23 50 32 C50 23 60 13 73 18 C96 28 92 58 50 90Z"/>' },
  { name: 'Diamond', fill: '#8b5cf6', svg: '<polygon points="50,6 90,50 50,94 10,50"/>' },
  { name: 'Oval', fill: '#14b8a6', svg: '<ellipse cx="50" cy="50" rx="44" ry="30"/>' },
  { name: 'Pentagon', fill: '#92400e', svg: '<polygon points="50,8 93,39 77,90 23,90 7,39"/>' },
  { name: 'Hexagon', fill: '#0ea5e9', svg: '<polygon points="27,10 73,10 96,50 73,90 27,90 4,50"/>' }
];

const animals = [
  { name: 'Dog', emoji: '🐶', sound: 'woof woof' },
  { name: 'Cat', emoji: '🐱', sound: 'meow' },
  { name: 'Cow', emoji: '🐮', sound: 'moo' },
  { name: 'Pig', emoji: '🐷', sound: 'oink oink' },
  { name: 'Duck', emoji: '🦆', sound: 'quack quack' },
  { name: 'Lion', emoji: '🦁', sound: 'roar' },
  { name: 'Elephant', emoji: '🐘', sound: 'toot toot' },
  { name: 'Monkey', emoji: '🐵', sound: 'ooh ooh ah ah' },
  { name: 'Horse', emoji: '🐴', sound: 'neigh' },
  { name: 'Frog', emoji: '🐸', sound: 'ribbit' }
];

/* ---------- HELPERS ---------- */
const $ = (id) => document.getElementById(id);
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

/* ---------- COMPONENT 1: SPEAK THE WORD OUT LOUD ---------- */
let soundOn = true;
let voice = null;

function loadVoice() {
  if (!('speechSynthesis' in window)) return;
  const voices = window.speechSynthesis.getVoices();
  voice = voices.find((v) => v.lang.startsWith('en') && /female|samantha|zira|google us/i.test(v.name))
    || voices.find((v) => v.lang.startsWith('en')) || null;
}
if ('speechSynthesis' in window) {
  loadVoice();
  window.speechSynthesis.onvoiceschanged = loadVoice;
}

function speak(text) {
  if (!soundOn || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.8;   // slow and clear for little ears
  u.pitch = 1.15;
  if (voice) u.voice = voice;
  window.speechSynthesis.speak(u);
}

$('soundBtn').addEventListener('click', () => {
  soundOn = !soundOn;
  if (!soundOn && 'speechSynthesis' in window) window.speechSynthesis.cancel();
  $('soundBtn').setAttribute('aria-pressed', soundOn);
  $('soundBtn').innerHTML = soundOn ? '&#128266; Sound on' : '&#128263; Sound off';
});

/* ---------- BUILD THE LEARNING CARDS ---------- */
const allItems = [];   // every card in order (used by Back / Next)
let current = -1;

function shapeSvg(s) {
  return `<svg class="shape-svg" viewBox="0 0 100 100" fill="${s.fill}" aria-hidden="true">${s.svg}</svg>`;
}

function makeItem(gridId, visualHtml, label, say, ariaLabel) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'item';
  btn.setAttribute('aria-label', ariaLabel);
  btn.innerHTML = `<span class="visual">${visualHtml}</span><span class="label">${label}</span>`;
  const index = allItems.length;
  allItems.push({ btn, say });
  btn.addEventListener('click', () => select(index));
  $(gridId).appendChild(btn);
}

colors.forEach((c) =>
  makeItem('colorsGrid',
    `<span class="dot ${c.name === 'White' ? 'white' : ''}" style="background:${c.hex}"></span>`,
    c.name, c.name, `Color ${c.name}`));

numbers.forEach((m) =>
  makeItem('mathGrid',
    `<span><span class="num-big">${m.n}</span><br><span class="emoji-row">${m.emoji.repeat(m.n)}</span></span>`,
    m.word, `${m.n}. ${m.word} ${m.noun}`, `Number ${m.word}`));

shapes.forEach((s) =>
  makeItem('shapesGrid', shapeSvg(s), s.name, s.name, `Shape ${s.name}`));

animals.forEach((a) =>
  makeItem('animalsGrid',
    `<span class="emoji-big">${a.emoji}</span>`,
    a.name, `${a.name}. The ${a.name.toLowerCase()} says ${a.sound}!`, `Animal ${a.name}`));

/* ---------- COMPONENT 2: CLICK A CARD, SEE IT AND HEAR IT ---------- */
function select(index) {
  allItems.forEach((it) => it.btn.classList.remove('active'));
  current = index;
  const item = allItems[index];
  item.btn.classList.add('active');
  $('bannerText').textContent = item.say;
  speak(item.say);
}

/* ---------- COMPONENT 3: BACK / NEXT BUTTONS ---------- */
function step(direction) {
  const next = current === -1
    ? (direction > 0 ? 0 : allItems.length - 1)
    : (current + direction + allItems.length) % allItems.length;
  select(next);
  allItems[next].btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
$('nextBtn').addEventListener('click', () => step(1));
$('backBtn').addEventListener('click', () => step(-1));

/* ---------- COMPONENT 4: MODAL WINDOW ---------- */
let modalAgainAction = null;

function openModal(emoji, title, message, againLabel, againAction) {
  $('modalEmoji').textContent = emoji;
  $('modalTitle').textContent = title;
  $('modalMessage').textContent = message;
  $('modalAgain').textContent = againLabel;
  modalAgainAction = againAction;
  $('modal').hidden = false;
  $('modalAgain').focus();
  speak(`${title} ${message}`);
}
function closeModal() {
  $('modal').hidden = true;
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}
$('modalClose').addEventListener('click', closeModal);
$('modalAgain').addEventListener('click', () => {
  closeModal();
  if (modalAgainAction) modalAgainAction();
});
$('modal').addEventListener('click', (e) => { if (e.target === $('modal')) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('modal').hidden) closeModal(); });

/* ---------- COMPONENT 5: QUIZ ---------- */
const QUIZ_LENGTH = 5;
let quizIndex = 0;
let quizScore = 0;
let quizAnswer = null;
let quizLocked = false;

function buildQuestion() {
  const type = pick(['color', 'shape', 'animal', 'math']);
  if (type === 'color') {
    const [right, ...others] = shuffle(colors).slice(0, 3);
    return {
      prompt: `Tap the color ${right.name}.`,
      speech: `Tap the color ${right.name}.`,
      options: shuffle([right, ...others]).map((c) => ({
        html: `<span class="dot ${c.name === 'White' ? 'white' : ''}" style="background:${c.hex}"></span>`,
        label: c.name, correct: c === right
      }))
    };
  }
  if (type === 'shape') {
    const [right, ...others] = shuffle(shapes).slice(0, 3);
    return {
      prompt: `Tap the ${right.name}.`,
      speech: `Tap the ${right.name}.`,
      options: shuffle([right, ...others]).map((s) => ({
        html: shapeSvg(s), label: s.name, correct: s === right
      }))
    };
  }
  if (type === 'animal') {
    const [right, ...others] = shuffle(animals).slice(0, 3);
    return {
      prompt: `Tap the ${right.name}.`,
      speech: `Tap the ${right.name}.`,
      options: shuffle([right, ...others]).map((a) => ({
        html: `<span class="emoji-big">${a.emoji}</span>`, label: a.name, correct: a === right
      }))
    };
  }
  const [right, ...others] = shuffle(numbers).slice(0, 3);
  return {
    prompt: `Which group has ${right.n} ${right.noun}?`,
    speech: `Which group has ${right.word} ${right.noun}?`,
    options: shuffle([right, ...others]).map((m) => ({
      html: `<span class="emoji-row">${right.emoji.repeat(m.n)}</span>`, label: String(m.n), correct: m === right
    }))
  };
}

function showQuestion() {
  quizLocked = false;
  quizAnswer = buildQuestion();
  $('quizProgress').textContent = `Question ${quizIndex + 1} of ${QUIZ_LENGTH}`;
  $('quizScore').innerHTML = `&#11088; ${quizScore}`;
  $('quizPrompt').textContent = quizAnswer.prompt;
  $('quizFeedback').textContent = '';
  $('quizOptions').innerHTML = '';

  quizAnswer.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'item';
    btn.innerHTML = `<span class="visual">${opt.html}</span><span class="label">${opt.label}</span>`;
    btn.addEventListener('click', () => answer(btn, opt));
    $('quizOptions').appendChild(btn);
  });
  speak(quizAnswer.speech);
}

function answer(btn, opt) {
  if (quizLocked) return;
  if (opt.correct) {
    quizLocked = true;
    quizScore++;
    btn.classList.add('correct');
    $('quizFeedback').textContent = '🎉 Great job!';
    $('quizScore').innerHTML = `&#11088; ${quizScore}`;
    speak('Great job!');
    setTimeout(nextQuestion, 1600);
  } else {
    btn.classList.add('wrong');
    $('quizFeedback').textContent = 'Oops! Try again.';
    speak('Oops! Try again.');
  }
}

function nextQuestion() {
  quizIndex++;
  if (quizIndex >= QUIZ_LENGTH) {
    $('quizPlay').hidden = true;
    $('quizStart').hidden = false;
    $('quizStartBtn').textContent = 'Play again';
    const stars = '⭐'.repeat(quizScore);
    openModal('🏆', 'You did it!', `You scored ${quizScore} out of ${QUIZ_LENGTH}. ${stars}`, 'Play again', startQuiz);
  } else {
    showQuestion();
  }
}

function startQuiz() {
  quizIndex = 0;
  quizScore = 0;
  $('quizStart').hidden = true;
  $('quizPlay').hidden = false;
  showQuestion();
}
$('quizStartBtn').addEventListener('click', startQuiz);
$('quizHear').addEventListener('click', () => quizAnswer && speak(quizAnswer.speech));

/* ---------- COMPONENT 6: MEMORY PUZZLE ---------- */
let firstCard = null;
let puzzleLocked = false;
let moves = 0;
let matches = 0;

function startPuzzle() {
  moves = 0;
  matches = 0;
  firstCard = null;
  puzzleLocked = false;
  $('puzzleMoves').textContent = 'Moves: 0';
  $('puzzleMatches').textContent = 'Matches: 0 / 6';
  $('puzzleGrid').innerHTML = '';

  const six = shuffle(animals).slice(0, 6);
  shuffle([...six, ...six]).forEach((a) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'puzzle-card';
    card.setAttribute('aria-label', 'Hidden card');
    card.dataset.name = a.name;
    card.dataset.emoji = a.emoji;
    card.textContent = '❓';
    card.addEventListener('click', () => flip(card));
    $('puzzleGrid').appendChild(card);
  });
}

function flip(card) {
  if (puzzleLocked || card === firstCard || card.classList.contains('matched')) return;
  card.classList.add('flipped');
  card.textContent = card.dataset.emoji;
  card.setAttribute('aria-label', card.dataset.name);
  speak(card.dataset.name);

  if (!firstCard) { firstCard = card; return; }

  moves++;
  $('puzzleMoves').textContent = `Moves: ${moves}`;

  if (firstCard.dataset.name === card.dataset.name) {
    firstCard.classList.add('matched');
    card.classList.add('matched');
    firstCard = null;
    matches++;
    $('puzzleMatches').textContent = `Matches: ${matches} / 6`;
    if (matches === 6) {
      setTimeout(() => openModal('🧩', 'You solved it!', `You matched all the animals in ${moves} moves.`, 'Play again', startPuzzle), 700);
    }
  } else {
    puzzleLocked = true;
    const a = firstCard;
    setTimeout(() => {
      [a, card].forEach((c) => {
        c.classList.remove('flipped');
        c.textContent = '❓';
        c.setAttribute('aria-label', 'Hidden card');
      });
      firstCard = null;
      puzzleLocked = false;
    }, 1100);
  }
}
$('puzzleReset').addEventListener('click', startPuzzle);
startPuzzle();

/* ---------- COMPONENT 7: GO TO TOP BUTTON + NAV HIGHLIGHT ---------- */
const topBtn = $('topBtn');
const navLinks = document.querySelectorAll('.main-nav a');
const sections = ['colors', 'math', 'shapes', 'animals', 'quiz', 'puzzle'].map($);

window.addEventListener('scroll', () => {
  topBtn.hidden = window.scrollY < 300;

  let currentId = '';
  sections.forEach((sec) => {
    if (sec.getBoundingClientRect().top < window.innerHeight / 2) currentId = sec.id;
  });
  navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${currentId}`));
});

topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
