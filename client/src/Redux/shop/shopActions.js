import ShopActionTypes from './shopTypes'


export const fetchCollectionsStart = () => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_START
    }
}
export const fetchCollectionsSuccess = (collectionsObj) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsObj
    }
}
export const fetchCollectionsFail = (errorMessage) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAIL,
        payload: errorMessage
    }
}

