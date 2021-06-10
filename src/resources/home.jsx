/* @jsx m */
import m from 'mithril';
import '../style/404-flicker.css';

export const Home = () => {
  let testString = 'Hello World!';

  return {
    view: (vnode) => {
      return (
        <div class='glitch' id='animated' title='Loading'>
          Loading...
        </div>
      );
    },
  };
};
