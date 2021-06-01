import { connect } from "react-redux";
import withSpinnerHoc from "../withSpinnerHoc/withSpinnerHoc";
import { isFetchingSelector } from "../../Redux/shop/shopSelectors";
import { createStructuredSelector } from "reselect";
import CollectionOverview from "./CollectionOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: isFetchingSelector,
});

const CollectionOverviewWithContainer = connect(mapStateToProps)(
  withSpinnerHoc(CollectionOverview)
);
export default CollectionOverviewWithContainer;


