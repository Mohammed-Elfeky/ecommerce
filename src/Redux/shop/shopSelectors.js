import {createSelector} from 'reselect'

const shopSelector=(state)=>state.shop

export const collectionsSelctor=createSelector(
    [shopSelector],
    shop=>shop.collections
)

export const collectionsCategorySelector= categoryName=>{
    return createSelector(
        [collectionsSelctor],
        collections=>collections.find(collection=>{
            return collection.routeName === categoryName
        })
    )
}