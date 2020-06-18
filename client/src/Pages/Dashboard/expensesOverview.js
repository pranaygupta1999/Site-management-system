import React from "react";
import Chart from "../../components/chart"
import { Card, CardContent, Typography, Grid, Divider } from "@material-ui/core";

function createArrayCopy(arr) {
    return arr.map((el) => { return { ...el } });
}
export default function ExpensesOverview(props) {
    var data = createArrayCopy(props.data);
    data.map((expense) => {
        expense.date = expense.date.split('T')[0];
        return expense;
    });
    var aggregatedData = createArrayCopy(data);
    for (let i = 1; i < aggregatedData.length; i++) {
        aggregatedData[i].amount += aggregatedData[i - 1].amount;
    }
    console.log(data);
    console.log(aggregatedData);
    return (
        <React.Fragment>
            <Typography variant="h5">Expenses Overview</Typography>
            <Divider />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Date wise</Typography>
                            <Chart data={data} xkey="date" ykey="amount" />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Aggregated </Typography>
                            <Chart data={aggregatedData} xkey="date" ykey="amount" />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}