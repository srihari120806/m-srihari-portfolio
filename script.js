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
