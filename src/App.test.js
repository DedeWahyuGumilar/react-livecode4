import { render, screen } from '@testing-library/react';
import { ShoeRentalReport } from './ShoeRentalReport';


test('renders learn react link', () => {
  render(<ShoeRentalReport />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
