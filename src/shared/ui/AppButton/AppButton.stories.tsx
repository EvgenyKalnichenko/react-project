import type { Meta, StoryObj } from '@storybook/react';

import AppButton, { ThemeButton } from './AppButton';

const meta: Meta<typeof AppButton> = {
    title: 'shared/AppButton',
    component: AppButton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Default: Story = {
    args: {
        children: 'Text123',
    },
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Text',
    },
};

export const Background: Story = {
    args: {
        theme: ThemeButton.BACKGROUND,
        children: 'Text',
    },
};

export const BackgroundInverted: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: 'Text',
    },
};
