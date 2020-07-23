import React from "react";
import { Typography, Card, CardMedia } from "@material-ui/core";
import { img1 } from "../../assets/interactive-story";

const Mandarin = () => {
  return (
    <>
      <Typography paragraph>
        This demo is an old project from 2012 created with Java Swing. I had had
        my first graphical UI programming course and was eager to try it for a
        personal project. It is not available on GitHub and likely will never
        be. I will consider sharing the code on a case-by-case basis. The full
        demo can be found here (original page, in Finnish):
        https://home.tamk.fi/~mfveha/moosrpg/rpg21d213d.html. To give you a
        general idea, here is a short introduction. [Screenshots and
        description]
      </Typography>
      <Typography>
        An old demo used to practice Java Swing after a related course in the
        university. The download page is in Finnish, but the game itself is in
        English. I will not be adding this to GitHub, but I can send the source
        code upon request.
      </Typography>
      <CardMedia component="img" image={img1} />
    </>
  );
};

export default Mandarin;
