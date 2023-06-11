import type { Meta, StoryObj } from '@storybook/react';
import LangSwitcher from './LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
    title: 'shared/LangSwitcher',
    component: LangSwitcher,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Default: Story = {
    args: {
        className: 'test',
    },
};
