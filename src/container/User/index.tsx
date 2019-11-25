import { connect } from 'react-redux';
import { Robot } from '../../Interfaces';
import User from './User'
import { RootState } from '../../Reducers';


interface IStateToProps {
   users:Robot[]
  }
  const mapStateToProps = (state:RootState):IStateToProps => {
    console.warn('users states', state);
    return{
        users: state.requestUsers.robots
    } 
  }
 
  export default connect(mapStateToProps, null)(User);