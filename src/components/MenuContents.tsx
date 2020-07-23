import React from "react";
import { ListItem, List, ListItemText, ListItemIcon } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Pages } from "../helpers";

const MenuContents = (props: {
  page: Pages;
  onSetPage: (arg0: Pages) => void;
}) => {
  return (
    <List>
      {Object.values(Pages).map((text, index) => (
        <ListItem
          button
          key={text}
          selected={text === props.page}
          onClick={() => {
            props.onSetPage(text);
          }}
        >
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};

export default MenuContents;
