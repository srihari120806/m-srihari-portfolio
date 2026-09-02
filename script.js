document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}}));
// Credential gallery uses static fallback badge artwork so external Credly API failures cannot create broken images.
// Refine Google Cloud visuals to closely match the supplied reference image.
const cloudStyle=document.createElement('style');
cloudStyle.textContent=`
.google-fallback{position:relative!important;width:132px!important;height:132px!important;border-radius:50%!important;border:7px solid #d9dee7!important;background:#fff!important;box-shadow:0 8px 22px #0004!important;overflow:hidden!important;color:transparent!important;display:block!important}
.google-fallback span,.google-fallback strong,.google-fallback small{display:none!important}
.google-fallback::before{content:''!important;position:absolute!important;width:70px!important;height:45px!important;left:50%!important;top:30px!important;transform:translateX(-50%)!important;background:url('https://www.gstatic.com/cgc/renaissance/image/MultiPath_Bottom_2X_Centered_static.png') center/contain no-repeat!important}
.google-fallback::after{content:'GOOGLE CLOUD'!important;position:absolute!important;left:0!important;right:0!important;bottom:12px!important;text-align:center!important;font-size:8px!important;font-weight:800!important;letter-spacing:.8px!important;color:#4285f4!important}
.project-link{margin-top:auto!important;padding-top:20px!important;display:flex!important;align-items:center!important;gap:7px!important;border-top:1px solid #26314b!important}
`;
document.head.appendChild(cloudStyle);

// Enhanced motion system: obvious entrance, staggered cards, hover lift and floating hero art.
const motionStyle=document.createElement('style');
motionStyle.textContent=`
html{scroll-behavior:smooth}
.hero-copy{animation:heroTextIn 1s cubic-bezier(.16,1,.3,1) both}
.hero-art{animation:heroArtIn 1.1s .15s cubic-bezier(.16,1,.3,1) both}
.section-label,.two-col,.timeline article,.project,.skills-grid div,.edu-card,.credential-heading,.credential-card,.contact h2,.contact>p:not(.section-label),.contact-links a{opacity:0;transform:translateY(55px) scale(.97);transition:opacity .75s ease,transform .75s cubic-bezier(.16,1,.3,1),box-shadow .3s ease,border-color .3s ease}
.is-visible{opacity:1;transform:translateY(0) scale(1)}
.project.is-visible:hover,.credential-card.is-visible:hover,.edu-card.is-visible:hover{transform:translateY(-9px) scale(1.015);box-shadow:0 18px 45px #0007}
.project:nth-child(2),.credential-card:nth-child(2),.skills-grid div:nth-child(2),.timeline article:nth-child(2),.edu-card:nth-child(2){transition-delay:.1s}
.project:nth-child(3),.credential-card:nth-child(3),.skills-grid div:nth-child(3),.timeline article:nth-child(3),.edu-card:nth-child(3){transition-delay:.2s}
.project:nth-child(4),.credential-card:nth-child(4),.skills-grid div:nth-child(4),.timeline article:nth-child(4),.edu-card:nth-child(4){transition-delay:.3s}
.project:nth-child(5),.credential-card:nth-child(5),.skills-grid div:nth-child(5){transition-delay:.4s}
.project:nth-child(n+6),.credential-card:nth-child(n+6),.skills-grid div:nth-child(n+6){transition-delay:.45s}
.nav-links a{position:relative;transition:color .25s ease,transform .25s ease}
.nav-links a::after{content:'';position:absolute;left:0;bottom:-8px;width:100%;height:2px;background:#789dff;transform:scaleX(0);transform-origin:right;transition:transform .3s ease}
.nav-links a:hover{color:#fff;transform:translateY(-2px)}
.nav-links a:hover::after{transform:scaleX(1);transform-origin:left}
.nav-btn,.primary,.secondary,.contact-links a{transition:transform .25s ease,box-shadow .25s ease,background-color .25s ease,border-color .25s ease}
.nav-btn:hover,.primary:hover,.secondary:hover,.contact-links a:hover{transform:translateY(-4px);box-shadow:0 12px 30px #0006}
.chips span,.tags span{transition:transform .2s ease,border-color .2s ease,color .2s ease,background-color .2s ease}
.chips span:hover,.tags span:hover{transform:translateY(-3px) scale(1.04);border-color:#6179bb;color:#dbe5ff;background:#151f38}
.orb{animation:orbFloat 5s ease-in-out infinite}
.code-card{animation:codeFloat 4s ease-in-out infinite}
@keyframes heroTextIn{from{opacity:0;transform:translateY(45px)}to{opacity:1;transform:none}}
@keyframes heroArtIn{from{opacity:0;transform:translateY(35px) scale(.9) rotate(2deg)}to{opacity:1;transform:none}}
@keyframes orbFloat{0%,100%{transform:translate3d(0,0,0) rotate(0)}50%{transform:translate3d(0,-18px,0) rotate(2deg)}}
@keyframes codeFloat{0%,100%{transform:translate3d(0,0,0) rotate(0)}50%{transform:translate3d(0,12px,0) rotate(-1deg)}}
@media (prefers-reduced-motion:reduce){
html{scroll-behavior:auto}
*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
.section-label,.two-col,.timeline article,.project,.skills-grid div,.edu-card,.credential-heading,.credential-card,.contact h2,.contact>p:not(.section-label),.contact-links a,.hero-copy,.hero-art{opacity:1!important;transform:none!important}
}
`;
document.head.appendChild(motionStyle);

const revealItems=document.querySelectorAll('.section-label,.two-col,.timeline article,.project,.skills-grid div,.edu-card,.credential-heading,.credential-card,.contact h2,.contact>p:not(.section-label),.contact-links a');
if('IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.08,rootMargin:'0px 0px -60px 0px'});
  revealItems.forEach(item=>revealObserver.observe(item));
}else{
  revealItems.forEach(item=>item.classList.add('is-visible'));
}
