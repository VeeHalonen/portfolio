import React from "react";
import { Box, Grid, Link, Typography } from "@material-ui/core";

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
          <Typography>Small projects and coding practice.</Typography>
        </Grid>
        <Grid item>
          <Link
            href="https://opintopolku.fi/koski/opinnot/5d444f6718894be3aa4560c5249bb9f8"
            variant="h6"
            underline="none"
            paragraph
          >
            Koski
          </Link>
          <Typography>
            Studies and grades. Appears to be slightly glitchy when it comes to
            showing my master's from 2016. Hard refreshing a few times may help.
          </Typography>
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
