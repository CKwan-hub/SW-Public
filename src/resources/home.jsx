/* @jsx m */
import m from 'mithril';
import { Test } from '../components/test';

export const Home = () => {
  let testString = 'Hello World!';

  return {
    view: (vnode) => {
      return <div title='Loading'>Loading...</div>;
    },
  };
};
