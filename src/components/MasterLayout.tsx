import React from "react";
import { Hidden } from "@material-ui/core";
import Layout from "./Layout";

const MasterLayout = () => {
  return (
    <>
      <Hidden smUp>
        <Layout mobile />
      </Hidden>
      <Hidden xsDown>
        <Layout mobile={false} />
      </Hidden>
    </>
  );
};

export default MasterLayout;
