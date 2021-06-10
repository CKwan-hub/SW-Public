/* @jsx m */
import m from 'mithril';
import '../style/styles.css';

export const Sandbox = () => {
  let fontTesting = '';
  let colorMap = [
    'var(--c1)',
    'var(--c2)',
    'var(--c3)',
    'var(--c4)',
    'var(--c5)',
  ];

  function randomApply() {
    document.body.style.backgroundColor =
      colorMap[Math.floor(Math.random() * colorMap.length)];
    let a = document.querySelector('.textParent');
    let b = a.childNodes;
    if (!b.length) {
      child = <div class='font'>LOADING</div>;
      return;
    }
    for (let i = 0; i < b.length; i++) {
      let child = b[i];
      child.setAttribute('id', '');
      child.classList.remove('glitch');
      child.title = '';
      let diceRoll = 0;
      diceRoll = Math.floor(Math.random() * 10);
      if (diceRoll > 7) {
        child.classList.add('glitch');
        child.setAttribute('id', 'animated');
        let content = child.innerHTML;
        child.title = content;
        return;
      } else if (diceRoll == 2) {
        child.remove();
      }
    }
  }

  return {
    oninit: (vnode) => {
      fontTesting = (
        <div class='textParent'>
          <div class='font'>This</div>
          <div class='font'>is</div>
          <div class='font'>some</div>
          <div class='font'>placeholder</div>
          <div class='font'>text</div>
        </div>
      );
    },
    view: (vnode) => {
      window.setInterval(function () {
        randomApply();
      }, 5000);
      return <div>{fontTesting}</div>;
    },
  };
};
