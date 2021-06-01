import React from 'react'
import './CollectionItem.scss'
import MyButton from '../MyButton/MyButton'
import {connect} from 'react-redux'
import {addItem} from '../../Redux/cart/cartActions'
function CollectionItem({item,addItem}) {
    return (
        <div className="CollectionItem">
             <img src={item.imageUrl} alt=""/>
             <div className="info">
                 <div className="name">{item.name}</div>
                 <div className="proce">{item.price}$</div>
             </div>
             <MyButton onClick={()=>{addItem(item)}} inverted content="add to card"/>
        </div>
    )
}

export default connect(null,{addItem})(CollectionItem)
