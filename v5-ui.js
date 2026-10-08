/* Bé Học Vui v5 - visual lesson dashboards based on reference artwork */
var V5LESSON_ART={
 math:[
  ['🔢','🎈','123'],['🍎','➕','25+37'],['🍏','🧮','48+27'],['🧸','➖','86−24'],['🚗','🧮','72−38'],
  ['⭐','✖️','2×5'],['🍬','➗','10÷2'],['🌸','5️⃣','5×4'],['🔺','🟦','◯'],['📏','✏️','cm'],
  ['⚖️','🥛','kg/L'],['🕒','🪙','10k'],['📊','🍎','▥'],['🎲','❓','?']
 ],
 vi:[
  ['📖','🧒','ABC'],['🐰','🌳','📚'],['🎧','✍️','nghe'],['🔤','🧩','gh/ngh'],['🌳','🐶','🏠'],
  ['🏃','🧹','✍️'],['🌈','🌼','✨'],['💬','👧','Ai?'],['❓','❗','，'],['🎒','🏫','👨‍👩‍👧'],
  ['📝','🖍️','3–5 câu'],['🧚','🖼️','📚'],['🎧','🗣️','💬'],['🏆','📖','✍️']
 ]
};
function v5Art(type,i){
 var a=V5LESSON_ART[type][i]||['🎯','⭐','123'];
 return '<div class="v5-art-scene '+type+'"><span class="v5-cloud c1"></span><span class="v5-cloud c2"></span><span class="v5-art-big">'+a[0]+'</span><span class="v5-art-small">'+a[1]+'</span><b>'+a[2]+'</b><i></i></div>';
}
function rows(type,list,done,practice){
 return '<div class="curriculum-note v5-note">🌟 <b>'+(practice?'Luyện tập bằng hình ảnh & thao tác':'Chọn một bài để bắt đầu')+'</b><span> • Nội dung mở dần theo tiến độ của bé.</span></div><div class="v5-lesson-grid">'
 +list.map(function(x,i){
   var locked=i>done,doneIt=i<done;
   return '<button class="v5-lesson-card '+type+' '+(locked?'locked ':'')+(doneIt?'completed':'')+'" data-lesson="'+i+'" data-type="'+type+'" '+(locked?'data-locked="1"':'')+'>'
   +'<div class="v5-card-art">'+v5Art(type,i)+'<span class="v5-number">Bài '+(i+1)+'</span>'+(locked?'<span class="v5-lock">🔒</span>':'')+'</div>'
   +'<div class="v5-card-copy"><strong>'+(practice?'Luyện tập: ':'')+x[0]+'</strong><small>'+(practice?'5 câu • nhiều dạng tương tác':x[1])+'</small>'
   +'<div class="v5-card-foot"><span>'+(doneIt?'⭐⭐⭐':locked?'Chưa mở':'⭐☆☆')+'</span><em>'+(locked?'Học bài trước':'Học ngay ›')+'</em></div></div></button>';
 }).join('')+'</div>';
}
function gameCards(type,done){
 var games=gameData[type];
 return '<div class="curriculum-note v5-note">🎮 <b>Mini game theo đúng kỹ năng đã học</b><span> • Mỗi game là một scene trực quan.</span></div><div class="v5-game-grid">'
 +games.map(function(g,i){
   var locked=done<g[2],scene=type==='math'?[['🏎️','➕','🏁'],['🎈','12','🎯'],['🧩','🔺','🟦'],['🗺️','📏','⭐']][i]:[['🐝','A','B'],['🧩','con','🐱'],['🔎','✍️','✅'],['📚','🐰','🌳']][i];
   return '<button class="v5-game-card '+(locked?'locked':'')+'" data-game="'+type+'" '+(locked?'data-locked="1"':'')+'>'
   +'<div class="v5-game-scene"><span>'+scene[0]+'</span><b>'+scene[1]+'</b><i>'+scene[2]+'</i><u></u></div>'
   +'<strong>'+g[0]+'</strong><small>'+(locked?'Mở sau bài '+g[2]:'Chơi 5 vòng • nhận sao')+'</small><em>'+(locked?'🔒':'Chơi ngay ›')+'</em></button>';
 }).join('')+'</div>';
}
function v5QuestionVisual(q,type,index){
 var text=(q.q||'').toLowerCase(),icons=[];
 if(type==='math'){
   if(/độ dài|cm|mét|thước/.test(text))icons=['📏','✏️','📐'];
   else if(/giờ|thời gian|lịch/.test(text))icons=['🕒','📅','⏰'];
   else if(/tiền|đồng/.test(text))icons=['🪙','💰','🏪'];
   else if(/hình|tam giác|vuông|tròn|khối/.test(text))icons=['🔺','🟦','⚽'];
   else if(/kg|lít|khối lượng|dung tích/.test(text))icons=['⚖️','🥛','🍚'];
   else if(/nhân|chia|×|÷/.test(text))icons=['⭐','⭐','🧮'];
   else icons=['🍎','🍏','🧮'];
 }else{
   if(q.speak||/chính tả|nghe/.test(text))icons=['🎧','✍️','📒'];
   else if(q.passage||/đọc/.test(text))icons=['📖','🧒','🌳'];
   else if(/dấu|câu/.test(text))icons=['💬','❓','❗'];
   else if(/kể|truyện/.test(text))icons=['🖼️','🐰','📚'];
   else icons=['🔤','🧩','✏️'];
 }
 return '<div class="v5-question-scene '+type+'"><span class="v5-q-cloud q1"></span><span class="v5-q-cloud q2"></span><div class="v5-q-ground"></div><div class="v5-q-mascot">🐯</div><div class="v5-q-icons"><span>'+icons[0]+'</span><span>'+icons[1]+'</span><span>'+icons[2]+'</span></div><div class="v5-q-bubble">'+v4Esc(q.icon||'⭐')+'</div></div>';
}
