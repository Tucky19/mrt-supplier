const langData = {
 en:{
   home:"Home",products:"Products",brands:"Brands",catalog:"Catalog",about:"About",contact:"Contact",
   heroTitle:"Reliable Parts for Reliable Plants",
   heroSub:"We source and deliver genuine filters and bearings from leading brands.",
   quote:"Request a Quote",
   footer:"© 2025 MRT Supplier Co., Ltd. · Industrial Filters & Bearings Distributor",
   mail:"Email: sales@mrtsupplier.com",
   line:"Line Official: @mrtsupplier",
   map:"Our Location",
   facebook:"Follow us on Facebook: facebook.com/mrtsupplier"
 },
 th:{
   home:"หน้าแรก",products:"สินค้า",brands:"แบรนด์",catalog:"แคตตาล็อก",about:"เกี่ยวกับเรา",contact:"ติดต่อเรา",
   heroTitle:"อะไหล่คุณภาพที่เชื่อถือได้ สำหรับโรงงานที่ไว้วางใจ",
   heroSub:"เราจัดหาและส่งมอบไส้กรองและตลับลูกปืนของแท้จากแบรนด์ชั้นนำ",
   quote:"ขอใบเสนอราคา",
   footer:"© 2025 บริษัท เอ็มอาร์ที ซัพพลายเออร์ จำกัด · ผู้จัดจำหน่ายไส้กรองและตลับลูกปืนอุตสาหกรรม",
   mail:"อีเมล: sales@mrtsupplier.com",
   line:"ไลน์ ออฟฟิเชียล: @mrtsupplier",
   map:"ที่ตั้งของเรา",
   facebook:"ติดตามเราบน Facebook: facebook.com/mrtsupplier"
 }
};
function setLang(l){
 localStorage.setItem('lang',l);
 document.querySelectorAll('[data-i18n]').forEach(el=>{
   let k=el.getAttribute('data-i18n');
   if(langData[l][k]) el.textContent=langData[l][k];
 });
}
function initLang(){
 let l = localStorage.getItem('lang');
 if(!l){ l=navigator.language.startsWith('th')?'th':'en'; }
 setLang(l);
 document.getElementById('lang-en').onclick=()=>setLang('en');
 document.getElementById('lang-th').onclick=()=>setLang('th');
}
document.addEventListener('DOMContentLoaded',initLang);
