import head from 'reveal.js/lib/js/head.min';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import hljs from 'reveal.js/plugin/highlight/highlight';
import notes from 'reveal.js/plugin/notes/notes';


function slides() {
  const context = require.context('../slides', true, /\.md$/);
  const files = context.keys().sort();

  files.forEach(function(md) {
    let slide = document.createElement('section');
    slide.setAttribute('data-markdown', '');
    slide.setAttribute('data-separator', '^=====$');
    slide.setAttribute('data-separator-vertical', '^\n---\n');
    slide.setAttribute('data-separator-notes', '^Note:');

    let template = document.createElement('script');
    template.setAttribute('type', 'text/template');

    template.appendChild(document.createTextNode(context(md)));
    slide.appendChild(template);

    document.getElementsByClassName('slides')[0].appendChild(slide);
  });
};

slides();

Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: 'fade',

  dependencies: [] // we manually load them below

});

// Plugins
RevealMarkdown.initialize();
hljs.initHighlightingOnLoad();
