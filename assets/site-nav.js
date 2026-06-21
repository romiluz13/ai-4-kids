(function () {
  var s = document.currentScript;
  var src = (s && s.src) || '';
  var base = src.replace(/assets\/site-nav\.js.*$/, '');

  var items = [
    ['index.html', 'בית'],
    ['reference/the-full-journey.html', 'המסע'],
    ['reference/mentor-levels.html', 'מאפס לגיבור'],
    ['reference/how-to-prompt.html', 'פרומפט'],
    ['reference/find-help.html', 'מחקר'],
    ['reference/choose-your-agent.html', 'סוכנים'],
    ['lessons/0001-ai-is-your-copilot.html', 'שיעורים'],
    ['reference/glossary.html', 'מילון']
  ];

  var path = location.pathname;
  function file(href) { return href.split('/').pop(); }
  function isActive(href) {
    var f = file(href);
    if (f === 'index.html') return /\/index\.html$|\/$/.test(path);
    if (href.indexOf('lessons/') === 0) return path.indexOf('/lessons/') !== -1;
    return path.indexOf(f) !== -1;
  }

  var links = items.map(function (it) {
    return '<a href="' + base + it[0] + '"' + (isActive(it[0]) ? ' class="active"' : '') + '>' + it[1] + '</a>';
  }).join('');

  var html =
    '<nav class="site-nav">' +
      '<a class="brand" href="' + base + 'index.html">בונה עם AI</a>' +
      '<div class="site-nav-links">' + links + '</div>' +
    '</nav>';

  if (document.body) document.body.insertAdjacentHTML('afterbegin', html);
})();
