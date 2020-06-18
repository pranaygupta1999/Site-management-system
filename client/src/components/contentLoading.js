import React from "react";
import { Grid } from "@material-ui/core"
import { Skeleton } from "@material-ui/lab";
export default function ContentLoading() {
    return (
        <Grid container spacing={3}>
            <Grid item>
                <Skeleton variant="text" />,
                <Skeleton variant="rect" width={210} height={118} animation="wave" />,
                <Skeleton animation="wave" />
            </Grid>
            <Grid item>
                <Skeleton variant="text" />,
                <Skeleton variant="rect" width={210} height={118} animation="wave" />,
                <Skeleton animation="wave" />
            </Grid>
            <Grid item>
                <Skeleton variant="text" />,
                <Skeleton variant="rect" width={210} height={118} animation="wave" />,
                <Skeleton animation="wave" />
            </Grid>
        </Grid>

    );
}