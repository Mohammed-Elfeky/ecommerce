import "./CollectionOverview.scss";
import { collectionsSelctorAsArray } from "../../Redux/shop/shopSelectors";
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
  collections: collectionsSelctorAsArray,
});
export default connect(mapStateToProps)(CollectionOverview);
