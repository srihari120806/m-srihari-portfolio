document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}}));

const cloudStyle=document.createElement('style');
cloudStyle.textContent=`
.google-fallback{position:relative!important;width:132px!important;height:132px!important;border-radius:50%!important;border:7px solid #d9dee7!important;background:#fff!important;box-shadow:0 8px 22px #0004!important;overflow:hidden!important;color:transparent!important;display:block!important}
.google-fallback span,.google-fallback strong,.google-fallback small{display:none!important}
.google-fallback::before{content:''!important;position:absolute!important;width:70px!important;height:45px!important;left:50%!important;top:30px!important;transform:translateX(-50%)!important;background:url('https://www.gstatic.com/cgc/renaissance/image/MultiPath_Bottom_2X_Centered_static.png') center/contain no-repeat!important}
.google-fallback::after{content:'GOOGLE CLOUD'!important;position:absolute!important;left:0!important;right:0!important;bottom:12px!important;text-align:center!important;font-size:8px!important;font-weight:800!important;letter-spacing:.8px!important;color:#4285f4!important}
.project-link{margin-top:auto!important;padding-top:20px!important;display:flex!important;align-items:center!important;gap:7px!important;border-top:1px solid #26314b!important}
.project{cursor:pointer!important;transition:transform .35s cubic-bezier(.16,1,.3,1),box-shadow .35s ease,border-color .35s ease!important}
.project:hover{transform:translateY(-8px)!important;box-shadow:0 22px 50px #0007!important;border-color:#6179bb!important}
`;
document.head.appendChild(cloudStyle);

const motionStyle=document.createElement('style');
motionStyle.textContent=`
.hero-copy{animation:heroTextIn .9s cubic-bezier(.16,1,.3,1) both}
.hero-art{animation:heroArtIn 1s .12s cubic-bezier(.16,1,.3,1) both}
.scroll-reveal{opacity:0!important;transform:translateY(42px) scale(.985)!important;transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)!important}
.scroll-reveal.is-visible{opacity:1!important;transform:none!important}
.scroll-left{transform:translateX(-45px)!important}
.scroll-right{transform:translateX(45px)!important}
.scroll-reveal.is-visible.scroll-left,.scroll-reveal.is-visible.scroll-right{transform:none!important}
.section-label,.two-col,.timeline article,.skills-grid div,.edu-card,.credential-heading,.credential-card,.contact h2,.contact>p:not(.section-label),.contact-links a{transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.nav-links a{position:relative;transition:color .25s ease,transform .25s ease}.nav-links a::after{content:'';position:absolute;left:0;bottom:-8px;width:100%;height:2px;background:#789dff;transform:scaleX(0);transform-origin:right;transition:transform .3s ease}.nav-links a:hover{color:#fff;transform:translateY(-2px)}.nav-links a:hover::after{transform:scaleX(1);transform-origin:left}
.nav-btn,.primary,.secondary,.contact-links a{transition:transform .25s ease,box-shadow .25s ease,background-color .25s ease,border-color .25s ease}.nav-btn:hover,.primary:hover,.secondary:hover,.contact-links a:hover{transform:translateY(-4px);box-shadow:0 12px 30px #0006}
.chips span,.tags span{transition:transform .2s ease,border-color .2s ease,color .2s ease,background-color .2s ease}.chips span:hover,.tags span:hover{transform:translateY(-3px) scale(1.04);border-color:#6179bb;color:#dbe5ff;background:#151f38}
.orb{animation:orbFloat 5s ease-in-out infinite}.code-card{animation:codeFloat 4s ease-in-out infinite}
@keyframes heroTextIn{from{opacity:0;transform:translateY(45px)}to{opacity:1;transform:none}}
@keyframes heroArtIn{from{opacity:0;transform:translateY(35px) scale(.9) rotate(2deg)}to{opacity:1;transform:none}}
@keyframes orbFloat{0%,100%{transform:translate3d(0,0,0) rotate(0)}50%{transform:translate3d(0,-18px,0) rotate(2deg)}}
@keyframes codeFloat{0%,100%{transform:translate3d(0,0,0) rotate(0)}50%{transform:translate3d(0,12px,0) rotate(-1deg)}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
`;
document.head.appendChild(motionStyle);

window.addEventListener('load',()=>{
  const targets=document.querySelectorAll('.section-label,.two-col,.timeline article,.project,.skills-grid div,.edu-card,.credential-heading,.credential-card,.contact h2,.contact>p:not(.section-label),.contact-links a');
  targets.forEach((el,i)=>{el.classList.add('scroll-reveal');if(i%3===1)el.classList.add('scroll-left');if(i%3===2)el.classList.add('scroll-right')});
  if(!('IntersectionObserver' in window)){targets.forEach(el=>el.classList.add('is-visible'));return}
  const observer=new IntersectionObserver((entries,obs)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -60px 0px'});
  targets.forEach(el=>observer.observe(el));
});
