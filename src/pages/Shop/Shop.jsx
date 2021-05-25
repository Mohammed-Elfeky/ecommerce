import "./Shop.scss";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import {Route} from 'react-router-dom'
import Collection from '../../components/Collection/Collection'
function Shop({match}) {
  return (
    <div className="Shop">
      <Route exact path={`${match.path}`} component={CollectionOverview}/>
      <Route path={`${match.path}/:categoryId`} component={Collection}/>
    </div>
  );
}

export default Shop;
