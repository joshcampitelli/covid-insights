import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Renders <Header /> component', () => {
    render(<Header item='test item' description='test description' />);
    const title = screen.getByText(/Covid Insights/i);
    const item = screen.getByText(/test item/i);
    const description = screen.getByText(/test description/i);

    expect(title).toBeInTheDocument();
    expect(item).toBeInTheDocument();
    expect(description).toBeInTheDocument();
});