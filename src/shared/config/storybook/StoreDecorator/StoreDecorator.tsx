import { Story } from '@storybook/react';
import { StoreProvider, StateSchema } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state as StateSchema}>
        <StoryComponent />
    </StoreProvider>
);
