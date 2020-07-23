import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  ListItemIcon,
  Card,
  CardMedia,
} from "@material-ui/core";
import Content from "./Content";
import { getMobileStyles, getDesktopStyles } from "../theme";
import { Pages } from "../helpers";
import MenuContents from "./MenuContents";

const Layout = (props: { mobile: Boolean }) => {
  const classes = props.mobile ? getMobileStyles() : getDesktopStyles();

  const [page, setPage] = useState(Pages.Info);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* KESKEN - button to open navbar */}
          <Typography variant="h6" noWrap style={{ marginLeft: 30 }}>
            {page !== Pages.Info && page}
            {page === Pages.Info && "Veera Halonen"}
          </Typography>
        </Toolbar>
      </AppBar>

      {!props.mobile && (
        <Drawer
          variant="permanent"
          anchor="left"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div>
            <Card>
              <CardMedia component="img" image={require("../CodeDucks.png")} />
            </Card>
          </div>
          <MenuContents
            page={page}
            onSetPage={(newPage) => {
              setPage(newPage);
            }}
          />
        </Drawer>
      )}
      {props.mobile && (
        <Drawer variant="permanent" anchor="top" className={classes.drawer}>
          <MenuContents
            page={page}
            onSetPage={(newPage) => {
              setPage(newPage);
            }}
          />
        </Drawer>
      )}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Content page={page} />
      </main>
    </div>
  );
};

export default Layout;
