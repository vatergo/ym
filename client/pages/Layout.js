import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

class Layout extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                
            </div>
        );
    }
}

export default withStyles(styles)(Layout);