import React from "react";
import { Typography, CardMedia, Link } from "@material-ui/core";
import {
  img2,
  img3,
  img4,
  img5,
  img6,
  moosrpg,
} from "../../assets/interactive-story";

const Mandarin = () => {
  const imgStyle = {
    width: "70%",
  };
  return (
    <>
      <Typography paragraph>
        This is an old demo created in 2012 with Java Swing after a related
        course in the university. The project is not currently available on
        GitHub, but I may be able to send the source code upon request. A
        working demo on the other hand can be found as a zip file linked below.
        The app should be cross-platform, though it is now rather old and has
        not been sufficiently tested on different operating systems.
      </Typography>
      <Typography paragraph>
        <Link href={moosrpg} variant="body1" underline="none">
          [Download]
        </Link>
      </Typography>
      <Typography>
        If you do not wish to or are unable to download the full program, I have
        attached a few screenshots below. Apologies for the freehand pixel
        "art". The illustrations were not my main focus at the time.
      </Typography>
      <CardMedia component="img" image={img2} style={imgStyle} />
      <CardMedia component="img" image={img3} style={imgStyle} />
      <CardMedia component="img" image={img4} style={imgStyle} />
      <CardMedia component="img" image={img5} style={imgStyle} />
      <CardMedia component="img" image={img6} style={imgStyle} />
    </>
  );
};

export default Mandarin;
