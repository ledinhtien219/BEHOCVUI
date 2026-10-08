/* production-safe boot */
(function(){
  if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(rs){rs.forEach(function(r){r.unregister()})}).catch(function(){})}
  function showBootError(err){
    var root=document.getElementById('app');
    if(!root)return;
    root.innerHTML='<main style="min-height:100vh;display:grid;place-items:center;padding:24px;background:linear-gradient(#78d8ff,#effcff 55%,#91df70)"><section style="max-width:620px;background:#fff;border:4px solid #fff;border-radius:30px;padding:28px;text-align:center;box-shadow:0 16px 40px rgba(31,81,115,.2);font-family:Nunito,system-ui,sans-serif;color:#24567c"><div style="font-size:72px">🛠️</div><h1 style="margin:6px 0">Bé Học Vui đang tải lại</h1><p style="font-weight:700">Có lỗi khi khởi tạo giao diện. Hãy tải lại trang một lần.</p><button onclick="location.reload()" style="border:0;border-radius:18px;padding:13px 22px;background:#48c75f;color:#fff;font-weight:900;font-size:17px">Tải lại</button><small style="display:block;margin-top:12px;color:#7890a3">Mã lỗi: '+String(err&&err.message||err||'BOOT').replace(/[<>&]/g,'')+'</small></section></main>';
  }
  function boot(){
    try{
      if(typeof home!=='function')throw new Error('home() chưa được tải');
      home();
      document.documentElement.setAttribute('data-app-ready','1');
    }catch(e){
      console.error('BEHOCVUI boot error',e);
      showBootError(e);
    }
  }
  window.addEventListener('error',function(e){
    if(!document.documentElement.hasAttribute('data-app-ready'))showBootError(e.error||e.message);
  });
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
