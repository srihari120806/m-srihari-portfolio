document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}}));
/* Load the actual public Credly badge artwork when available. */
(async function(){
  const badges=[...document.querySelectorAll('.credly-image')];
  if(!badges.length) return;
  try{
    const response=await fetch('https://www.credly.com/users/srihari-m.0e9042f5/badges.json');
    if(!response.ok) throw new Error('Credly badge feed unavailable');
    const payload=await response.json();
    const data=payload.data||payload;
    badges.forEach(img=>{
      const badge=(data||[]).find(item=>String(item.id)===img.dataset.credlyId);
      if(badge&&badge.image_url){
        img.src=badge.image_url;
        img.hidden=false;
        const fallback=img.previousElementSibling;
        if(fallback) fallback.style.display='none';
      }
    });
  }catch(error){ console.info('Credly badge images could not be loaded; fallback visuals remain visible.'); }
})();
