import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavBar/MainNavbar";
import MainSidebar from "../components/layout/MainSideBar/MainSideBar";
import MainFooter from "../components/layout/MainFooter";

const DefaultLayout = ({ children, noNavbar, noFooter }) => {
  const [userId, setUserId] = useState(null);

  const handleUserLogin = id => {
    setUserId(id);
  }

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { handleUserLogin: handleUserLogin })
  );

  return (
    <Container fluid>
      <Row>
        <MainSidebar userId={userId} />
        <Col
          className="main-content p-0"
          lg={{ size: 10, offset: 2 }}
          md={{ size: 9, offset: 3 }}
          sm="12"
          tag="main"
        >
          {!noNavbar && <MainNavbar />}
            {childrenWithProps}
          {!noFooter && <MainFooter />}
        </Col>
      </Row>
    </Container>
  )
 };

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;