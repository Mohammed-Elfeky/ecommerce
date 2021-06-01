import {createSelector} from 'reselect'

const shopSelector=(state)=>state.shop

export const collectionsSelctor=createSelector(
    [shopSelector],
    shop=>shop.collections
)

export const collectionsSelctorAsArray=createSelector(
    [collectionsSelctor],
    collections=> collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const singleCollectionSelector= singleCollectionName=>{
    return createSelector(
        [collectionsSelctor],
        collections=>collections ? collections[singleCollectionName] : null
    )
}

export const isFetchingSelector=createSelector(
    [shopSelector],
    shop=>shop.isFetching
)

export const isCollectionsLoadedSelector =createSelector(
    [shopSelector],
    shop=>!!shop.collections
)
