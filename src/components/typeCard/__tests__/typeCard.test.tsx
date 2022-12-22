import { render, screen } from '@testing-library/react';
import TypeCardComponent from '../index';

describe('Unit testing for typeCard component', () => {
  it('typeCard is rendering the name of the type', () => {
    render(<TypeCardComponent name="fire" />);
    expect(screen.getByText('fire')).toBeInTheDocument();
  });
});
