import { render } from '@testing-library/react';
import SimpleLineChart from './SimpleLineChart';

// Suppress warning for width and height of ReCharts in flex containers (known issue).
jest.spyOn(global.console, 'warn').mockImplementationOnce((message) => {
    if (!message.includes('The width(0) and height(0) of chart')) {
        global.console.warn(message);
    }
});

test('Renders <SimpleLineChart /> component', () => {
    const { container } = render(<SimpleLineChart />);
    expect(container.getElementsByClassName('recharts-responsive-container').length).toBe(1);
});