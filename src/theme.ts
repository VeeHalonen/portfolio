import {
  createMuiTheme,
  makeStyles,
  createStyles,
} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const primary = "#212B30";
const bg = "#eceff1";
export const lightPrimary = "#90a4ae";
const drawerWidth = 240;

export const getDesktopStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
  })
);

export const getMobileStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
    },
  })
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
      contrastText: "white",
    },
    secondary: purple,

    background: {
      default: bg,
    },
    type: "light",
  },
  typography: {},
  overrides: {
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: primary,
          color: "white",
          "&:hover": {
            backgroundColor: primary,
          },
        },
      },
      // button: {
      //   "&:hover": {
      //     backgroundColor: "#78909c",
      //   },
      // },
    },
    MuiDrawer: {
      paper: {
        background: lightPrimary,
        color: "white",
      },
    },
  },
});

export default theme;
