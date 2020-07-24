import React from "react";
import { Typography, Link } from "@material-ui/core";

const Info = () => {
  return (
    <>
      <Typography component="div">
        <Link
          href="https://github.com/VeeHalonen"
          variant="h6"
          underline="none"
        >
          GitHub
        </Link>
      </Typography>
      <Typography component="div">
        <Link
          href="https://opintopolku.fi/koski/opinnot/58ab74d6153d4215a1de6522e4e902ba"
          variant="h6"
          underline="none"
        >
          Koski
        </Link>
      </Typography>
      <Typography component="div">
        <Link
          href="http://www.linkedin.com/in/veera-halonen-504510158"
          variant="h6"
          underline="none"
        >
          LinkedIn
        </Link>
      </Typography>
    </>
  );
};

export default Info;
