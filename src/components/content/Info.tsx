import React from "react";
import { Grid, Link } from "@material-ui/core";

const Info = () => {
  return (
    <>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Link
            href="https://github.com/VeeHalonen"
            variant="h6"
            underline="none"
            paragraph
          >
            GitHub
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://opintopolku.fi/koski/opinnot/58ab74d6153d4215a1de6522e4e902ba"
            variant="h6"
            underline="none"
            paragraph
          >
            Koski
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="http://www.linkedin.com/in/veera-halonen-504510158"
            variant="h6"
            underline="none"
          >
            LinkedIn
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Info;
