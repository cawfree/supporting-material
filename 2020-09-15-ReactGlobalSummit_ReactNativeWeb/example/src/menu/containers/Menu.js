import {connect} from "react-redux";

import Menu from "../components/Menu";

const onPressFont = (e, navigation) => (dispatch, getState) => Promise
  .resolve()
  .then(() => navigation.push("Font"));

const onPressUri = (e, navigation) => (dispatch, getState) => Promise
  .resolve()
  .then(() => navigation.push("Uri"));

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPressFont: e => dispatch(onPressFont(e, ownProps.navigation)),
  onPressUri: e => dispatch(onPressUri(e, ownProps.navigation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
