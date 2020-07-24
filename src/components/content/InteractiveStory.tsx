import React from "react";
import { Typography, Card, CardMedia, Link } from "@material-ui/core";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
} from "../../assets/interactive-story";

const Mandarin = () => {
  return (
    <>
      <Typography paragraph>
        This is an old demo created in 2012 with Java Swing after a related
        course in the university. The project is not currently available on
        GitHub, but I may be able to send the source code upon request. The
        working demo on the other hand can be found on the archived download
        page linked below. The app should be cross-platform, though it has not
        been sufficiently tested on different operating systems. The download
        page is in Finnish, but the game itself is in English.
      </Typography>
      <Typography paragraph>
        <Link
          href="https://home.tamk.fi/~mfveha/moosrpg/rpg21d213d.html"
          variant="body1"
          underline="none"
        >
          [Download Page]
        </Link>
      </Typography>
      <Typography>
        If you do not wish to download the full program, I have attached a few
        screenshots below. I apologize for the freehand pixel "art". The
        illustrations were not my main focus at the time.
      </Typography>
      <CardMedia component="img" image={img2} />
      <CardMedia component="img" image={img3} />
      <CardMedia component="img" image={img4} />
      <CardMedia component="img" image={img5} />
      <CardMedia component="img" image={img6} />
    </>
  );
};

export default Mandarin;
