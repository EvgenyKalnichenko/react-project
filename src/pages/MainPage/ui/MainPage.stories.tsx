import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './MainPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/MainPage',
    component: AboutPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Default: Story = {
    args: {
        children: 'MainPage default',
    },
};
