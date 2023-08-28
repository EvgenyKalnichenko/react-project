export {
    Profile, ProfileSchema,
} from './model/types/profile';

export {
    profileReducer, profileActions,
} from './slice/profileSlice';

export {
    fetchProfileData,
} from './model/services/fetchProfileData/fetchProfileData';