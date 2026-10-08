self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil((async function(){
  const keys=await caches.keys(); await Promise.all(keys.map(function(k){return caches.delete(k)}));
  await self.registration.unregister();
  const clientsList=await self.clients.matchAll({type:'window'}); clientsList.forEach(function(c){c.navigate(c.url)});
})())});
self.addEventListener('fetch',function(){});
