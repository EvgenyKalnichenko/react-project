import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import Sidebar from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
    args: {
        className: 'Text123',
    },
    decorators: [
        StoreDecorator({ loginForm: { username: '123', password: '123' }, user: { authData: { username: '123' } } }),
    ],
};
