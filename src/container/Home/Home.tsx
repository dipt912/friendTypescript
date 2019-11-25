import React, { Component } from 'react';
import CardList from '../../components/CardList';
import Scroll from '../../components/Scroll';
import { Robot } from '../../Interfaces';

interface IAppProps {
    searchfield: string,
    robots: Robot[],
    isPending: boolean,
    error: string,
    fetchUsers: () => void
}

interface IAppState {

}

class Home extends Component<IAppProps, IAppState> {
    componentDidMount() {
        this.props.fetchUsers();
    }
    render() {
        const { searchfield, robots } = this.props;
        const filteredRobots = robots && robots.filter((robot: Robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            !filteredRobots.length ?
                <h1>Loading</h1> :
                (<Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>)
        )
    }
}

export default Home;