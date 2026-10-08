/* Bé Học Vui v10 - personalization, audio and visual polish */
(function(){
  if(typeof state==='undefined') return;

  function normalizeName(value){
    return String(value||'').replace(/[<>]/g,'').replace(/\s+/g,' ').trim().replace(/^bé\s+/i,'').slice(0,24) || 'Minh';
  }
  function displayName(){
    return 'Bé '+normalizeName(state.childName);
  }
  function esc(value){
    return String(value==null?'':value).replace(/[&<>"']/g,function(ch){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
    });
  }

  state.childName=normalizeName(state.childName||'Minh');
  if(typeof state.audioEnabled!=='boolean') state.audioEnabled=true;

  function pickVoice(lang){
    if(!('speechSynthesis' in window)) return null;
    var voices=window.speechSynthesis.getVoices();
    var exact=voices.find(function(v){return v.lang&&v.lang.toLowerCase()===lang.toLowerCase()});
    if(exact) return exact;
    var prefix=lang.slice(0,2).toLowerCase();
    return voices.find(function(v){return v.lang&&v.lang.toLowerCase().indexOf(prefix)===0})||null;
  }

  window.appSpeak=function(text,lang,force){
    if(!force && !state.audioEnabled) return;
    if(!('speechSynthesis' in window)){
      if(typeof toast==='function') toast('Thiết bị chưa hỗ trợ phát giọng đọc.');
      return;
    }
    var clean=String(text||'').trim();
    if(!clean) return;
    clean=clean.replace(/×/g,' nhân ').replace(/÷|:/g,' chia ').replace(/\+/g,' cộng ').replace(/=/g,' bằng ');
    window.speechSynthesis.cancel();
    var u=new SpeechSynthesisUtterance(clean);
    u.lang=lang||'vi-VN';
    u.rate=(u.lang||'').toLowerCase().indexOf('vi')===0?.82:.78;
    u.pitch=1.04;
    var voice=pickVoice(u.lang);
    if(voice) u.voice=voice;
    window.speechSynthesis.speak(u);
  };

  if(typeof v4Speak==='function'){
    window.v4Speak=function(text){window.appSpeak(text,'vi-VN',true);};
  }

  function audioButtonLabel(){
    return state.audioEnabled?'Tự đọc: Bật':'Tự đọc: Tắt';
  }

  function toggleAudio(){
    state.audioEnabled=!state.audioEnabled;
    if(typeof save==='function') save();
    bindEnhancements();
    if(typeof toast==='function') toast(state.audioEnabled?'🔊 Đã bật tự đọc câu hỏi':'🔇 Đã tắt tự đọc câu hỏi');
    if(state.audioEnabled) window.appSpeak('Đã bật âm thanh','vi-VN',true);
  }

  window.profileSettings=function(){
    if(typeof modal!=='function') return;
    modal('Hồ sơ của bé',
      '<div class="profile-editor">'
      +'<div class="profile-editor-hero"><img src="assets/avatar.webp" alt=""><div><strong>'+esc(displayName())+'</strong><span>Cá nhân hóa góc học tập</span></div></div>'
      +'<label class="profile-field"><span>Tên của bé</span><input id="profile-name" maxlength="24" autocomplete="off" value="'+esc(state.childName)+'" placeholder="Ví dụ: Bảo An"></label>'
      +'<label class="profile-field"><span>Lớp học</span><select id="profile-grade">'
      +'<option value="prep" '+(state.grade==='prep'?'selected':'')+'>Chuẩn bị vào lớp 1</option>'
      +'<option value="1" '+(state.grade==='1'?'selected':'')+'>Lớp 1</option>'
      +'<option value="2" '+(state.grade==='2'?'selected':'')+'>Lớp 2</option>'
      +'</select></label>'
      +'<label class="audio-setting"><input id="profile-audio" type="checkbox" '+(state.audioEnabled?'checked':'')+'><span><b>🔊 Tự động đọc câu hỏi</b><small>Bài tập sẽ đọc đề và phản hồi đúng/sai. Bé vẫn có thể bấm nút nghe lại bất cứ lúc nào.</small></span></label>'
      +'<button class="profile-save" id="profile-save">Lưu hồ sơ</button>'
      +'</div>'
    );
    var input=document.getElementById('profile-name');
    if(input){setTimeout(function(){input.focus();input.select();},30);}
    var saveButton=document.getElementById('profile-save');
    if(saveButton) saveButton.onclick=function(){
      var name=document.getElementById('profile-name');
      var gradeSelect=document.getElementById('profile-grade');
      var audio=document.getElementById('profile-audio');
      state.childName=normalizeName(name&&name.value);
      state.grade=gradeSelect?gradeSelect.value:state.grade;
      state.audioEnabled=audio?audio.checked:state.audioEnabled;
      if(typeof save==='function') save();
      var m=document.getElementById('modal'); if(m)m.remove();
      if(typeof home==='function')home();
      if(typeof toast==='function')toast('✅ Đã lưu hồ sơ của '+displayName());
    };
  };

  function applyHomePersonalization(){
    var profile=document.querySelector('.home-profile');
    if(profile){
      var strong=profile.querySelector('strong');
      if(strong) strong.textContent=displayName();
      profile.setAttribute('aria-label','Chỉnh tên và lớp học của bé');
      profile.title='Chỉnh hồ sơ';
      profile.onclick=function(e){e.preventDefault();window.profileSettings();};
    }
  }

  var baseHome=typeof home==='function'?home:null;
  if(baseHome){
    window.home=function(){
      baseHome();
      applyHomePersonalization();
      bindEnhancements();
    };
  }

  var baseRenderTop=typeof renderTop==='function'?renderTop:null;
  if(baseRenderTop){
    window.renderTop=function(title,accent){
      var html=baseRenderTop(title,accent);
      var audio='<button class="top-audio-toggle '+(state.audioEnabled?'on':'off')+'" data-audio-toggle aria-pressed="'+String(state.audioEnabled)+'" aria-label="'+audioButtonLabel()+'">'+uiIcon('sound')+'<span>'+audioButtonLabel()+'</span></button>';
      return html.replace('<button class="grade-switch"',audio+'<button class="grade-switch"');
    };
  }

  function lessonInfo(card){
    var type=card.dataset.type;
    var idx=Number(card.dataset.lesson);
    var list=type==='math'?math:vi;
    var item=list&&list[idx];
    if(!item) return null;
    return {text:item[0]+'. '+item[1],lang:'vi-VN'};
  }

  function addLessonAudioChips(){
    document.querySelectorAll('.v5-lesson-card[data-lesson]').forEach(function(card){
      if(card.querySelector('.lesson-audio-chip')) return;
      var info=lessonInfo(card); if(!info) return;
      var copy=card.querySelector('.v5-card-copy'); if(!copy) return;
      var chip=document.createElement('span');
      chip.className='lesson-audio-chip';
      chip.setAttribute('role','button');
      chip.setAttribute('tabindex','0');
      chip.setAttribute('aria-label','Nghe giới thiệu bài');
      chip.innerHTML=uiIcon('sound')+' Nghe bài';
      function play(e){e.preventDefault();e.stopPropagation();window.appSpeak(info.text,info.lang,true);}
      chip.onclick=play;
      chip.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){play(e);}};
      copy.appendChild(chip);
    });
  }

  function bindEnhancements(){
    applyHomePersonalization();
    document.querySelectorAll('[data-audio-toggle]').forEach(function(button){
      button.classList.toggle('on',!!state.audioEnabled);
      button.classList.toggle('off',!state.audioEnabled);
      button.setAttribute('aria-pressed',String(!!state.audioEnabled));
      var span=button.querySelector('span'); if(span)span.textContent=audioButtonLabel();
      button.onclick=toggleAudio;
    });
    addLessonAudioChips();
  }

  var baseBind=typeof bind==='function'?bind:null;
  if(baseBind){
    window.bind=function(){
      baseBind();
      bindEnhancements();
    };
  }

  var lastQuestionKey='';
  function enhanceExercise(){
    if(typeof V4SESSION==='undefined'||!V4SESSION) return;
    var s=V4SESSION,q=s.questions&&s.questions[s.current]; if(!q)return;
    var helper=document.querySelector('.helper-line');
    if(helper && !document.querySelector('.question-read-button')){
      var button=document.createElement('button');
      button.className='question-read-button';
      button.type='button';
      button.innerHTML=uiIcon('sound')+' <span>Nghe câu hỏi</span>';
      button.onclick=function(){window.appSpeak(q.q,'vi-VN',true);};
      helper.insertAdjacentElement('afterend',button);
    }
    var dictation=document.querySelector('[data-speak]');
    if(dictation){
      dictation.classList.add('dictation-audio-button');
      dictation.setAttribute('aria-label','Nghe từ cần viết');
      dictation.title='Nghe từ cần viết';
    }
    var key=[s.type,s.index,s.current].join('-');
    if(state.audioEnabled && key!==lastQuestionKey){
      lastQuestionKey=key;
      window.appSpeak(q.q,'vi-VN',false);
    }
  }

  var baseExerciseFrame=typeof v4ExerciseFrame==='function'?v4ExerciseFrame:null;
  if(baseExerciseFrame){
    window.v4ExerciseFrame=function(){
      baseExerciseFrame();
      enhanceExercise();
      bindEnhancements();
    };
  }

  var baseFinishQuestion=typeof v4FinishQuestion==='function'?v4FinishQuestion:null;
  if(baseFinishQuestion){
    window.v4FinishQuestion=function(ok,msg){
      baseFinishQuestion(ok,msg);
      if(state.audioEnabled){
        window.appSpeak(ok?'Chính xác! Giỏi lắm!':'Chưa đúng. Cùng xem lại nhé!','vi-VN',false);
      }
    };
  }

  document.addEventListener('click',function(e){
    var target=e.target.closest('[data-v4ga]');
    if(!target||!state.audioEnabled)return;
    setTimeout(function(){
      if(target.classList.contains('correct'))window.appSpeak('Chính xác!','vi-VN',false);
      else if(target.classList.contains('wrong'))window.appSpeak('Chưa đúng, thử câu tiếp theo nhé!','vi-VN',false);
    },30);
  },true);

  window.addEventListener('beforeunload',function(){
    if('speechSynthesis' in window)window.speechSynthesis.cancel();
  });

  if(typeof save==='function') save();
})();
