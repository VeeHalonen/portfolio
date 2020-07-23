import React, { Component } from "react";
import { Paper, Typography } from "@material-ui/core";

const Content = ({ content }: any) => {
  if (!content) return null;
  return (
    <React.Fragment>
      <Paper style={{ padding: 50 }}>
        <Typography>{content}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default Content;
