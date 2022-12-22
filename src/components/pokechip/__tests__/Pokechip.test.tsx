import { screen, render } from '@testing-library/react';
import PokeChipComponent from '../index';

const renderComponent = (name: string, isFullSize: boolean) => {
  render(<PokeChipComponent name={name} isFullSize={isFullSize} />);
};

describe('Unit testing for PokeChip Component', () => {
  it('Should render the name of the pokemon.', () => {
    renderComponent('Bulbasaur', false);
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
  });

  it('should render the chip in full size.', () => {
    renderComponent('Bulbasaur', true);
    expect(screen.getByTestId('poke-chip')).toHaveClass('name-full-name');
  });

  it('should not render the chip in full size.', () => {
    renderComponent('Bulbasaur', false);
    expect(screen.getByTestId('poke-chip')).not.toHaveClass('name-full-name');
  });
});
