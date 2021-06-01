import MenuItem from "../Menu-item/Menu-item";
import "./Directory.scss";
import { connect } from "react-redux";
import { sectionsSelctor } from "../../Redux/directory/directorySelectors";
import { createStructuredSelector } from "reselect";
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem key={section.id} section={section} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: sectionsSelctor,
});
export default connect(mapStateToProps)(Directory);
