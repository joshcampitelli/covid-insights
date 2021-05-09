import { fireEvent, render, act, screen } from '@testing-library/react';
import App from './App';

// Suppress warning for width and height of ReCharts in flex containers (known issue).
jest.spyOn(global.console, 'warn').mockImplementationOnce((message) => {
    if (!message.includes('The width(0) and height(0) of chart')) {
        global.console.warn(message);
    }
});

test('Renders <App /> component', () => {
    render(<App />);
    const linkElement = screen.getByText(/Covid Insights/i);
    expect(linkElement).toBeInTheDocument();
});

describe('Click Next Button', () => {
    it('On click Next', async () => {
        await act(async () => {
            const { findByText } = render(<App />)
            const nextButton = await findByText('Next');
            const header = await findByText('Cases vs Vaccines');

            expect(header.innerHTML).toContain('Cases vs Vaccines');
            fireEvent.click(nextButton);
            expect(header.innerHTML).toContain('Housing');
        });
    });

    it('On click Prev', async () => {
        await act(async () => {
            const { findByText } = render(<App />)
            const nextButton = await findByText('Prev');
            const header = await findByText('Cases vs Vaccines');

            expect(header.innerHTML).toContain('Cases vs Vaccines');
            fireEvent.click(nextButton);
            expect(header.innerHTML).toContain('Cases vs Vaccines');
        });
    });
})