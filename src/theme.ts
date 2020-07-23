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
    // For mobile only
    appBarShift: {},
    menuButton: {},
    hide: {},
    drawerHeader: {},
    contentShift: {},
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
    // primary: blueGrey,
    primary: {
      main: primary,
      contrastText: "white",
    },
    secondary: purple,

    background: {
      // default: "#303030",
      // default: "#D8BB9A",
      // default: "#FFFAF0",
      default: bg,
    },
    type: "light",
  },
  typography: {
    h4: {
      marginBottom: 20,
      marginTop: 20,
      //fontWeight: "bold",
    },
  },
  overrides: {
    MuiTableRow: {
      head: {
        backgroundColor: "#212121",
      },
    },
    MuiTableCell: {
      head: {
        color: "#fafafa",
      },
    },
    MuiTableSortLabel: {
      root: {
        color: "#fafafa !important",
        opacity: 1,
      },
      icon: {
        color: "#999999 !important",
      },
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "inherit",
        },
      },
    },
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
        // width: drawerWidth,
        color: "white",
      },
    },
  },
});

export default theme;
