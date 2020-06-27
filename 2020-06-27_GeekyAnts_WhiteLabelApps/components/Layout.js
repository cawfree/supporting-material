import React from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faGithub} from "@fortawesome/free-brands-svg-icons";

const Layout = ({style, children}) => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      ...style,
    }}
  >
    {children}
    <div
      style={{
        position: "absolute",
        bottom: "1vh",
        right: "1vh",
        fontSize: "4vh",
      }}
    >
      {'by cawfree'}
      <FontAwesomeIcon style={{marginLeft: '1vw' }} icon={faGithub} />
      <FontAwesomeIcon style={{marginLeft: '1vw' }} icon={faTwitter} />
    </div>
  </div>
);

Layout.propTypes = {
  style: PropTypes.shape({}),
};

Layout.defaultProps = {
  style: {},
};

export default Layout;
