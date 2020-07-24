import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Paper,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Content from "./Content";
import { getMobileStyles, getDesktopStyles } from "../theme";
import { Pages } from "../helpers/pages";
import MenuContents from "./MenuContents";

const Layout = (props: { mobile: Boolean }) => {
  const classes = props.mobile ? getMobileStyles() : getDesktopStyles();

  const [page, setPage] = useState(Pages.Info);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    window.scrollTo(0, 0);
  };

  const handlePageChange = (newPage: {
    menuTitle: string;
    pageTitle: string;
  }) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.root}>
      {/* Top nav */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* Mobile navbar button */}
          {props.mobile && (
            <IconButton
              edge="start"
              style={{ marginRight: 10 }}
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap style={{ marginLeft: 30 }}>
            {page.pageTitle}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Desktop side menu */}
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
              <CardMedia
                component="img"
                image={require("../assets/CodeDucks.png")}
              />
            </Card>
          </div>
          <MenuContents
            page={page}
            onSetPage={(newPage) => {
              handlePageChange(newPage);
            }}
          />
        </Drawer>
      )}

      <Grid container direction="column">
        <div className={classes.toolbar} />

        {/* Mobile menu */}
        {props.mobile && mobileMenuOpen && (
          <Grid item>
            <Paper style={{ margin: 0 }}>
              <MenuContents
                page={page}
                onSetPage={(newPage) => {
                  handlePageChange(newPage);
                }}
              />
            </Paper>
          </Grid>
        )}

        {/* Content */}
        <Grid item>
          <main className={classes.content}>
            <Content page={page} />
          </main>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
