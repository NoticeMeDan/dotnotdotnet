import React, {useEffect, useState} from 'react';
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import getData from '../resources/AppResources';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

const App = ({ classes, user: [user, setUser] }) => {
    const [data, setData] = useState();

    useEffect(() => {
        getData().then(result => setData(result))
    }, []);

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                    {user.name}
                </Typography>
                {JSON.stringify(data)}
            </Paper>
        </div>
    );
};

export default withStyles(styles)(App);
