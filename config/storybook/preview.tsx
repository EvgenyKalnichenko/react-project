import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import '../../src/app/styles/index.scss';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        themes: {
            default: Theme.LIGHT,
            list: [
                {
                    name: Theme.LIGHT,
                    class: Theme.LIGHT,
                },
                {
                    name: Theme.DARK,
                    class: Theme.DARK,
                },
            ],
        },
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <div className="app" style={{ margin: '1em', padding: '1em' }}>
                    <Story />
                </div>
            </BrowserRouter>
        ),
    ],
};

export default preview;
