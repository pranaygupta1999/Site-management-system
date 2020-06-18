import React from "react";
import { Card, CardContent, Typography, Grid, Divider } from "@material-ui/core";

export default function ProjectsOverview(props) {
    return (
        <React.Fragment>
            <Typography variant="h5">Projects Overview</Typography>
            <Divider />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} >
                    <Card>
                        <CardContent>
                            <Typography variant="h6" >Total Projects</Typography>
                            <Typography className="text-center" variant="h1">{props.totalProjectsCount}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Card>
                        <CardContent>
                            <Typography variant="h6" >Active Projects</Typography>
                            <Typography className="text-center" variant="h1">{props.activeProjectsCount}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Card>
                        <CardContent>
                            <Typography variant="h6" >Completed Projects</Typography>
                            <Typography className="text-center" variant="h1">{props.completedProjectsCount}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}