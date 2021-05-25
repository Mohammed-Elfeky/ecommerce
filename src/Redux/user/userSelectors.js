import {createSelector} from 'reselect'

const userSelector=(state)=>state.user

export const currentUserSelctor=createSelector(
    [userSelector],
    user=>user.currentUser
)