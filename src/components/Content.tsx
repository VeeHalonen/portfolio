import React from "react";
import { Paper } from "@material-ui/core";
import { Pages } from "../helpers/pages";
import Info from "./content/Info";
import Mandarin from "./content/Mandarin";
import InteractiveStory from "./content/InteractiveStory";
import Projektori from "./content/Projektori";

const Content = ({ page }: any) => {
  if (!page) return null;
  return (
    <>
      <Paper style={{ padding: 50 }}>
        {/* "PAGES" */}
        {page === Pages.Info && <Info />}
        {page === Pages.Projektori && <Projektori />}
        {page === Pages.Mandarin && <Mandarin />}
        {page === Pages.InteractiveStory && <InteractiveStory />}
      </Paper>
    </>
  );
};

export default Content;
