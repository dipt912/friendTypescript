import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox';

interface IAppProps {
    onSearchChange: (val: string) => void,
}

interface IAppState {

}

class NavBar extends Component<IAppProps, IAppState> {

    onSearchChange = (event: any) => {
        this.props.onSearchChange(event.target.value)
    }

    render() {
        return (
            <nav>
                <Link to='/'>
                    <h1 className='f1'>Find Friends</h1>
                </Link>
                <SearchBox searchChange={this.onSearchChange} />
            </nav>
        )
    }
}

export default NavBar;