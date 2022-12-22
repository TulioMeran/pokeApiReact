import { screen, render, waitFor } from '@testing-library/react';
import PokemonListComponent from '../index';

const renderComponent = () => {
  const mockFunction = jest.fn();
  render(
    <PokemonListComponent
      currentPokemons={[]}
      setCurrentPokemons={mockFunction}
      handlerSelectedItem={mockFunction}
    />
  );
};

describe('Unit testing for PokemonList', () => {
  it('Should render the loading image when the component is load', () => {
    renderComponent();

    expect(screen.getByRole('img')).toHaveClass('pokeballLoading');
  });

  it('Should render the No pokemon found label when the component is loading', async () => {
    renderComponent();

    const element = await screen.findByText('No pokemon found');
    expect(element).toBeInTheDocument();
  });
});
