import { screen, render, waitFor } from '@testing-library/react';
import ItemComponent from '../index';

const renderComponent = () => {
  const name = 'Pikachu';
  const url = 'https://pokeapi.co/api/v2/pokemon/35/';
  const index = 0;
  const mockHandler = jest.fn();
  render(
    <ItemComponent
      name={name}
      url={url}
      index={index}
      handlerClick={mockHandler}
    />
  );
};

describe('Unit testing for item component', () => {
  it('Pokeball image should be render when the pokemon is loading', () => {
    renderComponent();
    expect(screen.getByRole('img')).toHaveClass('pokeball');
  });

  it('Pokemon should be render when already load the data', async () => {
    renderComponent();

    await waitFor(
      () => {
        const element = screen.getByText('Pikachu');
        expect(element).toBeInTheDocument();
      },
      {
        timeout: 6000,
      }
    );
  }, 6000);
});
