import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../type/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test setUsername', async () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('1234'))).toEqual({ username: '1234' });
    });

    test('test setPassword', async () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('1234'))).toEqual({ password: '1234' });
    });
});
