import { atom } from "recoil";

// this is going to create a named export called userState for us ot be able to import in our component files
export const userState = atom({
    key: "userState",
    default: null,
});



export const noteState = atom({
    key: "noteState",
    default: null,
});


export const noteContainerState = atom ({
    key: 'noteContainerState',
    default: [],
});


export const currentUserState = atom({
    key: 'currentUserUid',
    default: localStorage.getItem("uid")
})


export const connectionState = atom(
    {
    key:"preferredName",
    default: "",
    },
        {
        key:"firstName",
        default: "",
    },
        {
        key:"lastName",
        default: "",
    },
        {
        key:"network",
        default: "",
    },
        {
        key:"company",
        default: "",
    },
        {
        key:"dateReview",
        default: "",
    },
        {
        key:"profilePhoto",
        default: "",
    },
        {
        key:"profilePhoto",
        default: "",
    },
    //     {
    //     key:"connectionState",
    //     default: "",
    // },
    //     {
    //     key:"connectionState",
    //     default: "",
    // },
    //     {
    //     key:"connectionState",
    //     default: "",
    // },
)

// : preferredName
// : firstName
// : lastName
// : network
// : company
// : dateReview
// profilePhoto
// : noteTag
// : noteContent
// : noteReviewed
// : noteBookmark
// : notePrivacy
// : noteTimestamp
// : cellPhoneOne
// : cellPhoneTwo
// : email
// : workName
// : workPhone
// : workEmail
// : workAddress
// : moreContact

//  localStorage.getItem("uid")
//  const currentUser = localStorage.getItem("uid")
