import {createSelector} from 'reselect'

const directorySelector=(state)=>state.directory

export const sectionsSelctor=createSelector(
    [directorySelector],
    directory=>directory.sections
)