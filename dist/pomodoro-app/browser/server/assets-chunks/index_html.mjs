export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>PomodoroApp</title>
  <base href="./">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="styles-5INURTSO.css"><style ng-app-id="ng">.pomodoro-container[_ngcontent-ng-c3815199786]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;height:100vh;position:relative;text-align:center;background:#7ec2f42e}.pomodoro-content[_ngcontent-ng-c3815199786]{display:flex;flex-direction:column;align-items:center;background:#919ecd2e;border-radius:20px}.pomodoro-stats[_ngcontent-ng-c3815199786]{position:absolute;bottom:200px;left:70px;background-color:#fffc;border:1px solid #ccc;border-radius:5px;padding:10px;text-align:right;font-size:14px;color:#333;box-shadow:0 4px 6px #0000001a}.pomodoro-explication[_ngcontent-ng-c3815199786]{position:absolute;bottom:200px;right:30px;background-color:#fffc;border:1px solid #ccc;border-radius:5px;padding:10px;text-align:left;font-size:14px;color:#333;box-shadow:0 4px 6px #0000001a}.time-display[_ngcontent-ng-c3815199786]{font-size:3rem;font-weight:700;margin:20px 0;color:#333}.button-group[_ngcontent-ng-c3815199786]{display:flex;gap:10px}button[_ngcontent-ng-c3815199786]{padding:10px 20px;margin:5px;font-size:1rem;border:none;border-radius:5px;background-color:#4caf50;color:#fff;cursor:pointer;transition:background-color .3s ease}button[_ngcontent-ng-c3815199786]:hover{background-color:#45a049}button[_ngcontent-ng-c3815199786]:disabled{background-color:#d3d3d3;cursor:not-allowed}.bottle-container[_ngcontent-ng-c3815199786]{position:absolute;bottom:355px;right:25px}.bottle[_ngcontent-ng-c3815199786]{width:100px;height:200px;border:2px solid #000;border-radius:10px;position:relative;overflow:hidden;background-color:#bcb6b666}.water[_ngcontent-ng-c3815199786]{position:absolute;bottom:0;width:100%;background-color:#c88b31;transition:height .5s ease-out}.ground[_ngcontent-ng-c3815199786]{width:calc(100% - 140px);height:5px;background-color:#59281257;position:absolute;bottom:345px;left:0}.brown-background[_ngcontent-ng-c3815199786]{width:100%;height:calc(100vh - 150px);background:linear-gradient(to top,#13090557,#60331b94);position:absolute;left:0;top:683px;z-index:-1}.tree[_ngcontent-ng-c3815199786]{position:absolute;bottom:345px;left:30px;width:200px;height:auto}.apple[_ngcontent-ng-c3815199786]{position:absolute;bottom:440px;left:140px;width:40px;height:auto;z-index:10}.apple.animate[_ngcontent-ng-c3815199786]{animation:_ngcontent-ng-c3815199786_bounce 4s ease-in-out infinite}@keyframes _ngcontent-ng-c3815199786_bounce{0%{transform:translate(0) rotate(0)}20%{transform:translate(100px,100px) rotate(90deg)}30%{transform:translate(150px,60px) rotate(180deg)}40%{transform:translate(200px,100px) rotate(270deg)}50%{transform:translate(250px,75px) rotate(360deg)}60%{transform:translate(300px,100px) rotate(450deg)}70%{transform:translate(350px,100px) rotate(540deg)}80%{transform:translate(400px,100px) rotate(630deg)}90%{transform:translate(450px,100px) rotate(720deg)}to{transform:translate(100vw,100px) rotate(720deg)}}.cloud[_ngcontent-ng-c3815199786]{position:absolute;width:100px;height:auto;z-index:5;opacity:.8}.cloud-1[_ngcontent-ng-c3815199786]{top:20px;animation:_ngcontent-ng-c3815199786_move-cloud 24s infinite;animation-delay:0s}.cloud-2[_ngcontent-ng-c3815199786]{top:60px;animation:_ngcontent-ng-c3815199786_move-cloud 21s infinite;animation-delay:2s}.cloud-3[_ngcontent-ng-c3815199786]{top:90px;animation:_ngcontent-ng-c3815199786_move-cloud 30s infinite;animation-delay:2s}.cloud-4[_ngcontent-ng-c3815199786]{top:40px;animation:_ngcontent-ng-c3815199786_move-cloud 27s infinite;animation-delay:2s}.cloud-5[_ngcontent-ng-c3815199786]{top:75px;animation:_ngcontent-ng-c3815199786_move-cloud 25s infinite;animation-delay:1s}@keyframes _ngcontent-ng-c3815199786_move-cloud{0%{transform:translate(-200px)}to{transform:translate(100vw)}}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root ng-version="19.0.3" ngh="1" ng-server-context="ssg"><app-pomodoro-timer _nghost-ng-c3815199786 ngh="0"><div _ngcontent-ng-c3815199786 class="pomodoro-container"><div _ngcontent-ng-c3815199786 class="pomodoro-content"><h1 _ngcontent-ng-c3815199786>Pomodoro Timer</h1><div _ngcontent-ng-c3815199786 class="time-display">25:00</div><div _ngcontent-ng-c3815199786 class="button-group"><button _ngcontent-ng-c3815199786 jsaction="click:;">Start</button><button _ngcontent-ng-c3815199786 jsaction="click:;">Pause</button><button _ngcontent-ng-c3815199786 jsaction="click:;">Reset</button></div></div><div _ngcontent-ng-c3815199786 class="bottle-container"><div _ngcontent-ng-c3815199786 class="bottle"><div _ngcontent-ng-c3815199786 class="water" style="height: 0%;"></div></div></div></div><div _ngcontent-ng-c3815199786 class="ground"></div><div _ngcontent-ng-c3815199786 class="brown-background"></div><div _ngcontent-ng-c3815199786 class="pomodoro-stats"><p _ngcontent-ng-c3815199786>Cycles passés : 0</p><p _ngcontent-ng-c3815199786>Cycles restants : 4</p><p _ngcontent-ng-c3815199786>Total cycles : 4</p></div><div _ngcontent-ng-c3815199786 class="break-message"><!----><!----></div><div _ngcontent-ng-c3815199786 class="pomodoro-explication"><p _ngcontent-ng-c3815199786>Travaillez intensément pendant 25 minutes </p><p _ngcontent-ng-c3815199786>Prenez une pause courte de 5 minutes </p><p _ngcontent-ng-c3815199786>Après 4 cycles, prenez une pause plus longue de 20 minutes</p></div><img _ngcontent-ng-c3815199786 src="../../assets/tree.png" alt="Tree" class="tree"><img _ngcontent-ng-c3815199786 src="assets/apple.png" alt="Apple" class="apple"><img _ngcontent-ng-c3815199786 src="assets/cloud.png" alt="Cloud" class="cloud cloud-1"><img _ngcontent-ng-c3815199786 src="assets/cloud.png" alt="Cloud" class="cloud cloud-2"><img _ngcontent-ng-c3815199786 src="assets/cloud.png" alt="Cloud" class="cloud cloud-3"><img _ngcontent-ng-c3815199786 src="assets/cloud.png" alt="Cloud" class="cloud cloud-4"><img _ngcontent-ng-c3815199786 src="assets/cloud.png" alt="Cloud" class="cloud cloud-5"></app-pomodoro-timer></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-V4OVMABB.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"26":"t0","27":"t1"},"c":{"26":[],"27":[]}},{}]}</script></body></html>`;