import React, { Component } from 'react';
import cn from 'classnames'
import { match } from 'react-router';
import { Robot } from '../../Interfaces';
import styles from './style'
import { withStyles, WithStyles, Avatar, Icon, Grid, Container, Typography, Divider } from '@material-ui/core'
import { Email, Phone } from '@material-ui/icons';



interface IAppProps extends WithStyles<typeof styles> {
    match: match<{ id: string }>
    users: Robot[],
    fetchUsers: () => void
}

interface IAppState {
    selectedRobot: Robot | undefined
}

class User extends Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            selectedRobot: undefined
        }
    }
    componentDidMount() {
        const { match: { params }, users } = this.props;
        const { id } = params;
        const user = users.find(u => (u.id).toString() === id);
        this.setState({ selectedRobot: user })
    }
    render() {
        const { selectedRobot } = this.state
        const { userDetailContainer, root, marginTop, userAvatar, textLeft } = this.props.classes
        return (
            <div className={root}>
                {selectedRobot
                    && (
                        <Container fixed>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <div className={cn()}>
                                        {/* <img alt='robots' src={`https://robohash.org/${selectedRobot.id}?size=200x200`} /> */}
                                        <Avatar alt="Remy Sharp" src={`https://robohash.org/${selectedRobot.id}?size=200x200`} className={userAvatar} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div className={cn(marginTop, textLeft)}>
                                        <Typography variant="h3">{selectedRobot.name}</Typography>
                                        <Divider />
                                        <Typography variant="h6"><Email /> {selectedRobot.email}</Typography>
                                        <Typography variant="h6"><Phone />{selectedRobot.phone}</Typography>
                                    </div>
                                    <div className={cn(marginTop, textLeft)}>
                                        <Typography variant="h5">Address:</Typography>
                                        <Divider />
                                        <Typography variant="h6"> {selectedRobot.address.street}{','} {selectedRobot.address.suite}</Typography>
                                        <Typography variant="h6">{selectedRobot.address.city}{'-'}{selectedRobot.address.zipcode}</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    )}
            </div>
        )
    }
}

export default withStyles(styles)(User);