import React from 'react';
import { Fab, makeStyles } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
}));
export default function AddFab(props) {
    const classes = useStyle();
    return (
        <Fab color="primary" aria-label="add" className={classes.fab}>
            <AddIcon />
        </Fab>
    );
}