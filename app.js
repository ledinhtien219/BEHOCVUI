const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const KEY='behocvui-v3';
let old={};
try{old=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){old={}}
const state={grade:old.grade||'2',stars:old.stars??320,mathDone:old.mathDone??3,viDone:old.viDone??3,games:old.games??8,streak:old.streak??3};
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){}};
const math=[
['Các số đến 1000','Đọc, viết, so sánh và cấu tạo số','🔢'],
['Cộng không nhớ trong phạm vi 1000','Tính nhẩm và đặt tính','➕'],
['Cộng có nhớ trong phạm vi 1000','Đặt tính, tính và kiểm tra','🍎'],
['Trừ không nhớ trong phạm vi 1000','Thực hiện phép trừ đúng cột','➖'],
['Trừ có nhớ trong phạm vi 1000','Vận dụng vào bài toán thực tế','🧮'],
['Phép nhân – bảng nhân 2','Nhóm bằng nhau, phép cộng lặp','✖️'],
['Phép chia – bảng chia 2','Chia thành các nhóm bằng nhau','➗'],
['Bảng nhân và bảng chia 5','Luyện phản xạ qua tình huống','⭐'],
['Hình phẳng và hình khối','Đường thẳng, tam giác, tứ giác','🔺'],
['Độ dài','cm, dm, m và ước lượng','📏'],
['Khối lượng – dung tích','kg, lít trong đời sống','⚖️'],
['Thời gian – tiền Việt Nam','Ngày giờ, xem lịch, tiền','🕒'],
['Thu thập và biểu diễn dữ liệu','Đọc bảng, tranh và biểu đồ đơn giản','📊'],
['Khả năng xảy ra','Chắc chắn, có thể, không thể','🎲']];
const vi=[
['Đọc thành tiếng','Đọc rõ, đúng và ngắt nghỉ phù hợp','📖'],
['Đọc hiểu văn bản','Trả lời câu hỏi và tìm ý chính','🐰'],
['Chính tả nghe – viết','Nghe, viết đúng và trình bày sạch','✍️'],
['Âm – vần dễ nhầm','Phân biệt c/k, g/gh, ng/ngh...','🔤'],
['Từ chỉ sự vật','Người, vật, con vật, cây cối','🌳'],
['Từ chỉ hoạt động','Nhận biết và dùng từ chỉ hoạt động','🏃'],
['Từ chỉ đặc điểm','Màu sắc, hình dáng, tính chất','🌈'],
['Câu kể','Ai là gì? Ai làm gì? Ai thế nào?','💬'],
['Dấu câu','Dấu chấm, hỏi, chấm than, phẩy','❓'],
['Mở rộng vốn từ theo chủ điểm','Gia đình, trường học, thiên nhiên','🎒'],
['Viết câu và đoạn ngắn','Sắp xếp ý và viết 3–5 câu','📝'],
['Kể chuyện','Kể theo tranh và câu hỏi gợi ý','🧚'],
['Nói và nghe','Trao đổi, trình bày, phản hồi','🎧'],
['Ôn tập đọc – viết','Củng cố theo cụm kỹ năng','🏆']];
const quizzes={
math:[
['Số nào lớn hơn 498 và bé hơn 500?','🔢',['497','499','501'],1],
['25 + 37 bằng bao nhiêu?','🍎',['52','62','72'],1],
['5 × 4 bằng bao nhiêu?','⭐',['9','20','25'],1],
['1 mét bằng bao nhiêu xăng-ti-mét?','📏',['10 cm','100 cm','1000 cm'],1]],
vi:[
['Từ nào chỉ hoạt động?','🏃‍♀️',['chạy','đỏ','cái bàn'],0],
['Chọn dấu câu: “Bạn tên là gì…”','💬',['.','?','!'],1],
['Từ nào viết đúng chính tả?','🌳',['cây tre','cây che','cây trê'],0],
['Câu nào kể về hoạt động?','📚',['Lan đang đọc sách.','Quyển sách màu đỏ.','Ai đang đọc sách?'],0]]};
const gameData={
math:[['Đua xe phép tính','🏎️',2],['Bắn bóng số','🎈',3],['Xếp hình toán học','🧩',8],['Săn kho báu đo lường','🗺️',10]],
vi:[['Bắt chữ cái','🐝',2],['Ghép từ thần tốc','🧩',5],['Thám tử chính tả','🔎',4],['Kể chuyện tranh','📚',11]]};
function grade(){return state.grade==='2'?'Lớp 2':state.grade==='1'?'Lớp 1':'Chuẩn bị vào lớp 1'}
function toast(s){const t=$('#toast');if(!t)return;t.textContent=s;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),1700)}
function home(){
$('#app').innerHTML='<main class="reference-page page-enter"><section class="reference-board" aria-label="Trang chủ Bé Học Vui">'
+'<button class="hotspot hs-profile" data-a="grades" aria-label="Chọn lớp"></button>'
+'<button class="hotspot hs-math" data-s="math" aria-label="Học Toán"></button>'
+'<button class="hotspot hs-vi" data-s="vi" aria-label="Học Tiếng Việt"></button>'
+'<button class="hotspot hs-en" data-a="english" aria-label="Học Tiếng Anh"></button>'
+'<button class="hotspot hs-games" data-a="games" aria-label="Game mini"></button>'
+'<button class="hotspot hs-library" data-a="library" aria-label="Thư viện"></button>'
+'<button class="hotspot hs-reward" data-a="reward" aria-label="Phần thưởng"></button>'
+'<button class="hotspot hs-gradepanel" data-a="grades" aria-label="Chọn lớp phù hợp"></button>'
+'<button class="hotspot hs-math2" data-s="math" aria-label="Toán lớp 2"></button>'
+'<button class="hotspot hs-vi2" data-s="vi" aria-label="Tiếng Việt lớp 2"></button>'
+'<button class="hotspot hs-viex" data-s="vi" aria-label="Bài tập Tiếng Việt lớp 2"></button>'
+'<button class="hotspot hs-minipanel" data-a="games" aria-label="Game mini"></button>'
+'<button class="hotspot hs-report" data-a="report" aria-label="Báo cáo học tập"></button>'
+'</section><div class="reference-mobile-nav"><button data-s="math">🔢<span>Toán</span></button><button data-s="vi">📖<span>Tiếng Việt</span></button><button data-a="games">🎮<span>Game</span></button><button data-a="reward">🏆<span>Thưởng</span></button></div></main>';
bind();
}
function top(title,accent){return '<header class="app-topbar '+accent+'"><button class="circle-back" data-a="home">‹</button><div class="app-title-wrap"><strong>'+title+'</strong><small>'+grade()+' • Lộ trình CTGDPT 2018</small></div><div class="top-progress">⭐ <b>'+state.stars+'</b></div><button class="grade-switch" data-a="grades">'+grade()+'⌄</button></header>'}
function rows(type,list,done,practice){
return '<div class="curriculum-note">📘 <b>Lộ trình chuẩn app:</b> học từ kỹ năng nền tảng → vận dụng, bám yêu cầu cần đạt CTGDPT 2018.</div><div class="lesson-list">'
+list.map((x,i)=>'<button class="lesson-row '+(i>done?'locked':'')+'" data-lesson="'+i+'" data-type="'+type+'" '+(i>done?'data-locked="1"':'')+'>'
+'<span class="lesson-index c'+((i%5)+1)+'">'+(i+1)+'</span><span class="lesson-emoji">'+(practice?'🎯':x[2])+'</span>'
+'<span class="lesson-copy"><strong>'+(practice?'Luyện tập: ':'')+x[0]+'</strong><small>'+(practice?'5 dạng câu hỏi • tối đa 3 sao':x[1])+'</small></span>'
+'<span class="lesson-state">'+(i>done?'🔒':i<done?'⭐⭐⭐':'⭐☆☆')+' ›</span></button>').join('')+'</div>'}
function gameCards(type,done){return '<div class="curriculum-note">🎮 Mini game chỉ mở khi bé đã học đủ kỹ năng liên quan.</div><div class="game-grid">'
+gameData[type].map((g,i)=>'<button class="game-tile '+(done<g[2]?'locked':'')+'" data-game="'+type+'" '+(done<g[2]?'data-locked="1"':'')+'><span class="game-art">'+g[1]+'</span><strong>'+g[0]+'</strong><small>Game đúng kỹ năng của cấp lớp</small><em>'+(done<g[2]?'🔒 Mở sau bài '+g[2]:'Chơi ngay ›')+'</em></button>').join('')+'</div>'}
function subject(type){
const isMath=type==='math',list=isMath?math:vi,done=isMath?state.mathDone:state.viDone,accent=isMath?'blue':'pink',title=isMath?'Toán - Lớp 2':'Tiếng Việt - Lớp 2';
$('#app').innerHTML='<main class="learning-page page-enter '+accent+'">'+top(title,accent)+'<section class="learning-shell"><aside class="reference-preview '+(isMath?'math-crop':'vi-crop')+'"><div class="preview-badge">GIAO DIỆN THEO ẢNH MẪU</div></aside><div class="learning-main">'
+'<div class="progress-panel"><div><strong>Tiến độ học tập</strong><span>'+done+'/'+list.length+' bài</span></div><div class="progress-track"><i style="width:'+Math.round(done/list.length*100)+'%"></i></div><span class="gift-mini">🎁</span></div>'
+'<nav class="subject-tabs"><button class="subject-tab active" data-tab="lesson">Bài học</button><button class="subject-tab" data-tab="practice">Luyện tập</button><button class="subject-tab" data-tab="game">Game mini</button></nav><div id="pane">'+rows(type,list,done,false)+'</div></div></section></main>';
bind();$$('.subject-tab').forEach(b=>b.onclick=()=>{$$('.subject-tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('#pane').innerHTML=b.dataset.tab==='lesson'?rows(type,list,done,false):b.dataset.tab==='practice'?rows(type,list.slice(0,Math.max(done+2,5)),done,true):gameCards(type,done);dynamic()});dynamic();
}
function dynamic(){
$$('[data-lesson]').forEach(b=>b.onclick=()=>{if(b.dataset.locked)return toast('🔒 Hãy hoàn thành bài trước để mở bài này nhé!');exercise(b.dataset.type,+b.dataset.lesson)});
$$('[data-game]').forEach(b=>b.onclick=()=>{if(b.dataset.locked)return toast('🔒 Học đủ kỹ năng để mở game này nhé!');game(b.dataset.game)});
}
function exercise(type,i){
const list=type==='math'?math:vi,q=quizzes[type][i%quizzes[type].length],accent=type==='math'?'blue':'pink';
$('#app').innerHTML='<main class="exercise-page page-enter '+accent+'">'+top('Bài '+(i+1)+': '+list[i][0],accent)+'<section class="exercise-shell"><div class="exercise-card">'
+'<div class="helper-line"><span>🐝</span><b>'+q[0]+'</b><button>🔊</button></div><div class="question-visual">'+q[1]+'</div><div class="answer-grid">'+q[2].map((a,n)=>'<button data-answer="'+n+'">'+a+'</button>').join('')+'</div><div class="exercise-footer"><span>💡 Chọn đúng để nhận 3 ⭐</span><span>Câu 1/5</span></div></div>'
+'<aside class="mission-card"><h3>🌟 Nhiệm vụ bài học</h3><div class="mission active">1. Khởi động</div><div class="mission">2. Luyện kỹ năng</div><div class="mission">3. Vận dụng</div><div class="mission">4. Thử thách</div><div class="mission reward">🎁 Nhận thưởng</div></aside></section></main>';
bind();$$('[data-answer]').forEach(b=>b.onclick=()=>{const ok=+b.dataset.answer===q[3];$$('[data-answer]').forEach(x=>x.disabled=true);b.classList.add(ok?'correct':'wrong');if(ok){state.stars+=3;if(type==='math')state.mathDone=Math.max(state.mathDone,i+1);else state.viDone=Math.max(state.viDone,i+1);save();toast('🎉 Chính xác! +3 ⭐')}else{$$('[data-answer]')[q[3]].classList.add('correct');toast('Gần đúng rồi!')}setTimeout(()=>subject(type),1100)})}
function game(type){
const m=type==='math',d=m?['Bắn bóng số','7 + 5 = ?',['10','12','14','16'],1,['18','24','12','36','48']]:['Bắt chữ đúng','Từ nào chỉ hoạt động?',['chạy','xanh','bàn','đẹp'],0,['ch','tr','ng','gh','nh']];
$('#app').innerHTML='<main class="game-page page-enter">'+top('Game mini - '+d[0],'green')+'<section class="playground"><div class="play-scene"><div class="floating-items">'+d[4].map((x,i)=>'<span class="float-item f'+(i+1)+'">'+x+'</span>').join('')+'</div><div class="wood-question">'+d[1]+'</div><div class="player-kid">🧒🏻⚾</div><div class="game-answers">'+d[2].map((a,i)=>'<button data-ga="'+i+'">'+a+'</button>').join('')+'</div></div><aside class="game-info"><div class="game-mascot">🐯</div><h2>'+d[0]+'</h2><p>Game phù hợp với kỹ năng '+grade()+' và chỉ dùng kiến thức bé đã học.</p><div class="score-card"><span>Điểm</span><b id="score">0 ⭐</b></div><div class="info-row"><span>Đúng</span><b id="correct">0</b></div><div class="info-row"><span>Chuỗi học</span><b>'+state.streak+' ngày 🔥</b></div><button class="primary-btn" data-a="home">Về trang chủ</button></aside></section></main>';
bind();$$('[data-ga]').forEach(b=>b.onclick=()=>{if(+b.dataset.ga===d[3]){b.classList.add('correct');state.stars+=5;state.games++;save();$('#score').textContent='5 ⭐';$('#correct').textContent='1';toast('🎯 Chính xác! +5 ⭐')}else{b.classList.add('wrong');toast('Thử lại nhé!')}})}
function modal(title,body){document.body.insertAdjacentHTML('beforeend','<div class="modal-backdrop" id="modal"><section class="modal-card"><button class="modal-close" data-close>✕</button><h2>'+title+'</h2>'+body+'</section></div>');$('[data-close]').onclick=()=>$('#modal').remove()}
function grades(){modal('Chọn lớp học phù hợp','<p>Bài học và mini game tự điều chỉnh theo cấp độ.</p><div class="grade-options"><button data-grade="prep">🧸<b>Chuẩn bị vào lớp 1</b><small>Làm quen kiến thức</small></button><button data-grade="1">🎒<b>Lớp 1</b><small>Kiến thức nền tảng</small></button><button data-grade="2" class="active">🧒<b>Lớp 2</b><small>Ôn tập và nâng cao</small></button></div><div class="modal-note">📘 Lộ trình bám yêu cầu cần đạt CTGDPT 2018.</div>');$$('[data-grade]').forEach(b=>b.onclick=()=>{state.grade=b.dataset.grade;save();$('#modal').remove();home()})}
function reward(){modal('🏆 Phần thưởng của con','<div class="reward-total">Con đang có <b>'+state.stars+' ⭐</b></div><div class="reward-grid"><div>🥇<b>Huy hiệu</b><small>50 ⭐</small></div><div>🖼️<b>Khung ảnh</b><small>80 ⭐</small></div><div>🎮<b>Vật phẩm game</b><small>100 ⭐</small></div></div>')}
function report(){modal('📊 Báo cáo học tập','<div class="report-list"><div><b>Toán</b><span>'+state.mathDone+'/'+math.length+' bài</span></div><div><b>Tiếng Việt</b><span>'+state.viDone+'/'+vi.length+' bài</span></div><div><b>Mini game</b><span>'+state.games+' lượt</span></div></div>')}
function library(){modal('📚 Thư viện truyện','<div class="story-grid"><div>🐰<b>Thỏ và rùa</b></div><div>🎋<b>Sự tích cây tre</b></div><div>🐥<b>Chú vịt con</b></div><div>👧<b>Cô bé quàng khăn đỏ</b></div></div>')}
function english(){modal('🇬🇧 Tiếng Anh','<p>Tiếng Anh lớp 1–2: nghe – nói – từ vựng – mẫu câu qua hình ảnh và trò chơi.</p>')}
function bind(){
$$('[data-a="home"]').forEach(b=>b.onclick=home);$$('[data-a="grades"]').forEach(b=>b.onclick=grades);$$('[data-a="games"]').forEach(b=>b.onclick=()=>game('math'));$$('[data-a="reward"]').forEach(b=>b.onclick=reward);$$('[data-a="report"]').forEach(b=>b.onclick=report);$$('[data-a="library"]').forEach(b=>b.onclick=library);$$('[data-a="english"]').forEach(b=>b.onclick=english);$$('[data-s="math"]').forEach(b=>b.onclick=()=>subject('math'));$$('[data-s="vi"]').forEach(b=>b.onclick=()=>subject('vi'))}
home();
if('serviceWorker' in navigator&&location.protocol!=='file:')window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));