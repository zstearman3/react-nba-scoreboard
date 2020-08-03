import React from 'react';
import { shallow, configure } from 'enzyme';
import Game from './components/Game';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<Game />', () => {
  it('renders a game', () => {
    const game = shallow(<Game />);
    expect(game.find('div').length).toEqual(1);
  });
});
