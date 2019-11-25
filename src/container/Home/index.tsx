import { connect } from 'react-redux';
import { Robot } from '../../Interfaces';
import Home from './Home'
import { RootState } from '../../Reducers';
import { fetchUsers } from '../../Actions/actions';


interface IStateToProps {
    searchfield: string,
    robots : Robot[],
    isPending : boolean,
    error : string,
  }

  
  const mapStateToProps = (state:RootState):IStateToProps => {
    return {
      searchfield: state.searchRobots.searchField,
      robots : state.requestUsers.robots,
      isPending : state.requestUsers.isPending,
      error : state.requestUsers.error,
    }
  }

  const mapDispatchToProps =  {
    fetchUsers
  }

  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);