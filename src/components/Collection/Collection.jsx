import React from 'react'
import './Collection.scss'
import {collectionsCategorySelector} from '../../Redux/shop/shopSelectors'
import {connect} from 'react-redux'
import CollectionItem from '../CollectionItem/CollectionItem'
function Collection({category}) {
    console.log(category)
    return (
        <div className="Collection">
            <h2>
                {category.title}
            </h2>
            <div className="itemsContainer">
                {
                    category.items.map(categoryItem=>{
                        return <CollectionItem key={categoryItem.id} item={categoryItem}/>
                    })
                }
            </div>
        </div>
    )
}
const mapStateToProps=(state,ownProps)=>{
    const categoryNameCommingFromRoute=ownProps.match.params.categoryId
    return{
        category:collectionsCategorySelector(categoryNameCommingFromRoute)(state)
    }
}
export default connect(mapStateToProps)(Collection)
