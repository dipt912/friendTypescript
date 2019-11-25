import React, { Component } from 'react';
import { match } from 'react-router';
import { Robot } from '../../Interfaces';
import Card from '../../components/Card';


interface IAppProps {
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
        return (
            <div>
                {selectedRobot
                    && (<Card id={selectedRobot.id}
                        name={selectedRobot.name}
                        email={selectedRobot.email} />)}
            </div>
        )
    }
}

export default User;