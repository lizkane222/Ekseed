import { selector } from 'recoil';

import { userState, currentUserState } from './atoms';

export const loggedInState = selector({
    key: "loggedInState",
    get: ({ get }) => {
        const user = get(userState);
        if (user) return true;
        return false;
    },
});

// export const getUserIdState = selector({
//     key: "getUserIdState",
//     get: ({ get }) => {
//         const userId = get(userState);
//         if (user) return user._id;
//         return false
//     }
// })

export const getCurrentUserState = selector({
    key: "getCurrentUserState",
    get:({ get }) => {
        const userUid = get(currentUserState);
    }   
})

// localStorage.getItem("uid")
// const currentUser = localStorage.getItem("uid")
