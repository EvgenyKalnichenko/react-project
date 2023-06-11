import type { Meta, StoryObj } from '@storybook/react';

import Sidebar from './Navbar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Navbar',
    component: Sidebar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
    args: {
        className: 'test',
    },
};
