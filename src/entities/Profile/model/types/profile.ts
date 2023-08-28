import { Country, Currency, UnionUserRole } from 'shared/const/common';

export interface Profile {
    firstName: string,
    lastName: string,
    age: number,
    currency: Currency,
    country: Country,
    city: string,
    role: UnionUserRole,
    avatar: string
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}