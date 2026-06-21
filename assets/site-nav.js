(function () {
  var s = document.currentScript;
  var src = (s && s.src) || '';
  var base = src.replace(/assets\/site-nav\.js.*$/, '');

  // Top jump nav
  var topItems = [
    ['index.html', 'בית'],
    ['reference/the-full-journey.html', 'המסע'],
    ['reference/mentor-levels.html', 'מאפס לגיבור'],
    ['reference/how-to-prompt.html', 'פרומפט'],
    ['reference/find-help.html', 'מחקר'],
    ['reference/choose-your-agent.html', 'סוכנים'],
    ['reference/glossary.html', 'מילון']
  ];

  // Ordered learning path (the "next / next" flow)
  var SEQ = [
    ['presentation/class-presentation.html', 'סקירה — כל הרעיון'],
    ['lessons/0001-ai-is-your-copilot.html', '1 · מה זה סוכן קוד'],
    ['lessons/0002-the-dev-world.html', '2 · קבצים ותיקיות'],
    ['lessons/0003-agent-capabilities.html', '3 · יכולות הסוכן'],
    ['lessons/0004-skills-and-skill-md.html', '4 · Skills'],
    ['lessons/0005-the-build-loop.html', '5 · המסע — 7 שלבים'],
    ['lessons/0006-watch-build-home.html', '6 · הפרויקט הראשון'],
    ['reference/the-full-journey.html', 'המסע המלא'],
    ['reference/mentor-levels.html', 'מאפס לגיבור'],
    ['reference/how-to-prompt.html', 'איך כותבים מפרט'],
    ['reference/find-help.html', 'מחקר, תיעוד וקוד פתוח'],
    ['reference/choose-your-agent.html', 'בחרו סוכן קוד'],
    ['reference/survival-card.html', 'להמשיך בבית']
  ];

  function fileOf(p) { return (p || '').split('/').pop(); }
  var cur = fileOf(location.pathname) || 'index.html';

  function isActive(href) {
    var f = fileOf(href);
    if (f === 'index.html') return /\/index\.html$|\/$/.test(location.pathname);
    if (href.indexOf('lessons/') === 0) return location.pathname.indexOf('/lessons/') !== -1;
    return location.pathname.indexOf(f) !== -1;
  }

  var topLinks = topItems.map(function (it) {
    return '<a href="' + base + it[0] + '"' + (isActive(it[0]) ? ' class="active"' : '') + '>' + it[1] + '</a>';
  }).join('');

  var topHtml =
    '<nav class="site-nav" dir="rtl">' +
      '<a class="brand" href="' + base + 'index.html">בונה עם AI</a>' +
      '<div class="site-nav-links">' + topLinks + '</div>' +
    '</nav>';

  if (document.body) document.body.insertAdjacentHTML('afterbegin', topHtml);

  // Build the sequence (prev/next) footer
  var idx = -1;
  for (var i = 0; i < SEQ.length; i++) { if (fileOf(SEQ[i][0]) === cur) { idx = i; break; } }

  function btn(cls, href, label, hint) {
    return '<a class="' + cls + '" href="' + base + href + '"><small>' + hint + '</small>' + label + '</a>';
  }

  var seqHtml = '';
  if (idx !== -1) {
    seqHtml = '<nav class="seq-nav" dir="rtl">';
    if (idx > 0) seqHtml += btn('prev', SEQ[idx - 1][0], SEQ[idx - 1][1], '⟶ הקודם');
    if (idx < SEQ.length - 1) seqHtml += btn('next', SEQ[idx + 1][0], SEQ[idx + 1][1], 'הבא ⟵');
    else seqHtml += btn('next', 'index.html', 'חזרה לבית', 'סיימתם את המסלול! ⟵');
    seqHtml += '</nav>';
  } else if (cur !== 'index.html') {
    seqHtml = '<nav class="seq-nav" dir="rtl">' +
      btn('next', SEQ[0][0], 'התחילו את המסלול', 'מסלול הלימוד ⟵') + '</nav>';
  }

  if (seqHtml && document.body) document.body.insertAdjacentHTML('beforeend', seqHtml);
})();
