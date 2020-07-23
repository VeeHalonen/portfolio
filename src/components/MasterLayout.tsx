import React, { useState } from "react";
import {
  ListItem,
  List,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  ListItemIcon,
  Card,
  CardMedia,
  Hidden,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Content from "./Content";
import { Pages } from "../helpers";
import Layout from "./Layout";

const MasterLayout = () => {
  const [page, setPage] = useState(Pages.Info);

  return (
    <React.Fragment>
      <Hidden smUp>
        <Layout mobile />
      </Hidden>
      <Hidden smDown>
        <Layout mobile={false} />
      </Hidden>
    </React.Fragment>
  );
};

export default MasterLayout;
