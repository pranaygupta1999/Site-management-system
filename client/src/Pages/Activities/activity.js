import React from 'react'
import { Card, CardContent, Typography, Grid, Divider } from "@material-ui/core";
export default function (props) {
    return (
        <Grid item xs={12} sm={4} md={3}>
            <Card >
                <CardContent >
                    <Typography variant="h6">{props.activity.name}</Typography>
                    <Typography variant="subtitle2" >Project- {props.activity.project.name}</Typography>
                    <Divider />
                    <Typography variant="subtitle1" >{props.activity.detail}</Typography>
                    <table cellPadding={5} style={{ width: "100%", }}>
                        <tr>
                            <td>Started on</td>
                            <td>{new Date(props.activity.timeFrom).toDateString()}</td>
                        </tr>
                        {
                            props.activity.timeTo &&
                            <tr>
                                <td>Ended on</td>
                                <td>{new Date(props.activity.timeTo).toDateString()}</td>
                            </tr>
                        }


                    </table>

                </CardContent>
            </Card>
        </Grid>

    )
}