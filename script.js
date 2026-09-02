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

// Motion and scroll-reveal effects.
const motionStyle=document.createElement('style');
motionStyle.textContent=`
.hero-copy,.hero-art,.section-label,.two-col,.timeline article,.project,.skills-grid div,.edu-card,.credential-heading,.credential-card,.contact h2,.contact>p:not(.section-label),.contact-links a{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.65,.3,1),border-color .25s ease,box-shadow .25s ease}
.hero-copy,.hero-art{animation:heroIn .9s ease both}
.hero-art{animation-delay:.12s}
.is-visible{opacity:1;transform:none}
.project.is-visible:hover,.credential-card.is-visible:hover{transform:translateY(-5px)}
.project:nth-child(3n+2),.credential-card:nth-child(3n+2),.skills-grid div:nth-child(3n+2),.timeline article:nth-child(3n+2),.edu-card:nth-child(3n+2){transition-delay:.08s}
.project:nth-child(3n),.credential-card:nth-child(3n),.skills-grid div:nth-child(3n),.timeline article:nth-child(3n),.edu-card:nth-child(3n){transition-delay:.16s}
.nav-links a{position:relative;transition:color .25s ease}
.nav-links a::after{content:'';position:absolute;left:0;bottom:-7px;width:100%;height:2px;background:#789dff;transform:scaleX(0);transform-origin:right;transition:transform .25s ease}
.nav-links a:hover{color:#fff}
.nav-links a:hover::after{transform:scaleX(1);transform-origin:left}
.nav-btn,.primary,.secondary,.contact-links a{transition:transform .25s ease,box-shadow .25s ease,background-color .25s ease,border-color .25s ease}
.nav-btn:hover,.primary:hover,.secondary:hover,.contact-links a:hover{transform:translateY(-2px);box-shadow:0 10px 28px #0005}
.chips span,.tags span{transition:transform .2s ease,border-color .2s ease,color .2s ease,background-color .2s ease}
.chips span:hover,.tags span:hover{transform:translateY(-2px);border-color:#6179bb;color:#dbe5ff;background:#151f38}
.orb{animation:orbFloat 6s ease-in-out infinite}
.code-card{animation:codeFloat 5s ease-in-out infinite}
@keyframes heroIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@keyframes orbFloat{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(0,-12px,0)}}
@keyframes codeFloat{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(0,8px,0)}}
@media (prefers-reduced-motion:reduce){
html{scroll-behavior:auto}
*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
.hero-copy,.hero-art,.section-label,.two-col,.timeline article,.project,.skills-grid div,.edu-card,.credential-heading,.credential-card,.contact h2,.contact>p:not(.section-label),.contact-links a{opacity:1!important;transform:none!important}
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
  },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  revealItems.forEach(item=>revealObserver.observe(item));
}else{
  revealItems.forEach(item=>item.classList.add('is-visible'));
}
