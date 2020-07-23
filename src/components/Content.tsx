import React, { Component } from "react";
import { Paper, Typography } from "@material-ui/core";
import { Pages } from "../helpers";

const Content = ({ page }: any) => {
  if (!page) return null;

  return (
    <React.Fragment>
      <Paper style={{ padding: 50 }}>
        <Typography>
          {page === Pages.Info &&
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus \
          dolor purus non enim praesent elementum facilisis leo vel. Risus at \
          ultrices mi tempus imperdiet."}
          {page === Pages.Test &&
            "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est \
          ullamcorper eget nulla facilisi etiam dignissim diam."}
        </Typography>
      </Paper>
    </React.Fragment>
  );
};

export default Content;
