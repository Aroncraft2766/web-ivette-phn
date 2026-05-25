/* ── PHN: carrito a la izquierda del botón regresar ─────────────────────── */
(function(){
  function fixCartOrder(){
    var cart = document.getElementById('phn-cart-link');
    var back = document.getElementById('phnBackLink');
    if(!cart || !back) return;
    var container = back.parentElement;
    if(!container) return;
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    cart.style.order = '1';
    back.style.order = '2';
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', fixCartOrder);
  } else { fixCartOrder(); }
})();

/* ── PHN: botón de traducción ES ↔ EN en páginas de compra ──────────────── */
(function(){
  var UI_STRINGS = {
    es: {
      back:       'Volver al inicio',
      buy:        'Comprar por WhatsApp',
      qty:        'Cantidad',
      cart:       'Ver carrito',
      translate:  'EN',
      addCart:    'Agregar al carrito',
    },
    en: {
      back:       'Back to home',
      buy:        'Buy on WhatsApp',
      qty:        'Quantity',
      cart:       'View cart',
      translate:  'ES',
      addCart:    'Add to cart',
    }
  };

  var currentLang = 'es';

  function applyUILang(lang){
    var t = UI_STRINGS[lang] || UI_STRINGS.es;
    var backTxt = document.getElementById('phnBackText');
    if(backTxt) backTxt.textContent = t.back;
    var buyTxt = document.getElementById('buyBtnText');
    if(buyTxt) buyTxt.textContent = t.buy;
    document.querySelectorAll('p').forEach(function(p){
      if(p.textContent.trim() === 'Cantidad' || p.textContent.trim() === 'Quantity')
        p.textContent = t.qty;
    });
    var addCartBtn = document.getElementById('addToCartBtn');
    if(addCartBtn){
      var textNode = Array.prototype.slice.call(addCartBtn.childNodes).filter(function(n){ return n.nodeType === 3; })[0];
      if(textNode) textNode.textContent = '\n    ' + t.addCart + '\n  ';
    }
    var btn = document.getElementById('phnCompraTranslateBtn');
    if(btn) btn.textContent = t.translate;
  }

  function applyVideoLang(lang){
    if(typeof window.PHN_VIDEO_CONTENT === 'undefined') return;
    var vc = window.PHN_VIDEO_CONTENT[lang] || window.PHN_VIDEO_CONTENT.es;
    var secTitle = document.querySelector('.fixed-video-campaign__intro .h0');
    if(secTitle) secTitle.textContent = vc.sectionTitle;
    var secLabel = document.querySelector('.fixed-video-campaign__intro .caption-with-letter-spacing--large span');
    if(secLabel) secLabel.textContent = vc.sectionLabel;
    var desktopLis = document.querySelectorAll('.fixed-video__card-pois > li');
    vc.scenes.forEach(function(scene, i){
      var li = desktopLis[i]; if(!li) return;
      var headings = li.querySelectorAll('.banner__text.caption-with-letter-spacing--large');
      var bodies   = li.querySelectorAll('.rich-text__text.rte.caption');
      if(headings[0]) headings[0].textContent = scene.heading;
      if(bodies[0])   bodies[0].textContent   = scene.body || '';
      if(scene.extra){
        if(headings[1]) headings[1].textContent = scene.extra.heading;
        if(bodies[1])   bodies[1].textContent   = scene.extra.body || '';
      }
    });
    var mobileLis = document.querySelectorAll('.slider-fading__video--mobile .slider-fading__slides > li');
    vc.scenes.forEach(function(scene, i){
      var li = mobileLis[i]; if(!li) return;
      var headings = li.querySelectorAll('.banner__text.caption-with-letter-spacing--large');
      var bodies   = li.querySelectorAll('.rich-text__text.rte.caption');
      if(headings[0]) headings[0].textContent = scene.heading;
      if(bodies[0])   bodies[0].textContent   = scene.body || '';
      if(scene.extra){
        if(headings[1]) headings[1].textContent = scene.extra.heading;
        if(bodies[1])   bodies[1].textContent   = scene.extra.body || '';
      }
    });
  }

  function applyFeaturesLang(lang){
    if(typeof window.PHN_FEATURES === 'undefined') return;
    var items = PHN_FEATURES[lang] || PHN_FEATURES.es;
    if(!items) return;
    var list = document.getElementById('phn-features-list');
    if(!list) return;
    var cards = list.querySelectorAll('.multicolumn-card__info');
    items.forEach(function(item, i){
      var card = cards[i]; if(!card) return;
      var h3 = card.querySelector('h3');
      var p = card.querySelector('p');
      if(h3) h3.textContent = item.title;
      if(p) p.textContent = item.text;
    });
  }

  function toggleLang(){
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyUILang(currentLang);
    applyVideoLang(currentLang);
    applyFeaturesLang(currentLang);
  }

  function injectTranslateButton(){
    var back = document.getElementById('phnBackLink');
    if(!back) return;
    var container = back.parentElement;
    if(!container || document.getElementById('phnCompraTranslateBtn')) return;
    var btn = document.createElement('button');
    btn.id = 'phnCompraTranslateBtn';
    btn.textContent = 'EN';
    btn.title = 'Traducir a inglés / Translate to English';
    btn.style.cssText = [
      'font-size:.82rem', 'font-weight:700', 'padding:5px 13px',
      'border:1.5px solid #d0d0d0', 'border-radius:6px',
      'background:#fff', 'color:#1a1a1a', 'cursor:pointer',
      'transition:background .2s,border-color .2s', 'font-family:inherit',
      'order:0', 'flex-shrink:0'
    ].join(';');
    btn.onmouseover = function(){ this.style.background='#f5f5f5'; this.style.borderColor='#aaa'; };
    btn.onmouseout  = function(){ this.style.background='#fff';    this.style.borderColor='#d0d0d0'; };
    btn.addEventListener('click', toggleLang);
    container.insertBefore(btn, container.firstChild);
    var cart = document.getElementById('phn-cart-link');
    if(cart) cart.style.order = '2';
    back.style.order = '3';
  }

  function loadVideoContentAndInit(){
    if(typeof window.PHN_VIDEO_CONTENT !== 'undefined'){
      applyVideoLang('es');
      return;
    }
    var s = document.createElement('script');
    var base = '../../compra/js/';
    var allScripts = document.querySelectorAll('script[src]');
    for(var i = 0; i < allScripts.length; i++){
      if(allScripts[i].src && allScripts[i].src.indexOf('scripts.js') > -1){
        base = allScripts[i].src.replace(/scripts\.js.*$/, '');
        break;
      }
    }
    s.src = base + 'video-content.js';
    s.onload = function(){ applyVideoLang('es'); };
    document.head.appendChild(s);
  }

  function init(){
    injectTranslateButton();
    loadVideoContentAndInit();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }

  window.__phnCompraToggleLang = toggleLang;
})();

