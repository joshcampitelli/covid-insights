import { render } from '@testing-library/react';
import SimpleBarChart from './SimpleBarChart';

// Suppress warning for width and height of ReCharts in flex containers (known issue).
jest.spyOn(global.console, 'warn').mockImplementationOnce((message) => {
    if (!message.includes('The width(0) and height(0) of chart')) {
        global.console.warn(message);
    }
});

test('Renders <SimpleBarChart /> component', () => {
    const { container } = render(<SimpleBarChart />);
    expect(container.getElementsByClassName('recharts-responsive-container').length).toBe(1);
});