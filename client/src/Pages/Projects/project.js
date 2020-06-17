import React from 'react'
import { Card, CardContent, Typography, Grid, Divider } from "@material-ui/core";
export default function (props) {
    return (
        <Grid item xs={12} sm={4} md={3} lg="auto">
            <Card >
                <CardContent >
                    <Typography variant="h6">{props.project.name}</Typography>
                    <Divider />
                    <table cellPadding={5} style={{ width: "100%", }}>
                        <tr>
                            <td>Address</td>
                            <td>{props.project.address}</td>
                        </tr>
                        <tr>
                            <td>Started on</td>
                            <td>{new Date(props.project.startDate).toDateString()}</td>
                        </tr>
                        {
                            props.project.completionDate &&
                            <tr>
                                <td>Ended on</td>
                                <td>{new Date(props.project.completionDate).toDateString()}</td>
                            </tr>
                        }
                        <tr>
                            <td>Expected completion</td>
                            <td>{new Date(props.project.expectedCompletionDate).toDateString()}</td>
                        </tr>

                    </table>

                </CardContent>
            </Card>
        </Grid>
    )
}