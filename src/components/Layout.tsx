import React, { useState } from "react";
import {
  ListItem,
  List,
  ListItemText,
  Divider,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  makeStyles,
  createStyles,
  CssBaseline,
  ListItemIcon,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Content from "./Content";
import { useStyles } from "../theme";

const drawerWidth = 240;

enum Pages {
  Info = "Info",
  Test = "Test",
  Left = "Left",
  Right = "Right",
}

const Layout = () => {
  const classes = useStyles();

  const [page, setPage] = useState(Pages.Info);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {page}
            {page == Pages.Info && " · Veera Halonen"}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" anchor="left">
        <div style={{ backgroundColor: "black" }}>
          <Card>
            <CardMedia component="img" image={require("../CodeDucks.png")} />
          </Card>
        </div>
        <List>
          {Object.values(Pages).map((text, index) => (
            <ListItem
              button
              key={text}
              selected={text === page}
              onClick={() => {
                setPage(text);
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {page === Pages.Info && (
          <Content
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet."
          />
        )}
        {page === Pages.Test && (
          <Content
            content="Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam."
          />
        )}
      </main>
    </div>
  );
};

export default Layout;
