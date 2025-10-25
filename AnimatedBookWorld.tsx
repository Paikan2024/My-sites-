<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Chronicles of Trimoons</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Crimson+Text:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    :root{
      --fantasy-gold:#c8a24b; --fantasy-deep:#0b0e15; --paper-1:#fff7e7; --paper-2:#ede0c8;
      --paper-3:#d2c099; --paper-4:#967e58; --ink:#1c1408;
    }
    *{box-sizing:border-box}
    html,body{height:100%;}
    body{margin:0; color:#e7e7e7; background:radial-gradient(120% 120% at 50% -20%, #1a1f29, #0b0e15 60%, #06070a 100%); font-family:'Crimson Text', ui-serif, Georgia, serif;}
    .font-display{font-family:'Cinzel Decorative', ui-serif, Georgia, serif; letter-spacing:.5px}
    a{color:inherit; text-decoration:none}
    /* Layout */
    .container{max-width:1100px; margin:0 auto; padding:0 16px}
    header.sticky{position:sticky; top:0; z-index:30; backdrop-filter:saturate(110%) blur(8px); background:rgba(0,0,0,.3); border-bottom:1px solid rgba(200,162,75,.25)}
    header .row{display:flex; align-items:center; justify-content:space-between; padding:12px 0}
    nav a{margin-left:18px; opacity:.85}
    nav a:hover{opacity:1}
    .btn{display:inline-flex; align-items:center; gap:8px; padding:10px 14px; border-radius:10px; border:1px solid rgba(200,162,75,.45); color:var(--fantasy-gold); background:transparent; cursor:pointer}
    .btn.primary{background:var(--fantasy-gold); color:#000}
    .btn:hover{filter:brightness(1.08)}
    .section{padding:56px 0}
    .grid{display:grid; gap:24px}
    @media(min-width:700px){.grid.split-2{grid-template-columns:1fr 1fr}}

    /* Atmosphere */
    .torch-vignette{pointer-events:none; position:fixed; inset:0; mix-blend-mode:multiply; background:radial-gradient(90% 60% at 50% 10%, rgba(0,0,0,0) 0%, rgba(0,0,0,.15) 60%, rgba(0,0,0,.45) 100%)}
    .embers{pointer-events:none; position:fixed; inset:0; overflow:hidden}
    .ember{position:absolute; width:2px; height:2px; border-radius:50%; background:rgba(255,210,154,.85); box-shadow:0 0 6px rgba(255,210,154,.85); animation:ember 8s linear infinite}
    @keyframes ember{0%{transform:translateY(0); opacity:.2} 50%{opacity:.95} 100%{transform:translateY(-60px); opacity:.2}}

    /* Paper cards */
    .paper{background:radial-gradient(120% 120% at 50% 0%, rgba(255,247,231,.85), rgba(237,224,200,.9) 40%, rgba(210,192,153,.92) 65%, rgba(150,126,88,.92) 95%); color:var(--ink); box-shadow:inset 0 2px 40px rgba(0,0,0,.2), 0 8px 30px rgba(0,0,0,.3); border-radius:18px}
    .paper .p{padding:18px}
    .orn-divider{text-align:center; position:relative; color:var(--fantasy-gold)}
    .orn-divider:before, .orn-divider:after{content:""; position:absolute; top:50%; width:40%; height:1px; background:linear-gradient(to var(--dir,left), transparent, rgba(200,162,75,.8))}
    .orn-divider:before{left:0; --dir:right}
    .orn-divider:after{right:0; --dir:left}

    /* Orrery */
    .orrery-wrap{position:relative; width:min(460px,86vw); height:min(460px,86vw); margin:24px auto}
    .orrery-center{position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:220px; height:220px; border-radius:50%; background:radial-gradient(circle at 35% 30%, #3b5d7a, #1d2b3a 50%, #0a0f16 70%); box-shadow:inset 0 0 22px rgba(0,0,0,.7), 0 0 40px rgba(200,162,75,.15); animation:floaty 7s ease-in-out infinite}
    @keyframes floaty{0%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(-3px)} 100%{transform:translate(-50%,-50%) translateY(0)}}
    .ring{position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); border:1px solid rgba(200,162,75,.6); border-radius:50%; animation:spin 80s linear infinite}
    .ring.r2{width:76%; height:76%; opacity:.8; animation-duration:70s; animation-direction:reverse}
    .ring.r1{width:100%; height:100%}
    .ring.r3{width:56%; height:56%; opacity:.7; animation-duration:60s}
    @keyframes spin{to{transform:translate(-50%,-50%) rotate(360deg)}}
    .arm{position:absolute; left:50%; top:50%; height:1px; width:50%; transform-origin:left center; background:linear-gradient(to right, rgba(200,162,75,.1), rgba(200,162,75,.8)); animation:spin var(--dur,30s) linear infinite; border-radius:1px}
    .moon{position:absolute; right:-6px; top:-6px; width:12px; height:12px; border-radius:50%; background:radial-gradient(circle at 30% 30%, #ececec, #9d9d9d); box-shadow:0 0 8px rgba(255,255,255,.4)}

    .radial-buttons{pointer-events:none; position:absolute; inset:0}
    .radial-buttons button{pointer-events:auto; position:absolute; border:1px solid rgba(200,162,75,.5); background:rgba(0,0,0,.4); color:var(--fantasy-gold); padding:6px 10px; border-radius:999px; font-family:'Cinzel Decorative', ui-serif, Georgia, serif; font-size:12px; backdrop-filter:blur(4px)}

    /* Modal */
    .modal-backdrop{position:fixed; inset:0; display:grid; place-items:center; background:radial-gradient(90% 60% at 50% 10%, rgba(0,0,0,0), rgba(0,0,0,.5)); z-index:60; animation:fadeIn .25s ease}
    .modal{max-width:680px; width:min(92vw,680px); background:rgba(255,247,231,.96); color:var(--ink); border:1px solid rgba(200,162,75,.35); border-radius:18px; box-shadow:0 25px 60px rgba(0,0,0,.5); overflow:hidden}
    .modal .hd{padding:16px; border-bottom:1px solid rgba(200,162,75,.25)}
    .modal .bd{padding:16px}
    .modal .ft{padding:12px 16px; border-top:1px solid rgba(200,162,75,.25); display:flex; justify-content:flex-end; gap:8px}
    .hidden{display:none !important}
    @keyframes fadeIn{from{opacity:0; transform:translateY(6px)} to{opacity:1; transform:none}}

    /* Crests */
    .crest-card{border-radius:18px; overflow:hidden}
    .crest-body{display:flex; gap:16px; align-items:center; padding:16px}
    .crest-svg{width:96px; height:112px}

    /* Accordion */
    .acc{border:1px solid rgba(200,162,75,.35); border-radius:16px; overflow:hidden; background:rgba(255,247,231,.4); color:#111}
    .acc button{width:100%; text-align:left; background:transparent; border:0; padding:12px 14px; font-family:'Cinzel Decorative', ui-serif, Georgia, serif; display:flex; justify-content:space-between; align-items:center; font-size:18px; color:#111; cursor:pointer}
    .acc .panel{max-height:0; overflow:hidden; transition:max-height .35s ease, opacity .35s ease; opacity:.0}
    .acc.open .panel{max-height:400px; opacity:1}

    /* Footer */
    footer{border-top:1px solid rgba(200,162,75,.25); text-align:center; padding:16px; color:rgba(200,162,75,.85)}
  </style>
</head>
<body>
  <div class="torch-vignette"></div>
  <div class="embers" id="embers"></div>

  <header class="sticky">
    <div class="container row">
      <div class="font-display" style="color:var(--fantasy-gold); font-size:20px; display:flex; align-items:center; gap:8px;">⚜️ Chronicles of Trimoons</div>
      <nav class="font-display" style="font-size:15px; color:rgba(200,162,75,.9)">
        <a href="#home">Home</a>
        <a href="#world">World</a>
        <a href="#races">Races</a>
        <a href="#chapters">Chapters</a>
        <a href="#summary">Summary</a>
      </nav>
    </div>
  </header>

  <!-- HOME -->
  <section id="home" class="section">
    <div class="container grid split-2">
      <div>
        <h1 class="font-display" style="font-size:42px; color:var(--fantasy-gold); margin:0 0 8px">An Epic of War, Oaths, and Gold</h1>
        <p style="opacity:.92; max-width:60ch">In a far arm of the Milky Way, four peoples contest a world steered by four moons. From jungle alliances to volcanic wars and mountain vows—this saga follows Prince Musa from first battle to shadowed intrigue.</p>
        <div style="margin-top:16px; display:flex; gap:10px; flex-wrap:wrap">
          <a class="btn primary" href="#chapters">▶ Start Reading</a>
          <a class="btn" href="#world">🛡️ Explore the World</a>
        </div>
      </div>
      <div>
        <!-- WORLD EXPLORER (interactive) -->
        <div class="orrery-wrap" id="orrery">
          <div class="ring r1"></div>
          <div class="ring r2"></div>
          <div class="ring r3"></div>
          <div class="orrery-center"></div>

          <!-- rotating arms (four moons) -->
          <div class="arm" style="--dur:26s; transform:translate(-50%,-50%) rotate(0deg)"><div class="moon"></div></div>
          <div class="arm" style="--dur:34s; transform:translate(-50%,-50%) rotate(90deg)"><div class="moon" style="width:10px;height:10px; right:-5px; top:-5px"></div></div>
          <div class="arm" style="--dur:40s; transform:translate(-50%,-50%) rotate(180deg)"><div class="moon" style="width:14px;height:14px; right:-7px; top:-7px"></div></div>
          <div class="arm" style="--dur:48s; transform:translate(-50%,-50%) rotate(270deg)"><div class="moon" style="width:9px;height:9px; right:-4.5px; top:-4.5px"></div></div>

          <!-- Radial buttons -->
          <div class="radial-buttons">
            <button style="left:50%; top:6%; transform:translateX(-50%)" data-body="moon_alpha">ALARA</button>
            <button style="right:6%; top:50%; transform:translateY(-50%)" data-body="moon_beta">VARYN</button>
            <button style="left:50%; bottom:6%; transform:translateX(-50%)" data-body="moon_gamma">SERETH</button>
            <button style="left:6%; top:50%; transform:translateY(-50%)" data-body="moon_delta">ITHA</button>
            <button style="left:50%; top:50%; transform:translate(-50%,-50%)" data-body="planet">Planet</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- WORLD (deep dive) -->
  <section id="world" class="section">
    <div class="container">
      <h2 class="orn-divider font-display" style="font-size:28px; margin:0 0 18px">The World & Moons</h2>
      <div class="grid split-2">
        <div class="paper crest-card">
          <div class="p">
            <h3 class="font-display" style="color:var(--ink); margin:0 0 6px">How the Moons Shape History</h3>
            <p style="color:var(--ink)">Tides, migrations, and harvests bend to the sky. The Nosams track river swells by ALARA; the Normandas march beneath VARYN’s ash; Normanis seers name SERETH in their iron prayers; and lovers whisper oaths under ITHA. Every pact keeps one eye on the heavens.</p>
          </div>
        </div>
        <div>
          <div class="orrery-wrap">
            <div class="ring r1"></div>
            <div class="ring r2"></div>
            <div class="ring r3"></div>
            <div class="orrery-center"></div>
            <div class="arm" style="--dur:26s; transform:translate(-50%,-50%) rotate(0deg)"><div class="moon"></div></div>
            <div class="arm" style="--dur:34s; transform:translate(-50%,-50%) rotate(90deg)"><div class="moon" style="width:10px;height:10px; right:-5px; top:-5px"></div></div>
            <div class="arm" style="--dur:40s; transform:translate(-50%,-50%) rotate(180deg)"><div class="moon" style="width:14px;height:14px; right:-7px; top:-7px"></div></div>
            <div class="arm" style="--dur:48s; transform:translate(-50%,-50%) rotate(270deg)"><div class="moon" style="width:9px;height:9px; right:-4.5px; top:-4.5px"></div></div>

            <div class="radial-buttons">
              <button style="left:50%; top:6%; transform:translateX(-50%)" data-body="moon_alpha">ALARA</button>
              <button style="right:6%; top:50%; transform:translateY(-50%)" data-body="moon_beta">VARYN</button>
              <button style="left:50%; bottom:6%; transform:translateX(-50%)" data-body="moon_gamma">SERETH</button>
              <button style="left:6%; top:50%; transform:translateY(-50%)" data-body="moon_delta">ITHA</button>
              <button style="left:50%; top:50%; transform:translate(-50%,-50%)" data-body="planet">Planet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- RACES -->
  <section id="races" class="section">
    <div class="container">
      <h2 class="orn-divider font-display" style="font-size:28px; margin:0 0 18px">Peoples of the Realm</h2>
      <div class="grid split-2">
        <div id="race-nosams" class="paper crest-card">
          <div class="crest-body">
            <svg viewBox="0 0 120 140" class="crest-svg" aria-hidden>
              <defs>
                <linearGradient id="nosams-metal" x1="0" x2="1">
                  <stop offset="0%" stop-color="#c5a66a"/>
                  <stop offset="50%" stop-color="#e3c88a"/>
                  <stop offset="100%" stop-color="#9a7b45"/>
                </linearGradient>
              </defs>
              <path d="M60 10 L100 30 V70 C100 100 80 118 60 130 C40 118 20 100 20 70 V30 Z" fill="url(#nosams-metal)" stroke="#5b4724" stroke-width="2"></path>
              <path d="M60 36 q18 8 0 24 q-18 -16 0 -24" fill="#2d6a4f" opacity=".9">
                <animate attributeName="y" values="0;-1;0" dur="3s" repeatCount="indefinite"/>
              </path>
              <circle cx="60" cy="48" r="20" fill="transparent" stroke="#8ff0c1" stroke-opacity=".7" stroke-dasharray="3 6">
                <animate attributeName="stroke-dashoffset" values="0;8;0" dur="4s" repeatCount="indefinite"/>
              </circle>
            </svg>
            <p style="color:var(--ink)">Forest tacticians whose vows are carved in living wood.</p>
          </div>
        </div>

        <div id="race-narminas" class="paper crest-card">
          <div class="crest-body">
            <svg viewBox="0 0 120 140" class="crest-svg" aria-hidden>
              <defs>
                <linearGradient id="narminas-metal" x1="0" x2="1">
                  <stop offset="0%" stop-color="#c5a66a"/>
                  <stop offset="50%" stop-color="#e3c88a"/>
                  <stop offset="100%" stop-color="#9a7b45"/>
                </linearGradient>
              </defs>
              <path d="M60 10 L100 30 V70 C100 100 80 118 60 130 C40 118 20 100 20 70 V30 Z" fill="url(#narminas-metal)" stroke="#5b4724" stroke-width="2"></path>
              <g>
                <path d="M40 80 L80 80 L60 40 Z" fill="#22577a">
                  <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="4s" repeatCount="indefinite" additive="sum"/>
                </path>
                <circle cx="60" cy="68" r="6" fill="#7ad7f0">
                  <animate attributeName="opacity" values=".4;1;.4" dur="2.5s" repeatCount="indefinite"/>
                </circle>
              </g>
            </svg>
            <p style="color:var(--ink)">Disciplined allies whose banners ripple like water.</p>
          </div>
        </div>

        <div id="race-normandas" class="paper crest-card">
          <div class="crest-body">
            <svg viewBox="0 0 120 140" class="crest-svg" aria-hidden>
              <defs>
                <linearGradient id="normandas-metal" x1="0" x2="1">
                  <stop offset="0%" stop-color="#c5a66a"/>
                  <stop offset="50%" stop-color="#e3c88a"/>
                  <stop offset="100%" stop-color="#9a7b45"/>
                </linearGradient>
              </defs>
              <path d="M60 10 L100 30 V70 C100 100 80 118 60 130 C40 118 20 100 20 70 V30 Z" fill="url(#normandas-metal)" stroke="#5b4724" stroke-width="2"></path>
              <rect x="44" y="46" width="32" height="22" rx="3" fill="#7a3e2e">
                <animateTransform attributeName="transform" type="rotate" values="0 60 56; 1 60 56; -1 60 56; 0 60 56" dur="5s" repeatCount="indefinite"/>
              </rect>
              <!-- embers -->
              <circle cx="50" cy="100" r="1" fill="#ffd29a">
                <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="100;94;90" dur="3.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="70" cy="102" r="1" fill="#ffd29a">
                <animate attributeName="opacity" values="0;1;0" dur="3.2s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="102;96;92" dur="3.2s" repeatCount="indefinite"/>
              </circle>
            </svg>
            <p style="color:var(--ink)">Ash-born warriors guarding rivers of gold beneath stone.</p>
          </div>
        </div>

        <div id="race-normanis" class="paper crest-card">
          <div class="crest-body">
            <svg viewBox="0 0 120 140" class="crest-svg" aria-hidden>
              <defs>
                <linearGradient id="normanis-metal" x1="0" x2="1">
                  <stop offset="0%" stop-color="#c5a66a"/>
                  <stop offset="50%" stop-color="#e3c88a"/>
                  <stop offset="100%" stop-color="#9a7b45"/>
                </linearGradient>
              </defs>
              <path d="M60 10 L100 30 V70 C100 100 80 118 60 130 C40 118 20 100 20 70 V30 Z" fill="url(#normanis-metal)" stroke="#5b4724" stroke-width="2"></path>
              <path d="M60 38 L72 56 L60 74 L48 56 Z" fill="#1f306e">
                <animate attributeName="y" values="0;-1;0" dur="3.5s" repeatCount="indefinite"/>
              </path>
              <circle cx="60" cy="56" r="18" fill="transparent" stroke="#c6d7ff" stroke-width="1.5">
                <animate attributeName="r" values="16;19;16" dur="5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values=".6;.2;.6" dur="5s" repeatCount="indefinite"/>
              </circle>
            </svg>
            <p style="color:var(--ink)">High-peak sages who weigh honor like iron.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CHAPTERS -->
  <section id="chapters" class="section">
    <div class="container">
      <h2 class="orn-divider font-display" style="font-size:28px; margin:0 0 18px">Chapters</h2>
      <div class="grid" style="gap:16px">
        <div id="chapter-1" class="acc">
          <button data-acc>⚔️ <span>Chapter One – The First Day of War</span> <span>▾</span></button>
          <div class="panel"><div style="padding:12px 14px">The Nosam–Narmina alliance clashes with the Normandas for control of gold mines. Nine-year-old Prince Musa commands the left flank with courage. King Normosse holds the center; Prince Macki leads the right. Victory crowns the alliance—yet new promises sow tension.</div></div>
        </div>
        <div id="chapter-2" class="acc">
          <button data-acc>🏰 <span>Chapter Two – Return to the Capital</span> <span>▾</span></button>
          <div class="panel"><div style="padding:12px 14px">King Normosse orders Musa back to the capital to stay with his mother. Loot and prisoners trail the convoy home, guarded by a loyal veteran who has watched over the prince for years. The taste of war fades as politics approaches.</div></div>
        </div>
        <div id="chapter-3" class="acc">
          <button data-acc>⛺ <span>Chapter Three – Shadows of Doubt</span> <span>▾</span></button>
          <div class="panel"><div style="padding:12px 14px">On the march to another mine, the king’s tent—borne by Normandan slaves—rests for the night. A trusted advisor warns that Musa’s rising fame could one day turn. The king rebukes him, but a darker thought has already taken root.</div></div>
        </div>
        <div id="chapter-4" class="acc">
          <button data-acc>🕯️ <span>Chapter Four – The Secret Letter</span> <span>▾</span></button>
          <div class="panel"><div style="padding:12px 14px">In the hush of night, the advisor dictates a secret letter to the king’s second wife: the prince grows too beloved. It ends with a code—“Make sure the breads are ready for a feast.” A signal that a hidden plot has begun.</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- SUMMARY -->
  <section id="summary" class="section">
    <div class="container">
      <h2 class="orn-divider font-display" style="font-size:28px; margin:0 0 18px">Story So Far</h2>
      <div class="grid split-2">
        <div class="paper"><div class="p"><h3 class="font-display" style="color:var(--ink); margin:0 0 6px">War & Victory</h3><p style="color:var(--ink)">Musa proves his courage in battle; alliances hold—barely.</p></div></div>
        <div class="paper"><div class="p"><h3 class="font-display" style="color:var(--ink); margin:0 0 6px">Royal Decisions</h3><p style="color:var(--ink)">The king sends Musa home—war gives way to palace intrigue.</p></div></div>
        <div class="paper"><div class="p"><h3 class="font-display" style="color:var(--ink); margin:0 0 6px">Seeds of Distrust</h3><p style="color:var(--ink)">An advisor questions loyalty, echoing old betrayals.</p></div></div>
        <div class="paper"><div class="p"><h3 class="font-display" style="color:var(--ink); margin:0 0 6px">Hidden Plot</h3><p style="color:var(--ink)">A coded letter signals conspiracy within the royal household.</p></div></div>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div id="modal" class="modal-backdrop hidden" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="modal">
      <div class="hd"><h3 id="modal-title" class="font-display" style="margin:0"></h3></div>
      <div class="bd">
        <p id="modal-text" style="margin:0 0 10px"></p>
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap">
          <a id="modal-link" class="btn" href="#">Go</a>
          <button id="modal-audio" class="btn" disabled>Play ambience</button>
          <small id="modal-audio-note" style="opacity:.6">(add audio URLs to enable)</small>
        </div>
      </div>
      <div class="ft"><button id="modal-close" class="btn">Close</button></div>
    </div>
  </div>

  <footer>© <span id="year"></span> Chronicles of Trimoons — Standalone HTML. No images used.</footer>

  <script>
  // ---------- Ember motes ----------
  (function(){
    const wrap = document.getElementById('embers');
    const N = 140;
    for(let i=0;i<N;i++){
      const e = document.createElement('div');
      e.className = 'ember';
      e.style.left = (Math.random()*100)+'%';
      e.style.top = (Math.random()*100)+'%';
      e.style.animationDuration = (6+Math.random()*6)+'s';
      e.style.animationDelay = (Math.random()*4)+'s';
      e.style.transform = 'translateY(0)';
      wrap.appendChild(e);
    }
  })();

  // ---------- Orrery modal data ----------
  const AMBIENT = {
    world: '',      // e.g. 'audio/ancient-orrery.mp3'
    forest: '',     // e.g. 'audio/forest-night.mp3'
    desert: '',     // e.g. 'audio/desert-wind.mp3'
    mountain: '',   // e.g. 'audio/mountain-gale.mp3'
    secrets: ''     // e.g. 'audio/whispers.mp3'
  };
  const BODIES = {
    planet: { title:'Trimoons — The World', blurb:'A temperate world forged by rival tides. Jungles stitch the equator, deserts crown the volcanic west, and iron mountains spear the north. Empires rise and fall beneath the pull of four moons.', href:'#races', linkTitle:'Meet the Peoples', sfx:AMBIENT.world, vignette:'rgba(0,0,0,.45)' },
    moon_alpha: { title:'First Moon — ALARA', blurb:'The shepherd of tides. Priests track its silver phases to bless voyages and bind vows. When ALARA swells full, jungle canopies hum with night-harvest rites.', href:'#race-nosams', linkTitle:'Go to Nosams', sfx:AMBIENT.forest, vignette:'rgba(9,30,22,.55)' },
    moon_beta: { title:'Second Moon — VARYN', blurb:'Copper-stained and ill-omened. Desert clans swear VARYN drags ash-winds across the volcanic lands; war drums often follow its zenith.', href:'#race-normandas', linkTitle:'Go to Normandas', sfx:AMBIENT.desert, vignette:'rgba(58,16,6,.6)' },
    moon_gamma: { title:'Third Moon — SERETH', blurb:'Pale and high, beloved by mountain sages. Pilgrims leave iron charms along ridge paths to catch SERETH’s cold blessings.', href:'#race-normanis', linkTitle:'Go to Normanis', sfx:AMBIENT.mountain, vignette:'rgba(4,12,35,.6)' },
    moon_delta: { title:'Fourth Moon — ITHA', blurb:'A faint wanderer that appears to shiver. Lovers and spies alike swear secrets travel easiest under ITHA’s shy arc.', href:'#chapter-4', linkTitle:'Jump to Chapter Four', sfx:AMBIENT.secrets, vignette:'rgba(20,12,45,.55)' }
  };

  // ---------- Modal logic ----------
  (function(){
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const text = document.getElementById('modal-text');
    const link = document.getElementById('modal-link');
    const audioBtn = document.getElementById('modal-audio');
    const note = document.getElementById('modal-audio-note');
    const closeBtn = document.getElementById('modal-close');
    let audio = null;

    function open(bodyKey){
      const info = BODIES[bodyKey];
      title.textContent = info.title;
      text.textContent = info.blurb;
      link.href = info.href; link.textContent = info.linkTitle;
      modal.classList.remove('hidden');
      modal.style.background = `radial-gradient(90% 60% at 50% 10%, rgba(0,0,0,0), ${info.vignette})`;

      if(audio){ audio.pause(); audio = null; }
      if(info.sfx){
        audio = new Audio(info.sfx); audio.loop = true; audio.volume = .35;
        audioBtn.disabled = false; note.style.display = 'none';
        audioBtn.textContent = 'Play ambience';
      }else{
        audioBtn.disabled = true; note.style.display = '';
      }
    }
    function close(){ modal.classList.add('hidden'); if(audio){ audio.pause(); audio=null; } }

    document.body.addEventListener('click', (e)=>{
      const btn = e.target.closest('[data-body]');
      if(btn){ e.preventDefault(); open(btn.getAttribute('data-body')); }
    });
    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e)=>{ if(e.target === modal) close(); });
    audioBtn.addEventListener('click', ()=>{
      if(!audio) return;
      if(audio.paused){ audio.play().catch(()=>{}); audioBtn.textContent='Pause ambience'; }
      else{ audio.pause(); audioBtn.textContent='Play ambience'; }
    });
  })();

  // ---------- Accordion ----------
  document.querySelectorAll('[data-acc]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const acc = btn.parentElement; acc.classList.toggle('open');
    });
  });

  // ---------- Footer year + sanity tests ----------
  document.getElementById('year').textContent = new Date().getFullYear();
  // Simple runtime checks (not formal tests)
  (function(){
    const chapters = document.querySelectorAll('section#chapters');
    console.assert(chapters.length === 1, `Expected exactly one #chapters section, found ${chapters.length}`);
    const required = ['#race-nosams','#race-narminas','#race-normandas','#race-normanis'];
    required.forEach(sel=>{ console.assert(document.querySelector(sel), `Missing anchor ${sel}`); });
  })();
  </script>
</body>
</html>
