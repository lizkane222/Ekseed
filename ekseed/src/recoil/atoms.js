import { atom } from "recoil";

// this is going to create a named export called userState for us ot be able to import in our component files
export const userState = atom({
    key: "userState",
    default: null,
});


export const connectionState = atom({
    key:"connectionState",
    default: null,
})


export const noteState = atom({
    key: "noteState",
    default: null,
});



