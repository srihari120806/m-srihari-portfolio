document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}}));

// Make every project card clickable: clicking anywhere on a card opens its GitHub repository.
document.querySelectorAll('.project').forEach(card=>{
  const link=card.querySelector('.project-link');
  if(!link) return;
  card.style.cursor='pointer';
  card.addEventListener('click',e=>{
    if(e.target.closest('a')) return;
    window.open(link.href,'_blank','noopener');
  });
});

// Credential gallery uses static fallback badge artwork so external Credly API failures cannot create broken images.
const cloudStyle=document.createElement('style');
cloudStyle.textContent=`
.google-fallback{position:relative!important;width:132px!important;height:132px!important;border-radius:50%!important;border:7px solid #d9dee7!important;background:#fff!important;box-shadow:0 8px 22px #0004!important;overflow:hidden!important;color:transparent!important;display:block!important}
.google-fallback span,.google-fallback strong,.google-fallback small{display:none!important}
.google-fallback::before{content:''!important;position:absolute!important;width:70px!important;height:45px!important;left:50%!important;top:30px!important;transform:translateX(-50%)!important;background:url('https://www.gstatic.com/cgc/renaissance/image/MultiPath_Bottom_2X_Centered_static.png') center/contain no-repeat!important}
.google-fallback::after{content:'GOOGLE CLOUD'!important;position:absolute!important;left:0!important;right:0!important;bottom:12px!important;text-align:center!important;font-size:8px!important;font-weight:800!important;letter-spacing:.8px!important;color:#4285f4!important}
.project-link{margin-top:auto!important;padding-top:20px!important;display:flex!important;align-items:center!important;gap:7px!important;border-top:1px solid #26314b!important}
`;
document.head.appendChild(cloudStyle);

// Robust animation system: content stays visible even if JavaScript/observer is unavailable.
const motionStyle=document.createElement('style');
motionStyle.textContent=`
.hero-copy{animation:heroTextIn .9s cubic-bezier(.16,1,.3,1) both}
.hero-art{animation:heroArtIn 1s .12s cubic-bezier(.16,1,.3,1) both}
.section-label{animation:sectionIn .65s .05s cubic-bezier(.16,1,.3,1) both}
.two-col{animation:sectionIn .75s .12s cubic-bezier(.16,1,.3,1) both}
.timeline article{animation:sectionIn .7s cubic-bezier(.16,1,.3,1) both}
.project{animation:cardIn .7s cubic-bezier(.16,1,.3,1) both}
.project:nth-child(2){animation-delay:.08s}.project:nth-child(3){animation-delay:.16s}.project:nth-child(4){animation-delay:.24s}.project:nth-child(5){animation-delay:.32s}.project:nth-child(6){animation-delay:.40s}.project:nth-child(7){animation-delay:.48s}.project:nth-child(8){animation-delay:.56s}.project:nth-child(9){animation-delay:.64s}.project:nth-child(10){animation-delay:.72s}.project:nth-child(11){animation-delay:.80s}
.skills-grid div{animation:cardIn .65s cubic-bezier(.16,1,.3,1) both}.skills-grid div:nth-child(2){animation-delay:.08s}.skills-grid div:nth-child(3){animation-delay:.16s}.skills-grid div:nth-child(4){animation-delay:.24s}.skills-grid div:nth-child(5){animation-delay:.32s}.skills-grid div:nth-child(6){animation-delay:.40s}
.edu-card{animation:cardIn .7s cubic-bezier(.16,1,.3,1) both}.edu-card:nth-of-type(2){animation-delay:.12s}.edu-card:nth-of-type(3){animation-delay:.24s}
.credential-heading,.credential-card{animation:cardIn .7s cubic-bezier(.16,1,.3,1) both}
.credential-card:hover{transform:translateY(-9px) scale(1.015)!important;box-shadow:0 18px 45px #0007!important;border-color:#6179bb!important}
.nav-links a{position:relative;transition:color .25s ease,transform .25s ease}.nav-links a::after{content:'';position:absolute;left:0;bottom:-8px;width:100%;height:2px;background:#789dff;transform:scaleX(0);transform-origin:right;transition:transform .3s ease}.nav-links a:hover{color:#fff;transform:translateY(-2px)}.nav-links a:hover::after{transform:scaleX(1);transform-origin:left}
.nav-btn,.primary,.secondary,.contact-links a{transition:transform .25s ease,box-shadow .25s ease,background-color .25s ease,border-color .25s ease}.nav-btn:hover,.primary:hover,.secondary:hover,.contact-links a:hover{transform:translateY(-4px);box-shadow:0 12px 30px #0006}
.chips span,.tags span{transition:transform .2s ease,border-color .2s ease,color .2s ease,background-color .2s ease}.chips span:hover,.tags span:hover{transform:translateY(-3px) scale(1.04);border-color:#6179bb;color:#dbe5ff;background:#151f38}
.orb{animation:orbFloat 5s ease-in-out infinite}.code-card{animation:codeFloat 4s ease-in-out infinite}
@keyframes heroTextIn{from{opacity:0;transform:translateY(45px)}to{opacity:1;transform:none}}
@keyframes heroArtIn{from{opacity:0;transform:translateY(35px) scale(.9) rotate(2deg)}to{opacity:1;transform:none}}
@keyframes sectionIn{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@keyframes cardIn{from{opacity:0;transform:translateY(32px) scale(.98)}to{opacity:1;transform:none}}
@keyframes orbFloat{0%,100%{transform:translate3d(0,0,0) rotate(0)}50%{transform:translate3d(0,-18px,0) rotate(2deg)}}
@keyframes codeFloat{0%,100%{transform:translate3d(0,0,0) rotate(0)}50%{transform:translate3d(0,12px,0) rotate(-1deg)}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
`;
document.head.appendChild(motionStyle);
