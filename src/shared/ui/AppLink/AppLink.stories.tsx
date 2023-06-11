import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Default: Story = {
    args: {
        children: 'Link default',
    },
};

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Link primary',
    },
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'Link secondary',
    },
};
