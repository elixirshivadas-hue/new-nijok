const questions = [
  {q:"Which country is the origin of Sushi?",a:["China","Japan","Korea","Thailand"],c:1,cat:"World Food",img:"https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=85"},
  {q:"Which Indian state is famous for Hyderabadi Biryani?",a:["Kerala","Telangana","Punjab","Gujarat"],c:1,cat:"India",img:"https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85"},
  {q:"What is the main ingredient in hummus?",a:["Chickpeas","Potatoes","Rice","Corn"],c:0,cat:"Ingredients",img:"https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=85"},
  {q:"Paella is strongly associated with which country?",a:["Spain","Italy","Mexico","Greece"],c:0,cat:"World Food",img:"https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=900&q=85"},
  {q:"Which spice is known as the world's most expensive spice?",a:["Cumin","Saffron","Cinnamon","Clove"],c:1,cat:"Ingredients",img:"https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85"},
  {q:"Tacos are traditionally associated with which country?",a:["Brazil","Mexico","Peru","Portugal"],c:1,cat:"World Food",img:"https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=85"},
  {q:"What grain is traditionally used to make risotto?",a:["Rice","Wheat","Barley","Corn"],c:0,cat:"Ingredients",img:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=85"},
  {q:"Kimchi is a famous food tradition from which country?",a:["Japan","South Korea","Vietnam","Nepal"],c:1,cat:"World Food",img:"https://images.unsplash.com/photo-1583224941034-7d6c6a0b4e52?auto=format&fit=crop&w=900&q=85"},
  {q:"Which fruit is traditionally used to make guacamole?",a:["Mango","Avocado","Papaya","Peach"],c:1,cat:"Ingredients",img:"https://images.unsplash.com/photo-1609601679767-7f7d5e9e6f0e?auto=format&fit=crop&w=900&q=85"},
  {q:"Moussaka is commonly associated with which cuisine?",a:["Greek","Japanese","Brazilian","Indian"],c:0,cat:"World Food",img:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"},
  {q:"Which drink is made from fermented tea leaves in many traditions?",a:["Kombucha","Espresso","Lassi","Cocoa"],c:0,cat:"Drinks",img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85"},
  {q:"Masala dosa is especially associated with which region of India?",a:["South India","North India","West India","Northeast India"],c:0,cat:"India",img:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85"},
  {q:"Which cheese is traditionally used in a Greek salad?",a:["Feta","Cheddar","Brie","Gouda"],c:0,cat:"Ingredients",img:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85"},
  {q:"Pho is a famous noodle soup from which country?",a:["Vietnam","China","India","Turkey"],c:0,cat:"World Food",img:"https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=900&q=85"},
  {q:"Which herb is central to traditional pesto?",a:["Basil","Mint","Coriander","Rosemary"],c:0,cat:"Ingredients",img:"https://images.unsplash.com/photo-1610557892470-55d2f8a0b3f7?auto=format&fit=crop&w=900&q=85"},
  {q:"Naan is traditionally cooked in what?",a:["Tandoor","Wok","Steamer","Pressure cooker"],c:0,cat:"India",img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85"},
  {q:"Which country is famous for croissants?",a:["France","Spain","Austria","Belgium"],c:0,cat:"World Food",img:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85"},
  {q:"What is tofu primarily made from?",a:["Soybeans","Lentils","Rice","Corn"],c:0,cat:"Ingredients",img:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"},
  {q:"Which Indian sweet is made mainly from grated carrots?",a:["Gulab jamun","Gajar halwa","Jalebi","Rasgulla"],c:1,cat:"India",img:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85"},
  {q:"What is the main base of traditional miso?",a:["Fermented soybeans","Tomatoes","Potatoes","Coconut"],c:0,cat:"Ingredients",img:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"},
  {q:"Couscous is closely associated with which region?",a:["North Africa","Scandinavia","South America","East Asia"],c:0,cat:"World Food",img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85"},
  {q:"Which nut is traditionally used in marzipan?",a:["Almond","Cashew","Pistachio","Walnut"],c:0,cat:"Ingredients",img:"https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=900&q=85"},
  {q:"Which Indian bread is often stuffed with spiced potato?",a:["Aloo paratha","Appam","Puri","Bhatura"],c:0,cat:"India",img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85"},
  {q:"Which dessert is traditionally made with mascarpone?",a:["Tiramisu","Baklava","Mochi","Churros"],c:0,cat:"World Food",img:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85"},
  {q:"What is the key ingredient in traditional pesto besides basil?",a:["Pine nuts","Cocoa","Coconut","Sesame"],c:0,cat:"Ingredients",img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=85"},
  {q:"Which country is associated with pad thai?",a:["Thailand","Laos","Malaysia","Cambodia"],c:0,cat:"World Food",img:"https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=85"},
  {q:"Lassi is traditionally made from what?",a:["Yogurt","Coconut milk","Soy milk","Almond milk"],c:0,cat:"India",img:"https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=900&q=85"},
  {q:"Which spice gives turmeric its bright yellow color?",a:["Curcumin","Capsaicin","Piperine","Allicin"],c:0,cat:"Ingredients",img:"https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=900&q=85"},
  {q:"Which country is famous for Neapolitan pizza?",a:["Italy","France","Argentina","Portugal"],c:0,cat:"World Food",img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85"},
  {q:"Which lentil is commonly used in dal makhani?",a:["Black urad dal","Red lentil","Yellow moong","Green pea"],c:0,cat:"India",img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85"},
  {q:"What is the main ingredient in traditional falafel?",a:["Chickpeas or fava beans","Cheese","Rice","Potato"],c:0,cat:"World Food",img:"https://images.unsplash.com/photo-1593001874117-c99c800e3eb2?auto=format&fit=crop&w=900&q=85"},
  {q:"Which fruit is dried to make raisins?",a:["Grape","Plum","Fig","Apricot"],c:0,cat:"Ingredients",img:"https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=900&q=85"},
  {q:"What is chai traditionally centered around?",a:["Tea and spices","Coffee and cocoa","Fruit and cream","Rice and milk"],c:0,cat:"India",img:"https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=900&q=85"},
  {q:"Which country is famous for ceviche?",a:["Peru","Canada","Germany","Japan"],c:0,cat:"World Food",img:"https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=900&q=85"},
  {q:"Which ingredient makes bread rise in many recipes?",a:["Yeast","Salt","Pepper","Vinegar"],c:0,cat:"Ingredients",img:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85"},
  {q:"Rasgulla is strongly associated with which Indian region?",a:["Odisha and West Bengal","Punjab","Goa","Rajasthan"],c:0,cat:"India",img:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85"},
  {q:"Which pasta shape means 'little worms' in Italian?",a:["Vermicelli","Fusilli","Penne","Ravioli"],c:0,cat:"World Food",img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85"},
  {q:"Which oil is central to traditional Mediterranean cooking?",a:["Olive oil","Palm oil","Sesame oil","Mustard oil"],c:0,cat:"Ingredients",img:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85"},
  {q:"What is paneer?",a:["Fresh Indian cheese","Fermented tea","Rice noodle","Spice blend"],c:0,cat:"India",img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85"},
  {q:"Which country is associated with baklava?",a:["Turkey and the wider Eastern Mediterranean","Japan","Brazil","Norway"],c:0,cat:"World Food",img:"https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=900&q=85"},
  {q:"Which vegetable is the main ingredient in ratatouille?",a:["Mixed summer vegetables","Potatoes only","Cabbage only","Corn only"],c:0,cat:"World Food",img:"https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format&fit=crop&w=900&q=85"},
  {q:"Which spice is commonly called the 'king of spices'?",a:["Black pepper","Turmeric","Cardamom","Cumin"],c:0,cat:"Ingredients",img:"https://images.unsplash.com/photo-1599909533730-f9d5d0b8d4c5?auto=format&fit=crop&w=900&q=85"},
  {q:"What is idli made primarily from?",a:["Rice and black gram","Wheat and chickpea","Corn and rice","Millet only"],c:0,cat:"India",img:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=85"},
  {q:"Which drink is traditionally made from roasted coffee beans?",a:["Coffee","Kombucha","Lassi","Matcha"],c:0,cat:"Drinks",img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85"}
];

/* =========================================================
   NIJOK FOOD FACTS — 50 DAY CYCLE
========================================================= */

const FOOD_FACTS_50 = [
  "Sushi is a Japanese food tradition that developed over centuries.",
  "Hyderabadi biryani is known for its fragrant rice and rich spices.",
  "Hummus is traditionally made from chickpeas, tahini, lemon and garlic.",
  "Paella originated in the Valencia region of Spain.",
  "Saffron comes from the dried stigmas of the crocus flower.",
  "Tacos are one of Mexico's best-known foods.",
  "Risotto is traditionally prepared with short-grain rice.",
  "Kimchi is an important part of Korean food culture.",
  "Avocado is the main ingredient in traditional guacamole.",
  "Moussaka is especially associated with Greek cuisine.",
  "Kombucha is a fermented tea beverage.",
  "Masala dosa is a popular South Indian dish.",
  "Feta is traditionally associated with Greek cuisine.",
  "Pho is a famous Vietnamese noodle soup.",
  "Basil is a key ingredient in traditional pesto.",
  "Naan is commonly cooked in a hot tandoor.",
  "Croissants are strongly associated with French food culture.",
  "Tofu is made from soybeans.",
  "Gajar halwa is a popular Indian carrot dessert.",
  "Miso is commonly produced by fermenting soybeans.",
  "Couscous is a staple food in many North African cuisines.",
  "Marzipan is traditionally made using almonds.",
  "Aloo paratha is a popular stuffed Indian flatbread.",
  "Mascarpone is the creamy cheese used in traditional tiramisu.",
  "Traditional pesto often contains pine nuts.",
  "Pad Thai is a famous Thai noodle dish.",
  "Lassi is a traditional yogurt-based Indian drink.",
  "Curcumin is the compound responsible for turmeric's yellow color.",
  "Neapolitan pizza originated in Naples, Italy.",
  "Dal makhani traditionally uses black urad dal.",
  "Falafel can be made using chickpeas or fava beans.",
  "Raisins are dried grapes.",
  "Indian chai commonly combines tea with spices.",
  "Ceviche is strongly associated with Peru.",
  "Yeast helps many breads rise through fermentation.",
  "Rasgulla is especially associated with Odisha and West Bengal.",
  "Vermicelli is a thin pasta or noodle.",
  "Olive oil is central to many Mediterranean cuisines.",
  "Paneer is a fresh Indian cheese.",
  "Baklava is popular across Turkey and the Eastern Mediterranean.",
  "Ratatouille is made with a variety of summer vegetables.",
  "Black pepper has historically been called the king of spices.",
  "Idli is traditionally made from fermented rice and black gram batter.",
  "Coffee is produced from roasted coffee beans.",
  "Chocolate is made from cacao beans.",
  "Cinnamon is obtained from tree bark.",
  "Ginger is widely used in Asian and global cuisines.",
  "Coconut is an important ingredient in many tropical cuisines.",
  "Cardamom is a popular aromatic spice.",
  "Food traditions often reflect the history and geography of a region."
];

/* =========================================================
   HELPERS
========================================================= */

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function esc(value){
  return String(value)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}

function shuffle(array){
  const copy = [...array];

  for(let i = copy.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i],copy[j]] = [copy[j],copy[i]];
  }

  return copy;
}

function todayKey(){
  const d = new Date();

  return [
    d.getFullYear(),
    String(d.getMonth()+1).padStart(2,"0"),
    String(d.getDate()).padStart(2,"0")
  ].join("-");
}

function dayIndex(total){
  const start = new Date(2026,8,29);
  const now = new Date();

  start.setHours(0,0,0,0);
  now.setHours(0,0,0,0);

  const diff = Math.floor(
    (now - start) / 86400000
  );

  return ((diff % total) + total) % total;
}

function imgFor(q){
  return q.img ||
    "https://loremflickr.com/900/600/food";
}

/* =========================================================
   STORAGE
========================================================= */

const STORE = {
  score:"NIJOK_SCORE",
  correct:"NIJOK_CORRECT",
  games:"NIJOK_GAMES",
  mode:"NIJOK_MODE",
  name:"NIJOK_NAME",
  email:"NIJOK_EMAIL",
  daily:"NIJOK_DAILY_COMPLETED"
};

function score(){
  return Number(
    localStorage.getItem(STORE.score) || 0
  );
}

function addScore(points){
  localStorage.setItem(
    STORE.score,
    String(score() + points)
  );

  updateStats();
}

function updateStats(){
  const scoreEl = $("#totalScore");
  const correctEl = $("#totalCorrect");
  const gamesEl = $("#gamesPlayed");

  if(scoreEl){
    scoreEl.textContent = score();
  }

  if(correctEl){
    correctEl.textContent =
      localStorage.getItem(STORE.correct) || 0;
  }

  if(gamesEl){
    gamesEl.textContent =
      localStorage.getItem(STORE.games) || 0;
  }
}

/* =========================================================
   CREATE 500 QUESTION BANKS
========================================================= */

function makeBank(type){

  const result = [];

  const forms = [
    q => q.q,
    q => `Food Knowledge: ${q.q}`,
    q => `Can you answer this? ${q.q}`,
    q => `NIJOK Challenge: ${q.q}`,
    q => `Discover the answer: ${q.q}`,
    q => `Quick Food Quiz: ${q.q}`,
    q => `Test your food knowledge — ${q.q}`,
    q => `Explorer Question: ${q.q}`,
    q => `Today's Food Question: ${q.q}`,
    q => `One more food challenge: ${q.q}`
  ];

  for(let round = 0; round < 10; round++){

    questions.forEach((q,index)=>{

      const item = {
        ...q,
        id:`${type}-${round}-${index}`,
        q:forms[round](q)
      };

      result.push(item);

    });

  }

  return shuffle(result);
}

const QUIZ_BANK = makeBank("quiz");
const GUESS_BANK = makeBank("guess");

const TIME_BANK = QUIZ_BANK.map((q,i)=>({
  ...q,
  id:`time-${i}`,
  q:`Beat the clock: ${q.q}`
}));

/* =========================================================
   100 MATCHING PAIRS
========================================================= */

const MATCH_BANK = Array.from(
  {length:100},
  (_,i)=>{

    const q = questions[i % questions.length];

    return {
      id:i + 1,
      food:[
        "Sushi",
        "Biryani",
        "Hummus",
        "Paella",
        "Saffron",
        "Tacos",
        "Risotto",
        "Kimchi",
        "Guacamole",
        "Moussaka",
        "Kombucha",
        "Dosa",
        "Feta Salad",
        "Pho",
        "Pesto",
        "Naan",
        "Croissant",
        "Tofu",
        "Gajar Halwa",
        "Miso"
      ][i % 20],
      country:q.a[q.c]
    };

  }
);

/* =========================================================
   GAME STATE
========================================================= */

const state = {
  mode:"",
  pool:[],
  index:0,
  score:0,
  correct:0,
  answered:false,
  timer:null,
  timeLeft:0,
  match:[],
  cards:[],
  matchOpen:[]
};

/* =========================================================
   MODALS
========================================================= */

function openModal(id){
  const modal = $(`#${id}`);

  if(!modal) return;

  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");
}

function closeModal(id){
  const modal = $(`#${id}`);

  if(!modal) return;

  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
}

function toast(message){

  let el = $("#nijokToast");

  if(!el){

    el = document.createElement("div");
    el.id = "nijokToast";

    Object.assign(el.style,{
      position:"fixed",
      left:"50%",
      bottom:"28px",
      transform:"translateX(-50%)",
      zIndex:"99999",
      padding:"12px 20px",
      borderRadius:"30px",
      background:"#234936",
      color:"#fff",
      boxShadow:"0 10px 30px rgba(0,0,0,.18)",
      fontWeight:"700"
    });

    document.body.appendChild(el);
  }

  el.textContent = message;
  el.style.display = "block";

  clearTimeout(el._timer);

  el._timer = setTimeout(()=>{
    el.style.display = "none";
  },2500);
}

/* =========================================================
   NORMAL QUIZ / GUESS / TIME
========================================================= */

function openGame(mode){

  if(mode === "match"){
    openMatch();
    return;
  }

  if(mode === "today"){
    openTodayChallenge();
    return;
  }

  if(mode === "time"){
    startTimeChallenge();
    return;
  }

  if(mode === "fact"){
    openFact();
    return;
  }

  if(mode === "museum"){
    openMuseum();
    return;
  }

  if(mode === "explore"){
    openExplore();
    return;
  }

  state.mode = mode;
  state.index = 0;
  state.score = 0;
  state.correct = 0;
  state.answered = false;

  if(mode === "guess"){
    state.pool = shuffle(GUESS_BANK).slice(0,20);
  }else{
    state.pool = shuffle(QUIZ_BANK).slice(0,20);
  }

  openModal("gameModal");

  $("#gameTitle").textContent =
    mode === "guess"
      ? "Guess the Food"
      : "Food Quiz";

  $("#gameDescription").textContent =
    mode === "guess"
      ? "Look at the food and choose the correct answer."
      : "Test your food knowledge and learn something new.";

  renderQuestion();
}

function renderQuestion(){

  clearInterval(state.timer);

  const q = state.pool[state.index];

  if(!q){
    finishGame();
    return;
  }

  state.answered = false;

  $("#questionCounter").textContent =
    `${state.index + 1} / ${state.pool.length}`;

  $("#gameProgress").style.width =
    `${((state.index + 1) / state.pool.length) * 100}%`;

  $("#gameScore").textContent =
    `Score: ${state.score}`;

  $("#gameQuestion").innerHTML = `
    <img
      class="game-image"
      src="${esc(imgFor(q))}"
      alt="Food"
    >

    <div class="question-text">
      ${esc(q.q)}
    </div>
  `;

  $("#gameAnswers").innerHTML =
    q.a.map((answer,i)=>`
      <button
        class="answer"
        data-i="${i}"
        type="button"
      >
        ${esc(answer)}
      </button>
    `).join("");

  $$("#gameAnswers .answer").forEach(button=>{
    button.onclick = ()=>{
      answerQuestion(
        Number(button.dataset.i)
      );
    };
  });

  $("#nextBtn").disabled = true;
  $("#nextBtn").textContent = "Next Question →";
}

function answerQuestion(selected){

  if(state.answered) return;

  state.answered = true;

  const q = state.pool[state.index];
  const buttons = $$("#gameAnswers .answer");

  const correct = selected === q.c;

  buttons.forEach(button=>{
    button.disabled = true;
  });

  if(correct){

    buttons[selected].classList.add("correct");

    state.score += 10;
    state.correct++;

    toast("Correct! +10 points 🌿");

  }else{

    buttons[selected].classList.add("wrong");

    if(buttons[q.c]){
      buttons[q.c].classList.add("correct");
    }

    toast(
      `Not quite. Correct answer: ${q.a[q.c]}`
    );
  }

  $("#gameScore").textContent =
    `Score: ${state.score}`;

  $("#nextBtn").disabled = false;

  showKnowledgeGain(q,correct);
}

function nextQuestion(){

  if(!state.answered) return;

  state.index++;

  if(state.index >= state.pool.length){

    finishGame();

  }else{

    renderQuestion();

  }
}

function finishGame(){

  clearInterval(state.timer);

  const total = state.pool.length;
  const percentage =
    total
      ? Math.round((state.correct / total) * 100)
      : 0;

  addScore(state.score);

  localStorage.setItem(
    STORE.correct,
    String(
      Number(
        localStorage.getItem(STORE.correct) || 0
      ) + state.correct
    )
  );

  localStorage.setItem(
    STORE.games,
    String(
      Number(
        localStorage.getItem(STORE.games) || 0
      ) + 1
    )
  );

  updateStats();

  $("#questionCounter").textContent =
    "Completed";

  $("#gameProgress").style.width = "100%";

  $("#gameScore").textContent =
    `Score: ${state.score}`;

  $("#gameQuestion").innerHTML = `
    <div style="text-align:center;padding:20px">

      <div style="font-size:54px">
        🌿
      </div>

      <h2 style="font:600 42px var(--serif)">
        ${state.mode === "guess"
          ? "Guess the Food Complete!"
          : "Quiz Complete!"}
      </h2>

      <p>
        You answered
        <strong>${state.correct}/${total}</strong>
        correctly.
      </p>

      <p>
        Accuracy:
        <strong>${percentage}%</strong>
      </p>

    </div>
  `;

  $("#gameAnswers").innerHTML = "";

  const next = $("#nextBtn");

  next.disabled = false;
  next.textContent = "Play Again →";

  next.onclick = ()=>{
    openGame(state.mode);
  };
}

/* =========================================================
   TIME CHALLENGE
========================================================= */

function startTimeChallenge(){

  state.mode = "time";
  state.index = 0;
  state.score = 0;
  state.correct = 0;
  state.answered = false;

  state.pool =
    shuffle(TIME_BANK).slice(0,10);

  openModal("gameModal");

  $("#gameTitle").textContent =
    "Time Challenge";

  $("#gameDescription").textContent =
    "Answer before the timer reaches zero.";

  renderTimeQuestion();
}

function renderTimeQuestion(){

  clearInterval(state.timer);

  const q = state.pool[state.index];

  if(!q){
    finishGame();
    return;
  }

  state.answered = false;
  state.timeLeft = 15;

  $("#questionCounter").textContent =
    `${state.index + 1} / ${state.pool.length}`;

  $("#gameProgress").style.width =
    `${((state.index + 1) / state.pool.length) * 100}%`;

  $("#gameScore").textContent =
    `Score: ${state.score} · ⏱ 15s`;

  $("#gameQuestion").innerHTML = `
    <img
      class="game-image"
      src="${esc(imgFor(q))}"
      alt="Food"
    >

    <div class="question-text">
      ${esc(q.q)}
    </div>

    <div class="timer-chip">
      ⏱ <span id="questionTimer">15</span>s
    </div>
  `;

  $("#gameAnswers").innerHTML =
    q.a.map((answer,i)=>`
      <button
        class="answer"
        data-i="${i}"
        type="button"
      >
        ${esc(answer)}
      </button>
    `).join("");

  $$("#gameAnswers .answer").forEach(button=>{
    button.onclick = ()=>{
      answerTimeChallenge(
        Number(button.dataset.i)
      );
    };
  });

  $("#nextBtn").disabled = true;
  $("#nextBtn").textContent =
    "Next Question →";

  state.timer = setInterval(()=>{

    state.timeLeft--;

    const timer = $("#questionTimer");

    if(timer){
      timer.textContent = state.timeLeft;
    }

    if(state.timeLeft <= 0){

      clearInterval(state.timer);

      if(!state.answered){
        answerTimeChallenge(-1);
      }
    }

  },1000);
}

function answerTimeChallenge(selected){

  if(state.answered) return;

  state.answered = true;

  clearInterval(state.timer);

  const q = state.pool[state.index];

  const buttons =
    $$("#gameAnswers .answer");

  buttons.forEach(button=>{
    button.disabled = true;
  });

  const correct =
    selected === q.c;

  if(correct){

    buttons[selected].classList.add("correct");

    state.score += 10;
    state.correct++;

    toast("Fast and correct! +10 ⚡");

  }else{

    if(selected >= 0 && buttons[selected]){
      buttons[selected].classList.add("wrong");
    }

    if(buttons[q.c]){
      buttons[q.c].classList.add("correct");
    }

    toast(
      `Time's up / wrong answer. Correct: ${q.a[q.c]}`
    );
  }

  $("#gameScore").textContent =
    `Score: ${state.score}`;

  $("#nextBtn").disabled = false;

  showKnowledgeGain(q,correct);
}

function restartTimeChallenge(){
  startTimeChallenge();
}

/* =========================================================
   MATCH THE PAIR
========================================================= */

function openMatch(){

  state.mode = "match";

  state.match =
    shuffle(MATCH_BANK).slice(0,10);

  state.matchOpen = [];
  state.score = 0;

  openModal("gameModal");

  $("#gameTitle").textContent =
    "Match the Pair";

  $("#gameDescription").textContent =
    "Match each food with its correct country.";

  $("#questionCounter").textContent =
    "10 pairs";

  $("#gameProgress").style.width = "0%";

  $("#gameScore").textContent =
    "Score: 0";

  renderMatch();
}

function renderMatch(){

  const cards = shuffle(
    state.match.flatMap((pair,index)=>[
      {
        pair:index,
        text:pair.food,
        type:"food"
      },
      {
        pair:index,
        text:pair.country,
        type:"country"
      }
    ])
  );

  state.cards = cards;

  $("#gameQuestion").innerHTML = `
    <div class="question-text">
      Find all 10 matching pairs.
    </div>
  `;

  $("#gameAnswers").innerHTML =
    cards.map((card,index)=>`
      <button
        class="answer match-card"
        data-i="${index}"
        type="button"
      >
        ?
      </button>
    `).join("");

  $$(".match-card").forEach(button=>{
    button.onclick = ()=>{
      flipMatch(
        Number(button.dataset.i)
      );
    };
  });

  $("#nextBtn").disabled = true;
}

function flipMatch(index){

  const card = state.cards[index];

  if(
    !card ||
    card.matched ||
    card.open ||
    state.matchOpen.length >= 2
  ){
    return;
  }

  card.open = true;

  state.matchOpen.push(index);

  refreshMatch();

  if(state.matchOpen.length === 2){
    setTimeout(resolveMatch,500);
  }
}

function refreshMatch(){

  $$(".match-card").forEach((element,index)=>{

    const card = state.cards[index];

    element.textContent =
      card.open || card.matched
        ? card.text
        : "?";

    if(card.matched){
      element.classList.add("correct");
    }

  });
}

function resolveMatch(){

  const [firstIndex,secondIndex] =
    state.matchOpen;

  const first =
    state.cards[firstIndex];

  const second =
    state.cards[secondIndex];

  if(
    first.pair === second.pair &&
    first.type !== second.type
  ){

    first.matched = true;
    second.matched = true;

    state.score += 5;

    toast("Match found! +5 🌿");

  }else{

    first.open = false;
    second.open = false;

    toast("Not a match — try again.");
  }

  state.matchOpen = [];

  refreshMatch();

  $("#gameScore").textContent =
    `Score: ${state.score}`;

  const allMatched =
    state.cards.every(card=>card.matched);

  if(allMatched){

    addScore(state.score);

    localStorage.setItem(
      STORE.games,
      String(
        Number(
          localStorage.getItem(STORE.games) || 0
        ) + 1
      )
    );

    updateStats();

    $("#gameQuestion").innerHTML = `
      <div class="question-text">
        All pairs matched! 🎉
      </div>

      <p>
        Great memory and food knowledge.
      </p>
    `;

    $("#gameAnswers").innerHTML = "";

    const next = $("#nextBtn");

    next.disabled = false;
    next.textContent = "Finish →";

    next.onclick = ()=>{
      closeModal("gameModal");
    };
  }
}

/* =========================================================
   TODAY'S CHALLENGE
========================================================= */

function openTodayChallenge(){

  const index = dayIndex(50);

  const q =
    questions[index % questions.length];

  const completed =
    localStorage.getItem(STORE.daily)
    === todayKey();

  state.mode = "today";

  openModal("gameModal");

  $("#gameTitle").textContent =
    "Today's Challenge";

  $("#gameDescription").textContent =
    `Day ${index + 1} of 50 · One photo + one question`;

  $("#questionCounter").textContent =
    `DAY ${index + 1} / 50`;

  $("#gameProgress").style.width = "100%";

  $("#gameScore").textContent =
    completed
      ? "Completed today"
      : "+10 points available";

  $("#gameQuestion").innerHTML = `
    <img
      class="game-image"
      src="${esc(imgFor(q))}"
      alt="Food"
    >

    <div class="question-text">
      ${esc(q.q)}
    </div>
  `;

  $("#gameAnswers").innerHTML =
    q.a.map((answer,i)=>`
      <button
        class="answer"
        data-i="${i}"
        type="button"
      >
        ${esc(answer)}
      </button>
    `).join("");

  $$("#gameAnswers .answer").forEach(button=>{

    button.onclick = ()=>{

      if(completed){

        toast(
          "Today's challenge is already complete."
        );

        return;
      }

      const selected =
        Number(button.dataset.i);

      const correct =
        selected === q.c;

      $$("#gameAnswers .answer")
        .forEach(x=>{
          x.disabled = true;
        });

      if(correct){

        button.classList.add("correct");

      }else{

        button.classList.add("wrong");

        $$("#gameAnswers .answer")
          [q.c]
          ?.classList.add("correct");
      }

      localStorage.setItem(
        STORE.daily,
        todayKey()
      );

      addScore(10);

      toast(
        correct
          ? "Correct! +10 daily points 🌿"
          : "Challenge complete! +10 daily points 🌿"
      );

      showKnowledgeGain(q,correct);

      $("#nextBtn").disabled = false;

      $("#nextBtn").textContent =
        "Finish Challenge";

      $("#nextBtn").onclick = ()=>{
        closeModal("gameModal");
      };
    };

  });

  $("#nextBtn").disabled = true;
}

/* =========================================================
   DO YOU KNOW
========================================================= */

function openFact(){

  const index = dayIndex(50);

  $("#factModalTitle").textContent =
    `Food Fact #${index + 1}`;

  $("#factModalText").textContent =
    FOOD_FACTS_50[index];

  openModal("factModal");
}

function renderDailyFact(){

  const index = dayIndex(50);

  if($("#dailyFactText")){
    $("#dailyFactText").textContent =
      FOOD_FACTS_50[index];
  }

  if($("#factNumber")){
    $("#factNumber").textContent =
      `FACT ${String(index + 1).padStart(2,"0")} / 50`;
  }
}

/* =========================================================
   FOOD MUSEUM
========================================================= */

function openMuseum(){

  const index = dayIndex(50);

  const q =
    questions[index % questions.length];

  openSimple(
    "Food Museum",
    `Day ${index + 1} / 50`,
    q,
    FOOD_FACTS_50[index]
  );
}

/* =========================================================
   EXPLORE FOOD
========================================================= */

function openExplore(){

  const index = dayIndex(100);

  const q =
    questions[index % questions.length];

  openSimple(
    "Explore Food",
    `Explore ${index + 1} / 100`,
    q,
    `Explore this ${q.cat} food story and discover another culture.`
  );
}

function openSimple(
  title,
  label,
  q,
  text
){

  state.mode = "simple";

  openModal("gameModal");

  $("#gameTitle").textContent =
    title;

  $("#gameDescription").textContent =
    label;

  $("#questionCounter").textContent =
    label;

  $("#gameProgress").style.width =
    "100%";

  $("#gameScore").textContent =
    `Score: ${score()}`;

  $("#gameQuestion").innerHTML = `
    <img
      class="game-image"
      src="${esc(imgFor(q))}"
      alt="Food"
    >

    <div class="question-text">
      ${esc(q.q)}
    </div>

    <p>
      ${esc(text)}
    </p>
  `;

  $("#gameAnswers").innerHTML = `
    <button
      class="answer"
      id="simpleClose"
      type="button"
    >
      Continue Exploring →
    </button>
  `;

  $("#simpleClose").onclick = ()=>{
    closeModal("gameModal");
  };

  $("#nextBtn").disabled = true;
}

/* =========================================================
   KNOWLEDGE POPUP
========================================================= */

function showKnowledgeGain(q,correct){

  const index =
    state.index % FOOD_FACTS_50.length;

  $("#knowledgeTitle").textContent =
    correct
      ? "Correct Answer! + Knowledge 🌿"
      : "Knowledge Gained 🌍";

  $("#knowledgeText").textContent =
    correct
      ? `${FOOD_FACTS_50[index]} You earned points for learning.`
      : `The correct answer is: ${q.a[q.c]}. ${FOOD_FACTS_50[index]}`;

  openModal("knowledgeModal");
}

/* =========================================================
   LEADERBOARD
========================================================= */

function buildLeaderboard(){

  const list = $("#leaderboardList");

  if(!list) return;

  const names = [
    "FoodieRiya",
    "NomadChef",
    "SpiceHunter",
    "TasteTraveler",
    "KulinarikKid"
  ];

  const points = [
    1420,
    1360,
    1280,
    1210,
    1180
  ];

  list.innerHTML =
    names.map((name,index)=>`
      <div class="leader-row">

        <span class="rank-dot">
          ${index + 1}
        </span>

        <strong>
          ${name}
        </strong>

        <b>
          ${points[index]}
        </b>

        <span>
          ✿
        </span>

      </div>
    `).join("");
}

/* =========================================================
   TODAY FOOD QUESTION
========================================================= */

function today(){

  const index = dayIndex(50);

  const q =
    questions[index % questions.length];

  if($("#todayQuestion")){
    $("#todayQuestion").textContent =
      q.q;
  }

  if($("#todayImage")){
    $("#todayImage").src =
      imgFor(q);
  }

  if($("#todayOptions")){

    $("#todayOptions").innerHTML =
      q.a.map((answer,i)=>`
        <button
          data-i="${i}"
          type="button"
        >
          ${String.fromCharCode(65+i)}.
          ${esc(answer)}
        </button>
      `).join("");

    $$("#todayOptions button").forEach(button=>{

      button.onclick = ()=>{

        const correct =
          Number(button.dataset.i) === q.c;

        $$("#todayOptions button")
          .forEach(x=>{
            x.classList.remove(
              "correct",
              "wrong"
            );
          });

        button.classList.add(
          correct ? "correct" : "wrong"
        );

        toast(
          correct
            ? "Today's answer is correct! 🌿"
            : "Not quite — try again!"
        );
      };

    });
  }
}

/* =========================================================
   COUNTDOWN
========================================================= */

function countdown(){

  const now = new Date();

  const tomorrow =
    new Date(now);

  tomorrow.setHours(
    24,
    0,
    0,
    0
  );

  const seconds =
    Math.max(
      0,
      Math.floor(
        (tomorrow - now) / 1000
      )
    );

  if($("#hours")){
    $("#hours").textContent =
      String(
        Math.floor(seconds / 3600)
      ).padStart(2,"0");
  }

  if($("#minutes")){
    $("#minutes").textContent =
      String(
        Math.floor(
          (seconds % 3600) / 60
        )
      ).padStart(2,"0");
  }

  if($("#seconds")){
    $("#seconds").textContent =
      String(
        seconds % 60
      ).padStart(2,"0");
  }
}

/* =========================================================
   LOGIN / REGISTER
========================================================= */

function openLogin(){
  openModal("authModal");
}

function continueAsGuest(){

  localStorage.setItem(
    STORE.mode,
    "guest"
  );

  closeModal("authModal");

  toast(
    "You're playing as a Guest 🌿"
  );
}

/* =========================================================
   GLOBAL FUNCTIONS
========================================================= */

window.openGame =
  openGame;

window.startGame =
  openGame;

window.closeGame =
  ()=>{
    closeModal("gameModal");
  };

window.openLogin =
  openLogin;

window.continueAsGuest =
  continueAsGuest;

window.showFact =
  openFact;

window.showMuseum =
  openMuseum;

window.showExplore =
  openExplore;

window.startTimeChallenge =
  startTimeChallenge;

window.restartTimeChallenge =
  restartTimeChallenge;

/* =========================================================
   INITIALIZATION
========================================================= */

function init(){

  /* Game modal */

  if($("#closeGame")){
    $("#closeGame").onclick =
      ()=>{
        closeModal("gameModal");
      };
  }

  if($("#nextBtn")){
    $("#nextBtn").onclick =
      nextQuestion;
  }

  if($("#gameModal")){

    $("#gameModal").addEventListener(
      "click",
      event=>{

        if(
          event.target.id === "gameModal"
        ){
          closeModal("gameModal");
        }

      }
    );
  }

  /* Game buttons */

  $$("[data-game]").forEach(button=>{

    button.addEventListener(
      "click",
      ()=>{
        openGame(
          button.dataset.game
        );
      }
    );

  });

  /* Register */

  if($("#registerBtn")){
    $("#registerBtn").onclick =
      openLogin;
  }

  if($("#guestBtn")){
    $("#guestBtn").onclick =
      continueAsGuest;
  }

  if($("#closeAuth")){
    $("#closeAuth").onclick =
      ()=>{
        closeModal("authModal");
      };
  }

  if($("#continueGuest")){
    $("#continueGuest").onclick =
      continueAsGuest;
  }

  if($("#registerSave")){

    $("#registerSave").onclick =
      ()=>{

        const name =
          $("#registerName")
            .value
            .trim();

        const email =
          $("#registerEmail")
            .value
            .trim();

        if(
          !name ||
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(email)
        ){

          toast(
            "Please enter a valid name and email."
          );

          return;
        }

        localStorage.setItem(
          STORE.mode,
          "registered"
        );

        localStorage.setItem(
          STORE.name,
          name
        );

        localStorage.setItem(
          STORE.email,
          email
        );

        closeModal("authModal");

        toast(
          `Welcome to NIJOK, ${name}! 🌿`
        );
      };
  }

  /* How it works */

  if($("#howBtn")){

    $("#howBtn").onclick =
      ()=>{
        openModal("howModal");
      };
  }

  if($("#closeHow")){

    $("#closeHow").onclick =
      ()=>{
        closeModal("howModal");
      };
  }

  if($("#howStart")){

    $("#howStart").onclick =
      ()=>{
        closeModal("howModal");
        openGame("quiz");
      };
  }

  /* Food Fact */

  if($("#factBtn")){

    $("#factBtn").onclick =
      ()=>{
        renderDailyFact();
        openFact();
      };
  }

  if($("#closeFact")){

    $("#closeFact").onclick =
      ()=>{
        closeModal("factModal");
      };
  }

  if($("#factCloseBtn")){

    $("#factCloseBtn").onclick =
      ()=>{
        closeModal("factModal");
      };
  }

  /* Knowledge */

  if($("#closeKnowledge")){

    $("#closeKnowledge").onclick =
      ()=>{
        closeModal("knowledgeModal");
      };
  }

  if($("#knowledgeClose")){

    $("#knowledgeClose").onclick =
      ()=>{
        closeModal("knowledgeModal");
      };
  }

  if($("#knowledgeModal")){

    $("#knowledgeModal")
      .addEventListener(
        "click",
        event=>{

          if(
            event.target.id ===
            "knowledgeModal"
          ){
            closeModal("knowledgeModal");
          }

        }
      );
  }

  /* Community comments */

  if($("#commentBtn")){

    $("#commentBtn").onclick =
      ()=>{

        const input =
          $("#commentInput");

        const value =
          input.value.trim();

        if(!value){

          toast(
            "Write a comment first 💬"
          );

          return;
        }

        const name =
          localStorage.getItem(
            STORE.name
          ) ||
          "Guest Explorer";

        const item =
          document.createElement("div");

        item.className =
          "comment-item";

        item.innerHTML = `
          <div class="comment-avatar">
            ${esc(
              name
                .charAt(0)
                .toUpperCase()
            )}
          </div>

          <div>
            <b>${esc(name)}</b>

            <p>
              “${esc(value)}”
            </p>

            <small>
              Just now
            </small>
          </div>
        `;

        $("#commentList")
          ?.prepend(item);

        input.value = "";

        toast(
          "Comment posted! 💬"
        );
      };
  }

  /* Search */

  if($("#searchBtn")){

    $("#searchBtn").onclick =
      ()=>{

        const term =
          prompt(
            "Search NIJOK for a food, region or country:"
          );

        if(!term) return;

        const hit =
          questions.find(q=>
            (
              q.q +
              " " +
              q.cat
            )
            .toLowerCase()
            .includes(
              term.toLowerCase()
            )
          );

        toast(
          hit
            ? "Food found — try a challenge! 🌿"
            : "No exact match found."
        );
      };
  }

  /* Language */

  if($("#langBtn")){

    $("#langBtn").onclick =
      ()=>{
        toast(
          "English selected."
        );
      };
  }

  /* Menu */

  if($("#menuBtn")){

    $("#menuBtn").onclick =
      ()=>{
        toast(
          "Use the navigation links to explore NIJOK."
        );
      };
  }

  /* Escape closes modals */

  document.addEventListener(
    "keydown",
    event=>{

      if(event.key === "Escape"){

        [
          "gameModal",
          "authModal",
          "howModal",
          "factModal",
          "knowledgeModal"
        ].forEach(closeModal);

      }

    }
  );

  /* Start page */

  renderDailyFact();
  updateStats();
  buildLeaderboard();
  today();
  countdown();

  setInterval(
    countdown,
    1000
  );

  console.log(
    "🌿 NIJOK READY",
    {
      quiz:QUIZ_BANK.length,
      guess:GUESS_BANK.length,
      time:TIME_BANK.length,
      matches:MATCH_BANK.length,
      facts:FOOD_FACTS_50.length
    }
  );
}

/* =========================================================
   START
========================================================= */

if(
  document.readyState === "loading"
){

  document.addEventListener(
    "DOMContentLoaded",
    init
  );

}else{

  init();

}
