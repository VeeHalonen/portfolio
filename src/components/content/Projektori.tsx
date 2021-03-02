import React from "react";
import { Typography, CardMedia, Link, Grid } from "@material-ui/core";
import {
  ss1a,
  ss1b,
  ss2a,
  ss2b,
  ss3a,
  ss3b,
  ss4a,
  ss4b,
  ss4c,
  ss5,
  ss6,
  ss7a,
  ss7b,
  ss7c,
  ss8a,
  ss8b,
  ss9,
  ss10,
  ss11a,
  ss11b,
} from "../../assets/projektori";

const Projektori = () => {
  const imgStyle = {
    width: "90%",
  };
  return (
    <Grid container spacing={5} direction="column">
      <Grid item>
        <Typography paragraph>
          This web app was developed during my two-part traineeship at the
          Tampere University of Applied Sciences in summer and autumn 2020. The
          app was intended to serve as a platform to connect TAMK students
          looking for work or traineeships with projects looking for members. I
          was in charge of the frontend development, which was implemented with
          Next.js and Material-UI with Apollo GraphQL being used to interact
          with the database.
        </Typography>
        <Typography>
          The link to a demo version of the website can be found below, but its
          upkeep and potential further developments are entirely up to TAMK, so
          I have also added some screenshots showcasing the state of the UI at
          the time of my contract expiring, along with some UI components that
          are currently hidden due to missing backend functionality.
        </Typography>
      </Grid>
      <Grid item>
        <Typography paragraph>
          <Link
            target="_blank"
            href="https://projektori-ng-staging.tamk.cloud/"
            variant="h6"
            underline="none"
          >
            Demo App
          </Link>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">Front Page</Typography>
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss1a} style={imgStyle} />
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss1b} style={imgStyle} />
      </Grid>
      <Grid item>
        <Typography variant="h6">Search All Projects</Typography>
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss2a} style={imgStyle} />
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss2b} style={imgStyle} />
      </Grid>
      <Grid item>
        <Typography variant="h6">User's Projects</Typography>
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss3a} style={imgStyle} />
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss3b} style={imgStyle} />
      </Grid>
      <Grid item>
        <Typography variant="h6">Project Creation</Typography>
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss4a} style={imgStyle} />
        <CardMedia component="img" image={ss4b} style={imgStyle} />
        <CardMedia component="img" image={ss4c} style={imgStyle} />
      </Grid>
      <Grid item>
        <Typography variant="h6">User's Enrolments</Typography>
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss5} style={imgStyle} />
      </Grid>
      <Grid item>
        <Typography variant="h6">User Settings and Statistics</Typography>
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss6} style={imgStyle} />
      </Grid>
      <Grid item>
        <Typography variant="h6">About Page and Keyword Cloud</Typography>
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss7a} style={imgStyle} />
        <CardMedia component="img" image={ss7b} style={imgStyle} />
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss7c} style={imgStyle} />
      </Grid>
      <Grid item>
        <Typography variant="h6">Project Page</Typography>
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss8a} style={imgStyle} />
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss8b} style={imgStyle} />
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss9} style={imgStyle} />
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss10} style={imgStyle} />
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss11a} style={imgStyle} />
      </Grid>
      <Grid item>
        <CardMedia component="img" image={ss11b} style={imgStyle} />
      </Grid>
    </Grid>
  );
};

export default Projektori;
