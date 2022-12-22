import { screen, render, fireEvent } from '@testing-library/react';
import { IPokemon } from '../../../types/pokemon';
import SearchComponent from '../index';
import DataProvider from '../../../contexts/dataProvider';

describe('Unit testing for Search Component', () => {
  const mockState: IPokemon[] = [];
  const setMockState = jest.fn();

  it('input should change the value when user is typing.', () => {
    render(
      <DataProvider>
        <SearchComponent
          setCurrentPokemons={setMockState}
          currentPokemons={mockState}
        />
      </DataProvider>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Pikachu' } });
    expect(input).toHaveDisplayValue('Pikachu');
  });
});
