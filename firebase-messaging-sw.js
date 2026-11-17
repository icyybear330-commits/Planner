importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:'AIzaSyAU5lf2ZIlMwwF-PRF_dik6cCHVUsWfpko',authDomain:'planner-11d4e.firebaseapp.com',projectId:'planner-11d4e',storageBucket:'planner-11d4e.firebasestorage.app',messagingSenderId:'766572070459',appId:'1:766572070459:web:6228adf108d78b1850fe1e'});
var m=firebase.messaging();
m.onBackgroundMessage(function(p){
  var d=p.data||{};
  self.registration.showNotification(d.title||'Planner',{body:d.body||'',icon:'icon-192.png',badge:'icon-192.png',tag:d.tag||'planner'});
});
self.addEventListener('notificationclick',function(e){e.notification.close();
  e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(function(l){if(l.length)return l[0].focus();return clients.openWindow('./')}))});
