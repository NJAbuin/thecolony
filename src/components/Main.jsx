import React from "react";
import { connect } from "react-redux";

function Main(props) {
  return <div>holi</div>;
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Main);
