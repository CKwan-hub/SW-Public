import m from 'mithril';
import { Home } from './resources/home';
import './style/404-flicker.css';

(async () => {
  let root = document.querySelector('#app');

  m.route.prefix = '';
  m.route(root, '/', {
    '/': Home,
  });
})();
