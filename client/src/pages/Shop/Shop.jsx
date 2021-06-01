import { useEffect } from "react";
import "./Shop.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../Redux/shop/shopActions";
import CollectionWithContainer from '../../components/Collection/CollectionWithContainer'
import CollectionOverviewWithContainer from '../../components/CollectionOverview/CollectionOverviewWithContainer'

function Shop({ match, fetchCollectionsStart }) {
  useEffect(() => {
    fetchCollectionsStart();
  }, []);

  return (
    <div className="Shop">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewWithContainer}
      />
      <Route
        path={`${match.path}/:categoryId`}
        component={CollectionWithContainer}
      />
    </div>
  );
}

export default connect(null, { fetchCollectionsStart })(Shop);
