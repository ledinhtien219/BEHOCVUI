function uiIcon(name) {
  var shapes = {
    star: '<path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/>',
    lock: '<rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3"/>',
    gift: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M2 12h20M12 8v13M12 8C3 8 4 1 8 3c3 1 4 5 4 5Zm0 0c9 0 8-7 4-5-3 1-4 5-4 5Z"/>',
    game: '<path d="M7 7h10c4 0 6 11 3 13-2 1-4-3-5-3H9c-1 0-3 4-5 3C1 18 3 7 7 7Z"/><path d="M6 11v6m-3-3h6m7-2h.01m3 3h.01"/>',
    book: '<path d="M12 5v16M12 5C9 2 4 3 2 4v15c3-1 7-1 10 2 3-3 7-3 10-2V4c-2-1-7-2-10 1Z"/>',
    trophy: '<path d="M7 3h10v7c0 7-10 7-10 0ZM7 5H3v4c0 3 2 4 5 4m9-8h4v4c0 3-2 4-5 4m-4 2v5m-5 1h10"/>',
    bell: '<path d="M5 17h14l-2-3V8a5 5 0 0 0-10 0v6Zm5 3h4M12 2v1"/>',
    family: '<circle cx="8" cy="7" r="3"/><circle cx="17" cy="8" r="3"/><path d="M2 21v-5a6 6 0 0 1 12 0v5m0-7a5 5 0 0 1 8 4v3"/>',
    expand: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
    arrow: '<path d="m9 5 7 7-7 7"/>',
    back: '<path d="m15 5-7 7 7 7"/>',
    sound: '<path d="M3 9h4l5-5v16l-5-5H3Zm13-2a7 7 0 0 1 0 10m3-13a11 11 0 0 1 0 16"/>'
  };
  return '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(shapes[name]||shapes.star)+'</svg>';
}

