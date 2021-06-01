import { connect } from "react-redux";
import withSpinnerHoc from "../withSpinnerHoc/withSpinnerHoc";
import { isCollectionsLoadedSelector } from "../../Redux/shop/shopSelectors";
import { createStructuredSelector } from "reselect";
import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
  isLoading: (state)=>!isCollectionsLoadedSelector(state),
});

const CollectionWithContainer = connect(mapStateToProps)(
  withSpinnerHoc(Collection)
);

export default CollectionWithContainer;
