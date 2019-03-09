import React from "react"

import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
export default props => <Grid item xs={12} style={{ textAlign: "left" }}>
    <Typography>
        <span style={{ color: "#3f51b5" }}>
            {props.header}
        </span>
        <span>
            :  {props.detail}
        </span>
    </Typography>
</Grid>