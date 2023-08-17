import type { Meta, StoryObj } from '@storybook/react';

import AppInput from './AppInput';

const meta: Meta<typeof AppInput> = {
    title: 'shared/AppInput',
    component: AppInput,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppInput>;

export const Default: Story = {
    args: {
        placeholder: 'Введите имя',
        value: 'Тестовы текст',
    },
};
