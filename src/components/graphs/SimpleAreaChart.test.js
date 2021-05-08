import { render } from '@testing-library/react';
import SimpleAreaChart from './SimpleAreaChart';

// Suppress warning for width and height of ReCharts in flex containers (known issue).
jest.spyOn(global.console, 'warn').mockImplementationOnce((message) => {
    if (!message.includes('The width(0) and height(0) of chart')) {
        global.console.warn(message);
    }
});

test('Renders <SimpleAreaChart /> component', () => {
    const { container } = render(<SimpleAreaChart />);
    expect(container.getElementsByClassName('recharts-responsive-container').length).toBe(1);
});