function home() {
  var subjects = [
    {type:'math',title:'Toán',art:'math-art',label:'Khám phá những con số'},
    {type:'vi',title:'Tiếng Việt',art:'vietnamese-art',label:'Đọc hay, viết đẹp'},
    {type:'en',title:'Tiếng Anh',art:'english-art',label:'Làm quen thế giới mới'}
  ];
  $('#app').innerHTML = '<main class="home-page page-enter">'
    +'<header class="home-header"><button class="home-profile" data-a="grades" aria-label="Chọn lớp học"><img src="assets/avatar.webp" alt="" width="64" height="64"><span><strong>Bé Minh</strong><small>'+grade()+'</small></span><span class="profile-chevron">⌄</span></button>'
    +'<div class="home-points" aria-label="'+state.stars+' sao">'+uiIcon('star')+'<b>'+state.stars+'</b><button data-a="reward" aria-label="Phần thưởng của con">'+uiIcon('gift')+'</button></div>'
    +'<nav class="home-tools" aria-label="Tiện ích"><button data-notifications>'+uiIcon('bell')+'<span>Thông báo</span></button><button data-a="report">'+uiIcon('family')+'<span>Phụ huynh</span></button><button data-fullscreen>'+uiIcon('expand')+'<span>Toàn màn hình</span></button></nav></header>'
    +'<div class="home-welcome"><h1>Hôm nay con học gì nào?</h1><p>Một ngày mới, thêm nhiều điều hay!</p></div>'
    +'<section class="home-content" aria-label="Chọn hoạt động học tập"><aside class="home-friends"><img src="assets/home-friends.webp" alt="Bạn nhỏ và chú cún chào đón bé đến học" width="377" height="261"><p>Cùng học, cùng chơi,<br>lớn khôn mỗi ngày!</p></aside>'
    +'<div class="home-subjects">'+subjects.map(function(item){return '<button class="home-subject '+item.type+'" '+(item.type==='en'?'data-a="english"':'data-s="'+item.type+'"')+'><h2>'+item.title+'</h2><div class="home-subject-art"><img src="assets/'+item.art+'.webp" alt="" width="190" height="140"></div><p>'+item.label+'</p><span class="home-study">Học ngay '+uiIcon('arrow')+'</span></button>';}).join('')+'</div>'
    +'<nav class="home-activities" aria-label="Học mà chơi"><button class="activity-game" data-a="games">'+uiIcon('game')+'<span>Game mini<small>Chơi vui, học giỏi</small></span>'+uiIcon('arrow')+'</button><button class="activity-library" data-a="library">'+uiIcon('book')+'<span>Thư viện truyện<small>Mở một câu chuyện</small></span>'+uiIcon('arrow')+'</button><button class="activity-reward" data-a="reward">'+uiIcon('trophy')+'<span>Phần thưởng của con<small>Những ngôi sao nhỏ</small></span>'+uiIcon('arrow')+'</button></nav></section>'
    +'<footer class="home-footer"><span>Bé Học Vui</span><span>Học một chút · Vui thật nhiều</span></footer></main>';
  bind();
  $('[data-notifications]').onclick = function(){modal('Thông báo','<p>Chưa có thông báo mới. Con có thể chọn một môn học để bắt đầu nhé!</p>');};
  $('[data-fullscreen]').onclick = async function(){
    try {
      if(document.fullscreenElement) await document.exitFullscreen();
      else if(document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen();
      else toast('Trên iPad: Chia sẻ → Thêm vào Màn hình chính để mở toàn màn hình.');
    } catch(error) {toast('Thêm Bé Học Vui vào Màn hình chính để mở toàn màn hình.');}
  };
}

function renderChild(title, accent, content) {
  $('#app').innerHTML = '<main class="child-page page-enter '+(accent||'blue')+'">'+renderTop(title,accent||'blue')+'<section class="child-content">'+content+'</section></main>';
  window.scrollTo(0,0);
  bind();
}

function subject(type) {
  var isMath=type==='math',list=isMath?math:vi,done=isMath?state.mathDone:state.viDone,accent=isMath?'blue':'pink';
  var tabs=isMath?[['lesson','Bài học'],['practice','Luyện tập'],['game','Game mini']]:[['lesson','Tập đọc'],['spelling','Chính tả'],['words','Luyện từ và câu'],['story','Kể chuyện'],['reading','Đọc hiểu']];
  $('#app').innerHTML='<main class="learning-page subject-dashboard page-enter '+accent+'">'+renderTop((isMath?'Toán':'Tiếng Việt')+' - '+grade(),accent)+'<section class="learning-shell"><div class="learning-main"><div class="progress-panel"><div><strong>Tiến độ học tập</strong><span>'+Math.min(done,list.length)+'/'+list.length+' bài</span></div><div class="progress-track"><i style="width:'+Math.min(100,Math.round(done/list.length*100))+'%"></i></div><button class="progress-gift" data-a="reward" aria-label="Xem phần thưởng">'+uiIcon('gift')+'</button></div><nav class="subject-tabs" aria-label="Hoạt động môn học">'+tabs.map(function(tab){return '<button class="subject-tab" data-tab="'+tab[0]+'" aria-pressed="false">'+tab[1]+'</button>';}).join('')+'</nav><div id="pane"></div></div></section></main>';
  bind();
  window.scrollTo(0,0);
  function selectTab(tab) {
    $$('.subject-tab').forEach(function(button){var active=button.dataset.tab===tab;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
    if(isMath&&tab==='lesson') {
      var topics=[['Phép cộng','addition-art',[0,1,2]],['Phép trừ','subtraction-art',[3,4]],['Bảng nhân - chia','multiplication-art',[5,6,7]],['Hình học & đo lường','geometry-art',[8,9,10,11,12,13]],['Bài luyện tập','practice-art','practice'],['Game toán học','game-art','game']];
      $('#pane').innerHTML='<div class="math-topic-grid">'+topics.map(function(topic,index){return '<button class="math-topic topic-'+index+'" data-topic="'+index+'"><h2>'+topic[0]+'</h2><img src="assets/'+topic[1]+'.webp" alt=""><span>Khám phá '+uiIcon('arrow')+'</span></button>';}).join('')+'</div>';
      $$('[data-topic]').forEach(function(button){button.onclick=function(){var topic=topics[Number(button.dataset.topic)];if(typeof topic[2]==='string')return selectTab(topic[2]);var indices=topic[2];$('#pane').innerHTML='<div class="topic-heading"><button class="secondary-button" data-topics>'+uiIcon('back')+' Các chủ đề</button><h2>'+topic[0]+'</h2></div>'+rows(type,indices.map(function(index){return list[index];}),done,false,indices);$('[data-topics]').onclick=function(){selectTab('lesson');};dynamic();};});
    } else if(isMath) {
      $('#pane').innerHTML=tab==='game'?gameCards(type,done):rows(type,list,done,true);
      dynamic();
    } else if(tab==='lesson'||tab==='story') {
      var story=UISTORIES[0];
      $('#pane').innerHTML='<article class="reading-feature"><img src="assets/reading-art.webp" alt="Bạn nhỏ đọc sách cùng chú cáo"><div><span class="eyebrow">BÀI ĐỌC HÔM NAY</span><h2>'+story.title+'</h2><p>'+story.text.slice(0,182)+'…</p><button class="start-learning" data-feature-story>Đọc và khám phá '+uiIcon('arrow')+'</button><button class="secondary-button" data-reading-practice>Luyện đọc hiểu</button></div></article><div class="story-shelf">'+UISTORIES.map(function(item,index){return '<button data-story="'+index+'"><img src="assets/'+item.art+'.webp" alt=""><strong>'+item.title+'</strong></button>';}).join('')+'</div>';
      $('[data-feature-story]').onclick=function(){openStory(0);};
      $('[data-reading-practice]').onclick=function(){selectTab('reading');};
      $$('[data-story]').forEach(function(button){button.onclick=function(){openStory(Number(button.dataset.story));};});
    } else {
      var indices=tab==='spelling'?[2,3]:tab==='words'?[4,5,6,7,8,9]:[0,1,10,13];
      $('#pane').innerHTML=rows(type,indices.map(function(index){return list[index];}),done,false,indices);
      dynamic();
    }
  }
  $$('.subject-tab').forEach(function(button){button.onclick=function(){selectTab(button.dataset.tab);};});
  selectTab('lesson');
}

function grades() {
  var selected = state.grade;
  var options = [{value:'prep',title:'Bé chuẩn bị vào lớp 1',label:'Làm quen kiến thức',art:'avatar'},{value:'1',title:'Lớp 1',label:'Kiến thức nền tảng',art:'math-art'},{value:'2',title:'Lớp 2',label:'Ôn tập và nâng cao',art:'vietnamese-art'}];
  renderChild('Chọn lớp học phù hợp','blue','<div class="grade-screen"><h1>Mỗi bé một hành trình</h1><p>Chọn lớp học của con để bắt đầu.</p><div class="grade-options">'+options.map(function(option){return '<button data-grade="'+option.value+'" aria-pressed="'+(selected===option.value)+'" class="'+(selected===option.value?'active':'')+'"><img src="assets/'+option.art+'.webp" alt=""><b>'+option.title+'</b><small>'+option.label+'</small><span class="grade-check" aria-hidden="true">✓</span></button>';}).join('')+'</div><p class="grade-curriculum">Nội dung bám sát Chương trình Giáo dục phổ thông.</p><button class="start-learning" data-start-learning>Bắt đầu học '+uiIcon('arrow')+'</button></div>');
  $$('[data-grade]').forEach(function(button){button.onclick=function(){selected=button.dataset.grade;$$('[data-grade]').forEach(function(option){var active=option.dataset.grade===selected;option.classList.toggle('active',active);option.setAttribute('aria-pressed',String(active));});};});
  $('[data-start-learning]').onclick=function(){state.grade=selected;save();home();};
}

function gamesHub() {
  renderChild('Game mini','green','<div class="section-heading"><h1>Chơi vui, học giỏi</h1><p>Hoàn thành bài học để mở thêm trò chơi nhé!</p></div><h2 class="section-label">Game Toán</h2>'+gameCards('math',state.mathDone)+'<h2 class="section-label">Game Tiếng Việt</h2>'+gameCards('vi',state.viDone));
  dynamic();
}

var UISTORIES = [
  {title:'Thỏ và rùa',art:'rabbit-story',text:'Thỏ luôn tự hào vì chạy rất nhanh. Một hôm, thỏ rủ rùa thi chạy. Khi đã bỏ xa rùa, thỏ nằm nghỉ dưới gốc cây rồi ngủ quên. Rùa không dừng lại. Từng bước nhỏ, rùa kiên trì tiến về phía trước. Khi thỏ tỉnh dậy, rùa đã đến đích. Thỏ hiểu rằng không nên chủ quan, còn sự kiên trì giúp chúng ta làm được nhiều điều tốt.'},
  {title:'Cây táo của bé',art:'tree-story',text:'Trong vườn nhà bé có một cây táo nhỏ. Mỗi buổi sáng, bé cùng ông tưới nước cho cây. Bé nhặt cỏ quanh gốc, ngắm những chiếc lá xanh và chờ cây lớn. Một ngày, những bông hoa trắng nở trên cành. Rồi những quả táo nhỏ xuất hiện. Bé vui lắm! Ông nói: Khi mình chăm sóc cây mỗi ngày, cây sẽ tặng mình những món quà ngọt ngào.'},
  {title:'Đôi bạn nhỏ',art:'friends-story',text:'Gà con và vịt con là đôi bạn thân. Một hôm, hai bạn cùng đi dạo bên hồ. Gà con nhìn thấy một bông hoa đẹp ở bờ bên kia. Vịt con bơi sang hái hoa, còn gà con nhặt những chiếc lá làm thành một chiếc giỏ nhỏ. Hai bạn mang hoa về tặng mẹ. Mỗi bạn giỏi một việc, nhưng khi cùng giúp nhau, cả hai làm được nhiều điều thật vui.'},
  {title:'Bức tranh của em',art:'girl-story',text:'Hôm nay, cô giáo mời cả lớp vẽ điều mình yêu thích. Mai vẽ ngôi nhà nhỏ, có ông bà và một giàn hoa trước cửa. Nam vẽ sân trường với cây phượng xanh. Mỗi bức tranh có một màu sắc riêng. Cô giáo mỉm cười: Các con đều có những điều đáng yêu để kể. Mai nhìn bức tranh của mình và thấy thật hạnh phúc.'}
];

function library() {
  renderChild('Thư viện truyện','green','<div class="section-heading"><h1>Mở sách, mở điều hay</h1><p>Chọn một câu chuyện để đọc cùng con.</p></div><div class="library-grid">'+UISTORIES.map(function(story,index){return '<button class="story-card" data-story="'+index+'"><img src="assets/'+story.art+'.webp" alt="" width="186" height="132"><span><strong>'+story.title+'</strong><small>Đọc truyện '+uiIcon('arrow')+'</small></span></button>';}).join('')+'</div>');
  $$('[data-story]').forEach(function(button){button.onclick=function(){openStory(Number(button.dataset.story));};});
}

function openStory(index) {
  var story = UISTORIES[index];
  renderChild(story.title,'green','<article class="story-reader"><img src="assets/'+story.art+'.webp" alt="Minh họa câu chuyện '+story.title+'"><div><span class="eyebrow">GÓC ĐỌC CỦA CON</span><h1>'+story.title+'</h1><p>'+story.text+'</p><div class="story-actions"><button class="start-learning" data-read-story>'+uiIcon('sound')+' Nghe đọc</button><button class="secondary-button" data-a="library">Chọn truyện khác</button></div></div></article>');
  $('[data-read-story]').onclick=function(){v4Speak(story.text);};
}

function reward() {
  var done = state.mathDone+state.viDone;
  renderChild('Phần thưởng của con','green','<div class="reward-screen"><img class="reward-illustration" src="assets/reward-art.webp" alt="Bạn nhỏ vui mừng vì đã chăm chỉ học tập"><div><span class="eyebrow">MỖI CỐ GẮNG ĐỀU ĐÁNG QUÝ</span><h1>Con làm tốt lắm!</h1><p>Con đã hoàn thành <b>'+done+' bài học</b>.<br>Tiếp tục khám phá để nhận thêm sao nhé!</p><div class="reward-balance">'+uiIcon('star')+'<strong>'+state.stars+'</strong><span>ngôi sao của con</span></div><button class="start-learning" data-s="math">Tiếp tục học '+uiIcon('arrow')+'</button><button class="secondary-button" data-a="report">Xem hành trình của con</button></div></div>');
  bind();
}

function report() {
  var subjects = [{title:'Toán',done:state.mathDone,total:math.length,type:'math'},{title:'Tiếng Việt',done:state.viDone,total:vi.length,type:'vi'}];
  renderChild('Báo cáo học tập','blue','<div class="section-heading"><h1>Hành trình của con</h1><p>Tổng quan tiến độ học tập hiện tại.</p></div><div class="report-cards">'+subjects.map(function(item){var percent=Math.min(100,Math.round(item.done/item.total*100));return '<article class="report-card '+item.type+'"><h2>'+item.title+'</h2><div class="report-chart" aria-hidden="true">'+[.3,.5,.7,.85,1].map(function(scale){return '<i style="height:'+Math.max(8,Math.round(percent*scale))+'%"></i>';}).join('')+'</div><strong>'+Math.min(item.done,item.total)+' / '+item.total+' bài</strong><progress value="'+Math.min(item.done,item.total)+'" max="'+item.total+'" aria-label="Tiến độ '+item.title+'"></progress><button class="secondary-button" data-s="'+item.type+'">Tiếp tục học '+uiIcon('arrow')+'</button></article>';}).join('')+'<article class="report-card games"><h2>Học mà chơi</h2><div class="report-game-icon">'+uiIcon('game')+'</div><strong>'+state.games+' lượt chơi</strong><p>'+state.stars+' sao · Chuỗi học '+state.streak+' ngày</p><button class="secondary-button" data-a="games">Chọn một trò chơi '+uiIcon('arrow')+'</button></article></div>');
  bind();
}

function english() {
  renderChild('Tiếng Anh - '+grade(),'orange','<article class="english-screen"><img src="assets/english-art.webp" alt="Gấu nhỏ và các chữ cái A, B, C"><div><span class="eyebrow">LÀM QUEN TIẾNG ANH</span><h1>Hello, bạn nhỏ!</h1><p>Chạm vào một từ để nghe cách phát âm.</p><div class="english-words">'+[['A','Apple','Quả táo'],['B','Bear','Gấu'],['C','Cat','Mèo']].map(function(word){return '<button data-english-word="'+word[1]+'"><b>'+word[0]+'</b><strong>'+word[1]+'</strong><small>'+word[2]+'</small>'+uiIcon('sound')+'</button>';}).join('')+'</div></div></article>');
  $$('[data-english-word]').forEach(function(button){button.onclick=function(){if(!('speechSynthesis' in window))return toast('Trình duyệt chưa hỗ trợ đọc từ.');speechSynthesis.cancel();var utterance=new SpeechSynthesisUtterance(button.dataset.englishWord);utterance.lang='en-US';utterance.rate=.8;speechSynthesis.speak(utterance);};});
}
