import {createSelector} from 'reselect'

const userSelector=(state)=>state.user

export const currentUserSelctor=createSelector(
    [userSelector],
    user=>user.currentUser
)

export const signInErrorSelector=createSelector(
    [userSelector],
    user=>user.signInError
)

export const signUpErrorSelector=createSelector(
    [userSelector],
    user=>user.signUpError
)
