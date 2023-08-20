import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
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
    decorators: [
        StoreDecorator({ loginForm: { username: '123', password: '123' } }),
    ],
};
