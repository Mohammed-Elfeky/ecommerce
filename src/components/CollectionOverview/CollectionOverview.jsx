import "./CollectionOverview.scss";
import { collectionsSelctor } from "../../Redux/shop/shopSelectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from '../CollectionPreview/CollectionPreview'
function CollectionOverview({ collections }) {
  return (
    <div className="CollectionOverview">
      {collections.map((shopCategory) => {
        return (
          <CollectionPreview
            key={shopCategory.id}
            shopCategory={shopCategory}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: collectionsSelctor,
});
export default connect(mapStateToProps)(CollectionOverview);
