import { screen, render } from '@testing-library/react';
import StatCardComponent from '../index';

describe('Unit testing for statCard Component', () => {
  it('statCard component shoudl render the name and base_stat values', () => {
    render(<StatCardComponent name="HP" base_stat={50} />);
    expect(screen.getByText('HP')).toBeInTheDocument();
    expect(screen.getByText(50)).toBeInTheDocument();
  });
});