/* ── PHN: slider móvil "Nanotecnología PHN" ──────────────────────────────── */
(function(){
  function safePlay(v){ if(v) try{ var p=v.play(); if(p) p.catch(function(){}); }catch(e){} }
  function safePause(v){ if(v) try{ v.pause(); }catch(e){} }

  function initPHNMobileSlider(){
    var container = document.querySelector('.slider-fading__video--mobile');
    if(!container) return;
    var slides = Array.prototype.slice.call(
      container.querySelectorAll('.slider-fading__slides > li')
    );
    if(!slides.length) return;
    var prevBtn = container.querySelector('.slider-button--prev');
    var nextBtn = container.querySelector('.slider-button--next');
    var current = 0;
    var started = false;

    function pauseAll(){
      slides.forEach(function(s){
        var v = s.querySelector('video');
        if(v) safePause(v);
      });
    }

    function goTo(idx){
      /* Desactivar slide actual */
      slides[current].classList.remove('active');
      var oldVid = slides[current].querySelector('video');
      if(oldVid) safePause(oldVid);
      /* Activar slide nuevo */
      current = ((idx % slides.length) + slides.length) % slides.length;
      slides[current].classList.add('active');
      var newVid = slides[current].querySelector('video');
      if(newVid) safePlay(newVid);
    }

    if(prevBtn) prevBtn.addEventListener('click', function(){ goTo(current - 1); });
    if(nextBtn) nextBtn.addEventListener('click', function(){ goTo(current + 1); });

    /* Soporte swipe táctil */
    var touchStartX = 0;
    container.addEventListener('touchstart', function(e){
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    container.addEventListener('touchend', function(e){
      var dx = e.changedTouches[0].clientX - touchStartX;
      if(Math.abs(dx) > 40){ goTo(dx < 0 ? current + 1 : current - 1); }
    }, { passive: true });

    /* Solo arrancar el primer video cuando la sección sea visible */
    if('IntersectionObserver' in window){
      var obs = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
          if(!started){
            started = true;
            var firstVid = slides[0].querySelector('video');
            if(firstVid) safePlay(firstVid);
          }
        } else {
          pauseAll();
          started = false;
        }
      }, { threshold: 0.2 });
      obs.observe(container);
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initPHNMobileSlider);
  } else {
    initPHNMobileSlider();
  }
})();
