import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";

const Info = () => {
  return (
    <>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h6" paragraph>
            Links
          </Typography>
        </Grid>
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
            href="https://opintopolku.fi/koski/opinnot/8a186319ea5c48bd95236be7e1a6cdfb"
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
