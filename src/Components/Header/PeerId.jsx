import { Typography } from "@material-ui/core";
import React from "react";

const PeerId = ({PeerId = null}) => {
  
  return <>
  {PeerId && <Typography variant="h6">
    {PeerId}
  </Typography>}
  </>
}

export default PeerId;