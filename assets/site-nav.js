(function () {
  var s = document.currentScript;
  var src = (s && s.src) || '';
  var base = src.replace(/assets\/site-nav\.js.*$/, '');
  var GITHUB = 'https://github.com/romiluz13/ai-4-kids';

  if (document.body && document.body.getAttribute('data-nav') === 'none') return;

  // One public path. Extra reference pages return home instead of becoming a maze.
  var SITE_PATH = [
    ['presentation/class-handout.html', 'דף עבודה'],
    ['reference/first-prompt-cards.html', 'רעיונות'],
    ['reference/how-to-prompt.html', 'מפרט'],
    ['reference/the-full-journey.html', 'שבעה שלבים'],
    ['reference/what-is-skill-md.html', 'Skills'],
    ['reference/survival-card.html', 'להמשיך בבית'],
    ['reference/choose-your-agent.html', 'בחרו סוכן']
  ];

  function fileOf(p) { return (p || '').split('/').pop(); }
  var cur = fileOf(location.pathname) || 'index.html';
  var total = SITE_PATH.length;

  function findIdx() {
    for (var i = 0; i < SITE_PATH.length; i++) {
      if (fileOf(SITE_PATH[i][0]) === cur) return i;
    }
    return -1;
  }

  var idx = findIdx();
  var stepNum = idx === -1 ? 0 : idx + 1;

  function btn(cls, href, label, hint, external) {
    var ext = external ? ' target="_blank" rel="noopener"' : '';
    var h = external ? href : base + href;
    return '<a class="' + cls + '" href="' + h + '"' + ext + '><small>' + hint + '</small>' + label + '</a>';
  }

  var progressHtml = '';
  if (cur === 'index.html') {
    progressHtml = '<span class="site-nav-progress">ערכת התחלה לילדים</span>';
  } else if (idx !== -1) {
    progressHtml = '<span class="site-nav-progress">מסלול בית · ' + stepNum + '/' + total + '</span>';
  } else {
    progressHtml = '<span class="site-nav-progress"><a href="' + base + 'presentation/class-presentation.html">מצגת</a> · <a href="' + base + 'presentation/class-handout.html">דף עבודה</a></span>';
  }

  var topHtml =
    '<nav class="site-nav" dir="rtl">' +
      '<a class="brand" href="' + base + 'index.html">בונה עם AI</a>' +
      progressHtml +
    '</nav>';

  if (document.body) document.body.insertAdjacentHTML('afterbegin', topHtml);

  var seqHtml = '';

  if (cur === 'index.html') {
    seqHtml =
      '<nav class="seq-nav seq-nav--single" dir="rtl">' +
        btn('next', 'presentation/class-presentation.html', 'מצגת לכיתה', 'התחילו כאן') +
      '</nav>';
  } else if (idx !== -1) {
    seqHtml = '<nav class="seq-nav" dir="rtl">';
    if (idx > 0) {
      seqHtml += btn('prev', SITE_PATH[idx - 1][0], SITE_PATH[idx - 1][1], '⟶ הקודם');
    } else {
      seqHtml += btn('prev', 'index.html', 'בית', '⟶ הקודם');
    }
    if (idx < SITE_PATH.length - 1) {
      seqHtml += btn('next', SITE_PATH[idx + 1][0], SITE_PATH[idx + 1][1], 'הבא ⟵');
    } else {
      seqHtml += btn('next', GITHUB, 'הורידו את המאגר', 'סיימתם! התחילו לבנות ⟵', true);
    }
    seqHtml += '</nav>';
  } else {
    seqHtml =
      '<nav class="seq-nav seq-nav--single" dir="rtl">' +
        btn('prev', 'index.html', 'בית', 'חזרה') +
      '</nav>';
  }

  if (seqHtml && document.body) document.body.insertAdjacentHTML('beforeend', seqHtml);
})();
