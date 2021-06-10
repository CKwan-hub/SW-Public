import m from 'mithril';
import { Home } from './resources/home';
import { Sandbox } from './resources/sandbox';

(async () => {
  let root = document.querySelector('#app');

  m.route.prefix = '';
  m.route(root, '/', {
    '/': Home,
    '/debug': Sandbox,
  });
})();
