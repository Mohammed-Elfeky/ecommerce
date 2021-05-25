import React from "react";
import CollectionItem from '../CollectionItem/CollectionItem'
import './CollectionPreview.scss'
function CollectionPreview({ shopCategory }) {
  return (
    <div className="CollectionPreview">
      <div className="container">
        <h2>{shopCategory.title}</h2>
        <div className="showCollection">
            {
                shopCategory.items.slice(0,4).map(item=>{
                    return <CollectionItem key={item.id} item={item} id={item.id}/>
                })
            }
        </div>
      </div>
    </div>
  );
}

export default CollectionPreview;
