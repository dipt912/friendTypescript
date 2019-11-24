import React, { Component } from 'react';
import CardList from '../../components/CardList';
import SearchBox from '../../components/SearchBox';
import Scroll from '../../components/Scroll';
import './App.css';
import { Robot } from '../../Interfaces';

interface IAppProps {
  onFetchUser:() => void,
  onSearchChange:(val:string) => void,
  searchfield:string,
  robots: Robot[],
  isPending:boolean,
  error:string
}

interface IAppState {

}

class App extends Component<IAppProps, IAppState> {

  componentDidMount() {
    this.props.onFetchUser()
  }

  onSearchChange = (event:any) => {
    this.props.onSearchChange(event.target.value)
  }

  render() {
    const { searchfield, robots } = this.props;
    const filteredRobots = robots && robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Find Friends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;