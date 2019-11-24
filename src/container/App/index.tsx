import { connect } from 'react-redux';
import { setSearchField, fetchUsers } from '../../Actions/actions';
import { Robot } from '../../Interfaces';
import App from './App'
import { RootState } from '../../Reducers';


interface IStateToProps {
    searchfield: string,
    robots : Robot[],
    isPending : boolean,
    error : string,
  }

interface IDisptchToProps {
    onSearchChange : (text:string) => void,
    onFetchUser : () => void,
  }
  
  const mapStateToProps = (state:RootState):IStateToProps => {
    console.warn('state..', state)
    return {
      searchfield: state.searchRobots.searchField,
      robots : state.requestUsers.robots,
      isPending : state.requestUsers.isPending,
      error : state.requestUsers.error,
    }
  }
  
  const mapDispatchToProps = (dispatch:any):IDisptchToProps  => {
    return {
      onSearchChange : (text:string) => dispatch(setSearchField(text)),
      onFetchUser : () => fetchUsers(),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);