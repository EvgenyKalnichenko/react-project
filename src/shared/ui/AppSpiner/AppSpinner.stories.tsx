import type { Meta, StoryObj } from '@storybook/react';
import { AppSpinner } from './AppSpinner';

const meta: Meta<typeof AppSpinner> = {
    title: 'shared/AppSpinner',
    component: AppSpinner,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppSpinner>;

export const Default: Story = {
    args: {
        sizeLoader: 3,
    },
};
