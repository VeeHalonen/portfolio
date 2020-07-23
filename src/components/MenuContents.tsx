import React from "react";
import { ListItem, List, ListItemText, ListItemIcon } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import CodeIcon from "@material-ui/icons/Code";
import { Page, Pages } from "../helpers/pages";

const MenuContents = (props: {
  page: Page;
  onSetPage: (arg0: any) => void;
}) => {
  return (
    <List>
      {Object.values(Pages).map((page) => (
        <ListItem
          button
          key={page.menuTitle}
          selected={page.menuTitle === props.page.menuTitle}
          onClick={() => {
            props.onSetPage(page);
          }}
        >
          <ListItemIcon>
            {page.menuTitle === Pages.Info.menuTitle ? (
              <PersonIcon />
            ) : (
              <CodeIcon />
            )}
          </ListItemIcon>
          <ListItemText primary={page.menuTitle} />
        </ListItem>
      ))}
    </List>
  );
};

export default MenuContents;
