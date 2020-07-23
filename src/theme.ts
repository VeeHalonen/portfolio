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

export const useStyles = makeStyles((theme) =>
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
      root: {
        width: drawerWidth,
        flexShrink: 0,
      },
      paper: {
        background: lightPrimary,
        width: drawerWidth,
        color: "white",
      },
    },
  },
});

export default theme;
