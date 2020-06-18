
import React from 'react';


import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function SimpleSnackbar(props) {

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={props.open}
            autoHideDuration={5000}
            onClose={props.onClose}
            message={props.message}

            action={
                <IconButton size="small" aria-label="close" color="inherit" onClick={props.onClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            }
        >
            
        </Snackbar>
    );
}