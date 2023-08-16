import { CounterSchema } from 'entities/Counter/model/type/CounterSchema';
import { UserSchema } from 'entities/User';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
